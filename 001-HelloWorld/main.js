
var electron = require('electron');

//应用程序引用
var app = electron.app; 

 //窗口的引用
var BrowserWindow = electron.BrowserWindow;

 //声明要打开的窗口
var mainWindow = null; 

//主进程准备好之后，设置窗口属性
app.on('ready', ()=> {
    mainWindow = new BrowserWindow({width: 1024, height: 768});  //设置窗口的宽高
    mainWindow.loadFile('index.html');  //加载index.html页面
    mainWindow.on('close', () => {
        mainWindow = null;  //销毁窗口防止内存占用过高 
    });
});

