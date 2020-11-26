module.exports = (req, res, next) => {
    console.log(req.session, req.sessionID, req.baseUrl);
    if (req.session && req.sessionID) {
        next()
    } else {
        res.status(404).json({
            message: 'URL not found'
        })
    }
}

