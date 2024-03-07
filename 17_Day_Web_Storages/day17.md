# Day 17 - Web Storages

## Exercises: Level 1

#### 1. Store you first name, last name, age, country, city in your browser localStorage.

```js
localStorage.setItem("firstName", "Patrik");
localStorage.setItem("lastName", "Zezulka");
localStorage.setItem("age", 28);
localStorage.setItem("country", "Czech Republic");
localStorage.setItem("city", "Brno");

let firstName = localStorage.getItem("firstName");
let age = localStorage.getItem("age");
let country = localStorage.getItem("country");

console.log(firstName, age, country);
```

## Exercises: Level 2

#### 1. Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

```js
const student = {
  firstName: "Alex",
  lastName: "Doe",
  age: 22,
  skills: ["JavaScript", "Python", "HTML", "CSS"],
  country: "Island",
  enrolled: {
    math: true,
    physics: true,
    programming: true,
    economy: false,
  },
};

localStorage.setItem("student1", JSON.stringify(student));
const studentInfo = JSON.parse(localStorage.getItem("student1"));

console.log(studentInfo);
```

## Exercises: Level 3

#### 1. Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

```js
const personAccount = {
  firstName: "Alex",
  lastname: "Malex",
  incomes: {
    salary: 5000,
    passive: 2000,
    investments: 1000,
  },
  expenses: {
    morgage: 4000,
    leasing: 1000,
    other: 1000,
  },

  totalIncome: function () {
    let totInc = 0;
    for (let item of Object.values(this.incomes)) {
      totInc += item;
    }
    console.log(`Total income: ${totInc}`);
  },

  totalExpense: function () {
    let totExp = 0;
    for (let item of Object.values(this.expenses)) {
      totExp += item;
    }
    console.log(`Total expense: ${totExp}`);
  },

  accountInfo: function () {
    console.log(`Owner: ${this.firstName} ${this.lastname}`);
    this.totalIncome();
    this.totalExpense();
  },

  addIncome: function (name, amount) {
    this.incomes[name] = amount;
    console.log("Income added!");
  },

  addExpense: function (name, amount) {
    this.expenses[name] = amount;
    console.log("Expense added!");
  },

  accountBalance: function () {
    let totInc = 0;
    let totExp = 0;

    for (let item of Object.values(this.incomes)) {
      totInc += item;
    }
    for (let item of Object.values(this.expenses)) {
      totExp += item;
    }

    console.log(`Account balance: ${totInc - totExp}`);
  },
};

personAccount.totalIncome();
personAccount.totalExpense();
personAccount.accountInfo();

personAccount.addIncome("jackpot", 10000);
personAccount.totalIncome();
personAccount.addExpense("tax", 8000);
personAccount.totalExpense();

personAccount.accountBalance();
```
