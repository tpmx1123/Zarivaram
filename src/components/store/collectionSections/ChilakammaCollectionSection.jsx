import { collections } from '../../../data/collections'
import { Link } from 'react-router-dom'

const collection = collections[3]

const sarees = [
  { id: 'chilakamma-1', name: 'Chilakamma Saree 1', tag: 'Classic', price: 23200, image: collection.image },
  { id: 'chilakamma-2', name: 'Chilakamma Saree 2', tag: 'Festive', price: 24890, image: collection.hoverImage },
  { id: 'chilakamma-3', name: 'Chilakamma Saree 3', tag: 'Signature', price: 22600, image: collection.image },
]

function formatRupees(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

function ChilakammaCollectionSection() {
  return (
    <section
      id={`store-${collection.slug}`}
      className=" bg-background "
      aria-label={`${collection.title} collection`}
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-center">
          <Link to="/store/collections/all?collection=Chilakamma" className="group">
           
            <h3 className="font-['EB_Garamond'] text-3xl lg:text-6xl font-extralight text-foreground transition-colors group-hover:text-brand">
              {collection.title}
            </h3>
          </Link>
          <p className="mt-1 font-['EB_Garamond'] text-lg italic text-brand/70">{collection.subtitle}</p>
          <p className="mx-auto mt-4 max-w-2xl font-['Montserrat'] text-[0.8rem] leading-relaxed text-foreground/60">
            A playful color story for sisters and friends, woven to feel expressive and lightweight.
          </p>
        </div>

        {/* Mosaic Grid Layout - Forced 12-column grid on mobile too */}
        <div className="grid grid-cols-12 gap-3 lg:gap-5">
          
          {/* LEFT: Two-Row Stack (Spans 7 of 12 columns) */}
          <div className="col-span-7 grid gap-3 lg:gap-5">
            {[sarees[0], sarees[1]].map((item) => (
              <article key={item.id} className="group relative overflow-hidden rounded-xl lg:rounded-2xl bg-[#F4F1EA]">
                <div className="relative h-[180px] sm:h-[250px] lg:h-[310px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute inset-x-0 bottom-0 flex flex-col sm:flex-row sm:items-end sm:justify-between p-3 sm:p-5">
                    <h4 className="font-['EB_Garamond'] text-base sm:text-2xl text-white">
                      {item.name}
                    </h4>
                    <p className="font-['Montserrat'] text-[0.65rem] sm:text-sm font-medium text-white/90">
                      {formatRupees(item.price)}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* RIGHT: Singular Tall Focal Piece (Spans 5 of 12 columns) */}
          <article className="col-span-5 self-start mt-6 lg:mt-12">
            <div className="relative h-[384px] sm:h-[530px] lg:h-[636px] overflow-hidden rounded-xl lg:rounded-2xl bg-[#F4F1EA]">
              <img
                src={sarees[2].image}
                alt={sarees[2].name}
                className="h-full w-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8">
                <h4 className="font-['EB_Garamond'] text-lg sm:text-4xl text-white mb-1">
                  {sarees[2].name}
                </h4>
                <p className="font-['Montserrat'] text-[0.7rem] sm:text-base font-medium text-white/90">
                  {formatRupees(sarees[2].price)}
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* Footer Action */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/store/collections/all?collection=Chilakamma"
            className="w-full border border-brand bg-brand px-7 py-2.5 text-center font-['Montserrat'] text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-brand/90 sm:w-auto"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ChilakammaCollectionSection