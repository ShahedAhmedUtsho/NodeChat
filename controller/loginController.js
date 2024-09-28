function getLogin(req, res, next) {
    res.render('login', {
        // title: "NodeChat - Login"

    })
}

module.exports = {
    getLogin,
}