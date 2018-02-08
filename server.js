var express = require('express');
var app = express();
var history = require('connect-history-api-fallback');

// var router = express.Router();

app.use(history());
// router.get('/', function (req, res, next) {
//     req.url = '/index.html';
//     next();
// });

// app.use(router);
app.use(express.static('./dist'));
module.exports = app.listen(3000,function (err) {
    if (err) {
        console.log(err);
        return
    }
    console.log('Listening at http://localhost:' + 3000 + '\n')
})