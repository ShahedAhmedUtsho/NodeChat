const People = require('../../Models/peopleSchema'); // Adjust the path as necessary

const adminCheck = async (req, res, next) => {
    try {
        const user = await People.findById(req.user._id);
        if (user && user.role === 'admin') {

            res.locals.role = user.role;


            next();
        } else {
            res.status(403).clearCookie(process.env.LOGIN_TOKEN).redirect('/login');



        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = adminCheck;