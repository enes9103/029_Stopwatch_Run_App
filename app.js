
const getSeconds = document.querySelector('.seconds');
const getMilliseconds = document.querySelector('.milliseconds');
const getMinutes = document.querySelector('.mins');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const stop = document.querySelector('.stop');
const video = document.querySelector(".video");
let seconds = 00;
let milliseconds = 00;
let minutes = 00;
let interval;


start.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
    start.style.display = "none";
    pause.style.display = "block";
    video.play()
})
pause.addEventListener('click', () => {
    pause.style.display = "none";
    start.style.display = "block";
    clearInterval(interval);
    video.pause()
})
stop.addEventListener('click', () => {
    clearInterval(interval);
    milliseconds = '00';
    seconds = '00';
    minutes = '00';
    getSeconds.innerHTML = seconds;
    getMilliseconds.innerHTML = milliseconds;
    getMinutes.innerHTML = minutes;
    pause.style.display = "none";
    start.style.display = "block";
    video.pause()
})

function startTimer(){
    milliseconds++;
    milliseconds <= 9 ? getMilliseconds.innerHTML = '0' + milliseconds : getMilliseconds.innerHTML = milliseconds;
    if(milliseconds > 99){
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        milliseconds = 0;
        getMilliseconds.innerHTML = '0' + 0;
    }
    if(seconds > 9){
        getSeconds.innerHTML = seconds;
    }
    if(seconds > 59){
        minutes++;
        getMinutes.innerHTML = '0' + minutes;
        seconds = 0;
        getSeconds.innerHTML = '0' + 0;
    }
    if(minutes > 9){
        getSeconds.innerHTML = minutes;
    }
}

function playVid() {
    video.play();
}

function pauseVid() {
    video.pause();
}