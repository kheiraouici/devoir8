import './FichesArtisan.css'


const  AuPainChaud =()=>{
    return(
        <><h1>Au pain chaud</h1>
         <section className="ficheartisan">
          <img src="../../assets/images/artisanat.jpg" alt="artisanat" />
            <span>nom:Au pain chaud </span>
            <span>spécialité : Boulanger </span>
            <span>note :4.8</span>
            <span>Ville : Montélimar</span>
            <span>à propos :Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
                Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. </span>
            <span>Email : aupainchaud@hotmail.com</span>
            <span>site web :</span>
            <span>catégorie : </span>
            <span>top : VRAI </span>
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
export default AuPainChaud