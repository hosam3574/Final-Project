//import user modle
const User =require('../models/user');

const jwt =  require ('jsonwebtoken');

const bcrypt = require('bcrypt')




//create new user
const createUser = async(req, res )=>{
    console.log("fkldsjgks")

const userName = req.body.username;
const email = req.body.email;
const password = req.body.password;
console.log(req.body)

try{

//encrypt the password

const salt = await bcrypt.genSalt(10);
const hashedPassword=await bcrypt.hash(password,salt);
    console.log(userName,email,hashedPassword)
    const user=  new User ({
      
        username : userName,
         email : email,
         password  : hashedPassword ,
    })
    await user.save();
    console.log(user)
    res.status(201).json({ message: 'User Connected new', user:user });

}

catch(error){
res.status(500).json({ message:error })

}
 
}



//login

const loginUser = async (req ,res )=>{

const {email,password}=req.body;


//decrypt the password

try {

const user = await User.findOne({ email: email  });
const isMatched = await bcrypt.compare(password,user.password)
if (!isMatched){
    return res.status(401).json({message:'Invalid email or password'});
}
if(!user){
     return res.status(401).json({message:'Invalid email or password'});
}





if (user){

const token = jwt.sign({id :user._id , role:user.role}, process.env.JWT_SECRET,{ expiresIn:'1h'});

res.status (200) .json({ message: 'Login successful', user, token });
}

else{

res.status(401).json({ message: 'Invalid email or password' });
}

    
} catch (error) {
    res.status(500).json({massage:error });
}



}


//Register new user

//هون بيطلعلي غلط !!!!!!!!
// const createUser = async (req, res) =>{
// const userName = req.body.username;
// const email = req. body .email;
// const password = req. body.password;
// const role = req.body.role;

// console.log(role);



// try {
// // encrypt the password
// const salt = await bcrypt.genSalt (10);
// const hashedPassword = await bcrypt. hash (password, salt)

// const user = new User({
// username: userName,
//  email: email,
//   password: hashedPassword,
//   role:role
// })
// await user.save();
// res.status (201). json({ message: 'User created successfully', user});

// }catch(error){
// console . error ('Error creating user' ,error. message);
// res.status(500).json({message:error.message});
// }}








//get all users

const getAllUsers =async (req,res )=>{

try {

    const allUsers = await User.find()
    res.status(200).json(allUsers)
    
} catch (error) {
    res.status(500).json({message:error })

}
}


//deleat user :>id

const deleteUserById =async (req,res )=>{
const {id}=req.params
try {
    const userToDelete = await User.findByIdAndDelete(id)
     res.status(200).json({message:"user delete",user:userToDelete})
    
} catch (error) {
    res.status(500).json({message:error })
}

}

//Update

const UpdateProfile = async(req,res)=>{
const {id}=req.params
const {username,email,password}=req.body;
try {
      const userToUpdate = await User.findByIdAndUpdate(id,{username,email,password})
       res.status(200).json({message:"user Updated done",user:userToUpdate})
} catch (error) {
    res.status(500).json({message:error })
}



}



    



//export the creatUser function 





const profile =async (req , res )=>{

const id = req.user.id
try {
     const userProfile = await User.findById(id)
     res.status(200).json(userProfile)
} catch (error) {
     res.status(500).json({message:error })
}



}

//check user role
const checkUserRole= async(req,res)=>{
const userid = req.user.id
try {
    
const user =await User.findById(userid)

if(user.role!=='admin'){
    return res.status(403).json({message:"Access denied"})
}

return res.status(200).json({message:"Access denied"})

} catch (error) {
    res.status(500).json({message:error.massage})
}


}



//updateById


const updateById = async(req,res)=>{
const {id}=req.params
const {username,email,role}=req.body;
console.log(username,email,role)
try {
      const updateById = await User.findByIdAndUpdate(id,{username,email,role})
       res.status(200).json({message:"user Updated done",user:updateById})
} catch (error) {
    res.status(500).json({message:error.message })
}



}



module.exports = { UpdateProfile,createUser,getAllUsers,deleteUserById ,updateById,profile ,loginUser,checkUserRole,};