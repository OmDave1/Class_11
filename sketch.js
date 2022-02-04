//variable allocation for T-rex
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload() {
//loading animation for trex
trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
trex_collided = loadImage("trex_collided.png");

//loading image for ground
groundImage = loadImage("ground2.png")
}

function setup() {
//canvas created
createCanvas(600, 200);

//create a trex sprite
trex = createSprite(50,160,20,50);
trex.addAnimation("running", trex_running);
trex.scale = 0.5;

//create a ground sprite
ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.x = ground.width /2;
ground.velocityX = -4;


//creating invisible ground
invisibleGround = createSprite(200,190,400,10);
invisibleGround.visible=false;
}

function draw() {
//background creation
background(220);
console.log(trex.y);

//jump when the space button is pressed
if (keyDown("space")&& trex.y>=100) {
trex.velocityY = -10;
}

//gravity created
trex.velocityY = trex.velocityY + 0.8

//infinite ground
if (ground.x < 0) {
ground.x = ground.width / 2;
}

//Collision between ground and T-rex
trex.collide(invisibleGround);

//displayed objects or sprite
drawSprites();
}
