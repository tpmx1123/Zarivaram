import { useCallback, useEffect, useState } from 'react'

const MOBILE_HERO_IMAGE =
  'https://res.cloudinary.com/di4caiech/image/upload/q_auto/f_auto/v1776167361/Frame_1984078964_1_a8yrns.png'

const SLIDES = [
  'https://res.cloudinary.com/di4caiech/image/upload/q_auto/f_auto/v1776167531/Frame_1984078965_piqll0.png',
]

const INTERVAL_MS = 5500

const HeroSection = ({ navbar }) => {
  const [active, setActive] = useState(0)

  const goNext = useCallback(() => {
    setActive((i) => (i + 1) % SLIDES.length)
  }, [])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    let timer

    const tick = () => {
      if (!desktop.matches || reduced.matches || SLIDES.length < 2) return
      timer = window.setInterval(goNext, INTERVAL_MS)
    }

    const clear = () => {
      if (timer) window.clearInterval(timer)
      timer = undefined
    }

    const sync = () => {
      clear()
      tick()
    }

    sync()
    desktop.addEventListener('change', sync)
    reduced.addEventListener('change', sync)
    return () => {
      desktop.removeEventListener('change', sync)
      reduced.removeEventListener('change', sync)
      clear()
    }
  }, [goNext])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black/10" aria-label="Hero imagery">
      <div className="absolute inset-x-0 top-0 z-20 px-3 pt-3 md:px-5 md:pt-5">
        {navbar}
      </div>

      {/* Mobile: single banner image only */}
      <div className="relative h-screen w-full lg:hidden">
        <img
          src={MOBILE_HERO_IMAGE}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          decoding="async"
          fetchPriority="high"
        />
      </div>

      {/* Desktop: image carousel only */}
      <div className="relative hidden h-screen w-full lg:block">
        {SLIDES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-900 ease-out ${
              i === active ? 'z-1 opacity-100' : 'z-0 opacity-0'
            }`}
            decoding="async"
            fetchPriority={i === 0 ? 'high' : 'low'}
          />
        ))}

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-2 h-24 bg-linear-to-t from-black/35 to-transparent"
          aria-hidden
        />

        <div className="absolute bottom-6 left-1/2 z-3 flex -translate-x-1/2 gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show image ${i + 1}`}
              aria-pressed={i === active}
              className={`pointer-events-auto h-2 rounded-full transition-all duration-300 ${
                i === active ? 'w-7 bg-white' : 'w-2 bg-white/45 hover:bg-white/70'
              }`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
