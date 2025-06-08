function Car(name, speed) {
    this.name = name;
    this.speed = speed;
    let Color = "red";

    this.GetColor = function(){
        return Color;
    }

    let CalSpeed = function(){
        return speed / 2;
    }
    this.maxSpeed = function(){
        console.log(CalSpeed());
    }
}

let pride = new Car("pride", 200);

console.log(pride.GetColor());
pride.maxSpeed();

// error
// console.log(pride.CalSpeed());
// console.log(pride.Color);
