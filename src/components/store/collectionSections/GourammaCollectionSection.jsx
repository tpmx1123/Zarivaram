import { collections } from '../../../data/collections'
import { Link } from 'react-router-dom'

const collection = collections[0]

const sarees = [
  { id: 'gouramma-1', name: 'Kanakadhara Silk', tag: 'Masterpiece', price: 28990, image: collection.image },
  { id: 'gouramma-2', name: 'Vatika Crimson', tag: 'Festive', price: 31250, image: collection.hoverImage },
  { id: 'gouramma-3', name: 'Suvarna Bloom', tag: 'Signature', price: 33900, image: collection.image },
  { id: 'gouramma-4', name: 'Anantha Zari', tag: 'Heirloom', price: 27600, image: collection.hoverImage },
]

function formatRupees(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

function GourammaCollectionSection() {
  const [lead, ...gridItems] = sarees

  return (
    <section
      id={`store-${collection.slug}`}
      className=" bg-background "
      aria-label={`${collection.title} collection`}
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
        
        {/* Section Header - Mobile Optimized */}
        <div className="mb-10 pb-8 text-center">
          <Link to="/store/collections/all?collection=Gouramma">
            
            <h3 className="font-['EB_Garamond'] text-4xl lg:text-7xl font-extralight text-foreground transition-colors active:text-brand">
              {collection.title}
            </h3>
          </Link>
          <p className="mt-3 font-['EB_Garamond'] text-lg italic text-brand/70">{collection.subtitle}</p>
          <p className="mt-4 font-['Montserrat'] text-[0.8rem] leading-relaxed text-foreground/60 lg:hidden px-4">
            Regal curation honoring the anchor of the household with timeless motifs and classic zari.
          </p>
        </div>

        {/* Layout Wrapper */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          
          {/* LEAD ARTICLE: Primary focus on mobile */}
          <article className="group lg:col-span-7">
            <div className="relative overflow-hidden bg-[#F4F1EA] rounded-sm shadow-sm transition-all duration-700">
              <img
                src={lead.image}
                alt={lead.name}
                className="aspect-4/5 lg:aspect-16/11 h-full w-full object-cover transition-transform duration-[2s] lg:group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 lg:hidden">
                 <span className="bg-white/90 backdrop-blur-md px-4 py-2 font-['Montserrat'] text-[0.55rem] font-bold uppercase tracking-widest text-brand">
                   Featured Weave
                 </span>
              </div>
            </div>
            
            <div className="mt-6 flex items-start justify-between">
              <div>
                <span className="font-['Montserrat'] text-[0.5rem] font-bold uppercase tracking-[0.2em] text-brand/60">
                  {lead.tag}
                </span>
                <h4 className="mt-1 font-['EB_Garamond'] text-2xl lg:text-4xl font-normal text-foreground">
                  {lead.name}
                </h4>
              </div>
              <p className="font-['Montserrat'] text-[0.85rem] font-medium text-foreground/80 mt-1">
                {formatRupees(lead.price)}
              </p>
            </div>
          </article>

          {/* SECONDARY ITEMS: Compact list on mobile */}
          <div className="flex flex-col gap-8 lg:col-span-5 lg:pl-10 lg:border-l lg:border-brand/10">
            
            
            <div className="space-y-8">
              {gridItems.map((saree) => (
                <article key={saree.id} className="flex items-center gap-5 lg:gap-8 group">
                  <div className="relative h-28 w-24 shrink-0 overflow-hidden bg-[#F4F1EA] rounded-sm lg:h-40 lg:w-50">
                    <img
                      src={saree.image}
                      alt={saree.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="font-['Montserrat'] text-[0.5rem] font-bold uppercase tracking-[0.2em] text-brand/50">
                      {saree.tag}
                    </span>
                    <h4 className="mt-1 font-['EB_Garamond'] text-xl text-foreground">
                      {saree.name}
                    </h4>
                    <p className="mt-1 font-['Montserrat'] text-[0.75rem] text-foreground/60">
                      {formatRupees(saree.price)}
                    </p>
                    <Link 
                      to={`/product/${saree.id}`}
                      className="mt-3 inline-block font-['Montserrat'] text-[0.55rem] font-bold uppercase tracking-widest text-brand border-b border-brand/20 pb-0.5"
                    >
                      View Details
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View More */}
        <div className="mt-10 flex justify-center lg:mt-12">
          <Link
            to="/store/collections/all?collection=Gouramma"
            className="w-full border border-brand bg-brand px-7 py-2.5 text-center font-['Montserrat'] text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-brand/90 sm:w-auto"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default GourammaCollectionSection