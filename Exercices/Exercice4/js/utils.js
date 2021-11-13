function drawLines(points){
    let canvas = document.getElementById('canvas');
    let divref = document.getElementById('drawZone');
    let ctx = canvas.getContext('2d');
    let isClosed = false;
    ctx.canvas.width = canvas.clientWidth;
    ctx.canvas.height = canvas.clientHeight;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (points.length > 1)
    {
        let n = points.length;
        let lastP = points[n - 1];
        let d = getDistance(points[0], lastP);
        if (n > 2 && d<20 ){
            points[n-1] = points[0];
            isClosed = true;
        }
        for (let i=0; i< n - 1; i++){ 
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[i+1].x, points[i+1].y);
            ctx.stroke();
        }
    }
    return isClosed;
}

function getDistance(a,b){
   return Math.sqrt(Math.pow((b.x - a.x), 2) + Math.pow((b.y - a.y), 2));
}

function getArea(points){
    let n = points.length;
    if (n<1) return 0.0;
    let area = 0.0;
    let j=0;
    for (let i = 1; i<n; i++){
        area+= (points[j].x*points[i].y) - (points[j].y*points[i].x);
        j=i;
    }
    area+= (points[n-1].x*points[0].y) - (points[n-1].y*points[0].x);
    return Math.abs(area/2.0);
}

function getLength(points){
    let l = 0.0;
    let n = points.length;
    if (n<1) return 0.0;

    for(let i = 1; i<n; i++){
        l+= getDistance(points[i-1],points[i]);
    }
    return roundIt(l);
}

function roundIt(v = 0.0, n = 2)
{
    return parseFloat(v.toFixed(n));
}

export{getArea, getLength, getDistance, drawLines, roundIt};