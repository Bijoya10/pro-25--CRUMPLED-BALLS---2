class Ground{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,800,20,options)
        World.add(world,this.body)
    }

    display(){
        var pos=this.body.position
        push()
        rectMode(CENTER)
        fill("#391306");
        rect(pos.x,pos.y,800,20);
        pop()
    }
}