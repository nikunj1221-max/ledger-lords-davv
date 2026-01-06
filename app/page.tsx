import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import WorkSection from "@/components/work-section"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <Footer />
    </main>
  )
}
