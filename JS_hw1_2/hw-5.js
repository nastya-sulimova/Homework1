// Задание 1
let min = (a, b) => {
    return a<b?a:b;
}

console.log(min(15, 7));


// Задание 2
let even = (n) => {
    if (n%2===0) {
        return console.log(`Число четное`);
    } else {
        return console.log(`Число нечетное`);
    }
}

even(5);


// Задание 3
let square1 = (c) => {
    console.log(c ** 2);
}

square1(9);


let square2 = (d) => {
    return (d ** 2);
}

square1(10);


// Задание 4
function nameAge() {
    let age = Number(prompt(`Скольво вам лет?`));

    if (age<0) {
        alert(`Вы ввели неправильное значение`);
    } else if (age>0 && age<=12) {
        alert(`Привет, друг!`);
    } else if (age>=13) {
        alert(`Добро пожаловать!`);
    }
}

nameAge();


// Задание 5
function checkNumber(e, f) {
    if (isNaN(e) || isNaN(f)) {
        return `Одно или оба значения не являются числом`;
    } else {
        return e*f;
    }
}

console.log(checkNumber(5, `-`));


// Задание 6
function checkAndCube() {
    let number = Number(prompt(`Введите любое число`)); 

    if (isNaN(number)) {
        return `Переданный параметр не является числом`;
    } else {
        return `${number} в кубе равняется ${number**3}`;
    }
}

console.log(checkAndCube());


// Задание 7
const p = 3.14;

function calcArea() {
    return p*(this.radius**2);
};
function calcPerimeter() {
    return p*this.radius*2;
   
}

 const circle1 = {
    radius: 10,
    getArea: calcArea,
    getPerimeter: calcPerimeter
 }

 const circle2 = {
    radius: 5,
    getArea: calcArea,
    getPerimeter: calcPerimeter
 }


 console.log(circle1.getArea ());
 console.log(circle1.getPerimeter ());

 console.log(circle2.getArea ());
 console.log(circle2.getPerimeter ());





// ------------------------------практика с уроков---------------------------------








// function multiply(a, b) {
//     let mult = a * b;
//     console.log(`Произведение двух чисел равняется ${mult}`);
// }
 
// multiply(2, 3);
// multiply(5, 3);
// multiply(10, 3);
// multiply(215, 3);
// multiply(2, 67);



// function setName(name='Пользователь') {
//     console.log(name);
// };

// setName('Петя');
// setName('');
// setName('Вася');





// // function add(a, b) {
// //     return a + b;
// //  }
 
// //  let sum = add(5, 3); // sum теперь равен 8
// //  console.log(sum);



// function difference(a, b) {
//     return a - b;
// };

// console.log(difference(4, 6));
// console.log(difference(7, 3));
// console.log(difference(5, 5));




// function sum(a, b) {
//     return a + b;
// };

// console.log(sum(4, 6));
// console.log(sum(7, 3));
// console.log(sum(5, 5));
 



// const puser = {
//     name: `Настюшка`,
//     age: 28,
//     city: `Псков`,
//     getInfo () {
//         return `Пользователь ${this.name}, возраст ${this.age}, проживает в городе ${this.city}`;
//     }
// }

// console.log(puser.getInfo());




// // const userA = {
// //     name: `Настюшка`,
// //     age: 28,
// //     city: `Псков`,
// //     getInfo: function () {
// //         console.log(`Пользователь ${userA.name}, возраст ${userA.age}, проживает в городе ${userA.city}`);
// //     }
// // }

// // user.getInfo();


// const dog1 = {
//     name: 'Шарик',
//     breed: 'корги',
//     weight: 6,
//     age: 2,
//     bark() {
//        console.log(`${this.name} лает: Гав!`);
//     }
//  }
 
//  const dog2 = {
//     name: 'Бобик',
//     breed: 'шпиц',
//     weight: 3,
//     age: 4,
//     bark() {
//        console.log(`${this.name} лает: Гав!`);
//     }
//  }
 
//  dog1.bark(); // Шарик лает: Гав!
//  dog2.bark(); // Бобик лает: Гав!





// function getRectangleArea() {
//     return this.width*this.height;
// };
// function getRectanglePerimeter() {
//     return this.width*2 + this.height*2;
// }

//  const square1 = {
//     width: 20,
//     height: 30,
//     getArea: getRectangleArea,
//     getPerimeter: getRectanglePerimeter
//  }

//  const square2 = {
//     width: 40,
//     height: 50,
//     getArea: getRectangleArea,
//     getPerimeter: getRectanglePerimeter
//  }



//  console.log(square1.getArea ());
//  console.log(square1.getPerimeter ());

//  console.log(square2.getArea ());
//  console.log(square2.getPerimeter ());


// //  Определение максимального из двух чисел

//  let max = (t, g) => {
//     return t>g? t: g; 
//  }

//  console.log(max(20, 17));



// //  function maxA(n, k) {
// //     if (n>k) {
// //         return n;
// //     } else {
// //         return k;
// //     }
// //  }

// //  console.log(maxA(15, 251));


// //  Проверка числа на четность

// function even(n) {
//     if (n%2 === 0) {
//         return `четное`;
//     } else {
//         return `нечетное`;
//     }
//  }

//  console.log(even(10));




// // Перевод из градусов Цельсия в градусы Фаренгейта
//  function celsiusToFahrenheit(celsius) {
// 	return (celsius * 9) / 5 + 32;
// }

// console.log(celsiusToFahrenheit(15)); 





// function arraysEqual(a, b) {
// 	if (a.length !== b.length) return false;
// 	for (let i = 0; i < a.length; i++) {
// 	if (a[i] !== b[i]) return false;
// }

// return true;
// }


// console.log(arraysEqual([1, 2], [1, 2]));






// // Функция для расчета итоговой суммы вклада
// function calculateTotalAmount(principalAmount, timeInYears, interestRate = 5) {
//     let interest = principalAmount * (interestRate / 100) * timeInYears; // вычисляем проценты на вклад
//     return principalAmount + interest; // возвращаем итоговую сумму вклада
//  }
 
//  let totalAmount1 = calculateTotalAmount(10000, 1); // используем функцию для расчета итоговой суммы вклада в 10000 на 1 год
//  console.log("Total amount after 1 year: " + totalAmount1); // выводим итоговую сумму вклада на консоль
 
//  let totalAmount2 = calculateTotalAmount(20000, 2); // используем функцию для расчета итоговой суммы вклада в 20000 на 2 года
//  console.log("Total amount after 2 years: " + totalAmount2); // выводим итоговую сумму вклада на консоль




// // Функция для вывода сообщения
// function handleClick() {
//     alert('Клик работает!');
// }


// // Первая функция для первой кнопки
// function handleFirstClick() {
//     alert('Вы нажали первую кнопку!');
// }

// // Вторая функция для второй кнопки
// function handleSecondClick() {
//     alert('Вы нажали вторую кнопку!');
// }

 