class bob {
    constructor(x, y){
        var options = {restitution:0.3, friction:0.5, density:1.2, isStatic:false};
        this.radius = 90
        this.body = Bodies.circle(x, y, (this.radius-20)/2, options);
        World.add(world, this.body);
    }
     display(){
         var pos = this.body.position;
         push();
         translate(pos.x, pos.y);
         imageMode(CENTER);
         rectMode(CENTER);
         fill(255, 0, 255);
         ellipse(0, 0, this.radius)
         pop();

     }
}