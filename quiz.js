let findQuiz = document.querySelectorAll(".mini-games__link_click-4, .mini-games__link_click-4-mobile");

findQuiz.forEach(button => {
    button.addEventListener('click', (quiz)=>{
        quiz.preventDefault();
        playTheQuiz();
    });
});

const playTheQuiz = () => {
    
    // Массив вопросов и правильных ответов
    const quiz = [
        {
            question: "Какого цвета небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let correctCount = 0; // Счётчик правильных ответов

    for (let i = 0; i < quiz.length; i++) {
        
        alert(`${quiz[i]["question"]}`);
        let userAnswer = prompt(`Напишите номер правильного ответа:
        ${quiz[i]["options"]}`);


        if (Number(userAnswer) === quiz[i]["correctAnswer"]) {
            correctCount++;
        }
    };

    alert(`Количество правильных ответов ${correctCount} из 3`);

};





