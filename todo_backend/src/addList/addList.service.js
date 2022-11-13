const knexInstance = require("../database/connection");

const addList=async(data)=>{
    const result=await knexInstance.insert({text:data}).into("todo_list") .onConflict('text') .ignore();
    return 'added';
}

module.exports={addList};