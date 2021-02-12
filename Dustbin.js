class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.width=width
        this.height=height
        this.base=Bodies.rectangle(x,y,width,20,options)
        this.side1=Bodies.rectangle(x-width/2,y-height/2+10,20,height,options)
        this.side2=Bodies.rectangle(x+width/2,y-height/2+10,20,height,options)
        
        World.add(world,this.base)
        World.add(world,this.side1)
        World.add(world,this.side2)
    }

    display(){
        var pos=this.base.position
        var side1pos=this.side1.position
        var side2pos=this.side2.position
        push()
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,20);
        rect(side1pos.x,side1pos.y,20,this.height)
        rect(side2pos.x,side2pos.y,20,this.height)
        pop()
    }
}