const addRoute=require("express").Router();
const {add}=require('./addList.controller');

addRoute.route('/addData').post(add);

module.exports=addRoute;