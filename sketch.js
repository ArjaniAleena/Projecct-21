
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground
var world
var engine

var leftSide
var rigthSide

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}

	ball = Bodies.circle(100,10,20,ball_options)
	World.add(world,ball)

	ground = new Ground (width/2,670,width,20)
	leftSide = new Ground (1000,600,20,120)
	rightSide = new Ground (1400,600,20,120)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

Engine.update(engine)

ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,40,40)

  ground.display()
  leftSide.display()
  rightSide.display()
  
 
}

function keyReleased(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,ball.positon,{x:85, y:-85})
}
}
