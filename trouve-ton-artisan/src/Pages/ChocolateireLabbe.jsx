import './FichesArtisan.css'


const  ChocolaterieLabbe =()=>{
    return(
        <><h1>chocolateire labbe</h1>
        
         <section className="ficheartisan">
          <img src="../../assets/images/artisanat.jpg" alt="artisanat" />
            <span>nom: Chocolaterie Labbé</span>
            <span>spécialité :Chocolatier </span>
            <span>note :4.9</span>
            <span>Ville : Lyon</span>
            <span>à propos :Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec.
                 Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. </span>
            <span>Email : chocolaterie-labbe@gmail.com</span>
            <span>site web : https://chocolaterie-labbe.fr</span>
            <span>catégorie :Alimentation </span>
            <span>top : VRAI</span>
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
export default ChocolaterieLabbe