const {getList}=require('./list.service');


const read=async(req,res,next)=>{
    // const listId=Number(req.params.listId);
    const foundItem=await getList();
    res.json({data:foundItem})
}
module.exports={read};