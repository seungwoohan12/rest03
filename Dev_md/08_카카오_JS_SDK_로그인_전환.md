# 08. 카카오 로그인 — JS SDK + signInWithIdToken 방식으로 전환

작업일: 2026-06-10

## 배경

개발일지 #07에서 `supabase.auth.signInWithOAuth` (OAuth 리다이렉트) 방식으로 카카오 로그인을 구현했으나,
카카오 앱에 **보안 탭(Client Secret)이 없는 경우** Supabase 서버 측 검증이 실패하여 동작하지 않았음.

→ TODO로 예고한 대로 **Kakao JS SDK 팝업 + `signInWithIdToken`** 방식으로 전환.

---

## 변경 방식 비교

| 항목 | 이전 (#07) | 이번 (#08) |
|------|-----------|-----------|
| 인증 흐름 | Supabase OAuth 리다이렉트 | Kakao JS SDK 팝업 |
| 사용 함수 | `supabase.auth.signInWithOAuth` | `window.Kakao.Auth.login` + `supabase.auth.signInWithIdToken` |
| 카카오 키 | REST API 키 (Supabase 설정) | JavaScript 키 (프론트 초기화) |
| 페이지 이탈 | O (리다이렉트) | X (팝업, 현재 페이지 유지) |
| Client Secret 필요 | O | X |

---

## 1. index.html — Kakao JS SDK 추가

```html
<!-- Kakao JS SDK -->
<script
  src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
  integrity="sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2vxfAAD0eZxzCKakxg55G4"
  crossorigin="anonymous"
></script>
```

- CDN subresource integrity(SRI) 해시 포함하여 변조 방지
- `<head>` 내 폰트 로드 직전에 삽입

---

## 2. Login.jsx 변경

### SDK 초기화 (useEffect)

```jsx
const KAKAO_JS_KEY = '98a3eca294a2bf155dd7cc2bb16d56a9'

useEffect(() => {
  if (window.Kakao && !window.Kakao.isInitialized()) {
    window.Kakao.init(KAKAO_JS_KEY)
  }
}, [])
```

- 컴포넌트 마운트 시 1회 초기화
- `isInitialized()` 체크로 중복 초기화 방지

### 로그인 핸들러 교체

**이전** (`signInWithKakao` — 리다이렉트)
```jsx
async function signInWithKakao() {
  await supabase.auth.signInWithOAuth({
    provider: 'kakao',
    options: { redirectTo: 'https://seungwoohan12.github.io/rest03/' },
  })
}
```

**이후** (`handleKakaoLogin` — 팝업 + id_token)
```jsx
async function handleKakaoLogin() {
  setError('')
  setBusy(true)
  try {
    const authObj = await new Promise((resolve, reject) => {
      window.Kakao.Auth.login({
        scope: 'openid,profile_nickname',
        success: resolve,
        fail: reject,
      })
    })

    if (!authObj.id_token) {
      throw new Error('OpenID Connect가 비활성화 상태입니다. 카카오 개발자 콘솔 → 동의항목 → OpenID Connect ID 토큰을 활성화해주세요.')
    }

    const { error } = await supabase.auth.signInWithIdToken({
      provider: 'kakao',
      token: authObj.id_token,
    })
    if (error) throw error
    navigate('/')
  } catch (err) {
    setError(err.error_description || err.message || '카카오 로그인에 실패했습니다.')
  } finally {
    setBusy(false)
  }
}
```

- `scope: 'openid'` 필수 — OIDC id_token 발급 조건
- `id_token` 부재 시 사용자에게 활성화 방법 안내 메시지 표시
- 처리 중 버튼 비활성화(`disabled={busy}`) + 시각적 dimming(`disabled:opacity-60`)

### 카카오 개발자 콘솔 설정 (필수)

| 항목 | 설정값 |
|------|--------|
| 동의항목 → OpenID Connect ID 토큰 | **활성화** |
| 동의항목 → 닉네임 | 선택 동의 |
| 플랫폼 → 사이트 도메인 | `https://seungwoohan12.github.io` |

---

## 3. 에러 처리 흐름

```
팝업 열기
  └─ 사용자 취소 → fail callback → setError("카카오 로그인에 실패했습니다.")
  └─ 로그인 성공 → id_token 확인
       └─ id_token 없음 → OIDC 비활성화 안내 메시지
       └─ id_token 있음 → supabase.signInWithIdToken
            └─ Supabase 오류 → error.message 표시
            └─ 성공 → navigate('/')
```

---

## 4. 빌드 결과

```
✓ built in ~8s
```

---

## TODO

- [ ] 카카오 개발자 콘솔에서 OIDC 활성화 후 실제 팝업 로그인 테스트
- [ ] 로그인 성공 후 프로필(닉네임, 아바타) Supabase profiles 테이블에 upsert 처리
- [ ] 로그아웃 시 `window.Kakao.Auth.logout()` 연동 검토
