import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import PracticeAreasPage from './pages/PracticeAreasPage'
import PracticeAreaDetailPage from './pages/PracticeAreaDetailPage'
import AttorneysPage from './pages/AttorneysPage'
import AttorneyDetailPage from './pages/AttorneyDetailPage'
import BlogPage from './pages/BlogPage'
import FloatingWhatsAppButton from './components/ui/FloatingWhatsAppButton'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/practice-areas" element={<PracticeAreasPage />} />
        <Route path="/practice-areas/:slug" element={<PracticeAreaDetailPage />} />
        <Route path="/attorneys" element={<AttorneysPage />} />
        <Route path="/attorneys/:slug" element={<AttorneyDetailPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <FloatingWhatsAppButton />
    </BrowserRouter>
  )
}
