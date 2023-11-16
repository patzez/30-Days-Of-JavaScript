class PersonAccount {
  constructor(firstName, lastName, expenses = {}, incomes = {}) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.expenses = expenses;
    this.incomes = incomes;
  }

  addExpense(expense, amount) {
    return (this.expenses[expense] = amount);
  }

  addIncome(income, amount) {
    return (this.incomes[income] = amount);
  }

  totalIncome() {
    let totalInc = Object.values(this.incomes).reduce((a, b) => a + b);
    return totalInc;
  }

  totalExpense() {
    let totalExp = Object.values(this.expenses).reduce((a, b) => a + b);
    return totalExp;
  }

  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }

  accountInfo() {
    console.log(`-- Account info --
First name: ${this.firstName}
Last name: ${this.lastName}
Incomes: ${JSON.stringify(this.incomes)}
Expenses: ${JSON.stringify(this.expenses)}
Total income: ${this.totalIncome()}
Total expense: ${this.totalExpense()}
Account balance: ${this.accountBalance()}
${"-".repeat(20)}
    `);
  }
}

const account1 = new PersonAccount(
  "John",
  "Doe",
  { rent: 5000 },
  { salary: 8000 }
);

account1.addExpense("car", 500);
account1.addIncome("passive", 800);
account1.accountInfo();
