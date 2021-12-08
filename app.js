let tableauUn = [1, 2, 3, 4, 5];
let tableauDeux = ["valeur1", "valeur2", "valeur3", "valeur4", "valeur5", "bidulemachin", "tatayoyo"];

/* Votre code ici bas */
let div = document.createElement('div');
document.body.appendChild(div)
let fonction1 = tableauUn.map(item => item** item);
let fonction2 = tableauUn.map(item => item*10);
let fonction3 = tableauUn.map(item => (item+2)/30);
let fonction4 = tableauUn.filter(item => item > 2 );
let function5 = tableauUn.filter(item => item % 2);
let function6 = tableauUn.filter(item => item*3 > 10);

div.innerHTML += fonction1.toString() + '<br>' + '<br>';
div.innerHTML += fonction2.toString() + '<br>' + '<br>';
div.innerHTML += fonction3.toString() + '<br>' + '<br>';
div.innerHTML += fonction4.toString() + '<br>' + '<br>';
div.innerHTML += function5.toString() + '<br>' + '<br>';
div.innerHTML += function6.toString() + '<br>' + '<br>';

let function7 = tableauDeux.map(item => item.length);
let function8 = tableauDeux.map(item => item + " = " + item.length);
let function9 = tableauDeux.map(item => item + item);
let function10 = tableauDeux.filter(item => item.length > 4);
let function11 = tableauDeux.filter(item => item.length % 2);
let function12 = tableauDeux.filter(item => (item.length -3) > 10);

div.innerHTML += function7.toString() + '<br>' + '<br>';
div.innerHTML += function8.toString() + '<br>' + '<br>';
div.innerHTML += function9.toString() + '<br>' + '<br>';
div.innerHTML += function10.toString() + '<br>' + '<br>';
div.innerHTML += function11.toString() + '<br>' + '<br>';
div.innerHTML += function12.toString() + '<br>' + '<br>';