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
const checkLogin = require('../middlewares/common/checkLogin');
const adminCheck = require('../middlewares/common/admin');

router.get('/', checkLogin, adminCheck, decorateHtmlResponse("Users"), getUsers);
// add user 
router.get('/all', all);
router.post("/", checkLogin, adminCheck, avatarUpload, addUserValidators, addUserValidatorHandler, addUser);
router.delete("/", checkLogin, adminCheck, deleteUser)
module.exports = router; 