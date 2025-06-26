import './FichesArtisan.css'




const CmGraphisme  =()=>{
    return(
        <><h1>Cm graphisme</h1>
         <section className="ficheartisan">
          <img src="../../assets/images/artisanat.jpg" alt="artisanat" />
            <span>nom:CM Graphisme  </span>
            <span>spécialité :Webdesign </span>
            <span>note :4.4</span>
            <span>Ville :Valence</span>
            <span>à propos : Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
                Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. </span>
            <span>Email :contact@cm-graphisme.com</span>
            <span>site web : https://cm-graphisme.com</span>
            <span>catégorie : Services</span>
            <span>top :FAUX </span>
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
export default CmGraphisme