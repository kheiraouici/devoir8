import './FichesArtisan.css'


const MontBlancElectricite  =()=>{
    return(
        <><h1>mont blanc electricité</h1>
         <section className="ficheartisan">
          <img src="../../assets/images/artisanat.jpg" alt="artisanat" />
            <span>nom: Mont Blanc Eléctricité </span>
            <span>spécialité : Electricien </span>
            <span>note :4.5 </span>
            <span>Ville :Chamonix</span>
            <span>à propos : Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Phasellus eleifend ante sem, id volutpat massa fermentum nec.
                 Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. </span>
            <span>Email : contact@mont-blanc-electricite.com</span>
            <span>site web: https://mont-blanc-electricite.com</span>
            <span>catégorie :Bâtiment</span>
            <span>top : FAUX</span>
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
export default MontBlancElectricite