class Bank_balance {
  
  constructor() {
    this.debit = 0
    this.credit = 0
    this.account = 0
    this.statement = []
  }
  
  deposit(user_input) {
    const date = new Date().toLocaleDateString();
    this.credit = user_input;
    this.account += this.credit
    this.statement.unshift({
      date: date,
      credit: user_input,
      debit: null,
      balance: this.account,
    });

  }  
   
  withdraw(user_input) {
    const date = new Date().toLocaleDateString();

    if (this.account <= 0) {
      throw new Error("Sorry you have insufficient funds")
    }
    else {
    this.debit = user_input
    this.account -= this.debit
    this.statement.unshift({
      date: date,
      credit: null,
      debit: this.debit,
      balance: this.account,
    });
    console.log(this.statement)
    }
  }
  
  account_total() {
    return this.account
  }  
}

module.exports = Bank_balance;


