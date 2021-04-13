
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

