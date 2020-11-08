
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var canvas;

function preload()
{
	
}

function setup() {
	canvas = createCanvas(windowWidth/2, windowHeight/2);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Pendulum(200, 300, (255, 255, 255));
	bob2 = new Pendulum(260, 300, (255, 255, 255));
	bob3 = new Pendulum(320, 300, (255, 255, 255));
	bob4 = new Pendulum(380, 300, (255, 255, 255));
	bob5 = new Pendulum(440, 300, (255, 255, 255));

	sling1 = new Sling(bob1.body,{x:200,y:100});
	sling2 = new Sling(bob2.body,{x:260,y:100});
	sling3 = new Sling(bob3.body,{x:320,y:100});
	sling4 = new Sling(bob4.body,{x:380,y:100});
	sling5 = new Sling(bob5.body,{x:440,y:100});

	var render = Render.create({ 
		element: document.body, 
		engine: engine, 
		options: { 
			width: 1300, 
			height: 600, 
			wireframes: false 
		} 
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
  }

