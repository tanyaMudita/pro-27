class Bobs{
    constructor(x, y) {
        var options = {
            'isStatic': false,
            'restitution':1.0,
            'friction':0.4,
            'density':0.6
        }
        this.body = Bodies.circle(x, y, 30, options);
        World.add(world, this.body);
      }
      display(){
        
        var pos =this.body.position;

        push();
        translate(this.body.position.x, this.body.position.y);
        
        strokeWeight(4);
        stroke(17,0,3)
        fill(252,3,66);
        ellipseMode(CENTER);
        ellipse(0,0,60);
        pop();
      }
}