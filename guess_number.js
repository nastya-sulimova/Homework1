function guessNumber() {
    const number = 57;
    let userNumber;

    while (true) {
        userNumber = Number(prompt("Угадай число от 1 до 100:"));

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

guessNumber();





