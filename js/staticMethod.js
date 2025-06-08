class Person {
    constructor(Name, Email){
        this.Name = Name;
        this.Email = Email;
    }

    // instance Method
    getInfo(){
        return [this.Name, this.Email];
    }

    // static method
    static validateEmail(Email){
        if (!Email || !Email.includes("@")) return false;
        return true;
    }
}

console.log(Person.validateEmail("aaaa"));
console.log(Person.validateEmail("amir@gmail.com"));




