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
const mainscreen =document.getElementById('start-btn');
const selectionScreen = document.getElementById('selection-screen');
const timerWaitingScreen = document.getElementById('pastry-timer-screen');
const timerCompleteScreen = document.getElementById('pastry-timer_complete_screen')

//screen buttons
const startBtn = document.getElementById('start-btn');
const backBtn = document.getElementById('back-btn');
const snoozeTimerBtn = document.getElementById('snooze-btn');

//animation variables

//

