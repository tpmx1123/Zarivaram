import React, { useRef, useState } from 'react'
import { collections } from '../data/collections'

const ZoomImage = ({ src, alt }) => {
  const [showZoom, setShowZoom] = useState(false)
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)

  const handleMouseMove = (e) => {
    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const x = ((e.pageX - left - window.scrollX) / width) * 100
    const y = ((e.pageY - top - window.scrollY) / height) * 100
    setZoomPos({ x, y })
  }

  return (
    <div 
      ref={containerRef}
      className="relative aspect-4/5 overflow-hidden rounded-t-xl sm:aspect-3/4 sm:rounded-none"
      style={{
        cursor: `url("https://res.cloudinary.com/di4caiech/image/upload/q_auto,f_auto,w_42/v1776155318/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI1LTAxL3Jhd3BpeGVsb2ZmaWNlOF9pc29sYXRlZF92aW50YWdlX2NvbGxhZ2VfYXJ0X29mX2dvbGRfZ2xpdHRlcl9kcl9hNTAwMTgyNi00MTZkLTRlMzktYmE4OS03OWJhYTE4YWY2ZDQtbTV1c2huYzEucG5n-rem_1_2_yuntnc.png") 16 16, zoom-in`
      }}
      onMouseEnter={() => setShowZoom(true)}
      onMouseLeave={() => setShowZoom(false)}
      onMouseMove={handleMouseMove}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-opacity duration-300"
        loading="lazy"
      />

      {showZoom && (
        <div 
          className="absolute inset-0 z-30 pointer-events-none border-2 border-brand/20"
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
            backgroundSize: '250%',
            backgroundRepeat: 'no-repeat'
          }}
        />
      )}
      
      {!showZoom && (
        <div className="absolute bottom-4 right-4 hidden text-[0.5rem] uppercase tracking-widest text-brand/40 lg:block">
          Hover to inspect weave
        </div>
      )}
    </div>
  )
}

const CollectionsSection = () => {
  return (
    <section id="collections" className="bg-background py-10 sm:py-12 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-[5%]">

        <div className="mb-3 flex flex-col items-start justify-between gap-6 border-b border-brand/10 pb-8 sm:mb-14 sm:gap-10 sm:pb-12 lg:mb-2 lg:flex-row lg:items-end lg:gap-10 lg:pb-16">
          <div className="relative max-w-2xl">
            <div className="absolute -left-6 top-0 hidden h-full w-px bg-brand/20 lg:block" />
            <span className="mb-3 block font-['Montserrat'] text-[0.55rem] font-bold uppercase tracking-[0.26em] text-brand/80 sm:mb-6 sm:text-[0.6rem] sm:tracking-[0.3em]">
              The Five Collections
            </span>
            <h2 className="font-['EB_Garamond'] text-[2rem] font-extralight leading-[1.1] text-foreground sm:text-6xl lg:text-7xl">
              Sarees for every <br />
              <span className="text-brand">woman, every moment</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-5 lg:gap-8 xl:gap-6">
          {collections.map((item) => (
            <div
              key={item.id}
              className="group block rounded-xl"
            >
              <article className="flex flex-col overflow-hidden rounded-xl border border-brand/10 bg-white/80 shadow-[0_8px_24px_rgba(47,38,19,0.05)] transition-all duration-500 sm:rounded-none sm:border-0 sm:bg-transparent sm:shadow-none lg:overflow-visible">
                <ZoomImage src={item.image} alt={item.title} />

                <div className="flex flex-1 flex-col px-4 pb-5 pt-4 sm:px-4 sm:pb-5 sm:pt-3 lg:px-0 lg:pb-0 lg:pt-6">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="font-['EB_Garamond'] text-xs italic text-brand/40">{item.id}</span>
                    <div className="h-px flex-1 bg-brand/10 transition-colors lg:group-hover:bg-brand/40" />
                  </div>

                  <h3 className="mb-2 font-['EB_Garamond'] text-[1.3rem] font-normal leading-tight tracking-wide text-foreground sm:text-2xl lg:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mb-3 font-['EB_Garamond'] text-sm italic text-brand/70">
                    {item.subtitle}
                  </p>

                  <p className="font-['Montserrat'] text-[0.8rem] leading-[1.6] text-foreground/60 line-clamp-3 transition-colors lg:group-hover:text-foreground/90">
                    {item.desc}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CollectionsSection