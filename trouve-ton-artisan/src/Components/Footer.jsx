
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Footer =()=>{
    return (
        <>
       
<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          
          <Nav className="me-auto">
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/MentionLegale">MentionLegale</Nav.Link>
           
         
            <address>101 cours Charlemagne</address>
           <address> CS 20033</address>
           <address> 69269 LYON CEDEX 02</address>
           <address>France</address> 
           <address>+33 (0)4 26 73 40 00</address>
         
         
          </Nav>
        </Container>
      </Navbar>

       
        
  </>

    )
}
export default Footer