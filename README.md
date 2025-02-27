# Mail e Dadi

## Mail

### Descrizione

Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.

### Input

- Mail inserita dall'utente

### Controllo

- Uno per uno verificare se l'input corrisponde a uno degli elementi all'interno della lista
- Nel caso in cui venga trovato un riscontro interrompere il controllo

### Output

- Presenza o assenza della mail dell'utente all'interno della lista

### Pseudocodice

- Dichiarazione di un array contenente le mail dei partecipanti alla festa
- Dichiarazione di una variabile Presenza 'falso'
- Chiedere all'utente la propria mail e salvare l'input in una variabile
- PER un numero di volte pari alla lunghezza dell'array
  - Salvare l'elemento dell'array in posizione pari all'indice del ciclo in una variabile
  - SE le due variabili sono identiche 
    - Salvare nella variabile Presenza 'vero'
    - Interrompere il ciclo
- SE Presenza è 'vero'
  - Stampare in console la presenza della mail all'interno della lista
- ALTIMENTI 
  - Stampare in console l'assenza della mail all'interno della lista



## Dadi

### Descrizione

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Bonus
Invece di generare il numero random per l'utente, chiedilo con un prompt!

### Input

- (SOLO NEL BONUS) Risultato del lancio del giocatore


### Output

- Lancio del giocatore
- Lancio del computer
- Il vincitore

### Pseudocodice

- Dichiarazione di una variabile Computer con un valore casuale da 1 a 6
- Dichiarazione di una variabile Giocatore con un valore casuale da 1 a 6
- Stampare in console le variabili Giocatore e Computer
- SE Computer è maggiore di Giocatore
  - Stampare in console che ha vinto il computer
- ALTRIMENTI SE Giocatore è maggiore di Computer
  - Stampare in console che ha vinto il giocatore
- ALTRIMENTI SE le due variabili sono uguali
  - Stampare in console che sono in parità