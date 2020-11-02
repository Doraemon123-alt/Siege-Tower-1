class Polygon
{


    constructor(x,y,r) {
        var options = {
            isStatic: true,
            restitution:0.3,
            'friction':1,
            density:3
            
        }
  
  this.x=x
  this.y=y
  this.r=r
  
  
       
         this.body = loadImage("Plucking mangoes/mango.png");
          polygon = Bodies.circle(this.x,this.y,this.r, options);
          World.add(world, polygon);
        
        }
  
        display()
      {   var paperpos =this.body.position;
          push();
          translate(paperpos.x, paperpos.y);
          imageMode(CENTER);
          image(polygon_Img,polygon.position.x,polygon.position.y,40,40)
          ellipse(0, 0,this.r,this.r);
          pop();
      }
    }







