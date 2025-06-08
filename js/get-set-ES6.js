class Wallet{
    #money = 0;

    get money(){
        return this.#money;
    }
    set money(amount){
        this.#money = amount;
    }
}

const myWallet = new Wallet();

console.log(myWallet.money);
myWallet.money = 100;
console.log(myWallet.money);

