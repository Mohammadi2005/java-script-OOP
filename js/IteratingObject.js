function Car(Name, Model, Speed, Color) {
    this.Name = Name;
    this.Model = Model;
    this.Speed = Speed;
    this.Color = Color;
    this.GetSpeed = function () {
        console.log(this.Speed);
    }
}

var pride = new Car("pride", 1395, 180, "white");

// iterating

// method one 
console.log("method one");

for (var key in pride) {
    console.log(key, pride[key]);
}


for (var key in pride) {
    if (typeof(pride[key]) !== 'function'){
        console.log(key, pride[key]);
    }
}

// method two
console.log("method two");

const keys = Object.keys(pride);
console.log(keys);

if("Name" in pride){
    console.log("Neme is in pride");
}else{
    console.log("Name is not in pride");
}

