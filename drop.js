class Raindrop {
  constructor(x, y, radius) {
    var options = {
      'restitution': 0.1,
      'friction': 0.001,
      //'density': 1.5,
      //'isStatic': false

    }

    this.body = Bodies.circle(x, y, 5, options);
    this.r =5;


    World.add(world, this.body);
  }
  updateY(){     
    if(this.body.position.y > height){

        Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
    }
}
  display() {

    rectMode(CENTER)
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("blue");
    
    ellipse(0, 0, this.r, this.r)
    pop();






  }


}