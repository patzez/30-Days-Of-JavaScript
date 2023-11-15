# Day 13 - Console Object Methods

## Exercises: Level 1

#### 1. Display the countries array as a table.

```js
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

console.table(countries);
```

#### 2. Display the countries object as a table.

```js
const countries = [
  {
    name: "Afghanistan",
    capital: "Kabul",
    languages: ["Pashto", "Uzbek", "Turkmen"],
    population: 27657145,
    flag: "https://restcountries.eu/data/afg.svg",
    currency: "Afghan afghani",
  },
  {
    name: "Åland Islands",
    capital: "Mariehamn",
    languages: ["Swedish"],
    population: 28875,
    flag: "https://restcountries.eu/data/ala.svg",
    currency: "Euro",
  },
  {
    name: "Albania",
    capital: "Tirana",
    languages: ["Albanian"],
    population: 2886026,
    flag: "https://restcountries.eu/data/alb.svg",
    currency: "Albanian lek",
  },
  {
    name: "Algeria",
    capital: "Algiers",
    languages: ["Arabic"],
    population: 40400000,
    flag: "https://restcountries.eu/data/dza.svg",
    currency: "Algerian dinar",
  },
  {
    name: "American Samoa",
    capital: "Pago Pago",
    languages: ["English", "Samoan"],
    population: 57100,
    flag: "https://restcountries.eu/data/asm.svg",
    currency: "United State Dollar",
  },
];

console.table(countries);
```

#### 3. Use console.group() to group logs.

```js
const names = ["Asabeneh", "Brook", "David", "John"];
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const users = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];

console.group("Names");
console.log(names);
console.groupEnd();

console.group("Countries");
console.log(countries);
console.groupEnd();

console.group("Users");
console.log(users);
console.groupEnd();
```

## Exercises: Level 2

#### 1. 10 > 2 \* 10 use console.assert().

```js
console.assert(10 > 2 * 10, "10 is not bigger than 10 * 2");
```

#### 2. Write a warning message using console.warn().

```js
console.warn("This is a warning message!");
```

#### 3. Write an error message using console.error().

```js
console.error("This is an error message!");
```

## Exercises: Level 3

#### 1. Check the speed difference among the following loops: while, for, for of, forEach.

```js
const names = ["Asabeneh", "Brook", "David", "John"];

console.time("While loop");
let i = 0;
while (i < names.length) {
  console.log(names[i]);
  i++;
}
console.timeEnd("While loop");

console.time("For loop");
for (let j = 0; j < names.length; j++) {
  console.log(names[j]);
}
console.timeEnd("For loop");

console.time("For of loop");
for (const name of names) {
  console.log(name);
}
console.timeEnd("For of loop");

console.time("forEach method");
names.forEach((name) => console.log(name));
console.timeEnd("forEach method");
```
