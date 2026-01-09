import Hero from "@/components/hero/hero"
import Services from "@/components/services/services"
import News from "@/components/news/news"
import { About } from "@/components/about/about"
import Contact from "@/components/contact/contact"


export default function Home(){

  return(
    <>
      <main className="w-full">
        
        <Hero />
      
        <About/>
      
        <Services/>
      
        <Contact/>
      
        <News />
      </main>
    </>
  )
}