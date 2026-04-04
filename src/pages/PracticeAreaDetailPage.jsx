import { useParams } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

export default function PracticeAreaDetailPage() {
  const { slug } = useParams()

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-400">Practice Area Detail — Coming Soon</h1>
          <p className="text-muted mt-2">Slug: {slug}</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
