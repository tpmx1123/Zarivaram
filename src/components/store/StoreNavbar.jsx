import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const STORE_LOGO =
  'https://res.cloudinary.com/dvnplfu6z/image/upload/v1776921469/Zarivaram_logo_dzfjrq.png'

const TOP_NAV = [
  { label: 'Home', to: '/store' },
  { label: 'Shop Now', to: '/store/collections/all' },
  { label: 'Collections', isDropdown: true },
  { label: 'About', to: '/#about' },
]

const COLLECTION_LINKS = [
  { label: 'Gouramma', to: '/store#store-gouramma' },
  { label: 'Laggam', to: '/store#store-laggam' },
  { label: 'Balagam', to: '/store#store-balagam' },
  { label: 'Chilakamma', to: '/store#store-chilakamma' },
  { label: 'Anantham', to: '/store#store-anantham' },
]

const IconSearch = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 4.5 4.5" />
  </svg>
)

const IconCart = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M2.5 4h2.7l2 10.2a1.4 1.4 0 0 0 1.4 1.1h8.9a1.4 1.4 0 0 0 1.4-1.1L21 7.4H6.2" />
    <circle cx="9.2" cy="19.1" r="1.2" />
    <circle cx="17.1" cy="19.1" r="1.2" />
  </svg>
)

function StoreNavbar({ variant = 'overlay' }) {
  const isLight = variant === 'light'
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <header className={`group inset-x-0 top-0 z-100 ${isLight ? 'fixed bg-white text-black border-b border-black/10' : 'absolute text-white'}`}>
      <div className="flex items-center justify-center bg-black/85 px-4 py-1.5 text-center sm:h-8 sm:py-0">
        <p className="m-0 font-['Montserrat'] text-[0.64rem] leading-tight sm:leading-none font-semibold uppercase tracking-[0.24em] text-white/90">
          Orders are currently being assisted through online. Please visit the store.
        </p>
      </div>

      <div
        className={`mx-auto flex max-w-[1400px] items-center justify-between px-4 pb-3 pt-2 transition-colors duration-300 sm:px-8 ${
          isLight ? 'bg-white' : 'bg-transparent group-hover:bg-white'
        }`}
      >
        <div className="flex w-28 items-center sm:w-36">
          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="store-mobile-menu"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className={`inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors lg:hidden ${
              isLight
                ? 'border border-black/30 bg-white text-black hover:bg-black/5'
                : 'border border-white/35 bg-black/20 text-white group-hover:border-black/30 group-hover:bg-white group-hover:text-black'
            }`}
          >
            <span className="sr-only">Toggle menu</span>
            <span
              className={`absolute h-0.5 w-4 rounded-full bg-current transition-transform duration-300 ${
                isMobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'
              }`}
            />
            <span
              className={`absolute h-0.5 w-4 rounded-full bg-current transition-opacity duration-200 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute h-0.5 w-4 rounded-full bg-current transition-transform duration-300 ${
                isMobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'
              }`}
            />
          </button>
        </div>
        <Link to="/store" className="shrink-0">
          <img src={STORE_LOGO} alt="Zarivaram Store" className="h-auto w-[190px] sm:w-[240px]" />
        </Link>

        <div className={`flex w-28 items-center justify-end gap-2 sm:w-36 sm:gap-3 ${isLight ? 'text-black' : 'text-white group-hover:text-black'}`}>
          <button
            type="button"
            aria-label="Search"
            className={`inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
              isLight
                ? 'border border-black/30 bg-white hover:bg-black/5'
                : 'border border-white/30 bg-black/25 hover:bg-black/45 group-hover:border-black/25 group-hover:bg-white'
            }`}
          >
            <IconSearch />
          </button>
          <button
            type="button"
            aria-label="Cart"
            className={`inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
              isLight
                ? 'border border-black/30 bg-white hover:bg-black/5'
                : 'border border-white/30 bg-black/25 hover:bg-black/45 group-hover:border-black/25 group-hover:bg-white'
            }`}
          >
            <IconCart />
          </button>
        </div>
      </div>

      <nav
        aria-label="Store primary navigation"
        className={`mx-auto hidden max-w-[1400px] items-center justify-center gap-8 px-5 pb-4 transition-colors duration-300 lg:flex ${
          isLight ? 'bg-white' : 'bg-transparent group-hover:bg-white'
        }`}
      >
        {TOP_NAV.map((item) => {
          if (item.isDropdown) {
            return (
              <div key={item.label} className="group/collections relative">
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-label="Open collections menu"
                  className={`inline-flex items-center gap-1 font-['Montserrat'] text-[0.72rem] font-bold uppercase tracking-[0.2em] transition-colors ${
                    isLight ? 'text-black hover:text-brand' : 'text-white/95 group-hover:text-black hover:text-brand'
                  }`}
                >
                  {item.label}
                </button>
                <div className="invisible absolute left-1/2 top-full z-20 mt-2 w-52 -translate-x-1/2 border border-black/10 bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover/collections:visible group-hover/collections:opacity-100">
                  {COLLECTION_LINKS.map((collection) => (
                    <a
                      key={collection.label}
                      href={collection.to}
                      title={`${collection.label} collection`}
                      className="block px-4 py-2 font-['Montserrat'] text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-black transition-colors hover:bg-black/5 hover:text-brand"
                    >
                      {collection.label}
                    </a>
                  ))}
                </div>
              </div>
            )
          }

          return (
            <Link
              key={item.label}
              to={item.to}
              title={item.label}
              className={`inline-flex items-center gap-1 font-['Montserrat'] text-[0.72rem] font-bold uppercase tracking-[0.2em] transition-colors ${
                isLight ? 'text-black hover:text-brand' : 'text-white/95 group-hover:text-black hover:text-brand'
              }`}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div
        id="store-mobile-menu"
        role="dialog"
        aria-label="Mobile menu"
        className={`fixed inset-0 z-120 bg-black/35 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div
          className={`absolute inset-x-0 bottom-0 top-0 bg-white px-6 pt-22 transition-transform duration-500 ease-out ${
            isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute right-6 top-8 inline-flex items-center gap-2 border border-black/20 px-3 py-1.5 font-['Montserrat'] text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-black transition-colors hover:bg-black/5"
          >
            <span>Close</span>
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
          <div className="mx-auto flex max-w-md flex-col gap-2">
            <Link
              to="/store"
              onClick={() => setIsMobileMenuOpen(false)}
              title="Store home"
              className={`border-b border-black/10 py-3 font-['Montserrat'] text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-black transition-all duration-300 ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? '80ms' : '0ms' }}
            >
              Home
            </Link>
            <Link
              to="/store/collections/all"
              onClick={() => setIsMobileMenuOpen(false)}
              title="All collections"
              className={`border-b border-black/10 py-3 font-['Montserrat'] text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-black transition-all duration-300 ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? '120ms' : '0ms' }}
            >
              Shop Now
            </Link>
            <p
              className={`pt-4 font-['Montserrat'] text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-black/55 transition-all duration-300 ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? '160ms' : '0ms' }}
            >
              Collections
            </p>
            {COLLECTION_LINKS.map((collection, index) => (
              <a
                key={collection.label}
                href={collection.to}
                onClick={() => setIsMobileMenuOpen(false)}
                title={`${collection.label} collection`}
                className={`border-b border-black/8 py-2.5 pl-2 font-['Montserrat'] text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-black/90 transition-all duration-300 ${
                  isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${200 + index * 35}ms` : '0ms' }}
              >
                {collection.label}
              </a>
            ))}
            <Link
              to="/#about"
              onClick={() => setIsMobileMenuOpen(false)}
              title="About Zarivaram"
              className={`mt-4 border border-black/20 px-4 py-3 text-center font-['Montserrat'] text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-black transition-all duration-300 ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? '420ms' : '0ms' }}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default StoreNavbar
