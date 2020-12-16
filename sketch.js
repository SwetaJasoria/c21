var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() 
{
  createCanvas(windowWidth, windowHeight);

  fixedRect = createSprite(600,200,50,80);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(400,200,80,50);
  movingRect.shapeColor = "green";

  // gameObject1 = createSprite(100,100,50,50);
  // gameObject1.shapeColor  = "green"; 

  // gameObject2 = createSprite(200,100,50,50);
  // gameObject2.shapeColor  = "green"; 

  // gameObject3 = createSprite(300,100,50,50);
  // gameObject3.shapeColor  = "green"; 

  // gameObject4 = createSprite(400,100,50,50);
  // gameObject4.shapeColor  = "green"; 
 
}

function draw() 
{
  //background(r, g, b);
  // background(0-255, 0-255, 0-255);
  background(200,10,100); 

  // console.log(fixedRect.x - movingRect.x);
  // console.log(fixedRect.width/2 + movingRect.width/2);

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  // if(true)
  // {

  // }
  // else
  // {

  // }

  // calling function
  // if(isTouching(movingRect, fixedRect)) 
  // {
  //   movingRect.shapeColor = "red";
  //   fixedRect.shapeColor = "red";
  // }
  // else
  // {
  //   movingRect.shapeColor = "green";
  //   fixedRect.shapeColor = "green";
  // }

  // if(isTouching(movingRect, gameObject1)) 
  // {
  //   movingRect.shapeColor = "blue";
  //   gameObject1.shapeColor = "blue";
  // }
  // else
  // {
  //   // movingRect.shapeColor = "green";
  //   gameObject1.shapeColor = "green";
  // }

  if(isTouching(movingRect, fixedRect)) 
  {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else
  {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  // if(isTouching(movingRect, gameObject1)) 
  // {
  //   movingRect.shapeColor = "blue";
  //   gameObject1.shapeColor = "blue";
  // }
  // else if(isTouching(movingRect, fixedRect))
  // {
  //   movingRect.shapeColor = "red";
  //   fixedRect.shapeColor = "red";
  // }
  // else
  // {
  //   movingRect.shapeColor = "green";
  //   gameObject1.shapeColor = "green";
  //   fixedRect.shapeColor = "green";
  // }

  drawSprites();
}

// called function
function isTouching(object1, object2)
{
  if((object1.x - object2.x <= object2.width/2 + object1.width/2)
  && (object2.x - object1.x <= object2.width/2 + object1.width/2)
  && (object1.y - object2.y <= object2.height/2 + object1.height/2)
  && (object2.y - object1.y <= object2.height/2 + object1.height/2))
  {
    return true;
  }
  else 
  { 
    return false;
  }
}



