import Header from './Components/Header'
import Services from './Pages/Services'
import Footer from './Components/Footer'
import Accueil from './Pages/Accueil'
import Alimentation from './Pages/Alimentation'
import Batiment from './Pages/Batiment'
import Contact from './Pages/Contact'
import Fabrication from './Pages/Fabrication'
import ListeArtisan from './Pages/ListeArtisan' 
import Page404 from './Pages/Page404'
import { Routes, Route } from "react-router-dom"
import MentionLegale from './Pages/MentionLegale'
import { NavLink } from "react-router-dom";
import AmiteeLecuyer from './Pages/AmiteeLecuyer'
import AuPainChaud from './Pages/AuPainChaud'
import BoucherieDumont from './Pages/BoucherieDumont'
import BoutotEtFils from './Pages/BoutotEtFils'
import CEstSupHair from './Pages/CEstSupHair'
import ChocolaterieLabbe from './Pages/ChocolateireLabbe'
import ClaudeQuinn from './Pages/ClaudeQuinn'
import CmGraphisme from './Pages/CmGraphisme'
import ErnestCarignan from './Pages/ErnestCarignan'
import LealaDennis from './Pages/LealaDennis'
import LeMondeDesFleurs from './Pages/LeMondeDesFleurs'
import MontBlancElectricite from './Pages/MontBlancElectricite'
import OrvilleSalmon from './Pages/OrvilleSalmon'
import RoydenCharbonneau from './Pages/RoydenCharbonneau'
import TraiteurTruchon from './Pages/TraiteurTruchon'
import ValerieDeroute from './Pages/ValerieLaderoute'
import VallisBellemare from './Pages/VallisBellemare'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const app =()=>{
  return (
    <>
    <Header/>
    
    
    <h4 id='box'><Nav.Link href="/ListeArtisan">liste des artisans</Nav.Link></h4>
    <Routes>
            <Route path="/" element={<Accueil />}></Route>
            <Route path="/Accueil" element={<Accueil />}></Route>
            <Route path="/Alimentation" element={<Alimentation />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<Page404 />}/>
            <Route path="/Batiment" element={<Batiment />}></Route>
            <Route path="/Fabrication" element={<Fabrication />}></Route>
            
            <Route path="/ListeArtisan" element={<ListeArtisan />}></Route>
            <Route path="/Services" element={<Services />}></Route>
            <Route path="/MentionLegale" element={<MentionLegale />}></Route>
            <Route path="/AmiteeLecuyer" element={<AmiteeLecuyer />}></Route>
             <Route path="/AuPainChaud" element={<AuPainChaud />}></Route>
              <Route path="/BoucherieDumont" element={<BoucherieDumont />}></Route>
               <Route path="/BoutotEtFils" element={<BoutotEtFils />}></Route>
                <Route path="/CEstSupHair" element={<CEstSupHair />}></Route>
                <Route path="/ChocolaterieLabbe" element={<ChocolaterieLabbe />}></Route> 
                <Route path="/ClaudeQuinn" element={<ClaudeQuinn />}></Route> 
                 <Route path="/CmGraphisme" element={<CmGraphisme />}></Route>
                 <Route path="/ErnestCarignan" element={<ErnestCarignan />}></Route> 
               <Route path="/LealaDennis" element={<LealaDennis />}></Route>
               <Route path="/LeMondeDesFleurs" element={<LeMondeDesFleurs />}></Route>
                <Route path="/MontBlancElectricite" element={<MontBlancElectricite />}></Route>
                 <Route path="/OrvilleSalmon" element={<OrvilleSalmon />}></Route>
                  <Route path="/RoydenCharbonneau" element={<RoydenCharbonneau />}></Route>
                   <Route path="/TraiteurTruchon" element={<TraiteurTruchon />}></Route>
                    <Route path="/ValerieDeroute" element={<ValerieDeroute />}></Route>
                     <Route path="/VallisBellemare" element={<VallisBellemare />}></Route>
          </Routes>
     
     <Footer/>
     
    </>
  )
}
export default app