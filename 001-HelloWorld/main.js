//应用程序引用
const {app, BrowserWindow} = require('electron');

let mainWnd = null;

//主进程准备好之后，创建窗口设置属性
app.on('ready', () => {
    // //设置窗口的宽高
    mainWnd = new BrowserWindow({
        width: 1024, 
        height: 768,
        webPreferences: {
            nodeIntegration: true,  //继承nodejs的文件操库，比如 fs插件
            nodeIntegrationInWorker: true
        },
    }); 

    mainWnd.loadFile('index.html');  //加载index.html页面
    mainWnd.on('close', () => {
        mainWnd = null;  //销毁窗口防止内存占用过高 
    });
});