
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {

}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(700, 150, 500, 50);
	bob1 = new Bob(540, 550, 40);
	bob2 = new Bob(620, 550, 40);
	bob3 = new Bob(700, 550, 40);
	bob4 = new Bob(780, 550, 40);
	bob5 = new Bob(860, 550, 40);

	rope1 = new Rope(bob1.body, roof.body, -160, 0);
	rope2 = new Rope(bob2.body, roof.body, -80, 0);
	rope3 = new Rope(bob3.body, roof.body, 0, 0);
	rope4 = new Rope(bob4.body, roof.body, 80, 0);
	rope5 = new Rope(bob5.body, roof.body, 160, 0);


	Engine.run(engine);

}

function draw() {
	rectMode(CENTER);
	background("lightblue");

	roof.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	if (keyWentDown(LEFT_ARROW)) {
		Matter.Body.applyForce(bob1.body, bob1.body.position, { x: -200, y: 200 })
	}

	if (keyWentDown(RIGHT_ARROW)) {
		Matter.Body.applyForce(bob5.body, bob5.body.position, { x: 200, y: -200 })
	}

	drawSprites();

}



