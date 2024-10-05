const express = require('express');

const decorateHtmlResponse = require('../middlewares/decorateHtmlResponse')


// internal import  
const { getLogin, login } = require('../controller/loginController');
const { loginValidatorHandler, loginValidator } = require('../middlewares/users/loginValidator');

const router = express.Router()
router.get('/', decorateHtmlResponse("login page"), getLogin);
router.post('/',
    loginValidator,
    loginValidatorHandler,
    login)


module.exports = router