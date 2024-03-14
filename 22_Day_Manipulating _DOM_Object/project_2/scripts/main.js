// Styling elements
const bodyEl = document.querySelector('body');
bodyEl.style.cssText = `
font-family = Arial;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;`;

const headerEl = document.querySelector('header');
headerEl.style.cssText = `
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

// Adding text with total number of countries + styling
const totalCountriesEl = document.querySelector('#total-countries');
totalCountriesEl.textContent = `Total Number of Countries: ${countries.length}`;
totalCountriesEl.style.margin = '2px 0px 2px 0px';

// Styling element + changing it's inner text to upper case
const h2El = document.querySelector('h2');
h2El.textContent = h2El.textContent.toUpperCase();
h2El.style.cssText = `
font-size: 2rem;
margin: 1px 0px 2px 0px;
letter-spacing: 8px;
`;

// Styling every h3 element
const h3El = document.querySelectorAll('h3');
h3El.forEach((el) => {
  el.style.cssText = `
  margin: 1px 0px;
  font-weight: normal;
  font-size: 0.8rem
  `;
});

// Styling countries container element
const countriesContainerEl = document.querySelector('.countries-container');
countriesContainerEl.style.cssText = `
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
margin: 40px 0px;
max-width: 70rem;
`;

// Creating div elements for every country + styling them + appending them to the countries container element
countries.forEach((country) => {
  const divWrapper = document.createElement('div');
  divWrapper.className = 'countries-wrapper';
  divWrapper.textContent = country.toUpperCase();
  divWrapper.style.cssText = `
  width: 10rem;
  height: 10rem;
  border: solid 1px lightgray;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  text-align: center;
  `;
  countriesContainerEl.appendChild(divWrapper);
});
