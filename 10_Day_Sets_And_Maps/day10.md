# Day 10 - Sets and Maps

## Exercises: Level 1

#### 1. Create an empty set.

```js
const mySet = new Set();
```

#### 2. Create a set containing 0 to 10 using loop.

```js
const numSet = new Set();
for (let i = 0; i <= 10; i++) {
  numSet.add(i);
}
```

#### 3. Remove an element from a set.

```js
const numSet = new Set();
for (let i = 0; i <= 10; i++) {
  numSet.add(i);
}
numSet.delete(5);
```

#### 4. Clear a set.

```js
const numSet = new Set();
for (let i = 0; i <= 10; i++) {
  numSet.add(i);
}
numSet.clear();
```

#### 5. Create a set of 5 string elements from array.

```js
const stringArray = ["a", "b", "c", "d", "e"];
const stringSet = new Set(stringArray);
```

#### 6. Create a map of countries and number of characters of a country.

```js
const countries = ["Finland", "Sweden", "Norway"];
const countriesMap = new Map();

for (const country of countries) {
  countriesMap.set(country, country.length);
}
```

## Exercises: Level 2

#### 1. Find a union b.

#### 2. Find a intersection b.

#### 3. Find a with b (probably a difference).

```js
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

// 1.
const union = [...a, ...b];
const unionSet = new Set(union);

// 2.
const aSet = new Set(a);
const bSet = new Set(b);
const intersection = a.filter((num) => bSet.has(num));
const intersectionSet = new Set(intersection);

// 3.
const difference = a.filter((num) => !bSet.has(num));
const differenceSet = new Set(difference);
```

## Exercises: Level 3

#### 1. How many languages are there in the countries object file.

#### 2. Use the countries data to find the 10 most spoken languages:

```js
// Your output should look like this
console.log(mostSpokenLanguages(countries, 10))[
  ({ English: 91 },
  { French: 45 },
  { Arabic: 25 },
  { Spanish: 24 },
  { Russian: 9 },
  { Portuguese: 9 },
  { Dutch: 8 },
  { German: 7 },
  { Chinese: 5 },
  { Swahili: 4 },
  { Serbian: 4 })
];

// Your output should look like this
console.log(mostSpokenLanguages(countries, 3))[
  ({ English: 91 }, { French: 45 }, { Arabic: 25 })
];
```

Solutions to exercise 1 and 2 are in [countries_data.js](./countries_data.js) file.
