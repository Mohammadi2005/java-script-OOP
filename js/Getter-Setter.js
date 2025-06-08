function Car(name, speed) {

    this.name = name;
    this.speed = speed;
    let Color = "red";
    let model = 1395;


    Object.defineProperty(this, "Color",{
        get: function(){
            return Color;
        },
        set: function(value){
            Color = value;
        }
    })

    Object.defineProperty(this, "model", {
        get: function(){
            return model;
        },
        set: function(value){
            model = value;
        }
    })
}

let pride = new Car("pride", 200);

console.log(pride.Color);
pride.Color = "blue";
console.log(pride.Color);

console.log(pride.model);
pride.model = 1399;
console.log(pride.model);






