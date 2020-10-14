class box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 150;
        this.height = 150;
        this.image = loadImage("dustbingreen.png");
        World.add(world, this.body);
      }
      display(){
        imageMode(CENTER);
        fill("red")
        image(this.image, 650, 570, this.width, this.height);
      }
}
