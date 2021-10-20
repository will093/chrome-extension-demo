import { state } from './app.js';

const countdownMinsEle = document.getElementById('countdownMins');
const countdownSecsEle = document.getElementById('countdownSecs');

console.log('started', state.started);
if (state.started) {
    setInterval(() => {
        console.log('running set interval');
        const now = Date.now();
        const timeRemaining = (state.started + state.pomodoroTime) - now;
        updateCountdownTimer(timeRemaining);
    }, 1000);
}

const onStart = () => {
    console.log('omg starteddddd');

    state.started = Date.now();

    const now = Date.now();
    const timeRemaining = (state.started + state.pomodoroTime) - now;

    setInterval(() => {
        console.log('running set interval');
        const now = Date.now();
        const timeRemaining = (state.started + state.pomodoroTime) - now;
        updateCountdownTimer(timeRemaining);
    }, 1000);

    updateCountdownTimer(timeRemaining);
}

const updateCountdownTimer = (time) => {
    let minsRemaining = Math.floor(time / (60 * 1000)).toString().padStart(2, '0');
    let secsRemaining = Math.round((time/1000) % (60)).toString().padStart(2, '0');

    countdownMinsEle.textContent = minsRemaining;
    countdownSecsEle.textContent = secsRemaining;
}

document.getElementById('startButton').addEventListener('click', onStart);