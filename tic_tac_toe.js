let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#Reset");
let newGameBtn = document.querySelector("#New");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg"); 

let turnO = true;
let count = 0;
let win = false;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
    if(turnO){
        box.innerText = "O";
        turnO = false;
        box.style.color = "blue";
    }
    else{
        box.innerText = "X";
        turnO = true;
        box.style.color = "#FF2E63";
    }
    box.disabled = true;
    count++;
    console.log(count);
    checkWinner();
    checkDraw();
    })
})

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disableBoxes = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
} 

const enableBoxes = () => {
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations!!!, winner is ${winner}.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText; 
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                win = true;
                showWinner(pos1val);
            }
        }
    }
}

const checkDraw = () =>{
    if(count === 9 && (!win)){
        msg.innerText = `It is a draw.`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);