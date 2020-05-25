const { app, BrowserWindow } = require('electron');
const path = require('path');

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 500,
    icon: path.resolve(__dirname, 'images', 'atomTemplate.png'),
    backgroundColor: '#1d1d1d',
    alwaysOnTop: true,
    autoHideMenuBar: true,
    webPreferences: {
      devTools: true,
      nodeIntegration: true
    }
  });

  win.loadURL('http://localhost:3000')
};


app.on('ready', createWindow);
