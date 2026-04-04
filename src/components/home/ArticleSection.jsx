import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import { articles } from '../../data/articles'

function ArticleCard({ article, className = '' }) {
  return (
    <div className={`group cursor-pointer flex flex-col h-full ${className}`}>
      {article.image && (
        <div className="relative overflow-hidden rounded-lg flex-1 min-h-[200px]">
          <img
            src={article.image}
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      )}
      <div className={`${article.image ? 'mt-4' : 'flex flex-col justify-center h-full'}`}>
        <div className="flex items-center gap-2 text-sm text-muted mb-2">
          <span>{article.date}</span>
          <span>&middot;</span>
          <span>{article.category}</span>
        </div>
        <h3 className="text-lg font-semibold text-primary leading-snug mb-2 group-hover:underline italic">
          {article.title}
        </h3>
        <p className="text-sm text-secondary leading-relaxed">{article.excerpt}</p>
      </div>
    </div>
  )
}

export default function ArticleSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[auto_auto] gap-6">
          {/* Article 1 - top left (text only) */}
          <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-border pb-6 md:pb-0 md:pr-6">
            <ArticleCard article={articles[0]} />
          </div>

          {/* Article 2 - top right (large image, spans 2 rows) */}
          <div className="md:col-span-2 md:row-span-2">
            <ArticleCard article={articles[1]} className="h-full" />
          </div>

          {/* Article 3 & 4 - bottom left (2 small side by side) */}
          <div className="md:col-span-1 grid grid-cols-2 gap-4">
            <ArticleCard article={articles[2]} />
            <ArticleCard article={articles[3]} />
          </div>
        </div>

        {/* Article 5 - full width bottom */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <ArticleCard article={articles[2]} />
          </div>
          <div className="md:col-span-2">
            <ArticleCard article={articles[4]} />
          </div>
        </div>

        {/* Browse All Button */}
        <div className="mt-10">
          <Button variant="outline-dark" href="/blog">
            Browse all article
          </Button>
        </div>
      </div>
    </section>
  )
}
