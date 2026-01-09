import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./global.css"
import { Providers } from "./providers";
import Menu from "@/components/menu/menu";

interface Props{
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'I&M Gestión de Negocios',
  description: 'Soluciones Empresariales Integrales',
}

export default function RootLayout({ children }:Readonly<Props>) {
  return(

    <html lang="es" className="scroll-smooth">
      <body>
        <Providers>
          <Menu/>
          {children}
        </Providers>
      </body>
    </html>
  )
}
