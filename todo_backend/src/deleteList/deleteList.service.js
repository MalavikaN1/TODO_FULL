const knexInstance=require('../database/connection');

const deleteList=async(id)=>{
    const result=await knexInstance('todo_list')
    .where('id', id)
    .del()
}

module.exports={deleteList};