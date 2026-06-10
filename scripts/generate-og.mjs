/**
 * OG Image Generator — sharp + SVG
 * 실행: node scripts/generate-og.mjs
 * 출력: public/og-image.png (1200x630)
 *
 * 5-color palette:
 *  1. Deep Navy   #0B1D3A
 *  2. Dark Blue   #1E3A8A
 *  3. Royal Blue  #2563EB
 *  4. Sky Cyan    #0EA5E9
 *  5. Ice White   #F0F9FF
 */

import sharp from 'sharp'
import { mkdirSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const W = 1200
const H = 630

// ── 5-color palette ──────────────────────────────────────────
const C = {
  deepNavy:  '#0B1D3A',
  darkBlue:  '#1E3A8A',
  royalBlue: '#2563EB',
  skyCyan:   '#0EA5E9',
  iceWhite:  '#F0F9FF',
}

// ── SVG 템플릿 ───────────────────────────────────────────────
const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <!-- 배경 그라디언트: Deep Navy → Dark Blue → 중간색 -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="${C.deepNavy}"/>
      <stop offset="55%"  stop-color="${C.darkBlue}"/>
      <stop offset="100%" stop-color="#0D2456"/>
    </linearGradient>

    <!-- 포인트 그라디언트: Royal Blue → Sky Cyan -->
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="${C.royalBlue}"/>
      <stop offset="100%" stop-color="${C.skyCyan}"/>
    </linearGradient>

    <!-- AI 박스 그라디언트 -->
    <linearGradient id="aiBoxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="${C.royalBlue}"/>
      <stop offset="100%" stop-color="#1D4ED8"/>
    </linearGradient>

    <!-- 원형 장식 클립 -->
    <clipPath id="clip">
      <rect width="${W}" height="${H}"/>
    </clipPath>
  </defs>

  <!-- ── 배경 ───────────────────────────────────── -->
  <rect width="${W}" height="${H}" fill="url(#bgGrad)"/>

  <!-- ── 배경 장식 원 ─────────────────────────── -->
  <circle cx="${W + 120}" cy="-80" r="480" fill="${C.royalBlue}" opacity="0.10" clip-path="url(#clip)"/>
  <circle cx="-60" cy="${H + 60}" r="380" fill="${C.skyCyan}"  opacity="0.07" clip-path="url(#clip)"/>
  <circle cx="${W * 0.62}" cy="${H * 0.55}" r="220" fill="${C.darkBlue}" opacity="0.25" clip-path="url(#clip)"/>

  <!-- ── 하단 수평 그라디언트 띠 ────────────────── -->
  <rect x="0" y="${H - 6}" width="${W}" height="6" fill="url(#accentGrad)"/>

  <!-- ── 좌측 세로 포인트 바 ────────────────────── -->
  <rect x="64" y="88" width="7" height="454" rx="3.5" fill="url(#accentGrad)"/>

  <!-- ── AI 아이콘 박스 ─────────────────────────── -->
  <rect x="92" y="108" width="116" height="116" rx="20" fill="url(#aiBoxGrad)"/>
  <!-- AI 텍스트 -->
  <text
    x="150" y="185"
    text-anchor="middle"
    font-family="Arial Black, Arial, Helvetica, sans-serif"
    font-size="46" font-weight="900"
    fill="white" letter-spacing="1">AI</text>

  <!-- ── 회사명 ─────────────────────────────────── -->
  <text
    x="228" y="174"
    font-family="Arial, Helvetica, sans-serif"
    font-size="56" font-weight="800"
    fill="${C.iceWhite}" letter-spacing="2">AILearn</text>

  <!-- ── 구분선 ─────────────────────────────────── -->
  <rect x="92" y="255" width="650" height="2" rx="1" fill="${C.royalBlue}" opacity="0.55"/>

  <!-- ── 메인 태그라인 ────────────────────────────── -->
  <text
    x="92" y="312"
    font-family="Arial, Helvetica, sans-serif"
    font-size="27" font-weight="600"
    fill="${C.iceWhite}" opacity="0.92">AI-Powered Online Education Platform</text>

  <!-- ── 서브 설명 ──────────────────────────────── -->
  <text
    x="92" y="360"
    font-family="Arial, Helvetica, sans-serif"
    font-size="20"
    fill="#93C5FD" opacity="0.82">AI Basics  ·  AI Literacy  ·  Production Videos</text>

  <!-- ── 5색 팔레트 도트 ─────────────────────────── -->
  <!-- 1 Deep Navy -->
  <circle cx="92"  cy="${H - 72}" r="17" fill="${C.deepNavy}"  stroke="${C.iceWhite}" stroke-width="2.5"/>
  <!-- 2 Dark Blue -->
  <circle cx="134" cy="${H - 72}" r="17" fill="${C.darkBlue}"/>
  <!-- 3 Royal Blue -->
  <circle cx="176" cy="${H - 72}" r="17" fill="${C.royalBlue}"/>
  <!-- 4 Sky Cyan -->
  <circle cx="218" cy="${H - 72}" r="17" fill="${C.skyCyan}"/>
  <!-- 5 Ice White -->
  <circle cx="260" cy="${H - 72}" r="17" fill="${C.iceWhite}"/>

  <!-- 팔레트 레이블 -->
  <text x="92"  y="${H - 46}" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="${C.iceWhite}" opacity="0.45">Navy</text>
  <text x="134" y="${H - 46}" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="${C.iceWhite}" opacity="0.45">Blue</text>
  <text x="176" y="${H - 46}" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="${C.iceWhite}" opacity="0.45">Royal</text>
  <text x="218" y="${H - 46}" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="${C.iceWhite}" opacity="0.45">Sky</text>
  <text x="260" y="${H - 46}" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="${C.iceWhite}" opacity="0.45">Ice</text>

  <!-- ── URL ────────────────────────────────────── -->
  <text
    x="${W - 68}" y="${H - 52}"
    text-anchor="end"
    font-family="Arial, Helvetica, sans-serif"
    font-size="17"
    fill="${C.iceWhite}" opacity="0.38">seungwoohan12.github.io/rest03</text>
</svg>`

// ── 생성 실행 ────────────────────────────────────────────────
async function main() {
  const outDir  = path.join(__dirname, '..', 'public')
  const outFile = path.join(outDir, 'og-image.png')

  mkdirSync(outDir, { recursive: true })

  await sharp(Buffer.from(svg))
    .png({ quality: 95, compressionLevel: 6 })
    .toFile(outFile)

  console.log('OG image generated:', outFile)
  console.log('Dimensions: 1200 x 630 px')
}

main().catch((err) => {
  console.error('Failed to generate OG image:', err.message)
  process.exit(1)
})
