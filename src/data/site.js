// ============================================================
// 사이트 전역 데이터 — HANU Creative Studio
// ============================================================

export const company = {
  name:      'HANU',
  nameKo:    '하누',
  fullName:  'HANU Creative Studio',
  tagline:   '영상으로 이야기하는 크리에이티브 스튜디오',
  copyright: '© 2026 HANU Creative Studio. All rights reserved.',
  intro: [
    'HANU는 영상으로 이야기를 전달하는 크리에이티브 스튜디오입니다.',
    '인터뷰, 홍보 영상, 숏폼 콘텐츠까지 — 각 프로젝트의 고유한 이야기를 가장 효과적인 방식으로 담아냅니다. 브랜드와 사람 사이의 연결을 영상으로 만듭니다.',
  ],
  contact: {
    address:  '서울특별시',
    tel:      '',
    email:    'hsu235@gmail.com',
    hours:    '',
  },
  // ── 소셜 채널 ──────────────────────────────────────────────
  social: [
    {
      name:  'YouTube',
      url:   'https://www.youtube.com/@%EA%B5%AC%EC%86%8D99%EB%A7%88%EC%9D%BC',
      label: '유튜브 (구속99마일)',
      icon:  'yt',
    },
    {
      name:  'Instagram',
      url:   'https://www.instagram.com/yb_kimdawn/',
      label: '인스타그램 @yb_kimdawn',
      icon:  'ig',
    },
  ],
  footerLinks: [
    { label: '포트폴리오',  to: '/videos/yojeom' },
    { label: '문의하기',    to: '/contact' },
  ],
}

// ── GNB 메뉴 ────────────────────────────────────────────────
export const nav = [
  {
    label: 'HANU 소개',
    to: '/about/intro',
    children: [
      { label: '소개',       to: '/about/intro' },
      { label: '작업 철학',  to: '/about/philosophy' },
      { label: '멤버',       to: '/about/instructors' },
      { label: '연혁',       to: '/about/history' },
    ],
  },
  {
    label: '영상 포트폴리오',
    to: '/videos/yojeom',
    children: [
      { label: '요즘 것들의 돈버는 이야기', to: '/videos/yojeom' },
      { label: '서울청년센터 강북',         to: '/videos/gangbuk' },
      { label: 'AI 관련 영상',              to: '/videos/ai-related' },
      { label: 'AI 리터러시',               to: '/videos/ai-literacy' },
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
    key:        'yojeom',
    label:      '요즘 것들의 돈버는 이야기',
    shortLabel: '요즘 것들',
    title:      '요즘 것들의 돈버는 이야기',
    desc:       '젊은 창업가들의 리얼한 창업 스토리를 담은 인터뷰 다큐멘터리 시리즈. HANU 자체 기획·제작.',
    group:      'production',
  },
  {
    key:        'gangbuk',
    label:      '서울청년센터 강북',
    shortLabel: '서울청년센터',
    title:      '서울청년센터 강북',
    desc:       '서울청년센터 강북 클라이언트 의뢰 제작 — 공간 홍보, 오시는길, 지원사업 안내 영상.',
    group:      'production',
  },
  {
    key:        'ai-related',
    label:      'AI 관련 영상',
    shortLabel: 'AI 관련',
    title:      'AI 관련 영상',
    desc:       'AI 기초 개념부터 도구 활용법까지. HANU가 기획·제작한 AI 교육 콘텐츠 시리즈.',
    group:      'content',
  },
  {
    key:        'ai-literacy',
    label:      'AI 리터러시',
    shortLabel: 'AI 리터러시',
    title:      'AI 리터러시',
    desc:       'AI를 올바르게 이해하고 비판적으로 사고하는 역량을 기르는 영상 시리즈.',
    group:      'content',
  },
]

// ── 소분류 필터 ──────────────────────────────────────────────
export const videoSubCategories = {
  'yojeom': [
    { key: 'all', label: '전체' },
  ],
  'gangbuk': [
    { key: 'all',        label: '전체' },
    { key: 'space',      label: '공간 소개' },
    { key: 'directions', label: '오시는길' },
    { key: 'support',    label: '지원사업' },
  ],
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
export const videos = [

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 요즘 것들의 돈버는 이야기
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id:               'y01',
    youtubeId:        'PLACEHOLDER_y01',
    title:            '요즘 것들의 돈버는 이야기 — 양군 대표님',
    desc:             '직접 발로 뛰며 만들어 온 창업의 현실과 생존 전략. 양군 대표님의 솔직한 이야기.',
    category:         'yojeom',
    subCategory:      'all',
    subCategoryLabel: '창업 스토리',
    isShort:          false,
    duration:         '',
    uploadDate:       '2026.06.10',
  },
  {
    id:               'y02',
    youtubeId:        'PLACEHOLDER_y02',
    title:            '요즘 것들의 돈버는 이야기 — 규필름 대표님',
    desc:             '영상 제작 1인 창업부터 법인 설립까지. 규필름 대표님이 말하는 크리에이터 창업.',
    category:         'yojeom',
    subCategory:      'all',
    subCategoryLabel: '창업 스토리',
    isShort:          false,
    duration:         '',
    uploadDate:       '2026.06.10',
  },
  {
    id:               'y03',
    youtubeId:        'PLACEHOLDER_y03',
    title:            '요즘 것들의 돈버는 이야기 — 진현정 대표님',
    desc:             '20대에 회사를 차린다는 것의 의미. 진현정 대표님의 실패와 성공 이야기.',
    category:         'yojeom',
    subCategory:      'all',
    subCategoryLabel: '창업 스토리',
    isShort:          false,
    duration:         '',
    uploadDate:       '2026.06.10',
  },
  {
    id:               'y04',
    youtubeId:        'PLACEHOLDER_y04',
    title:            '요즘 것들의 돈버는 이야기 — 데이빗 대표님',
    desc:             '글로벌 시장을 목표로 한 스타트업 창업. 데이빗 대표님의 도전과 현재진행형 스토리.',
    category:         'yojeom',
    subCategory:      'all',
    subCategoryLabel: '창업 스토리',
    isShort:          false,
    duration:         '',
    uploadDate:       '2026.06.10',
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 서울청년센터 강북 제작 영상
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id:               'g01',
    youtubeId:        '8FrggFjnZHA',
    title:            '서울청년센터 강북 오시는길 (지하철)',
    desc:             '지하철을 이용해 서울청년센터 강북에 오시는 방법을 안내합니다.',
    category:         'gangbuk',
    subCategory:      'directions',
    subCategoryLabel: '오시는길',
    isShort:          false,
    duration:         '',
    uploadDate:       '2026.05.01',
    youtubeUrl:       'https://www.youtube.com/watch?v=8FrggFjnZHA',
  },
  {
    id:               'g02',
    youtubeId:        'wtbW5XsKZsI',
    title:            '서울청년센터 강북 공간 소개',
    desc:             '서울청년센터 강북의 다양한 공간과 시설을 소개합니다.',
    category:         'gangbuk',
    subCategory:      'space',
    subCategoryLabel: '공간 소개',
    isShort:          false,
    duration:         '',
    uploadDate:       '2026.05.01',
    youtubeUrl:       'https://www.youtube.com/watch?v=wtbW5XsKZsI',
  },
  {
    id:               'g03',
    youtubeId:        'pSA7mpii9hE',
    title:            '서울청년센터 강북 오시는길 (버스)',
    desc:             '버스를 이용해 서울청년센터 강북에 오시는 방법을 안내합니다.',
    category:         'gangbuk',
    subCategory:      'directions',
    subCategoryLabel: '오시는길',
    isShort:          true,
    duration:         '',
    uploadDate:       '2026.05.01',
    youtubeUrl:       'https://www.youtube.com/shorts/pSA7mpii9hE',
  },
  {
    id:               'g04',
    youtubeId:        'DzNxBUpiPvI',
    title:            '서울청년센터 강북 스터디룸 빌리는 방법',
    desc:             '서울청년센터 강북의 스터디룸 예약 방법을 단계별로 안내합니다.',
    category:         'gangbuk',
    subCategory:      'space',
    subCategoryLabel: '공간 소개',
    isShort:          true,
    duration:         '',
    uploadDate:       '2026.05.01',
    youtubeUrl:       'https://www.youtube.com/shorts/DzNxBUpiPvI',
  },
  {
    id:               'g05',
    youtubeId:        'x2pT8gZKo20',
    title:            '서울청년센터 강북 공간 소개 2',
    desc:             '서울청년센터 강북의 공간을 더 자세히 살펴봅니다.',
    category:         'gangbuk',
    subCategory:      'space',
    subCategoryLabel: '공간 소개',
    isShort:          true,
    duration:         '',
    uploadDate:       '2026.05.01',
    youtubeUrl:       'https://www.youtube.com/shorts/x2pT8gZKo20',
  },
  {
    id:               'g06',
    youtubeId:        '18-mkabkGxc',
    title:            '서울청년센터 강북 예비 소상공인 지원사업',
    desc:             '서울청년센터 강북 예비 소상공인 지원사업 신청 방법과 내용을 소개합니다.',
    category:         'gangbuk',
    subCategory:      'support',
    subCategoryLabel: '지원사업',
    isShort:          true,
    duration:         '',
    uploadDate:       '2026.05.01',
    youtubeUrl:       'https://www.youtube.com/shorts/18-mkabkGxc',
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // AI 관련 영상 (준비 중)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id:               'a01',
    youtubeId:        'PLACEHOLDER_a01',
    title:            'AI란 무엇인가? 인공지능의 기초 개념',
    desc:             'ChatGPT, 이미지 생성 AI 등 다양한 인공지능 기술의 기본 원리를 쉽게 설명합니다.',
    category:         'ai-related',
    subCategory:      'ai-basics',
    subCategoryLabel: 'AI 기초',
    isShort:          false,
    duration:         '',
    uploadDate:       '준비 중',
  },
  {
    id:               'a02',
    youtubeId:        'PLACEHOLDER_a02',
    title:            '머신러닝과 딥러닝의 차이 완벽 이해',
    desc:             '머신러닝과 딥러닝의 개념적 차이를 시각적 예시와 함께 비교합니다.',
    category:         'ai-related',
    subCategory:      'ai-basics',
    subCategoryLabel: 'AI 기초',
    isShort:          false,
    duration:         '',
    uploadDate:       '준비 중',
  },
  {
    id:               'a03',
    youtubeId:        'PLACEHOLDER_a03',
    title:            'ChatGPT 프롬프트 작성법 마스터하기',
    desc:             '효과적인 프롬프트 설계 원칙과 실전 예제로 ChatGPT를 최대 활용하는 방법.',
    category:         'ai-related',
    subCategory:      'ai-tools',
    subCategoryLabel: 'AI 도구 활용',
    isShort:          false,
    duration:         '',
    uploadDate:       '준비 중',
  },
  {
    id:               'a04',
    youtubeId:        'PLACEHOLDER_a04',
    title:            '2026 AI 트렌드: 주목해야 할 핵심 기술',
    desc:             '멀티모달 AI, AI 에이전트 등 2026년 주목해야 할 AI 기술 트렌드 분석.',
    category:         'ai-related',
    subCategory:      'ai-trends',
    subCategoryLabel: 'AI 트렌드',
    isShort:          false,
    duration:         '',
    uploadDate:       '준비 중',
  },
  {
    id:               'l01',
    youtubeId:        'PLACEHOLDER_l01',
    title:            'AI 시대의 미래 역량: 인간만이 할 수 있는 것',
    desc:             'AI가 대체할 수 없는 인간 고유의 창의성, 공감 능력, 비판적 사고의 중요성.',
    category:         'ai-literacy',
    subCategory:      'ai-understanding',
    subCategoryLabel: 'AI 이해',
    isShort:          false,
    duration:         '',
    uploadDate:       '준비 중',
  },
  {
    id:               'l02',
    youtubeId:        'PLACEHOLDER_l02',
    title:            '알고리즘 편향성이란? 공정한 AI 만들기',
    desc:             '인공지능 시스템에 내재된 편향성의 원인과 사례를 분석합니다.',
    category:         'ai-literacy',
    subCategory:      'ai-ethics',
    subCategoryLabel: 'AI 윤리',
    isShort:          false,
    duration:         '',
    uploadDate:       '준비 중',
  },
  {
    id:               'l03',
    youtubeId:        'PLACEHOLDER_l03',
    title:            '데이터 리터러시: 숫자를 비판적으로 읽는 법',
    desc:             '통계와 데이터를 올바르게 해석하고 잘못된 시각화에 속지 않는 사고력.',
    category:         'ai-literacy',
    subCategory:      'data-thinking',
    subCategoryLabel: '데이터 사고',
    isShort:          false,
    duration:         '',
    uploadDate:       '준비 중',
  },
  {
    id:               'l04',
    youtubeId:        'PLACEHOLDER_l04',
    title:            'AI 윤리 원칙과 글로벌 사례 분석',
    desc:             'EU AI Act, 국내 AI 정책 등 전 세계 AI 윤리 기준을 비교합니다.',
    category:         'ai-literacy',
    subCategory:      'ai-ethics',
    subCategoryLabel: 'AI 윤리',
    isShort:          false,
    duration:         '',
    uploadDate:       '준비 중',
  },
]

// ── 홈 공지 ─────────────────────────────────────────────────
export const notices = [
  { id: 4, title: '서울청년센터 강북 영상 제작 완료 — 포트폴리오 업데이트', date: '2026.06.01' },
  { id: 3, title: '요즘 것들의 돈버는 이야기 시리즈 제작 착수',            date: '2026.05.20' },
  { id: 2, title: 'HANU 포트폴리오 사이트 오픈',                           date: '2026.05.10' },
  { id: 1, title: '영상 제작 의뢰 문의를 받습니다',                        date: '2026.04.28' },
]

// ── 멤버 ────────────────────────────────────────────────────
export const instructors = [
  {
    id:    'm01',
    name:  'Director',
    title: '디렉터 / 기획·촬영·편집',
    bio:   '기획부터 촬영, 편집까지 전 과정을 담당합니다. 브랜드의 이야기를 가장 효과적인 영상으로 전달합니다.',
  },
]