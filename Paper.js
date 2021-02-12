class Paper{
    constructor(x,y,radius){
        var options={
            restitution:0.5,
            density:0.5
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.image=loadImage("paper.png")
        this.radius=radius+25
        World.add(world,this.body)
    }

    display(){
        var pos=this.body.position
        push()
        fill("#AA1945")
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.radius,this.radius);
        pop()
    }
}