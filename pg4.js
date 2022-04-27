img = "";

function preload(){
    img = loadImage("room.jpg");
}

function setup(){
    canvas = createCanvas(500, 300);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 640, 420);
}

function back(){
    window.location = "/index.html";
}