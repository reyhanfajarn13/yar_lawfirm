import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import PracticeAreasPage from './pages/PracticeAreasPage'
import PracticeAreaDetailPage from './pages/PracticeAreaDetailPage'
import AttorneysPage from './pages/AttorneysPage'
import AttorneyDetailPage from './pages/AttorneyDetailPage'
import BlogPage from './pages/BlogPage'
import BlogDetailPage from './pages/BlogDetailPage'
import FloatingWhatsAppButton from './components/ui/FloatingWhatsAppButton'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/practice-areas" element={<PracticeAreasPage />} />
        <Route path="/practice-areas/:slug" element={<PracticeAreaDetailPage />} />
        <Route path="/attorneys" element={<AttorneysPage />} />
        <Route path="/attorneys/:slug" element={<AttorneyDetailPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
      </Routes>
      <FloatingWhatsAppButton />
    </BrowserRouter>
  )
}
