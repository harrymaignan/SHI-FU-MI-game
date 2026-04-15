const Pierre = document.querySelector("#pierre");
const Ciseaux = document.querySelector("#ciseaux");
const Feuille = document.querySelector("#feuille");

const pierre = "pierre";
const ciseaux = "ciseaux";
const feuille = "feuille";

function ChoixJoueur(choix) {
  console.log("Le joueur a choisi : " + choix);
}

Pierre.addEventListener("click", () => ChoixJoueur(pierre));
Ciseaux.addEventListener("click", () => ChoixJoueur(ciseaux));
Feuille.addEventListener("click", () => ChoixJoueur(feuille));


function botChoice() {
    const choices = ['pierre', 'feuille', 'ciseaux'];
    const noteRandom = Math.floor(Math.random() * choices.length);
    return choices[noteRandom];
}
console.log("Le bot a choisi : " + (botChoice()));

function choices(choicePlayer, choiceBot) {

    if (choicePlayer === choiceBot) {
        return "égalité";
    } 
}