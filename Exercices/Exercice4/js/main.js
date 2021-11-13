import {getArea, getDistance, getLength, drawLines, roundIt} from './utils.js';


let points= [];
let isClosed = false;
document.getElementById('canvas').addEventListener('click', addPoints);
document.getElementById('canvas').addEventListener('mousemove', mouseMove);

main();

function addPoints(ev){
    let rect = document.getElementById('canvas').getBoundingClientRect();
    let mouse = {x: (ev.clientX - rect.left) , y: (ev.clientY - rect.top) };
    if(!isClosed)
    {
        points.push(mouse);
        isClosed = drawLines(points);
    }
    main();
}

function mouseMove(ev){
    let rect = document.getElementById('canvas').getBoundingClientRect();
    let mouse = {x: ev.clientX - rect.left , y:ev.clientY - rect.top}
    
    if(!isClosed && points.length>0)
    {
        drawLines(points);
        let n = points.length;
        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        /* ctx.canvas.width = canvas.clientWidth;
        ctx.canvas.height = canvas.clientHeight; */
        ctx.moveTo(points[n-1].x, points[n-1].y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
    }
}


function main(){
    var text = 'Sommets : <br>';
    if(points.length>0)
    {text+='('+points[0].x + ', '+ points[0].y +') -'+ 0 +'<br>'
    for(let i = 1; i<points.length; i++){
        text+='('+points[i].x + ', '+ points[i].y +') | '+ roundIt(getDistance(points[i-1],points[i])) +'<br>'
    }}
    text+= 'Longueur : '+getLength(points) + '<br>';
    if(isClosed) text+= 'Surface : '+getArea(points) + '<br>';
    let prop = document.getElementById('donne');
    prop.innerHTML = text;
}

