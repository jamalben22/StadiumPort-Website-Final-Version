import { HTMLAttributes } from 'react'
import { Card } from './Card'

interface GuideCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  excerpt: string
  category: string
  author: string
  readTime?: string
  priority?: 'Critical' | 'High' | 'Medium' | 'Low'
  image?: string
  href: string
}

function getPriorityColor(priority?: string) {
  switch (priority) {
    case 'Critical':
      return 'bg-red-500'
    case 'High':
      return 'bg-orange-500'
    case 'Medium':
      return 'bg-yellow-500'
    default:
      return 'bg-green-500'
  }
}

export default function GuideCard({
  title,
  excerpt,
  category,
  author,
  readTime = '',
  priority = 'Medium',
  image,
  href,
  className = '',
  ...props
}: GuideCardProps) {
  return (
    <Card className={`overflow-hidden group hover:shadow-xl transition-all duration-300 ${className}`} {...props}>
      {image && (
        <div className="relative">
          {(() => {
            const isLocal = image?.startsWith('/images/');
            const srcSet = isLocal
              ? `${image.replace('.webp','-640.webp')} 640w, ${image.replace('.webp','-1024.webp')} 1024w, ${image.replace('.webp','-1600.webp')} 1600w`
              : undefined;
            return (
              <img
                src={image}
                alt={title}
                width={1600}
                height={900}
                srcSet={srcSet}
                sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            );
          })()}
          <div className="absolute top-3 right-3">
            <span className={`${getPriorityColor(priority)} text-white px-2 py-1 rounded-lg text-xs font-bold`}>
              {priority}
            </span>
          </div>
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-red-500 text-sm font-medium">{category}</span>
          {readTime && <span className="text-slate-500 text-sm">{readTime}</span>}
        </div>
        <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-2 group-hover:text-red-500 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3">{excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">{author.split(' ').map((n) => n[0]).join('')}</span>
            </div>
            <span className="text-xs text-slate-600 dark:text-slate-300">{author}</span>
          </div>
          <a
            href={href}
            className="inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer focus-visible:focus disabled:opacity-50 disabled:cursor-not-allowed border-2 border-[#01b47d] text-[#01b47d] hover:bg-[#008f63] hover:text-white shadow-sm hover:shadow-lg hover:scale-105 disabled:hover:scale-100 disabled:hover:bg-transparent disabled:hover:text-[#008f63] px-3 py-2 text-sm"
          >
            Read More
            <i className="ri-arrow-right-line ml-2"></i>
          </a>
        </div>
      </div>
    </Card>
  )
}

