/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function nameFilter(names) {
    // Array di appoggio
    const newArray = [];
    for (let i = 0; i < names.length; i++) {
        //riempio il nuovo array di appoggio usando il metodo at():
        newArray.push(names[i].at(0));
        // Oppure indicando semplicemente il doppio indice: il primo riferito alla stringa intera, il secondo (0) riferito al primo carattere di quella stringa
        // newArray.push(names[i][0]);
    }
    return newArray;
}
// Invoca la funzione qui e stampa il risultato in console
const result = nameFilter(names);
console.log("Le iniziali di ogni parola sono le seguenti: \n" + result);
//Risultato atteso: ["A", "L", "M", "A", "G", "A"]


/* Oppure potrei usare la arrow function: */
const resultArrow = (names) => {
    // Array di appoggio
    const newArray = [];
    for (let i = 0; i < names.length; i++) {
        //riempio il nuovo array di appoggio usando il metodo at():
        newArray.push(names[i].at(0));
    }
    return newArray;
}
console.log("Le iniziali di ogni parola sono le seguenti (usando arrow function): \n" + resultArrow(names));