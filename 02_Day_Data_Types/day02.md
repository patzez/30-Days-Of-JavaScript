# Day 02 - Data Types

## Exercises: Level 1

#### 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

```js
let challenge = "30 Days Of JavaScript";
```

#### 2. Print the string on the browser console using console.log().

```js
console.log("JavaScript is awesome!");

// Or using variable
let challenge = "30 Days Of JavaScript";
console.log(challenge);
```

#### 3. Print the length of the string on the browser console using console.log().

```js
console.log("JavaScript is awesome!".length);

// Or using variable
let challenge = "30 Days Of JavaScript";
console.log(challenge.length);
```

#### 4. Change all the string characters to capital letters using toUpperCase() method.

```js
console.log("JavaScript is awesome!".toUpperCase());

// Or using variable
let challenge = "30 Days Of JavaScript";
console.log(challenge.toUpperCase());
```

#### 5. Change all the string characters to lowercase letters using toLowerCase() method.

```js
console.log("JavaScript is awesome!".toLowerCase());

// Or using variable
let challenge = "30 Days Of JavaScript";
console.log(challenge.toLowerCase());
```

#### 6. Cut (slice) out the first word of the string using substr() or substring() method.

```js
console.log("JavaScript is awesome!".substring(0, 10));

// Or using variable
let challenge = "30 Days Of JavaScript";
console.log(challenge.substring(0, 2));
```

#### 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

```js
let challenge = "30 Days Of JavaScript";
console.log(challenge.slice(3));
```

#### 8. Check if the string contains a word Script using includes() method.

```js
let challenge = "30 Days Of JavaScript";
console.log(challenge.includes("JavaScript"));
```

#### 9. Split the string into an array using split() method.

```js
let challenge = "30 Days Of JavaScript";
console.log(challenge.split());
```

#### 10. Split the string 30 Days Of JavaScript at the space using split() method.

```js
let challenge = "30 Days Of JavaScript";
console.log(challenge.split(" "));
```

#### 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

```js
let myString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(myString.split(", "));
```

#### 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

```js
let challenge = "30 Days Of JavaScript";
console.log(challenge.replace("JavaScript", "Python"));
```

#### 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.

```js
let challenge = "30 Days Of JavaScript";
console.log(challenge.charAt(15));
```

#### 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt().

```js
let challenge = "30 Days Of JavaScript";
console.log(challenge.charCodeAt(11));
```

#### 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript.

```js
let challenge = "30 Days Of JavaScript";
console.log(challenge.indexOf("a"));
```

#### 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

```js
let challenge = "30 Days Of JavaScript";
console.log(challenge.lastIndexOf("a"));
```

#### 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.

```js
let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));
```

#### 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.

```js
let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.lastIndexOf("because"));
```

#### 19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.

```js
let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.search("because"));
```

#### 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.

```js
let challenge = " 30 Days Of JavaScript ";
console.log(challenge.trim());
```

#### 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true.

```js
let challenge = "30 Days Of JavaScript";
console.log(challenge.startsWith("30"));
```

#### 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true.

```js
let challenge = "30 Days Of JavaScript";
console.log(challenge.endsWith("Script"));
```

#### 23. Use match() method to find all the a’s in 30 Days Of JavaScript.

```js
let challenge = "30 Days Of JavaScript";
console.log(challenge.match(/a/g));
```

#### 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'.

```js
let half1 = "30 Days of";
let half2 = "JavaScript";
let challenge = half1.concat(" ", half2);
console.log(challenge);
```

#### 25. Use repeat() method to print 30 Days Of JavaScript 2 times.

```js
let challenge = "30 Days Of JavaScript";
console.log(challenge.repeat(2));
```

## Exercises: Level 2

#### 1. Using console.log() print out the following statement:

```
The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
```

```js
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);
```

#### 2. Using console.log() print out the following quote by Mother Teresa:

```
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
```

```js
console.log(
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
);
```

#### 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

```js
console.log(typeof "10" == typeof 10);
console.log(typeof +"10" == typeof 10);
```

#### 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

```js
console.log(parseFloat("9.8") == 10);
console.log(Math.round(parseFloat("9.8")) == 10);
```

#### 5. Check if 'on' is found in both python and jargon.

```js
let python = "python";
let jargon = "jargon";

console.log(python.includes("on"));
console.log(jargon.includes("on"));
```

#### 6. I hope this course is not full of jargon. Check if jargon is in the sentence.

```js
let sentence = "I hope this course is not full of jargon.";
console.log(sentence.includes("jargon"));
```

#### 7. Generate a random number between 0 and 100 inclusively.

```js
console.log(Math.floor(Math.random() * 101));
```

#### 8. Generate a random number between 50 and 100 inclusively.

```js
console.log(Math.floor(Math.random() * (100 - 50 + 1) + 50)); // To get a random number between two numbers inclusively => (max - min + 1) + min
```

#### 9. Generate a random number between 0 and 255 inclusively.

```js
console.log(Math.floor(Math.random() * 256));
```

#### 10. Access the 'JavaScript' string characters using a random number.

```js
let myString = "JavaScript";
let randomNumber = Math.floor(Math.random() * myString.length); // Generates random index from the length of string
console.log(myString[randomNumber]);
```

#### 11. Use console.log() and escape characters to print the following pattern.

```
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
```

```js
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");
```

#### 12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'.

```js
let sentence =
  "You cannot end a sentence with because because because is a conjunction";

// I will use substring() method, because as the day of doing this challenges, substr() has become obsolete (according to MDN)
let firstBecause = sentence.indexOf("because"); // Gets the index of first because
let lastBecause = sentence.lastIndexOf("because") + "because".length; // Gets the index of the last letter in the last because

console.log(sentence.substring(firstBecause, lastBecause));
```

## Exercises: Level 3

#### 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

```js
let sentence =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";

console.log(sentence.match(/love/gi).length);
```

#### 2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.

```js
let sentence =
  "You cannot end a sentence with because because because is a conjunction";

console.log(sentence.match(/because/gi).length);
```

#### 3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).

```js
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

let pattern = /[@#$&%;]/g; // RegEx pattern with all special characters we want to replace

console.log(sentence.replace(pattern, ""));
```

#### 4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'.

```js
let sentence =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

let income = sentence.match(/\d+/g); // Creates an array with all digits from the text
let annualIncome = +income[0] * 12 + +income[1] + +income[2] * 12; // Convets each value of income into number and counts the annual income

console.log(`Total annual income is ${annualIncome} euro.`);
```
