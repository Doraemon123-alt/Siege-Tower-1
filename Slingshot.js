class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
    
        this.pointB = pointB
    
        

        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }    
    

    

    

    display(){
        
        if(this.stone.bodyA){
            var pointA,pointB
            
            pointA=this.stone.bodyA.position
            pointB=this.stone.pointB
            
            
            
            
            
            }   
          
            

    }
   
    fly(){
        this.sling.bodyA = null;
    }
}