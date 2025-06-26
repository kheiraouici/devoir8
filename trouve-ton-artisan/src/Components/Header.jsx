import { NavLink,Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';



const Header = () => {
   return(
  <>
 
  <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/Accueil">accueil</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Accueil">Accueil</Nav.Link>
            <img src="../../assets/images/favicon.png" alt="logo" />
            <Nav.Link href="/Fabrication">Fabrication</Nav.Link>
            <Nav.Link href="/Batiment">Batîment</Nav.Link>
            <Nav.Link href="/Alimentation">Alimentation</Nav.Link>
          <Nav.Link href="/Services">Services</Nav.Link>
         
          </Nav>
        </Container>
      </Navbar>
     <div id="titre">
      <h1>Trouve ton artisan! avec la région Rhône alpes</h1>
     </div>
 
  </>

   )}

export default Header 