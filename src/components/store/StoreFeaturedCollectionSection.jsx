import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { collections } from '../../data/collections'

const featuredItems = collections.slice(0, 5).map((item, index) => ({
  id: `${item.slug}-${index}`,
  name: `${item.title} Silk Saree`,
  price: [28990, 45900, 32490, 27990, 49600][index],
  image: item.image,
}))
const loopedFeaturedItems = [...featuredItems, ...featuredItems]

function formatRupees(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

function StoreFeaturedCollectionSection() {
  const scrollerRef = useRef(null)
  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)
  const [isPaused, setIsPaused] = useState(false)

  const normalizeScrollPosition = useCallback((container) => {
    const loopPoint = container.scrollWidth / 2
    if (loopPoint <= 0) return

    if (container.scrollLeft >= loopPoint) {
      container.scrollLeft -= loopPoint
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += loopPoint
    }
  }, [])

  useEffect(() => {
    const container = scrollerRef.current
    if (!container) return undefined

    const timer = setInterval(() => {
      if (isPaused || isDraggingRef.current) return
      container.scrollLeft += 0.5 // Slightly faster for better mobile flow
      normalizeScrollPosition(container)
    }, 16)

    return () => clearInterval(timer)
  }, [isPaused, normalizeScrollPosition])

  const handleDragStart = (clientX) => {
    const container = scrollerRef.current
    if (!container) return
    isDraggingRef.current = true
    startXRef.current = clientX
    scrollLeftRef.current = container.scrollLeft
  }

  const handleDragMove = (clientX) => {
    const container = scrollerRef.current
    if (!container || !isDraggingRef.current) return
    const delta = clientX - startXRef.current
    container.scrollLeft = scrollLeftRef.current - delta
    normalizeScrollPosition(container)
  }

  const handleDragEnd = () => {
    isDraggingRef.current = false
  }

  return (
    <section className="bg-[#fffdf9] py-16 lg:py-24" aria-label="Featured collection">
      <div className="mx-auto max-w-[1440px]">
        
        {/* Header - Optimized for Mobile Padding */}
        <div className="mb-10 px-[6%] sm:px-8 flex items-end justify-between">
          <div className="max-w-[70%]">
            
            <h2 className="font-['EB_Garamond'] text-4xl font-extralight text-foreground sm:text-5xl">
              Featured <span className="italic text-brand">Arrivals</span>
            </h2>
          </div>
          <Link
            to="/store/collections/all"
            className="hidden sm:inline-block border border-brand bg-brand px-7 py-2.5 font-['Montserrat'] text-[0.62rem] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-foreground"
          >
            View All
          </Link>
        </div>

        {/* Swiper Track - Card width adjusted to 72% so next card 'peeks' in */}
        <div
          ref={scrollerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto px-[6%] pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            handleDragEnd()
            setIsPaused(false)
          }}
          onMouseDown={(e) => handleDragStart(e.pageX)}
          onMouseMove={(e) => handleDragMove(e.pageX)}
          onMouseUp={handleDragEnd}
          onTouchStart={(e) => handleDragStart(e.touches[0].pageX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].pageX)}
          onTouchEnd={handleDragEnd}
        >
          {loopedFeaturedItems.map((item, index) => (
            <article 
              key={`${item.id}-${index}`} 
              className="group w-[72%] shrink-0 sm:w-[45%] lg:w-[24%] transition-all duration-500"
            >
              <div className="relative mb-6 overflow-hidden rounded-sm bg-[#F4F1EA] shadow-sm group-hover:shadow-xl transition-shadow">
                <img
                  src={item.image}
                  alt={item.name}
                  className="aspect-[3/4] h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Mobile Quick Add Link */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  
                </div>
              </div>
              
              <div className="space-y-1">
                <h3 className="font-['EB_Garamond'] text-2xl leading-tight text-foreground group-hover:text-brand transition-colors">
                  {item.name}
                </h3>
                <div className="flex items-center gap-3">
                   <p className="font-['Montserrat'] text-[0.8rem] font-medium text-foreground/60">
                    {formatRupees(item.price)}
                  </p>
                  <div className="h-px w-4 bg-brand/20"></div>
                  <span className="font-['Montserrat'] text-[0.5rem] font-bold text-brand uppercase tracking-widest">Limited</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View More - Center Aligned */}
        <div className="mt-12 px-[6%] sm:hidden">
          <Link
            to="/store/collections/all"
            className="flex items-center justify-center gap-4 w-full  py-5 font-['Montserrat'] text-[0.7rem] font-bold uppercase tracking-[0.3em]  bg-brand text-white transition-all"
          >
            <span>View All</span>
          
          </Link>
        </div>
      </div>
    </section>
  )
}

export default StoreFeaturedCollectionSection