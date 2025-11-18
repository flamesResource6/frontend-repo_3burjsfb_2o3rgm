import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Carousel({ items, renderItem }) {
  const scroller = useRef(null)

  const scrollBy = (dir) => {
    if (!scroller.current) return
    scroller.current.scrollBy({ left: dir * (scroller.current.clientWidth * 0.8), behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <div ref={scroller} className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
        {items.map((item) => (
          <div key={item.id} className="snap-start shrink-0">
            {renderItem(item)}
          </div>
        ))}
      </div>
      <button onClick={() => scrollBy(-1)} className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-slate-900/70 border border-slate-700/60 text-white">
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button onClick={() => scrollBy(1)} className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-slate-900/70 border border-slate-700/60 text-white">
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )}
