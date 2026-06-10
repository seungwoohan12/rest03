# 04. HANU 리브랜딩 + 5색 팔레트 스위처 + 실영상 업데이트

작업일: 2026-06-10

## 목표

1. 배포 오류 수정 — GitHub Pages 빈 화면 해결
2. 사이트 전면 리브랜딩: AILearn 교육 플랫폼 → HANU 크리에이티브 스튜디오
3. 컬러 시스템 전환: 연한 하늘색 + 로열 블루 기반 5색 팔레트
4. 실시간 팔레트 전환 스위처 구현 (Header 배치)
5. 요즘 것들의 돈버는 이야기 실제 YouTube ID 반영
6. AI 교육 콘텐츠 완전 제거

---

## 1. GitHub Pages 배포 오류 수정

### 원인 분석

배포 후 사이트가 빈 화면으로 표시되는 문제가 발생했다.
`curl`로 응답을 확인한 결과:

```
src="/src/main.jsx"
```

Vite가 빌드한 `/rest03/assets/index-XXXXX.js`가 아닌 **소스 파일이 그대로 서빙**되고 있었다.

**근본 원인:** GitHub Pages 설정이 `Deploy from a branch (main)` 으로 되어 있어,
`dist/` 폴더가 아닌 main 브랜치 루트(소스 코드)를 직접 서빙하고 있었다.
기존 워크플로의 `actions/deploy-pages`는 Pages Source를 "GitHub Actions"로 설정해야만 동작한다.

### 해결 방법

**배포 워크플로 변경:** `actions/deploy-pages` → `peaceiris/actions-gh-pages@v4`

```yaml
# .github/workflows/deploy.yml
jobs:
  build-and-deploy:
    steps:
      - run: npm ci && npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          force_orphan: true
```

이 방식은 빌드된 `dist/` 폴더를 `gh-pages` 브랜치에 push한다.
GitHub Pages를 `gh-pages` 브랜치 서빙으로 설정하면 완성.

**수동 초기 배포:** Actions가 실행되기 전까지 브랜치가 없으므로,
로컬에서 임시 git 저장소를 만들어 gh-pages 브랜치에 직접 force push했다.

```powershell
$tmp = "$env:TEMP\ghpages_deploy"
Copy-Item -Recurse "F:\rest03\dist\*" $tmp
cd $tmp; git init; git checkout -b gh-pages
git add .; git commit -m "Deploy"
git remote add origin https://github.com/seungwoohan12/rest03.git
git push origin gh-pages --force
```

**GitHub Pages 설정:** Settings → Pages → Source: `gh-pages` 브랜치, `/(root)`

---

## 2. 사이트 전면 리브랜딩: AILearn → HANU

### 브랜드 전환 방향

| 항목 | 이전 (AILearn) | 변경 후 (HANU) |
|------|--------------|--------------|
| 컨셉 | AI 온라인 교육 플랫폼 | 크리에이티브 비디오 스튜디오 |
| 회사명 | AILearn 에이아이런 | HANU 하누 |
| 영문명 | AILearn Education Center | HANU Creative Studio |
| 태그라인 | AI 시대를 앞서가는 온라인 교육 | 영상으로 이야기하는 크리에이티브 스튜디오 |
| 로고 아이콘 | `AI` 박스 | `H` 박스 |
| Hero | "AI 시대를 앞서가는 교육" | "영상으로 이야기합니다" |
| 통계 | 온라인 강의수·수강 | 제작 영상·맞춤 제작 |

### 파일별 변경 내역

**`src/data/site.js`**
- `company` 정보 전면 교체 (HANU 브랜드)
- `nav`: 교육 메뉴 → HANU 소개 / 영상 포트폴리오 / 문의하기
- `videoCategories`: AI 관련·리터러시 카테고리 제거, 제작 영상 2개만 유지
- `instructors` → `멤버` 개념으로 전환

**`src/pages/Home.jsx`**
- Hero 슬라이드: 교육 카피 → 영상 제작사 카피
- Stats: 수강생·강의 → 제작 영상·클라이언트
- Categories 섹션 → Portfolio 섹션 (포트폴리오 2개 카드)
- MissionBand: "AI를 기회로" → "영상 하나가 이야기가 됩니다"
- CTA: AI 학습 → 포트폴리오 보기·제작 문의

**`src/pages/About.jsx`**
- 탭: 교육 철학 → 작업 철학 / 강사진 → 멤버
- 소개: AI 교육 기관 → 크리에이티브 스튜디오 포트폴리오
- 작업 철학 4가지: 스토리텔링 / 진정성 / 품질 / 협업
- 연혁: AILearn 교육 이력 → HANU 제작 이력

**`src/components/Header.jsx` / `Footer.jsx`**
- 로고 아이콘: `AI` → `H`

**`index.html`**
- `<title>`: HANU 브랜딩으로 전면 교체
- OG/Twitter 메타태그 전부 업데이트
- favicon SVG: `AI` 텍스트 → `H` 텍스트

---

## 3. 컬러 시스템 전환 — CSS 변수 기반 5팔레트

### 설계 목표

기존 Tailwind 정적 색상 → **CSS 변수 기반 동적 팔레트** 전환.
5종 팔레트를 런타임에 즉시 전환 가능하도록 구현.

### Tailwind CSS 변수 연동 방법

Tailwind 3는 `rgb(var(--x) / <alpha-value>)` 형식으로 CSS 변수를 사용하면
`bg-brand-royal/50` 같은 **opacity 변형**도 그대로 동작한다.

```js
// tailwind.config.js
brand: {
  royal: 'rgb(var(--brand-royal) / <alpha-value>)',
  sky:   'rgb(var(--brand-sky)   / <alpha-value>)',
  ...
}
```

```css
/* src/index.css — space-separated RGB (comma 없음, Tailwind 요구사항) */
:root {
  --brand-royal: 37 99 235;   /* #2563EB */
  --brand-sky:   125 211 252; /* #7DD3FC */
}
[data-palette="ocean"] {
  --brand-royal: 8 145 178;   /* #0891B2 */
  --brand-sky:   34 211 238;  /* #22D3EE */
}
```

### 5가지 팔레트

| # | ID | Royal | Sky | 컨셉 |
|---|-----|-------|-----|------|
| 1 | sky (기본) | #2563EB | #7DD3FC | 연한 하늘색 + 로열 블루 |
| 2 | ocean | #0891B2 | #22D3EE | 오션 청록 |
| 3 | mint | #059669 | #34D399 | 민트 그린 |
| 4 | violet | #7C3AED | #A78BFA | 바이올렛 |
| 5 | rose | #DB2777 | #F472B6 | 로즈 핑크 |

### 업데이트된 기본 팔레트 (Sky Blue)

| 변수 | HEX | 역할 |
|------|-----|------|
| `--brand-deep` | #082032 | 다크모드 최심 배경 |
| `--brand-navy` | #0F3460 | 다크 서피스 |
| `--brand-royal` | #2563EB | 주 액션·버튼 |
| `--brand-sky` | #7DD3FC | 포인트·뱃지 (연한 하늘색) |
| `--brand-ice-dark` | #BAE6FD | 라이트모드 구분선·배경 |

히어로 그라디언트도 새 팔레트에 맞게 업데이트:
```css
.hero-gradient {
  background: linear-gradient(135deg, #082032 0%, #0C4A6E 35%, #1D4ED8 70%, #7DD3FC 100%);
}
```

---

## 4. 팔레트 스위처 구현

### PaletteContext (`src/context/PaletteContext.jsx`)

```jsx
export function PaletteProvider({ children }) {
  const [paletteId, setPaletteId] = useState(
    () => localStorage.getItem('palette') || 'sky'
  )
  useEffect(() => {
    document.documentElement.setAttribute('data-palette', paletteId)
    localStorage.setItem('palette', paletteId)
  }, [paletteId])
  ...
}
```

- `data-palette` 속성을 `<html>` 루트에 설정 → CSS `[data-palette="X"]` 셀렉터가 변수 오버라이드
- 선택된 팔레트는 `localStorage`에 저장 → 새로고침 후에도 유지

### Header 스위처 UI

```
[다크모드 토글] | [구분선] | [● ● ● ● ●] | [구분선] | [문의하기]
```

- 5개 원형 버튼: `linear-gradient(135deg, royal 50%, sky 50%)` 으로 두 색을 동시 표현
- 선택된 팔레트: `ring-2 ring-white scale-125`로 강조
- 데스크탑: 헤더 인라인 배치 / 모바일: 슬라이드 패널 내 별도 섹션

---

## 5. 실제 YouTube ID 반영 및 AI 콘텐츠 제거

### 요즘 것들의 돈버는 이야기 — 실제 ID 적용

| # | 출연 | YouTube ID | 시작 시간 |
|---|------|-----------|----------|
| 01 | 양군 대표님 | `fcxRdE5IZvk` | 19초 |
| 02 | 규필름 대표님 | `UWvLaO6N3W4` | 18초 |
| 03 | 진현정 대표님 | `avqHH8FiazE` | 75초 |
| 04 | 데이빗 대표님 | `u0nfkiqf-Mw` | 39초 |

- `site.js`에 `startTime` 필드 추가
- `Videos.jsx` 모달 embed URL에 `&start=${video.startTime}` 파라미터 적용:
  ```
  https://www.youtube.com/embed/{ID}?autoplay=1&rel=0&modestbranding=1&start=19
  ```

### AI 교육 콘텐츠 완전 제거

- `videoCategories`: `ai-related`, `ai-literacy` 항목 삭제
- `videoSubCategories`: 관련 소분류 필터 삭제
- `videos`: `a01~a04`, `l01~l04` (8개 영상) 전체 삭제
- `nav`: "AI 교육 영상" 메뉴 항목 삭제
- `Videos.jsx`: AI 그룹 크로스 링크 제거 ("AI 교육 영상 →")
- `Home.jsx`: Portfolio 섹션에서 AI 카드 제거 (3 → 2개)
- `App.jsx`: `/videos` 기본 리다이렉트 `ai-related` → `yojeom`

---

## 6. 검증

- `npm run build` 성공 (46 modules, CSS 41.88 kB, JS 220.82 kB)
- 팔레트 전환: `data-palette` attribute 변경으로 CSS 변수 즉시 반영 확인
- 요즘 것들의 돈버는 이야기 4개 영상: YouTube 썸네일 정상 로드
- 영상 모달 오픈 시 지정된 시작 시간부터 자동 재생

---

## 배포 구조

```
main 브랜치 (소스) ──push──→ GitHub Actions (빌드)
                                    │
                              gh-pages 브랜치 (dist/)
                                    │
                          GitHub Pages (정적 서빙)
                                    │
                  https://seungwoohan12.github.io/rest03/
```

Actions가 main push 시 자동 빌드 후 gh-pages 브랜치 업데이트.

---

## TODO (후속)

- [ ] 요즘 것들의 돈버는 이야기 각 영상 실제 `duration` 값 입력
- [ ] OG 이미지 팔레트 반영 (현재 Sky Blue 고정)
- [ ] 카카오 공유 디버거에서 OG 이미지 확인
- [ ] 멤버 정보 실명 및 실제 소개 업데이트
- [ ] 연락처 정보 (전화, 주소) 업데이트