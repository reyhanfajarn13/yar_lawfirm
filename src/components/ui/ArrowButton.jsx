import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ArrowButton({ direction = 'right', onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`w-10 h-10 border border-black flex items-center justify-center
                 hover:bg-black hover:text-white transition-colors cursor-pointer ${className}`}
    >
      {direction === 'left' ? (
        <ChevronLeft className="w-5 h-5" />
      ) : (
        <ChevronRight className="w-5 h-5" />
      )}
    </button>
  )
}
