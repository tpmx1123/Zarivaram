import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import CollectionsSection from '../components/CollectionSection'
import StorySection from '../components/StorySection'
import BoutiqueSpotlight from '../components/BoutiqueSpotlight'
import HeritageSection from '../components/HeritageSection'
import MayabazarSection from '../components/MayabazarSection'
import DiariesOfAbhilasha from '../components/diariesofabhilasha'
import PrivateViewing from '../components/privateviewing'
import ScrollReveal from '../components/ScrollReveal'

function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection navbar={<Navbar />} />
      <ScrollReveal delay={40}>
        <CollectionsSection />
      </ScrollReveal>
      <ScrollReveal delay={90}>
        <StorySection />
      </ScrollReveal>
      <ScrollReveal delay={120}>
        <BoutiqueSpotlight />
      </ScrollReveal>
      <ScrollReveal delay={140}>
        <MayabazarSection />
      </ScrollReveal>
      <ScrollReveal delay={160}>
        <HeritageSection />
      </ScrollReveal>
      <ScrollReveal delay={190}>
        <DiariesOfAbhilasha />
      </ScrollReveal>
      <ScrollReveal delay={210}>
        <PrivateViewing />
      </ScrollReveal>
      <ScrollReveal delay={90} direction="up">
        <Footer />
      </ScrollReveal>
    </main>
  )
}

export default HomePage
