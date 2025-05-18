const miniGamesEl = document.querySelector('.mini-games');
const changeColorBtn = document.querySelectorAll('.mini-games__link_click-6, .mini-games__link_click-6-mobile');

const backColor = ["red","blue","lightblue","grey","pink","orange","green","lightgreen","yellow","violet"];

changeColorBtn.forEach(button=>{
    button.addEventListener("click", event=>{
        event.preventDefault();
        miniGamesEl.style.backgroundImage = "none";
        miniGamesEl.style.backgroundColor = backColor[Math.floor(Math.random()*backColor.length)];
    })
})


