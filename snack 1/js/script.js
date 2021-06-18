/*Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
 Stampare a schermo la bici con peso minore utilizzando destructuring e template literal. Risolvetelo prima in versione ES5,
  poi commentate la versione in ES5 e fatelo in ES6. (modificato) */ 
/*
  var negozioBici = [
    {
        nome : "corsa",
        peso : 15
    },
    {
        nome : "montain bike",
        peso : 25
    },
    {
        nome : "BMX",
        peso : 19
    }
];


var  minPeso = negozioBici[0];

for (var i = 1; i < negozioBici.length; i ++) {
    if (negozioBici[i].peso < minPeso.peso){
        minPeso = negozioBici[i];
    }
}

document.getElementById("es_1").innerHTML = "La bici con il minor peso è: " + minPeso.nome;
*/

//ES6

const negozioBici = [
    {
        nome : "corsa",
        peso : 8
    },
    {
        nome : "BMX",
        peso : 15
    },
    {
        nome : "montain bike",
        peso : 10
    }
];

let  minPeso = negozioBici[0];

for (let i = 1; i < negozioBici.length; i ++) {
    
    const{peso} = negozioBici[i];

    if (peso < minPeso.peso){
        minPeso = negozioBici[i];
    }
}

document.getElementById("es_1").innerHTML = `La bici con il minor peso è : ${minPeso.nome}`; 