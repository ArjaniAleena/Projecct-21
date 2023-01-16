class Ground{

    constructor(x,y,w,h)
    {

let options ={
    isStatic:true
}

this.x = x
this.y = y
this.w = w
this.h = h
this.body = Bodies.rectangle(x,y,w,h,options)

World.add(world,this.body)
    }

    display(){
var position = this.body.position
push()
rectMode(CENTER)
stroke(255)
fill(130)
rect(position.x,position.y,this.w,this.h)
pop()
    }
}