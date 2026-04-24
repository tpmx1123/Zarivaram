import { useEffect, useMemo, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { allSareesProducts } from '../data/allSareesProducts'
import StoreNavbar from '../components/store/StoreNavbar'

function formatRupees(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

const collections = ['All', 'Gouramma', 'Laggam', 'Balagam', 'Chilakamma', 'Anantham']

function AllSareesPage() {
  const [searchParams] = useSearchParams()
  const location = useLocation()
  const collectionFromQuery = searchParams.get('collection')
  const initialCollection =
    collectionFromQuery && collections.includes(collectionFromQuery)
      ? collectionFromQuery
      : 'All'
  const [query, setQuery] = useState('')
  const [selectedCollection, setSelectedCollection] = useState(initialCollection)
  const [sortBy, setSortBy] = useState('featured')

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname, location.search])

  const filteredProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase()

    let products = allSareesProducts.filter((item) => {
      const byCollection =
        selectedCollection === 'All' || item.collection === selectedCollection

      const bySearch =
        normalized.length === 0 ||
        item.name.toLowerCase().includes(normalized) ||
        item.collection.toLowerCase().includes(normalized)

      return byCollection && bySearch
    })

    if (sortBy === 'price-low')
      products = [...products].sort((a, b) => a.price - b.price)

    if (sortBy === 'price-high')
      products = [...products].sort((a, b) => b.price - a.price)

    if (sortBy === 'name-az')
      products = [...products].sort((a, b) =>
        a.name.localeCompare(b.name)
      )

    return products
  }, [query, selectedCollection, sortBy])

  return (
    <main className="min-h-screen bg-white">
      <StoreNavbar variant="light" />
      <div className="pt-[170px] sm:pt-[185px]">

        {/* HEADER */}
        <section className=" bg-white">
          <div className="mx-auto max-w-[1400px] ">
            <div className="flex flex-col items-center justify-center ">
              <div>
                
                <h1 className="mt-20 font-['EB_Garamond'] text-5xl text-black">
                  All Sarees
                </h1>
              </div>

              
            </div>
          </div>
        </section>

        {/* MAIN LISTING */}
        <section className="mx-auto max-w-[1400px] px-6 py-12">
          <div className="mb-6 flex flex-col gap-4 border-b border-black/10 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-black/80">
                <span className="font-semibold text-black">
                  {filteredProducts.length}
                </span>{' '}
                products
              </p>
              <div className="flex items-center gap-3">
                <label className="text-[0.6rem] uppercase tracking-[0.2em] text-black/70">
                  Sort by
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-black/20 px-3 py-2 text-sm outline-none focus:border-black"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name-az">Alphabetically, A-Z</option>
                </select>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sarees..."
                className="min-w-[220px] flex-1 border border-black/20 px-3 py-2 text-sm outline-none focus:border-black sm:max-w-[360px]"
              />
              <div className="flex flex-wrap gap-2">
                {collections.map((item) => (
                  <button
                    key={item}
                    onClick={() => setSelectedCollection(item)}
                    className={`px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] transition ${
                      selectedCollection === item
                        ? 'bg-black text-white'
                        : 'border border-black/20 hover:border-black'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4 lg:gap-10">

            {filteredProducts.map((product) => (
              <article key={product.id} className="group cursor-pointer">

                {/* IMAGE */}
                <div className="relative overflow-hidden bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="aspect-4/5 w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.05] group-hover:opacity-0"
                  />
                  <img
                    src={product.hoverImage || product.image}
                    alt={`${product.name} alternate view`}
                    className="absolute inset-0 aspect-4/5 w-full object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-[1.05] group-hover:opacity-100"
                    loading="lazy"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition duration-500"></div>
                </div>

                {/* CONTENT */}
                <div className="pt-4">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-black/60">
                    {product.collection}
                  </p>

                  <h3 className="mt-1 font-['EB_Garamond'] text-2xl sm:text-3xl leading-tight text-black">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-sm text-black/80">
                    Sale price {formatRupees(product.price)}
                  </p>
                </div>

              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default AllSareesPage