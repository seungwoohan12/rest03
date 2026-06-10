// ============================================================
// 사이트 전역 데이터 — 교육 회사 / 네비게이션 / 유튜브 영상
// ============================================================

export const company = {
  name:      'AILearn',
  nameKo:    '에이아이런',
  fullName:  'AILearn Education Center',
  tagline:   'AI 시대를 앞서가는 온라인 교육',
  copyright: '© 2026 AILearn Education Center. All rights reserved.',
  intro: [
    'AILearn은 AI 기초부터 실전 활용까지 체계적인 온라인 강의를 제공하는 AI 교육 전문 기관입니다.',
    '인공지능의 핵심 원리를 이해하고 실생활에 적용하는 능력을 키우는 AI 리터러시 교육을 통해, 누구나 AI 시대를 자신 있게 준비할 수 있도록 돕습니다.',
  ],
  contact: {
    address:  '서울특별시 강남구 테헤란로 123, AI타워 8층',
    tel:      '02-1234-5678',
    email:    'edu@ailearn.co.kr',
    hours:    '평일 09:00 ~ 18:00',
    kakao:    'AILearn 교육상담',
  },
  social: [
    { name: 'YouTube',   url: 'https://www.youtube.com', icon: 'yt' },
    { name: 'Instagram', url: 'https://www.instagram.com', icon: 'ig' },
  ],
  footerLinks: [
    { label: '이용약관',          to: '/terms' },
    { label: '개인정보처리방침',  to: '/privacy', strong: true },
    { label: '문의하기',          to: '/contact' },
  ],
}

// ── GNB 메뉴 ────────────────────────────────────────────────
export const nav = [
  {
    label: '회사소개',
    to: '/about/intro',
    children: [
      { label: '소개',       to: '/about/intro' },
      { label: '교육 철학',  to: '/about/philosophy' },
      { label: '강사진',     to: '/about/instructors' },
      { label: '연혁',       to: '/about/history' },
    ],
  },
  {
    label: 'AI 관련 영상',
    to: '/videos/ai-related',
    children: [
      { label: '전체',         to: '/videos/ai-related' },
      { label: 'AI 기초',     to: '/videos/ai-related?sub=ai-basics' },
      { label: 'AI 도구 활용', to: '/videos/ai-related?sub=ai-tools' },
      { label: 'AI 트렌드',   to: '/videos/ai-related?sub=ai-trends' },
    ],
  },
  {
    label: 'AI 리터러시',
    to: '/videos/ai-literacy',
    children: [
      { label: '전체',       to: '/videos/ai-literacy' },
      { label: 'AI 이해',   to: '/videos/ai-literacy?sub=ai-understanding' },
      { label: '데이터 사고', to: '/videos/ai-literacy?sub=data-thinking' },
      { label: 'AI 윤리',   to: '/videos/ai-literacy?sub=ai-ethics' },
    ],
  },
  {
    label: '공지사항',
    to: '/notice',
    children: [
      { label: '공지사항',  to: '/notice' },
      { label: '이벤트',   to: '/events' },
    ],
  },
  {
    label: '문의하기',
    to: '/contact',
    children: [
      { label: '문의하기', to: '/contact' },
      { label: 'FAQ',      to: '/faq' },
    ],
  },
]

// ── 영상 카테고리 ────────────────────────────────────────────
export const videoCategories = [
  {
    key:   'ai-related',
    label: 'AI 관련 영상',
    title: 'AI 관련 영상',
    desc:  'AI 기초 개념부터 최신 도구 활용, 트렌드까지 체계적으로 배웁니다.',
    slug:  'ai-related',
  },
  {
    key:   'ai-literacy',
    label: 'AI 리터러시',
    title: 'AI 리터러시',
    desc:  'AI를 올바르게 이해하고 비판적으로 사고하는 역량을 기릅니다.',
    slug:  'ai-literacy',
  },
]

export const videoSubCategories = {
  'ai-related': [
    { key: 'all',       label: '전체' },
    { key: 'ai-basics', label: 'AI 기초' },
    { key: 'ai-tools',  label: 'AI 도구 활용' },
    { key: 'ai-trends', label: 'AI 트렌드' },
  ],
  'ai-literacy': [
    { key: 'all',              label: '전체' },
    { key: 'ai-understanding', label: 'AI 이해' },
    { key: 'data-thinking',    label: '데이터 사고' },
    { key: 'ai-ethics',        label: 'AI 윤리' },
  ],
}

// ── 유튜브 동영상 목록 ─────────────────────────────────────
// youtubeId: 유튜브 영상 고유 ID를 입력하세요.
//   예) https://youtu.be/ABC123XYZ → youtubeId: 'ABC123XYZ'
//   비공개 영상은 임베드가 되지 않으므로 '링크 공개(Unlisted)' 설정을 권장합니다.
export const videos = [
  // ── AI 관련 영상 ──
  {
    id:           'v01',
    youtubeId:    'zjkBMFhNj_g',
    title:        'AI란 무엇인가? 인공지능의 기초 개념',
    desc:         'ChatGPT, 이미지 생성 AI 등 다양한 인공지능 기술의 기본 원리와 역사를 쉽고 체계적으로 설명합니다.',
    category:     'ai-related',
    subCategory:  'ai-basics',
    subCategoryLabel: 'AI 기초',
    duration:     '23:45',
    uploadDate:   '2026.01.15',
  },
  {
    id:           'v02',
    youtubeId:    'aircAruvnKk',
    title:        '머신러닝과 딥러닝의 차이 완벽 이해',
    desc:         '머신러닝과 딥러닝의 개념적 차이를 시각적 예시와 함께 비교하고, 실제 활용 사례를 살펴봅니다.',
    category:     'ai-related',
    subCategory:  'ai-basics',
    subCategoryLabel: 'AI 기초',
    duration:     '18:30',
    uploadDate:   '2026.01.22',
  },
  {
    id:           'v03',
    youtubeId:    'e5xKayCBOeU',
    title:        'ChatGPT 프롬프트 작성법 마스터하기',
    desc:         '효과적인 프롬프트 설계 원칙과 실전 예제를 통해 ChatGPT를 업무와 학습에 최대한 활용하는 방법을 배웁니다.',
    category:     'ai-related',
    subCategory:  'ai-tools',
    subCategoryLabel: 'AI 도구 활용',
    duration:     '31:12',
    uploadDate:   '2026.02.05',
  },
  {
    id:           'v04',
    youtubeId:    'Ilg3gGewQ5U',
    title:        'AI 이미지 생성: Midjourney & DALL-E 실습',
    desc:         'Midjourney와 DALL-E를 활용하여 고품질 이미지를 생성하는 방법을 단계별로 실습합니다.',
    category:     'ai-related',
    subCategory:  'ai-tools',
    subCategoryLabel: 'AI 도구 활용',
    duration:     '27:08',
    uploadDate:   '2026.02.18',
  },
  {
    id:           'v05',
    youtubeId:    'kCc8FmEb1nY',
    title:        '2026 AI 트렌드: 주목해야 할 핵심 기술',
    desc:         '멀티모달 AI, AI 에이전트, 엣지 AI 등 2026년 주목해야 할 AI 기술 트렌드를 심층 분석합니다.',
    category:     'ai-related',
    subCategory:  'ai-trends',
    subCategoryLabel: 'AI 트렌드',
    duration:     '35:55',
    uploadDate:   '2026.03.01',
  },
  {
    id:           'v06',
    youtubeId:    'wjZofJX0v4M',
    title:        '생성형 AI의 현재와 미래',
    desc:         '텍스트, 이미지, 음악, 영상 생성 AI의 현황을 정리하고 앞으로의 발전 방향을 전망합니다.',
    category:     'ai-related',
    subCategory:  'ai-trends',
    subCategoryLabel: 'AI 트렌드',
    duration:     '29:40',
    uploadDate:   '2026.03.15',
  },
  {
    id:           'v07',
    youtubeId:    'hd-MjW2do_M',
    title:        'GitHub Copilot으로 코딩 생산성 10배 높이기',
    desc:         'AI 코딩 도구 GitHub Copilot을 실무에 도입하는 방법과 효과적인 활용 팁을 알아봅니다.',
    category:     'ai-related',
    subCategory:  'ai-tools',
    subCategoryLabel: 'AI 도구 활용',
    duration:     '22:17',
    uploadDate:   '2026.03.28',
  },
  {
    id:           'v08',
    youtubeId:    'PaCmpygFfXo',
    title:        'LLM(대형 언어 모델)의 작동 원리',
    desc:         'GPT, Claude, Gemini 등 대형 언어 모델이 어떻게 언어를 이해하고 생성하는지 내부 구조를 분석합니다.',
    category:     'ai-related',
    subCategory:  'ai-basics',
    subCategoryLabel: 'AI 기초',
    duration:     '41:23',
    uploadDate:   '2026.04.10',
  },
  // ── AI 리터러시 ──
  {
    id:           'v09',
    youtubeId:    '3JluqTojuME',
    title:        'AI 시대의 미래 역량: 인간만이 할 수 있는 것',
    desc:         'AI가 대체할 수 없는 인간 고유의 창의성, 공감 능력, 비판적 사고의 중요성을 탐구합니다.',
    category:     'ai-literacy',
    subCategory:  'ai-understanding',
    subCategoryLabel: 'AI 이해',
    duration:     '26:50',
    uploadDate:   '2026.01.18',
  },
  {
    id:           'v10',
    youtubeId:    'R9OHn5ZF4Uo',
    title:        '알고리즘 편향성이란? 공정한 AI 만들기',
    desc:         '인공지능 시스템에 내재된 편향성의 원인과 사례를 분석하고, 공정한 AI를 위한 해결 방안을 모색합니다.',
    category:     'ai-literacy',
    subCategory:  'ai-ethics',
    subCategoryLabel: 'AI 윤리',
    duration:     '19:35',
    uploadDate:   '2026.02.01',
  },
  {
    id:           'v11',
    youtubeId:    'ufn_vMKB4JM',
    title:        '데이터 리터러시: 숫자를 비판적으로 읽는 법',
    desc:         '통계와 데이터를 올바르게 해석하고 잘못된 데이터 시각화에 속지 않는 데이터 사고력을 기릅니다.',
    category:     'ai-literacy',
    subCategory:  'data-thinking',
    subCategoryLabel: '데이터 사고',
    duration:     '24:42',
    uploadDate:   '2026.02.14',
  },
  {
    id:           'v12',
    youtubeId:    'yLpq15GRFBM',
    title:        'AI가 일자리에 미치는 영향 — 공존의 미래',
    desc:         'AI 자동화로 변화하는 직업 세계를 냉철하게 분석하고, AI와 함께 일하는 미래를 준비하는 방법을 제시합니다.',
    category:     'ai-literacy',
    subCategory:  'ai-understanding',
    subCategoryLabel: 'AI 이해',
    duration:     '33:18',
    uploadDate:   '2026.02.28',
  },
  {
    id:           'v13',
    youtubeId:    'qFbNgJSMb4s',
    title:        '딥페이크와 미디어 리터러시: 가짜 정보 판별하기',
    desc:         '딥페이크 기술의 원리와 위험성을 이해하고, 가짜 뉴스와 조작된 미디어를 식별하는 능력을 키웁니다.',
    category:     'ai-literacy',
    subCategory:  'ai-ethics',
    subCategoryLabel: 'AI 윤리',
    duration:     '21:05',
    uploadDate:   '2026.03.10',
  },
  {
    id:           'v14',
    youtubeId:    'aZ7pHkBOBNQ',
    title:        '빅데이터와 개인정보 보호: 나의 데이터를 지켜라',
    desc:         '디지털 시대에 개인 데이터가 어떻게 수집·활용되는지 알아보고, 자신의 프라이버시를 보호하는 방법을 배웁니다.',
    category:     'ai-literacy',
    subCategory:  'data-thinking',
    subCategoryLabel: '데이터 사고',
    duration:     '28:22',
    uploadDate:   '2026.03.25',
  },
  {
    id:           'v15',
    youtubeId:    'OjdIGeS6GmY',
    title:        'AI 윤리 원칙과 글로벌 사례 분석',
    desc:         'EU AI Act, 국내 AI 정책 등 전 세계 AI 윤리 기준을 비교하고 책임 있는 AI 사용의 중요성을 논의합니다.',
    category:     'ai-literacy',
    subCategory:  'ai-ethics',
    subCategoryLabel: 'AI 윤리',
    duration:     '38:47',
    uploadDate:   '2026.04.05',
  },
  {
    id:           'v16',
    youtubeId:    'Wb5y5jl0kFY',
    title:        'AI 시대의 창의적 사고: 인간의 상상력이 경쟁력',
    desc:         'AI 도구와 협력하여 창의력을 극대화하는 방법, 그리고 인간 고유의 창의적 역량을 발전시키는 전략을 탐구합니다.',
    category:     'ai-literacy',
    subCategory:  'ai-understanding',
    subCategoryLabel: 'AI 이해',
    duration:     '30:11',
    uploadDate:   '2026.04.20',
  },
]

// ── 홈 공지 ─────────────────────────────────────────────────
export const notices = [
  { id: 4, title: '2026년 AI 리터러시 여름 특강 신청 안내', date: '2026.06.01' },
  { id: 3, title: '[신규 강좌] AI 윤리와 사회 시리즈 오픈', date: '2026.05.20' },
  { id: 2, title: 'AILearn 유튜브 채널 구독자 1만 명 돌파 이벤트', date: '2026.05.10' },
  { id: 1, title: 'AILearn 사이트 오픈 기념 무료 강의 제공', date: '2026.04.28' },
]

// ── 강사진 ──────────────────────────────────────────────────
export const instructors = [
  {
    id: 'i01',
    name: '김민준',
    title: 'AI 연구소장 / AI 기초 담당',
    bio:   'KAIST AI 박사, 전 삼성리서치 AI 연구원. AI 기초부터 실전까지 10년 이상의 강의 경력.',
  },
  {
    id: 'i02',
    name: '이서연',
    title: '미디어 리터러시 전문가 / AI 리터러시 담당',
    bio:   '서울대 언론정보학 석사, AI 윤리 및 디지털 미디어 리터러시 교육 전문가.',
  },
  {
    id: 'i03',
    name: '박준혁',
    title: '데이터 사이언티스트 / AI 도구 활용 담당',
    bio:   'Stanford 데이터사이언스 석사, 현 AI 스타트업 CTO. 실무 중심의 AI 도구 활용 강의 전문.',
  },
]
