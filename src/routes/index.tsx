import { createFileRoute } from '@tanstack/react-router'
import {
  MapPin,
  Navigation,
  Car,
  Gauge,
  Route as RouteIcon,
  Zap,
  Radio,
  SlidersHorizontal,
  Clock,
  Smartphone,
  Bell,
  BatteryCharging,
  Sparkles,
  ChevronRight,
} from 'lucide-react'
import { Section, Eyebrow, TopBar, Footer } from '../components/SiteChrome'

export const Route = createFileRoute('/')({
  component: Home,
})

const features = [
  { icon: MapPin, label: 'Start Trip Location' },
  { icon: Navigation, label: 'Destination Location' },
  { icon: Car, label: 'EV Model Selection' },
  { icon: Gauge, label: 'Real-World Range Calculator' },
  { icon: RouteIcon, label: 'Route Planning' },
  { icon: Zap, label: 'Charging Station Discovery' },
  { icon: Radio, label: 'Live Charger Availability' },
  { icon: SlidersHorizontal, label: 'Fast Charger Filters' },
  { icon: Clock, label: 'Distance & ETA Calculation' },
]

const steps = [
  { n: '01', title: 'Enter your Start Location', desc: 'Tell us where the journey begins.' },
  { n: '02', title: 'Enter your Destination', desc: 'Set the endpoint of your trip.' },
  { n: '03', title: 'Select your EV model', desc: 'Choose from India’s leading EVs.' },
  { n: '04', title: 'Enter your real-world range (KM)', desc: 'Get accurate, not just brochure, numbers.' },
  { n: '05', title: 'Best route, calculated', desc: 'EV Compass maps the optimal path.' },
  { n: '06', title: 'Chargers along the route', desc: 'See every station on the way.' },
  { n: '07', title: 'Optimal charging stops', desc: 'Recommended stops to avoid range anxiety.' },
  { n: '08', title: 'Full charger details', desc: 'Network, charger type and distance shown.' },
]

const networks = ['Tata Power', 'Statiq', 'ChargeZone', 'Ather Grid', 'BPCL', 'Zeon', 'Fortum', 'Kazam']

const comingSoon = [
  { icon: Smartphone, title: 'Mobile App', desc: 'EV Compass for iOS and Android, coming soon.' },
  { icon: Bell, title: 'Charger Alerts', desc: 'Real-time notifications on availability changes.' },
  { icon: BatteryCharging, title: 'Battery Health Insights', desc: 'Track degradation and true range over time.' },
  { icon: Sparkles, title: 'AI Trip Assistant', desc: 'Conversational trip planning, powered by AI.' },
]

const stickers = [
  { emoji: '⚡', name: 'Bolt Compass', price: '₹99' },
  { emoji: '🔌', name: 'Plugged In', price: '₹79' },
  { emoji: '🗺️', name: 'Route Finder', price: '₹79' },
  { emoji: '🔋', name: 'Full Charge', price: '₹99' },
]

function Home() {
  return (
    <div className="relative min-h-screen bg-[#05070a] text-white">
      <TopBar />
      <Hero />
      <ChargingVisual />
      <Features />
      <HowItWorks />
      <ValueProp />
      <MapSection />
      <RoutePreview />
      <Networks />
      <MobileApp />
      <Stickers />
      <ComingSoon />
      <FinalCta />
      <Footer />
    </div>
  )
}

function Hero() {
  return (
    <div className="relative pt-44 pb-28 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 grid-drift opacity-40" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-green-400/20 blur-[120px] pulse-glow" />
      <div className="relative max-w-5xl mx-auto text-center fade-up">
        <div className="inline-flex items-center gap-2 mx-auto mb-8 glass rounded-full px-4 py-1.5 text-xs font-medium text-green-200">
          <Zap className="h-3.5 w-3.5 text-green-300" />
          Built for India&rsquo;s EV Revolution
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight">
          India&rsquo;s Smartest <span className="neon-text">EV Route Planner</span> &amp; Charging Aggregator
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
          Plan EV journeys with confidence. Discover charging stations across India, calculate
          real-world vehicle range, and get intelligent charging stops for every trip.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#plan" className="btn-neon rounded-full px-8 py-3.5 text-base inline-flex items-center gap-2">
            Plan My Trip <ChevronRight className="h-4 w-4" />
          </a>
          <a href="#map" className="btn-ghost rounded-full px-8 py-3.5 text-base backdrop-blur-md">
            Find Chargers
          </a>
        </div>
      </div>

      <div id="plan" className="relative max-w-5xl mx-auto mt-20 fade-up">
        <TripPlannerCard />
      </div>
    </div>
  )
}

function TripPlannerCard() {
  return (
    <div className="glass neon-border-glow rounded-3xl p-6 md:p-10">
      <div className="grid md:grid-cols-2 gap-5">
        <FieldRow icon={MapPin} label="Start Location" placeholder="e.g. Bengaluru" />
        <FieldRow icon={Navigation} label="Destination" placeholder="e.g. Chennai" />
        <FieldRow icon={Car} label="EV Model" placeholder="e.g. Tata Nexon EV" />
        <FieldRow icon={Gauge} label="Real-World Range (KM)" placeholder="e.g. 280 km" />
      </div>
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <button className="btn-neon rounded-xl px-6 py-3.5 font-semibold flex-1">
          Calculate Route &amp; Charging Stops
        </button>
        <button className="btn-ghost rounded-xl px-6 py-3.5 font-semibold flex-1">
          Find Chargers Near Me
        </button>
      </div>
    </div>
  )
}

function FieldRow({
  icon: Icon,
  label,
  placeholder,
}: {
  icon: typeof MapPin
  label: string
  placeholder: string
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 flex items-center gap-3 focus-within:border-green-400/60 transition-colors">
      <Icon className="h-4.5 w-4.5 text-green-300 shrink-0" />
      <div className="w-full">
        <div className="text-[11px] uppercase tracking-wide text-white/40">{label}</div>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-white placeholder:text-white/30 text-sm mt-0.5"
        />
      </div>
    </div>
  )
}

function ChargingVisual() {
  const cablePath = 'M90 160 C 180 210, 260 210, 340 178'
  return (
    <Section className="pt-0 pb-4 md:pb-8">
      <div className="max-w-5xl mx-auto relative rounded-3xl glass neon-border-glow p-6 md:p-10 overflow-hidden fade-up">
        <div className="absolute inset-0 grid-drift opacity-20" />
        <div className="relative flex flex-col md:flex-row items-center gap-8">
          <div className="text-center md:text-left md:max-w-xs shrink-0">
            <Eyebrow>Live Charging Simulation</Eyebrow>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Watch the current flow</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Plug in and see it happen &mdash; EV Compass highlights exactly when a charger is
              actively delivering power to your car.
            </p>
          </div>
          <svg viewBox="0 0 600 260" className="w-full md:flex-1 h-auto" aria-hidden="true">
            <defs>
              <filter id="chargeGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="chargerBody" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#123018" />
                <stop offset="1" stopColor="#05100a" />
              </linearGradient>
            </defs>

            {/* charger pedestal */}
            <rect x="40" y="60" width="72" height="150" rx="16" fill="url(#chargerBody)" stroke="#39ff6a" strokeOpacity="0.5" strokeWidth="2" />
            <rect x="56" y="80" width="40" height="26" rx="6" fill="#03170a" stroke="#39ff6a" strokeOpacity="0.6" />
            <path d="M82 84 L72 98 L80 98 L74 102" stroke="#39ff6a" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="pulse-glow" />
            <circle cx="76" cy="130" r="5" fill="#39ff6a" className="dot-blink" />
            <circle cx="76" cy="150" r="5" fill="#39ff6a" className="dot-blink" style={{ animationDelay: '0.3s' }} />

            {/* car silhouette */}
            <g transform="translate(340,110)">
              <path
                d="M0 60 L10 30 Q20 12 45 12 L150 12 Q170 12 178 30 L188 60 Z"
                fill="#0b1a12"
                stroke="#39ff6a"
                strokeOpacity="0.5"
                strokeWidth="2"
              />
              <rect x="-6" y="55" width="200" height="16" rx="8" fill="#0b1a12" stroke="#39ff6a" strokeOpacity="0.5" strokeWidth="2" />
              <circle cx="30" cy="74" r="14" fill="#03170a" stroke="#39ff6a" strokeOpacity="0.7" strokeWidth="2" />
              <circle cx="160" cy="74" r="14" fill="#03170a" stroke="#39ff6a" strokeOpacity="0.7" strokeWidth="2" />
              <rect x="55" y="20" width="40" height="18" rx="4" fill="#123018" opacity="0.6" />
              <rect x="100" y="20" width="40" height="18" rx="4" fill="#123018" opacity="0.6" />
            </g>

            {/* physical cable */}
            <path d={cablePath} fill="none" stroke="#123018" strokeWidth="7" strokeLinecap="round" />
            {/* glowing current flow */}
            <path
              d={cablePath}
              fill="none"
              stroke="#39ff6a"
              strokeWidth="3"
              strokeLinecap="round"
              className="wire-flow current-glow"
              filter="url(#chargeGlow)"
            />
            {/* traveling charge pulses */}
            {[0, 0.6, 1.2].map((delay, i) => (
              <circle key={i} r="4.5" fill="#a6ff9e" filter="url(#chargeGlow)">
                <animateMotion dur="1.8s" begin={`${delay}s`} repeatCount="indefinite" path={cablePath} />
              </circle>
            ))}

            {/* charging port glow on car */}
            <circle cx="340" cy="178" r="7" fill="#39ff6a" className="pulse-glow" />
          </svg>
        </div>
      </div>
    </Section>
  )
}

function Features() {
  return (
    <Section id="features">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <Eyebrow>Everything In One Place</Eyebrow>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Every tool for a stress-free EV journey
        </h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="glass rounded-2xl p-6 flex items-center gap-4 hover:neon-border-glow transition-shadow duration-300"
          >
            <div className="h-11 w-11 rounded-xl bg-green-400/10 border border-green-400/30 flex items-center justify-center shrink-0">
              <Icon className="h-5 w-5 text-green-300" />
            </div>
            <span className="font-medium text-white/85">{label}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}

function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-gradient-to-b from-transparent via-green-500/[0.03] to-transparent">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <Eyebrow>How It Works</Eyebrow>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">From A to B, without the anxiety</h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div key={step.n} className="relative glass rounded-2xl p-6">
            <div className="text-5xl font-extrabold text-green-400/15 mb-2">{step.n}</div>
            <h3 className="font-semibold text-lg mb-1.5">{step.title}</h3>
            <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function ValueProp() {
  return (
    <Section>
      <div className="max-w-5xl mx-auto glass neon-border-glow rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-green-400/15 blur-[100px]" />
        <Eyebrow>Why EV Compass</Eyebrow>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          One platform for every EV charger in India.
        </h2>
        <p className="text-white/60 text-lg leading-relaxed max-w-3xl mx-auto">
          EV Compass aggregates charging stations from multiple charging networks into one
          platform. Drivers can view nearby chargers, compare options and plan long-distance
          trips without range anxiety.
        </p>
      </div>
    </Section>
  )
}

function MapSection() {
  return (
    <Section id="map">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <Eyebrow>Interactive India Map</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
            Every charger, plotted across the nation
          </h2>
          <p className="text-white/60 leading-relaxed mb-8">
            Explore a live, interactive map of charging stations spanning every major highway and
            city in India. Zoom into any region to see charger density, network coverage and
            real-time availability.
          </p>
          <div className="flex gap-8">
            <div>
              <div className="text-3xl font-bold neon-text">12,000+</div>
              <div className="text-sm text-white/50">Charging Points</div>
            </div>
            <div>
              <div className="text-3xl font-bold neon-text">700+</div>
              <div className="text-sm text-white/50">Cities Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold neon-text">25+</div>
              <div className="text-sm text-white/50">Networks</div>
            </div>
          </div>
        </div>
        <div className="relative aspect-square rounded-3xl glass neon-border-glow overflow-hidden">
          <div className="absolute inset-0 grid-drift opacity-30" />
          <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full">
            <path
              d="M150 40 C 100 90, 200 120, 150 170 S 90 230, 150 260"
              fill="none"
              stroke="#39ff6a"
              strokeWidth="2"
              className="route-dash opacity-70"
            />
            {[
              [150, 40],
              [120, 95],
              [190, 130],
              [140, 175],
              [100, 225],
              [150, 260],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r={i === 2 ? 6 : 4} fill="#39ff6a" className="pulse-glow" />
            ))}
          </svg>
          <div className="absolute bottom-5 left-5 glass rounded-xl px-4 py-2.5 text-xs">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-300 dot-blink" />
              Live station data
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

function RoutePreview() {
  return (
    <Section className="bg-gradient-to-b from-transparent via-green-500/[0.03] to-transparent">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div className="order-2 lg:order-1 rounded-3xl glass neon-border-glow p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm font-semibold text-white/70">Bengaluru &rarr; Chennai</span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-green-400/10 text-green-300 border border-green-400/30">
              346 km &middot; 2 stops
            </span>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Bengaluru (Start)', meta: 'Battery: 92%', kind: 'start' },
              { name: 'Statiq &mdash; Hosur Highway', meta: 'CCS2 &middot; 60kW &middot; 18 min stop', kind: 'stop' },
              { name: 'Tata Power &mdash; Vellore Bypass', meta: 'CCS2 &middot; 50kW &middot; 22 min stop', kind: 'stop' },
              { name: 'Chennai (Destination)', meta: 'ETA: 5h 40m', kind: 'end' },
            ].map((p, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex flex-col items-center pt-1">
                  <span
                    className={`h-3 w-3 rounded-full ${
                      p.kind === 'stop' ? 'bg-green-300 dot-blink' : 'bg-white/60'
                    }`}
                  />
                  {i < 3 && <span className="w-px h-10 bg-green-400/25 mt-1" />}
                </div>
                <div>
                  <div className="font-medium text-white/90" dangerouslySetInnerHTML={{ __html: p.name }} />
                  <div className="text-xs text-white/45 mt-0.5" dangerouslySetInnerHTML={{ __html: p.meta }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <Eyebrow>Route Planner Preview</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
            See your entire trip before you leave
          </h2>
          <p className="text-white/60 leading-relaxed">
            EV Compass plots your route, calculates real-world range at every leg, and inserts
            charging stops exactly where you need them &mdash; complete with network, charger
            type, and distance remaining, so you always know what&rsquo;s next.
          </p>
        </div>
      </div>
    </Section>
  )
}

function Networks() {
  return (
    <Section id="networks">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <Eyebrow>Charging Networks Supported</Eyebrow>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Aggregated from India&rsquo;s top networks</h2>
      </div>
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
        {networks.map((n) => (
          <div
            key={n}
            className="glass rounded-full px-6 py-3 text-sm font-medium text-white/75 hover:text-green-300 hover:neon-border-glow transition-all"
          >
            {n}
          </div>
        ))}
      </div>
    </Section>
  )
}

function MobileApp() {
  return (
    <Section className="bg-gradient-to-b from-transparent via-green-500/[0.03] to-transparent">
      <div className="max-w-5xl mx-auto glass neon-border-glow rounded-3xl p-10 md:p-16 grid md:grid-cols-[1fr_auto] gap-10 items-center">
        <div>
          <Eyebrow>Upcoming Mobile App</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            EV Compass, now in your pocket
          </h2>
          <p className="text-white/60 leading-relaxed max-w-xl">
            Take route planning and charger discovery on the road. The EV Compass mobile app
            brings live availability, offline maps and trip alerts to iOS and Android.
          </p>
        </div>
        <div className="relative h-40 w-40 rounded-3xl bg-green-400/10 border border-green-400/30 flex items-center justify-center float-y">
          <Smartphone className="h-16 w-16 text-green-300" />
        </div>
      </div>
    </Section>
  )
}

function Stickers() {
  return (
    <Section id="stickers" className="bg-gradient-to-b from-transparent via-green-500/[0.03] to-transparent">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <Eyebrow>Merch Drop</Eyebrow>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Sticker pack, coming to your laptop</h2>
        <p className="text-white/60 leading-relaxed max-w-2xl mx-auto">
          Show your EV pride. The store opens when EV Compass launches.
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
        {stickers.map((s) => (
          <div
            key={s.name}
            className="relative glass rounded-2xl p-6 text-center hover:neon-border-glow transition-shadow duration-300 wiggle-hover"
          >
            <span className="absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-full bg-green-400/10 text-green-300 border border-green-400/30">
              Soon
            </span>
            <div className="text-5xl mb-4">{s.emoji}</div>
            <div className="font-semibold text-sm mb-1">{s.name}</div>
            <div className="text-xs text-green-300 mb-4">{s.price}</div>
            <button className="btn-ghost rounded-full px-4 py-2 text-xs w-full" type="button">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </Section>
  )
}

function ComingSoon() {
  return (
    <Section id="coming-soon">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <Eyebrow>Coming Soon</Eyebrow>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Built to keep getting smarter</h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {comingSoon.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="glass rounded-2xl p-6 hover:neon-border-glow transition-shadow">
            <div className="h-11 w-11 rounded-xl bg-green-400/10 border border-green-400/30 flex items-center justify-center mb-4">
              <Icon className="h-5 w-5 text-green-300" />
            </div>
            <h3 className="font-semibold mb-1.5">{title}</h3>
            <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function FinalCta() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Ready to drive without range anxiety?
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="#plan" className="btn-neon rounded-full px-8 py-3.5 text-base inline-flex items-center gap-2">
            Plan My Trip <ChevronRight className="h-4 w-4" />
          </a>
          <a href="#map" className="btn-ghost rounded-full px-8 py-3.5 text-base">
            Find Chargers
          </a>
        </div>
      </div>
    </Section>
  )
}

