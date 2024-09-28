
const decorateHtmlResponse = (title) => {
    return function (req, res, next) {
        res.locals.title = `${process.env.APP_NAME} - ${title}`;
        res.locals.html = true
        next()
    }
};

module.exports = decorateHtmlResponse;
