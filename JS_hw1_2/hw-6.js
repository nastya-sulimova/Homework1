// Задание 1
const numbers = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]!==0) {
        console.log(numbers[i]);
    } else {
        break;
    };   
};


// Задание 2
const findIndex = [1, 5, 4, 10, 0, 3];

// 1
let index = findIndex.indexOf(4);
console.log(index);

// 2
for (let i = 0; i < findIndex.length; i++) {
    if (findIndex[i]===4) {
        console.log(i);
    };   
};


// Задание 3
const numbs = [1, 3, 5, 10, 20];

console.log(numbs.join(' '));


// Задание 4
const multArray = [
    [1, 1, 1], 
    [1, 1, 1], 
    [1, 1, 1]
];

// 1
console.log(multArray);

// 2
 for (let arr of multArray) {
    console.log(arr);
    for (let item of arr) {
        console.log(item);
    };
 };

// 3
 for (let i = 0; i < multArray.length; i++) {
    if (i<multArray.length) {
        console.log(multArray[i]);
    } else {
        break; 
    };
 };


// Задание 5
 const addNumb = [1, 1, 1];
 addNumb.push(2, 2, 2);
 console.log(addNumb);


// Задание 6
const numbsLetter = [9, 8, 7, 'a', 6, 5];

// 1
numbsLetter.sort();
numbsLetter.pop();
console.log(numbsLetter);

// 2
numbsLetter.sort();
const filtered = numbsLetter.filter(number=>Number(number));
console.log(filtered);


// Задание 7
const ourNumbers = [9, 8, 7, 6, 5];

// 1
function guessWord() {

    for (let i = 0; i < ourNumbers.length;) {
        let userNumber = Number(prompt(`Угадай число и напиши его`));
        if (!ourNumbers.includes(userNumber)) {
            alert(`Не угадал`);  
        } else {
            alert(`Угадал`);  
            break;
        };
    };
};

guessWord();

// 2
// function guessWord() {
//     let userNumber = Number(prompt(`Угадай число и напиши его`));

//     if (!ourNumbers.includes(userNumber)) {
//         alert(`Не угадал`);  
//     } else {
//             alert(`Угадал`);
//     };
// };

// guessWord();


// Задание 8
const letters = 'abcdef';
const newLetters = letters.split('');
const reverse = newLetters.reverse('');
const reverseString = reverse.join('');
console.log(reverseString);


// Задание 9
const twoArrs = [[1, 2, 3],[4, 5, 6]];

const merged = [...twoArrs[0], ...twoArrs[1]];
console.log(merged);


// Задание 10
const math = [4, 8, 1, 6, 7];

for (let i = 0; i < math.length-1; i++) {
  const sumMath = math[i]+math[i+1];
  console.log(sumMath);
};


// Задание 11
// 1
function square([l,k,h]) {
   return [l**2 ,k**2, h**2];
};
console.log(square([2, 5, 6]));

// 2
const sqArr = [2, 5, 6];

const mapSqArr = sqArr.map(numb=>numb**2);
console.log(mapSqArr);


// Задание 12
const arrString = [`Массив`, `строк`];

const mapArrString = arrString.map(el=>el.length);
console.log(mapArrString);


// Задание 13
const diffNumbs = [54, 1, 0, -10, 15, -2, 20, 4, -50];

const filteredNumbs = diffNumbs.filter(item=>item<0);
console.log(filteredNumbs);


// Задание 14
let randomNumbers = [];

for (let i = 0; i < 10; i++) {
    randomNumbers[i]=Math.floor(Math.random()*(10-0+1))+0;
}

let evenNumbers = randomNumbers.filter(even => even%2===0);

console.log(randomNumbers);
console.log(evenNumbers);


// Задание 15
let randomNumber = [];

for (let i = 0; i < 6; i++) {
    randomNumber[i]=Math.floor(Math.random()*(10-1+1))+1;
}

let mean = randomNumber.reduce((total,number)=>total+number,0)/randomNumber.length;

console.log(randomNumber);
console.log(mean);













// ----------------------------------------практика, лекции и прочее---------------------------------------------------------------



// function getRandomNumber(min, max) {
//     let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//     return randomNumber;
// };

// console.log(getRandomNumber(10, 50));
 


// let emotions = ['😄', '😢', '😡', '😱', '😍', '🤔'];

// for (let i = 0; i < emotions.length; i++) {
//     let randomEmotions = Math.floor(Math.random()*emotions.length);
//     alert(emotions[randomEmotions]);
// }


// let emotions = ['😄', '😢', '😡', '😱', '😍', '🤔'];
// let randomEmotions = Math.floor(Math.random()*emotions.length);

// for (let i = 0; i < emotions.length; i++) {
//     alert(emotions[i]);
// }


// let colors = ['red', 'green', 'blue', 'yellow', 'pink'];
// let randomColor = Math.floor(Math.random()*colors.length);
// console.log(colors[randomColor]);


// 💬 Формула для любого диапазона [min, max]:
// Math.floor(Math.random() * (max - min + 1)) + min;


// randomN = Math.floor(Math.random() * (15 - 5 + 1))+5;
// console.log(randomN);


// randomN = Math.floor(Math.random()*10)+1;
// console.log(randomN);











// const ages = [11, 18, 10, 17, 21, 31, 16];
// console.log(ages);

// const filteredAges = ages.filter(age => age >= 12);
// console.log(filteredAges);




// // вот этот вариант очень понравился
// const newspaper = {
//     sports: {
//         title: 'ARod Hits Home Run',
//         writers: ['Miramon Nuevo', 'Rick Reilly', 'Woddy Paige'],
//     },
//     business: {
//         title: 'GE Stock Dips Again',
//         writers: ['Adam Smith', 'Albert Humphrey', 'Charles Handy'],
//     },
//     movies: {
//         title: 'Superman Is A Flop',
//         writers: ['Rogert Ebert', 'Andrew Sarris', 'Wesley Morris'],
//     },
//  };

// console.log(newspaper['sports']['title']);
// console.log(newspaper['business']['writers'][1]);



//  function showWholePaper() {
//     for (const key in newspaper) {
//       console.log(`${newspaper[key]['title']}`);
//       console.log(`${newspaper[key]['writers'].join(', ')}`);
//     }
// }

// console.log(showWholePaper());





// // вот этот вариант очень понравился
// const book = [
//     { name: 'foreword', pageCount: 14 },
//     { name: 'boyWhoLived', pageCount: 18 },
//     { name: 'vanishingGlass', pageCount: 13 },
//     { name: 'lettersFromNoOne', pageCount: 17 },
//     { name: 'afterword', pageCount: 19 },
//  ];

//  console.log(book.findIndex(item=> item.pageCount===17));

//  console.log(book.forEach((el)=>{
//     console.log(el);
//  }));

// function showWholeBook() {
//     for (let i = 0; i < book.length; i++) {
//         console.log(`Глава ${book[i]['name']}`);
//         console.log(`  Количество страниц ${book[i]['pageCount']}`);
//     }
// }

// console.log(showWholeBook());






// spread это три точечки типа
// let arrSum = [7,10]

// const funcSum = (a,b) =>{
//     return a+b;
// }
// console.log(funcSum(...arrSum));


// rest это три точечки типа
// let arrSum = [7,10,1,3]

// const funcSum = (a,b,...arrSumRest) =>{
//     console.log(a+b);
//     console.log(arrSumRest);
// }
// console.log(funcSum(...arrSum));





// // вот этот вариант очень понравился
// let catalog = [
//     ['Столы', 'Дорогой стол', 'Большой стол'],
//     ['Диваны', 'Красный диван', 'Белый диван'],
//     [1,2,3,4,10,20]
//  ]

//  for (let catalogIn of catalog) {
//     console.log(catalogIn);
//     for (let item of catalogIn) {
//         console.log(item);
//         if (typeof item === 'string' && item.length > 1) {
//             for (let itemIn of item) {
//                 console.log(itemIn);
//             }
//         }
//     }
//  }

// for (let catalogIn of catalog) {
//     console.log('Категория:');
//     for (let item of catalogIn) {
//         console.log('  Элемент:', item);
//         if (typeof item === 'string' && item.length > 1) {
//             for (let itemIn of item) {
//                 console.log('    Символ:', itemIn);
//             }
//         }
//     }
// }








// for (let catalogIn of catalog) {
//     for (let i=0; i<catalogIn.length; i++) {
//           if (i===0) {
//             console.log(`Категория ${catalogIn[i]}`);
//           } else {
//             console.log(`${catalogIn[i]}`);
//           }
//     }
    
// }






// function mergeAndSort([3, 5, 2], [5, 8, 1]) {
    
// переделать подумать с воркшопа}






// let song = `на-маленьком-плоту`;
// song = song.split(`-`);
// console.log(song);

// song = song.join(` `);
// console.log(song);







// ------------ТРЕНИРОВАЛАСЬ С ПОХОЖЕЙ ЗАДАЧЕЙ (как в предыдущей домашке была "угадай число")-------------------------

// const words = ["яблоко", "банан", "груша", "апельсин"];
// const ourWord = words[2];

// function guessWord() {
//     let userWord = prompt(`Попробуйте угадать слово и напишите его`);
   
//     while (true) {
//         if (!words.includes(userWord)){
//             alert(`Такого слова в списке не было - извини(`)
//         } else if (userWord===words[0]){
//             alert(`🔼 Загаданное слово раньше по алфавиту`);
//         } else if (userWord===words[1] || userWord===words[3]) {
//             alert(`🔽 Загаданное слово позже по алфавиту`);
//         } else if (userWord===ourWord) {
//             alert(`✅ Правильно!`);
//             break;
//         }
//         userWord = prompt(`Попробуйте еще раз:`);
//     }
// }

// guessWord();









// const words = ["яблоко", "банан", "груша", "апельсин"];
// const ourWord = words[2];

// function guessWord() {
//     let userWord = prompt(`Попробуйте угадать слово и напишите его`);
   
//     while (true) {
//         if (userWord===words[1] || userWord===words[3]) {
//             alert(`🔽 Загаданное слово позже по алфавиту`);
//         } else if (userWord===words[0]){
//             alert(`🔼 Загаданное слово раньше по алфавиту`);
//         } else if (!words.includes(userWord)){
//             alert(`Такого слова в списке не было - извини(`);
//         } else if (userWord===ourWord) {
//             alert(`✅ Правильно!`);
//             break;
//         }
//         userWord = prompt(`Попробуйте еще раз:`);
//     }
// }

// guessWord();



// ВОТ ЭТО НЕ РАБОТАЕТ, НАРУШЕНА ЛОГИКА ПРИОРИТЕТОВ УСЛОВИЙ ЧТО-ТО ТАМ
// СНАЧАЛА ПРОВЕРЯЕТ АЛФАВИТНЫЙ ПОРЯДОК, ПРОЛУЧАЕТСЯ ХЕРНЯ
// const words = ["яблоко", "банан", "груша", "апельсин"];
// const ourWord = words[2];

// function guessWord() {
//     let userWord = prompt(Попробуйте угадать слово и напишите его);
   
//     while (true) {
//         if (userWord < ourWord) {
//             alert(🔽 Загаданное слово позже по алфавиту);
//         } else if (userWord > ourWord){
//             alert(🔼 Загаданное слово раньше по алфавиту);
//         } else if (!words.includes(userWord)){
//             alert(Такого слова в списке не было - извини();
//         } else if (userWord===ourWord) {
//             alert(✅ Правильно!);
//             break;
//         }
//         userWord = prompt(Попробуйте еще раз:);
//     }
// }

// guessWord();



// const words = ["яблоко", "банан", "груша", "апельсин"];
// const ourWord = words[2]; // груша

// function guessWord() {
//   let userWord = prompt("Попробуйте угадать слово и напишите его");

//   while (true) {
//     if (!words.includes(userWord)) {
//       alert("Такого слова в списке не было - извини!");
//     } else if (userWord === ourWord) {
//       alert("✅ Правильно!");
//       break;
//     } else if (userWord < ourWord) {
//       alert("🔼 Загаданное слово позже по алфавиту");
//     } else if (userWord > ourWord) {
//       alert("🔽 Загаданное слово раньше по алфавиту");
//     }

//     userWord = prompt("Попробуйте еще раз:");
//   }
// }

// guessWord();