# Day 21 - DOM

## Exercises: Level 1

#### 1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name.

```js
const firstP = document.querySelector('p');
```

#### 2. Get each of the the paragraph using document.querySelector('#id') and by their id.

```js
const firstID = document.querySelector('#par1');
const secondID = document.querySelector('#par2');
const thirdID = document.querySelector('#par3');
const fourthID = document.querySelector('#par4');
```

#### 3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name.

```js
const allP = document.querySelectorAll('p');
```

#### 4. Loop through the nodeList and get the text content of each paragraph.

```js
allP.forEach((p) => console.log(p.textContent));
```

#### 5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph.

```js
// fourthID.textContent = 'Fourth Paragprah';
allP[3].textContent = 'Fourth Paragraph';
```

#### 6. Set id and class attribute for all the paragraphs using different attribute setting methods.

```js
firstID.setAttribute('class', 'js-class');
firstID.setAttribute('id', 'js-id-p1');

secondID.className = 'js-class';
secondID.id = 'js-id-p2';

thirdID.classList.add('js-class');
thirdID.setAttribute('id', 'js-id-p3');

fourthID.className = 'js-class';
fourthID.id = 'js-id-p3';
```

## Exercises: Level 2

#### 1. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family).

```js
allP[0].style.backgroundColor = 'green';
allP[0].style.border = '3px solid yellow';

allP[1].style.backgroundColor = 'yellow';
allP[1].style.border = '3px solid red';

allP[2].style.fontSize = '30px';
allP[2].style.border = '5px dashed black';

allP[3].style.letterSpacing = '5px';
allP[3].style.fontWeight = 'bold';
```

#### 2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color.

```js
allP.forEach((par, i) => {
  i % 2 === 0 ? (par.style.color = 'red') : (par.style.color = 'green');
});
```

#### 3. Set text content, id and class to each paragraph.

```js
allP.forEach((par, i) => {
  par.classList.add('added-by-foreach');
  par.textContent = `This is paragraph number ${i + 1}.`;
});
```

## Exercises: Level 3

### DOM: Mini project 1

#### 1. Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

```
- The year color is changing every 1 second.
- The date and time background color is changing every on seconds.
- Completed challenge has background green.
- Ongoing challenge has background yellow.
- Coming challenges have background red.
```

```
Solution in Level_3 folder
```
