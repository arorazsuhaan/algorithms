var fixedRect , movingRect
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="red"
  fixedRect.debug=true
    
  movingRect=createSprite(100,100,100,50)
  movingRect.shapeColor="green"
  movingRect.debug=true
}

function draw() {
  background(0); 
   movingRect.x=mouseX
   movingRect.y=mouseY
  drawSprites();
}