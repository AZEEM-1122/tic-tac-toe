let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector('#reset')
let newgamebtn = document.querySelector('#new-btn')
let msgconatiner = document.querySelector('.msg-container')
let msg = document.querySelector('.msg')

let turnO = true; // player O
const winPattrens = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame = () => {
    turnO = true;
    enabled()
    msgconatiner.classList.add('hide')
}
boxes.forEach( (box) => {
    box.addEventListener('click',() => {
        if(turnO === true){
            box.innerHTML = 'O';
            turnO = false;
            if(turnO === false){
                box.setAttribute('style','color:aqua')
            }
        }else{
              box.innerHTML = 'X'
              box.setAttribute('style','color:yellow')
              turnO = true;
        
        }
     box.disabled = true;
     checkWinner()
    })
});

const disabled = () => {
    for(let box of boxes){
        box.disabled = true
    }
}

const enabled = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
}

const showwinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgconatiner.classList.remove("hide");
    disabled()
}
const checkWinner = () => {
   for(let pattren of winPattrens){
     let pos1val = boxes[pattren[0]].innerText;
     let pos2val = boxes[pattren[1]].innerText;
     let pos3val = boxes[pattren[2]].innerText;

     if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val === pos2val && pos2val === pos3val){
            showwinner(pos1val)
        }
     }
   }     
}

newgamebtn.addEventListener('click',resetgame);
resetBtn.addEventListener('click',resetgame)