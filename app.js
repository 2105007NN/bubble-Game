
var score = 0;
var timer = 60;


function makeBubble() {
    let panelBtm = document.querySelector(".panelBtm");
    panelBtm.innerHTML = "";
    for (let i = 1; i <= 96; i++) {
        let bubble = `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
        panelBtm.innerHTML += bubble;
    }
}

function setTimer() {
    const countDown = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else {
            clearInterval(countDown);
            document.querySelector(".panelBtm").innerHTML = `<h1> GAME OVER <br> SCORE IS ${score}`;
        }
    }, 1000);
}

function getNewHit() {
    let rn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = rn;
}


function updateScore() {
    score += 10;
    document.querySelector("#score").textContent = score;
}

function newGame() {
    makeBubble();
    setTimer();
    getNewHit();
}

newGame();


document.querySelector(".panelBtm").addEventListener("click", (details) => {
    let hitVal = parseInt(document.querySelector("#hitVal").textContent);
    let bubbleVal = parseInt(details.target.textContent);
    if (timer > 0) {
        if (bubbleVal === hitVal) {
            updateScore();
            getNewHit();
            makeBubble();
        }
        else {
            makeBubble();
            getNewHit();
        }
    }

});














