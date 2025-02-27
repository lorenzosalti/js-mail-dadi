// Lista degli invitati
const mailList = [
  'alessandro.rossi@example.com',
  'maria.bianchi123@example.com',
  'luca.verdi99@example.net',
  'giorgia.fabbri@demo.com',
  'marco.russo_1985@fakemail.org',
  'elena.neri88@example.com',
  'federico.longo@samplemail.org',
  'giulia.sartori56@webmail.net',
  'paolo.galliani789@example.org',
  'anna.ferrari2020@mockmail.com',
  'matteo.bianchi1234@fakemail.com',
  'serena.brunetti@demo.org',
  'lorenzo.martini2012@samplemail.net',
  'valeria.ruggiero_2025@webmail.org',
  'daniele.campisi88@mockmail.com'
];

let inList = false; // Variabile di presenza nella lista

let userMail = prompt('Inserire il proprio indirizzo email'); // Richiesta di inserimento all'utente

// Ciclo di controllo della presenza
for (let i = 0; i < mailList.length; i++) {
  const currentMail = mailList[i];
  if (userMail === currentMail) {
    inList = true;
    break;
  }
}

// Stampa del risultato
if (inList) console.log("L'indirizzo email inserito è presente nella lista degli invitati");
else console.log("L'indirizzo email inserito non è presente nella lista degli invitati");