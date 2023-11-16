# Day 15 - Classes

## Exercises: Level 1

#### 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods.

```js
class Animal {
  constructor(name, age, color, legs = 4) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  introduce() {
    return `${this.name} is ${this.age} years old, he is ${this.color} and has ${this.legs} legs.`;
  }

  get getName() {
    return this.name;
  }

  get getAge() {
    return this.age;
  }

  set setAge(age) {
    return (this.age = age);
  }

  set setLegs(legs) {
    return (this.legs = legs);
  }

  static startRunning() {
    return "Animal is running!";
  }
}
```

#### 2. Create a Dog and Cat child class from the Animal Class.

```js
class Dog extends Animal {
  makeSound() {
    return "Bark, bark!";
  }
}

class Cat extends Animal {
  makeSound() {
    return "Meow, meow!";
  }
}
```

## Exercises: Level 2

#### 1. Override the method you create in Animal class.

```js
class Dog extends Animal {
  makeSound() {
    return "Bark, bark!";
  }

  introduce() {
    return `This is ${this.name} a ${this.age} years old dog. He is ${this.color} and has ${this.legs} legs.`;
  }
}
```

## Exercises: Level 3

#### 1. Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.

```js
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range() // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
console.log(statistics.describe())
/*Count: 25
Sum:  744
Min:  24
Max:  38
Range:  14
Mean:  30
Median:  29
Mode:  (26, 5)
Variance:  17.5
Standard Deviation:  4.2
Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
*/
```

```js
class Statistics {
  constructor(data) {
    this.data = data;
  }

  count() {
    return this.data.length;
  }

  sum() {
    return this.data.reduce((a, b) => a + b, 0);
  }

  sortData() {
    return this.data.sort((a, b) => a - b);
  }

  min() {
    return this.sortData()[0];
  }

  max() {
    return this.sortData()[this.data.length - 1];
  }

  range() {
    return this.max() - this.min();
  }

  mean() {
    return this.sum() / this.count();
  }

  median() {
    const sortedNumbers = this.sortData();
    const middleIndex = Math.floor(sortedNumbers.length / 2);
    if (sortedNumbers.length % 2 === 0) {
      return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
    } else {
      return sortedNumbers[middleIndex];
    }
  }

  mode() {
    const target = { mode: null, count: null };
    this.data.forEach((number) => {
      const numArr = this.data.filter((num) => num === number);
      if (numArr.length > target.count) {
        target.mode = number;
        target.count = numArr.length;
      }
    });
    return target;
  }

  variance() {
    const mean = this.mean();
    const count = this.count();
    const squaredDeviation = this.data.reduce((a, b) => a + (b - mean) ** 2, 0);
    return (squaredDeviation / count).toFixed(1);
  }

  std() {
    return Math.sqrt(this.variance()).toFixed(1);
  }

  freqDist() {
    const count = this.count();
    const frequencyDistribution = [];
    const dataSet = new Set(this.data);
    dataSet.forEach((number) => {
      let numberCount = this.data.filter((num) => num === number).length;
      let percentageOfTotal = (numberCount / count) * 100;
      frequencyDistribution.push([percentageOfTotal, number]);
    });
    frequencyDistribution.sort((a, b) => b[0] - a[0]);
    return frequencyDistribution;
  }

  describe() {
    const description = `Count: ${this.count()}
Sum: ${this.sum()}
Min: ${this.min()}
Max: ${this.max()}
Range: ${this.range()}
Mean: ${this.mean()}
Median: ${this.median()}
Mode: ${JSON.stringify(this.mode())}
Variance: ${this.variance()}
Standard Deviation: ${this.std()}
Frequency Distribution: ${JSON.stringify(this.freqDist())}`;
    return description;
  }
}

ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];
const statistics = new Statistics(ages);
console.log(statistics.describe());
```

#### 2. Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

```js
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
```
