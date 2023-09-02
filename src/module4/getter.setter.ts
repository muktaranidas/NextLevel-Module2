// class BankAccount {
//   public id: number;
//   public name: string;
//   private balance: number;

//   constructor(id: number, name: string, balance: number) {
//     this.id = id;
//     this.name = name;
//     this.balance = balance;
//   }

//   //getter
//   get balanceGet(): number {
//     return this.balance;
//   }

//   // setter
//   set deposit(amount: number) {
//     this.balance = this.balance + amount;
//   }

//   getBalance(): number {
//     return this.balance;
//   }
//   // addDeposit(account: number) {
//   //   this.balance = this.balance + account;
//   // }
// }

// class StudentAccount extends BankAccount {
//   test() {
//     // this.getBalance();
//   }
// }
// const myAccount = new BankAccount(2733, "Mukta", 100);
// // myAccount.balance = 0; //cannt access coz is private modifier
// // myAccount.addDeposit(20);
// // myAccount.getBalance();
// // myAccount.getBalance();
// console.log(myAccount.balanceGet);
// myAccount.deposit = 29;
// console.log(myAccount.balanceGet);
