const {deleteList}=require('./deleteList.service')

const del=async(req,res,next)=>{
    const id=Number(req.body.id);
    const delItem=await deleteList(id);
    res.json(delItem);
}

module.exports={del};