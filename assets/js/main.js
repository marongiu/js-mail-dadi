// Chiedi all'utente la sua email

var email = prompt("Scrivi la tua email: Le email accettate sono andrea@gmail.com, valerio@gmail.com, giacomo@gmail.com, maria@gmail.com");

// Creo una lista di email ammesse

var emailAccettate = ["andrea@gmail.com", "valerio@gmail.com", "giacomo@gmail.com", "maria@gmail.com",]

// Creo la variabile seiPresente per inserirla in for
seiPresente = false;
// Controllo che l'email sia ammessa nella lista

for (var i = 0; i < emailAccettate.length; i++) {
  if (emailAccettate[i] == email) {
    // se l'email è presente ricreo successivamente una nuova condizione seiPresente == true
    seiPresente = true;
  }
}

// Se l'email è true l'email è accettata
if (seiPresente == true) {
  console.log("Sei ammesso");
} else {
  console.log("Non sei ammesso");
}
