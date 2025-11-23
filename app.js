let gameSeq = [];
let userSeq = [];

let btns = ["red","yellow","green","purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

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
    level++;
    h2.innerText = `Level ${level}`;

    let rndmIdx = Math.floor(Math.random()*4);
    let rndmColor = btns[rndmIdx];
    let rndmBtn = document.querySelector(`.${rndmColor}`);
    gameSeq.push(rndmColor);
    console.log(gameSeq);
    flashBtn(rndmBtn);
}

function checkAns() {
    
}

function btnPress() {
    let btn = this;
    userFlashBtn(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click",btnPress);
}