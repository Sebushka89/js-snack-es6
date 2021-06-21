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
let  maxFalli = 0;
let squadraPiuFallosa;
var tableHTML = document.querySelector('.table-container');

for (let i = 0; i < squadre.length; i++){
    squadre[i].punti = randNum(1, 100);
    squadre[i].falli = randNum(1, 25                 );
    // per cambiare l'array di oggetti squadre
    // serve per costruire il nuovo array di oggetti
    const { nome ,punti, falli} = squadre[i];
    newAr[i]={
        nome,
        punti,
        falli
    };
    if (squadre[i].falli > maxFalli){
       maxFalli = squadre[i].falli;
       squadraPiuFallosa = squadre[i]
    }
}
console.log("Questo è l' array dei dati DOPO la creazione dei puinti e falli: ", newAr);

console.log(newAr);

for (let i = 0; i < squadre.length; i++) {
    
    let { nome, punti, falli } =squadre[i];

    if (squadre[i] === squadraPiuFallosa) {

        tableHTML.innerHTML +=
        ` 
        <ul class = 'yellow'>
        <li>${nome}</li>
        <li>${punti}</li>
        <li>${falli}</li>
        </ul>
        `;
        
    }else{
    tableHTML.innerHTML +=
    ` 
    <ul>
    <li>${nome}</li>
    <li>${punti}</li>
    <li>${falli}</li>
    </ul>
    `  
}
}

