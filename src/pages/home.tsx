import Hero from "../components/hero/hero"
import Services from "../components/services/services"
import News from "../components/news/news"
import { useEffect  } from "react"
import { useLocation } from "react-router-dom"
import { About } from "../components/about/about"
import Contact from "../components/contact/contact"
import SeoMeta from "../components/seo/seoMeta"


export default function Home(){
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  
  return(
    <>
      <SeoMeta/>
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