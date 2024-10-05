function getInbox(req, res, next) {

    res.render('inbox', { title: 'Inbox', ...req.user })

}

module.exports = { getInbox }
