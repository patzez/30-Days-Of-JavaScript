# Day 04 - Conditionals

## Exercises: Level 1

#### 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

```
Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive.
```

```js
let age = prompt("Enter your age:");

age >= 18
  ? console.log("You are old enough to drive.")
  : console.log(`You are left with ${18 - age} years to drive.`);
```

#### 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

```
Enter your age: 30
You are 5 years older than me.
```

```js
let myAge = 28;
let yourAge = prompt("Enter your age:");

if (myAge > yourAge) {
  console.log(`I am ${myAge - yourAge} older than you.`);
} else if (yourAge > myAge) {
  console.log(`You are ${yourAge - myAge} older than me.`);
} else {
  console.log("We are the same age!");
}
```

#### 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways.

```
4 is greater than 3
```

```js
let a = 4;
let b = 3;

// using if else
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}

// using ternary operator
a > b ? console.log("a is greater than b") : console.log("a is less than b");
```

#### 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

```
Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number.
```

```js
let number = prompt("Enter a number:");

number % 2 == 0
  ? console.log(`${number} is an even number.`)
  : console.log(`${number} is an odd number.`);
```

## Exercises: Level 2

#### 1. Write a code which can give grades to students according to theirs scores:

```
90-100, A
70-89, B
60-69, C
50-59, D
0-49, F
```

```js
let score = 99;

if (90 <= score && score <= 100) {
  console.log('Grade is: "A"');
} else if (70 <= score && score < 90) {
  console.log('Grade is: "B"');
} else if (60 <= score && score < 70) {
  console.log('Grade is: "C"');
} else if (50 <= score && score < 60) {
  console.log('Grade is: "D"');
} else if (0 <= score && score < 50) {
  console.log('Grade is: "F"');
} else {
  console.log("Invalid score.");
}
```

#### 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is:

```
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
```

```js
let month = prompt("Enter a month:").toLowerCase();

switch (month) {
  case "september":
  case "october":
  case "november":
    console.log("The season is Autumn.");
    break;
  case "december":
  case "january":
  case "february":
    console.log("The season is Winter.");
    break;
  case "march":
  case "april":
  case "may":
    console.log("The season is Spring.");
    break;
  case "june":
  case "july":
  case "august":
    console.log("The season is Summer.");
    break;
  default:
    console.log("Invalid month!");
}
```

#### 3. Check if a day is weekend day or a working day. Your script will take day as an input.

```
What is the day  today? Saturday
Saturday is a weekend.

What is the day today? saturDaY
Saturday is a weekend.

What is the day today? Friday
Friday is a working day.

What is the day today? FrIDAy
Friday is a working day.
```

```js
const workingDays = ["monday", "tuesday", "wednesday", "thursday", "friday"]; // working days in an array
const weekendDays = ["saturday", "sunday"]; // weekend days in an array

let day = prompt("What is the day today?").toLowerCase();
let formatDay = day.charAt(0).toUpperCase() + day.slice(1); // formatting the day to start with capital letter

if (workingDays.includes(day)) {
  console.log(`${formatDay} is a working day.`);
} else if (weekendDays.includes(day)) {
  console.log(`${formatDay} is a weekend.`);
} else {
  console.log("Invalid day!");
} // using .includes() method to check if the day is in array
```

## Exercises: Level 3

#### 1. Write a program which tells the number of days in a month.

```
Enter a month: January
January has 31 days.

Enter a month: JANUARY
January has 31 day

Enter a month: February
February has 28 days.

Enter a month: FEbruary
February has 28 days.
```

```js
let month = prompt("Enter a month:").toLowerCase();
let formatMonth = month.charAt(0).toUpperCase() + month.slice(1); // formatting the month to start with capital letter

switch (month) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log(`${formatMonth} has 31 days.`);
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    console.log(`${formatMonth} has 30 days.`);
    break;
  case "february":
    console.log(`${formatMonth} has 28 days.`);
    break;
  default:
    console.log("Invalid month!");
}
```

#### 2. Write a program which tells the number of days in a month, now consider leap year.

```js
let month = prompt("Enter a month:").toLowerCase();
let leapYear = confirm("Is it leap year?"); // returns true or false which is evaluated in "february" case in switch
let formatMonth = month.charAt(0).toUpperCase() + month.slice(1); // formatting the month to start with capital letter

switch (month) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log(`${formatMonth} has 31 days.`);
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    console.log(`${formatMonth} has 30 days.`);
    break;
  case "february":
    leapYear
      ? console.log(`${formatMonth} has 29 days.`)
      : console.log(`${formatMonth} has 28 days.`);
    break;
  default:
    console.log("Invalid month!");
}
```
