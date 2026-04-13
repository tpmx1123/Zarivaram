import React from 'react'

const consultationPoints = [
  { number: '1', label: 'The Date' },
  { number: '2', label: 'Your Role' },
  { number: '3', label: 'Your Vision' },
]

const whatsappUrl =
  'https://wa.me/919000000000?text=Hello%20Zarivaram%2C%20I%20would%20like%20to%20request%20a%20private%20viewing.'

const PrivateViewing = () => {
  return (
    <section
      id="private-viewing"
      className="relative overflow-hidden border-t border-brand/20 bg-[#f6efe5] py-20 text-foreground lg:py-28"
      aria-labelledby="private-viewing-heading"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(194,151,52,0.2),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_85%,rgba(194,151,52,0.12),transparent_42%)]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-[6%] lg:px-[10%]">
        <div className="grid items-stretch gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="rounded-2xl border border-brand/20 bg-[#fbf7f0] p-8 sm:p-10 lg:p-12">
            <p className="font-['Montserrat'] text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-brand/90">
              Exclusivity · Personal Service
            </p>

            <h2
              id="private-viewing-heading"
              className="mt-5 font-['EB_Garamond'] text-5xl font-light leading-[0.98] text-foreground sm:text-6xl lg:text-7xl"
            >
              Request a
              <br />
              <span className="italic text-brand">Private Viewing</span>
            </h2>

            <p className="mt-7 max-w-[620px] font-['Montserrat'] text-[0.85rem] leading-7 text-foreground/75 lg:text-[0.92rem]">
              Every Zarivaram saree is presented by a consultant who understands the occasion as well as the weave.
            </p>

            <div className="mt-9 space-y-4 border-t border-brand/20 pt-8">
              {consultationPoints.map((item) => (
                <div key={item.number} className="flex items-center gap-4">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-brand/45 bg-white/70 font-['Montserrat'] text-[0.62rem] font-bold text-brand">
                    {item.number}
                  </span>
                  <span className="font-['Montserrat'] text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-foreground/80">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-brand/25 bg-[#fffaf2] p-8 shadow-[0_16px_40px_rgba(160,120,55,0.12)] sm:p-10 lg:p-12">
            <p className="font-['EB_Garamond'] text-[2rem] leading-tight text-foreground sm:text-[2.3rem]">
              When is the occasion?
            </p>
            <p className="mt-4 font-['Montserrat'] text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-foreground/55">
              Month · Year · City
            </p>

            <p className="mt-8 max-w-[500px] font-['Montserrat'] text-[0.8rem] leading-7 text-foreground/70">
              Share your event details on WhatsApp and our team will personally guide you to the right weave, drape, and palette.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 border border-brand/35 bg-brand px-7 py-3 font-['Montserrat'] text-[0.66rem] font-bold uppercase tracking-[0.18em] text-white transition-all hover:bg-brand/90"
            >
              Continue on WhatsApp
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrivateViewing
