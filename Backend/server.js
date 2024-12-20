var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());
var bodyparser = require('body-parser');
var mongoose = require('mongoose')
mongoose.connect('mongodb+srv://srinivasaraobagam:9182189245@cluster0.1wfoe.mongodb.net/Bhasyam?retryWrites=true&w=majority&appName=Cluster0')
.then((data)=>{console.log("Connected")})
.catch((err)=>{console.log("Not Connected")})