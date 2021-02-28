
var fs = require('fs');

window.onload = function() {
    var btn = this.document.querySelector('#btn');
    var mytext = this.document.querySelector('#mytext');
    btn.onclick = function() {
        fs.readFile('text-string.txt', (err, data) => {
            mytext.innerHTML = data;
        });
    }
}