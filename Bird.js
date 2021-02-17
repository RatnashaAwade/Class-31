class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trajectory = [];
    this.smokeImg = loadImage("sprites/smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;


    super.display();
    if(this.body.position.x>200 && this.body.velocity.x>10){
      var pos = [this.body.position.x, this.body.position.y];
      this.trajectory.push(pos);
    }
    console.log(this.trajectory);
    console.log(this.trajectory[0]);
    for(var i = 0;i<this.trajectory.length;i=i+1){
      image(this.smokeImg, this.trajectory[i][0], this.trajectory[i][1])
    }

    
  }
}
