class Paper{

constructor(x,y,r){
    var options={
        isStatic:false,
        restituion:0.3,
        friction:0.5,
        density:1.2
    }

    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(this.x, this.y, this.r/2, options);
    World.add(world, this.body);
    this.pimage = loadImage("paper.png");

}
display(){

    var paperpros=this.body.position;

    push()
    translate(paperpros.x, paperpros.y);
   image(this.pimage,100,200);
    pop()
}
}