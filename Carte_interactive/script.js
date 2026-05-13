
/* Affichage du nom "Développeur web  */
function changeName(){
    let name = document.getElementById("name")
    name.textContent = "Développeur web"
}


const color = document.querySelector(".card")
/* Changement de la couleur du fond de la carte                  */
function changeColors() {

    const colors = ["#e89696", "#a8e896", "rgb(232 225 150 / 0.82)"]
      /* Math.floor : renvoie le plus grand entier qui est à l'intérieur ou égale au nombre x */
    color.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        color.style.transition = "ease-in 0.3s";
}



/* Permet d'ajouter le skills "JavaScript dans une balise "<li></li>" */
function changeSkills(){
    let addSkills = document.createElement("#skills li"); /* Créer une variable élément "li"*/
    addSkills.textContent = "JavaScript"; /* Lui donne le texte "JavaScript" */
    document.getElementById("skills").appendChild(addSkills); /* Appelle l'id "skills et le parent  */

}

// function changeSkills() {
//     const skills = document.querySelectorAll("#skills li");
//     const existe = [...skills].some(li => li.textContent === "JavaScript");
//
//     if (!existe) {
//         let addSkills = document.createElement("li");
//         addSkills.textContent = "JavaScript";
//         document.getElementById("skills").appendChild(addSkills);
//     }
// }









/* Permet d'afficher ou de masqué la description  */
function hiddenDescription() {
    const hidden = document.querySelector("#description")
    if (hidden.style.display === "none") { /* Si hidden est strictement égale à "none affiche la description */
        hidden.style.display = "block"; /* Affiche la description */
    }else{
        hidden.style.display = "none"; /* Et si non cache la description*/
    }
}
