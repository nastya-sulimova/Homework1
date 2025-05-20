// Угадай число
const playButton=document.querySelectorAll(".mini-games__link_click-1, .mini-games__link_click-1-mobile");

playButton.forEach(button => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    guessNumber();
  });
});

function guessNumber() {
    const number=Math.floor(Math.random()*(100-1+1))+1;
    let userNumber;

    while (true) {
        userNumber=Number(prompt("Угадай число от 1 до 100:"));
        if (userNumber < 1 || userNumber > 100 || isNaN(userNumber)) {
            alert("Упс! Нужно ввести число от 1 до 100.");
        } else if (userNumber < number) {
            alert("Загаданное число больше. Попробуй ещё раз.");
        } else if (userNumber > number) {
            alert("Загаданное число меньше. Попробуй ещё раз.");
        } else if ((userNumber) === number){
            alert("Ты угадал! 🎉");
            break;
        }
    }
}

// Простая арифметика
const playButtons=document.querySelectorAll(".mini-games__link_click-2, .mini-games__link_click-2-mobile");
playButtons.forEach(button => {
  button.addEventListener("click",(event) => {
    event.preventDefault();
    startGame(); 
  });
});

function startGame() {
let userN1=Math.floor(Math.random() * 101);
let userN2=Math.floor(Math.random() * 101);
let operations=['+','-','*','/'];
let randomIndex=Math.floor(Math.random()*operations.length);
let action=operations[randomIndex];

alert(`${userN1} ${action} ${userN2}=?`);
result=Number(prompt(`Напиши ответ`));

if (action==='+') {
    correctAnswer=userN1+userN2;
} else if (action==='-') {
    correctAnswer=userN1-userN2;
} else if (action==='*') {
    correctAnswer=userN1*userN2;
} else if (action==='/') {
    correctAnswer=userN1/userN2;
}

if (correctAnswer===result) {
    alert("Молодец!");
} else {
    alert("Ошибка!");
}
  }

// Переверни текст
let turnTheTextOverClick=document.querySelectorAll(".mini-games__link_click-3, .mini-games__link_click-3-mobile");
turnTheTextOverClick.forEach(button=>{
    button.addEventListener("click", (turn)=>{
        turn.preventDefault();
        turnTheTextOver();
    });    
});

const turnTheTextOver = () => {
    let userText=prompt(`Напишите любой текст`);
    const isValid=/^.{1,10}$/.test(userText);

    if (isValid===true) {
        const userTextSplitted=userText.split(``);
        const userTextReversed=userTextSplitted.reverse();
        const userTextJoined=userTextReversed.join(``);
        alert(userTextJoined.toLowerCase());
    } else {
        alert(`Некорректный формат, попробуй еще раз`);
    }
};

// Викторина
let findQuiz=document.querySelectorAll(".mini-games__link_click-4, .mini-games__link_click-4-mobile");
findQuiz.forEach(button => {
    button.addEventListener('click', (quiz)=>{
        quiz.preventDefault();
        playTheQuiz();
    });
});

const playTheQuiz = () => {
    const quiz=[
        {
            question:"Какого цвета небо?",
            options:["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer:2
        },
        {
            question:"Сколько дней в неделе?",
            options:["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer:2
        },
        {
            question:"Сколько у человека пальцев на одной руке?",
            options:["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer:2
        }
    ];

    let correctCount=0;

    for (let i = 0; i < quiz.length; i++) {
        alert(`${quiz[i]["question"]}`);
        let userAnswer=prompt(`Напишите номер правильного ответа:
        ${quiz[i]["options"]}`);
        if (Number(userAnswer)===quiz[i]["correctAnswer"]) {
            correctCount++;
        }
    };
    alert(`Количество правильных ответов ${correctCount} из 3`);
};

// Камень, ножницы, бумага
let stonePaperScissors=document.querySelectorAll(".mini-games__link_click-5, .mini-games__link_click-5-mobile");
stonePaperScissors.forEach(button=>{
    button.addEventListener('click', (sps)=>{
        sps.preventDefault();
        playStonePaperScissors();
    });
});

const playStonePaperScissors = () => {
while (true) {
    const userChoice=prompt(`Ваша ставка: камень, ножницы или бумага?`);
    const options=["камень", "ножницы", "бумага"];
    const compChoiceIndex=Math.floor(Math.random()*3);
    const compChoice=options[compChoiceIndex];

    if (!options.includes(userChoice)) {
        alert(`Упс, такого варианта нет, попробуй написать еще раз!`); 
        continue;
    } else if (compChoice==="ножницы" && userChoice==="бумага"){
        alert(`Твой выбор: ${userChoice.toUpperCase()}, выбор компьютера: ${compChoice.toUpperCase()} 
            Ты проиграл, попробуй одолеть компьютер еще раз!`); 
    } else if (compChoice==="бумага" && userChoice==="камень"){
        alert(`Твой выбор: ${userChoice.toUpperCase()}, выбор компьютера: ${compChoice.toUpperCase()} 
            Ты проиграл, попробуй одолеть компьютер еще раз!`); 
    } else if (compChoice==="камень" && userChoice==="ножницы"){
        alert(`Твой выбор: ${userChoice.toUpperCase()}, выбор компьютера: ${compChoice.toUpperCase()} 
            Ты проиграл, попробуй одолеть компьютер еще раз!`); 
    } else if (userChoice===compChoice){
        alert(`Ничья!`); 
        break;
    } else {
        alert(`Ты победил, молодец!`); 
        break;
    };
}
}

// Генератор случайных цветов
const miniGamesEl=document.querySelector('.mini-games');
const changeColorBtn=document.querySelectorAll('.mini-games__link_click-6, .mini-games__link_click-6-mobile');

const changeColor = () => {
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}

changeColorBtn.forEach(button=>{
    button.addEventListener("click",event=>{
        event.preventDefault();
        miniGamesEl.style.backgroundImage="none";
        miniGamesEl.style.backgroundColor=changeColor();
    })
})