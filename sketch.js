const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin,ground,ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground=new Ground(400,650)
	dustbin=new Dustbin(600,630,150,100);
	ball=new Paper(100,100,15)
	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background("#F1CED4");

	ground.display()
	dustbin.display();
	ball.display()
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:14,y:30})
	}
}


