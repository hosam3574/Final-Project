// import userControoler 
const exprees = require('express');
const {UpdateProfile, createUser,getAllUsers,deleteUserById, updateById,profile,loginUser,checkUserRole, } = require('../controllers/userController');
const router = exprees.Router();

//import userAuth middleware
const userAuth = require('./userAuth');
const adminAuth = require('./adminAuth');
//create user route

router.post ('/create',createUser);
//جديد 
router.post ('/adminCreate', adminAuth,createUser);

router.get('/allUsers', adminAuth,getAllUsers);
router.delete('/delete/:id', adminAuth,deleteUserById)
//router.put('/update/:id',UpdateById)هاذ المهندس حذفو 
router.put('/update/:id',userAuth,UpdateProfile)

//updateByID
router.put('/updateById/:id',adminAuth, updateById)


// login rout
router.post('/login',loginUser)
//router.put('/editPassword',userAuth,editPassword )


//profile route
router.get('/checkRole',userAuth,checkUserRole)
router.get('/profil', userAuth,profile)




//export the router

module.exports = router;