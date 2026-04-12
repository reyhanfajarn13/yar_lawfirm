import Button from '../ui/Button'
import { articles } from '../../data/articles'

const EXCERPT_MAX_CHARS = 200

function truncateExcerpt(text, maxChars = EXCERPT_MAX_CHARS) {
  if (!text || text.length <= maxChars) return text
  return `${text.slice(0, maxChars).trimEnd()}...`
}

function ArticleMeta({ date, category, dark = false }) {
  const textClass = dark ? 'text-white/85' : 'text-[#2e3238]'

  return (
    <div className={`flex items-center gap-3 text-sm ${textClass}`}>
      <span>{date}</span>
      <span className="text-[#d6322b]">&middot;</span>
      <span>{category}</span>
    </div>
  )
}

function ArticleCopy({ article, dark = false }) {
  const titleClass = dark ? 'text-white' : 'text-[#2a2e35]'
  const bodyClass = dark ? 'text-white/85' : 'text-[#343942]'

  return (
    <>
      <ArticleMeta date={article.date} category={article.category} dark={dark} />
      <h3 className={`mt-5 text-[1.25rem] md:text-[1.8rem] font-medium leading-[1.15] ${titleClass}`}>
        {article.title}
      </h3>
      <p className={`mt-6 text-[1.0rem] leading-relaxed ${bodyClass}`}>
        {truncateExcerpt(article.excerpt)}
      </p>
    </>
  )
}

function MediaPanel({ image, className = '' }) {
  return (
    <div className={`relative overflow-hidden bg-[#f3f3f4] ${className}`}>
      {image && (
        <img
          src={image}
          alt="Article visual"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
        />
      )}
    </div>
  )
}

function FeatureSplitCard({ article }) {
  return (
    <a href={article['source-link']} className="block group">
      <article className="overflow-hidden bg-[#f3f3f4] shadow-[0_12px_28px_rgba(15,23,42,0.14)] transition-shadow group-hover:shadow-[0_14px_32px_rgba(15,23,42,0.2)]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.03fr] min-h-[340px]">
          <div className="px-8 py-10 md:px-12 md:py-14">
            <ArticleCopy article={article} />
          </div>
          <MediaPanel image={article.image} />
        </div>
      </article>
    </a>
  )
}

function StackedCard({ article, tall = false }) {
  return (
    <a href={article['source-link']} className="block group">
      <article className="overflow-hidden bg-[#f3f3f4] shadow-[0_10px_24px_rgba(15,23,42,0.14)] transition-shadow group-hover:shadow-[0_14px_30px_rgba(15,23,42,0.2)]">
        <MediaPanel image={article.image} className={tall ? 'h-[230px] md:h-[260px]' : 'h-[230px]'} />
        <div className="px-7 py-8 md:px-8 md:py-9">
          <ArticleCopy article={article} />
        </div>
      </article>
    </a>
  )
}

function DarkCard({ article }) {
  return (
    <a href={article['source-link']} className="block group">
      <article className="bg-[#303030] px-7 py-8 md:px-8 md:py-9 shadow-[0_12px_28px_rgba(15,23,42,0.22)] transition-shadow group-hover:shadow-[0_16px_34px_rgba(15,23,42,0.3)]">
        <ArticleCopy article={article} dark />
      </article>
    </a>
  )
}

export default function ArticleSection() {
  const [featureArticle, topRightArticle, bottomLeftArticle, bottomCenterArticle, darkArticle] = articles

  return (
    <section className="relative overflow-hidden py-16 md:py-20 px-[10%]">

      <div className="relative max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.06fr] gap-6 lg:gap-7">
          <div className="space-y-6 lg:space-y-7">
            <FeatureSplitCard article={featureArticle} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
              <StackedCard article={bottomLeftArticle} />
              <StackedCard article={bottomCenterArticle} />
            </div>
          </div>

          <div className="space-y-6 lg:space-y-7">
            <StackedCard article={topRightArticle} tall />
            <DarkCard article={darkArticle} />
          </div>
        </div>

        <div className="mt-10">
          <Button variant="outline-white" href="/blog">
            Browse all article
          </Button>
        </div>
      </div>
    </section>
  )
}

