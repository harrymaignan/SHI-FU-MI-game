const Pierre = document.querySelector("#pierre");
const Ciseaux = document.querySelector("#ciseaux");
const Feuille = document.querySelector("#feuille");
const ShowResult = document.querySelector("#instruction");
const Resultat = document.querySelector("#result");
const Score = document.querySelector('#score');


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
    let choicePlayer = choix;

    if (choicePlayer === choiceBot) {
        Resultat.innerText = "Résultat : égalité";
    } 
     else if ((choicePlayer === 'pierre' && choiceBot === 'ciseaux')  (choicePlayer === 'feuille' && choiceBot === 'pierre')  
             (choicePlayer === 'ciseaux' && choiceBot === 'feuille')) {

        Resultat.innerText = "Résultat : Gagner";
    } 
    else {
        Resultat.innerText = "Résultat : Perdu";
    }
}



function ShowResult() {
    ShowResult.innerText = "Vous avez  choisi : " + choicePlayer + " | le robot a choisi : " + choiceBots;
}

let score = 0;
function scores(resultat) {
    if (resultat == "gagné") {
        score+=50;
    } else if(resultat == "égalité"){
          score;
    } else if (resultat == "perdu" && score <= 0){
        score-=10;
    }
     Score.innerText= score;
}