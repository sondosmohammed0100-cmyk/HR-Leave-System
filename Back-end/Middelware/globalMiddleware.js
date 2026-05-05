const errormiddleware=(err,req,res,next)=>{
    console.log(err)
    return res.status(500).json({
        msg:"Server Error"
    })

}
module.exports=errormiddleware;