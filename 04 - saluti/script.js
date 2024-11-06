/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.
function salutare(nome) {
    let saluto = "Ciao ";
    saluto += nome;
    return saluto;
}

// Invoca la funzione qui e stampa il risultato in console
const salutoUtente = salutare(name);

//Risultato atteso se si passa 'Mario': // ciao Mario
console.log(salutoUtente);

/* Oppure usando un arrow function: */
const salutoArrow = (name) => `Ciao ${name}`;
console.log(salutoArrow(name));
