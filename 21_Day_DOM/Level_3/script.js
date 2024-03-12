// Changing font family for whole body
document.body.style.fontFamily = 'Arial';

// Styling <div> element
const divEl = document.querySelector('.wrapper');
divEl.style.cssText = `
display: flex;
align-items: center;
justify-content: center; 
flex-direction: column 
`;

// Styling <h1> element
const h1El = document.querySelector('h1');
h1El.style.fontSize = '18px';

// Styling <h2> element
const h2El = document.querySelector('h2');
h2El.style.cssText = `
font-size: 16px;
font-weight: lighter;
text-decoration: underline
`;

// Styling <ul> and <li> elements
const ulEl = document.querySelector('ul');
ulEl.style.cssText = `
padding: 0;
margin: 0;
width: 50vw
`;

const liItems = document.querySelectorAll('li');
liItems.forEach((item) => {
  item.style.cssText = `
  list-style-type: none;
  padding: 15px;
  word-spacing: 5px;
  border: solid white 1px;
  font-size: 12px;
  `;
  if (item.textContent.includes('Done')) {
    item.style.backgroundColor = 'lightgreen';
  } else if (item.textContent.includes('Ongoing')) {
    item.style.backgroundColor = 'gold';
  } else {
    item.style.backgroundColor = 'tomato';
  }
});

// Creating <p> element for date and time and inserting it into DOM
const timeEl = document.createElement('p');
timeEl.textContent = 'March 12, 2020 17:48:35';
divEl.insertBefore(timeEl, ulEl);
timeEl.style.cssText = `
font-size: 12px;
padding: 5px 20px;
font-weight: bold;
`;

// Replacing 2020 in <h1> with <span>2020</span>
const yearEl = document.createElement('span');
yearEl.textContent = '2020';
h1El.textContent = 'Asabeneh Yetayeh challenges in ';
h1El.appendChild(yearEl);

// Styling <span> with year
yearEl.style.fontSize = '50px';

// Create function for time
function updateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.toLocaleString('en-us', { month: 'long' });
  const date = now.getDate();
  const hours = now.getHours().toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);

  const fullDate = `${month} ${date}, ${year} ${hours}:${minutes}:${seconds}`;
  timeEl.textContent = fullDate;
}

const timeInterval = setInterval(updateTime, 1000);

// Create function for generating color
function generateColor() {
  const symbols = '0123456789abcdef';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += symbols[Math.floor(Math.random() * symbols.length)];
  }
  return color;
}

// Change background color of time
const intervalBGColor = setInterval(() => {
  timeEl.style.backgroundColor = generateColor();
}, 1000);

// Change color of year
const intervalColor = setInterval(() => {
  yearEl.style.color = generateColor();
}, 1000);
