import { Link } from '@tanstack/react-router'
import { Navigation, Zap, Sparkles } from 'lucide-react'

export function Section({
  id,
  className = '',
  children,
}: {
  id?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className={`relative px-6 md:px-12 lg:px-20 py-24 ${className}`}>
      {children}
    </section>
  )
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-green-300/80 mb-4">
      <span className="h-1.5 w-1.5 rounded-full bg-green-300 dot-blink" />
      {children}
    </div>
  )
}

export function Logo({ small = false }: { small?: boolean }) {
  return (
    <div
      className={`relative ${small ? 'h-7 w-7' : 'h-9 w-9'} rounded-xl bg-gradient-to-br from-green-300 to-green-700 flex items-center justify-center neon-border-glow shrink-0`}
    >
      <span className="absolute inset-0 rounded-xl border border-dashed border-white/25 spin-slow" />
      <Navigation className={`${small ? 'h-3.5 w-3.5' : 'h-4.5 w-4.5'} text-[#03170a] -rotate-12`} />
      <span className="absolute -bottom-1.5 -right-1.5 h-4.5 w-4.5 rounded-full bg-[#05070a] border border-green-300 flex items-center justify-center current-glow">
        <Zap className="h-2.5 w-2.5 text-green-300 fill-green-300" />
      </span>
    </div>
  )
}

function ComingSoonBanner() {
  const items = Array.from({ length: 6 })
  const Row = () => (
    <div className="flex items-center gap-10 px-5 shrink-0">
      {items.map((_, j) => (
        <span
          key={j}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-green-200 whitespace-nowrap"
        >
          <Sparkles className="h-3.5 w-3.5 text-green-300" /> Coming Soon &mdash; EV Compass is launching across India
        </span>
      ))}
    </div>
  )
  return (
    <div className="overflow-hidden bg-gradient-to-r from-green-500/15 via-green-400/10 to-green-500/15 border-b border-green-400/20 py-2">
      <div className="flex w-max marquee-track">
        <Row />
        <Row />
      </div>
    </div>
  )
}

const navLinks = [
  { href: '/#features', label: 'Features' },
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/#map', label: 'Map' },
  { href: '/#stickers', label: 'Stickers' },
  { href: '/community', label: 'Community' },
]

export function TopBar() {
  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <ComingSoonBanner />
      <header className="border-b border-green-400/10 bg-[#05070a]/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
          <Link to="/" className="flex items-center gap-2.5">
            <Logo />
            <span className="font-bold text-lg tracking-tight">EV Compass</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-green-300 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <a href="/#plan" className="hidden md:inline-flex btn-neon rounded-full px-5 py-2 text-sm">
            Plan My Trip
          </a>
        </div>
      </header>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-green-400/10 px-6 md:px-12 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5">
          <Logo small />
          <span className="font-semibold">EV Compass</span>
        </Link>
        <p className="text-green-200/70 font-medium text-sm tracking-wide">Driving India&rsquo;s Electric Future.</p>
        <p className="text-white/30 text-xs">&copy; {new Date().getFullYear()} EV Compass. All rights reserved.</p>
      </div>
    </footer>
  )
}
