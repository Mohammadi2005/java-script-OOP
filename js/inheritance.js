class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    constructor(name, age, id, university){
        super(name, age);
        this.id = id;
        this.university = university;
    }
}

const me = new Student("amir", 20, 402, "ferdowsi");

console.log(me);

