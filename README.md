# Steps to setup jest.
```
install Jest: npm install --save-dev jest
```
```
To run jest: npm test
```

# User Story
```
As a user
I would like to be able to deposit money into my bank account.
```
```
As a user 
I would like to be able to withdraw money from my bank account
```
```
As a user 
I would like to have to ability to check my current bank balance and also the credit and debit transaction I have done to date.
```
# Class design

```
┌────────────────────────────┐
│ Bank_account               │
│                            │
│ - deposit                  │
│ - withdraw                 │
│ - account_total            │
│                            │
└───────────┬────────────────┘
            │
            │ 
            ▼
┌─────────────────────────┐
│ Statement               │
│ - user_balance          │
│ - print_user_balance    │
└─────────────────────────┘
```
        
# Specification

# Requirements
You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
Deposits, withdrawal.
Account statement (date, amount, balance) printing.
Data can be kept in memory (it doesn't need to be stored to a database or anything).
Acceptance criteria
Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see
```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

            
    
