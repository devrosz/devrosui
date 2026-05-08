import Hero from "@/components/pages/home/hero/Hero"
import Features from "@/components/pages/home/features/Features"
import Showcase from "@/components/pages/home/showcase/Showcase"
import ComponentInfo from "@/components/pages/home/componentinfo/ComponentInfo"
import Introduction from "@/components/pages/home/introduction/Introduction"
import "./page.css"


export default function Home() {
  return (
      <main className="home-page">
        <Hero />
        <Features />
        <Showcase />
        <ComponentInfo />
        <Introduction />
      </main>
  )
}
