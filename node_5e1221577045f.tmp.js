const prompt = require("prompt-sync")();

const heroName = prompt("Nome do Herói: ");
const heroXP = Number(prompt("Qual a quantidade de XP do Herói: "));

console.log(heroName, heroXP);
