class BankBalance {
  constructor() {
    this.account = 0;
    this.statement = [];
    this.date = new Date().toLocaleDateString();
  }
  // This function allows the user to add funds to the account.
  deposit(user_input) {
    this.credit = user_input;
    this.account += this.credit;
    this.statement.unshift(
      `\n${this.date} || ${this.credit}.00 ||  || ${this.account}.00`
    );
  }
  // This function allows the user to withdraw funds from the account.
  withdraw(user_input) {
    if (this.account <= 0) {
      throw new Error("Sorry you have insufficient funds");
    } else {
      this.debit = user_input;
      this.account -= this.debit;
      this.statement.unshift(
        `\n${this.date} || || ${this.debit}.00 || ${this.account}.00`
      );
    }
  }
  // This function allows us to view the current balance of the account.
  account_total() {
    return this.account;
  }
  // This function allows us to view the statement of the account.
  user_statement() {
    let header = "date || credit || debit || balance";

    this.statement = this.statement.toString();
    this.statement = this.statement.split(", ");

    for (let index = 0; index < this.statement.length; ++index) {
      const element = this.statement[index];

      return (header += element);
    }
  }
}

module.exports = BankBalance;
