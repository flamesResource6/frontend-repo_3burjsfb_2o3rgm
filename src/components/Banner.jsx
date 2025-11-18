export default function Banner({ title, subtitle, highlight }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-700/60 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-8">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_10%,rgba(59,130,246,0.25),transparent),radial-gradient(600px_200px_at_90%_90%,rgba(168,85,247,0.2),transparent)]" />
      <div className="relative">
        <p className="uppercase tracking-widest text-xs text-slate-400">{subtitle}</p>
        <h3 className="text-2xl md:text-4xl font-extrabold text-white mt-2">{title}</h3>
        {highlight && (
          <div className="inline-flex mt-4 items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-200">
            {highlight}
          </div>
        )}
      </div>
    </div>
  )
}
