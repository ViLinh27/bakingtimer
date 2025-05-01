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
