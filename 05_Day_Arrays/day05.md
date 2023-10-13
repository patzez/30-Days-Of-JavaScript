# Day 05 - Conditionals

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
```

#### 1. Declare an empty array.

```js
const emptyArray1 = [];
const emptyArray2 = new Array();
```

#### 2. Declare an array with more than 5 number of elements.

#### 3. Find the length of your array.

#### 4. Get the first item, the middle item and the last item of the array

```js
// 2.
const testArray = [5, "JS", true, "apple", 18, [1, 2, 3], false];

// 3.
console.log(testArray.length);

// 4.
console.log(
  testArray[0],
  testArray[Math.floor(testArray.length / 2)],
  testArray[testArray.length - 1]
);
```

#### 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5.

```js
const mixedDataTyper = ["table", 18, true, [2, "coat"], 3, false];
console.log(mixedDataTyper.length);
```

#### 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon.

#### 7. Print the array using console.log().

#### 8. Print the number of companies in the array.

#### 9. Print the first company, middle and last company.

#### 10. Print out each company.

#### 11. Change each company name to uppercase one by one and print them out.

#### 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

#### 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found.

#### 14. Filter out companies which have more than one 'o' without the filter method.

#### 15. Sort the array using sort() method.

#### 16. Reverse the array using reverse() method.

#### 17. Slice out the first 3 companies from the array.

#### 18. Slice out the last 3 companies from the array.

#### 19. Slice out the middle IT company or companies from the array.

#### 20. Remove the first IT company from the array.

#### 21. Remove the middle IT company or companies from the array.

#### 22. Remove the last IT company from the array.

#### 23. Remove all IT companies.

```js
// 6.
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// 7.
console.log("Exercise 7.: ");
console.log(itCompanies);

// 8.
console.log("\nExercise 8.: ");
console.log(itCompanies.length);

// 9.
console.log("\nExercise 9.: ");
console.log(
  itCompanies[0],
  itCompanies[Math.floor(itCompanies.length / 2)],
  itCompanies[itCompanies.length - 1]
);

// 10.
console.log("\nExercise 10.: ");
console.log(itCompanies.join(", "));

// 11.
console.log("\nExercise 11.: ");
itCompanies.forEach((company) => console.log(company.toUpperCase()));

// 12.
console.log("\nExercise 12.: ");
const sentence =
  itCompanies.slice(0, itCompanies.length - 1).join(", ") +
  " and " +
  itCompanies[itCompanies.length - 1] +
  "are big IT companies."; // using .slice() method to separate last company and adding them together
console.log(sentence);

// 13.
console.log("\nExercise 13.: ");
let company = "Google";
itCompanies.includes(company)
  ? console.log(`${company} is found in itCompanies.`)
  : console.log("Company is not found.");

// 14.
console.log("\nExercise 14.: ");
const noMultipleOCompanies = [];
const regex = /.*o.*o.*/gi; // RegEx that finds if there are two or more "o" in the string

itCompanies.forEach((company) => {
  if (!company.match(regex)) {
    noMultipleOCompanies.push(company);
  }
});

console.log(noMultipleOCompanies);

// 15.
console.log("\nExercise 15.: ");
itCompanies.sort();
console.log(itCompanies);

// 16.
console.log("\nExercise 16.: ");
itCompanies.reverse();
console.log(itCompanies);

// 17.
console.log("\nExercise 17.: ");
const firstThree = itCompanies.slice(0, 3);
console.log(firstThree);

// 18.
console.log("\nExercise 18.: ");
const lastThree = itCompanies.slice(-3);
console.log(lastThree);

// 19.
console.log("\nExercise 19.: ");
// Works for even and odd number of companies
const middleCompany =
  itCompanies.length % 2 == 0
    ? itCompanies.slice(itCompanies.length / 2 - 1, itCompanies.length / 2 + 1)
    : itCompanies[Math.floor(itCompanies.length / 2)];
console.log(middleCompany);

// 20.
console.log("\nExercise 20.: ");
itCompanies.shift();
console.log(itCompanies);

// 21.
console.log("\nExercise 21.: ");
itCompanies.length % 2 == 0
  ? itCompanies.splice(itCompanies.length / 2 - 1, 2)
  : itCompanies.splice(Math.floor(itCompanies.length / 2), 1);
console.log(itCompanies);

// 22.
console.log("\nExercise 22.: ");
itCompanies.pop();
console.log(itCompanies);

// 23.
console.log("\nExercise 23.: ");
itCompanies.splice(0);
console.log(itCompanies);
```

## Exercises: Level 2

#### 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file.

```js
// countries.js file
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

module.exports = countries;

// web_techs.js file
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

module.exports = webTechs;

// main.js file
const countries = require("./countries");
const webTechs = require("./web_techs");

console.log(countries);
console.log(webTechs);
```

#### 2. First remove all the punctuations and change the string to array and count the number of words in the array.

```
["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

13
```

```js
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let words = text.replace(/[.,]/g, "").split(" ");

console.log(words);
console.log(words.length);
```

#### 3. In the following shopping cart add, remove, edit items.

```js
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// add 'Meat' in the beginning of your shopping cart if it has not been already added
if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
}
console.log(shoppingCart);

// add Sugar at the end of you shopping cart if it has not been already added
if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}
console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey
let honeyAllergic = true;
if (honeyAllergic) {
  shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
}
console.log(shoppingCart);

// modify Tea to 'Green Tea'
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
console.log(shoppingCart);
```

#### 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

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

countries.includes("Ethiopia")
  ? console.log("Ethiopia".toUpperCase())
  : countries.push("Ethiopia");
```

#### 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

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

webTechs.includes("Sass")
  ? console.log("Sass is a CSS preprocess.")
  : webTechs.push("Sass") && console.log(webTechs);
```

#### 6. Concatenate the following two variables and store it in a fullStack variable.

```
["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
```

```js
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);
```

## Exercises: Level 3

#### 1. The following is an array of 10 students ages.

```js
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age.
ages.sort();
let minAge = ages[0];
let maxAge = ages[ages.length - 1];
/*
We can also use spread operator and Math.min/max:
let minAge = Math.min(...ages);
let maxAge = Math.max(...ages);
*/
console.log(`The min age is ${minAge} and the max age is ${maxAge}.`);

// Find the median age(one middle item or two middle items divided by two).
let medianAge =
  ages.length % 2 == 0
    ? ages
        .slice(ages.length / 2 - 1, ages.length / 2 + 1)
        .reduce((total, currentValue) => total + currentValue) / 2
    : ages[Math.floor(ages.length / 2)];
console.log(`\nThe median age is: ${medianAge}.`);

// Find the average age(all items divided by number of items).

// .reduce() method is used to get sum of all numbers in ages array
let averageAge =
  ages.reduce((total, currentValue) => total + currentValue) / ages.length;
console.log(`\nThe average age is: ${averageAge}.`);

// Find the range of the ages(max minus min).
let ageRange = maxAge - minAge;
console.log(`\nThe range of ages is: ${ageRange}.`);

// Compare the value of (min - average) and (max - average), use abs() method.
let minDiff = Math.abs(minAge - averageAge).toFixed(1);
let maxDiff = Math.abs(maxAge - averageAge).toFixed(1);
console.log(
  `\nThe absolute difference between minimum and average is ${minDiff} and the absolute difference between maximum and average is ${maxDiff}.`
);
```

#### 2. Slice the first ten countries from the countries array.

#### 3. Find the middle country(ies) in the countries array.

#### 4. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

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

// 2.
let firstTen = countries.slice(0, 10);
console.log(`First ten countries from the array: ${firstTen}.`);

// 3.
let middleCountry =
  countries.length % 2 == 0
    ? countries.slice(countries.length / 2 - 1, countries.length / 2 + 1)
    : countries[Math.floor(countries.length / 2)];
console.log(`\nMiddle country(ies) from the array: ${middleCountry}.`);

// 4.
let firstHalf, secondHalf;
if (countries.length % 2 == 0) {
  firstHalf = countries.slice(0, countries.length / 2);
  secondHalf = countries.slice(countries.length / 2);
} else {
  firstHalf = countries.slice(0, Math.ceil(countries.length / 2));
  secondHalf = countries.slice(Math.ceil(countries.length / 2));
}

console.log("\nTo check length of arrays:");
console.log(countries.length);
console.log(firstHalf.length);
console.log(secondHalf.length);
```
