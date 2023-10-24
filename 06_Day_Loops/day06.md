# Day 06 - Loops

## Exercises: Level 1

```js
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];
```

#### 1. Iterate 0 to 10 using for loop, do the same using while and do while loop.

```js
// for loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// while loop
i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

// do while loop
j = 0;
do {
  console.log(j);
  j++;
} while (j <= 10);
```

#### 2. Iterate 10 to 0 using for loop, do the same using while and do while loop.

```js
// for loop
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// while loop
i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}

// do while loop
j = 10;
do {
  console.log(j);
  j--;
} while (j >= 0);
```

#### 3. Iterate 0 to n using for loop.

```js
let n = 5;
for (let i = 0; i <= n; i++) {
  console.log(i);
}
```

#### 4. Write a loop that makes the following pattern using console.log():

```
#
##
###
####
#####
######
#######
```

```js
let hashtag = "#";
for (let i = 1; i <= 7; i++) {
  console.log(hashtag.repeat(i));
}
```

#### 5. Use loop to print the following pattern:

```
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
```

```js
for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}
```

#### 6. Using loop print the following pattern:

```
i    i^2   i^3
0    0     0
1    1     1
2    4     8
3    9     27
4    16    64
5    25    125
6    36    216
7    49    343
8    64    512
9    81    729
10   100   1000
```

```js
console.log("i   i^2   i^3");
for (let i = 0; i <= 10; i++) {
  console.log(`${i}   ${i ** 2}     ${i ** 3}`);
}
```

#### 7. Use for loop to iterate from 0 to 100 and print only even numbers.

```js
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
```

#### 8. Use for loop to iterate from 0 to 100 and print only odd numbers.

```js
for (let i = 0; i <= 100; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}
```

#### 9. Use for loop to iterate from 0 to 100 and print only prime numbers.

```js
for (let number = 2; number <= 100; number++) {
  let isPrime = true;

  for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
    if (number % divisor === 0) {
      isPrime = false;
    }
  }

  if (isPrime) {
    console.log(number);
  }
}
```

#### 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.

```
The sum of all numbers from 0 to 100 is 5050.
```

```js
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);
```

#### 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

```
The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
```

```js
let evenSum = 0;
let oddSum = 0;

for (let i = 0; i <= 100; i++) {
  i % 2 === 0 ? (evenSum += i) : (oddSum += i);
}

console.log(
  `The sum of all evens from 0 to 100 is ${evenSum} and all odds ${oddSum}.`
);
```

#### 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array.

```
[2550, 2500]
```

```js
let sumArray = [0, 0];

for (let i = 0; i <= 100; i++) {
  i % 2 === 0 ? (sumArray[0] += i) : (sumArray[1] += i);
}

console.log(sumArray);
```

#### 13. Develop a small script which generate array of 5 random numbers.

```js
let numberArray = [];

for (i = 0; numberArray.length < 5; i++) {
  numberArray.push(Math.floor(Math.random() * 10));
}

console.log(numberArray);
```

#### 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique.

```js
let numberArray = [];

for (i = 0; numberArray.length < 5; i++) {
  let randomNumber = Math.floor(Math.random() * 10);
  if (!numberArray.includes(randomNumber)) {
    numberArray.push(randomNumber);
  }
}

console.log(numberArray);
```

#### 15. Develop a small script which generate a six characters random id:

```
5j2khz
```

```js
let characters =
  "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
let randomId = "";

while (randomId.length != 6) {
  randomId += characters[Math.floor(Math.random() * characters.length)];
}

console.log(randomId);
```

## Exercises: Level 2

#### 1. Develop a small script which generate any number of characters random id:

```
fe3jo1gl124g
xkqci4utda1lmbelpkm03rba
```

```js
let characters =
  "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
let randomId = "";
// Gerate random length from 1 to 20.
let randomLength = Math.floor(Math.random() * 20 + 1);

while (randomId.length != randomLength) {
  randomId += characters[Math.floor(Math.random() * characters.length)];
}

console.log(randomId);
```

#### 2. Write a script which generates a random hexadecimal number.

```
'#ee33df'
```

```js
let characters = "0123456789abcdef";
let randomHexNum = "#";

while (randomHexNum.length != 7) {
  randomHexNum += characters[Math.floor(Math.random() * characters.length)];
}

console.log(randomHexNum);
```

#### 3. Write a script which generates a random rgb color number.

```
rgb(240,180,80)
```

```js
const rgbColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
  Math.random() * 256
)},${Math.floor(Math.random() * 256)})`;

console.log(rgbColor);
```

#### 4. Using the above countries array, create the following new array.

```
["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
```

```js
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
const upperCountries = [];

for (const country of countries) {
  upperCountries.push(country.toUpperCase());
}
console.log(upperCountries);
```

#### 5. Using the above countries array, create an array for countries length.

```
[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
```

```js
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
const countriesLength = [];

for (const country of countries) {
  countriesLength.push(country.length);
}
console.log(countriesLength);
```

#### 6. Use the countries array to create the following array of arrays:

```
  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]
```

```js
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
const countriesInfo = [];

for (const country of countries) {
  let firstThree = country.slice(0, 3).toUpperCase();
  let countryLength = country.length;
  countriesInfo.push([country, firstThree, countryLength]);
}
console.log(countriesInfo);
```

#### 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

```
['Finland','Ireland', 'Iceland']
```

```js
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
const countriesLand = [];

for (const country of countries) {
  if (country.includes("land")) {
    countriesLand.push(country);
  }
}

countriesLand.length != 0
  ? console.log(countriesLand)
  : console.log("All these countries are without land.");
```

#### 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

```
['Albania', 'Bolivia','Ethiopia']
```

```js
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
const countriesIa = [];

for (const country of countries) {
  if (country.endsWith("ia")) {
    countriesIa.push(country);
  }
}

countriesIa.length != 0
  ? console.log(countriesIa)
  : console.log("There are no countries that ends with 'ia'.");
```

#### 9. Using the above countries array, find the country containing the biggest number of characters.

```
Ethiopia
```

```js
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
let longestCountry = "";

for (const country of countries) {
  if (country.length > longestCountry.length) {
    longestCountry = country;
  }
}
console.log(longestCountry);
```

#### 10. Using the above countries array, find the country containing only 5 characters.

```
['Japan', 'Kenya']
```

```js
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
let fiveLettersCountries = [];

for (const country of countries) {
  if (country.length === 5) {
    fiveLettersCountries.push(country);
  }
}
console.log(fiveLettersCountries);
```

#### 11. Find the longest word in the webTechs array.

```js
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let longestWebTech = "";

for (const webTech of webTechs) {
  if (webTech.length > longestWebTech.length) {
    longestWebTech = webTech;
  }
}
console.log(longestWebTech);
```

#### 12. Use the webTechs array to create the following array of arrays:

```
[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
```

```js
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let webTechsArray = [];

for (const webTech of webTechs) {
  webTechsArray.push([webTech, webTech.length]);
}
console.log(webTechsArray);
```

#### 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack.

```js
const mernStack = ["MongoDB", "Express", "React", "Node"];
let mernAcronym = "";

for (const mern of mernStack) {
  mernAcronym += mern[0];
}
console.log(mernAcronym);
```

#### 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

```js
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

for (const webTech of webTechs) {
  console.log(webTech);
}
```

#### 15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

```js
const fruits = ["banana", "orange", "mango", "lemon"];
const fruitsReversed = [];

for (const fruit of fruits) {
  fruitsReversed.unshift(fruit);
}
console.log(fruitsReversed);
```

#### 16. Print all the elements of array as shown below.

```
HTML
CSS
JS
REACT
NODE
EXPRESS
MONGODB
```

```js
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

for (const stack of fullStack) {
  for (const item of stack) {
    console.log(item.toUpperCase());
  }
}
```

## Exercises: Level 3

#### 1. Copy countries array(Avoid mutation).

```js
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const contriesCopy = countries.slice();
```

#### 2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries.

```js
const countries = [
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
  "Albania",
];

const sortedCountries = countries.slice().sort();
console.log(sortedCountries);
```

#### 3. Sort the webTechs array and mernStack array.

```js
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

webTechs.sort();
mernStack.sort();
console.log(webTechs);
console.log(mernStack);
```

#### 4. Extract all the countries contain the word 'land' from the countries array and print it as array.

#### 5. Find the country containing the hightest number of characters in the countries array.

#### 6. Extract all the countries containing only four characters from the countries array and print it as array.

#### 7. Extract all the countries containing two or more words from the countries array and print it as array.

#### 8. Reverse the countries array and capitalize each country and stored it as an array.

```js
const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

// 4.
const landCountries = [];
for (const country of countries) {
  if (country.includes("land")) {
    landCountries.push(country);
  }
}
console.log('Countries, that include "land": ', landCountries);

// 5.
let longestCountry = "";
for (const country of countries) {
  if (country.length > longestCountry.length) {
    longestCountry = country;
  }
}
console.log(
  `\nCountry, that contains the hightest number of characters: ${longestCountry}.`
);

// 6.
const fourCharCountries = [];
for (const country of countries) {
  if (country.length === 4) {
    fourCharCountries.push(country);
  }
}
console.log(
  "\nCountries, that contain only four characters: ",
  fourCharCountries
);

// 7.
const multipleWordCountries = [];
for (const country of countries) {
  if (country.includes(" ")) {
    multipleWordCountries.push(country);
  }
}
console.log(
  "\nCountries countaining two or more words: ",
  multipleWordCountries
);

// 8.
countries.reverse();
const reversedCountries = [];
for (const country of countries) {
  reversedCountries.push(country.toUpperCase());
}
```
