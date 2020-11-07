const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;
var box1, box2, pig1, ground1;

function preload(){
  backgroundIMG=loadImage("sprites/bg.png");
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  
  world = engine.world;
  
  box1 = new Box(450,310,70,70);
  box2 = new Box(270,310,70,70);
  pig1 = new Pig(350, 310);
  log1 = new Log(350, 270,250,PI)

  box3 = new Box(450,250, 70, 70);
  box4 = new Box(270, 250, 70, 70);
  pig2 = new Pig(350, 250);
  log2 = new Log(350, 220, 250, PI);
  ground1 = new Ground(width/2, height, width);
  
  pig3 = new Pig(350, 200);

  log3 = new Log(320, 150, 100, -PI/5);
  log4 = new Log(380, 150, 100, PI/5);

  bird1 = new Bird(20, 20);
}


function draw() {
  background(backgroundIMG);  
  Engine.update(engine);
  
  box1.display()
  box2.display();
  pig1.display();
  log1.display();

  box3.display()
  box4.display()
  pig2.display()
  log2.display()

  pig3.display();
  log3.display();
  log4.display();

  bird1.display();
  ground1.display();
}
