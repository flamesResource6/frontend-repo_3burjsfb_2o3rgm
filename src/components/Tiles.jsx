export function ProductCard({ item }) {
  return (
    <div className="w-[240px] md:w-[300px] h-[320px] rounded-xl overflow-hidden border border-slate-700/60 bg-slate-900/60 backdrop-blur-md">
      <div className="h-2/3 overflow-hidden">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-3">
        <div className="text-slate-300 text-xs uppercase tracking-wide">{item.tag}</div>
        <div className="text-white font-medium truncate">{item.title}</div>
        {item.price && (
          <div className="text-slate-200 mt-1">${item.price.toFixed(2)}</div>
        )}
      </div>
    </div>
  )
}

export function TileCard({ item }) {
  return (
    <div className="w-[260px] md:w-[320px] h-[220px] rounded-xl overflow-hidden border border-slate-700/60 bg-slate-900/60">
      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
      <div className="absolute p-3">
        <div className="text-white font-semibold drop-shadow">{item.title}</div>
        {item.subtitle && (
          <div className="text-slate-200 text-sm drop-shadow">{item.subtitle}</div>
        )}
      </div>
    </div>
  )
}

export function RoutineCard({ item }) {
  return (
    <div className="w-[180px] md:w-[220px] rounded-xl overflow-hidden border border-slate-700/60 bg-slate-900/60">
      <div className="h-40 overflow-hidden">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-3">
        <div className="text-xs text-slate-400">{item.time}</div>
        <div className="text-white font-medium">{item.title}</div>
      </div>
    </div>
  )
}
