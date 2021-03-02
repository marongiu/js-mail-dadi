// Chiedi all'utente la sua email

var email = prompt("Scrivi la tua email:");

// Creo una lista di email ammesse

var emailAccettate = ["andrea@gmail.com", "valerio@gmail.com", "giacomo@gmail.com", "maria@gmail.com",]

// Controllo che l'email sia ammessa nella lista
for (var i = 0; i < emailAccettate.length; i++) {
  if (emailAccettate[i] == email) {
    console.log("L'email è accettata");
  } 
}
