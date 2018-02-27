var express = require('express');
var app = express();
var history = require('connect-history-api-fallback');
let prot = 3000;
app.use(history());

app.use(express.static('./dist'));
module.exports = app.listen(prot,function (err) {
    if (err) {
        console.log(err);
        return
    }
    console.log('Listening at http://localhost:' + prot + '\n')
});