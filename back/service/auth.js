const jwt = require('jsonwebtoken')
const SALT_KEY = "f5b99242-6504-4ca3-90f2-05e78e5761ef"

exports.generateToken = async (data) => {
    return jwt.sign(data, SALT_KEY, { expiresIn: '1d'})
}

exports.decodeToken = async (token) => {
    let data = await jwt.verify(token, SALT_KEY)
    return data
}

exports.authorize =  (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers['x-access-token']

    if (!token) {
        res.status(401).json({
            message: "Acesso Restrito"
        });
    } else {
        jwt.verify(token, SALT_KEY, (e, decoded) => {
            if (e) {
                res.status(401).json({message: "Token Inválido"})
            } else {
                next()
            }
        })
    }
}