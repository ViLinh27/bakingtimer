//functionality to app window
//controls app's event lifecycle
const { app, BrowserWindow } = require('electron')

// include the Node.js 'path' module at the top of your file
const path = require('node:path')

//creates/manages app window and lets us open in browser
const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}

//wiats for whenReady then creates our browser window
app.whenReady().then(() => {
  createWindow()

  //open window if none are open in macOS
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

//in case we're not on mac and need to close:
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})


