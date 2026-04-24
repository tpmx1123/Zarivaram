import { collections } from '../../../data/collections'
import { Link } from 'react-router-dom'

const collection = collections[1]

const sarees = [
  { id: 'laggam-1', name: 'Laggam Saree 1', tag: 'Classic', price: 42990, image: collection.image },
  { id: 'laggam-2', name: 'Laggam Saree 2', tag: 'Festive', price: 45800, image: collection.hoverImage },
  { id: 'laggam-3', name: 'Laggam Saree 3', tag: 'Signature', price: 38950, image: collection.image },
]

function formatRupees(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

function LaggamCollectionSection() {
  return (
    <section
      id={`store-${collection.slug}`}
      className=" bg-background "
      aria-label={`${collection.title} collection`}
    >
      <div className="px-4 sm:px-8">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <Link to="/store/collections/all?collection=Laggam">
            <h3 className="font-['EB_Garamond'] text-3xl text-foreground transition-colors hover:text-brand sm:text-[2.25rem]">
              {collection.title}
            </h3>
          </Link>
          <p className="mt-1 font-['EB_Garamond'] text-lg italic text-brand/75">{collection.subtitle}</p>
          <p className="mx-auto mt-3 max-w-2xl font-['Montserrat'] text-[0.8rem] leading-relaxed text-foreground/70">
            A bridal-forward curation with luminous gold tones and elegant drape, designed for grand visual statements.
          </p>
        </div>

        {/* Forced Grid Layout: Same for Mobile and Desktop */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6">
          {sarees.map((saree, index) => (
            <article
              key={saree.id}
              className={`group relative overflow-hidden rounded-sm ${
                index === 0 ? 'col-span-2' : 'col-span-1'
              }`}
            >
              <div className="overflow-hidden bg-[#F4F1EA]">
                <img
                  src={saree.image}
                  alt={saree.name}
                  className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    index === 0 ? 'aspect-video sm:aspect-16/8' : 'aspect-4/5'
                  }`}
                  loading="lazy"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-70" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <p className="font-['Montserrat'] text-[0.5rem] sm:text-[0.52rem] font-bold uppercase tracking-[0.22em] text-brand">
                  {saree.tag}
                </p>
                <div className="mt-1 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-1 sm:gap-3">
                  <h4 className="font-['EB_Garamond'] text-lg leading-tight text-white sm:text-2xl">
                    {saree.name}
                  </h4>
                  <p className="font-['Montserrat'] text-[0.7rem] text-white/90 sm:text-sm">
                    {formatRupees(saree.price)}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-center px-4 sm:px-8">
        <Link
          to="/store/collections/all?collection=Laggam"
          className="w-full sm:w-auto text-center border border-brand bg-brand px-8 py-3 font-['Montserrat'] text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white transition-all active:bg-foreground"
        >
          View More
        </Link>
      </div>
    </section>
  )
}

export default LaggamCollectionSection