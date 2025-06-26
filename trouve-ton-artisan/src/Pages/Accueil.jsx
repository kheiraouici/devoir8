import './Accueil.css';
import { NavLink,Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Accueil =()=>{
    return (
        <>
        
         <section id='tronc'>
        <section id="Part1">
              <h1 id='float'>Artisans du mois</h1>
         <article className='part' >artisan 1
            Orville Salmons	
            Chauffagiste
             <div class = 'note1' data-count = '1'>★</div>
        <div class = 'note2' data-count = '2'>★</div>
        <div class = 'note3' data-count = '3'>★</div>	
             <div class = 'note4' data-count = '4'>★</div>
        <div class = 'note5' data-count = '5'>★</div>
        
            Evian
         </article>
         
         <article className='part'>artisan 2
            Chocolaterie Labbé 
            Chocolatier  
            <div class = 'note1' data-count = '1'>★</div>
        <div class = 'note2' data-count = '2'>★</div>
        <div class = 'note3' data-count = '3'>★</div>	
             <div class = 'note4' data-count = '4'>★</div>
        <div class = 'note5' data-count = '5'>★</div>
             Lyon
         </article>
         <article className='part' >artisan 3
            Au pain chaud 
            Boulanger
             4.8
              Montélimar
              <div class = 'note1' data-count = '1'>★</div>
        <div class = 'note1' data-count = '2'>★</div>
        <div class = 'note1' data-count = '3'>★</div>	
             <div class = 'note1' data-count = '4'>★</div>
        <div class = 'note1' data-count = '5'>★</div>
         </article>
        
        </section>
        <section id="Titre">
              <img src="../../assets/images/artisanat-cuir.jpg" alt="artisanat" />
            <hr />
            <h4>à propos</h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum necessitatibus
             praesentium ad laudantium atque, magnam ex dicta corporis
             voluptas hic velit repellat similique adipisci eveniet, 
             maiores sed ea. Provident, pariatur. Lorem ipsum dolor sit amet consectetur, 
             adipisicing elit. Asperiores, soluta. Earum, quo ea, alias, quidem dignissimos
              placeat quia dicta suscipit autem modi minima nihil sunt quod iusto co
             nsequatur rem cupiditate.
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nesciunt
              autem nostrum, consectetur voluptas nihil velit, deserunt voluptate suscipit unde aspernatur 
             eveniet? Beatae harum dolorum laborum sunt magni nihil suscipit.
             
             </section>


             <section id="part3">
            
           <hr />
           <article>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Officia vel nam, tenetur qui placeat quaerat, saepe unde sit, quo a aut
             perspiciatis voluptates? Ea, amet quis! Earum ab beatae consequuntur!
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
             Soluta et harum eius enim, nisi non, eum saepe dignissimos assumenda error esse fugit. 
             Aut non explicabo delectus enim, voluptatum debitis ducimus?
           </article>
           <h4>formulaire de contact</h4>
           <form action="contact" id="formulaire">
            <p><input type="text" value="nom" /></p>
           <p> <input type="text" value="prénom"/></p>
           <p> <input type="email" name="email" id="email" value="email" /></p>
           </form>
           <button>envoyer</button>
        </section> 
        </section>
        </>
    )
}
export default Accueil