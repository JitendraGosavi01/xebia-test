
/**
 Middleware function to check if session or not
 @params req {Object}
 @params res {Object}
 @returns res {Object}| next() {function}
*/
module.exports = (req, res, next) => {
    if (req.session && req.sessionID) {
        next()
    } else {
        res.status(404).json({
            message: 'URL not found'
        })
    }
}

