let gameSeq = [];
let userSeq = [];
let gameStart = false;
let level = 0;

let btnList = ["red", "yellow", "green", "purple"];





function genrateBtn() {
    let idx = Math.floor(Math.random() * 3);
    let dClass = btnList[idx];
    let btn = document.querySelector(`.${dClass}`);

    gameFlash(btn);
    let id = btn.getAttribute("id");
    //    console.log(btn);
    console.log("---id", id);
    gameSeq.push(id);
    console.log("---game", gameSeq);

}

function gameFlash(e) {
    e.classList.add("gameFlash");

    setTimeout(function () {
        e.classList.remove("gameFlash");
    }, 250);



}
function userFlash(e) {
    e.classList.add("userFlash");

    setTimeout(function () {
        e.classList.remove("userFlash");
    }, 250);

}
function warnFlash(e) {
    e.classList.add("warnFlash");

    setTimeout(function () {
        e.classList.remove("warnFlash");
    }, 250);

}





function pressButton() {
    if (gameStart == true) {
        let btn = this;
        //  userFlash(btn);


        // console.log(btn.getAttribute("id"));
        userSeq.push(btn.getAttribute("id"))
        console.log("---user", userSeq);
        checkAns(btn);

    }
    else{
        levelUp();
        gameStart = true;
    }

}

function checkAns(btn) {
    if (gameSeq.length == userSeq.length) {
        if (gameSeq[gameSeq.length - 1] == userSeq[userSeq.length - 1]) {
            levelUp();
            console.log("correct");
            userSeq=[];
        }
        else {
            warnFlash(btn);
            gameEnd();
        }
    }
    else {
        if (gameSeq[userSeq.length - 1] == userSeq[userSeq.length - 1]) {
            userFlash(btn);
        }
        else{
            warnFlash(btn);
            gameEnd();
        }
    }

}


function gameEnd() {
    alert(`You scored ${level}`);
    userSeq = [];
    gameSeq = [];
    level = 0;
    gameStart = false;
    let p = document.querySelector("p");
    p.innerText = "Press any Key to Start the Game";
    console.log("-----end-------");
}

let btns = document.querySelectorAll(".btn");
for (btn of btns) {
    btn.addEventListener("click", pressButton);
}

function levelUp() {
    
        console.log("--------------------------level up---------------------------------");
        level++;
        let p = document.querySelector("p");
        p.innerText = `Leval : ${level}`;
        genrateBtn();



}



