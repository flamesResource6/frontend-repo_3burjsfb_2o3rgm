import { useState } from 'react'
import { Mic, Search, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch?.(query)
  }

  return (
    <div className="relative pt-20 pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-80 w-80 bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 bg-violet-500/20 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            VRO
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-3 text-lg md:text-xl text-slate-300"
          >
            The men's marketplace. Futuristic. Minimalist. Powerful.
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 mx-auto max-w-3xl"
          >
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 to-fuchsia-500/30 blur-xl group-hover:blur-2xl transition" />
              <div className="relative flex items-center rounded-full bg-slate-900/70 border border-slate-700/60 backdrop-blur-xl">
                <Search className="ml-4 h-5 w-5 text-slate-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products with text or voice"
                  className="w-full bg-transparent text-slate-200 placeholder:text-slate-500 focus:outline-none py-4 px-3"
                />
                <button
                  type="button"
                  onClick={() => onSearch?.(query)}
                  className="hidden md:inline-flex items-center gap-1 text-slate-300 hover:text-white px-3"
                >
                  <Sparkles className="h-4 w-4" /> AI
                </button>
                <button
                  type="button"
                  onClick={() => onSearch?.(query)}
                  title="Voice search"
                  className="mr-1.5 inline-flex items-center justify-center rounded-full h-9 w-9 text-slate-300 hover:text-white hover:bg-slate-800/70"
                >
                  <Mic className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  )
}
