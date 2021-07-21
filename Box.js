class Box{
    constructor(x,y,w,h){
        var options = {
            restitution : 1,
            friction : 1,
            density : 0.04
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
     rectMode(CENTER);
     fill("grey");
     rect(0,0,this.w,this.h);
     pop();
    }
}