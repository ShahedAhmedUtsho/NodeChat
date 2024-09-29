const uploader = require("../../Utilities/singleFileUpload")

function avatarUpload(req, res, next) {

    const upload = uploader("avatar", ["image/jpg", "image/jpeg", "image/png"], 1000000);
    upload.any()(req, res, (error) => {
        if (error) {
            res.status(500).json({
                errors: {
                    avatar: {
                        message: error.message
                    }
                }
            })
        } else {
            next()
        }

    })
}

module.exports = avatarUpload