const jwt = require('jsonwebtoken');
const UserSchema = require('../models/user');

const verifyAuthority = (req, res, next) => {
    try {
        const token = req.header("Authorization");
        if(token){

            jwt.verify(token, process.env.TOKEN_KEY, async(err, data) => {
                if(err){
                    return res.status(401).json({"msg" : "Anuthorized!"});
                }else{
                    const user = await UserSchema.findById(data.id);
                    if(user){
                        next();
                    }
                    else{
                        return res.status(401).json({"msg" : "Anuthorized!"});
                    }
                }
            });
        }else{
            return res.status(401).json({"msg" : "Anuthorized!"});
        }
    } catch (error) {
        return res.status(401).json({"msg" : "Anuthorized!"});
    }
}

module.exports = {verifyAuthority};