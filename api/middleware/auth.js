const jwt = require('jsonwebtoken');
const { HTTP_CODE, JWT_TOKEN_SALT } = require('../../constants');


module.exports = (req, res, next) => {
    try {
        let token = req.headers.authorization;
        let decoded = jwt.verify(token, process.env.JWT_TOKEN_SALT)
        req.userData = decoded;
        next();
    } catch (error) {
        res.status(HTTP_CODE.UNAUTHORIZED)
            .json({
                message: "Authorization failed!",
                error,
            });
    }
}