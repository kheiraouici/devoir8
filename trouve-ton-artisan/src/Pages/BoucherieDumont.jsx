import './FichesArtisan.css'



const  BoucherieDumont =()=>{
    return(
        <><h1>boucherie dumont</h1>
         <section className="ficheartisan">
          <img src="../../assets/images/artisanat.jpg" alt="artisanat" />
            <span>nom:Boucherie Dumont </span>
            <span>spécialité : Boucher </span>
            <span>note :4.5 </span>
            <span>Ville : Lyon</span>
            <span>à propos :Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Phasellus eleifend ante sem, id volutpat massa fermentum nec.
                 Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. </span>
            <span>Email :boucherie.dumond@gmail.com </span>
            <span>site web</span>
            <span>catégorie : Alimentation</span>
            <span>top : FAUX </span>
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
export default BoucherieDumont