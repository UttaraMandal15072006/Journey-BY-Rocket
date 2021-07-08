var astronaut, bath, brush, drink,eat, gym, gym2, sleep, move;

var iss, issImg;

function preload()
{
  bath=loadAnimation("bath1.png","bath2.png");
  brush=loadAnimation("brush.png");
  drink=loadAnimation("drink1.png","drink2.png");
  eat=loadAnimation("eat1.png","eat2.png");
  gym=loadAnimation("gym1.png","gym2.png");
  gym2=loadAnimation("gym11.png","gym12.png");
  move=loadAnimation("move.png","move1.png");
  sleep=loadAnimation("sleep.png");
  issImg=loadImage("iss.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  //createSprite(400, 200, 50, 50);
  astronaut=createSprite(width/2,height/2);
  astronaut.visible=false;
  iss=createSprite(200,200);
  iss.addImage("ISS",issImg);
  iss.scale=0.45;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  /*DOWN_ARROW for astronaut’s gymming.
  LEFT_ARROW for astronaut’s bathing.
  RIGHT_ARROW for astronaut’s eating.
  m button for moving astronauts with some velocity x and y.
  Now write code to do astronaut brush by adding UP_ARROW keyEvent*/
  if(keyWentDown(DOWN_ARROW))
  {
    astronaut.addAnimation("Gym",gym);
    astronaut.visible=true;
    astronaut.depth=iss.depth+1;
    astronaut.scale=0.4;
    astronaut.changeAnimation("Gym2",gym2);
  }
}