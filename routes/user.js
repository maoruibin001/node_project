/**
 * Created by lenovo on 2017/5/17.
 */
var express = require('express');
var fs = require('fs');
var path= require('path');


var list = express();
list.get('/', function(req, res) {
    var params = JSON.parse(fs.readFileSync(path.join(__dirname, '../mock/user/info.json')));
    console.log(222222222222);
    var info = require('../mock/user/info.json');
    res.render('list',info, function(err, data) {
        if (err){
            console.log(err);
            return;
        }
        res.send(data);
    })
});

exports.list = list;