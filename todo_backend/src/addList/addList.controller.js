const {addList}=require('./addList.service');


const add=async(req,res,next)=>{
    const data=req.body.text;
    const addItem=await addList(data);
    res.json(addItem)
}
module.exports={add};