// Creo due variabili una per la persona e una per il computer

var persona = Math.floor(Math.random() * 6) + 1;
console.log(persona);

var computer = Math.floor(Math.random() * 6) + 1;
console.log(computer);

// Creo delle condizioni per decidere il vincitore

if (persona > computer) {
  console.log("Hai vinto tu!");
} else if (persona == computer) {
  console.log("Abbiamo un pareggio!");
} else {
  console.log("Ha vinto il computer");
}
