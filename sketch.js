
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy, stone, tree, mango1, mango2, mango3, mango4, mango5, toss;
function preload()
{
	boy = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	stone = new CanClass(70, 500, 35)
	tree = new PaperClass(600, 550, -10, 0)
	mango1 = new mangoClass(600, 500, 20);
	mango2 = new mangoClass(600, 550, 20);
	mango3 = new mangoClass(600, 450, 20);
	mango4 = new mangoClass(600, 475, 20);
	mango5 = new mangoClass(600, 525, 20);

	toss = new chain(stone, {x:70, y:500});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(192,192,192);
  image(boy, 140, 590, 235, 355)
  
  ground.display();
  stone.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  drawSprites();
 
}



