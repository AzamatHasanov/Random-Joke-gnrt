let timer;
let seconds = 0;
let isRunning = false;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

// Time formatting function
function formatTime(sec) {
    let hours = Math.floor(sec / 3600);
    let minutes = Math.floor((sec % 3600) / 60);
    let seconds = sec % 60;

    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    return `${hours}:${minutes}:${seconds}`;
}

// Start the stopwatch
startButton.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            display.textContent = formatTime(seconds);
        }, 1000);
    }
});

// Stop the stopwatch
stopButton.addEventListener('click', () => {
    isRunning = false;
    clearInterval(timer);
});

// Reset the stopwatch
resetButton.addEventListener('click', () => {
    isRunning = false;
    clearInterval(timer);
    seconds = 0;
    display.textContent = formatTime(seconds);
});