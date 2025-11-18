export default function SectionHeader({ title, subtitle, cta, onClick }) {
  return (
    <div className="flex items-end justify-between mb-4">
      <div>
        <h2 className="text-xl md:text-2xl font-semibold text-white">{title}</h2>
        {subtitle && (
          <p className="text-slate-400 text-sm mt-1">{subtitle}</p>
        )}
      </div>
      {cta && (
        <button
          onClick={onClick}
          className="text-sm text-slate-300 hover:text-white"
        >
          {cta}
        </button>
      )}
    </div>
  )
}
