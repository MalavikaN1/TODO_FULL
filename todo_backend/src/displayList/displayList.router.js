const displayRoute=require("express").Router();
const {display}=require('./displayList.controller')

displayRoute.route('/displayData').get(display);

module.exports=displayRoute;