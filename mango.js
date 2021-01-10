class mangoClass {
    constructor(x,y,radius){
var options = {
    isStatic:true,
    restitution:0,
    friction:1, 
}
   
    this.body = Bodies.circle(x,y,radius, options);
    this.radius = radius;
    World.add(world, this.body);
    this.image = loadImage("mango.png");
}
display(){
    push();
    ellipseMode(CENTER)
    ellipse(this.body.position.x, this.body.position.y,this.radius);
    imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 0, 55, 55);
}
}