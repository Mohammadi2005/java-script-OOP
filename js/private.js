class Wallet{

    #money;
    #Name;

    constructor(name){
        this.#money = 0;
        this.#Name = name;
    }

    add(amount){
        if (amount < 0){
            throw new Error("amount have to be more then zero");
        }
        this.#money += amount;
    }
    getBalance(){
        return this.#money;
    }

    spend(amount){
        if (amount > this.#money){
            throw new Error("you don't have enough money");
        }
        this.#money -= amount;
    }
    getName(){
        return this.#Name;
    }
    setName(name){
        this.#Name = name;
    }
}


const myWallet = new Wallet("amir");

console.log(myWallet.getBalance());
myWallet.add(100);
console.log(myWallet.getBalance());
myWallet.spend(10);
console.log(myWallet.getBalance());
console.log(myWallet.getName());
myWallet.setName("hossein");
console.log(myWallet.getName());





