let tableauUn = [1, 2, 3, 4, 5];
let tableauDeux = ["valeur1", "valeur2", "valeur3", "valeur4", "valeur5", "bidulemachin", "tatayoyo"];

/* Votre code ici bas */
let div = document.createElement('div');
document.body.appendChild(div)
div.innerHTML += tableauUn.map(item => item ** item).toString() + '<br>' + '<br>';
div.innerHTML += tableauUn.map(item => item * 10).toString() + '<br>' + '<br>';
div.innerHTML += tableauUn.map(item => (item + 2)/30).toString() + '<br>' + '<br>';
div.innerHTML += tableauUn.filter(item => item > 2 ).toString() + '<br>' + '<br>';
div.innerHTML += tableauUn.filter(item => item % 2).toString() + '<br>' + '<br>';
div.innerHTML += tableauUn.filter(item => item * 3 > 10).toString() + '<br>' + '<br>';

div.innerHTML += tableauDeux.map(item => item.length).toString() + '<br>' + '<br>';
div.innerHTML += tableauDeux.map(item => item + " = " + item.length).toString() + '<br>' + '<br>';
div.innerHTML += tableauDeux.map(item => item + item).toString() + '<br>' + '<br>';
div.innerHTML += tableauDeux.filter(item => item.length > 4).toString() + '<br>' + '<br>';
div.innerHTML += tableauDeux.filter(item => item.length % 2).toString() + '<br>' + '<br>';
div.innerHTML += tableauDeux.filter(item => item.length -3 > 10).toString();

