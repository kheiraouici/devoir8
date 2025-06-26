import './FichesArtisan.css'


const RoydenCharbonneau  =()=>{
    return(
        <><h1>royden charbonneau</h1>
         <section className="ficheartisan">
          <img src="../../assets/images/artisanat.jpg" alt="artisanat" />
            <span>nom:Royden Charbonneau </span>
            <span>spécialité :Coiffeur </span>
            <span>note :3.8</span>
            <span>Ville :Saint-Priest</span>
            <span>à propos :Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Phasellus eleifend ante sem, id volutpat massa fermentum nec.
                 Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. </span>
            <span>Email : r.charbonneau@gmail.com</span>
            <span>site web:</span>
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
export default RoydenCharbonneau