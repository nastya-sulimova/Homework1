let stonePaperScissors = document.querySelectorAll(".mini-games__link_click-5, .mini-games__link_click-5-mobile");

stonePaperScissors.forEach(button=>{
    button.addEventListener('click', (sps)=>{
        sps.preventDefault();
        playStonePaperScissors();
    });
});


const playStonePaperScissors = () => {

while (true) {
    const userChoice = prompt(`Ваша ставка: камень, ножницы или бумага?`);

    const options = ["камень", "ножницы", "бумага"];

    const compChoiceIndex = Math.floor(Math.random()*3);
    const compChoice = options[compChoiceIndex];

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






// for (let i = 0; i < options.length; i++) {
//     const userChoice = prompt(`Ваша ставка: камень, ножницы или бумага?`);

//     if (compChoice==="камень" && userChoice==="ножницы") {
//         alert(`Твой выбор: ${userChoice.toUpperCase()}, выбор компютера: ${compChoice.toUpperCase()} 
//             Ты проиграл, поробуй одолеть компьютер еще раз!`); 
//     } else if (compChoice==="ножницы" && userChoice==="бумага"){
//         alert(`Твой выбор: ${userChoice.toUpperCase()}, выбор компютера: ${compChoice.toUpperCase()} 
//             Ты проиграл, поробуй одолеть компьютер еще раз!`); 
//     } else if (compChoice==="бумага" && userChoice==="камень"){
//         alert(`Твой выбор: ${userChoice.toUpperCase()}, выбор компютера: ${compChoice.toUpperCase()} 
//             Ты проиграл, поробуй одолеть компьютер еще раз!`); 
//     } else if (!options.includes(userChoice)){
//         alert(`Упс, такого варианта нет, поробуй написать еще раз!`); 
//     } else if (userChoice===compChoice){
//         alert(`Ничья!`); 
//         break;
//     } else {
//         alert(`Ты победил, молодец!`); 
//         break;
//     };
// }







// const userChoice = prompt(`Ваша ставка: камень, ножницы или бумага?`);

// const options = ["камень", "ножницы", "бумага"];

// const compChoiceIndex = Math.floor(Math.random()*3);

// compChoice = options[compChoiceIndex];
// // console.log(compChoice);


// for (let i = 0; i < options.length; i++) {
//     if (compChoice==="камень" && userChoice==="ножницы") {
//         console.log(`Ты проиграл, поробуй одолеть компьютер еще раз!`); 
//     } else if (compChoice==="ножницы" && userChoice==="бумага"){
//         console.log(`Ты проиграл, поробуй одолеть компьютер еще раз!`); 
//     } else if (compChoice==="бумага" && userChoice==="камень"){
//         console.log(`Ты проиграл, поробуй одолеть компьютер еще раз!`); 
//     } else if (userChoice===compChoice){
//         console.log(`Ничья!`); 
//         break;
//     } else {
//         console.log(`Ты победил, молодец!`); 
//         break;
//     };
// }






// if (userChoice===compChoice) {
//     console.log(`Ничья!`); 
// } else if (userChoice==="камень" && compChoice==="ножницы"){
//     console.log(`Ты победил, молодец!`); 
// } else if (userChoice==="ножницы" && compChoice==="бумага"){
//     console.log(`Ты победил, молодец!`); 
// } else if (userChoice==="бумага" && compChoice==="камень"){
//     console.log(`Ты победил, молодец!`); 
// } else {
//     console.log(`Ты проиграл, поробуй одолеть компьютер еще раз!`); 
// };


