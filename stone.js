class CanClass {
    constructor(x,y,radius){
var options = {
    isStatic:true,
    restitution:0,
    friction:1, 
    density:1.2
}
   
    this.body = Bodies.circle(x,y,radius, options);
    this.radius = radius;
    this.image = loadImage("stone.png");
    World.add(world, this.body);
    
}
display(){
    push();
    ellipseMode(CENTER)
    translate(this.body.position.x, this.body.position.y);
    ellipse(this.body.position.x, this.body.position.y,this.radius);
    imageMode(CENTER);
        image(this.image, 0, 0, 85, 85);
}
}