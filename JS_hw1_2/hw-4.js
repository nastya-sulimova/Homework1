// Задание 1
let greet = 1;

while (greet <=2) {
   console.log(`Привет`);
   greet++;
}

// Задание 2
let numbers = 1;

while (numbers <=5) {
   console.log(numbers);
   numbers++;
}

// Задание 3
let number = 7;

while (number >=7 && number <=22) {
   console.log(number);
   number++;
}

// Задание 4
const obj = {
   Коля: '200',
   Вася: '300',
   Петя: '400'
}

for (const key in obj) {
   console.log(`${key}: ${obj[key]}`);
}

// Задание 5
let n = 1000;
let num = 0;

while (n >=50) {
   n = n/2;
   num++;
}

console.log(`Результат: ${n}`);
console.log(`Количество итераций: ${num}`);

// Задание 6
let friday = 2;

while (friday<=31) {
   console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
   friday = friday+7;
}


// Дополнительные задания
// Задание 1
let k = 100;
let iterations = 0;

while (k>0) {
   k = k - 7;
   iterations++;
}

console.log(`Результат: ${k}`);
console.log(`Количество итераций: ${iterations}`);

// Задание 2
// массивы еще не проходили, поэтому сначала сделала вариант как с объектами,
// но на следующих заданиях поняла, что видимо это что-то другое - разбиралась с чатом gpt))

let months = ["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"];

for (let i = 0; i < months.length; i++) {
   console.log(`Месяц ${i + 1}: ${months[i]}`)
}


// let months = ["январь - 1","февраль - 2","март - 3","апрель - 4","май - 5","июнь - 6","июль - 7","август - 8","сентябрь - 9","октябрь - 10","ноябрь - 11","декабрь - 12"];

// for (let key in months) {
//       console.log(`${key}: ${months[key]}`);
//    }


// let months = {
//    январь: 1,
//    февраль: 2,
//    март: 3,
//    апрель: 4,
//    май: 5,
//    июнь: 6,
//    июль: 7,
//    август: 8,
//    сентябрь: 9,
//    октябрь: 10,
//    ноябрь: 11,
//    декабрь: 12
// }

// for (let key in months) {
//    console.log(`${key}: ${months[key]}`);
// }

// Задание 3
let book = {
   "название": `Преступление и наказание`,
   "автор": `Фёдор Михайлович Достоевский`,
   "год издания": `1866`,
   "жанр": `роман`
}

for (let key in book) {
   console.log(`${key}: ${book[key]}`);
}

// // Задание 4
let differentNumbers = [45, 78, 5, 879, 47, 941, -4589, 2, 68, 10];
let min = differentNumbers[0]; 

for (let i = 0; i < differentNumbers.length; i++) {
  if (differentNumbers[i]<min) {
    min = differentNumbers[i];
  }
}

console.log("Минимальное число:", min);











// while (result >=50) {
//    console.log(result);
//    divider *= 2;
// }




// do {
//    console.log(result);
//    divider *= 2;
// } while (result >= 50);








// const dog = {
//     name: 'Шарик',
//     breed: 'корги',
//     weight: 6,
//     age: 2
//  }
 
//  for (let key in dog) {
//     console.log(key, dog[key]);
//  }



// for (let i = 0; i < 10; i++) {
//     console.log(i);
//  }



// while(true) {
//     const msg = prompt('Введите ваше сообщение');
//     if (msg === 'continue') {
//         continue;
//      }
//      console.log(msg);
//      if (msg === 'break') {
//         break;
//      }

//  }
    
  

// let i = 0;
// let sum = 0;
// while(i < 10) {
//    i++;
//    if (i % 4 === 0) {
//       continue;
//    }
//    sum += i;
// }

// console.log(sum);



// while(true) {
//     const msg = prompt('Введите ваше сообщение');
//     console.log(msg);
//     if (msg === 'end') {
//        break;
//     }
//  }



// let i = 0;

// while (i <= 25) {
//     if (i == 3){
//         i++;
//      continue; // Пропускаем шаг печати, если i = 3
//      }
//     console.log(i);
//     i++;
// }



// let i = 0;

// while (i < 3) {
//     console.log(`Цикл while`);
//     i++;
// }



// let i = 0;

// do {
//     console.log(i);
//     i++;
//  } while(i <= 5);