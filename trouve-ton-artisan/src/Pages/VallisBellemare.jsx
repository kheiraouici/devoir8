const VallisBellemare  =()=>{
    return(
        <><h1>Vallis bellemare</h1>
         <section className="ficheartisan">
          <img src="../../assets/images/artisanat.jpg" alt="artisanat" />
            <span>nom:Vallis Bellemare </span>
            <span>spécialité :Plombier </span>
            <span>note :4,0</span>
            <span>Ville :Vienne</span>
            <span>à propos :Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Phasellus eleifend ante sem, id volutpat massa fermentum nec. 
                Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. </span>
            <span>Email : v.bellemare@gmail.com</span>
            <span>site web : https://plomberie-bellemare.com</span>
            <span>catégorie : Bâtiment</span>
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
export default VallisBellemare