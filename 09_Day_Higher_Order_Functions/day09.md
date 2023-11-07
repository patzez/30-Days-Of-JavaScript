# Day 09 - Higher Order Functions

## Exercises: Level 1

#### 1. Explain the difference between forEach, map, filter, and reduce.

```
**foeEach** - Iterate an array elements. We use forEach only with arrays. It takes a callback function with elements, index parameter and array itself. The index and the array optional.

**map** - Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array.

**filter** - Filter out items which full fill filtering conditions and return a new array.

**reduce** - Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value. If our array is an empty array, then Javascript will throw an error.
```

#### 2. Define a callback function before you use it in forEach, map, filter or reduce.

```
A callback is a function which can be passed as parameter to other function.
```

```js
// a callback function, the name of the function could be any name
const callback = (n) => {
  return n ** 2
}
​
// function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n
}
```

#### 3. Use forEach to console.log each country in the countries array.

#### 4. Use forEach to console.log each name in the names array.

#### 5. Use forEach to console.log each number in the numbers array.

```js
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 3.
console.log("Countries:");
countries.forEach((country) => console.log(country));

// 4.
console.log("\nNames:");
names.forEach((name) => console.log(name));

// 5.
console.log("\nNumbers:");
numbers.forEach((number) => console.log(number));
```

#### 6. Use map to create a new array by changing each country to uppercase in the countries array.

#### 7. Use map to create an array of countries length from countries array.

#### 8. Use map to create a new array by changing each number to square in the numbers array

#### 9. Use map to change to each name to uppercase in the names array

#### 10. Use map to map the products array to its corresponding prices.

```js
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// 6.
const countriesUpperCase = countries.map((country) => country.toUpperCase());
console.log(countriesUpperCase);

// 7.
const countriesLength = countries.map((country) => country.length);
console.log(countriesLength);

// 8.
const squaredNumbers = numbers.map((number) => number ** 2);
console.log(squaredNumbers);

// 9.
const namesUpperCase = names.map((name) => name.toUpperCase());
console.log(namesUpperCase);

// 10.
const productPrices = products.map(
  (product) => `${product.product}: ${product.price}`
);
console.log(productPrices);
```

#### 11. Use filter to filter out countries containing land.

#### 12. Use filter to filter out countries having six character.

#### 13. Use filter to filter out countries containing six letters and more in the country array.

#### 14. Use filter to filter out country start with 'E';

#### 15. Use filter to filter out only prices with values.

```js
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// 11.
const landCountries = countries.filter((country) =>
  country.toLowerCase().includes("land")
);
console.log(landCountries);

// 12.
const sixCharsCountries = countries.filter((country) => country.length === 6);
console.log(sixCharsCountries);

// 13.
const moreThanSixCharCountries = countries.filter(
  (country) => country.length >= 6
);
console.log(moreThanSixCharCountries);

// 14.
const startWithECountries = countries.filter((country) =>
  country.startsWith("E")
);
console.log(startWithECountries);

// 15.
const productsWithPrice = products.filter((product) => +product.price > 0);
console.log(productsWithPrice);
```

#### 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

```js
function getStringLists(arr) {
  return arr.filter((item) => typeof item === "string");
}
console.log(getStringLists([5, 4, 6, "str1", "str2", true, 5, "str3"]));
```

#### 17. Use reduce to sum all the numbers in the numbers array.

#### 18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries.

```js
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 17.
let sumWithInitial = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sumWithInitial);

// 18.
let lastCountry = countries.splice(countries.length - 1);
let countriesSentence = countries.reduce((acc, curr) => acc + ", " + curr);
let sentence = `${countriesSentence} and ${lastCountry} are north European countries.`;
console.log(sentence);
```

#### 19. Explain the difference between some and every.

```
**some** - Check if some of the elements are similar in one aspect. It returns boolean.

**every** - Check if all the elements are similar in one aspect. It returns boolean.
```

#### 20. Use some to check if some names' length greater than seven in names array.

#### 21. Use every to check if all the countries contain the word land.

```js
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];

// 20.
let namesCheck = names.some((name) => name.length > 7);
console.log(namesCheck);

// 21.
let countriesCheck = countries.every((country) =>
  country.toLowerCase().includes("land")
);
console.log(countriesCheck);
```

#### 22. Explain the difference between find and findIndex.

```
**find** - Return the first element which satisfies the condition.

**findIndex** - Return the position of the first element which satisfies the condition.
```

#### 23. Use find to find the first country containing only six letters in the countries array.

#### 24. Use findIndex to find the position of the first country containing only six letters in the countries array.

#### 25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

#### 26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

```js
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];

// 23.
let firstSixLettersCountry = countries.find((country) => country.length === 6);
console.log(firstSixLettersCountry);

// 24.
let indexOfFirstSixLettersCountry = countries.findIndex(
  (country) => country.length === 6
);
console.log(indexOfFirstSixLettersCountry);

// 25.
let norwayPosition = countries.findIndex(
  (country) => country.toLowerCase() === "norway"
);
console.log(norwayPosition);

// 26.
let russiaPosition = countries.findIndex(
  (country) => country.toLowerCase() === "russia"
);
console.log(russiaPosition);
```

## Exercises: level 2

#### 1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback)).

#### 2. Find the sum of price of products using only reduce reduce(callback)).

```js
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// 1.
let totalPrice1 = products
  .map((product) => product.price)
  .filter((amount) => +amount > 0)
  .reduce((acc, curr) => acc + curr, 0);

console.log(totalPrice1);

// 2.
let totalPrice2 = products.reduce((acc, curr) => {
  let currentPrice = parseFloat(curr.price) || 0;
  return acc + currentPrice;
}, 0);

console.log(totalPrice2);
```

#### 3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

#### 4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

#### 5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array.

#### 6.Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

#### 7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc).

Solutions for 3, 4, 5, 6 and 7 are in [countries_data.js](countries_data.js) file.

## Exercises: level 3

#### 1. Use the countries information, in the data folder. Sort countries by name, by capital, by population.

#### 2. Find the 10 most spoken languages.

```js
// Your output should look like this
console.log(mostSpokenLanguages(countries, 10))
[
{country: 'English',count:91},
{country: 'French',count:45},
{country: 'Arabic',count:25},
{country: 'Spanish',count:24},
{country:'Russian',count:9},
{country:'Portuguese', count:9},
{country:'Dutch',count:8},
{country:'German',count:7},
{country:'Chinese',count:5},
{country:'Swahili',count:4}
]

// Your output should look like this
console.log(mostSpokenLanguages(countries, 3))
[
{country: 'English',count: 91},
{country: 'French',count: 45},
{country: 'Arabic',count: 25},
]
```

#### 3. Use countries_data.js file create a function which create the ten most populated countries.

```js
console.log(mostPopulatedCountries(countries, 10))[
  ({ country: "China", population: 1377422166 },
  { country: "India", population: 1295210000 },
  { country: "United States of America", population: 323947000 },
  { country: "Indonesia", population: 258705000 },
  { country: "Brazil", population: 206135893 },
  { country: "Pakistan", population: 194125062 },
  { country: "Nigeria", population: 186988000 },
  { country: "Bangladesh", population: 161006790 },
  { country: "Russian Federation", population: 146599183 },
  { country: "Japan", population: 126960000 })
];

console.log(mostPopulatedCountries(countries, 3))[
  ({ country: "China", population: 1377422166 },
  { country: "India", population: 1295210000 },
  { country: "United States of America", population: 323947000 })
];
```

Solutions for 1, 2 and 3 are in [countries_data.js](countries_data.js) file.

#### 4. Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.

```js
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

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
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
```

```
console.log(statistics.describe())
Count: 25
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
```

```js
const statistics = {
  ages: [
    31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
    31, 34, 24, 33, 29, 26,
  ],

  count: function () {
    return this.ages.length;
  },

  sum: function () {
    return this.ages.reduce((a, b) => a + b);
  },

  min: function () {
    return this.ages.sort()[0];
  },

  max: function () {
    return this.ages.sort()[this.ages.length - 1];
  },

  range: function () {
    return this.max() - this.min();
  },

  mean: function () {
    return this.sum() / this.count();
  },

  median: function () {
    const middleIndex = Math.floor(this.count() / 2);
    const agesSorted = this.ages.sort();
    if (this.count() % 2 === 0) {
      const medianNum =
        (agesSorted[middleIndex - 1] + agesSorted[middleIndex]) / 2;
      return medianNum;
    } else {
      const medianNum = agesSorted[middleIndex];
      return medianNum;
    }
  },

  mode: function () {
    let mode = 0;
    let count = 0;
    let agesString = this.ages.join(" ");
    this.ages.forEach((age) => {
      const pattern = new RegExp(age, "g");
      const specificAgeCount = agesString.match(pattern);
      if (specificAgeCount.length > count) {
        mode = age;
        count = specificAgeCount.length;
      }
    });

    const result = { mode: mode, count: count };
    return result;
  },
};

console.log(statistics.count());
console.log(statistics.sum());
console.log(statistics.min());
console.log(statistics.max());
console.log(statistics.range());
console.log(statistics.mean());
console.log(statistics.median());
console.log(statistics.mode());
```
