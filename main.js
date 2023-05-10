objects= [];
status = "";
function preload(){
    video = createVideo('video.mp4');
}
function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
    video.hide();
}
function start(){
    ojectDetector = ml5.objectDetector('cocssd',modelLoaded);
    document.getElementById("status").innerHTML = "status: detectando objetos";
}
function modelLoaded(){
    console.log("modelo carregado");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
function gotResult(error,results){
    if(error){
        console.log(error)
    }
    console.log(results);
    objects = results;
}
function draw(){
    image(video, 0,0,480,380);
        if(status != ""){
            objectDetector.detect(video, gotResult);
            for(i= 0;i<object.legth;i++){
                document.getElementById("status").innerHTML= "Status: Objetos detectados";
                document.getElementById("numberofobjects").innerHTML="quantidade de objetos detectados: "+objects.legth;
                fill("#FF0000");
                percent = floor(objects[i].confidence*100);
                text(objects[i].label+" "+percent+"%",object[i].x+15,objects[i],y+15);
                noFill();
                stroke("#FF0000");
                rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
            }
        }
}