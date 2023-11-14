# Day 12 - Regular Expressions

## Exercises: Level 1

#### 1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

```js
let sentence =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";

const earnings = sentence.match(/\d+/g);
let annualEarnings = +earnings[0] * 12 + +earnings[1] + +earnings[2] * 12;

console.log(`Annual income is: ${annualEarnings}.`);
```

#### 2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

```js
let sentence =
  "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.";

const points = sentence.match(/-?\d+/g).map((point) => +point);
const sortedPoints = [...points].sort((a, b) => a - b);
const distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0];

console.log(sortedPoints, distance);
```

#### 3. Write a pattern which identify if a string is a valid JavaScript variable.

```js
function isValidVariable(variable) {
  const validVariableRegex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

  return typeof variable === "string" && validVariableRegex.test(variable);
}

console.log(isValidVariable("first_name"));
console.log(isValidVariable("first-name"));
console.log(isValidVariable("1first_name"));
console.log(isValidVariable("firstname"));
```

## Exercises: Level 2

#### 1. Write a function called tenMostFrequentWords which get the ten most frequent word from a string.

```js
const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

function tenMostFrequentWords(str, count) {
  const trimmedString = str.replace(/[.,?!]/g, "");
  const splittedStringSet = new Set(trimmedString.split(" "));

  const wordCount = [];
  splittedStringSet.forEach((word) => {
    const pattern = new RegExp(`\\b${word}\\b`, "gi");
    const words = trimmedString.match(pattern);
    wordCount.push({
      word: word,
      count: words.length,
    });
  });
  wordCount.sort((a, b) => b.count - a.count);
  return wordCount.slice(0, count);
}

console.log(tenMostFrequentWords(paragraph, 10));
```

## Exercises: Level 3

#### 1. Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.

```js
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?";

// Function to clean text
function cleanText(text) {
  const cleanedText = text.replace(/[<>:;.,?!@#$%^&*_-]/g, "");
  return cleanedText;
}

// Function to count most frequent words
function mostFrequentWords(text, count) {
  const cleanedText = cleanText(text);
  const splittedStringSet = new Set(cleanedText.split(" "));

  const wordCount = [];
  splittedStringSet.forEach((word) => {
    const pattern = new RegExp(`\\b${word}\\b`, "gi");
    const words = cleanedText.match(pattern);
    wordCount.push({
      word: word,
      count: words.length,
    });
  });
  wordCount.sort((a, b) => b.count - a.count);
  return wordCount.slice(0, count);
}

console.log(mostFrequentWords(sentence, 3));
```
