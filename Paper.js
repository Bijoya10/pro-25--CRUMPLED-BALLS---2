class Paper{
    constructor(x,y,radius){
        var options={
            restitution:0.5,
            density:0.5
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.radius=radius
        World.add(world,this.body)
    }

    display(){
        var pos=this.body.position
        push()
        fill("#AA1945")
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.radius,this.radius);
        pop()
    }
}