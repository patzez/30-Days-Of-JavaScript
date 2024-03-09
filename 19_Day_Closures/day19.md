# Day 19 - Closures

## Exercises: Level 1

#### 1. Create a closure which has one inner function.

```js
function outerFunction() {
  let count = 1;
  function multiplyByTwo() {
    count *= 2;
    return count;
  }
  return multiplyByTwo;
}

const testResult = outerFunction();
console.log(testResult());
console.log(testResult());
console.log(testResult());
```

## Exercises: Level 2

#### 1. Create a closure which has three inner functions.

```js
function outerFunction() {
  let count = 1;
  function multiplyByTwo() {
    count *= 2;
    return count;
  }
  function multiplyByThree() {
    count *= 3;
    return count;
  }
  function multiplyByFour() {
    count *= 4;
    return count;
  }
  return {
    multiplyByTwo: multiplyByTwo(),
    multiplyByThree: multiplyByThree(),
    multiplyByFour: multiplyByFour(),
  };
}

const testResult = outerFunction();
console.log(testResult.multiplyByTwo);
console.log(testResult.multiplyByThree);
console.log(testResult.multiplyByFour);
```

## Exercises: Level 3

#### 1. Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

```js
function personAccount() {
  const firstName = "John";
  const lastName = "Doe";
  const incomes = {
    salary: 5000,
    passive: 2000,
    courses: 2000,
  };
  const expenses = {
    rent: 4000,
    leasing: 2000,
    other: 1000,
  };

  function totalIncome() {
    const totalInc = Object.values(incomes).reduce((a, b) => a + b);
    return totalInc;
  }

  function totalExpense() {
    const totalExp = Object.values(expenses).reduce((a, b) => a + b);
    return totalExp;
  }

  function accountInfo() {
    return `Full name: ${firstName} ${lastName}, Incomes: ${JSON.stringify(
      incomes
    )}, Expenses: ${JSON.stringify(expenses)}.`;
  }

  function addIncome(name, amount) {
    incomes[name] = amount;
  }

  function addExpense(name, amount) {
    expenses[name] = amount;
  }

  function accountBalance() {
    return totalIncome() - totalExpense();
  }

  return {
    totalIncome: totalIncome,
    totalExpense: totalExpense,
    accountInfo: accountInfo,
    addIncome: addIncome,
    addExpense: addExpense,
    accountBalance: accountBalance,
  };
}

const account = personAccount();
console.log(account.totalIncome());
console.log(account.totalExpense());
console.log(account.accountInfo());

account.addIncome("lottery", 3000);
console.log(account.totalIncome());

account.addExpense("tax", 2000);
console.log(account.totalExpense());

console.log(account.accountBalance());
```
