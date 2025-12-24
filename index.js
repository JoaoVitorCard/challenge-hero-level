const prompt = require("prompt-sync")();

const heroName = prompt("Nome do Herói: ");
const heroXP = parseFloat(prompt("Qual a quantidade de XP do Herói: "));
let heroLevel;

if (heroXP <= 1000) {
  heroLevel = "Ferro";
} else if (heroXP > 1000 && heroXP <= 2000) {
  heroLevel = "Bronze";
} else if (heroXP > 2000 && heroXP <= 6000) {
  heroLevel = "Prata";
} else if (heroXP > 6000 && heroXP <= 7000) {
  heroLevel = "Ouro";
} else if (heroXP > 7000 && heroXP <= 8000) {
  heroLevel = "Platina Diamante";
} else if (heroXP > 8000 && heroXP <= 9000) {
  heroLevel = "Ascendente";
} else if (heroXP > 9000 && heroXP <= 10000) {
  heroLevel = "Imortal";
} else if (heroXP > 10000) {
  heroLevel = "Radiante";
}

switch (heroLevel) {
  case "Ferro":
    console.log(
      "O Herói de nome " + heroName + " está no nível de " + heroLevel
    );
    break;
  case "Bronze":
    console.log(
      "O Herói de nome " + heroName + " está no nível de " + heroLevel
    );
    break;
  case "Prata":
    console.log(
      "O Herói de nome " + heroName + " está no nível de " + heroLevel
    );
    break;
  case "Ouro":
    console.log(
      "O Herói de nome " + heroName + " está no nível de " + heroLevel
    );
    break;
  case "Platina Diamante":
    console.log(
      "O Herói de nome " + heroName + " está no nível de " + heroLevel
    );
    break;
  case "Ascendente":
    console.log(
      "O Herói de nome " + heroName + " está no nível de " + heroLevel
    );
    break;
  case "Imortal":
    console.log(
      "O Herói de nome " + heroName + " está no nível de " + heroLevel
    );
    break;
  case "Radiante":
    console.log(
      "O Herói de nome " + heroName + " está no nível de " + heroLevel
    );
    break;
  default:
    console.log("Dados inválidos");
}
