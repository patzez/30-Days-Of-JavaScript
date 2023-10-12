# Day 03 - Booleans, Operators, Date

## Exercises: Level 1

#### 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

```js
let firstName = "Patrik";
let lastName = "Zezulka";
let country = "Czechia";
let city = "Brno";
let age = 28;
let isMarried = false;
let year = 2023;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);
```

#### 2. Check if type of '10' is equal to 10.

```js
console.log(typeof "10" == typeof 10);
```

#### 3. Check if parseInt('9.8') is equal to 10.

```js
console.log(parseInt("9.8") == 10);
```

#### 4. Boolean value is either true or false.

```js
// 1. Write three JavaScript statement which provide truthy value.
console.log(5 > 4);
console.log(10 == 10);
console.log("" == false);

// 2. Write three JavaScript statement which provide falsy value.
console.log(5 < 4);
console.log("10" === 10);
console.log("" != false);
```

#### 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

```js
// 1. 4 > 3 // true
console.log(4 > 3);

// 2. 4 >= 3 // true
console.log(4 >= 3);

// 3. 4 < 3 // false
console.log(4 < 3);

// 4. 4 <= 3 // false
console.log(4 <= 3);

// 5. 4 == 4 // true
console.log(4 == 4);

// 6. 4 === 4 // true
console.log(4 === 4);

// 7. 4 != 4 // false
console.log(4 != 4);

// 8. 4 !== 4 // false
console.log(4 !== 4);

// 9. 4 != '4' // false
console.log(4 != "4");

// 10. 4 == '4' // true
console.log(4 == "4");

// 11. 4 === '4' // false
console.log(4 === "4");

// 12. Find the length of python and jargon and make a falsy comparison statement.
console.log("python".length != "jargon".length);
```

#### 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

```js
// 1. 4 > 3 && 10 < 12 // true
console.log(4 > 3 && 10 < 12);

// 2. 4 > 3 && 10 > 12 // false
console.log(4 > 3 && 10 > 12);

// 3. 4 > 3 || 10 < 12 // true
console.log(4 > 3 || 10 < 12);

// 4. 4 > 3 || 10 > 12 // true
console.log(4 > 3 || 10 > 12);

// 5. !(4 > 3) // false
console.log(!(4 > 3));

// 6. !(4 < 3) // true
console.log(!(4 < 3));

// 7. !(false) // true
console.log(!false);

// 8. !(4 > 3 && 10 < 12) // false
console.log(!(4 > 3 && 10 < 12));

// 9. !(4 > 3 && 10 > 12) // true
console.log(!(4 > 3 && 10 > 12));

// 10. !(4 === '4') // true
console.log(!(4 === "4"));

// 11. There is no 'on' in both dragon and python
console.log(!("dragon".includes("on") && "python".includes("on")));
```

#### 7. Use the Date object to do the following activities.

```js
const now = new Date();

// 1. What is the year today?
console.log(now.getFullYear());

// 2. What is the month today as a number?
console.log(now.getMonth());

// 3. What is the date today?
console.log(now.getDate());

// 4. What is the day today as a number?
console.log(now.getDay());

// 5. What is the hours now?
console.log(now.getHours());

// 6. What is the minutes now?
console.log(now.getMinutes());

// 7. Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getTime());
```

## Exercises: Level 2

#### 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

```
Enter base: 20
Enter height: 10
The area of the triangle is 100
```

```js
let base = prompt("Enter base:");
let height = prompt("Enter height:");

let triangleArea = 0.5 * base * height;

console.log(`The area of the triangle is ${triangleArea}`);
```

#### 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

```
Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12
```

```js
let a = prompt("Enter side a:");
let b = prompt("Enter side b:");
let c = prompt("Enter side c:");

let perimeter = +a + +b + +c;

console.log(`The perimeter of the triangle is ${perimeter}`);
```

#### 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

```js
let length = prompt("Enter length:");
let width = prompt("Enter width:");

let rectangleArea = +length * +width;
let rectanglePerimeter = 2 * (+length + +width);

console.log(
  `The area of rectangle is ${rectangleArea} and the peimeter is ${rectanglePerimeter}.`
);
```

#### 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

```js
let radius = prompt("Enter radius:");
let PI = Math.PI; // We will use Math to get PI

let circleArea = PI * radius ** 2;
let circleCircumference = 2 * PI * radius;

console.log(
  `The area of circle is ${circleArea.toFixed(
    2
  )} and the circumference is ${circleCircumference.toFixed(2)}.`
);

// .toFixed() is used to round the number to 2 decimals
```

#### 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2.

```js
const equation = "y = 2x - 2";

// The equation is in "y = mx + b", from that slope (m):

const slope = 2;

// y-intercept is b (or by substituting 0 as x):

const yIntercept = -2;

// x-intercept is gotten by substituting 0 as y:

const xIntercept = 2 / 2;

// Outputting the result:

console.log(
  `The slope is ${slope}, x-intercept is [${xIntercept}, 0] and y-intercept is [0, ${yIntercept}].`
);
```

#### 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point (6,10).

```js
const [x1, y1] = [2, 2]; // First point
const [x2, y2] = [6, 10]; // Second point

const slope = (y2 - y1) / (x2 - x1);

console.log(`The slope is ${slope}.`);
```

#### 7. Compare the slope of above two questions.

```js
const slope1 = 2; // Slope from #5:
const slope2 = 2; // Slope from #6:

// Let's compare if they are equal:

console.log(slope1 === slope2);
```

#### 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

```js
// This is standart quadratic equation y = ax2 + bx + c, for this one specially y = x2 + 6x + 9:

const a = 1;
const b = 6;
const c = 9;

// Calculate discriminant D = b2 - 4ac:

const discriminant = b ** 2 - 4 * a * c;

// Calculate quadratic formula x1,2 = (-b +- sqrt(D)) / 2a:

const x1 = (b * -1 + Math.sqrt(discriminant)) / (2 * a);
const x2 = (b * -1 - Math.sqrt(discriminant)) / (2 * a);

// Outputting the result:

console.log(
  `For this quadratic equation x1 is equal to ${x1} and x2 is equal to ${x2}.`
);

/* 
Note that in this specific case the discriminant is equal to 0, this means, that the quadratic equation has only one solution -3.
We could use if statement to differ between different discriminants, but if hasn't been covered yet.
*/
```

#### 9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

```
Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120
```

```js
let hours = prompt("Enter hours:");
let hourRate = prompt("Enter rate per hour:");

let earning = +hours * +hourRate;

console.log(`Your weekly earning is ${earning}`);
```

#### 10. If the length of your name is greater than 7 say, your name is long else say your name is short.

```js
let name = prompt("Enter a name:");

name.length > 7 ? console.log("Name is long.") : console.log("Name is short.");
```

#### 11. Compare your first name length and your family name length and you should get this output.

```js
let firstName = "Asabeneh";
let lastName = "Yetayeh";
```

```
Your first name, Asabeneh is longer than your family name, Yetayeh.
```

```js
let firstName = "Patrik";
let lastName = "Zezulka";

let compareLength = firstName.length >= lastName.length ? "longer" : "shorter";

console.log(
  `Your first name, ${firstName} is ${compareLength} than your family name, ${lastName}.`
);
```

#### 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

```js
let myAge = 250;
let yourAge = 25;
```

```
I am 225 years older than you.
```

```js
let myAge = 250;
let yourAge = 25;

let compareAge = myAge >= yourAge ? "older" : "younger";

console.log(`I am ${Math.abs(myAge - yourAge)} years ${compareAge} than you.`);
```

#### 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

```
Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.
```

```js
let birthYear = prompt("Enter birth year:");
let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

age >= 18
  ? console.log(`You are ${age}. You are old enough to drive.`)
  : console.log(
      `You are ${age}. You will be allowed to drive after ${18 - age} years.`
    );
```

#### 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years.

```
Enter number of years you live: 100
You lived 3153600000 seconds.
```

```js
let years = prompt("Enter number of years you live:");

let seconds = years * 365 * 24 * 60 * 60;

console.log(`You lived ${seconds} seconds.`);
```

#### 15. Create a human readable time format using the Date time object.

```js
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();

// 1. YYYY-MM-DD HH:mm
const format1 = `${year}-${month}-${date} ${hours}:${minutes}`;
console.log(format1);

// 2. DD-MM-YYYY HH:mm
const format2 = `${date}-${month}-${year} ${hours}:${minutes}`;
console.log(format2);

// 3. DD/MM/YYYY HH:mm
const format3 = `${date}/${month}/${year} ${hours}:${minutes}`;
console.log(format3);
```

## Exercises: Level 3

#### 1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05).

```js
// Define new Date(), than covert it to string to be able to use .padStart() method

const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, 0);
const date = String(now.getDate()).padStart(2, 0);
const hours = String(now.getHours()).padStart(2, 0);
const minutes = String(now.getMinutes()).padStart(2, 0);

// YYYY-MM-DD HH:mm eg. 20120-01-02 07:05

const format = `${year}-${month}-${date} ${hours}:${minutes}`;
console.log(format);
```
