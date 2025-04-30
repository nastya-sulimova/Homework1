// 6 попытка - итоговый результат 
// не до конца понимаю преимущество именно такой проверки (через action) 
// ведь количетсво строчек кода даже немного увеличивается, но как-то так
//

let userN1=Math.floor(Math.random() * 101);
let userN2=Math.floor(Math.random() * 101);

let operations = ['+', '-', '*', '/'];
let randomIndex = Math.floor(Math.random()*operations.length);
let action = operations[randomIndex];


alert(`${userN1} ${action} ${userN2}=?`);

result = Number(prompt(`Напиши ответ`));

if (action==='+') {
    correctAnswer = userN1+userN2;
} else if (action==='-') {
    correctAnswer = userN1-userN2;
} else if (action==='*') {
    correctAnswer = userN1*userN2;
} else if (action==='/') {
    correctAnswer = userN1/userN2;
}

if (correctAnswer===result) {
    alert("Молодец!");
} else {
    alert("Ошибка!");
}



// 5 попытка - чат объяснил, как использовать Math.random() (прикольная штука, потом потренировалсь по его мини-тренажеру) 
// меня уже все устроило, как работает программа, но чату не очень нравилась моя проверка 
// типа я перебираю все варианты
//

// let userN1=Math.floor(Math.random() * 101);
// let userN2=Math.floor(Math.random() * 101);

// let operations = ['+', '-', '*', '/'];
// let randomIndex = Math.floor(Math.random()*operations.length);
// let action = operations[randomIndex];

// alert(`${userN1} ${action} ${userN2}=?`);

// result = Number(prompt(`Напиши ответ`));

// if (userN1+userN2===result) {
//     alert("Молодец!");
// } else if (userN1-userN2===result) {
//     alert("Молодец!");
// } else if (userN1*userN2===result) {
//     alert("Молодец!");
// } else if (userN1/userN2===result) {
//     alert("Молодец!");
// } else {
//     alert("Ошибка!");
// }



// 4 попытка - уже с чатом GPT (описала от и до, что учусь 4 месяца, прошла такие-то темы, такая-то задача; 
// хочу не готовое решение для списывания, а подсказки, чтобы я догадалась сама)
//

// let userN1=Math.random('0-100');
// let userN2=Math.random();

// let action = Math.random(['+', '-', '*', '/']);

// alert(${userN1} ${action['']} ${userN2}=?);

// result = Number(prompt(Напиши ответ));

// if (userN1+userN2===result) {
//     alert("Молодец!");
// } else if (userN1-userN2===result) {
//     alert("Молодец!");
// } else if (userN1*userN2===result) {
//     alert("Молодец!");
// } else if (userN1/userN2===result) {
//     alert("Молодец!");
// } else {
//     alert("Ошибка!");
// }



// 3 моя самостоятельная попытка
//

// let resultSum=12;

// function funcArthm() {
    
//         sum=alert(`Сложи 5 и 7`);
//         if (resultSum===Number(prompt(`Напиши ответ:`))) {
//             alert(`Верно!`);
//         } else {
//             alert(`Неверно!`);
//         } 
// }

// funcArthm();



// 2 моя самостоятельная попытка
// 

// let userN1;
// let userN2;

// function funcArthm() {
//     for (let i = 0; i < funcArthm.length; i++) {
//         sum=alert(`Сложи 5 и 7`);
//         resultSum;
//         if (resultSum===prompt(`Напиши ответ:`)) {
//             alert(`Верно!`);
//         } else {
//             alert(`Неверно!`);
//         }
        
        
//     }
// }

// funcArthm();



// 1 моя самостоятельная попытка хотя бы с чего-то начать
// 

// let arrArthm = [7,10]

// const funcArthm = (a,b) =>{
//     resultSum = a+b;
//     resultSub = a-b;
//     resultMult = a*b;
//     resultDiv = a/b;

//     return [resultSum, resultSub, resultMult, resultDiv];
// }
// console.log(funcArthm(...arrArthm));