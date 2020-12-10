class Box {
    constructor(x, y) {
      var options = {
          isStatic:false,
         
      }
      this.body = Bodies.rectangle(x,y,20,40,options);
      this.width = 25;
      this.height = 30;
      
      World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      
      rectMode(CENTER);
      stroke("aquamarine");
      rect(pos.x, pos.y, this.width, this.height);
      
    }
  }