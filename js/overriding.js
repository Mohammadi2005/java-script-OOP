class Shape{
    move(){
        console.log("Shape moveing");
    }
}

class Circle extends Shape{
    move(){
        console.log("Circle Moveing");
    }
}

class Square extends Shape{
    move(){
        super.move();
        console.log("Square Moveing");
    }
}

const myCircle = new Circle();
myCircle.move();

const mySquare = new Square();
mySquare.move();

