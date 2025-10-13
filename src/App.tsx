import Footer from "./components/footer/footer"
import { useEffect, type ReactNode } from "react"
import axios from "axios"
import Menu from "./components/menu/menu"

interface AppProps{
  children: ReactNode;
}

function App( {children}: AppProps ) {

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
    <>
      <Menu/>

      {children}

      <Footer/>
    </>
  )
}

export default App
