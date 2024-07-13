import jwt from "jsonwebtoken";
import User from "../models/User.model.js";

async function verifyToken(req, res, next) {
    try {
        const data = jwt.verify(req.headers.token, process.env.SECRET_JWT);
        const user = await User.findOne({ email: data.email })
        req.user = { id: user._id, email: user.email, role: user.role }
        return next();
    } catch (error) {
        return next(error);
    }
}

export default verifyToken;