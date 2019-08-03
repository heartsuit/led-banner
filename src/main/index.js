import { app, BrowserWindow, screen, globalShortcut, Menu, ipcMain } from 'electron'
import '../renderer/store'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 123,
    x: 0,
    y: 0,
    useContentSize: true,
    width: screen.getPrimaryDisplay().workAreaSize.width,
    frame: false,
    transparent: true,
    alwaysOnTop: true
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', () => {
  createWindow();
  globalShortcut.register('CmdOrCtrl + Shift + C', () => {
    // only when there is no configuration window, create one
    if(configWindow == null) {
      createConfigWindow();
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

app.on('will-quit', () => {
  // 注销所有快捷键
  globalShortcut.unregisterAll()
})

// configuration window
let configWindow;
function createConfigWindow() {
  Menu.setApplicationMenu(null)
  const modalPath = process.env.NODE_ENV === 'development'
    ? 'http://localhost:9080/#/config'
    : `file://${__dirname}/index.html#config`
  // navigate with hash, supported by vue-router
  configWindow = new BrowserWindow({
    width: 600,
    height: 400,
    x: screen.getPrimaryDisplay().workAreaSize.width - 600,
    y: 123,
    webPreferences: {
      webSecurity: false
    },
    parent: mainWindow, // as the children of mainWindow 
    frame: false,
    transparent: true,
    resizable: false
  })

  configWindow.loadURL(modalPath)

  configWindow.on('closed', () => {
    configWindow = null
  })

  // listen on close event
  ipcMain.on('window-close', function (e) {
    configWindow.close();
  })

  // configWindow.on("close", (e) => {
  //   e.preventDefault();
  //   configWindow.minimize();
  // })
}

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
