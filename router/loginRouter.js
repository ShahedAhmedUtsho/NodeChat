const express = require('express');

const decorateHtmlResponse = require('../middlewares/decorateHtmlResponse')


// internal import  
const { getLogin } = require('../controller/loginController')

const router = express.Router()
router.get('/', decorateHtmlResponse("login page"), getLogin);


module.exports = router