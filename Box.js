class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.Visibililty = 255;
      //check the spelling of visiblity if error appears;
     // this.image = loadImage("sprites/wood1.png");
    }
  
  display(){
   console.log(this.body.speed);
   if(this.body.speed < 3){
   super.display();
}
else{
World.remove(world,this.body);
push();
this.Visibililty= this.Visibililty-5;
tint (255,this.Visibililty)
image(this.image,this.body.position.x,this.body.position.y,50,50);
pop();
}
}
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  