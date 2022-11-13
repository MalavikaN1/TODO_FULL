const {editList}=require('./editList.service');

const edit=async(req,res,next)=>{
    const id=req.params.id;
    const editText=req.body.text;
    const editItem=await editList(id,editText);
    res.json(editItem);
}

module.exports={edit};