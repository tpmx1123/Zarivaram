import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const MAYABAZAR_SECTION_BG =
  'https://res.cloudinary.com/dvnplfu6z/image/upload/v1776678195/Group_1171289197_qucgmd.png'
const MAYABAZAR_SECTION_BG_MOBILE =
  'https://res.cloudinary.com/dvnplfu6z/image/upload/v1776678194/Contest_Story_2_n9k2rw.png'

const EVENT_IMAGES = [
  'https://res.cloudinary.com/di4caiech/image/upload/q_auto/f_auto/v1775814753/_DSC4372_1_cy6epq.jpg',
  'https://res.cloudinary.com/di4caiech/image/upload/q_auto/f_auto/v1775814963/_DSC5190_copy_1_1_tmk4bw.png',
  'https://res.cloudinary.com/di4caiech/image/upload/q_auto/f_auto/v1775889254/DSC04686_riko6a.jpg',
  'https://res.cloudinary.com/di4caiech/image/upload/q_auto/f_auto/v1775889876/_DSC4543_usj70y.jpg',
]

const events = [
  {
    id: '01',
    date: 'April 2026 · Hyderabad',
    title: 'Mayabazar — Spring Edition',
    tag: 'Pop-up show',
    desc: 'The seasonal showcase of new arrivals across all five collections. Meet the weavers. Touch the silk. Take your time.',
    image: EVENT_IMAGES[0],
  },
  {
    id: '02',
    date: 'April 2026 · Boutique',
    title: "Weaver's Weekend",
    tag: 'Heritage · Craft',
    desc: 'Two Kanchipuram master weavers in residence at Zarivaram. Watch a live demonstration. Understand what your saree carries.',
    image: EVENT_IMAGES[1],
  },
  {
    id: '03',
    date: 'May 2026 · Hyderabad',
    title: "Bride's Private Viewing",
    tag: 'By appointment',
    desc: 'A curated, closed viewing for brides and their families. Three hours, the right sarees, one-on-one with Abhilasha.',
    image: EVENT_IMAGES[2],
  },
  {
    id: '04',
    date: 'Ongoing',
    title: 'Draping Workshops',
    tag: 'Workshop',
    desc: 'Learn to drape for comfort, not just for show. Abhilasha’s original workshops — now held monthly at the boutique.',
    image: EVENT_IMAGES[3],
  },
]

function cardFocusOpacity(index, progress) {
  const focus = progress * (events.length - 1)
  const d = Math.abs(focus - index)
  return Math.max(0.2, 1 - d * 0.75)
}

function cardFocusScale(index, progress) {
  const focus = progress * (events.length - 1)
  const d = Math.abs(focus - index)
  return Math.max(0.94, 1 - d * 0.06)
}

const MayabazarSection = () => {
  const ghostRef = useRef(null)
  const trackRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [maxTranslate, setMaxTranslate] = useState(0)
  const [initialOffset, setInitialOffset] = useState(0)

  useLayoutEffect(() => {
    const calculateBounds = () => {
      const track = trackRef.current
      if (!track) return

      const vw = window.innerWidth
      const cards = track.querySelectorAll('[data-maya-card]')
      if (cards.length === 0) return

      const firstCard = cards[0]
      const lastCard = cards[cards.length - 1]

      // 1. Calculate Initial Offset: Centers the first card on load
      const firstCardWidth = firstCard.offsetWidth
      const startOffset = (vw - firstCardWidth) / 2
      setInitialOffset(startOffset)

      // 2. Calculate Max Translate: 
      // The distance between the center of the first card and the center of the last card
      const firstCardCenter = firstCard.offsetLeft + firstCardWidth / 2
      const lastCardCenter = lastCard.offsetLeft + lastCard.offsetWidth / 2
      
      // This ensures that when progress is 1, the last card's center is at the same 
      // visual position the first card's center was at progress 0.
      setMaxTranslate(lastCardCenter - firstCardCenter)
    }

    // Run on mount and resize
    calculateBounds()
    window.addEventListener('resize', calculateBounds)
    return () => window.removeEventListener('resize', calculateBounds)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const el = ghostRef.current
      if (!el) return
      const { top, height } = el.getBoundingClientRect()
      const wh = window.innerHeight
      const denom = height - wh
      const p = denom > 0 ? Math.min(1, Math.max(0, -top / denom)) : 0
      setProgress(p)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // The actual movement logic
  const translatePx = progress * maxTranslate

  return (
    <section id="mayabazar" className="border-t border-brand/10 bg-background">
      <div ref={ghostRef} className="relative w-full" style={{ height: `${events.length * 150}vh` }}>
        <div className="sticky top-0 flex h-screen w-full flex-col overflow-hidden">
          
          {/* Background Layers (Keep original) */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden" style={{ backgroundImage: `url(${MAYABAZAR_SECTION_BG_MOBILE})` }} />
            <div className="absolute inset-0 hidden bg-cover bg-left bg-no-repeat lg:block" style={{ backgroundImage: `url(${MAYABAZAR_SECTION_BG})` }} />
            <div className="absolute inset-0 bg-background/85 backdrop-blur-[2px]" />
          </div>

          <div className="relative z-10 flex h-full flex-col">
            {/* Header */}
            <div className="px-[6%] pt-6 mb-2 lg:px-[12%] lg:pt-10 lg:mb-10 shrink-0">
              <span className="mb-2 block font-['Montserrat'] text-[0.6rem] font-bold uppercase tracking-[0.4em] text-brand/80">
                Monthly events & gatherings
              </span>
              <h2 className="font-['EB_Garamond'] text-2xl font-extralight text-foreground lg:text-6xl">
                Mayabazar — <span className="text-brand">the pop-up show</span>
              </h2>
            </div>

            {/* Horizontal Track Area */}
            <div className="relative flex flex-1 items-center overflow-visible">
              <div
                ref={trackRef}
                className="flex items-center gap-8 lg:gap-20 will-change-transform"
                style={{
                  // Start at initialOffset and subtract the progress-based translation
                  transform: `translate3d(${initialOffset - translatePx}px, 0, 0)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                {events.map((event, index) => {
                  const o = cardFocusOpacity(index, progress)
                  const s = cardFocusScale(index, progress)
                  
                  return (
                    <article
                      key={event.id}
                      data-maya-card
                      className="group relative flex w-[85vw] shrink-0 flex-col overflow-hidden rounded-2xl border border-brand/10 bg-white/95 shadow-2xl sm:w-[75vw] lg:w-[850px]"
                      style={{
                        opacity: o,
                        transform: `scale(${s})`,
                        transition: 'opacity 0.4s ease, transform 0.4s ease'
                      }}
                    >
                      {/* Card Content (Keep original) */}
                      <div className="flex flex-col lg:flex-row">
                        <div className="relative aspect-16/10 w-full lg:aspect-auto lg:w-[46%]">
                          <img src={event.image} alt={event.title} className="absolute inset-0 h-full w-full object-cover" />
                        </div>
                        <div className="flex flex-1 flex-col justify-between p-6 lg:p-12">
                          <div>
                            <div className="mb-4 flex items-center justify-between">
                              <span className="font-['Montserrat'] text-[0.6rem] font-bold text-brand/60 uppercase tracking-widest">{event.date}</span>
                              <span className="rounded-full border border-brand/20 px-2 py-0.5 font-['Montserrat'] text-[0.5rem] font-bold uppercase text-brand">{event.tag}</span>
                            </div>
                            <h3 className="mb-3 font-['EB_Garamond'] text-2xl text-foreground lg:text-4xl">{event.title}</h3>
                            <p className="font-['Montserrat'] text-[0.85rem] leading-relaxed text-foreground/70">{event.desc}</p>
                          </div>
                          <div className="mt-8 flex items-center justify-between border-t border-brand/10 pt-5">
                            <button className="font-['Montserrat'] text-[0.65rem] font-bold uppercase tracking-[0.2em] text-brand">Register interest →</button>
                            <span className="font-['EB_Garamond'] text-3xl italic text-brand/10">{event.id}</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>

            {/* Progress Bar (Keep original) */}
            <div className="px-[10%] pb-12 lg:pb-20 shrink-0">
              <div className="h-px w-full bg-brand/10">
                <div 
                  className="h-full bg-brand transition-all duration-300 ease-out" 
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MayabazarSection