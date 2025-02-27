// // Dichiarazione variabili con numero randomico da 1 a 6
// let userThrow = Math.ceil(Math.random() * 6);
// let pcThrow = Math.ceil(Math.random() * 6);

// // Stampa dei due risulatati
// console.log(`Il lancio dell'utente ha dato risultato: ${userThrow}`);
// console.log(`Il lancio del computer ha dato risultato: ${pcThrow}`);

// // Determinazione del vincitore 
// if (userThrow > pcThrow) console.log("Vince l'utente!");
// else if (pcThrow > userThrow) console.log("Vince il computer!");
// else if (pcThrow = userThrow) console.log("Paritá!");


// BONUS


// Dichiarazione variabili con numero randomico da 1 a 6
let userThrow = parseInt(prompt('Inserire il valore del lancio del dado'));
let pcThrow = Math.ceil(Math.random() * 6);

// Controllo validitá del dato inserito
if (userThrow < 1 || userThrow > 6 || isNaN(userThrow))
  console.log('Il valore inserito non è valido');
else {

  // Stampa dei due risulatati
  console.log(`Il lancio dell'utente ha dato risultato: ${userThrow}`);
  console.log(`Il lancio del computer ha dato risultato: ${pcThrow}`);

  // Determinazione del vincitore 
  if (userThrow > pcThrow) console.log("Vince l'utente!");
  else if (pcThrow > userThrow) console.log("Vince il computer!");
  else if (pcThrow = userThrow) console.log("Paritá!");
}