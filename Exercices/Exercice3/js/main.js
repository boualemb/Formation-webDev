
var medecin = {nom:'Bentest', prenom:'test', 
                specialite:' Medecin specialite en Pediatrie', 
                adress:'05 Cite les cerisiers, 13000, Tlemcen', 
                tel:'0XX XX XX XX'};

var patient = {nom:'Boutest', prenom:'Test', anneDeNaissance:2020, genre:'m' , adress:'', tel:''};

var ordonnance = [{nom:'Josacine 250mg', dose:'8 ml 2 fois par jours'},
                    {nom:'niframycine (1,25/15) (Sol Nas)', dose:'1 goutte 3 fois par jours'},
                    {nom:'Cortidal (0,01)', dose:'8 ml le matin pandant 5 jours'}];


var date = new Date();
var day = formatNumero( date.getDate());
var month = formatNumero( date.getMonth() + 1);
var year = date.getFullYear();

document.getElementById('lieuetdate').innerHTML = 'Tlemcen, Le ' +day+'/'+ month +'/'+  year;


document.getElementById('medecin').innerHTML = 'Dr. '+ medecin.prenom.charAt(0).toUpperCase()+'. '+
                                                    medecin.nom.toUpperCase()+'<br>'+
                                                    medecin.specialite+'<br>'+
                                                    medecin.adress+'<br>'+
                                                    medecin.tel;
/* let aff = '';

if (patient.genre == 'm'){
    aff = 'Mr. ';
}
else {
    aff = 'Mme';
} */
let aff = patient.genre == 'm' ? 'Mr. ' : 'Mme';
document.getElementById('patient').innerHTML = aff + patient.prenom.charAt(0).toUpperCase()+'. '+
                                                patient.nom+'<br>'+
                                                (year - patient.anneDeNaissance)+' ans';


document.getElementById('listMed').innerHTML = populateTable(ordonnance);



function formatNumero (num){
    if (num<10)
    {return '0'+num;}
    else
    {return num;} 

}

function populateTable(meds){
    let html ='<tr>';
            html+='<th width="10%"> N </th>';

            html+='<th width="50%">Designation</th>';

            html+='<th width="40%">Dose</th>';
        html+='</tr>';
    let counter = 1;

    for (let med of meds){
        html +='<tr>';
            html +='<td>';
            html += counter;
            html +='</td>';
            html +='<td>';
            html += med.nom;
            html +='</td>';
            html +='<td>';
            html += med.dose;
            html +='</td>';
        html +='</tr>';
        counter++;
    }
    return html;
}