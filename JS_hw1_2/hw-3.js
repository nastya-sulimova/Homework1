// Задание 1
let password = `topFrontDeveloper!`;
let passwordArea = prompt(`Введите пароль`);

if (passwordArea === password) {
    alert("Пароль введен верно");
} else {
    alert("Пароль введен неправильно");
}

// Задание 2
let c = 2157;

if (c>0 && c<10) {
    console.log(`Верно`);
} else {
    console.log(`Неверно`);
}

// Задание 3
let d = 228;
let e = 77;

if (d>100 || e>100) {
    console.log(`Верно`);
} else {
    console.log(`Неверно`);
}

// Задание 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));

// Задание 5
let monthNumber = String(prompt(`Напишите номер месяца или название и определите время года`));

switch (monthNumber) {
    case `1`:
    case `2`:
    case `12`:
    case `январь`:
    case `февраль`:
    case `декабрь`: 
        alert("зима");
        break;

    case `3`:
    case `4`:
    case `5`:
    case `март`:
    case `апрель`:
    case `май`: 
        alert("весна");
        break;

    case `6`:
    case `7`:
    case `8`:
    case `июнь`:
    case `июль`:
    case `август`: 
        alert("лето");
        break;

    case `9`:
    case `10`:
    case `11`:
    case `сентябрь`:
    case `октябрь`:
    case `ноябрь`: 
        alert("осень");
        break;

    default:
        alert(`Ошибка`)
        break;
}


// Дополнительные задания
// Задание 1 (четность/нечетность)
let number = Number(prompt(`Пожалуйста, введите любое число`));

if (number%2===0) {
    alert(`Число четное`);
} else {
    alert(`Число нечетное`);
}

// Задание 2 (iOS или Android)
let clientOS = 0;

if (clientOS === 0) {
    alert(`Установите версию приложения для iOS по ссылке`);
} else {
    alert(`Установите версию приложения для Android по ссылке`);
}

// Задание 3 (iOS или Android, 2015 год или ранее)
let ClientOS = 0;
let clientDeviceYear = 2015;


if (ClientOS === 0 && clientDeviceYear >= 2015) {
    alert(`Установите версию приложения для iOS по ссылке`);
} else if (ClientOS === 1 && clientDeviceYear >= 2015) {
    alert(`Установите версию приложения для Android по ссылке`);
} else if (ClientOS === 0 && clientDeviceYear < 2015) {
    alert(`Установите облегченную версию приложения для iOS по ссылке`);
} else if (ClientOS === 1 && clientDeviceYear < 2015) {
    alert(`Установите облегченную версию приложения для Android по ссылке`);
}




