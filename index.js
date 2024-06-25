const boxes=document.querySelectorAll(".box");
const gameinfo=document.querySelector(".game-info");
const newgamebtn=document.querySelector(".btn");

let currentplayer;
let gamegrid;

const winningPosition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];

//lets create a function to initialise the game
function initGame() {
    currentplayer="X";
    
    gamegrid=["","","","","","","","",""];
    newgamebtn.classList.remove("active");
    gameinfo.innerText= "current player- ", currentplayer;
}

initGame();
function handleClick(index){
    if(gamegrid[index]=== "" ){
        boxes[index].innerText=currentplayers;
        gamegrid[index]=currentplayer;
        swapTurn();
        checkGameover();
    }
}
boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        handleClick(index);
    })
})
