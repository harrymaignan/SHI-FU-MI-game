const Pierre = document.querySelector("#pierre");
const Ciseaux = document.querySelector("#ciseaux");
const Feuille = document.querySelector("#feuille");
const ShowResult = document.querySelector("#instruction");
const Resultat = document.querySelector("#result");
const Score = document.querySelector("#score");
const nbvies = document.querySelector("#vies");
const Rejouer = document.querySelector("#replay");

const pierre = "pierre";
const ciseaux = "ciseaux";
const feuille = "feuille";
let perdu = 0;
let Vies = 3;
let score = 0;

function ChoixJoueur(choix) {
  const choiceBot = botChoice();
  console.log("Le joueur a choisi : " + choix);
  ShowResult.innerText =
    "Vous avez  choisi : " + choix + " | le robot a choisi : " + choiceBot;
  const resultatmatch = choices(choix, choiceBot);
  scores(resultatmatch);
  vie();
  GameOver();
  return choix;
}

function botChoice() {
  const choices = ["pierre", "feuille", "ciseaux"];
  const noteRandom = Math.floor(Math.random() * choices.length);
  return choices[noteRandom];
}

console.log("Le bot a choisi : " + botChoice());

function choices(choicePlayer, choiceBot) {
  if (choicePlayer === choiceBot) {
    Resultat.innerText = "Résultat : égalité";
    return "égalité";
  } else if (
    (choicePlayer === "pierre" && choiceBot === "ciseaux") ||
    (choicePlayer === "feuille" && choiceBot === "pierre") ||
    (choicePlayer === "ciseaux" && choiceBot === "feuille")
  ) {
    Resultat.innerText = "Résultat : Gagner";
    return "gagner";
  } else {
    Resultat.innerText = "Résultat : Perdu";
    perdu += 1;
    return "perdu";
  }
}

function scores(resultat) {
  if (resultat == "gagner") {
    score += 50;
    Score.innerText = score;
  } else if (resultat == "perdu" && score > 0) {
    score -= 10;
    Score.innerText = score;
  }
}

function vie() {
  if (perdu === 1) {
    Vies = 2;
    nbvies.innerText = "❤️❤️";
  } else if (perdu === 2) {
    Vies = 1;
    nbvies.innerText = "❤️";
  } else if (perdu >= 3) {
    Vies = 0;
    nbvies.innerText = "Game Over";
  }
}

function GameOver() {
  if (Vies <= 0) {
    Pierre.disabled = true;
    Ciseaux.disabled = true;
    Feuille.disabled = true;
  }
}

function replaybutton() {
  score = 0;
  Vies = 3;
  perdu = 0;
  nbvies.innerText = ":heart::heart::heart:";
  Resultat.innerText = "Résultat :";
  ShowResult.innerText = "Choisissez un coup pour commencer !";
  Pierre.disabled = false;
  Ciseaux.disabled = false;
  Feuille.disabled = false;
}
Pierre.addEventListener("click", () => ChoixJoueur(pierre));
Ciseaux.addEventListener("click", () => ChoixJoueur(ciseaux));
Feuille.addEventListener("click", () => ChoixJoueur(feuille));
Rejouer.addEventListener("click", () => replaybutton());
