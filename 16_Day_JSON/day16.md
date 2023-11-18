# Day 16 - JSON

## Exercises: Level 1

#### 1. Change skills array to JSON using JSON.stringify().

#### 2. Stringify the age variable.

#### 3. Stringify the isMarried variable.

#### 4. Stringify the student object.

```js
const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 250;
let isMarried = true;
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};

// 1.
const skillsStringified = JSON.stringify(skills);
console.log(skillsStringified);

// 2.
const ageStringified = JSON.stringify(age);
console.log(ageStringified);

// 3.
const isMarriedStringified = JSON.stringify(isMarried);
console.log(isMarriedStringified);

// 4.
const studentStringified = JSON.stringify(student);
console.log(studentStringified);
```

## Exercises: Level 2

#### 1. Stringify the students object with only firstName, lastName and skills properties.

```js
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};

const studentStringified = JSON.stringify(student, [
  "firstName",
  "lastName",
  "skills",
]);
console.log(studentStringified);
```

## Exercises: Level 3

#### 1. Parse the txt JSON to object.

#### 2. Find the user who has many skills from the variable stored in txt.

```js
const txt = `{
  "Alex": {
      "email": "alex@alex.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript"
      ],
      "age": 20,
      "isLoggedIn": false,
      "points": 30
  },
  "Asab": {
      "email": "asab@asab.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "Redux",
          "MongoDB",
          "Express",
          "React",
          "Node"
      ],
      "age": 25,
      "isLoggedIn": false,
      "points": 50
  },
  "Brook": {
      "email": "daniel@daniel.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Redux"
      ],
      "age": 30,
      "isLoggedIn": true,
      "points": 50
  },
  "Daniel": {
      "email": "daniel@alex.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "Python"
      ],
      "age": 20,
      "isLoggedIn": false,
      "points": 40
  },
  "John": {
      "email": "john@john.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Redux",
          "Node.js"
      ],
      "age": 20,
      "isLoggedIn": true,
      "points": 50
  },
  "Thomas": {
      "email": "thomas@thomas.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "React"
      ],
      "age": 20,
      "isLoggedIn": false,
      "points": 40
  },
  "Paul": {
      "email": "paul@paul.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "MongoDB",
          "Express",
          "React",
          "Node"
      ],
      "age": 20,
      "isLoggedIn": false,
      "points": 40
  }
}
`;

// 1.
const txtParsed = JSON.parse(txt);
console.log(txtParsed);

// 2.
let mostSkilledUser = "";
let skillsCount = 0;
Object.entries(txtParsed).forEach(([user, properties]) => {
  if (properties.skills.length > skillsCount) {
    mostSkilledUser = user;
    skillsCount = properties.skills.length;
  }
});

console.log(
  `User with most skills is ${mostSkilledUser} with ${skillsCount} skills.`
);
```
