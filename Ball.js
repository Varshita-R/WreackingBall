class Ball{
    constructor(x,y,w,h){
        var options = {
            frictionAir : 0.05,
            density : 1
        }
     this.body = Bodies.rectangle(x,y,w,h,options);
     this.x = x;
     this.y = y;
     this.w = w;
     this.h = h;
     World.add(world,this.body);
    }
    display(){
     var pos = this.body.position;
     var angle = this.body.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     ellipseMode(CENTER);
     fill("red");
     ellipse(0,0,this.w,this.h);
     pop();
    }
}