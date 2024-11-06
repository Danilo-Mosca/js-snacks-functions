/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function nameFilter(arrayNames, char) {
    // Array di appoggio
    newArray = [];
    for (let i = 0; i < arrayNames.length; i++) {
        // assegno ad una variabile solo l'iniziale della stringa iterata così da poterla confrontare con la lettera iniziale
        const initialChar = arrayNames[i].at(0);
        if (initialChar.toLowerCase() === char.toLowerCase()) {
            newArray.push(arrayNames[i]);
        }
    }
    return newArray;
}
// Invoca la funzione qui e stampa il risultato in console
result = nameFilter(names, 'a');
console.log("Array contenenti parole con una certa iniziale: " + result);
//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

/* Oppure usando un arrow function: */
const resultArrow = names.filter((value) => value[0].toLowerCase() === 'a'.toLowerCase());
console.log("Array contenenti parole con una certa iniziale (usando arrow function): " + resultArrow);