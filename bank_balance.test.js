const BankBalance = require("./bank_balance");

describe("bank_balance", () => {
  it("Will add 10 to the bank balance", () => {
    const bank = new BankBalance();
    bank.deposit(10);
    expect(bank.account_total()).toBe(10);
  });

  it("Will add two lots of 10 to the bank balance", () => {
    const bank = new BankBalance();
    bank.deposit(10);
    bank.deposit(10);
    expect(bank.account_total()).toBe(20);
  });

  it("Will add two lots of 10 to the bank balance and remove 10", () => {
    const bank = new BankBalance();
    bank.deposit(10);
    bank.deposit(10);
    bank.withdraw(10);
    expect(bank.account_total()).toBe(10);
  });

  it("Will add 100 to the bank balance and remove 50", () => {
    const bank = new BankBalance();
    bank.deposit(10);
    bank.deposit(10);
    bank.deposit(10);
    bank.deposit(10);
    bank.deposit(60);
    bank.withdraw(50);
    expect(bank.account_total()).toBe(50);
  });

  it("if the account is less than 0, it will throw a error", () => {
    const bank = new BankBalance();
    expect(() => bank.withdraw(50)).toThrow(
      "Sorry you have insufficient funds"
    );
    expect(bank.account_total()).toBe(0);
  });

  it("if the account has 200 in the account and you try to withdraw 50, no error will be shown", () => {
    const bank = new BankBalance();
    bank.deposit(200);
    bank.withdraw(50);
    expect(bank.account_total()).toBe(150);
  });

  it("will return a bank statement", () => {
    const mockdate = new Date().toLocaleDateString();
    const bank = new BankBalance();
    bank.deposit(10);
    bank.withdraw(10);
    expect(bank.user_statement()).toEqual(
      `date || credit || debit || balance\n${mockdate} || || 10.00 || 0.00,\n${mockdate} || 10.00 ||  || 10.00`
    );
  });
});
