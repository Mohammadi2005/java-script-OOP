function Car(Name, Model, Speed) {
    this.Name = Name;
    this.Model = Model;
    this.Speed = Speed;
    this.GetSpeed = function(){
        console.log(this.Speed);
    }
}

var pride = new Car("pride", 1395, 180);

// Add Property

// pride.Color = "black";
pride["Color"] = "red";


// delete Property

// delete pride.Model;
delete pride["Model"];

console.log(pride);

