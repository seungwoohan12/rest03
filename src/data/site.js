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
    address: '서울특별시',
    tel:     '',
    email:   'hsu235@gmail.com',
    hours:   '',
  },
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
    { label: '포트폴리오', to: '/videos/yojeom' },
    { label: '게시판',     to: '/board' },
    { label: '문의하기',   to: '/contact' },
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
    ],
  },
  {
    label: '게시판',
    to: '/board',
    children: [
      { label: '자유 게시판', to: '/board' },
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
}

// ── 유튜브 동영상 목록 ─────────────────────────────────────
// youtubeId: 유튜브 영상 고유 ID
// startTime: 영상 시작 초(sec) — embed에 &start=N 으로 적용
export const videos = [

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 요즘 것들의 돈버는 이야기
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id:               'y01',
    youtubeId:        'fcxRdE5IZvk',
    startTime:        19,
    title:            '요즘 것들의 돈버는 이야기 — 양군 대표님',
    desc:             '직접 발로 뛰며 만들어 온 창업의 현실과 생존 전략. 양군 대표님의 솔직한 이야기.',
    category:         'yojeom',
    subCategory:      'all',
    subCategoryLabel: '창업 스토리',
    isShort:          false,
    duration:         '',
    uploadDate:       '2026.06.10',
    youtubeUrl:       'https://www.youtube.com/watch?v=fcxRdE5IZvk&t=19s',
  },
  {
    id:               'y02',
    youtubeId:        'UWvLaO6N3W4',
    startTime:        18,
    title:            '요즘 것들의 돈버는 이야기 — 규필름 대표님',
    desc:             '영상 제작 1인 창업부터 법인 설립까지. 규필름 대표님이 말하는 크리에이터 창업.',
    category:         'yojeom',
    subCategory:      'all',
    subCategoryLabel: '창업 스토리',
    isShort:          false,
    duration:         '',
    uploadDate:       '2026.06.10',
    youtubeUrl:       'https://www.youtube.com/watch?v=UWvLaO6N3W4&t=18s',
  },
  {
    id:               'y03',
    youtubeId:        'avqHH8FiazE',
    startTime:        75,
    title:            '요즘 것들의 돈버는 이야기 — 진현정 대표님',
    desc:             '20대에 회사를 차린다는 것의 의미. 진현정 대표님의 실패와 성공 이야기.',
    category:         'yojeom',
    subCategory:      'all',
    subCategoryLabel: '창업 스토리',
    isShort:          false,
    duration:         '',
    uploadDate:       '2026.06.10',
    youtubeUrl:       'https://www.youtube.com/watch?v=avqHH8FiazE&t=75s',
  },
  {
    id:               'y04',
    youtubeId:        'u0nfkiqf-Mw',
    startTime:        39,
    title:            '요즘 것들의 돈버는 이야기 — 데이빗 대표님',
    desc:             '글로벌 시장을 목표로 한 스타트업 창업. 데이빗 대표님의 도전과 현재진행형 스토리.',
    category:         'yojeom',
    subCategory:      'all',
    subCategoryLabel: '창업 스토리',
    isShort:          false,
    duration:         '',
    uploadDate:       '2026.06.10',
    youtubeUrl:       'https://www.youtube.com/watch?v=u0nfkiqf-Mw&t=39s',
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
]

// ── 홈 공지 ─────────────────────────────────────────────────
export const notices = [
  { id: 4, title: '서울청년센터 강북 영상 제작 완료 — 포트폴리오 업데이트', date: '2026.06.01' },
  { id: 3, title: '요즘 것들의 돈버는 이야기 시리즈 공개',                  date: '2026.05.20' },
  { id: 2, title: 'HANU 포트폴리오 사이트 오픈',                            date: '2026.05.10' },
  { id: 1, title: '영상 제작 의뢰 문의를 받습니다',                         date: '2026.04.28' },
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