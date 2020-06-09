const { app, BrowserWindow, globalShortcut } = require('electron');
const config = require('./config/url');
const path = require('path');

let win;

function createWindow () {
  win = new BrowserWindow({
    width: 400,
    height: 500,
    icon: path.resolve(__dirname, 'images', 'atomTemplate.png'),
    backgroundColor: '#1d1d1d',
    alwaysOnTop: true,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadURL(config.url)
};

function toggleDevTools() {
  win.webContents.toggleDevTools();
}

function toggleGoBack() {
  win.webContents.goBack();
}

function toggleGoForward() {
  win.webContents.goForward();
}

function createShortcuts() {
  globalShortcut.register('Super+j', toggleDevTools)
  globalShortcut.register('Super+b', toggleGoBack)
  globalShortcut.register('Super+f', toggleGoForward)
}


app.whenReady().then(createWindow).then(createShortcuts);

app.on('quit', () => {
  globalShortcut.unregisterAll();
})
