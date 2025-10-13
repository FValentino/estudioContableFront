import { Route } from "react-router-dom"
import ErrorRoutes from "./errorRoutes";
import PrivacyPolicy from "../pages/privacyPolicy";
import TermsAndConditions from "../pages/termsAndConditions";
import Home from "../pages/home";

export default function AppRoutes(){
  return(
    <ErrorRoutes>
        <Route path="/" element={ <Home />}/>
        <Route path="/politica-de-privacidad" element={ <PrivacyPolicy />}/>
        <Route path="/terminos-y-condiciones" element={ <TermsAndConditions />}/>
    </ErrorRoutes>
  );
}