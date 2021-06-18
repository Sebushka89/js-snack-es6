/*Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà:
nome,
punti fatti,
falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
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
    const { nome , falli} = squadre[i];
    newAr[i]={
        nome,
        falli
    };
}

console.log(squadre);
console.log(newAr);