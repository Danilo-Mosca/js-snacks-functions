/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function salutare(nome) {
    // Variabile d'appoggio
    saluto = "";
    // Dichiaro l'oggetto Date()
    const date = new Date();
    if (date.getHours() < 13) {
        saluto = "Buongiorno " + nome;
    } else if (date.getHours() < 17) {
        saluto = "Buon pomeriggio " + nome;
    }
    else {
        saluto = "Buonasera " + nome;
    }
    return saluto;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(salutare(name));
//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.