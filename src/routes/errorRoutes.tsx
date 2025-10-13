import { Route, Routes } from "react-router-dom";
import Error  from "../pages/error";
import type { ReactNode } from "react";

interface ErrorRoutesProps{
  children: ReactNode
}

export default function ErrorRoutes({children}: ErrorRoutesProps){
  return(
    <Routes>
      {children}
      <Route path="/*" element={<Error/>}/>
    </Routes>
  );
}