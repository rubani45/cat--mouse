var cat, mouse, bg;
var catImg, catImg2, catImg3, mouseImg, mouseImg2, mouseImg3, bgImg;

function preload() {
    //load the images here
    catImg = loadAnimation("cat2.png","cat3.png");
    catImg2 = loadImage("cat1.png");
    catImg3 = loadImage("cat4.png");

    mouseImg = loadAnimation("mouse2.png","mouse3.png");
    mouseImg2 = loadImage("mouse1.png");
    mouseImg3 = loadImage("mouse4.png");

    bgImg = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg = createSprite(300,300);
    bg.addImage(bgImg);

    cat = createSprite(450,500);
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
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.addImage("catStop",catImg3);
        cat.changeImage("catStop");
        cat.velocityX = 0;
        mouse.addImage("mouseStop",mouseImg3);
        mouse.changeAnimation("mouseStop");
    }
     
    console.log(mouse.x - cat.x);
    console.log(mouse.width/2-cat.width/2);
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRunning",catImg);
      cat.changeAnimation("catRunning");
      mouse.addAnimation("mouseTeasing",mouseImg);
      mouse.changeAnimation("mouseTeasing");
  }

}
