function Circle1(radius) {
    this.radius = radius;

    this.Environment = function () {
        return 2 * 3.14 * radius;
    }
}

class Circle2 {
    constructor(radius) {
        this.radius = radius;
    }

    Environment(){
        return 2 * 3.14 * this.radius;
    }
}

const myCir1 = new Circle1(2);
const myCir2 = new Circle2(2);

console.log(myCir1.Environment());
console.log(myCir2.Environment());

