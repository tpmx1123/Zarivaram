const HERO_IMAGE =
  ''

function StoreHeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden" aria-label="Zarivaram online store hero">
      <img
        src={HERO_IMAGE}
        alt="Zarivaram store hero"
        className="absolute inset-0 h-full w-full object-cover object-center"
        decoding="async"
        fetchPriority="high"
      />

      <div className="pointer-events-none absolute inset-0 bg-black/28" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#dcc2a3]/65 via-[#dcc2a3]/35 to-transparent"
        aria-hidden
      />

    
    </section>
  )
}

export default StoreHeroSection
