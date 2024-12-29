// function BankAccaunt (name,surname,balance) {
//     this.name=name;
//     this.surname=surname;
//     this.balance=balance;
//     this.history=[];


// this.addBalance = function (money) {
//     console.log(money);
//     this.balance= this.balance+money;
//     this.history.push(`+${money}`);
    
//     const result = `${this.name} ${surname} balance is ${this.balance} ₼`;
//     console.log(result);
//     };

//     this.withDrawBalance = function (money) {
//         console.log(money);
//         this.balance= this.balance-money;
//         this.history.push(`-${money}`);
        
//         const result = `${this.name} ${surname} balance is ${this.balance} ₼`;
//         console.log(result);
//         };
        
// this.showHistory = function () {
//     console.log(this.history);

// }
// }

// let user1  = new BankAccaunt ("Narmin","Jalilova", 10000);
// console.log(user1);

// user1.addBalance(5000);
// user1.showHistory();
// user1.withDrawBalance(500);
// user1.showHistory();





// // const bankAccaunt = {
// // name: "Narmin",
// // surname: "Jalilova",
// // balance: 10000,
// // history: [],

// // addBalance: function (money) {
// // console.log(money);
// // this.balance= this.balance+money;
// // this.history.push(`+${money}`);

// // const result = `${this.name} balance is ${this.balance} ₼`;
// // console.log(result);
// // },

// // withDrawBalance: function (money) {
// // console.log(money);
// // this.balance= this.balance-money;
// // this.history.push(`-${money}`);

// // const result = `${this.name} balance is ${this.balance} ₼`;
// // console.log(result);
// // }, 

// // showHistory: function () {
// //     console.log(this.history);    
// // }
// // }

// // bankAccaunt.addBalance(500);
// // bankAccaunt.withDrawBalance(800);
// // bankAccaunt.showHistory()















// BankAccount Constructor
function BankAccount(name, surname, balance) {
    this.name = name;
    this.surname = surname;
    this.balance = balance;
    this.history = [];

    this.addBalance = function (money) {
        this.balance += money;
        this.history.push(`+${money} ₼`);
    };

    this.withDrawBalance = function (money) {
        if (money > this.balance) {
            this.history.push(`Attempted withdrawal of ${money} ₼ - Insufficient funds`);
            return;
        }
        this.balance -= money;
        this.history.push(`-${money} ₼`);
    };

    this.getCardHTML = function () {
        const historyHTML = this.history.map(item => `<div class="history-item">${item}</div>`).join('');
        return `
            <div class="card">
                <h2>${this.name} ${this.surname}</h2>
                <p>Balance: ${this.balance} ₼</p>
                <div class="history">
                    <strong>Transaction History:</strong>
                    ${historyHTML}
                </div>
            </div>
        `;
    };
}

// Example Accounts
const accounts = [
    new BankAccount("Narmin", "Jalilova", 10000),
    new BankAccount("Ali", "Mammadov", 15000),
    new BankAccount("Leyla", "Huseynova", 5000)
];

// Add transactions
accounts[0].addBalance(5000);
accounts[0].withDrawBalance(3000);
accounts[1].withDrawBalance(10000);
accounts[2].addBalance(2000);

// Render Cards
const accountCardsContainer = document.getElementById('account-cards');
accounts.forEach(account => {
    accountCardsContainer.innerHTML += account.getCardHTML();
});
