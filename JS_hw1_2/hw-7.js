// Задание 1
const stroke = `js`;
console.log(stroke.toUpperCase());


// Задание 2
const returnArr = () => {
    const arrStroke = [`Массив`,`из`,`строк`,`строчные буквы`];
    let substr = `стр`;

    const result = [];

    for (let i = 0; i < arrStroke.length; i++) {
        if (arrStroke[i].toLowerCase().startsWith(substr.toLowerCase())) {
            result.push(arrStroke[i]);
        }
        console.log(result);
    }
    
};
returnArr();


// Задание 3
let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));


// Задание 4
const numbers = [52, 53, 49, 77, 21, 32];

console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));


// Задание 5
const randomNum = Math.floor(Math.random()*10)+1;
console.log(randomNum);


// Задание 6
const returnRandomArr = (a) => {
    let randomArr = [];
    let length = a/2;
    for (let index = 0; index < length; index++) {
        randomArr.push(Math.floor(Math.random()*a));
    }
    return randomArr; 
}
console.log(returnRandomArr(10)); 


// Задание 7
const returnRandomNumbers = (a,b) => {
    let randomNumb = Math.floor(Math.random()*(a-b+1)+b); 
    return randomNumb; 
}
console.log(returnRandomNumbers(35,10)); 


// Задание 8
let nowDate = new Date();
console.log(nowDate);


// Задание 9
let currentDate = new Date();
let days73 = 73*24*60*60*1000;
let inDays73 = (+currentDate)+days73;
let resultDays73 = new Date(inDays73);
console.log(resultDays73);

// let currentDate = new Date(); 
// currentDate.setDate(currentDate.getDate() + 73); 
// console.log(currentDate); 


// Задание 10
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
        "Пятница", "Суббота"];
        const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    let date = new Date ();


    let fullDate = "Дата: " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + ", — это " + days[date.getDay()] + 
     
        "Время: " +date.toLocaleTimeString(`ru-RU`, {hour:'2-digit', minute:'2-digit', second:'2-digit'});
    
    console.log(fullDate); 









    

// --------------------------------------практика с уроков----------------------------------------------
// // let num = Math.random() * 10;
// console.log(Math.ceil(num));

// console.log(Math.pow(5, 2));


// let currentDate = new Date();
// console.log(currentDate);


// let myDate = new Date();
// // console.log(+myDate);
// let days3 = 3*24*60*60*1000;
// console.log(days3);
// let searchDate = myDate-days3;
// console.log(searchDate);
// let daysAgo3 = new Date(searchDate);
// console.log(daysAgo3);
// console.log(daysAgo3.toLocaleDateString('it-IT', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}));


// let yesterday = new Date(`03 May 2025`);
// console.log(yesterday);
// let yesterdaY = new Date(`5/3/2025`);
// console.log(yesterdaY);


// let myDatE = new Date(2025, 4, 4, 13, 0, 25, 15);

// console.log(myDatE);




// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
//     "Пятница", "Суббота"];
//     const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
//     "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    
//     let mydate = new Date();

//     let fullDate = "Сегодня: " + mydate.getDate() + " " + months[mydate.getMonth()] + " " + mydate.getFullYear() + ", " + days[mydate.getDay()]; 

    
//     console.log(fullDate); // Сегодня: 1 Февраль 2023, Среда



// // const currentdate = new Date();
// // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// // const formattedDate = currentdate.toLocaleDateString('ru-RU', options);
// // console.log(formattedDate);
// const currentdate = new Date();
// const formattedDate = currentdate.toLocaleDateString('it-IT', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
// console.log(formattedDate);

// let currentDatE = new Date();
// let options = {hour: '2-digit', minute:'2-digit'};
// console.log(currentDatE.toLocaleTimeString('ru-RU', options)); // "18:30"

// let currentDdate = new Date();
// console.log(currentDdate.toLocaleTimeString('en-EN')); // "18:30:15"





// // const arrText = [
// //     'Пункт1. Описание пункта',
// //     'Заголовок1. Описание',
// //     'Пункт2. Описание пункта',
// //     'Заголовок2. Описание',
// //  ];
 
// //  let title = prompt('Вы хотите прочитать заголовки или пункты?');
 
// //  // Создаем регулярное выражение, которое ищет "Пункт" или "Заголовок" с любой цифрой
// //  let regexp = new RegExp(`^${title}\d`, 'i');
 
// //  arrText.forEach((el) => {
// //     if (regexp.test(el)) {
// //        console.log(el);
// //     }
// //  });
// //  console.log(title);

// let nuM = Math.floor(Math.random() * 11);
// console.log(Math.floor(nuM));



// // Сегодня: <текущее число> <текущий месяц> <текущий год>, <текущий день недели></текущий>



// // Аналогично для получения текущего времени нужно использовать методы 
// // getHours(), 
// // getMinutes() и 
// // getSeconds() объекта Date. Затем добавьте условные операторы, чтобы определить, 
// // какое приветствие показать в зависимости от времени суток.