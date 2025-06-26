import './FichesArtisan.css'

const BoutotEtFils  =()=>{
    return(
        <><h1>boutot et fils</h1>
        
         <section className="ficheartisan">
          <img src="../../assets/images/artisanat.jpg" alt="artisanat" />
            <span>nom:Boutot & fils  </span>
            <span>spécialité :Menuisier </span>
            <span>note : 4.7</span>
            <span>Ville :Bourg-en-bresse</span>
            <span>à propos : Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Phasellus eleifend ante sem, id volutpat massa fermentum nec.
                 Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. </span>
            <span>Email :boutot-menuiserie@gmail.com</span>
            <span>site web : https://boutot-menuiserie.com</span>
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
export default BoutotEtFils