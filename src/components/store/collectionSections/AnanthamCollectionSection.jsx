import { collections } from '../../../data/collections'
import { Link } from 'react-router-dom'

const collection = collections[4]

const sarees = [
  { id: 'anantham-1', name: 'Virasat Gold', tag: 'Classic Archive', price: 47900, image: collection.image },
  { id: 'anantham-2', name: 'Parampara Silk', tag: 'Ceremonial', price: 52500, image: collection.hoverImage },
  { id: 'anantham-3', name: 'Nitya Zari', tag: 'Signature Heirloom', price: 49600, image: collection.image },
  { id: 'anantham-4', name: 'Sanskriti Weave', tag: 'Milestone Piece', price: 46300, image: collection.hoverImage },
]

function AnanthamCollectionSection() {
  return (
    <section
      id={`store-${collection.slug}`}
      className=" bg-background "
      aria-label={`${collection.title} collection`}
    >
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-8">
        
        {/* Editorial Header */}
        <div className="mb-8 flex flex-col items-center text-center sm:mb-10">
          <Link to="/store/collections/all?collection=Anantham">
            <h3 className="font-['EB_Garamond'] text-5xl font-extralight leading-none text-foreground transition-colors hover:text-brand lg:text-8xl">
              {collection.title}
            </h3>
          </Link>
          <p className="mt-6 max-w-xl font-['Montserrat'] text-[0.75rem] lg:text-[0.85rem] leading-[1.8] text-brand/80 px-4">
            A sanctuary of weaves inspired by grandmothers’ trunks. Rich tones, 
            hand-pressed zari, and a ceremonial finish intended to be carried 
            across generations.
          </p>
        </div>

        {/* Floating Gallery Grid - Forced 2-column on Mobile */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-12">
          {sarees.map((saree, idx) => (
            <article 
              key={saree.id} 
              className={`group relative flex flex-col transition-all duration-700 ${
                idx % 2 !== 0 ? 'translate-y-10 lg:translate-y-16' : ''
              }`}
            >
              {/* Image with Border Frame */}
              <div className="relative aspect-3/4 overflow-hidden bg-[#F4F1EA] p-2 lg:p-3 border border-brand/5 rounded-xl lg:rounded-2xl shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:shadow-brand/5">
                <img
                  src={saree.image}
                  alt={saree.name}
                  className="h-full w-full object-cover rounded-lg lg:rounded-xl grayscale-20 group-hover:grayscale-0 transition-all duration-1000"
                  loading="lazy"
                />
              </div>

              {/* Details - Scaled for Mobile 2-column width */}
              <div className="mt-6 text-center px-2">
                <span className="font-['Montserrat'] text-[0.45rem] lg:text-[0.5rem] font-bold uppercase tracking-[0.2em] lg:tracking-[0.3em] text-brand/40">
                  {saree.tag}
                </span>
                <h4 className="mt-1 lg:mt-2 font-['EB_Garamond'] text-lg lg:text-2xl text-foreground group-hover:text-brand transition-colors leading-tight">
                  {saree.name}
                </h4>
                
                {/* Mobile Button - Always visible or hover-revealed */}
                <div className="mt-3 flex justify-center lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                  <button className="text-[0.5rem] lg:text-[0.55rem] font-bold uppercase tracking-widest text-brand border-b border-brand/30 pb-0.5">
                    Inquire
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Discovery Footer */}
        <div className="mt-10 flex justify-center px-4">
          <Link
            to="/store/collections/all?collection=Anantham"
            className="w-full border border-brand bg-brand px-7 py-2.5 text-center font-['Montserrat'] text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-brand/90 sm:w-auto"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AnanthamCollectionSection