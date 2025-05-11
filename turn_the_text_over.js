let turnTheTextOverClick = document.querySelectorAll(".mini-games__link_click-3, .mini-games__link_click-3-mobile");

turnTheTextOverClick.forEach(button=>{
    button.addEventListener("click", (turn)=>{
        turn.preventDefault();
        turnTheTextOver();
    });    
});

const turnTheTextOver = () => {
    let userText = prompt(`Напишите любой текст`);
    const isValid = /^.{1,10}$/.test(userText);

    if (isValid===true) {
        const userTextSplitted = userText.split(``);
        const userTextReversed = userTextSplitted.reverse();
        const userTextJoined = userTextReversed.join(``);
        alert(userTextJoined.toLowerCase());
    } else {
        alert(`Некорректный формат, попробуй еще раз`);
    }
};








// const turnTheTextOver = () => {
//     let userText = prompt(`Напишите любой текст`);
//     let isValid = /^.{1,10}$/.test(userText);

//     while (!/^.{1,10}$/.test(userText)) {
//         alert(`Некорректный формат, попробуй еще раз`);
//         userText = prompt(`Напишите любой текст`);
// }
//     const userTextSplitted = userText.split(``);
//     const userTextReversed = userTextSplitted.reverse();
//     const userTextJoined = userTextReversed.join(``);
//     alert(userTextJoined.toLowerCase());
    
// }
// turnTheTextOver();