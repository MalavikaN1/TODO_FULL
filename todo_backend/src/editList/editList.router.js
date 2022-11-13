const editRoute=require('express').Router();
const {edit}=require('./editList.controller');

editRoute.route('/editData/:id').post(edit);

module.exports=editRoute;