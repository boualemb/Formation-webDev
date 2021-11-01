var tempOptions = [{text:"F to C", value:0},
                   {text:"C to F", value:1}];

var DistOptions = [{text:"Mi to Km", value:0},
                {text:"Km to Mi", value:1}];
var selectedMode = 'temperature';


var temp = 30;

var result = f2c(temp);

document.getElementById('resultat').innerHTML = result;


function init(){
    var valeur =  parseFloat(document.getElementById('valeur').value);
    var direction = document.getElementById('direction').value;
    convertTemperature(valeur, direction);
}

function populateSelect(radioBox){
    document.getElementById('direction').innerHTML = '';
    let mode = radioBox.value;
    selectedMode = mode;
    switch(mode)
    {
        case 'temperature':
                for( let option of tempOptions ){
                    document.getElementById('direction').innerHTML += '<option onchange="convert()" value='+ option.value +'>' +option.text+ ' </option>'
                }
            break;
        case 'distance':
                for( let option of DistOptions ){
                    document.getElementById('direction').innerHTML += '<option onchange="convert()" value='+ option.value +'>' +option.text+ ' </option>'
                }
            break;
    }

    convert();
}

function convert(){
    var valeur =  parseFloat(document.getElementById('valeur').value);
    var direction = document.getElementById('direction').value;
    switch(selectedMode)
    {
        case 'temperature':
            convertTemperature(valeur, direction);
            break;

        case 'distance':
                coonvertDistance(valeur, direction);
                break;
    }
}

function coonvertDistance(valeur, direction){
    switch (direction){
        case '0':
            document.getElementById('resultat').innerHTML = roundIt(valeur*25146/15625, 2) + ' Km';
        break;
        case '1':
            document.getElementById('resultat').innerHTML =  roundIt(valeur*15625/25146, 2)+ ' Miles';
        break;
    }
}

function convertTemperature(valeur, direction){
    
    switch (direction){
        case '0':
            document.getElementById('resultat').innerHTML = roundIt( f2c(valeur) ) + ' C';
        break;
        case '1':
            document.getElementById('resultat').innerHTML = roundIt ( c2f(valeur) )+ ' F';
        break;
    }
}

function f2c(t){
    return (t - 32) * (5/9) ;
}

function c2f(t){
    return (t * (9/5)) + 32;
} 
function roundIt(v = 0.0, n = 1)
{
    return parseFloat(v.toFixed(n));
}