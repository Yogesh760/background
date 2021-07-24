var ball
function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,10,10)

}

function draw() 
{
  background(30);
  if(keyDown("right")){
    ball.position.x = ball.position.x+5
    background("blue")
   }
  if(keyDown("left")){
    ball.position.x = ball.position.x-5
    background("red")
   }
  if(keyDown("down")){
    ball.position.y = ball.position.y +5
    background("yellow")
   }
  if(keyDown("up")){
    ball.position.y = ball.position.y -5
    background("pink")
  }
drawSprites()
}
