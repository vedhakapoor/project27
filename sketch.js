
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobObject1 = new Bob(400,600,50);
	bobObject2 = new Bob(500,600,50);
	bobObject3 = new Bob(600,600,50);
	bobObject4 = new Bob(700,600,50);
	bobObject5 = new Bob(800,600,50);

    roof = new Ground(600,200,1000,20);

    rope1 = new Rope(bobObject1,{x:400,y:200});
    rope2 = new Rope(bobObject2,{x:500,y:200});
    rope3 = new Rope(bobObject3,{x:500,y:200});
    rope4 = new Rope(bobObject4,{x:500,y:200});
    rope5 = new Rope(bobObject5,{x:500,y:200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



