const Bank_balance = require('./bank_balance')

describe('bank_balance', () => {
  it('Will add 10 to the bank balance', () => {
   const bank = new Bank_balance();        
   bank.deposit(10);
   expect(bank.account_total()).toBe(10)
  
  });

  it('Will add two lots of 10 to the bank balance', () => {
    const bank = new Bank_balance();        
    bank.deposit(10);
    bank.deposit(10);
    expect(bank.account_total()).toBe(20)
  });

    it('Will add two lots of 10 to the bank balance and remove 10', () => {
      const bank = new Bank_balance();        
      bank.deposit(10);
      bank.deposit(10);
      bank.withdraw(10)
      expect(bank.account_total()).toBe(10)
     
 
   });

   it('Will add 100 to the bank balance and remove 50', () => {
    const bank = new Bank_balance();        
    bank.deposit(10);
    bank.deposit(10);
    bank.deposit(10);
    bank.deposit(10);
    bank.deposit(60);
    bank.withdraw(50)
    expect(bank.account_total()).toBe(50)
 });

 it('if the account is less than 0, it will throw a error', () => {
  const bank = new Bank_balance();        
  expect(() => bank.withdraw()).toThrow("Sorry you have insufficient funds")
  expect(bank.account_total()).toBe(0)
 }); 

 it('if the account has 200 in the account and you try to withdraw 50, no error will be shown', () => {
  const bank = new Bank_balance();        
  bank.deposit(100)
  bank.withdraw(50);
  expect(bank.account_total()).toBe(50)
 }); 
 it("shows a withdrawal, balance and date on statement", () => {
  const bank = new Bank_balance(); 
  const date = new Date().toLocaleDateString();

  bank.deposit(10);
  bank.withdraw(10);

  expect(bank.statement).toEqual([
    { date: date,
      credit: null,
      debit: 10,
      balance: 0,
    },
    { date: date,
      credit: 10,
      debit: null,
      balance: 10,
    },
  ])
})
});