class chain {
    constructor(body1, body2, offSetX, offSetY){
        this.offSetX = offSetX;
        this.offSetY = offSetY;
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB: {x:this.offSetX, y:this.offSetY}

        };
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(2);
        stroke(255);
        var anchor1x = pointA.x;
        var anchor1y = pointA.y;
        var anchor2x = pointB.x + this.offSetX;
        var anchor2y = pointB.y + this.offSetY;

        line(anchor1x, anchor1y, anchor2x, anchor2y);
    }

}