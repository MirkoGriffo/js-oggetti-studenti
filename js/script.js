
/*
1 - Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
*/

var studente = {
    "nome": "Mirko",
    "cognome": "Griffo",
    "età": 29,

};

for (var key in studente) {
    console.log(studente[key]);
}

/*
2 - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e 
stampare per ognuno di essi, nome e cognome.
*/

var studenti = [
    {
        "nome": "Mario",
        "cognome": "Rossi",
        "età": 35

    },

    {
        "nome": "Luigi",
        "cognome": "Verdi",
        "età": 23
    },

    {
        "nome": "Massimo",
        "cognome": "Gialli",
        "età": 27
    }
]

for (var i = 0; i < studenti.length; i++) {
    console.log(studenti[i].nome + " " + studenti[i].cognome);
};

/*
3- Dare la possibilità all’utente, attraverso 3 prompt(), 
di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. 
Una volta creato il nuovo oggetto inserirlo nell'array creato al punto 2 
e mostrare alla fine il contenuto dell'array.
*/

var nuovoStudente = {};

nuovoStudente.nome = prompt("Inserisci il nome");
nuovoStudente.cognome = prompt("Inserisci il cognome");
nuovoStudente.età = parseInt(prompt("Inserisci l'età"));

studenti.push(nuovoStudente);
console.log(studenti);

