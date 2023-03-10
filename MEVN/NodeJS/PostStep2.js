//Step2: map the request parameter with the controller from html file
//use body parser and fetch url parser from it
//view and controller will be in sync


var express = require ('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended:false});
app.use(express.static('public'));

app.get('./indexStep1.html', function(req, res){
    res.sendFile(__dirname + "/indexStep1.html");

})

app.post('/post', urlencodedParser, function(req, res){
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    }
    console.log(response);
    res.send(JSON.stringify(response));
});


//step3: create server instance within the controller

var server = app.listen(8000, function(){
    console.log("Server is running");
});