/*Creare un array di oggetti di squadre di calcio.
Abbiamo sempre un array di squadre, con:
nome
punti fatti
falli subiti
Stampare in html (in forma tabellare) i dati relativi alle squadre evidenziando
in giallo la riga corrispondente alla squadra con più falli subiti.
Svilupparlo in ES6.*/

const squadre = [
    {
        nome : "Juventus",
        punti : 0,
        falli : 0
    },
    {
        nome : "Milan",
        punti : 0,
        falli : 0
    },
    {
        nome : "PSG",
        punti : 0,
        falli : 0
    }
];

const randNum = (min , max ) => Math.floor(Math.random()*( max - min + 1) + min);

const newAr = [];

for (let i = 0; i < squadre.length; i++){
    squadre[i].punti = randNum(1, 10);
    squadre[i].falli = randNum(1, 15);
    // per cambiare l'array di oggetti squadre
    // serve per costruire il nuovo array di oggetti
    const { nome ,punti, falli} = squadre[i];
    newAr[i]={
        nome,
        punti,
        falli
    };
    
    var tableHTML = document.querySelector('.table-container');
    
    tableHTML.innerHTML +=
    ` 
    <ul>
    <li>${nome}</li>
    <li>${punti}</li>
    <li>${falli}</li>
    </ul>
    `
}



console.log("Questo è l' array dei dati DOPO la creazione dei puinti e falli: ", newAr);

console.log(squadre);
