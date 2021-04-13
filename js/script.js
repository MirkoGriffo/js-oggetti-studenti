
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

