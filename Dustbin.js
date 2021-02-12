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
        this.image=loadImage("dustbin.png")

        World.add(world,this.base)
        World.add(world,this.side1)
        World.add(world,this.side2)
    }

    display(){
        var pos=this.base.position
        var side1pos=this.side1.position
        var side2pos=this.side2.position
        
        imageMode(CENTER)
        image(this.image,pos.x,pos.y-this.height/2+10,this.width,this.height);
       
    }
}