
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	groundSprite=createSprite(width/2, height-55, width,10);
	groundSprite.shapeColor=color("blue")


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, height-55, width, 10 , {isStatic:true} );
	World.add(world, ground);


	Engine.run(engine);

	paper1 = new Paper(100,200,40);
   
	box1 = new Box(480,630,120,10);
	box2 = new Box(480,570,10,80);
	box3 = new Box(600,570,10,80);
}


function draw() {
  //rectMode(CENTER);
  background(0);

  paper1.display();
  box1.display();
  box2.display();
  box3.display();
  

  drawSprites();
}
function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:30,y:-85});
	}
}



