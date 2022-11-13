const delRoute=require("express").Router();
const {del}=require('./deleteList.controller');

delRoute.route('/delData').delete(del);

module.exports=delRoute;