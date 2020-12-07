var movingRect
var fixedRect
function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "red";
  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = "blue";

  movingRect.debug = false;
  fixedRect.debug = false;
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 ){
      
    fixedRect.shapeColor = "purple";
    movingRect.shapeColor = "purple";

   }

  else{
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "red";
 }




    drawSprites();

}