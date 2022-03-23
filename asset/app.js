/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente,
 tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti 
e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/

let btn = document.getElementById('btn');
let extracted = document.getElementById('extracted');

btn.addEventListener('click',play);

function play() {
    console.log("game started...");
    //svuota la pagina da numeri precedenti
    //da inserire
    //inizializzo array di numeri estratti
    const numbers = [];
    //estraggo fino a quando non ho 5 numeri diversi da inserire nell'array
    while (numbers.length < 5) {
        //pesco un numero random usando la funzione
        const num = getRandomIntInclusive(1,100);
        //se non c'è gia -> pusha nell'array (così da evitare ripetizioni)
        if(!numbers.includes(num)){
            numbers.push(num);
            extracted.innerHTML += ` ${num} `;
        }
    }

    const userNumb = [];
    //creo timer, una volta finito parte la funzione.
    setTimeout(question(5),3000);

    //funzione domanda
    function question(x) {
        while (userNumb.length < x) {
            y = parseInt(prompt('Inserisci un numero che ti ricordi'));
            userNumb.push(y);
        }
    }
  

    console.log(numbers);
    console.log(userNumb);
}




//funzione generica per numero casuale tra min e max inclusi
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

