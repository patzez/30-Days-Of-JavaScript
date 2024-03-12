// EXERCISES: Level 1
// 1.
const firstP = document.querySelector('p');

// 2.
const firstID = document.querySelector('#par1');
const secondID = document.querySelector('#par2');
const thirdID = document.querySelector('#par3');
const fourthID = document.querySelector('#par4');

// 3.
const allP = document.querySelectorAll('p');

// 4.
allP.forEach((p) => console.log(p.textContent));

// 5.
// fourthID.textContent = 'Fourth Paragprah';
allP[3].textContent = 'Fourth Paragraph';

// 6.
firstID.setAttribute('class', 'js-class');
firstID.setAttribute('id', 'js-id-p1');

secondID.className = 'js-class';
secondID.id = 'js-id-p2';

thirdID.classList.add('js-class');
thirdID.setAttribute('id', 'js-id-p3');

fourthID.className = 'js-class';
fourthID.id = 'js-id-p3';

// EXERCISES: Level 2
// 1.
allP[0].style.backgroundColor = 'green';
allP[0].style.border = '3px solid yellow';

allP[1].style.backgroundColor = 'yellow';
allP[1].style.border = '3px solid red';

allP[2].style.fontSize = '30px';
allP[2].style.border = '5px dashed black';

allP[3].style.letterSpacing = '5px';
allP[3].style.fontWeight = 'bold';

// 2.
allP.forEach((par, i) => {
  i % 2 === 0 ? (par.style.color = 'red') : (par.style.color = 'green');
});

// 3.
allP.forEach((par, i) => {
  par.classList.add('added-by-foreach');
  par.textContent = `This is paragraph number ${i + 1}.`;
});
