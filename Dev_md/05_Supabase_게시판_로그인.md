# 05. Supabase 연동 — 로그인 + 자유 게시판

작업일: 2026-06-10

## 목표

1. Supabase Auth — 이메일/비밀번호 로그인 · 회원가입
2. 자유 게시판 (CRUD) — 로그인한 사용자 모두 작성 가능
3. GNB에 게시판 메뉴 추가
4. 헤더에 로그인/로그아웃 UI 추가

---

## 1. 기술 스택 선택 이유

| 항목 | 선택 | 이유 |
|------|------|------|
| DB/Auth | Supabase | PostgreSQL + Auth + RLS 올인원, 무료 플랜 충분 |
| 인증 방식 | 이메일/비밀번호 | 설정 간단, 별도 OAuth 앱 불필요 |
| 회원가입 닉네임 | profiles 별도 테이블 | auth.users 직접 수정 불가, 공개 프로필 분리 권장 |
| 클라이언트 키 | anon public key (공개) | GitHub Pages 정적 배포 — RLS로 보안 처리 |

---

## 2. 데이터베이스 스키마

```
auth.users (Supabase 기본 테이블)
 └─ profiles (id → auth.users.id)
      └─ posts (user_id → profiles.id)
```

### profiles 테이블

| 컬럼 | 타입 | 설명 |
|------|------|------|
| id | uuid PK | auth.users.id 참조 |
| nickname | text | 화면 표시 이름 |
| created_at | timestamptz | 생성일시 |

### posts 테이블

| 컬럼 | 타입 | 설명 |
|------|------|------|
| id | bigint IDENTITY PK | 게시글 ID |
| user_id | uuid FK → profiles | 작성자 |
| title | text NOT NULL | 제목 |
| content | text NOT NULL | 본문 |
| created_at | timestamptz | 작성일시 |
| updated_at | timestamptz | 수정일시 |

### RLS 정책

| 테이블 | 작업 | 정책 |
|--------|------|------|
| profiles | SELECT | 전체 허용 |
| profiles | INSERT/UPDATE | auth.uid() = id |
| posts | SELECT | 전체 허용 (비로그인도 읽기 가능) |
| posts | INSERT | auth.uid() = user_id |
| posts | UPDATE/DELETE | auth.uid() = user_id |

---

## 3. 새로 추가된 파일

```
src/
  lib/
    supabase.js          — Supabase 클라이언트 초기화
  context/
    AuthContext.jsx      — useAuth() 훅, AuthProvider
  pages/
    Login.jsx            — 로그인/회원가입 페이지
    Board.jsx            — 게시판 목록
    BoardDetail.jsx      — 게시글 상세 (수정·삭제 버튼)
    BoardWrite.jsx       — 글쓰기/수정 폼 (로그인 필요)
supabase/
  schema.sql             — DB 스키마 (Supabase SQL Editor에서 실행)
```

---

## 4. 수정된 파일

### src/App.jsx
- `AuthProvider` 로 전체 앱 감쌈
- `/login`, `/board`, `/board/write`, `/board/:id`, `/board/:id/edit` 라우트 추가

### src/data/site.js
- nav에 `게시판` 항목 추가 (`/board`)
- footerLinks에 `게시판` 추가

### src/components/Header.jsx
- `UserMenu` 컴포넌트 추가 (데스크탑 드롭다운)
  - 비로그인: "로그인" 아웃라인 버튼
  - 로그인: 닉네임 + 드롭다운 → 로그아웃
- 모바일 패널 하단에 로그인/로그아웃 섹션 추가

---

## 5. 주요 구현 포인트

### AuthContext

```jsx
// 앱 전체에서 useAuth()로 접근
const { user, profile, loading, signIn, signUp, signOut } = useAuth()
```

- `getUser()`로 초기 세션 복원 → `loading = false`
- `onAuthStateChange`로 탭 간 세션 동기화
- 로그인 시 `profiles` 테이블에서 닉네임 자동 로드

### 게시판 RLS 활용 패턴

```js
// 작성 — user_id를 클라이언트에서 넘김 (RLS가 검증)
supabase.from('posts').insert({ title, content, user_id: user.id })

// 수정/삭제 — 서버에서 auth.uid() = user_id 검증
supabase.from('posts').update({ title, content }).eq('id', id)
supabase.from('posts').delete().eq('id', id)
```

### 프로필 JOIN

```js
supabase
  .from('posts')
  .select('id, title, content, created_at, user_id, profiles(nickname)')
```

Supabase의 PostgREST 자동 JOIN으로 한 번의 쿼리에 닉네임 포함.

### 회원가입 자동 프로필 생성

```sql
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```

`signUp` 시 `metadata.nickname` → `profiles.nickname` 자동 저장.

---

## 6. 설정 방법 (Supabase 대시보드)

1. Supabase 대시보드 → SQL Editor
2. `supabase/schema.sql` 내용 붙여넣기 → 실행
3. Authentication → Email 공급자 활성화 확인 (기본 활성화)
4. (선택) Authentication → Email Templates 에서 가입 인증 메일 커스터마이징

---

## 7. 빌드 결과

```
✓ 93 modules transformed
CSS:  45.58 kB (gzip 7.98 kB)
JS:  450.22 kB (gzip 126.62 kB)  ← Supabase 라이브러리 포함
✓ built in 6.32s
```

JS 번들이 이전(220 kB)의 2배로 증가한 이유: `@supabase/supabase-js`(~150 kB gzip 제외)가 추가됨.
실제 전송량(gzip)은 126 kB로 수용 가능한 범위.

---

## TODO (후속)

- [ ] Supabase SQL Editor에서 `supabase/schema.sql` 실행
- [ ] Authentication → Email 공급자에서 "Confirm email" 옵션 확인
- [ ] (선택) 카카오 소셜 로그인 추가 — Kakao Developers 앱 등록 + Supabase OAuth 공급자 설정 필요
- [ ] 댓글 기능 추가
- [ ] 게시글 페이지네이션 (현재 전체 로드)
- [ ] 이미지 첨부 (Supabase Storage 활용 가능)
