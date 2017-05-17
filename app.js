/**
 * Created by lenovo on 2017/5/17.
 */
var express = require('express');
var ejs = require('ejs');
var path = require('path');

// var routes = require('./routes');
var user = require('./routes/user');


var app = express();
app.set('port', process.env.Port || 3000);
app.set('views', path.join(__dirname, './views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
// app.use(app.router);
app.use(express.static('/public/'));

// app.use('/', routes.index);
app.use('/list', user.list);


var server = app.listen('8083', '127.0.0.1', function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('this server start at: ' + host + ':' + port);
})

