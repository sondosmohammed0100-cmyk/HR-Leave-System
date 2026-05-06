// const jwt = require("jsonwebtoken");
// const authmiddleware = (req,res,next)=>{
//     try{
//         const token = req.headers.authorization;
//         if(!token) return res.status(401).json({
//             msg:"No token, authorization denied"
            
//         });
        
//         const actualToken = token.split(" ")[1];
//         const payload = jwt.verify(token,process.env.JWT_SECRET);
//         req.user = payload;
//         next();
//     }
//     catch(error){
//         return res.status(401).json({
//             msg:"Invalid token"
//         })
//     }   


// }
// module.exports = authmiddleware;

const jwt = require("jsonwebtoken")

const authmiddleware = (req , res , next)=>{


    try{
        //get token from req.header
        const authHeaders = req.headers.authorization; 
        
        if(!authHeaders) return res.status(401).json({ message:"token is required "})

      

        //get token value => string token
        const token = authHeaders.split(" ")[1]

   
        
        //token value verify => payload
        const payload = jwt.verify(token , process.env.JWT_SECRET)
      req.user = { _id: payload.id };
        // next
        next()



    }


    catch(error){

        return res.status(401).json({ message:"token Invalid"})
    }
}



module.exports = authmiddleware;






















