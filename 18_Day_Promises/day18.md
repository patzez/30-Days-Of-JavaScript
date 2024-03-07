# Day 18 - Promises

```js
const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";
```

## Exercises: Level 1

#### 1. Read the countries API using fetch and print the name of country, capital, languages, population and area.

```js
const countriesAPI = "https://restcountries.com/v2/all";

fetch(countriesAPI)
  .then((data) => data.json())
  .then((countries) => {
    countries.forEach((country) => {
      languages = [];
      country.languages.forEach((language) => languages.push(language.name));
      console.log(
        `Name: ${country.name}, Capital:  ${country.capital}, Population: ${
          country.population
        }, Area: ${country.area} km2, Languages: ${languages.join(", ")}`
      );
    });
  })
  .catch((error) => console.log(error));
```

## Exercises: Level 2

#### 1. Print out all the cat names in to catNames variable.

```js
const catsAPI = "https://api.thecatapi.com/v1/breeds";
const catNames = [];

fetch(catsAPI)
  .then((data) => data.json())
  .then((cats) => {
    cats.forEach((cat) => catNames.push(cat.name));
    console.log(catNames);
  })
  .catch((error) => console.log(error));
```

## Exercises: Level 3

#### 1. Read the cats api and find the average weight of cat in metric unit.

```js
const catsAPI = "https://api.thecatapi.com/v1/breeds";

fetch(catsAPI)
  .then((data) => data.json())
  .then((cats) => {
    const totalCats = cats.length;
    const averageWeights = [];
    cats.forEach((cat) => {
      const weightRange = cat.weight.metric.split(" - ");
      averageWeights.push((+weightRange[0] + +weightRange[1]) / 2);
    });
    const averageCatWeight = averageWeights.reduce((a, b) => a + b) / totalCats;
    console.log(
      `Average weight of all cats is: ${averageCatWeight.toFixed(2)} kg`
    );
  })
  .catch((error) => console.log(error));
```

#### 2. Read the countries api and find out the 10 largest countries.

```js
const countriesAPI = "https://restcountries.com/v2/all";

fetch(countriesAPI)
  .then((data) => data.json())
  .then((countries) => {
    const countryArea = [];
    countries.forEach((country) => {
      const pair = { name: country.name, area: country.area };
      countryArea.push(pair);
    });
    const countryAreaSorted = countryArea.sort((a, b) => b.area - a.area);
    console.log(countryAreaSorted.slice(0, 10));
  })
  .catch((error) => console.log(error));
```

#### 3. Read the countries api and count total number of languages in the world used as officials.

```js
const countriesAPI = "https://restcountries.com/v2/all";

fetch(countriesAPI)
  .then((data) => data.json())
  .then((countries) => {
    const totalLanguages = [];
    countries.forEach((country) => {
      country.languages.forEach((language) =>
        totalLanguages.push(language.name)
      );
    });
    const uniqueLanguages = new Set(totalLanguages);
    console.log(
      `There are total of ${uniqueLanguages.size} languages in the world.`
    );
  })
  .catch((error) => console.log(error));
```
