const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world
var polygon, polygonImg
var score  = 0


function preload(){
  polygonImg = loadImage("polygon.png")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine)
  polygon = Bodies.circle(50,200,20)
  
  World.add(world,polygon)
  
  slingShot = new SlingShot(this.polygon,{x:100,y:200})
  stand = new Ground(390,255,210,10);
  stand1 = new Ground(560,155,150,10)

  block1 = new Box(530,135,30,40)
  
  block2 = new Box(560,135,30,40)
  block3 = new Box(590,135,30,40)
  block4 = new Box(575,95,30,40)
  block5 = new Box(545,95,30,40)
  block6 = new Box(560,55,30,40)
  block7 = new Box(450,235,30,40)
  block8 = new Box(330,235,30,40)
  block9 = new Box(360,235,30,40)
  block10 = new Box(390,235,30,40)
  block11 = new Box(420,235,30,40)
  block12 = new Box(450,2355,30,40)
  block13 = new Box(360,195,30,40)
  block14 = new Box(390,195,30,40)
  block15 = new Box(420,195,30,40)
  block16 = new Box(390,155,30,40)
  
}

function draw() {
  background(0); 
  noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, 650, 40)
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();


  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();


  slingShot.display();
  
  stand.display();
  stand1.display();
  imageMode(CENTER)
  image(polygonImg,polygon.position.x,polygon.position.y,40,40)

  
}

function mouseDragged()
{
      Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}
 
   
  
  function mouseReleased()
  {
    slingShot.fly();
  }

function keyPressed(){
  if(keyCode === 32 ){
    slingShot.attach(polygon);

  }
}
    

