

const decorateHtmlResponse = require('../middlewares/decorateHtmlResponse');

const express = require('express');
const { getInbox } = require('../controller/inboxController');
const router = express.Router();

router.get('/', decorateHtmlResponse(`Inbox`), getInbox);

module.exports = router