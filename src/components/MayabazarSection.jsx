import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'

const MAYABAZAR_SECTION_BG =
  'https://res.cloudinary.com/di4caiech/image/upload/q_auto/f_auto/v1776148953/Group_1171289030_1_berloh.png'

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
  const viewportRef = useRef(null)
  const trackRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [maxTranslate, setMaxTranslate] = useState(0)
  /** Extra width after the last card so scroll can end with card 04 centered. */
  const [trailPad, setTrailPad] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  const syncTrailPad = useCallback(() => {
    const track = trackRef.current
    const view = viewportRef.current
    if (!track || !view) return
    const vw = view.clientWidth
    const cards = track.querySelectorAll('[data-maya-card]')
    const last = cards[cards.length - 1]
    if (!last) return
    const desired = Math.max(0, last.offsetLeft + last.offsetWidth / 2 - vw / 2)
    const range = Math.max(0, track.scrollWidth - vw)
    const deficit = desired - range
    setTrailPad((prev) => {
      if (deficit > 2) return Math.max(prev, Math.ceil(deficit + 16))
      if (deficit < -96) return 0
      return prev
    })
  }, [])

  const syncMaxTranslate = useCallback(() => {
    const track = trackRef.current
    const view = viewportRef.current
    if (!track || !view) return
    const vw = view.clientWidth
    const cards = track.querySelectorAll('[data-maya-card]')
    const last = cards[cards.length - 1]
    if (!last) return
    const desired = Math.max(0, last.offsetLeft + last.offsetWidth / 2 - vw / 2)
    const range = Math.max(0, track.scrollWidth - vw)
    setMaxTranslate(Math.min(desired, range))
  }, [])

  useLayoutEffect(() => {
    syncTrailPad()
    const ro = new ResizeObserver(() => syncTrailPad())
    if (viewportRef.current) ro.observe(viewportRef.current)
    if (trackRef.current) ro.observe(trackRef.current)
    window.addEventListener('resize', syncTrailPad)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', syncTrailPad)
    }
  }, [syncTrailPad])

  useLayoutEffect(() => {
    syncMaxTranslate()
  }, [trailPad, syncMaxTranslate])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onMq = () => setReduceMotion(mq.matches)
    mq.addEventListener('change', onMq)
    return () => mq.removeEventListener('change', onMq)
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
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const translatePx = maxTranslate > 0 ? Math.min(progress * maxTranslate, maxTranslate) : 0
  const showScrollStage = !reduceMotion

  return (
    <section id="mayabazar" className="border-t border-brand/10 ">
      {showScrollStage ? (
        <div ref={ghostRef} className="relative w-full" style={{ height: `${events.length * 100}vh` }}>
          <div className="sticky top-10 flex h-dvh w-full max-h-screen flex-col overflow-x-clip overflow-y-visible">
            {/* Wide art: anchor left so the illustrated figure stays in frame on narrow viewports */}
            <div
              className="pointer-events-none absolute inset-0 z-10 bg-cover bg-left bg-no-repeat"
              style={{ backgroundImage: `url(${MAYABAZAR_SECTION_BG})` }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 z-1 bg-background/82 backdrop-blur-[1px]"
              aria-hidden
            />

            <div className="relative z-10 flex min-h-0 flex-1 flex-col">
            <div className="shrink-0 border-b border-brand/10 px-4 pb-5 pt-8 max-xl:max-w-full sm:px-[6%] xl:px-[12%] xl:pb-6 xl:pt-14">
              <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 max-xl:gap-5 xl:flex-row xl:items-end xl:gap-6">
                <div className="max-w-3xl">
                  <span className="mb-2 block font-['Montserrat'] text-[0.55rem] font-bold uppercase tracking-[0.45em] text-brand/80 max-xl:tracking-[0.35em] xl:mb-3 xl:text-[0.6rem] xl:tracking-[0.45em]">
                    Monthly events & gatherings
                  </span>
                  <h2 className="font-['EB_Garamond'] text-[1.55rem] font-extralight leading-[1.12] text-white max-xl:max-w-[20ch] sm:text-3xl sm:max-xl:text-5xl xl:text-5xl">
                    Mayabazar — <span className=" text-brand">the pop-up show</span>
                  </h2>
                </div>
                
              </div>
            </div>

            <div
              ref={viewportRef}
              className="relative flex min-h-0 flex-1 flex-col overflow-x-clip overflow-y-visible pb-12 pt-1 max-sm:pb-14 sm:pb-10 xl:pb-16"
            >
              <div
                ref={trackRef}
                className="flex min-h-0 w-full flex-1 items-center gap-6 px-[5%] py-5 will-change-transform max-sm:gap-4 max-sm:px-3 max-sm:py-4 sm:gap-8 sm:px-[5%] sm:py-6 xl:items-stretch xl:gap-10 xl:px-[8%] xl:py-8"
                style={{
                  transform: `translate3d(-${translatePx}px, 0, 0)`,
                }}
              >
                {events.map((event, index) => {
                  const imageFirst = index % 2 === 0
                  const o = cardFocusOpacity(index, progress)
                  const s = cardFocusScale(index, progress)
                  return (
                    <article
                      key={event.id}
                      data-maya-card
                      className="flex w-[min(88vw,900px)] shrink-0 origin-center overflow-hidden rounded-2xl border border-brand/10 bg-white/95 shadow-[0_12px_40px_rgba(47,38,19,0.07)] max-sm:rounded-xl sm:w-[min(92vw,900px)] max-xl:h-auto max-xl:max-h-[min(68dvh,500px)] max-xl:min-h-[min(38svh,280px)] xl:h-full xl:min-h-[min(52vh,400px)] xl:max-h-[min(62vh,480px)] xl:shadow-[0_16px_50px_rgba(47,38,19,0.08)]"
                      style={{
                        opacity: o,
                        transform: `scale(${s})`,
                      }}
                    >
                      <div
                        className={`flex min-h-0 w-full flex-1 flex-col xl:flex-row xl:items-stretch ${
                          imageFirst ? '' : 'xl:flex-row-reverse'
                        }`}
                      >
                        <div className="relative aspect-16/10 w-full shrink-0 bg-[#f4f1ea] max-sm:aspect-3/2 xl:aspect-auto xl:h-full xl:min-h-0 xl:w-[46%]">
                          <img
                            src={event.image}
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover"
                            loading={index === 0 ? 'eager' : 'lazy'}
                          />
                          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent xl:bg-linear-to-r" />
                        </div>

                        <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col justify-between p-4 max-sm:p-3.5 sm:p-6 xl:w-[54%] xl:py-7 xl:pl-7 xl:pr-7">
                          <div>
                            <div className="mb-3 flex flex-wrap items-center justify-between gap-2 max-sm:mb-2 max-sm:gap-1.5 xl:mb-4">
                              <div className="flex min-w-0 flex-1 items-center gap-2">
                                <span className="font-['EB_Garamond'] text-base italic text-brand/40 max-sm:text-sm xl:text-lg">
                                  {event.id}
                                </span>
                                <span className="h-px w-5 shrink-0 bg-brand/20 xl:w-6" />
                                <span className="font-['Montserrat'] text-[0.5rem] font-bold uppercase tracking-[0.2em] text-brand/60 max-sm:truncate sm:text-[0.55rem] sm:tracking-[0.24em]">
                                  {event.date}
                                </span>
                              </div>
                              <span className="shrink-0 rounded-full border border-brand/25 bg-background/90 px-2 py-0.5 font-['Montserrat'] text-[0.45rem] font-bold uppercase tracking-[0.16em] text-brand max-sm:max-w-36 max-sm:truncate sm:px-2.5 sm:py-1 sm:text-[0.5rem] sm:tracking-[0.18em]">
                                {event.tag}
                              </span>
                            </div>
                            <h3 className="mb-2 font-['EB_Garamond'] text-lg font-normal leading-snug text-foreground max-sm:text-base sm:mb-2 sm:text-lg sm:leading-tight xl:mb-2.5 xl:text-2xl">
                              {event.title}
                            </h3>
                            <p className="max-w-md font-['Montserrat'] text-[0.8rem] leading-[1.7] text-foreground/70 max-sm:text-[0.78rem] max-sm:leading-[1.65] sm:text-[0.85rem] sm:leading-[1.75]">
                              {event.desc}
                            </p>
                          </div>
                          <div className="mt-4 flex items-center justify-between border-t border-brand/10 pt-3 max-sm:mt-3 max-sm:pt-2.5 xl:mt-5 xl:pt-4">
                            <button
                              type="button"
                              className="group flex items-center gap-2 font-['Montserrat'] text-[0.6rem] font-bold uppercase tracking-[0.18em] text-brand"
                            >
                              <span>Register interest</span>
                              <span className="h-px w-6 bg-brand transition-all group-hover:w-10" />
                            </button>
                            <span className="font-['EB_Garamond'] text-2xl italic text-brand/6 max-sm:text-xl xl:text-3xl">
                              M
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  )
                })}
                {/* Base + dynamic trailing space so max scroll = “last card centered” */}
                <div
                  aria-hidden
                  className="shrink-0"
                  style={{
                    width: `calc(max(24px, (100vw - min(92vw, 900px)) / 2) + ${trailPad}px)`,
                  }}
                />
              </div>

              
            </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 z-0 bg-cover bg-left bg-no-repeat opacity-40"
            style={{ backgroundImage: `url(${MAYABAZAR_SECTION_BG})` }}
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 z-1 bg-background/90" aria-hidden />
          <div className="relative z-10 mx-auto max-w-[1440px] space-y-10 px-4 py-16 sm:px-6 xl:px-[8%]">
          {events.map((event, index) => {
            const imageFirst = index % 2 === 0
            return (
              <article
                key={event.id}
                className="overflow-hidden rounded-2xl border border-brand/10 bg-white/95 shadow-sm"
              >
                <div
                  className={`flex flex-col xl:flex-row ${imageFirst ? '' : 'xl:flex-row-reverse'}`}
                >
                  <div className="relative aspect-4/3 bg-[#f4f1ea] xl:w-1/2">
                    <img src={event.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                  </div>
                  <div className="p-8 xl:w-1/2">
                    <h3 className="font-['EB_Garamond'] text-2xl text-foreground">{event.title}</h3>
                    <p className="mt-3 font-['Montserrat'] text-sm text-foreground/70">{event.desc}</p>
                  </div>
                </div>
              </article>
            )
          })}
          </div>
        </div>
      )}
    </section>
  )
}

export default MayabazarSection
