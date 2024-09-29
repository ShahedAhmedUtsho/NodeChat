const express = require('express');


const router = express.Router();
const decorateHtmlResponse = require('../middlewares/decorateHtmlResponse');
const {
    getUsers,
    addUser
} = require('../controller/userController');
const avatarUpload = require('../middlewares/users/avatarUpload');
const {
    addUserValidators,
    addUserValidatorHandler
} = require('../middlewares/users/userValidator');

router.get('/', decorateHtmlResponse("Users"), getUsers)
// add user 

router.post("/", avatarUpload, addUserValidators, addUserValidatorHandler, addUser)
module.exports = router; 