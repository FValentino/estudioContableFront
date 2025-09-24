import Hero from "../components/hero/hero"
import Services from "../components/services/services"
import Contact from "../components/contact/contact"
import News from "../components/news/news"
import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"

interface homeProps {
  section: string;
}

export default function Home( { section } : homeProps ){
  const menuTriggerRef = useRef<HTMLDivElement | null>(null);

  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});
  const location = useLocation();

  const scrollToSection = (sectionKey: string) => { 
    const sectionEl = sectionsRef.current[sectionKey];

    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setTimeout(() => scrollToSection(sectionKey), 100);
    }
  };

  useEffect(() => {
    if (section) {
      setTimeout(() => scrollToSection(section), 200);
    }
  }, [location, section]); 
  
  return(
    <>
      <div ref={menuTriggerRef}>
        
        <div ref={(el) => {sectionsRef.current['hero'] = el}} role="hero">
          <Hero />
        </div>

        <div ref={(el) => {sectionsRef.current['services'] = el}} role="services">
          <Services/>
        </div>

        <div ref={(el) => { sectionsRef.current['contact'] = el; }} role="contact">
          <Contact/>
        </div>
        
        <div ref={(el) => {sectionsRef.current['news'] = el}} role="suscribirse">
          <News />
        </div>
      </div>
    </>
  )
}