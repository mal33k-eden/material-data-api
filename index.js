var express = require('express'),
    mongoose = require('mongoose')
    bodyParser = require('body-parser');


var db = mongoose.connect('mongodb://localhost/materialApi');

var Material = require('./models/materialModel');
var app = express();

var port = process.env.port || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

materialRouter = require('./Routes/materialRoutes')(Material);

app.use("/api",materialRouter);


app.get("/", function(req, res){
    res.send('welcome to my material api');
});

app.listen(port, function(){
    console.log("Running on port " + port);
});