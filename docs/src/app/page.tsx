import Hero from "@/components/pages/home/hero/Hero"
import Features from "@/components/pages/home/features/Features"
import "./page.css"


export default function Home() {
  return (
      <main className="home-page">
        <Hero />
        <Features />
      </main>
  )
}
