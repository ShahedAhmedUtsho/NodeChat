function getInbox(req, res, next) {
    console.log(req.user)
    res.render('inbox', { title: 'Inbox', ...req.user })

}

module.exports = { getInbox }
