const jwt=require("jsonwebtoken");
const SECRET_KEY="SECURE"

const auth=(req,res,next)=>{
    try {
        let token=req.headers.authorization;
        if(token){
            token=token.split(" ")[1];
            let user=jwt.verify(token,SECRET_KEY);
            req.userId=user.id;
        }
        else
            return res.status(400).json({message:"Unauthorized User!"});
        next();     
    } catch (error) {
        console.log(error);
        return res.status(400).send("Unauthorized User!");
    }
}
module.exports=auth;