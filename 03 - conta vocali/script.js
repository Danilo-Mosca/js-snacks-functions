/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascriptA';


// Dichiara la funzione qui.
function vowelsNumber(stringa) {
    // Array contenente le vocali
    const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
    // variabile contatore di vocali
    let vocalCounter = 0;
    for (let i = 0; i < stringa.length; i++) {
        if (vowelsArray.includes(stringa[i].toLowerCase())) {
            vocalCounter++;
        }
    }
    return vocalCounter;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(vowelsNumber(word));
//Risultato atteso se si passa 'javascript': 3 (a, a, i)


/* Oppure usando un arrow function: */
const result = (stringa) => {
    // Array contenente le vocali
    const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
    // variabile contatore di vocali
    let vocalCounter = 0;
    for (let i = 0; i < stringa.length; i++) {
        if (vowelsArray.includes(stringa[i].toLowerCase())) {
            vocalCounter++;
        }
    }
    return vocalCounter;
}

console.log("Risultato con la arrow function: " + result(word));