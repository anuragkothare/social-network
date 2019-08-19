
const form = document.querySelector('.comment');
const ul = document.querySelector('.comment-list');
const button = document.querySelector('.delete-comments');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

const form2 = document.querySelector('.comment2');
const ul2 = document.querySelector('.comment-list2');
const button2 = document.querySelector('.delete-comments2');
const input2 = document.getElementById('item2');
let itemsArray2 = localStorage.getItem('items2') ? JSON.parse(localStorage.getItem('items2')) : [];



localStorage.setItem('items', JSON.stringify(itemsArray));
localStorage.setItem('items2', JSON.stringify(itemsArray2));

const data = JSON.parse(localStorage.getItem('items'));
const data2 = JSON.parse(localStorage.getItem('items2'));


const liMaker = (text) => {
    const li = document.createElement('li');
    // console.log(li);

    li.textContent = text;
    ul.appendChild(li);
}

const liMaker2 = (text) => {
    const li = document.createElement('li');
    // console.log(li);

    li.textContent = text;
    ul2.appendChild(li);
}


form.addEventListener('submit', function (e) {
    e.preventDefault();
    itemsArray.push(input.value);

    localStorage.setItem('items', JSON.stringify(itemsArray));
    liMaker(input.value);
    input.value = "";
});

form2.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(input2.value);
    itemsArray2.push(input2.value);

    localStorage.setItem('items2', JSON.stringify(itemsArray2));
    liMaker2(input2.value);
    input2.value = "";
});

// if (input.value) {
//     data.forEach(item => {
//         liMaker(item);
//     })
// } else if (input2.value) {
//     data2.forEach(item => {
//         liMaker2(item);
//     })
// }

data.forEach(item => {
    liMaker(item);
});

data2.forEach(item => {
    liMaker2(item);
});


button.addEventListener('click', function () {

    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    itemsArray = [];
    
});

// button2.addEventListener('click', function () {
//     localStorage.clear();
//     while (ul2.firstChild) {
//         ul2.removeChild(ul2.firstChild);
//     }
//     itemsArray2 = [];
// });