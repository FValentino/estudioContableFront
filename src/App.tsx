import { BrowserRouter as Router } from "react-router-dom"
import Menu from "./components/menu/menu"
//import Home from "./pages/home"
import "./styles/App.css"
import Hero from "./components/hero/hero"
import Contact from "./components/contact/contact"
import Services from "./components/services/services"
import News from "./components/news/news"
import Footer from "./components/footer/footer"

function App() {

  return (
    <Router>
      <Menu/>
      <Hero/>
      <Services/>
      <Contact/>
      <News/>
      <Footer/>
    </Router>
  )
}

export default App
