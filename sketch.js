
var trex ,trex_running;
var edges;


function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running);
  edges=createEdgeSprites();

  // adding scale and position to trex
  trex.scale=0.5;
  trex.x=50;
 
}

function draw(){

  background("white") // set background to white


  // jump when space button is pressed
  console.log(trex.y);
  if(keyDown("space")){
    trex.velocityY=-10;
  }

  // add gravity
  trex.velocityY=trex.velocityY+0.5;

  // the trex collides with the edge below
  trex.collide(edges[3]);


  drawSprites();
  

}
