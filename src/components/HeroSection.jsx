import { useCallback, useEffect, useState } from 'react'

const SLIDES = [
  'https://res.cloudinary.com/di4caiech/image/upload/q_auto/f_auto/v1775825710/Frame_1984078959_1_svjosp.jpg',
]

const INTERVAL_MS = 5500

const HeroSection = () => {
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
    <section className="relative w-full overflow-hidden bg-black" aria-label="Hero imagery">
      {/* Mobile: single banner image only */}
      <div className="relative aspect-21/9 w-full max-h-[42vh] min-h-[140px] sm:max-h-[46vh] lg:hidden">
        <img
          src={SLIDES[0]}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          decoding="async"
          fetchPriority="high"
        />
      </div>

      {/* Desktop: image carousel only */}
      <div className="relative hidden min-h-[520px] h-[78vh] max-h-[900px] w-full lg:block">
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
