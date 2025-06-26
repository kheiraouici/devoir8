import "./ListeArtisan.css"
import { NavLink,Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const ListeArtisan =()=>{
    return(
        <>
        <section id="card">
          <h1>Trouve ton artisan avec la région rhône alpes</h1>
          <h2>Liste artisan</h2>
   <div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight">
    <img src="../../assets/images/boulangerie-chocolatier.jpg" alt="boulangerie" />
     Au pain chaud
          Boulanger
          4.8
          <Nav.Link href="/AuPainChaud">accès fiche</Nav.Link>
  </div>
         
  <div class="p-2 bd-highlight">
    <img src="../../assets/images/boulangerie-chocolatier.jpg" alt="chocolaterie" />
     Chocolaterie Labbé
          Chocolatier
          4.9
          <Nav.Link href="/ChocolaterieLabbe">accès fiche</Nav.Link>
  </div>
  <div class="p-2 bd-highlight">
    <img src="../../assets/images/boucherie.jpg" alt="traiteur" />
     Traiteur Truchon
          Traiteur
          4.1
          <Nav.Link href="/TraiteurTruchon">accès fiche</Nav.Link>
  </div>
  <div class="p-2 bd-highlight">
    <img src="../../assets/images/chauffagiste.jpg" alt="chauffage" />
    Orville Salmons
         Chauffagiste
         5,0
          <Nav.Link href="/OrvilleSalmon">accès fiche</Nav.Link>
  </div>
  <div class="p-2 bd-highlight">
    <img src="../../assets/images/chauffagiste.jpg" alt="electricite" />
    Mont Blanc Eléctricité
          Electricien
          4.5
          <Nav.Link href="/MontBlancElectricite">accès fiche</Nav.Link>
  </div>
</div>
   <div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight">
    <img src="../../assets/images/artisanat-cuir.jpg" alt="menuisier" />
     Boutot & fils
            Menuisier
            4.7
            <Nav.Link href="/BoutotEtFils">accès fiche</Nav.Link>
  </div>
  <div class="p-2 bd-highlight">
    <img src="../../assets/images/chauffagiste.jpg" alt="plombier" />
     Vallis Bellemare
            Plombier
            4,0
            <Nav.Link href="/VallisBellemare">accès fiche</Nav.Link>
  </div>
  <div class="p-2 bd-highlight">
    <img src="../../assets/images/artisanat.jpg" alt="bijoutier" />
    Claude Quinn
         Bijoutier
         4.2
         <Nav.Link href="/ClaudeQuinn">accès fiche</Nav.Link>
  </div>
  <div class="p-2 bd-highlight">
    <img src="../../assets/images/artisanat.jpg" alt="couturier" />
    Amitee Lécuyer
           Couturier
           4.5
           <Nav.Link href="/AmiteeLecuyer">accès fiche</Nav.Link>
  </div>
  <div class="p-2 bd-highlight">
    <img src="../../assets/images/artisanat.jpg" alt="ferronier" />
    Ernest Carignan
            Ferronier
            5,0
            <Nav.Link href="/ErnestCarignan">accès fiche</Nav.Link>
  </div>
</div>
<div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight">
    <img src="../../assets/images/artisanat.jpg" alt="coiffeur" />
    Royden Charbonneau
           Coiffeur
           3.8
           <Nav.Link href="/RoydenCharbonneau">accès fiche</Nav.Link>
  </div>
  <div class="p-2 bd-highlight">
    <img src="../../assets/images/artisanat.jpg" alt="coiffeur" />
    Leala Dennis
           Coiffeur
           3.8
           <Nav.Link href="/LealaDennis">accès fiche</Nav.Link>
  </div>
  <div class="p-2 bd-highlight">
    <img src="../../assets/images/artisanat.jpg" alt="coiffeur" />
     C'est sup'hair
           Coiffeur
           4.1
           <Nav.Link href="/CEstSupHair">accès fiche</Nav.Link>
  </div>
  <div class="p-2 bd-highlight">
    <img src="../../assets/images/artisanat.jpg" alt="fleuriste" />
    Le monde des fleurs
          Fleuriste
          4.6
          <Nav.Link href="/LeMondeDesFleurs">accès fiche</Nav.Link>
  </div>
  <div class="p-2 bd-highlight">
    <img src="../../assets/images/artisanat.jpg" alt="toiletteur" />
    Valérie Laderoute
          Toiletteur
          4.5
          <Nav.Link href="/ValerieLaderoute">accès fiche</Nav.Link>
  </div>
</div>
<div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight">
    <img src="../../assets/images/artisanat.jpg" alt="webdesign" />
    CM Graphisme
          Webdesign
          4.4
          <Nav.Link href="/CmGraphisme">accès fiche</Nav.Link> 
  </div>
  <div class="p-2 bd-highlight">Flex item 2</div>
</div>

        </section>
       
        </>

        
    )
}
export default ListeArtisan