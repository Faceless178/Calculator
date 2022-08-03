const numberEl = document.querySelector('.number')
let number = 0;
let timerId;

const btnStart = document.querySelector('.start');
btnStart.onclick = function() {
    timerId = setInterval(function() {
        number++;
        numberEl.innerText = number;
    }, 1000);
}

const btnStop = document.querySelector('.stop');
btnStop.onclick = function() {
    clearInterval(timerId);
}

const btnReset = document.querySelector('.reset');
btnReset.onclick = function() {
    number = 0;
    numberEl.innerText = 0;
    clearInterval(timerId);
}


