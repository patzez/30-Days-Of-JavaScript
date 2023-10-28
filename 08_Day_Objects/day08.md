# Day 08 - Objects

## Exercises: Level 1

#### 1. Create an empty object called dog.

#### 2. Print the the dog object on the console.

#### 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof.

#### 4. Get name, legs, color, age and bark value from the dog object.

#### 5. Set new properties the dog object: breed, getDogInfo.

```js
// 1.
const dog = {};

// 2.
console.log(dog);

// 3.
dog.name = "Leonardo";
dog.legs = 4;
dog.color = "creamy brown";
dog.age = 1;
dog.bark = function () {
  console.log("Woof woof!");
};

// 4.
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
dog.bark();

// 5.
dog.breed = "Sharpei";
dog.getDogInfo = function () {
  console.log(
    `This is ${this.name}, he is a ${this.color} ${this.breed}. \nHe is ${this.age} years old and has ${this.legs} legs. `
  );
};

dog.getDogInfo();
```

## Exercises: level 2

#### 1. Find the person who has many skills in the users object.

#### 2. Count logged in users, count users having greater than equal to 50 points from the following object.

#### 3. Find people who are MERN stack developer from the users object.

#### 4. Set your name in the users object without modifying the original users object.

#### 5. Get all keys or properties of users object.

#### 6. Get all the values of users object.

```js
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// 1.
let mostSkills = 0;
let mostSkillsName = "";
for (const user of Object.keys(users)) {
  if (users[user].skills.length > mostSkills) {
    mostSkills = users[user].skills.length;
    mostSkillsName = user;
  }
}

console.log(
  `The person with most skills is ${mostSkillsName}, it is ${mostSkills} skills.`
);

// 2.
let loggedInCount = 0;
let greaterThan50PointsCount = 0;
for (const user of Object.keys(users)) {
  if (users[user].isLoggedIn) {
    loggedInCount++;
  }
  if (users[user].points >= 50) {
    greaterThan50PointsCount++;
  }
}

console.log(
  `\nThere are ${loggedInCount} online users. ${greaterThan50PointsCount} out of all users have greater or equal to 50 points.`
);

// 3.
let mernCount = 0;
for (const user of Object.keys(users)) {
  if (users[user].skills.includes("MongoDB", "Express", "React", "Node")) {
    mernCount++;
  }
}

console.log(`\nThere are ${mernCount} MERN stack developers.`);

// 4.
const copyUsers = Object.assign({}, users);
copyUsers.Patrik = {};
copyUsers.Patrik.email = "patrik@patrik.com";
copyUsers.Patrik.skills = ["HTML", "CSS", "JavaScript"];
copyUsers.Patrik.age = 28;
copyUsers.Patrik.isLoggedIn = true;
copyUsers.Patrik.points = 20;
//console.log(copyUsers);

// 5.
let allKeys = Object.keys(users);
console.log("\nKeys of users object:", allKeys);

// 6.
let allValues = Object.values(users);
console.log("\nValues of users object:", allValues);
```

#### 7. Use the countries object to print a country name, capital, populations and languages.

Solution is in [countries_data.js](./countries_data.js) file.

## Exercises: level 3

#### 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

```js
const personAccount = {
  firstName: "John",
  lastName: "Doe",
  incomes: {
    salary: 5000,
    passiveIncome: 2000,
    socialMedia: 8000,
  },
  expenses: {
    rent: 5000,
    leasing: 2000,
    food: 1000,
  },

  totalIncome: function () {
    let totIncome = 0;
    for (item of Object.values(this.incomes)) {
      totIncome += item;
    }
    return totIncome;
  },

  totalExpense: function () {
    let totExpense = 0;
    for (item of Object.values(this.expenses)) {
      totExpense += item;
    }
    return totExpense;
  },

  accountInfo: function () {
    let info = `First Name: ${this.firstName}\nLast name: ${
      this.lastName
    }\nTotal income: ${this.totalIncome()}\nTotal expense: ${this.totalExpense()}`;
    return info;
  },

  addIncome: function (type, amount) {
    this.incomes[type] = amount;
  },

  addExpense: function (type, amount) {
    this.expenses[type] = amount;
  },

  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
};

console.log(`Total income: ${personAccount.totalIncome()}`);
console.log(`Total expense: ${personAccount.totalExpense()}`);
console.log(`\nAccount info:\n${personAccount.accountInfo()}`);
personAccount.addIncome("bonus", 1000);
console.log("\nIncomes after adding one:", personAccount.incomes);
personAccount.addExpense("insurence", 2000);
console.log("\nExpense after adding one:", personAccount.expenses);
console.log(`\nAccount balance: ${personAccount.accountBalance()}`);
```

#### 2. Imagine you are getting the above users collection from a MongoDB database.

##### a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

##### b. Create a function called signIn which allows user to sign in to the application

#### 3. The products array has three elements and each of them has six properties.

##### a. Create a function called rateProduct which rates the product

##### b. Create a function called averageRating which calculate the average rating of a product

#### 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

```js
/*
2
*/
const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

// 2a
function signUp(email, username, password) {
  for (const user of users) {
    if (email === user.email || username === user.username) {
      console.log("Email or username already exists!");
      return;
    }
  }
  let id = generateID();
  let date = generateDate();
  users.push({
    _id: id,
    username: username,
    email: email,
    password: String(password),
    createdAt: date,
    isLoggedIn: true,
  });
  console.log("Registration was successfull!");
}

function generateID() {
  let id = "";
  let chars = "0123456789qwertyuiopasdfghjklzxccvbnm";
  while (id.length !== 6) {
    let randomIndex = Math.floor(Math.random() * chars.length);
    id += chars[randomIndex];
  }
  return id;
}

function generateDate() {
  let now = new Date();
  let year = String(now.getFullYear()).padStart(2, "0");
  let month = String(now.getMonth() + 1).padStart(2, "0");
  let date = String(now.getDate()).padStart(2, "0");
  let hours = now.getHours();
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours > 12 ? hours - 12 : hours;
  hours = hours ? hours : 12;
  hours = String(hours).padStart(2, "0");
  return `${date}/${month}/${year} ${hours}:${minutes} ${ampm}`;
}

// 2b
function signIn(email, password) {
  for (const user of users) {
    if (email === user.email && password == user.password) {
      console.log("Logged in successfully!");
      return;
    }
  }
  console.log("Invalid email or password!");
}

/*
3
*/
const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

// 3a
function rateProduct(userName, productName, rating) {
  // Check if user is registered
  let userId = "";
  for (const user of users) {
    if (userName === user.username) {
      userId = user._id;
    }
  }
  if (!userId) {
    console.log("You must be registered to rate products!");
    return;
  }

  // Check if product exists and add rating
  let productExists = false;
  for (const product of products) {
    if (product.name.toLowerCase() == productName.toLowerCase()) {
      productExists = true;
      product.ratings.push({
        userId: userId,
        rate: rating,
      });
      console.log("Product rated successfully!");
      return;
    }
  }
  if (!productExists) {
    console.log("Product not found!");
    return;
  }
}

// 3b
function averageRating(productName) {
  let totalRating = 0;
  let ratingCount = 0;
  let productExists = false;
  for (const item of products) {
    if (item.name.toLowerCase() == productName.toLowerCase()) {
      productExists = true;
      for (const rating of item.ratings) {
        totalRating += rating.rate;
        ratingCount++;
      }
    }
  }
  if (totalRating && ratingCount) {
    return (totalRating / ratingCount).toFixed(2);
  } else if (!productExists) {
    return "Invalid product!";
  } else {
    return "No rating for this product!";
  }
}

/* 
4
*/
function likeProduct(userName, productName) {
  // Check if user is registered
  let userId = "";
  for (const user of users) {
    if (userName === user.username) {
      userId = user._id;
    }
  }
  if (!userId) {
    return "You must be registered to rate products!";
  }

  // Check if product exists and add or remove like
  let productExists = false;
  for (const product of products) {
    if (product.name.toLowerCase() == productName.toLowerCase()) {
      productExists = true;
      if (!product.likes.includes(userId)) {
        product.likes.push(userId);
        return "Product liked successfully!";
      } else {
        product.likes.splice(product.likes.indexOf(userId), 1);
        return "Product unliked successfully!";
      }
    }
  }
  if (!productExists) {
    return "Product not found!";
  }
}
```
