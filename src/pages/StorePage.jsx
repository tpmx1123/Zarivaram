import StoreNavbar from '../components/store/StoreNavbar'
import StoreFeaturedCollectionSection from '../components/store/StoreFeaturedCollectionSection'
import StoreHeroSection from '../components/store/StoreHeroSection'
import AnanthamCollectionSection from '../components/store/collectionSections/AnanthamCollectionSection'
import BalagamCollectionSection from '../components/store/collectionSections/BalagamCollectionSection'
import ChilakammaCollectionSection from '../components/store/collectionSections/ChilakammaCollectionSection'
import GourammaCollectionSection from '../components/store/collectionSections/GourammaCollectionSection'
import LaggamCollectionSection from '../components/store/collectionSections/LaggamCollectionSection'

function StorePage() {
  return (
    <main className="min-h-screen bg-white">
      <StoreNavbar />
      <StoreHeroSection />
      <StoreFeaturedCollectionSection />
      <div className="bg-white pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-[1400px] space-y-8 px-4 sm:space-y-10 sm:px-8 lg:space-y-12">
          <GourammaCollectionSection />
          <LaggamCollectionSection />
          <BalagamCollectionSection />
          <ChilakammaCollectionSection />
          <AnanthamCollectionSection />
        </div>
      </div>
    </main>
  )
}

export default StorePage
