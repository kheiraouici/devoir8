import './Accueil.css';
import { NavLink,Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Home =()=>{
    return (
        <>
        <section classname="Part1">
              <h3>les trois meilleurs artisans du mois</h3>
         <article className='part' >artisan 1
            Orville Salmons	
            Chauffagiste	
            5,0	
            Evian
         </article>
         
         <article className='part'>artisan 2
            Chocolaterie Labbé 
            Chocolatier  
            4.9
             Lyon
         </article>
         <article className='part' >artisan 3
            Au pain chaud 
            Boulanger
             4.8
              Montélimar
         </article>
        
        </section>
        <section className="Titre">
           <h4>trouve ton artisan avec région rhone alpes</h4>
            <hr />
            <h4>à propos</h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum necessitatibus
             praesentium ad laudantium atque, magnam ex dicta corporis
             voluptas hic velit repellat similique adipisci eveniet, 
             maiores sed ea. Provident, pariatur. Lorem ipsum dolor sit amet consectetur, 
             adipisicing elit. Asperiores, soluta. Earum, quo ea, alias, quidem dignissimos
              placeat quia dicta suscipit autem modi minima nihil sunt quod iusto co
             nsequatur rem cupiditate.
             </section>

             
             <section className="formulaire">
            
           <hr />
           <h4>formulaire de contact</h4>
           <form action="contact" id="formulaire">
            <p><input type="text" value="nom" /></p>
           <p> <input type="text" value="prénom"/></p>
           <p> <input type="email" name="email" id="email" value="email" /></p>
           </form>
           <button>envoyer</button>
        </section> 

        </>
    )
}
export default Home