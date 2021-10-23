var produit;

produit = {nom : 'Pomme', prix:200, quantite:3};


var produits = [
    {nom : 'Pomme', prix:250, quantite:2},
    {nom : 'Poire', prix:350, quantite:1.5},
    {nom : 'Banane', prix:200, quantite:3}
]



    // nom | prix | quantite | total


var date = new Date();

var day = formatNumero( date.getDate());
var month = formatNumero( date.getMonth() + 1);
var year = date.getFullYear();
var hour = formatNumero( date.getHours());
var minutes = formatNumero( date.getMinutes());
var seconds = formatNumero( date.getSeconds());

var isNight = hour > 18;

var hor = 'Tlemcen Le ' +day+'/'+ (month) +'/'+  year + ' <br> '+ hour+ ':'+minutes;
document.getElementById('horloge').innerHTML = hor;
document.getElementById('horloge').style.color = 'blue';

var text = '';

for (let p of produits){
    text = text + formatLigne(p) + '<br>';
}

document.getElementById('produit').innerHTML = text;




function formatNumero (num){
    if (num<10)
    {return '0'+num;}
    else
    {return num;} 

}

function formatLigne(produit){
    return produit.nom + ' | ' + 
            produit.prix+' Da | ' + 
            produit.quantite+' | '+ 
            (produit.quantite * produit.prix)+' Da';
}