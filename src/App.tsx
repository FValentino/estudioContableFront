import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Footer from "./components/footer/footer"
import PrivacyPolicy from "./pages/privacyPolicy"
import TermsAndConditions from "./pages/termsAndConditions"
import ScrollToTop from "./components/common/globalBehavior/scrollToTop"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./client/reactQuery"
import { useEffect } from "react"
import axios from "axios"
import Menu from "./components/menu/menu"

function App() {

  useEffect(() => {
    const activarServidor = async () => {
      try {
        const response = await axios.get('https://estudiocontableback.onrender.com/');
        console.log('Servidor activado:', response.status);
      } catch (error) {
        console.error('Error al activar servidor:', error);
      }
    };

    activarServidor();
  }, []);


  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ScrollToTop/>
        <Menu/>
        <Routes>
          <Route path="/" element={ <Home section={"hero"} />}/>
          <Route path="/nosotros" element={<Home section={"about"} />}/>
          <Route path="/servicios" element={ <Home section={"services"} />}/>
          <Route path="/contacto" element={ <Home section={"contact"} />}/>
          <Route path="/suscribirse" element={ <Home section={"news"} />}/>
          <Route path="/politica-de-privacidad" element={ <PrivacyPolicy />}/>
          <Route path="/terminos-y-condiciones" element={ <TermsAndConditions />}/>
        </Routes>
        <Footer/>
      </Router>
    </QueryClientProvider>
  )
}

export default App
