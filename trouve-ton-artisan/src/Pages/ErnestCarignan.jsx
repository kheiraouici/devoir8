import './FichesArtisan.css'


const ErnestCarignan  =()=>{
    return(
        <><h1>ernest carignan</h1>
        
         <section className="ficheartisan">
          <img src="../../assets/images/artisanat.jpg" alt="artisanat" />
            <span>nom:Ernest Carignan </span>
            <span>spécialité : Ferronier </span>
            <span>note :5,0 </span>
            <span>Ville : Le Puy-en-Velay</span>
            <span>à propos : Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
                 Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. </span>
            <span>Email : e-carigan@hotmail.com</span>
            <span>site web</span>
            <span>catégorie : Fabrication</span>
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
export default ErnestCarignan