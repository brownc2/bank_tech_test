# Technologies used

```
Eslint
Jest
Node
Npm

```

# Steps to setup.

Clone repo

```
https://github.com/brownc2/bank_tech_test.git
```

Install npm

```
npm install
```

Create a package.json

```
npm init
```

Install jest

```
npm install -g test
```

Install ESlint

```
npm init @eslint/config
```

Run jest

```
Jest
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
│ BankBalance Class          │
│                            │
│ - deposit                  │
│ - withdraw                 │
│ - account_total            │
│ - user_statement           │
└───────────┬────────────────┘


```

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

# Design

Class - BankBalance

After working out how my program should work, I designed a single class that can provide a function to add funds to the account, withdraw funds from the account and also view a statement.

BankBalance has a function called **deposit** which allows the user to add funds to the account and make a statement which is pushed into a array with a time stamp confirming when the deposit was made. It also has a function called **withdraw**, which allows the user to take money out of the account and also have a time stamp confirming when the withdraw was made. To allow the user to view a statement I made a function called **user_statement** which will show all **deposit** and **withdraw** made.
