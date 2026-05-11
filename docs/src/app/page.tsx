import Hero from "./home/components/hero/Hero"
import Features from "./home/components/features/Features"
import Showcase from "./home/components/showcase/Showcase"
import ComponentInfo from "./home/components/componentinfo/ComponentInfo"
import Introduction from "./home/components/introduction/Introduction"
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
