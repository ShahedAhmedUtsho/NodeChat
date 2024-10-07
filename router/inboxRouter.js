

const decorateHtmlResponse = require('../middlewares/decorateHtmlResponse');

const express = require('express');
const { getInbox, create_chats, find_match_users } = require('../controller/inboxController');
const checkLogin = require('../middlewares/common/checkLogin');
const router = express.Router();

router.get('/', decorateHtmlResponse(`Inbox`), checkLogin, getInbox);
router.post('/create_chats', checkLogin, create_chats);

router.post('/find_match_users', checkLogin, find_match_users);;

module.exports = router;