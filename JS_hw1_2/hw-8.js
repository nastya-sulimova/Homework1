// Задание 1
const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));


// Задание 2
function isPositive(arrI) {
return arrI>0;
}
function isMale(person) {
return person.gender==='male';
}
function filter() {
// писать код тут
}

function filter(arr, ruleFunction) {
   const output = [];
   
   for (let i = 0; i < arr.length; i++) {
      if (ruleFunction(arr[i])) {
         output.push((arr[i]));
      }
   }
   return output;
}

const peoplE = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

   
console.log(filter([3, -4, 1, 9], isPositive));
console.log(filter(peoplE, isMale));
   

// Задание 3
const timer30Sec = (deadline)=>{
   const interval = setInterval(()=>{
      let myDate = new Date();
      console.log(myDate);
   },3000);

   setTimeout(() => {
      clearInterval(interval);
      console.log(`30 секунд прошло`);
   }, deadline);
}

timer30Sec(30000);


// Задание 4
function delayForSecond(callback) {
   // Код писать можно только внутри этой функции
   setTimeout(() => {
      callback();
   }, 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})


// Задание 5
// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
   setTimeout(() => {
       console.log('Прошла одна секунда');
       if(cb) {  cb(); }
   }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
   console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб')); 

   







// -----------------------------------------------------------------------------------------------------------

// // Практика. Работа с асинхронными операциями
// function uploadCompleted() {
//    console.log(`Загрузка файла успешно завершена`);

//    console.log(`Обработка файла...`);
//    setTimeout(() => {
//       console.log(`Файл обработан`);

//       console.log(`Сохранение файла...`);
//       setTimeout(() => {
//          console.log(`Файл успешно сохранен. Файл готов  к использованию!`);
//       }, 1000);
//    }, 2000);
// }

// function startUpload(callback) {
//    console.log(`Начало загрузки файла...`);

//    let progress = 0;
//    const intervalId = setInterval(() => {
//       progress += Math.floor(Math.random()*10)+5;
//       if (progress<100) {
//          console.log(`Прогресс: ${progress}%`);
//       }
      

//       if (progress>=100) {
//          clearInterval(intervalId);
//          console.log(`Прогресс: 100%`);
//          console.log(`Загрузка файла завершена!`);

//          if (callback) {
//             callback();
//          }
//       }
//    }, 2000);
// }

// startUpload(uploadCompleted);




// const timer = (deadline) => {
//    if (isNaN(+deadline)) { // + − приводим значение к number, если это NaN,
//       console.log('Передано некорректное число'); // выводим сообщение
//       return; // Выходим из функции
//    }

//    let time = deadline;
//    const interval = setInterval(() => {
//       console.log(time);
//       time -= 1;
//    }, 1000);

// setTimeout(() => {
//       clearInterval(interval);
//       console.log('Время истекло!')
//    }, deadline * 1000)
// };


// const deadline = prompt('На сколько секунд вы хотите поставить таймер?');
// timer(deadline);



// const timer = (deadline) => {
//    let time = deadline;
//       console.log(time);
//    const interval = setInterval(() => {
//    time -= 1;
//       console.log(time);
//    }, 1000);

//    setTimeout(() => {
//       clearInterval(interval);
//       console.log('Время истекло!')
//    }, deadline * 1000)
// };

// timer(4);




// const timer = (deadline) => {
//    const interval = setInterval(() => {
//       console.log(deadline);
//    }, 1000);

//    setTimeout(() => {
//    clearInterval(interval);
//       console.log('Время истекло!')
//    }, deadline * 1000)
// };

// timer(3);



// const timer = (deadline) => {
//    // Используем setInterval, чтобы функция выполнялась каждую секунду
//    setInterval(() => {
//    // Выводим полученный параметр "deadline" в консоль
//       console.log(deadline);
//    }, 1000); // Функция будет выполняться каждую секунду (1000 миллисекунд)
// };

// // Вызываем функцию "timer" и передаем ей в качестве аргумента число 3
// timer(3);




// // Повторить с интервалом 2 секунды
// let timerId = setInterval(() => alert('tick'), 2000);

// // Остановить вывод через 5 секунд
// setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);




// function showAd() {
//     alert('Купи наш лучший в мире продукт, только сейчас со скидкой 90%');
//  }
 
//  setTimeout(showAd, 1000 * 5);




// function square(number) {
//     return number * number;
//  }
 
//  function squareRoot(number) {
//     return Math.sqrt(number);
//  }
 
//  function map(arr, ruleFunction) {
//     const output = [];
 
//     for (let i = 0; i < arr.length; i++) {
//        output.push(ruleFunction(arr[i]));
//     }
 
//     return output;
//  }
 
//  console.log(map([1, 4, 9, 16], square)); // [ 1, 16, 81, 256 ]
//  console.log(map([1, 4, 9, 16], squareRoot)); // [ 1, 2, 3, 4 ]




// function callbackWithArrayLength(arr, callback) {
// 	// console.log(arr);
// 	/* Писать код тут */
//     callback(arr.length);
// }

// callbackWithArrayLength([1], (length) => {
// 	console.log(length);
// });

// callbackWithArrayLength([1, 1], (len) => {
// 	console.log(len);
// });
// callbackWithArrayLength([1, 1, 1, 1, 1], (l) => {
// 	console.log(l);
// });




// function log(arrItem) {
// 	console.log("Элемент массива:", arrItem);
// }

// function each(arr, cb) {
// 	for (let i = 0; i < arr.length; i++) {
// 		console.log(arr[i]);
// 	}
// }

// each(["Глеб", "Олег", "Татьяна", "Платон"], log);


// function log(arrItem) {
// 	console.log("Элемент массива:", arrItem);
// }

// function each(arr, cb) {
// 	for (let i = 0; i < arr.length; i++) {
// 		cb(arr[i]);
// 	}
// }

// each(["Глеб", "Олег", "Татьяна", "Платон"], log);





// function functionWithCallback(callback) {
//     callback();
//  }
 
//  const greet = () => {
//     console.log("Привет из именованной стрелочной функции");
//  };
 
//  functionWithCallback(greet); 
//  // Выведет в консоль «Привет из именованной стрелочной функции»



//  functionWithCallback(() => {
//     console.log("Привет из анонимной стрелочной функции");
//     // Выведет в консоль «Привет из анонимной стрелочной функции»
//  });




//  const greetS = (name, surname) => {
//     console.log(`Привет, ${name} ${surname}!`);
//  };
 
//  function functionWithoutCallback() {
//     greetS("Глеб", "Фокин");
//  }
 
//  functionWithoutCallback(); //Выведет в консоль «Привет, Глеб Фокин!»



//  const ggreet = (name, surname) => {
//     console.log(`Привет, ${name} ${surname}!`);
//  };
 
//  function functionWithoutCallback() {
//     ggreet("Глеб", "Фокин");
//  }
 
//  functionWithoutCallback(); //Выведет в консоль «Привет, Глеб Фокин!»