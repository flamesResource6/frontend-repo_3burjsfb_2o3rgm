import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'
import Hero from './components/Hero'
import SectionHeader from './components/SectionHeader'
import Carousel from './components/Carousel'
import Banner from './components/Banner'
import { ProductCard, TileCard, RoutineCard } from './components/Tiles'

const API = import.meta.env.VITE_BACKEND_URL || ''

function App() {
  const [recs, setRecs] = useState([])
  const [transform, setTransform] = useState([])
  const [concerns, setConcerns] = useState([])
  const [routines, setRoutines] = useState([])

  const fetchAll = async () => {
    const [a, b, c, d] = await Promise.all([
      fetch(`${API}/api/recommendations`).then(r => r.json()),
      fetch(`${API}/api/transform`).then(r => r.json()),
      fetch(`${API}/api/concerns`).then(r => r.json()),
      fetch(`${API}/api/routines`).then(r => r.json()),
    ])
    setRecs(a)
    setTransform(b)
    setConcerns(c)
    setRoutines(d)
  }

  useEffect(() => {
    fetchAll()
  }, [])

  const handleSearch = async (q) => {
    const data = await fetch(`${API}/api/search?q=${encodeURIComponent(q)}`).then(r => r.json())
    setRecs(data)
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Futuristic nav */}
      <header className="sticky top-0 z-30 backdrop-blur-xl border-b border-slate-800/60 bg-slate-950/60">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white font-semibold">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-fuchsia-500 grid place-items-center">
              <ShoppingBag className="h-5 w-5" />
            </div>
            VRO
          </div>
          <nav className="hidden md:flex gap-6 text-slate-300 text-sm">
            <a className="hover:text-white" href="#">Fashion & Lifestyle</a>
            <a className="hover:text-white" href="#">Grooming & Care</a>
            <a className="hover:text-white" href="#">Sports & Nutrition</a>
            <a className="hover:text-white" href="#">Health & Nutrition</a>
            <a className="hover:text-white" href="#">Tech & Gadgets</a>
            <a className="hover:text-white" href="#">VRO Essentials</a>
          </nav>
        </div>
      </header>

      {/* Hero with AI search */}
      <Hero onSearch={handleSearch} />

      {/* Black Friday banner */}
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        >
          <div className="lg:col-span-2">
            <Banner title="Black Friday Mega Sale" subtitle="Only this week" highlight="Up to 80% OFF" />
          </div>
          <div className="lg:col-span-1">
            <Banner title="Member Exclusive" subtitle="VRO+ Benefits" highlight="Extra 10% OFF" />
          </div>
        </motion.div>
      </div>

      {/* VRO Recommends */}
      <section className="container mx-auto px-6 mt-10">
        <SectionHeader title="VRO Recommends" subtitle="Handpicked for you" cta="View All" />
        <Carousel
          items={recs}
          renderItem={(item) => <ProductCard item={item} />}
        />
      </section>

      {/* Transform with VRO */}
      <section className="container mx-auto px-6 mt-10">
        <SectionHeader title="Transform with VRO" subtitle="Goals in health & nutrition" cta="Explore Programs" />
        <Carousel
          items={transform}
          renderItem={(item) => <TileCard item={item} />}
        />
      </section>

      {/* Shop by concern */}
      <section className="container mx-auto px-6 mt-10">
        <SectionHeader title="Shop by concern" subtitle="Skincare solutions for men" />
        <Carousel
          items={concerns}
          renderItem={(item) => <TileCard item={item} />}
        />
      </section>

      {/* Shop by routine */}
      <section className="container mx-auto px-6 mt-10 pb-16">
        <SectionHeader title="Shop by routine" subtitle="Morning to evening essentials" />
        <Carousel
          items={routines}
          renderItem={(item) => <RoutineCard item={item} />}
        />
      </section>

      <footer className="border-t border-slate-800/60 py-10 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} VRO — The Men's Marketplace
      </footer>
    </div>
  )
}

export default App
