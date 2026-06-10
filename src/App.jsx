import { Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { PaletteProvider } from './context/PaletteContext'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopButton from './components/ScrollToTopButton'

import Home    from './pages/Home'
import Videos  from './pages/Videos'
import About   from './pages/About'
import Contact from './pages/Contact'
import Simple  from './pages/SimplePage'

export default function App() {
  return (
    <ThemeProvider>
      <PaletteProvider>
        <div className="flex min-h-screen min-w-[320px] flex-col bg-white transition-colors duration-300 dark:bg-brand-deep">
          <ScrollToTop />
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/"          element={<Home />} />
              <Route path="/about"     element={<Navigate to="/about/intro" replace />} />
              <Route path="/about/:tab" element={<About />} />
              <Route path="/videos"    element={<Navigate to="/videos/yojeom" replace />} />
              <Route path="/videos/:category" element={<Videos />} />
              <Route path="/notice"    element={<Simple title="공지사항" />} />
              <Route path="/events"    element={<Simple title="이벤트" />} />
              <Route path="/contact"   element={<Contact />} />
              <Route path="/faq"       element={<Simple title="FAQ" />} />
              <Route path="/terms"     element={<Simple title="이용약관" />} />
              <Route path="/privacy"   element={<Simple title="개인정보처리방침" />} />
              <Route path="*"          element={<Simple title="페이지를 찾을 수 없습니다" />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTopButton />
        </div>
      </PaletteProvider>
    </ThemeProvider>
  )
}