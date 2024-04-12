import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const authorisedUser = async (req, res, next) => {
    try {
        const token = req.header("Authorization")?.replace("Bearer ", "");

        if (!token) {
            res.status(402).json({
                status: "failed",
                message: "Unauthorized request",
            });
        }

        //verify Token

        const decodedTokenInfo = jwt.verify(token, process.env.SECRET_KEY);
        console.log(decodedTokenInfo);

        const user = await User.findById(decodedTokenInfo.id).select(
            " -refreshToken"
        );
        console.log(user);

        if (!user) {
            res.status(404).json({
                status: "failed",
                message: "Invalid Access Token",
            });
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({
            status: "failed",
            error: error?.message,
            message: "Invalid Access Tokening",
        });
    }
};
