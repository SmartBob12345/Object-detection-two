function preload(){
    room = loadImage("image6.jpg");
}
function setup(){
    canvas = createCanvas(600, 400);
    canvas.center();
    document.getElementById("status").innerHTML = "Detecting Objects";
    detector = ml5.objectDetector("cocossd", loaded)
}
function draw(){
    image(room, 0, 0, 600, 400);
}
function loaded(){
    console.log("the model is loaded");
    detector.detect(room, gotResults)
}
function gotResults(error, result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
    }
}
function back(){
    window.location = "index.html";
}