
class PaperClass{
constructor(x,y,width, height){
var options = {
    isStatic:true,
    restitution:0.3,
    friction:0.5,
    density:1.2
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("tree.png");
    World.add(world, this.body);
    
}
display(){
    push();
   
    rectMode(CENTER);
    rect(600, 0, this.width, this.height);
    imageMode(CENTER);
        image(this.image, 580, -110, 400, 650);
    pop();
}
}