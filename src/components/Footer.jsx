import { PRIMARY_NAV, REQUEST_VIEWING } from '../constants/navigation'

const FOOTER_BG =
  'https://res.cloudinary.com/dvnplfu6z/image/upload/v1776678827/MB_Teaser_Seson_4_vois6m.png'

const FOOTER_LOGO =
  'https://res.cloudinary.com/dvnplfu6z/image/upload/v1776678826/Group_1171289163_tnrrat.png'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-brand/15">
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-cover bg-bottom bg-no-repeat"
        style={{ backgroundImage: `url(${FOOTER_BG})`}}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-1 bg-linear-to-b from-background/88 via-background/75 to-background/90"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center gap-10 px-[6%] pt-14 pb-6 sm:pt-16 sm:pb-8 lg:gap-12 lg:pt-10 lg:pb-4">
        <a href="/" className="block ">
          <img
            src={FOOTER_LOGO}
            alt="Zarivaram"
            className="mx-auto h-auto w-[min(180px,52vw)] sm:w-[160px]"
            width={220}
            height={220}
          />
        </a>

        <nav
          aria-label="Footer"
          className="flex w-full max-w-2xl flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-10 sm:gap-y-3"
        >
          {PRIMARY_NAV.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-center font-['Montserrat'] text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-foreground/90 transition-colors hover:text-brand sm:text-[0.65rem]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={REQUEST_VIEWING.href}
            className="border border-brand/80 bg-brand/10 px-5 py-2.5 text-center font-['Montserrat'] text-[0.65rem] font-bold uppercase tracking-[0.2em] text-brand transition-colors hover:bg-brand hover:text-white sm:px-6 sm:py-2"
          >
            {REQUEST_VIEWING.label}
          </a>
        </nav>

        <div className="w-full max-w-md border-t border-brand/20 pt-8 text-center">
          <p className="font-['Montserrat'] text-[0.65rem] uppercase tracking-[0.05em] text-brand">Hyderabad</p>
          <p className="mt-1 font-['EB_Garamond'] text-sm italic text-foreground/90">Curated Saree Boutique</p>
          <p className="mt-6 font-['Montserrat'] text-[0.65rem] tracking-wide text-foreground/55">
            © {year} Zarivaram. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
