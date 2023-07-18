// Create web server

// 1. Import express module
var express = require('express');

// 2. Create express object
var app = express();

// 3. Create web server
var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});

// 4. Set middleware
app.use(express.static('public'));

// 5. Set route
app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/main.html');
});

// 6. Set route for comments
app.get('/comments', function(req, res){
    res.sendFile(__dirname + '/public/comments.html');
});

// 7. Set route for create comment
app.post('/comments', function(req, res){
    res.sendFile(__dirname + '/public/comments.html');
});

// 8. Set route for delete comment
app.delete('/comments', function(req, res){
    res.sendFile(__dirname + '/public/comments.html');
});
// 1. Import express module
var express = require('express');

// 2. Create express object
var app = express();

// 3. Create web server
var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});

// 4. Set middleware
app.use(express.static('public'));

// 5. Set route
app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/main.html');
});

// 6. Set route for comments
app.get('/comments', function(req, res){
    res.sendFile(__dirname + '/public/comments.html');
});

// 7. Set route for create comment
app.post('/comments', function(req, res){
    res.sendFile(__dirname + '/public/comments.html');
});

// 8. Set route for delete comment
app.delete('/comments', function(req, res){
    res.sendFile(__dirname + '/public/comments.html');
});