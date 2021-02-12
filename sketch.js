var cat, mouse, bg;
var catImg, catImg2, catImg3, mouseImg, mouseImg2, mouseImg3, bgImg;

function preload() {
    //load the images here
    catImg = loadAnimation("images/cat2.png","images/cat3.png");
    catImg2 = loadImage("images/cat1.png");
    catImg3 = loadImage("images/cat4.png");

    mouseImg = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg2 = loadImage("images/mouse1.png");
    mouseImg3 = loadImage("images/mouse4.png");

    bgImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg = createSprite(300,300);
    bg.addImage(bgImg);

    cat = createSprite(450,500,50,50);
    cat.addImage(catImg2);
    cat.scale = 0.09;
    cat.debug = true;

    mouse = createSprite(200,550);
    mouse.addImage(mouseImg2);
    mouse.scale = 0.09;
    mouse.debug = true;
}

function draw() {
    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<mouse.width/2+cat.width/2 &&
        mouse.x-cat.x<mouse.width/2+cat.width/2){
        cat.addImage("catStop",catImg3);
        cat.changeImage("catStop");
        cat.velocityX = 0;
        mouse.addImage("mouseStop",mouseImg3);
        mouse.changeAnimation("mouseStop");
    }

    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
  if(keyDown("left_arrow")){
      cat.velocityX = -5;
      cat.addAnimation("catRunning",catImg);
      cat.changeAnimation("catRunning");
      mouse.addAnimation("mouseTeasing",mouseImg);
      mouse.changeAnimation("mouseTeasing");
  }

}
