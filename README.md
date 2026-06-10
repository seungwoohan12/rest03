# AILearn — AI 교육 온라인 플랫폼

**AILearn(에이아이런)** 은 AI 기초부터 AI 리터러시까지 유튜브 동영상 강의를 제공하는 온라인 교육 플랫폼입니다.

🌐 **배포 URL**: https://seungwoohan12.github.io/rest03/

## 주요 기능

- 🤖 **AI 관련 영상** — AI 기초 / AI 도구 활용 / AI 트렌드 주제별 분류
- 📚 **AI 리터러시** — AI 이해 / 데이터 사고 / AI 윤리 커리큘럼
- 🎬 **2×3 그리드 + 페이지네이션** — 페이지당 6개, 모달 유튜브 재생
- 🌙 **다크/라이트 모드** — OS 설정 자동 감지, 토글 저장
- 📱 **모바일 최적화** — 반응형 레이아웃, 햄버거 메뉴

## 컬러 팔레트

| 컬러 | HEX | 용도 |
|------|-----|------|
| Deep Navy | `#0B1D3A` | 다크모드 배경 |
| Dark Blue | `#1E3A8A` | 주 브랜드 |
| Royal Blue | `#2563EB` | 버튼·CTA |
| Sky Cyan | `#0EA5E9` | 포인트·뱃지 |
| Ice White | `#F0F9FF` | 라이트 배경 |

## 기술 스택

- **React 18** + **Vite 5**
- **React Router 6** (HashRouter — GitHub Pages 호환)
- **Tailwind CSS 3** (`darkMode: 'class'`)
- 폰트: Pretendard (CDN)

## 구조

```
src/
├── context/
│   └── ThemeContext.jsx       # 다크/라이트 모드 Context
├── data/
│   └── site.js               # ★ 회사정보·메뉴·유튜브영상 데이터
├── components/
│   ├── Header.jsx             # GNB + 다크모드 토글 + 모바일 패널
│   ├── Footer.jsx             # 푸터 (소셜·메뉴·연락처)
│   ├── ScrollToTopButton.jsx  # 우측하단 맨위로 버튼
│   └── SubPageLayout.jsx      # 서브페이지 공통 레이아웃
└── pages/
    ├── Home.jsx               # 메인 (히어로·카테고리·최신영상·공지)
    ├── Videos.jsx             # 유튜브 갤러리 (2×3 그리드·페이지네이션·모달)
    ├── About.jsx              # 회사소개 (intro·philosophy·instructors·history)
    ├── Contact.jsx            # 문의하기 폼
    └── SimplePage.jsx         # 공지·FAQ 등 단순 페이지
```

## 페이지 / 라우트

| 메뉴 | 경로 |
|------|------|
| 홈 | `/` |
| 회사소개 | `/about/intro` `…/philosophy` `…/instructors` `…/history` |
| AI 관련 영상 | `/videos/ai-related?sub=ai-basics` `…ai-tools` `…ai-trends` |
| AI 리터러시 | `/videos/ai-literacy?sub=ai-understanding` `…data-thinking` `…ai-ethics` |
| 문의하기 | `/contact` |

## 개발

```bash
npm install
npm run dev      # http://localhost:5173/rest03/
npm run build    # dist/
```

## 유튜브 영상 등록

`src/data/site.js`의 `videos` 배열에서 `youtubeId` 필드를 실제 영상 ID로 교체합니다.

```js
// https://youtu.be/ABC123XYZ → youtubeId: 'ABC123XYZ'
{ youtubeId: 'ABC123XYZ', title: '영상 제목', category: 'ai-related', ... }
```

> **링크 공개(Unlisted)** 로 설정된 영상은 임베드 재생 정상 동작합니다.  
> 비공개 영상은 임베드가 차단되므로 링크 공개 설정을 권장합니다.

## 배포

`main` 브랜치 push 시 GitHub Actions가 자동으로 빌드 후 GitHub Pages 배포합니다.

> 최초 1회: GitHub 저장소 **Settings → Pages → Source → GitHub Actions** 로 전환 필요

## 개발일지

- [01. 초기 템플릿 구축](Dev_md/01_초기_템플릿_구축.md) — 건설사 사이트 템플릿 (2026-06-08)
- [02. AI 교육 플랫폼 리뉴얼](Dev_md/02_AI교육플랫폼_리뉴얼.md) — 전면 재구성 (2026-06-10)
