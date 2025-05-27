//adds functionality and interactivity to app
//an then use the same JavaScript APIs and tooling you use for typical front-end development, 
////such as using webpack to bundle and minify your code or React to manage your user interfaces.

//guessing I need this for the app to even do anything functionally:
const { ipcRenderer } = require('electron');

//main window controls:
//min btn
document.getElementById('min-btn').addEventListener('click',()=>{
    ipcRenderer.send('minimize-window');
});
//exit btn
document.getElementById('exit-btn').addEventListener('click',()=>{
    ipcRenderer.send('close-window');
});

//main screens
const mainscreen =document.getElementById('start-screen');
const selectionScreen = document.getElementById('selection-screen');
const timerWaitingScreen = document.getElementById('pastry-timer-screen');
const timerCompleteScreen = document.getElementById('pastry-timer_complete_screen')

//screen buttons
const startBtn = document.getElementById('start-btn');
const backBtn = document.getElementById('back-btn');
const snoozeTimerBtn = document.getElementById('snooze-btn');
const stopBtn = document.getElementById('stop-btn');
const cookAgainBtn = document.getElementById('bake-again-btn')
const exitbtn = document.getElementById('exit-btn');
const treatOptions = document.querySelectorAll('.selection-pastry');
snoozealarmbtn = document.getElementById('snooze-alarm-btn');
//animation variables;

let currentFrame = 0;
let animationInterval;
let isPaused = false;
let ringSound = null;

//start/ stop controls

function togglePause(){
    isPaused = !isPaused;

    snoozeTimerBtn.textContent = isPaused ? 'Resume': 'Pause';

    if(isPaused){
        remainingTimeWhenPaused = timeLeft;
    }
}

//clean up

stopBtn.addEventListener('click',()=>{
    clearInterval(timer);
    showScreen('main');
});

//timer display

const timerDisplay = document.getElementById('timer-display');

let timer;
let timeLeft = 0;
let remainingTimeWhenPaused= 0;

//format seconds into mm:ss
function formatTime(seconds){
    const mins = Math.floor(seconds/60).toString().padStart(2,'0');//adds extra padding to string(padstart)
    const secs = (second % 60).toString().padStart(2,'0');
    return '$(mins):$(secs)';
}

//show only selected screen
function showScreen(screenName){
    mainscreen.style.display = 'none';
    selectionScreen.style.display = 'none';
    timerWaitingScreen.style.display = 'none';
    timerCompleteScreen.style.display = 'none';

    if(screenName ==='main'){
        mainscreen.style.display = 'block';
    }
    if(screenName ==='selection'){
        selectionScreen.style.display = 'block';
    }
    if(screenName ==='timer'){
        timerWaitingScreen.style.display = 'block';
    }
    if(screenName ==='completion'){
        timerCompleteScreen.style.display = 'block';
    }
}

function startCountDown(selectedDuration){
    duration = selectedDuration;
    clearInterval(timer);

    isPaused = false;
    timeLeft = duration;
    timerDisplay.textContent = formatTime(timeLeft);
    showScreen('timer');

    timer = setInterval(()=>{
        if(!isPaused && timeLeft >0){
            //countdown
            timeLeft--;
            timerDisplay.textContent = formatTime(timeLeft);

            if(timeLeft <=0){
                playAlarmSound();
                new Notification('Baking Timer',{
                    body: 'Your sweet treat is ready :D'
                });
                showScreen('completion');
            }
        }
    },1000);//note the number of milliseconds to wait before callback
}

//pause /resume the timer
function togglePause(){
    isPaused = !isPaused;
    
    if(isPaused){
        snoozeTimerBtn.textContent = 'Resume';
        remainingTimeWhenPaused = timeLeft;
    }
    else{
        snoozeTimerBtn.textContent = 'Snooze';
    }
}

//play a sound?
function playPopSound(){
    const popSound = document.getElementById('pop-sound');
    popSound.currentTime = 0;// rewind to start
    popSound.play();
}
function playAlarmSound(){
    ringSound = document.getElementById('alarm-sound');
    ringSound = currentTime = 0;//rewind to start
    ringSound.loop = true;//loop sound until stops
    ringSound.play();
} 

function stopAlarmSound(){
    if(ringSound){
        ringSound.pause();
        ringSound.currentTime = 0;//rewind back to start
    }
}

//event listeners
startBtn.addEventListener('click',()=>{
    playPopSound();
    showScreen('selection');
});

backBtn.addEventListener('click',()=>{
    playPopSound();
    showScreen('main');
});

stopBtn.addEventListener('click',()=>{
    playPopSound();
    clearInterval(timer);
    showScreen('main');
});

snoozeTimerBtn.addEventListener('click',()=>{
    playPopSound();
    togglePause();
});

cookAgainBtn.addEventListener('click',()=>{///maybe get rid of this button
    playPopSound();
    stopAlarmSound();
    showScreen('main');
});

exitbtn.addEventListener('click',()=>{
    playPopSound;
    ipcRenderer.send('exit-app');//sends async message for getting out of app
});

treatOptions.forEach(option =>{
    option.addEventListener('click', ()=>{
        playPopSound();
        const duration = parseInt(option.getAttribute('data-time'));
        startCountDown(duration);
    });
});

snoozealarmbtn.addEventListener('click', ()=>{
   playPopSound();//for feedback
   stopAlarmSound();//stop the ringing 

   snoozealarmbtn.textContent = 'Alarm has Stopped'; //show user alarm off

   setTimeout(() => {
        snoozealarmbtn.textContent = 'Snooze';
   }, 2000);
});

//initiazlie the app
showScreen('main');
