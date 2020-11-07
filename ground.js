class Ground{
    constructor(x,y,width){
     var options = {
         restitution: 0.5,
         friction: 0.6,
         density:1,
         isStatic:true
       }
       this.body = Bodies.rectangle(x,y,width,20, options);
       World.add(world,this.body);
       this.width=width;
       this.height=20;
    }
 
    display(){
     var angle = this.body.angle
     var pos = this.body.position
 
     push()
     fill("brown");
     rectMode(CENTER);
     translate(pos.x,pos.y)
     rotate(angle)
     rect(0,0,this.width,this.height);
     pop()
    }
 
 }