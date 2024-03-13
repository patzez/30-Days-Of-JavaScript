// Styling elements
const bodyEl = document.querySelector('body');
bodyEl.style.cssText = `
font-family: Arial;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100vw
`;

const h1El = document.querySelector('h1');
h1El.style.cssText = `
margin: 5px;
font-size: 1.5rem;
`;

const h2El = document.querySelector('h2');
h2El.style.cssText = `
font-size: 1rem;
font-weight: normal;
text-decoration: underline;
margin: 0;
`;

const h3El = document.querySelector('h3');
h3El.style.cssText = `
font-size: 0.8rem;
font-weight: normal;
text-decoration: underline;
margin: 0;
margin-bottom: 10px;
`;

const divWrapperEl = document.querySelector('.wrapper');
divWrapperEl.style.cssText = `
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`;

// Creating divs for each number
for (let i = 0; i < 101; i++) {
  const divNumber = document.createElement('div');
  divNumber.className = 'number';
  divNumber.textContent = i;
  divWrapperEl.appendChild(divNumber);
}

// Styling number div elements
const divNumberEls = document.querySelectorAll('.number');
for (div of divNumberEls) {
  div.style.cssText = `
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px 30px;
  border: 2px solid white;
  color: white;
  width: 2rem;
  text-align: center
  `;
}

// Function to check, if the number is prime
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

// Styling dumber div element based on the value
divNumberEls.forEach((element) => {
  const numbr = +element.textContent;
  if (isPrime(numbr)) {
    element.style.backgroundColor = '#fa481b';
  } else if (numbr % 2 == 0) {
    element.style.backgroundColor = '#5bb450';
  } else {
    element.style.backgroundColor = '#ffdd3c';
  }
});
