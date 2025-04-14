//controls app's event lifecycle
const { app, BrowserWindow } = require('electron')

//creates/manages app window and lets us open in browser
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

//wiats for whenReady then creates our browser window
app.whenReady().then(() => {
  createWindow()
})

//in case we're not on mac and need to close:
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})