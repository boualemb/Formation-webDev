var j = 0;
var text = '';

function mouseOver(obj){
    //obj.innerHTML = text + ' ' + (j++) ;
    obj.style.backgroundColor = '#874AE8';
    obj.style.width = '130px';
}

function mouseOut(obj){
    //obj.innerHTML = "Mouse Over Me";
    obj.style.backgroundColor = '#63E4EB';
    obj.style.width = '120px';
}

function pressed(obj){
    obj.style.backgroundColor = 'blue';
}

function released(obj){
    obj.style.backgroundColor = '#874AE8';
}

function changeText(obj){
    let objs = document.getElementsByClassName("zone");
    text = obj.value;
    for (let elm of objs){
        //elm.innerHTML = obj.value;
    }
    
}


