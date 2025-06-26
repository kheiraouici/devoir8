import './FichesArtisan.css'


const CEstSupHair  =()=>{
    return(
        <><h1>c est sup' hair</h1>
        
         <section className="ficheartisan">
          <img src="../../assets/images/artisanat.jpg" alt="artisanat" />
            <span>nom: C'est sup'hair</span>
            <span>spécialité :Coiffeur </span>
            <span>note :4.1</span>
            <span>Ville :Romans-sur-Isère</span>
            <span>à propos :Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
                Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. </span>
            <span>Email : sup-hair@gmail.com</span>
            <span>site web :https://sup-hair.fr </span>
            <span>catégorie : Services</span>
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
export default CEstSupHair