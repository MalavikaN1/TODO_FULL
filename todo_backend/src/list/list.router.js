const list=require("express").Router();
const {read}=require('./list.controller');

list.route('/').get(read);


module.exports=list;