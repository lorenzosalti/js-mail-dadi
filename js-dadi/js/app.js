// Dichiarazione variabili con numero randomico da 1 a 6
let userThrow = Math.ceil(Math.random() * 6);
let pcThrow = Math.ceil(Math.random() * 6);

// Stampa dei due risulatati
console.log(`Il lancio dell'utente ha dato risultato: ${userThrow}`);
console.log(`Il lancio del computer ha dato risultato: ${pcThrow}`);

// Determinazione del vincitore 
if (userThrow > pcThrow) console.log("Vince l'utente!");
else if (pcThrow > userThrow) console.log("Vince il computer!");
else if (pcThrow = userThrow) console.log("Paritá!");