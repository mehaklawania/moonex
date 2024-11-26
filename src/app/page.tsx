import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Comparison } from "@/components/comparison"
import { Features } from "@/components/features"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Comparison />
        <Features />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

