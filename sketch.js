
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6;
var world,boy;
var stone;

function preload(){
	boy=loadImage("boy.png");

  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new mango(1100,100,30);
	mango2 = new mango(900,230,30);
	mango3 = new mango(1000,180,40);
	mango4 = new mango(1230,200,25);
	mango5 = new mango(1180,160,30);
	mango6 = new mango(1090,190,20);
	

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj = new Stone(230,420,30);
	sling = new Launcher(stoneObj.body,{x:230, y:420})
	
	
	Engine.run(engine);
}

function draw() {

  background(230);
  fill("black")
  text (mouseX + "," + mouseY, mouseX,mouseY)
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stoneObj.display();
  groundObject.display();
sling.display()
  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);

}

function detectCollision(lstone,lmango){
mangoBodyPosition = lmango.body.position;
stoneBodyPosition = lstone.body.position;
var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
if (distance <= lmango.r + lstone.r){
	Matter .Body.setStatic(lmango.body,false)
}
}

function keyPressed() { 
if (keyCode === 32) { 
Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
sling.attach(stoneObj.body); 
} 
}

function mouseDragged(){
Matter.Body.setPosition(stoneObj.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
	sling.fly();
}