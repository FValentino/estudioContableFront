import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Menu from "./components/menu/menu"
import Home from "./pages/home"
import "./styles/App.css"
import Footer from "./components/footer/footer"

function App() {

  return (
    <Router>
      <Menu/>
      <Routes>
        <Route path="/" element={ <Home section={"hero"}  />}/>
        <Route path="/servicios" element={ <Home section={"services"}  />}/>
        <Route path="/contacto" element={ <Home section={"contact"}  />}/>
        <Route path="/suscribirse" element={ <Home section={"news"}  />}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
