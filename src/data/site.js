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
  },
  // ── 소셜 채널 ──────────────────────────────────────────────
  social: [
    {
      name: 'YouTube',
      url:  'https://www.youtube.com/@%EA%B5%AC%EC%86%8D99%EB%A7%88%EC%9D%BC',
      label: '유튜브 (구속99마일)',
      icon: 'yt',
    },
    {
      name: 'Instagram',
      url:  'https://www.instagram.com/yb_kimdawn/',
      label: '인스타그램 @yb_kimdawn',
      icon: 'ig',
    },
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
    label: '제작 영상',
    to: '/videos/yojeom',
    children: [
      { label: '요즘 것들의 돈버는 이야기', to: '/videos/yojeom' },
      { label: '서울청년센터 강북',         to: '/videos/gangbuk' },
    ],
  },
  {
    label: 'AI 교육 영상',
    to: '/videos/ai-related',
    children: [
      { label: 'AI 관련 영상', to: '/videos/ai-related' },
      { label: 'AI 리터러시',  to: '/videos/ai-literacy' },
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
// group: 'production' | 'ai'  → 동일 그룹 카테고리끼리 탭으로 묶음
export const videoCategories = [
  {
    key:   'yojeom',
    label: '요즘 것들의 돈버는 이야기',
    shortLabel: '요즘 것들',
    title: '요즘 것들의 돈버는 이야기',
    desc:  '젊은 창업가들의 생생한 창업 스토리와 비즈니스 인사이트를 담은 인터뷰 시리즈입니다.',
    group: 'production',
  },
  {
    key:   'gangbuk',
    label: '서울청년센터 강북',
    shortLabel: '서울청년센터 강북',
    title: '서울청년센터 강북',
    desc:  '서울청년센터 강북의 공간 소개, 오시는 길, 지원사업 안내 영상 시리즈입니다.',
    group: 'production',
  },
  {
    key:   'ai-related',
    label: 'AI 관련 영상',
    shortLabel: 'AI 관련',
    title: 'AI 관련 영상',
    desc:  'AI 기초 개념부터 최신 도구 활용, 트렌드까지 체계적으로 배웁니다.',
    group: 'ai',
  },
  {
    key:   'ai-literacy',
    label: 'AI 리터러시',
    shortLabel: 'AI 리터러시',
    title: 'AI 리터러시',
    desc:  'AI를 올바르게 이해하고 비판적으로 사고하는 역량을 기릅니다.',
    group: 'ai',
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
// youtubeId: 유튜브 영상 고유 ID
//   일반 영상: https://youtu.be/ID  →  ID 부분
//   Shorts:   https://youtube.com/shorts/ID  →  ID 부분 (isShort: true 설정)
//   비공개 영상 비권장 — 링크 공개(Unlisted) 설정 영상만 임베드 가능
export const videos = [

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 요즘 것들의 돈버는 이야기
  // youtubeId: 실제 업로드 후 교체 필요
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id:               'y01',
    youtubeId:        'PLACEHOLDER_y01',
    title:            '요즘 것들의 돈버는 이야기 — 양군 대표님',
    desc:             '직접 발로 뛰며 만들어 온 창업의 현실과 생존 전략, 그리고 앞으로의 꿈까지. 양군 대표님의 솔직한 이야기를 들어봅니다.',
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
    desc:             '영상 제작 1인 창업부터 법인 설립까지. 규필름 대표님이 말하는 크리에이터 창업의 A to Z.',
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
    desc:             '20대에 회사를 차린다는 것의 의미. 진현정 대표님이 경험한 실패와 성공의 이야기.',
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
    desc:             '서울청년센터 강북의 다양한 공간과 시설을 소개합니다. 스터디룸, 커뮤니티홀, 창업지원 공간을 확인해보세요.',
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
    desc:             '서울청년센터 강북의 스터디룸 예약 방법을 단계별로 알려드립니다.',
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
    title:            '서울청년센터 강북 예비 소상공인 지원사업 소개',
    desc:             '서울청년센터 강북에서 운영하는 예비 소상공인 지원사업을 소개합니다. 신청 방법과 지원 내용을 확인하세요.',
    category:         'gangbuk',
    subCategory:      'support',
    subCategoryLabel: '지원사업',
    isShort:          true,
    duration:         '',
    uploadDate:       '2026.05.01',
    youtubeUrl:       'https://www.youtube.com/shorts/18-mkabkGxc',
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // AI 관련 영상 (준비 중 — youtubeId 교체 필요)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id:               'a01',
    youtubeId:        'PLACEHOLDER_a01',
    title:            'AI란 무엇인가? 인공지능의 기초 개념',
    desc:             'ChatGPT, 이미지 생성 AI 등 다양한 인공지능 기술의 기본 원리와 역사를 쉽고 체계적으로 설명합니다.',
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
    desc:             '머신러닝과 딥러닝의 개념적 차이를 시각적 예시와 함께 비교하고, 실제 활용 사례를 살펴봅니다.',
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
    desc:             '효과적인 프롬프트 설계 원칙과 실전 예제를 통해 ChatGPT를 업무와 학습에 최대한 활용하는 방법을 배웁니다.',
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
    desc:             '멀티모달 AI, AI 에이전트, 엣지 AI 등 2026년 주목해야 할 AI 기술 트렌드를 심층 분석합니다.',
    category:         'ai-related',
    subCategory:      'ai-trends',
    subCategoryLabel: 'AI 트렌드',
    isShort:          false,
    duration:         '',
    uploadDate:       '준비 중',
  },
  // AI 리터러시 (준비 중)
  {
    id:               'l01',
    youtubeId:        'PLACEHOLDER_l01',
    title:            'AI 시대의 미래 역량: 인간만이 할 수 있는 것',
    desc:             'AI가 대체할 수 없는 인간 고유의 창의성, 공감 능력, 비판적 사고의 중요성을 탐구합니다.',
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
    desc:             '인공지능 시스템에 내재된 편향성의 원인과 사례를 분석하고, 공정한 AI를 위한 해결 방안을 모색합니다.',
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
    desc:             '통계와 데이터를 올바르게 해석하고 잘못된 데이터 시각화에 속지 않는 데이터 사고력을 기릅니다.',
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
    desc:             'EU AI Act, 국내 AI 정책 등 전 세계 AI 윤리 기준을 비교하고 책임 있는 AI 사용의 중요성을 논의합니다.',
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
  { id: 4, title: '서울청년센터 강북 예비 소상공인 지원사업 참가자 모집', date: '2026.06.01' },
  { id: 3, title: '[신규] 요즘 것들의 돈버는 이야기 시리즈 공개', date: '2026.05.20' },
  { id: 2, title: 'AI 리터러시 강의 시리즈 준비 중', date: '2026.05.10' },
  { id: 1, title: 'AILearn 사이트 오픈 기념 안내', date: '2026.04.28' },
]

// ── 강사진 ──────────────────────────────────────────────────
export const instructors = [
  {
    id:    'i01',
    name:  '김민준',
    title: 'AI 연구소장 / AI 기초 담당',
    bio:   'KAIST AI 박사, 전 삼성리서치 AI 연구원. AI 기초부터 실전까지 10년 이상의 강의 경력.',
  },
  {
    id:    'i02',
    name:  '이서연',
    title: '미디어 리터러시 전문가 / AI 리터러시 담당',
    bio:   '서울대 언론정보학 석사, AI 윤리 및 디지털 미디어 리터러시 교육 전문가.',
  },
  {
    id:    'i03',
    name:  '박준혁',
    title: '데이터 사이언티스트 / AI 도구 활용 담당',
    bio:   'Stanford 데이터사이언스 석사, 현 AI 스타트업 CTO. 실무 중심의 AI 도구 활용 강의 전문.',
  },
]
