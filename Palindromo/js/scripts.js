// Chiedo all'utente il valore "parola" e lo salvo.

const userWord = prompt('Inserisci una parola tutta in minuscolo');
console.log (userWord);

// Inizializzo una variabile per utilizzarla all'interno della funzione.

let reverse = 0;

// Creo la funzione da applicare

function reverseString () {

    //  La variabile reverse utilizza il valore fornito dall'utente:
    //  1. Divide la stringa in un'array con i singoli caratteri;
    //  2. Inverte l'ordine dei valori all'interno dell'array dall'ultimo al primo;
    //  3. Riunisce i valori all'interno dell'array in una singola stringa;

    reverse = userWord.split('').reverse().join('');

    // Mi restituisce il valore fornito dall'utente al contrario.

    return reverse;
}

// Inizializzo una variabile utilizzando la funzione per invertire qualsiasi valore inserito dall'utente.

const reverseUserWord = reverseString(userWord);
console.log (reverseUserWord);

// Se la parola inserita dall'utente è uguale alla stessa parola invertita al contrario, restituisce l'alert "palindromo"...

if (userWord === reverseUserWord) {
    alert("La parola " + userWord + " è palindroma!");
}

// ...altrimenti, restituisce l'alert "NON palindromo".
else {
    alert("La parola: " +  userWord + " NON è palindroma!")
}
