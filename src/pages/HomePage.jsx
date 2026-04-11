import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import CollectionsSection from '../components/CollectionSection'
import StorySection from '../components/StorySection'
import BoutiqueSpotlight from '../components/BoutiqueSpotlight'

function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CollectionsSection />
      <StorySection />
      <BoutiqueSpotlight />
    </main>
  )
}

export default HomePage
