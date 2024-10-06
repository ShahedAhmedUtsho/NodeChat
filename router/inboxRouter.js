

const decorateHtmlResponse = require('../middlewares/decorateHtmlResponse');

const express = require('express');
const { getInbox } = require('../controller/inboxController');
const checkLogin = require('../middlewares/common/checkLogin');
const router = express.Router();

router.get('/', decorateHtmlResponse(`Inbox`), checkLogin, getInbox);

module.exports = router