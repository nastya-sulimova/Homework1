// Задание 1
let a = 10;
alert(a);

a = 20;
alert(a);

// Задание 2
let launchYear = 2007;
alert (`Год выпуска первого iPhone ${launchYear}`);

// Задание 3
let creatorName = `Брендан Эйх`;
alert (`Имя создателя языка JavaScript ${creatorName}`)

// Задание 4
let A = 10;
let B = 2;
alert(`сумма переменных ${A + B}`);
alert(`разность переменных ${A - B}`);
alert(`произведение переменных ${A * B}`);
alert(`частное переменных ${A / B}`);

// Задание 5
let result = 2 ** 5;
alert (`2 в 5-ой степени = ${result}`);

// Задание 6
let c = 9;
let d = 2;
alert(`остаток от деления переменных ${c % d}`);

// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

// Задание 8
let age = (prompt`Сколько вам лет?`);
alert(age);

// Задание 9
let user = {
    name: `Василий Иванович`,
    age: 35,
    isAdmin: true
};

// Задание 10
let userName = (prompt`Какое ваше имя?`);
alert(`Привет, ${userName}!`);


// Дополнительное задание
let number = (prompt`Загадайте и напишите любое число`);
mult = number * 2;
alert(mult);
addition = mult + 10;
alert(addition);
division = addition / 2;
alert(division);
result = division - number;
alert(`Ответ равен ${result}`);
