class Rubber {
  constructor(x,y,radius) {
    var options = {
      'density':1.0,
      'friction': 5.0,
      'restitution':0.3
    }
    this.body = Bodies.rectangle(x,y,radius,options);
    this.radius = 25;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    strokeWeight(4);
    stroke("black");
    fill("darkblue");
    ellipse(800,563,this.radius);
    pop();
  }
}
