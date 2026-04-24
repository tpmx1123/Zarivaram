import { collections } from '../../../data/collections'
import { Link } from 'react-router-dom'

const collection = collections[2]

const sarees = [
  { id: 'balagam-1', name: 'Balagam Saree 1', tag: 'Classic', price: 25900, image: collection.image, desc: 'Crafted for movement and celebration. Lighter drape, festive detailing, and comfortable styling.' },
  { id: 'balagam-2', name: 'Balagam Saree 2', tag: 'Festive', price: 27400, image: collection.hoverImage, desc: 'A vibrant weave designed for the spirited chaos of home rituals.' },
  { id: 'balagam-3', name: 'Balagam Saree 3', tag: 'Signature', price: 24150, image: collection.image, desc: 'Elegant simplicity for pre-wedding gatherings and shared memories.' },
]

function formatRupees(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

function BalagamCollectionSection() {
  return (
    <section
      id={`store-${collection.slug}`}
      className="bg-background "
      aria-label={`${collection.title} collection`}
    >
      <div className=" max-w-[1440px] ]">
        {/* Section Header */}
        <div className="pb-8 text-center">
          <Link to="/store/collections/all?collection=Balagam">
            <h3 className="font-['EB_Garamond'] text-4xl font-extralight text-foreground transition-colors hover:text-brand lg:text-6xl">
              {collection.title}
            </h3>
          </Link>
          <p className="mt-4 font-['EB_Garamond'] text-xl italic text-brand/75">
            {collection.subtitle} — Crafted for the beautiful chaos of a wedding home.
          </p>
        </div>

        {/* Alternating Editorial Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          
          {/* CARD 01: TEXT TOP / IMAGE BOTTOM */}
          <article className="group flex flex-col bg-white border border-brand/5 p-6 lg:p-8 shadow-sm transition-all hover:shadow-xl">
            <div className="mb-6">
              <p className="font-['Montserrat'] text-[0.55rem] font-bold uppercase tracking-[0.25em] text-brand/80">
                Spotlight
              </p>
              <h4 className="mt-3 font-['EB_Garamond'] text-2xl lg:text-3xl text-foreground group-hover:text-brand transition-colors">
                {sarees[0].name}
              </h4>
              <p className="mt-3 font-['Montserrat'] text-[0.8rem] leading-relaxed text-foreground/60">
                {sarees[0].desc}
              </p>
              <p className="mt-4 font-['Montserrat'] text-sm font-semibold text-foreground">
                {formatRupees(sarees[0].price)}
              </p>
            </div>
            <div className="mt-auto overflow-hidden">
              <img
                src={sarees[0].image}
                alt={sarees[0].name}
                className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </article>

          {/* CARD 02: IMAGE TOP / TEXT BOTTOM */}
          <article className="group flex flex-col bg-white border border-brand/5 p-6 lg:p-8 shadow-sm transition-all hover:shadow-xl">
            <div className="mb-6 overflow-hidden">
              <img
                src={sarees[1].image}
                alt={sarees[1].name}
                className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="mt-auto">
              <p className="font-['Montserrat'] text-[0.55rem] font-bold uppercase tracking-[0.25em] text-brand/80">
                {sarees[1].tag}
              </p>
              <h4 className="mt-3 font-['EB_Garamond'] text-2xl lg:text-3xl text-foreground group-hover:text-brand transition-colors">
                {sarees[1].name}
              </h4>
              <p className="mt-3 font-['Montserrat'] text-[0.8rem] leading-relaxed text-foreground/60">
                {sarees[1].desc}
              </p>
              <p className="mt-4 font-['Montserrat'] text-sm font-semibold text-foreground">
                {formatRupees(sarees[1].price)}
              </p>
            </div>
          </article>

          {/* CARD 03: TEXT TOP / IMAGE BOTTOM */}
          <article className="group flex flex-col bg-white border border-brand/5 p-6 lg:p-8 shadow-sm transition-all hover:shadow-xl">
            <div className="mb-6">
              <p className="font-['Montserrat'] text-[0.55rem] font-bold uppercase tracking-[0.25em] text-brand/80">
                {sarees[2].tag}
              </p>
              <h4 className="mt-3 font-['EB_Garamond'] text-2xl lg:text-3xl text-foreground group-hover:text-brand transition-colors">
                {sarees[2].name}
              </h4>
              <p className="mt-3 font-['Montserrat'] text-[0.8rem] leading-relaxed text-foreground/60">
                {sarees[2].desc}
              </p>
              <p className="mt-4 font-['Montserrat'] text-sm font-semibold text-foreground">
                {formatRupees(sarees[2].price)}
              </p>
            </div>
            <div className="mt-auto overflow-hidden">
              <img
                src={sarees[2].image}
                alt={sarees[2].name}
                className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </article>

        </div>
        <div className="mt-10 flex justify-center">
          <Link
            to="/store/collections/all?collection=Balagam"
            className="border border-brand bg-brand px-7 py-2.5 font-['Montserrat'] text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-brand/90"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BalagamCollectionSection