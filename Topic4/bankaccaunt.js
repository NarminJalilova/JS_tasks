function BankAccaunt (name,surname,balance) {
    this.name=name;
    this.surname=surname;
    this.balance=balance;
    this.history=[];


this.addBalance = function (money) {
    console.log(money);
    this.balance= this.balance+money;
    this.history.push(`+${money}`);
    
    const result = `${this.name} ${surname} balance is ${this.balance} ₼`;
    console.log(result);
    };

    this.withDrawBalance = function (money) {
        console.log(money);
        this.balance= this.balance-money;
        this.history.push(`-${money}`);
        
        const result = `${this.name} ${surname} balance is ${this.balance} ₼`;
        console.log(result);
        };
        
this.showHistory = function () {
    console.log(this.history);

}
}

let user1  = new BankAccaunt ("Narmin","Jalilova", 10000);
console.log(user1);

user1.addBalance(5000);
user1.showHistory();
user1.withDrawBalance(500);
user1.showHistory();





// const bankAccaunt = {
// name: "Narmin",
// surname: "Jalilova",
// balance: 10000,
// history: [],

// addBalance: function (money) {
// console.log(money);
// this.balance= this.balance+money;
// this.history.push(`+${money}`);

// const result = `${this.name} balance is ${this.balance} ₼`;
// console.log(result);
// },

// withDrawBalance: function (money) {
// console.log(money);
// this.balance= this.balance-money;
// this.history.push(`-${money}`);

// const result = `${this.name} balance is ${this.balance} ₼`;
// console.log(result);
// }, 

// showHistory: function () {
//     console.log(this.history);    
// }
// }

// bankAccaunt.addBalance(500);
// bankAccaunt.withDrawBalance(800);
// bankAccaunt.showHistory()
