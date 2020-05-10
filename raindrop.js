class raindrop{
    constructor(){
        this.x = random(width);
        this.y = random(50, 500);
        this.z = random(0, 20);
        this.height = map(this.z, 0, 20, 10, 30);
        this.speed = map(this.z, 0, 20, 10, 70);
      
      }
      
    rainfall() {
        this.y = this.y + this.speed;
        var gravity = map(this.z, 0, 20, 0, 0.5);
        this.speed = this.speed + gravity;
    
        if (this.y > 600) {
          this.y = random(1, -100);
          this.speed = map(this.z, 0, 20, 2, 5);
        }
      }

    

    display(){
        push();
        stroke(random(0,255),random(0,255),random(0,255));
        strokeWeight(random(3,10));
        line(this.x,this.y,this.x,this.y + this.height);
    }
}