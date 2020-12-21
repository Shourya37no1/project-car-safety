
var car1,wall;
var speed , wieght
 

function setup() {
  createCanvas(1600,400);
  car1 = createSprite(50,200,50,50);

 
  wall =createSprite(1500, 200, 20, height/2);
  speed = random(55,90);
  wieght = random(400,1500);
  
}

function draw() {
  background("white");  
  car1.velocityX=speed;

  
 wall.shapeColor=color(80,80,80);

if (wall.x-car1.x<(wall.width+car1.width)/2){
  
  car1.velocityX=0;
  var deformation = 0.5 * wieght *speed*speed/25509;
  if(deformation > 180){
    car1.shapeColor=color(255,0,0);
  }
  if (deformation<180 && deformation>100){
    car1.shapeColor=color(230,230,0);
  } 
  if (deformation<100){
    car1.shapeColor=color(0,255,0);
  }
}

  drawSprites();

}