import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import "./styles/App.css"
import Footer from "./components/footer/footer"
import PrivacyPolicy from "./pages/privacyPolicy"
import TermsAndConditions from "./pages/termsAndConditions"
import ScrollToTop from "./components/common/globalBehavior/scrollToTop"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./client/reactQuery"

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={ <Home section={"hero"} />}/>
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
