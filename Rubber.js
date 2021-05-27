class Rubber {
  constructor(x,y,width,height,angle) {
    var options = {
      'density':1.0,
      'friction': 5.0,
      'restitution':0.3
    }
    this.body = Bodies.rectangle(x,y,width,height,angle,options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    strokeWeight(4);
    stroke("black");
    fill("darkblue");
    ellipse(0,0,this.width,this.height);
    pop();
  }
}