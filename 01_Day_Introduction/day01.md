# Day 01 - Introduction

#### 1. Write a single line comment which says, comments can make code readable.

```js
// comments can make code readable
```

#### 2. Write another single comment which says, Welcome to 30DaysOfJavaScript.

```js
// Welcome to 30DaysOfJavaScript
```

#### 3. Write a multiline comment which says, comments can make code readable, easy to reuse and informative.

```js
/* 
comments can make code readable,
easy to reuse and informative
*/
```

#### 4. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types.

```js
let myString = "string";
let myBoolean = true;
let myUndefined = undefined;
let myNull = null;
```

#### 5. Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable.

```js
let myString = "string";
let myBoolean = true;
let myUndefined = undefined;
let myNull = null;

console.log(typeof myString);
console.log(typeof myBoolean);
console.log(typeof myUndefined);
console.log(typeof myNull);
```

#### 6. Declare four variables without assigning values.

```js
let myName;
let myAge;
let myCity;
let myPet;
```

#### 7. Declare four variables with assigned values.

```js
let myName = "Patrik";
let myAge = 28;
let myCity = "Brno";
let myPet = "Guinea Pig";
```

#### 8. Declare variables to store your first name, last name, marital status, country and age in multiple lines.

```js
let firstName = "Patrik";
let lastName = "Zezulka";
let isMarried = false;
let country = "Czechia";
let age = 28;
```

#### 9. Declare variables to store your first name, last name, marital status, country and age in a single line.

```js
let firstName = "Patrik",
  lastName = "Zezulka",
  isMarried = false,
  country = "Czechia",
  age = 28;

// Another way of declaring multiple variables on single line:
let [firstName, lastName, isMarried, country, age] = [
  "Patrik",
  "Zezulka",
  false,
  "Czechia",
  28,
];
```

#### 10. Declare two variables myAge and yourAge and assign them initial values and log to the browser console:

```
I am 25 years old.
You are 30 years old.
```

```js
let myAge = 25;
let yourAge = 30;

console.log("I am " + myAge + " years old.");
console.log("You are " + yourAge + " years old.");

// Another way using template literals (``):
console.log(`I am ${myAge} years old.`);
console.log(`You are ${yourAge} years old.`);
```
