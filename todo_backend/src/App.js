const express=require("express");
const app=express();

var cors = require('cors')
app.use(cors())


const list=require('./list/list.router')
const addRoute = require("./addList/addList.router");
const delRoute=require("./deleteList/deleteList.router");
const editRoute=require("./editList/editList.router");
const displayRoute=require('./displayList/displayList.router')

const dotenv=require('dotenv');
dotenv.config()

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })  

app.use(urlencodedParser);
app.use(bodyParser.json())
app.use('/list',list,addRoute,delRoute,editRoute,displayRoute)





module.exports=app;