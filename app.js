let gameSeq = [];
let userSeq = [];

let btns = ["red","yellow","green","purple"];

let started = false;
let level = 0;
let highest = 0;

let h2 = document.querySelector("h2");
let high = document.querySelector("#highest");

document.addEventListener("keypress",function () {
    if(!started) {
        console.log("Game Started");
        started = true;

        levelUp();
    };
});

function flashBtn(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },300);
};

function userFlashBtn(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    },300);
};


function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let rndmIdx = Math.floor(Math.random()*4);
    let rndmColor = btns[rndmIdx];
    let rndmBtn = document.querySelector(`.${rndmColor}`);
    gameSeq.push(rndmColor);
    console.log(gameSeq);
    flashBtn(rndmBtn);
}

function checkAns(idx) {
    if(gameSeq[idx] === userSeq[idx]) {
        if(gameSeq.length == userSeq.length) {
            setTimeout(levelUp,1000);
        }
    } else {
        h2.innerText = `Game Over! Your score is ${level} Press any key start again.`;
        document.querySelector(".purple").classList.add("error");
        document.querySelector(".red").classList.add("error");
        document.querySelector(".yellow").classList.add("error");
        document.querySelector(".green").classList.add("error");

setTimeout(() => {
    document.querySelector(".purple").classList.remove("error");
    document.querySelector(".red").classList.remove("error");
    document.querySelector(".yellow").classList.remove("error");
    document.querySelector(".green").classList.remove("error");
},150);
        
        if(level > highest) {
            highest = level;
        }
        high.innerText = `You Highest Score is ${highest}`;
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlashBtn(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function reset() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}