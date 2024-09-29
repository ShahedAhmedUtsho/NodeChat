
const bcrypt = require('bcrypt')


function getUsers(req, res, next) {
    res.render('users')

}


function addUser(req, res, next) {

    console.log(req.body);
    res.json("okay dear")



}


module.exports = {
    getUsers,
    addUser
}; 