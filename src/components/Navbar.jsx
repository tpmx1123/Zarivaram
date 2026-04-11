import { useEffect, useState } from 'react'

const MOBILE_LINKS = [
  { href: '#collections', label: 'Collections' },
  { href: '#mayabazar', label: 'Mayabazar Events' },
  { href: '#diaries', label: 'Diaries of Abhilasha' },
  { href: '#about', label: 'Heritage & Craft' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen])

  const logoUrl =
    'https://res.cloudinary.com/di4caiech/image/upload/q_auto/f_auto/v1775731958/ZARIVARAM_logo_nsuuw5.png'

  return (
    <>
      {/* Bar stays above the full-screen overlay (z-60 &lt; z-70) */}
      <nav className="sticky top-0 z-70 flex items-center justify-between border-b border-brand/10 bg-background/95 px-4 py-4 backdrop-blur-md supports-backdrop-filter:bg-background/80">
        <a href="/" className="shrink-0">
          <img src={logoUrl} alt="Zarivaram" className="h-auto w-[130px] md:w-[180px]" />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {['Collections', 'Mayabazar', 'Diaries', 'About'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs uppercase tracking-widest text-foreground transition-colors hover:text-brand"
            >
              {item}
            </a>
          ))}
          <button
            type="button"
            className="border border-brand px-6 py-2 text-xs uppercase text-brand transition-colors hover:bg-brand hover:text-white"
          >
            Request Viewing
          </button>
        </div>

        <button
          type="button"
          className="relative z-80 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-transparent transition-colors hover:border-brand/15 hover:bg-brand/5 lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu-overlay"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((o) => !o)}
        >
          <span
            className={`h-0.5 w-6 origin-center rounded-full bg-brand transition-transform duration-300 ease-out ${
              isOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-brand transition-opacity duration-200 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
          />
          <span
            className={`h-0.5 w-6 origin-center rounded-full bg-brand transition-transform duration-300 ease-out ${
              isOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Sibling of <nav>: fixed overlay is NOT trapped by nav backdrop-filter */}
      <div
        id="mobile-menu-overlay"
        className={`fixed inset-0 z-60 flex flex-col items-center justify-center bg-background lg:hidden ${
          isOpen ? 'pointer-events-auto visible opacity-100' : 'pointer-events-none invisible opacity-0'
        } transition-[opacity,visibility] duration-300 ease-out`}
        aria-hidden={!isOpen}
      >
        <nav className="relative z-10 flex w-full max-w-sm flex-col items-center gap-1 px-6">
          {MOBILE_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`w-full py-3 text-center text-base font-medium uppercase tracking-widest text-foreground transition-all duration-300 hover:text-brand ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: isOpen ? `${80 + i * 70}ms` : '0ms' }}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <button
            type="button"
            className={`mt-6 border border-brand bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-brand/90 ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: isOpen ? `${80 + MOBILE_LINKS.length * 70 + 40}ms` : '0ms' }}
            onClick={() => setIsOpen(false)}
          >
            Request Viewing
          </button>
        </nav>

        <div
          className={`absolute bottom-10 left-0 right-0 z-10 text-center text-xs text-brand/60 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: isOpen ? '320ms' : '0ms' }}
        >
          <p className="uppercase tracking-widest">Hyderabad</p>
          <p className="mt-1 font-serif italic text-brand/50">Curated Saree Boutique</p>
        </div>
      </div>
    </>
  )
}

export default Navbar
