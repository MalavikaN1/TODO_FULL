const knexInstance=require('../database/connection');

const displayList=async()=>{
    const result=await knexInstance('todo_list').select('*');

    result.sort(function(a, b) {
        return parseInt(a.id) - parseInt(b.id);
    });
    return result;
}

module.exports={displayList};