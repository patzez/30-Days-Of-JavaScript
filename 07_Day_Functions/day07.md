# Day 07 - Functions

## Exercises: Level 1

#### 1. Declare a function fullName and it print out your full name.

```js
function fullName() {
  let firstName = "Patrik";
  let lastName = "Zezulka";
  console.log(`${firstName} ${lastName}`);
}

fullName();
```

#### 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

```js
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log(fullName("John", "Doe"));
```

#### 3. Declare a function addNumbers and it takes two two parameters and it returns sum.

```js
function addNumbers(num1, num2) {
  return num1 + num2;
}

console.log(addNumbers(18, 5));
```

#### 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

```js
function areaOfRectangle(length, width) {
  return length * width;
}

console.log(areaOfRectangle(5, 5));
```

#### 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

```js
function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}

console.log(perimeterOfRectangle(5, 10));
```

#### 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

```js
function volumeOfRectPrism(length, width) {
  return length * width * width;
}

console.log(volumeOfRectPrism(10, 5));
```

#### 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle.

```js
function areaOfCircle(radius) {
  return Math.PI * radius ** 2;
}

console.log(areaOfCircle(10));
```

#### 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle.

```js
function circulumOfCircle(radius) {
  return 2 * Math.PI * radius;
}

console.log(circulumOfCircle(10));
```

#### 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

```js
function density(mass, volume) {
  return mass / volume;
}

console.log(density(100, 10));
```

#### 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

```js
function calculateSpeed(distance, time) {
  return distance / time;
}

console.log(calculateSpeed(100, 2));
```

#### 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

```js
function calculateWeight(mass, gravity = 9.81) {
  return mass * gravity;
}

console.log(calculateWeight(20));
```

#### 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

```js
function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(convertCelsiusToFahrenheit(50));
```

#### 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

```
The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more
```

```js
function calculateBMI(weight, height) {
  let BMI = weight / height ** 2;
  if (BMI < 18.5) {
    return "underweight";
  } else if (BMI >= 18.5 && BMI < 25) {
    return "normal weight";
  } else if (BMI >= 25 && BMI < 30) {
    return "overweight";
  } else {
    return "obese";
  }
}

console.log(calculateBMI(90, 1.9));
```

#### 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

```js
function checkSeason(month) {
  switch (month.toLowerCase()) {
    case "september":
    case "october":
    case "november":
      return "Autumn";
    case "december":
    case "january":
    case "february":
      return "Winter";
    case "march":
    case "april":
    case "may":
      return "Spring";
    case "june":
    case "july":
    case "august":
      return "summer";
    default:
      return "Invalid month!";
  }
}

console.log(checkSeason("octoBER"));
```

#### 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

```js
console.log(findMax(0, 10, 5));
10;
console.log(findMax(0, -10, -2));
0;
```

```js
function findMax(num1, num2, num3) {
  let maxNum = num1;
  for (const number of [num1, num2, num3]) {
    if (number > maxNum) {
      maxNum = number;
    }
  }
  return maxNum;
}

console.log(findMax(0, -10, 5));
```

## Exercises: Level 2

#### 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

```js
function solveLinEquation(a, b, c, x) {
  return (a * x + c) / -b;
}

console.log(solveLinEquation(2, 0, -6, 4));
```

#### 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

```js
function solveQuadEquation(a, b, c) {
  let discriminant = b ** 2 - 4 * a * c;
  let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  return discriminant === 0 ? [x1] : [x1, x2];
}

console.log(solveQuadEquation()); // {0}
console.log(solveQuadEquation(1, 4, 4)); // {-2}
console.log(solveQuadEquation(1, -1, -2)); // {2, -1}
console.log(solveQuadEquation(1, 7, 12)); // {-3, -4}
console.log(solveQuadEquation(1, 0, -4)); //{2, -2}
console.log(solveQuadEquation(1, -1, 0)); //{1, 0}
```

#### 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

```js
function printArray(array) {
  console.log(array.forEach((item) => console.log(item)));
}

printArray(["this", "is", "sparta", "!", 18, true]);
```

#### 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

```
showDateTime()
08/01/2020 04:08
```

```js
function showDateTime() {
  let now = new Date();
  let year = now.getFullYear();
  let month = String(now.getMonth() + 1).padStart(2, "0");
  let date = String(now.getDate()).padStart(2, "0");
  let hours = String(now.getHours()).padStart(2, "0");
  let minutes = String(now.getMinutes()).padStart(2, "0");
  console.log(`${date}/${month}/${year} ${hours}:${minutes}`);
}

showDateTime();
```

#### 5. Declare a function name swapValues. This function swaps value of x to y.

```js
swapValues(3, 4); // x => 4, y=>3
swapValues(4, 5); // x = 5, y = 4
```

```js
function swapValues(num1, num2) {
  let x = num2;
  let y = num1;
  return [x, y];
}

console.log(swapValues(1, 2));
```

#### 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

```js
function reverseArray(array) {
  let reversedArray = [];
  for (const item of array) {
    reversedArray.unshift(item);
  }
  return reversedArray;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
//[5, 4, 3, 2, 1]
console.log(reverseArray(["A", "B", "C"]));
//['C', 'B', 'A']
```

#### 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

```js
function capitalizeArray(arr) {
  let capitalizedArray = [];
  arr.forEach((item) => capitalizedArray.push(item.toUpperCase()));
  return capitalizedArray;
}

console.log(capitalizeArray(["this", "is", "sparta", "!"]));
```

#### 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item.

```js
function addItem(item) {
  let itemArray = [];
  itemArray.push(item);
  return itemArray;
}

console.log(addItem("car"));
```

#### 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

```js
function removeItem(index) {
  let array = ["this", "doesnt", "make", "sense"];
  array.splice(index, 1);
  return array;
}

console.log(removeItem(0));
```

#### 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

```js
function sumOfNumbers(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumOfNumbers(10));
```

#### 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

```js
function sumOfOdds(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumOfOdds(10));
```

#### 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

```js
function sumOfEven(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumOfEven(10));
```

#### 13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

```
evensAndOdds(100);
The number of odds are 50.
The number of evens are 51.
```

```js
function evensAndOdds(number) {
  let evensCount = 0;
  let oddsCount = 0;
  for (let i = 0; i <= number; i++) {
    i % 2 === 0 ? (evensCount += 1) : (oddsCount += 1);
  }
  console.log(
    `The number of odds are ${oddsCount}.\nThe number of evens are ${evensCount}.`
  );
}

evensAndOdds(100);
```

#### 14. Write a function which takes any number of arguments and return the sum of the arguments.

```js
function sumOfNumbers() {
  let sum = 0;
  for (const number of arguments) {
    sum += number;
  }
  return sum;
}

console.log(sumOfNumbers(1, 2, 3)); // -> 6
console.log(sumOfNumbers(1, 2, 3, 4)); // -> 10
```

#### 15. Write a function which generates a randomUserIp.

```js
function randomUserIp() {
  return `${Math.floor(Math.random() * 256)}.${Math.floor(
    Math.random() * 256
  )}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
}

console.log(randomUserIp());
```

#### 16. Write a function which generates a randomMacAddress.

```js
function randomMacAddress() {
  const symbols = "0123456789ABCDEF";
  let macAddress = ``;
  for (let i = 1; i < 13; i++) {
    macAddress += symbols[Math.floor(Math.random() * symbols.length)];
  }
  return macAddress.match(/.{1,2}/g).join(":");
}
console.log(randomMacAddress());
```

#### 17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

```js
function randomHexaNumberGenerator() {
  const symbols = "0123456789ABCDEF";
  let hexLength = Math.floor(Math.random() * 6) + 1;
  let hexaNumber = ``;
  for (let i = 0; i < hexLength; i++) {
    hexaNumber += symbols[Math.floor(Math.random() * symbols.length)];
  }
  return hexaNumber;
}
console.log(randomHexaNumberGenerator());
```

#### 18. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

```js
function userIdGenerator() {
  let characters =
    "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
  let randomId = "";

  while (randomId.length != 7) {
    randomId += characters[Math.floor(Math.random() * characters.length)];
  }
  return randomId;
}

console.log(userIdGenerator());
```

## Exercises: Level 3

#### 1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

```js
function userIdGeneratorByUser() {
  let characters =
    "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
  let randomIds = [];
  let numberOfChars = prompt("Enter number of characters:");
  let numberOfIds = prompt("Enter number of ID's:");

  for (let i = 0; i < numberOfIds; i++) {
    let randomId = "";
    while (randomId.length != numberOfChars) {
      randomId += characters[Math.floor(Math.random() * characters.length)];
    }
    randomIds.push(randomId);
  }

  return randomIds.join(" ");
}

console.log(userIdGeneratorByUser());
```

#### 2. Write a function name rgbColorGenerator and it generates rgb colors.

```js
const rgbColorGenerator = () =>
  `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)})`;

console.log(rgbColorGenerator());
```

#### 3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

```js
function arrayOfHexaColors(amount) {
  let characters = "0123456789abcdef";
  let randomHexNums = [];

  for (let i = 0; i < amount; i++) {
    let randomHexNum = "#";
    while (randomHexNum.length != 7) {
      randomHexNum += characters[Math.floor(Math.random() * characters.length)];
    }
    randomHexNums.push(randomHexNum);
  }

  return randomHexNums;
}

console.log(arrayOfHexaColors(5));
```

#### 4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.

```js
function arrayOfRgbColors(amount) {
  let randomRgbColors = [];

  for (let i = 0; i < amount; i++) {
    randomRgbColors.push(
      `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256
      )},${Math.floor(Math.random() * 256)})`
    );
  }

  return randomRgbColors;
}

console.log(arrayOfRgbColors(5));
```

#### 5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

```js
function convertHexaToRgb(hex) {
  hex = hex.replace("#", "");

  let r = parseInt(hex.slice(0, 2), 16);
  let g = parseInt(hex.slice(2, 4), 16);
  let b = parseInt(hex.slice(4, 6), 16);

  return `rgb(${r},${g},${b})`;
}

console.log(convertHexaToRgb("FF1278"));
```

#### 6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

```js
function convertRgbToHexa(rgb) {
  let rgbArr = rgb.match(/\d+/g);

  let r = Number(rgbArr[0]).toString(16).padStart(2, "0");
  let g = Number(rgbArr[1]).toString(16).padStart(2, "0");
  let b = Number(rgbArr[2]).toString(16).padStart(2, "0");

  return `#${r}${g}${b}`.toUpperCase();
}

console.log(convertRgbToHexa("rgb(255,18,120)"));
```

#### 7. Write a function generateColors which can generate any number of hexa or rgb colors.

```js
function generateColors(type, amount) {
  if (type == "hexa") {
    let characters = "0123456789abcdef";
    let randomHexNums = [];

    for (let i = 0; i < amount; i++) {
      let randomHexNum = "#";
      while (randomHexNum.length != 7) {
        randomHexNum +=
          characters[Math.floor(Math.random() * characters.length)];
      }
      randomHexNums.push(randomHexNum);
    }
    return randomHexNums;
  } else if (type == "rgb") {
    let randomRgbColors = [];

    for (let i = 0; i < amount; i++) {
      randomRgbColors.push(
        `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
          Math.random() * 256
        )},${Math.floor(Math.random() * 256)})`
      );
    }
    return randomRgbColors;
  } else {
    return "Invalid input!";
  }
}

console.log(generateColors("hexa", 3));
console.log(generateColors("hexa", 1));
console.log(generateColors("rgb", 3));
console.log(generateColors("rgb", 1));
console.log(generateColors("rhexb", 1));
```

#### 8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array.

```js
function shuffleArray(array) {
  let shuffledArray = [];
  for (let i = array.length; i != 0; i--) {
    let randomIndex = Math.floor(Math.random() * array.length);
    let randomItem = array.splice(randomIndex, 1);
    shuffledArray.push(...randomItem);
  }
  return shuffledArray;
}

console.log(shuffleArray(["a", "b", "c", "d", "e", "f"]));
```

#### 9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number.

```js
function factorial(number) {
  let result = 1;
  for (let i = number; i != 0; i--) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));
```

#### 10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not.

```js
let isEmpty = (parameter) => Boolean(parameter);

console.log(isEmpty("not empty"));
```

#### 11. Call your function sum, it takes any number of arguments and it returns the sum.

```js
function sum() {
  let total = 0;
  for (const number of arguments) {
    total += number;
  }
  return total;
}

console.log(sum(1, 2, 3)); // -> 6
console.log(sum(1, 2, 3, 4)); // -> 10
```

#### 12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

```js
function sumOfArrayItems(array) {
  let total = 0;
  for (const item of array) {
    if (typeof item === "number") {
      total += item;
    } else {
      return "Not a number!";
    }
  }
  return total;
}

console.log(sumOfArrayItems([1, 2, 3])); // -> 6
console.log(sumOfArrayItems([1, 2, 3, 4])); // -> 10
console.log(sumOfArrayItems([1, 2, "not number", 4])); // -> Not a number!
```

#### 13. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

```js
function average(numArray) {
  let total = 0;
  for (const item of numArray) {
    if (typeof item === "number") {
      total += item;
    } else {
      return "Not a number!";
    }
  }
  return total / numArray.length;
}

console.log(average([1, 2, 3])); // -> 6
console.log(average([1, 2, 3, 4])); // -> 10
console.log(average([1, 2, "not number", 4])); // -> Not a number!
```

#### 14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

```js
function modifyArray(array) {
  if (array[4]) {
    array[4] = array[4].toUpperCase();
  } else {
    return "Not found!";
  }

  return array;
}

console.log(
  modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
console.log(
  modifyArray(["Google", "Facebook", "Apple", "Amazon", "Microsoft", "IBM"])
);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
console.log(modifyArray(["Google", "Facebook", "Apple", "Amazon"]));
// 'Not Found'
```

#### 15. Write a function called isPrime, which checks if a number is prime number.

```js
function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(78));
```

#### 16. Write a functions which checks if all items are unique in the array.

```js
function isUnique(array) {
  let match = 0;
  for (let i = 0; i < array.length; i++) {
    for (const item of array) {
      if (array[i] === item) {
        match++;
      }
    }
  }
  return match === array.length;
}

console.log(isUnique([1, 2, 3, 1])); // false
console.log(isUnique(["a", "b", "c"])); // true
console.log(isUnique(["a", "b", "c", "c"])); // false
```

#### 17. Write a function which checks if all the items of the array are the same data type.

```js
function isSameType(array) {
  for (let i = 0; i < array.length; i++) {
    for (const item of array) {
      if (typeof array[i] !== typeof item) {
        return false;
      }
    }
  }
  return true;
}

console.log(isSameType([1, 2, 3, 1, "asd"])); // false
console.log(isSameType(["a", "b", "c"])); // true
console.log(isSameType(["a", "b", false, "c"])); // false
```

#### 18. JavaScript variable name does not support special characters or symbols except $ or \_. Write a function isValidVariable which check if a variable is valid or invalid variable.

```js
function isValidVariable(variable) {
  const validVariableRegex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

  return typeof variable === "string" && validVariableRegex.test(variable);
}

console.log(isValidVariable("myVar123")); // true
console.log(isValidVariable("$special_var")); // true
console.log(isValidVariable("1invalid_var")); // false
console.log(isValidVariable("inva!lid")); // false
```

#### 19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

```js
function sevenRandomNumbers() {
  let numArray = [];
  while (numArray.length !== 7) {
    let randomNum = Math.floor(Math.random() * 10);
    if (!numArray.includes(randomNum)) {
      numArray.push(randomNum);
    }
  }
  return numArray;
}

console.log(sevenRandomNumbers());
```

#### 20. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array.

```js
function reverseArray(array) {
  let reversedArray = [];
  for (const item of array) {
    reversedArray.unshift(item);
  }
  return reversedArray;
}

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

console.log(reverseArray(countries));
```
