
const {app, BrowserWindow} = require('electron');
let win;

function createWindow() {
  win = new BrowserWindow({
    width: 400,
    height: 900,
    webPreferences: { nodeIntegration: false },
    resizable : false
    });
  win.loadURL(`file://${__dirname}/index.html`);
  // win.webContents.openDevTools(); 開発ツールは非表示に変更
  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});