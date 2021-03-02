// Creo due variabili una per la persona e una per il computer

var nome = prompt("Qual'è il tuo nome?");

var persona = Math.floor(Math.random() * 6) + 1;
console.log(persona);
document.getElementById("numeropersona").innerHTML = "Il tuo numero: " + persona;

var computer = Math.floor(Math.random() * 6) + 1;
console.log(computer);

document.getElementById("numerocomputer").innerHTML = "Il numero del computer: " + computer;

// Creo delle condizioni per decidere il vincitore

if (persona > computer) {
  console.log("Hai vinto tu!");
  document.getElementById("vincitore").innerHTML = nome + " HAI VINTO!";
} else if (persona == computer) {
  console.log("Abbiamo un pareggio!");
  document.getElementById("vincitore").innerHTML = "ABBIAMO UN PAREGGIO!";
} else {
  console.log("Ha vinto il computer");
  document.getElementById("vincitore").innerHTML = "HAI VINTO IL COMPUTER!";
}
