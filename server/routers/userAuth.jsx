const jwt =require('jsonwebtoken');

const userAuth = async (req,res,next)=>{
    

const token=req.headers.auth

try {
    
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    req.user=decoded;
    console.log(req.user);
    next();


} catch (error) {
    res.status(401).json({massage:"Unauthorized"});
}



}

module.exports = userAuth;