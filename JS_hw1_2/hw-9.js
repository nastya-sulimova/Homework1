// Задание 1. Скрытие и показ текста

const heading1El = document.querySelector('.heading1');
const buttonHideEl = document.querySelector('.buttonHide');


buttonHideEl.addEventListener("click", ()=>{
    if (heading1El.style.display==="none") {
        heading1El.style.display="block";
        buttonHideEl.textContent='Скрыть';
    } else {
        heading1El.style.display="none";
        buttonHideEl.textContent='Открыть';
    }
    
})


// Задание 2. Изменение стиля элемента

const colorP = document.querySelector('.changeColorP');
const colorBtn = document.querySelector('.changeColorBtn');

colorBtn.addEventListener('click', ()=>{
    colorP.style.color = 'blue';
})


// Задание 3. Динамическое изменение текста

const heading3El = document.querySelector('.heading3');
const colorBtnEl = document.querySelector('.buttonChangeText');

colorBtnEl.addEventListener('click', ()=>{
    heading3El.textContent = 'Привет, мир!';
})


// Задание 4. Поиск и изменение элементов по классу

const descriptionEl = document.querySelectorAll('.description');

descriptionEl.forEach(description => {
    description.textContent = 'Измененный текст';
});



// descriptionEl.forEach(description => {
//     description.addEventListener('click', ()=>{
//         description.textContent = 'Измененный текст';
//     })
// });


// Задание 5. Работа с querySelectorAll

const descriptioNEl = document.querySelectorAll('.descriptioN');

descriptioNEl.forEach(description => {
    description.textContent = 'Новый текст';
});


// Задание 6. Добавление нового элемента в DOM

const addElEl = document.querySelector('.addEl');

addElEl.addEventListener('click', ()=>{
  const newP = document.createElement('p');
  newP.textContent = 'Новый абзац';
  document.body.appendChild(newP);
})


// Задание 7. Удаление элемента

const DescriptionEl = document.querySelector('.Description');
const deleteBtnEl = document.querySelector('.deleteBtn');

deleteBtnEl.addEventListener('click', ()=>{
    if (DescriptionEl) {
        DescriptionEl.remove();
    }
})















// ---------------------------------------------------------------------------------------------------------------------
// const button = document.getElementById("change-text");

// button.addEventListener("click", function () {
// console.log(`Нажала, молодец`);

// });

// button.textContent = 'Привет, мир!';


// // Чтобы найти все элементы, соответствующие определенному селектору, нужен 
// // querySelectorAll:
// // Находим все элементы с классом 'description'
// const allDescriptions = document.querySelectorAll('.description');

// // Проходим по каждому элементу и изменяем его текст
// allDescriptions.forEach(description => {
//    description.textContent = 'Это абзац.';
// });




// // Создаем новый элемент 'div'
// const newDiv = document.createElement('div');
// newDiv.textContent = 'Новый элемент';

// // Добавляем новый элемент в конец 'body'
// document.body.appendChild(newDiv);


// // Создаем новый элемент 'div'
// const anotherDiv = document.createElement('div');
// anotherDiv.textContent = 'Другой новый элемент';

// // Находим первый абзац в документе
// const firstParagraph = document.querySelector('p');

// // Вставляем новый элемент перед первым абзацем
// document.body.insertBefore(anotherDiv, firstParagraph);


// const paragraph = document.querySelector('p');
// paragraph.remove()