# HANU Creative Studio

**HANU(하누)** 는 영상으로 이야기를 전달하는 크리에이티브 스튜디오입니다.

🌐 **배포 URL**: https://seungwoohan12.github.io/rest03/

## 포트폴리오

- 🎬 **요즘 것들의 돈버는 이야기** — 젊은 창업가 인터뷰 다큐멘터리 시리즈 (자체 기획·제작)
- 🏢 **서울청년센터 강북** — 공간 홍보·오시는길·지원사업 안내 영상 (클라이언트 의뢰)

## 주요 기능

- 🎨 **5색 팔레트 스위처** — Sky / Ocean / Mint / Violet / Rose 실시간 전환 (헤더 내 배치)
- 🌙 **다크/라이트 모드** — OS 설정 자동 감지, 토글 저장
- 📱 **모바일 최적화** — 반응형 레이아웃, 햄버거 메뉴 + 모바일 팔레트 스위처
- 🎬 **2×3 그리드 + 페이지네이션** — 페이지당 6개, 모달 유튜브 재생 (시작 시간 지원)
- 📐 **YouTube Shorts 대응** — 세로형 영상 9:16 비율 처리

## 컬러 팔레트 시스템

| 팔레트 | Royal | Sky | 컨셉 |
|--------|-------|-----|------|
| Sky (기본) | #2563EB | #7DD3FC | 연한 하늘색 + 로열 블루 |
| Ocean | #0891B2 | #22D3EE | 오션 청록 |
| Mint | #059669 | #34D399 | 민트 그린 |
| Violet | #7C3AED | #A78BFA | 바이올렛 |
| Rose | #DB2777 | #F472B6 | 로즈 핑크 |

Tailwind 색상을 CSS 변수 (`rgb(var(--x) / <alpha-value>)`) 기반으로 구성하여
`data-palette` 속성 변경만으로 전체 색상이 실시간 전환됩니다.

## 기술 스택

- **React 18** + **Vite 5**
- **React Router 6** (HashRouter — GitHub Pages 호환)
- **Tailwind CSS 3** (`darkMode: 'class'`, CSS 변수 기반 팔레트)
- 폰트: Pretendard (CDN)

## 구조

```
src/
├── context/
│   ├── ThemeContext.jsx      # 다크/라이트 모드
│   └── PaletteContext.jsx    # ★ 5색 팔레트 전환
├── data/
│   └── site.js               # ★ 회사정보·메뉴·유튜브영상 데이터
├── components/
│   ├── Header.jsx             # GNB + 다크모드 토글 + 팔레트 스위처 + 모바일 패널
│   ├── Footer.jsx
│   ├── ScrollToTopButton.jsx
│   └── SubPageLayout.jsx
└── pages/
    ├── Home.jsx               # 메인 (히어로·포트폴리오·최근작업·미션·공지)
    ├── Videos.jsx             # 유튜브 갤러리 (2×3 그리드·페이지네이션·모달·Shorts)
    ├── About.jsx              # HANU 소개 (소개·작업철학·멤버·연혁)
    ├── Contact.jsx
    └── SimplePage.jsx
```

## 유튜브 영상 등록

`src/data/site.js`의 `videos` 배열에서 영상 데이터를 관리합니다.

```js
{
  youtubeId: 'fcxRdE5IZvk',   // https://youtu.be/fcxRdE5IZvk
  startTime: 19,               // 영상 시작 초(sec) — embed &start=19
  title: '요즘 것들의 돈버는 이야기 — 양군 대표님',
  category: 'yojeom',
  isShort: false,
}
```

## 개발

```bash
npm install
npm run dev    # http://localhost:5173/rest03/
npm run build  # dist/
```

## 배포 구조

`main` push → GitHub Actions 자동 빌드 → `gh-pages` 브랜치 업데이트 → GitHub Pages 서빙

Settings → Pages → Source: `gh-pages` 브랜치, `/(root)`

## 개발일지

- [01. 초기 템플릿 구축](Dev_md/01_초기_템플릿_구축.md)
- [02. AI 교육 플랫폼 리뉴얼](Dev_md/02_AI교육플랫폼_리뉴얼.md)
- [03. OG 이미지 + 실영상 업데이트](Dev_md/03_OG이미지_실영상_업데이트.md)
- [04. HANU 리브랜딩 + 5색 팔레트 스위처](Dev_md/04_HANU_리브랜딩_팔레트스위처.md)