
const bcrypt = require('bcrypt');
const People = require('../Models/peopleSchema');


function getUsers(req, res, next) {
    res.render('users')

}


async function addUser(req, res, next) {
    let newUser;
    const hashPassword = await bcrypt.hash(req.body.password, 10);






    try {
        if (req.files && req.files.length > 0) {
            newUser = await new People({
                ...req.body,
                avatar: req.files[0].filename,
                password: hashPassword,
            })
            await newUser.save()
            console.log(req.body);
            res.json("okay dear");

        } else {
            res.status(500).json(
                {
                    errors: {
                        common: error.message,

                    }
                }
            )
        }


    } catch (error) {
        res.status(500).json(
            {
                errors: {
                    common: error.message,

                }
            }
        )
    }













}


module.exports = {
    getUsers,
    addUser
}; 