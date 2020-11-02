const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform1,platform2

var box1,box2,box3,box4,box5,box6,box7
var box8,box9,box10,box11,box12
var box13,box14,box15
var box16

var polygon
var slingshot

function setup(){
    var canvas = createCanvas(1366,600);
    engine = Engine.create();
    world = engine.world;

    polygon=new Polygon(50,200,20)
  
    platform1 = new Ground(600, 500,400,20);
    platform2 = new Ground(1100, 200,300,20);

    box1=new Box(640,490,50,70)
    box2=new Box(610,490,50,70)
    box3=new Box(580,490,50,70)
    box4=new Box(570,490,50,70)
    box5=new Box(560,490,50,70)
    box6=new Box(550,490,50,70)
    box7=new Box(670,490,50,70)
   
    box8=new Box(635,400,50,70)
    box9=new Box(610,400,50,70)
    box10=new Box(580,400,50,70)
    box11=new Box(570,400,50,70)
    box12=new Box(550,390,50,70)

    box13=new Box(610,340,50,70)
    box14=new Box(580,340,50,70)
    box15=new Box(570,340,50,70)

    box16=new Box(590,300,50,70)

    
    slingshot=new SlingShot(this.polygon,{x:100,y:200})

}

function draw(){
    background("black");
    Engine.update(engine);
    strokeWeight(4);
   
   
    platform1.display();
    platform2.display();
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()

    box13.display()
    box14.display()
    box15.display()

    box16.display()

polygon.display()

    slingshot.display()

  
    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
