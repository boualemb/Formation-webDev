var a = 5;

var b = true;

var produit;

produit = {nom : 'Pomme', prix:200, quantite:3};

    // nom | prix | quantite | total
var text = produit.nom + ' | ' + 
            produit.prix+' Da | ' + 
            produit.quantite+' | '+ 
            (produit.quantite * produit.prix)+' Da';
console.log(text);

var date = new Date();

var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
var hour = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

var isNight = hour > 18;

console.log(hour);
console.log(isNight);
var hor = 'Tlemcen Le ' +day+'/'+ (month+1) +'/'+  year + '  '+ hour+ ':'+minutes;
document.getElementById('horloge').textContent = hor;
document.getElementById('produit').textContent = text;
