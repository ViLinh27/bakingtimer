const {contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI',{
  minimizeWindow: ()=>ipcRenderer.send('minimize-window'),
  closeWindow: ()=> ipcRenderer.send('close-window'),
  exitApp: ()=> ipcRenderer.send('exit-app')
})//DOMContentloaded should be fine

//runs script before renderer process, access to both renderer globals (window andd coument a Node.js env)
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})