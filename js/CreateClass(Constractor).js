// Constractor function

function CreateCircle(radius) {
    this.radius = radius;
    this.Environment = function(){
        console.log(2 * 3.14 * this.radius);
    }
    this.GetRadius = function(){
        console.log(this.radius);
    }
}

var circle = new CreateCircle(4);
circle.Environment();
circle.GetRadius();
