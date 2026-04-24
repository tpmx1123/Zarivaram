import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PRIMARY_NAV, REQUEST_VIEWING, STORE_ROUTE, navLinkText } from '../constants/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()
  const onStore = pathname === STORE_ROUTE.to

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
    'https://res.cloudinary.com/dvnplfu6z/image/upload/v1776678194/ZARIVARAM_logo_nsuuw5_xt0o3g.png'

  return (
    <>
      {/* Glass navbar over hero image */}
      <nav aria-label="Primary navigation" className="relative z-70 flex items-center justify-between px-3 sm:px-4 md:px-6 bg-white/80 backdrop-blur-lg border-b border-brand/15 rounded-full py-2">
        <Link to="/" title="Zarivaram home" className="shrink-0">
          <img
            src={logoUrl}
            alt="Zarivaram"
            className="h-auto w-[180px] md:w-[180px]"
          />
        </Link>

        <div className="hidden items-center gap-7 xl:gap-9 xl:flex ">
          {PRIMARY_NAV.map((link) => (
            <a
              key={link.href}
              href={link.href}
              title={navLinkText(link)}
              className="text-xs uppercase font-['Montserrat'] font-bold tracking-widest text-brand transition-colors hover:text-brand"
            >
              {navLinkText(link)}
            </a>
          ))}
          <Link
            to={STORE_ROUTE.to}
            title={STORE_ROUTE.label}
            className={`text-xs uppercase font-['Montserrat'] font-bold tracking-widest transition-colors ${
              onStore ? 'text-foreground underline decoration-brand/40 underline-offset-4' : 'text-brand hover:text-brand'
            }`}
          >
            {STORE_ROUTE.label}
          </Link>
          <a
            href={REQUEST_VIEWING.href}
            title={REQUEST_VIEWING.label}
            className="border border-brand px-5 py-2 text-xs uppercase font-['Montserrat'] font-semibold text-white transition-colors bg-brand hover:bg-white hover:text-brand xl:px-6 rounded-full"
          >
            {REQUEST_VIEWING.label}
          </a>
        </div>

        <button
          type="button"
          className="relative z-80 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-transparent transition-colors hover:border-brand/15 hover:bg-brand/5 xl:hidden"
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
        className={`fixed inset-0 z-60 flex flex-col items-center justify-center bg-background/95 backdrop-blur-lg xl:hidden ${
          isOpen ? 'pointer-events-auto visible opacity-100' : 'pointer-events-none invisible opacity-0'
        } transition-[opacity,visibility] duration-300 ease-out`}
        aria-hidden={!isOpen}
      >
        

        <nav aria-label="Mobile primary navigation" className="relative z-10 flex w-full max-w-sm flex-col items-center gap-1 px-6">
          {PRIMARY_NAV.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              title={link.label}
              className={`w-full py-3 text-center text-base font-medium uppercase tracking-widest text-foreground transition-all duration-300 hover:text-brand ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: isOpen ? `${80 + i * 70}ms` : '0ms' }}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <Link
            to={STORE_ROUTE.to}
            title={STORE_ROUTE.label}
            className={`w-full py-3 text-center text-base font-medium uppercase tracking-widest transition-all duration-300 hover:text-brand ${
              onStore ? 'text-brand' : 'text-foreground'
            } ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            style={{ transitionDelay: isOpen ? `${80 + PRIMARY_NAV.length * 70}ms` : '0ms' }}
            onClick={() => setIsOpen(false)}
          >
            {STORE_ROUTE.label}
          </Link>

          <a
            href={REQUEST_VIEWING.href}
            title={REQUEST_VIEWING.label}
            className={`mt-6 border border-brand bg-brand px-8 py-3 text-center text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-brand/90 ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: isOpen ? `${80 + (PRIMARY_NAV.length + 1) * 70 + 40}ms` : '0ms' }}
            onClick={() => setIsOpen(false)}
          >
            {REQUEST_VIEWING.label}
          </a>
        </nav>

        
      </div>
    </>
  )
}

export default Navbar
