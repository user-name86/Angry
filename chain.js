class Chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA: bird.body,
            bodyB: constrainedLog.body,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
       World.add(world,this.chain);

    }
    display(){
      var pointA = this.chain.bodyA.position;
      var pointB = this.chain.bodyB.position;
      strokeWeight(4);
      line(this.pointA.x,this.pointA.y,this.pointB.x,this.pointB.y);
    }
}