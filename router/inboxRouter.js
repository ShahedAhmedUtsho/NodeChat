

const decorateHtmlResponse = require('../middlewares/decorateHtmlResponse');

const express = require('express');
const { getInbox, create_chats, find_match_users, get_Conversation_list } = require('../controller/inboxController');
const checkLogin = require('../middlewares/common/checkLogin');
const { get_conversation_by_id } = require('../controller/ConversationController');
const router = express.Router();

router.get('/', decorateHtmlResponse(`Inbox`), checkLogin, getInbox);
router.post('/create_chats', checkLogin, create_chats);

router.post('/find_match_users', checkLogin, find_match_users);;
router.get('/get_Conversation_list', checkLogin, get_Conversation_list);

router.post('/get_conversation_by_id', checkLogin, get_conversation_by_id);

module.exports = router;