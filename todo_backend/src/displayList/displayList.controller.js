const {displayList}=require('./displayList.service');

const display=async(req,res,next)=>{
    const foundItem=await displayList();
    res.json(foundItem);
    
}

module.exports={display};
