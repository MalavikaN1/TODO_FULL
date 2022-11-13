const knexInstance=require('../database/connection')

const editList=async(Uid,editText)=>{
    const result=await knexInstance("todo_list").where({id:Uid}).update({text:editText});
    return "edited"
}

module.exports={editList};