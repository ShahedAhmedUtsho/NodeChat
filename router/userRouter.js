const express = require('express');


const router = express.Router();
const decorateHtmlResponse = require('../middlewares/decorateHtmlResponse');
const {
    getUsers,
    addUser,
    all,
    deleteUser
} = require('../controller/userController');
const avatarUpload = require('../middlewares/users/avatarUpload');
const {
    addUserValidators,
    addUserValidatorHandler
} = require('../middlewares/users/userValidator');

router.get('/', decorateHtmlResponse("Users"), getUsers);
// add user 
router.get('/all', all);
router.post("/", avatarUpload, addUserValidators, addUserValidatorHandler, addUser);
router.delete("/",deleteUser)
module.exports = router; 