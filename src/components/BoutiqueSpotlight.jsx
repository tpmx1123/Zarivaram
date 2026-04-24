import React, { useState } from 'react'

const SPECS = [
  { label: 'Collection', value: 'Gouramma Collection' },
  { label: 'Palette', value: 'Crimson · Gold · Ivory' },
  { label: 'For', value: 'Mother of the Bride' },
  { label: 'Weave', value: 'Pure Mulberry Silk' },
  { label: 'Craft Time', value: '18 days · 2 weavers' },
]

const THUMBNAILS = [
  'https://res.cloudinary.com/dvnplfu6z/image/upload/v1776678198/_DSC5190_copy_1_dp8ppe.png',
  'https://res.cloudinary.com/dvnplfu6z/image/upload/v1776678195/Slide_4_efl3wt.png',
  'https://res.cloudinary.com/dvnplfu6z/image/upload/v1776678195/Slide_5_c7sbbc.png',
]
const WHATSAPP_NUMBER = '+91 8328657726'

const BoutiqueSpotlight = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = THUMBNAILS[activeIndex]
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`

  const showPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? THUMBNAILS.length - 1 : prev - 1))
  }

  const showNext = () => {
    setActiveIndex((prev) => (prev === THUMBNAILS.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="border-t border-brand/10  py-14 lg:py-20">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <div className="mb-10 text-center lg:mb-12">
          <span className="mb-3 block font-['Montserrat'] text-[0.62rem] font-bold uppercase tracking-[0.28em] text-brand/70">
            From the Boutique
          </span>
          <h2 className="font-['EB_Garamond'] text-5xl font-normal leading-[0.98] text-[#2d261f] sm:text-6xl lg:text-7xl">
            The Kanakadhara <br />
            <span className="font-light italic text-brand">Kanchipuram Silk</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-10">
          <div>
            <div className="rounded-[12px] border border-brand/25 bg-[#f1ebdf] p-2 shadow-[0_10px_35px_rgba(130,101,42,0.08)]">
              <div className="relative overflow-hidden rounded-[10px]">
                <img src={activeImage} alt="Kanakadhara silk saree" className="h-[360px] w-full object-cover sm:h-[460px]" />

              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-3 sm:gap-4">
              <button
                type="button"
                aria-label="Previous image"
                className="text-brand/45 transition hover:text-brand"
                onClick={showPrevious}
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <div className="flex gap-2 sm:gap-3">
                {THUMBNAILS.map((thumb, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`overflow-hidden rounded-lg border bg-white p-1 transition ${
                      activeIndex === index ? 'border-brand/70 ring-1 ring-brand/30' : 'border-brand/20 hover:border-brand/45'
                    }`}
                    aria-label={`Thumbnail ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <img src={thumb} alt="" className="h-12 w-14 rounded-md object-cover sm:h-14 sm:w-16" />
                  </button>
                ))}
              </div>

              <button type="button" aria-label="Next image" className="text-brand/45 transition hover:text-brand" onClick={showNext}>
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              {SPECS.map((spec) => (
                <div key={spec.label} className="rounded-[10px] border border-brand/18 bg-[#f9f6ef] px-4 py-3.5">
                  <span className="mb-1 block font-['Montserrat'] text-[0.62rem] font-bold uppercase tracking-[0.18em] text-brand/75">
                    {spec.label}
                  </span>
                  <span className="font-['Montserrat'] text-[0.9rem] font-medium text-[#2f2a24]">{spec.value}</span>
                </div>
              ))}
            </div>

            <div className="relative rounded-[10px] border border-brand/35 bg-[#f9f6ef] px-5 py-4">
              <span className="absolute left-3 top-1 font-['EB_Garamond'] text-4xl text-brand/55">&ldquo;</span>
              <p className="px-4 font-['EB_Garamond'] text-[1.38rem] leading-[1.35] text-[#302920]">
                Held by 12 families this season - each a different name, the same devotion.
              </p>
              <span className="absolute bottom-0 right-3 font-['EB_Garamond'] text-4xl text-brand/55">&rdquo;</span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                className="rounded-[10px] bg-brand px-4 py-4 font-['Montserrat'] text-[0.66rem] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-brand/90"
              >
                Acquire Piece
              </button>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-[10px] border border-brand/30 bg-[#f9f6ef] px-4 py-4 font-['Montserrat'] text-[0.66rem] font-bold uppercase tracking-[0.2em] text-brand transition hover:bg-brand/5 flex items-center justify-center"
              >
                WhatsApp Consultant
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BoutiqueSpotlight