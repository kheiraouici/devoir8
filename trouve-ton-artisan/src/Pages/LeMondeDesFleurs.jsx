import './FichesArtisan.css'


const LeMondeDesFleurs  =()=>{
    return(
        <><h1>Le monde des fleurs</h1>
        
         <section className="ficheartisan">
          <img src="../../assets/images/artisanat.jpg" alt="artisanat" />
            <span>nom:Le monde des fleurs </span>
            <span>spécialité : Fleuriste</span>
            <span>note :4.6</span>
            <span>Ville :Annonay</span>
            <span>à propos : Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
                Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. :</span>
            <span>Email: contact@le-monde-des-fleurs-annonay.fr</span>
            <span>site web:https://le-monde-des-fleurs-annonay.fr</span>
            <span>catégorie:Services</span>
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
export default LeMondeDesFleurs