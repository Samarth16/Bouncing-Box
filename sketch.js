var box;
var rect1;
var rect2;
var rect3;
var rect4;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);
    

    rect = createSprite(250,23, 15,15);
    rect.shapeColor="white";

    //create 4 different surfaces
    
    rect1 = createSprite(30,400,100,40,);
    rect1.shapeColor="red";
    rect2 = createSprite(140,400,100,40,);
    rect2.shapeColor="green";
    rect3 = createSprite(250,400,100,40,);
    rect3.shapeColor="cyan";
    rect4 = createSprite(360,400,100,40,);
    rect4.shapeColor="blue";

    music.play();


    //create box sprite and give velocity
    box = createSprite(random(10,390),60,20,20);
    box.shapeColor="white";
    box.velocityX = 8;
    box.velocityY = 6;
}

function draw() {
    background("black");
    edges = createEdgeSprites();
    drawSprites();

    //add condition to check if box touching surface and make it box
    if(box.isTouching(rect1)){
       box.shapeColor="red";
       rect.shapeColor="red";
    }

    if(box.isTouching(rect2)){
        box.shapeColor="green";
        rect.shapeColor="green";
     }

     if(box.isTouching(rect3)){
        box.shapeColor="cyan";
        rect.shapeColor="cyan";
        box.velocityX =0;
        box.velocityY =0;
        boxNo = 3;
        music.stop();
     }

     if(box.isTouching(rect4)){
        box.shapeColor="blue";
        rect.shapeColor="blue";
     }

     box.bounceOff(edges);
     box.bounceOff(rect1);
     box.bounceOff(rect2);
     box.bounceOff(rect3);
     box.bounceOff(rect4)
     


    textSize(20);
    fill("orange")
    text("Box Hit :", 150, 30 );


}
