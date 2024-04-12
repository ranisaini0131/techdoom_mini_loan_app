import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
    try {
        console.log(req.body, "3");
        //get user details from frontend
        const { name, email, phone, password, role } = req.body;

        //validation
        if (!(name || email || password || phone || role)) {
            return res.status(400).json({
                status: "failed",
                message: "Please provide all fields",
            });
        }

        //check if user already exists or not
        const existedUser = await User.findOne({
            $or: [{ name }, { email }],
        });

        if (existedUser) {
            return res.status(409).json({
                status: "failed",
                message: "User already exists",
            });
        }

        //hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        //create new user

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            phone,
            role,
        });
        await newUser.save();

        //remove password
        const createdUser = await User.findById(newUser._id).select("-password ");

        if (!createdUser) {
            return res.status(500).json({
                status: "error",
                message: "something went wrong while registering the user",
            });
        }

        //return response
        return res.json({
            status: "success",
            message: "User Registered successfully",
            createdUser,
        });
    } catch (error) {
        console.log(error);
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        //check fields
        if (!email) {
            return res.status(422).json({
                status: "fail",
                message: "Please provide required credentials",
            });
        }

        //check existed user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                status: "failed",
                message: "User does not exist",
            });
        }

        //validate passowrd
        const isPasswordValidate = await bcrypt.compare(password, user.password);
        if (!isPasswordValidate) {
            return res.status(401).json({
                status: "failed",
                message: "Invalid user credentials",
                error: error.message,
            });
        }

        //generate token
        const token = jwt.sign(
            {
                id: user._id,
            },
            process.env.SECRET_KEY,
            {
                expiresIn: process.env.EXPIRES_IN,
            }
        );

        //response to user
        const loggedInUser = await User.findById(user._id).select("-password ");

        //return response
        return res.status(200).json({
            status: "success",
            data: {
                user: loggedInUser,
                token: token,
            },
            message: "User Login Successfully",
        });
    } catch (error) {
        console.log("Error: ", error.message);
    }
};

// const getProfile = async (req, res) => {
//     try {
//         const { id } = req.params;

//         const user = await User.findById(id).select("-password");
//         return res.status(200).json({
//             status: "success",
//             data: user,
//         });
//     } catch (error) {
//         return res.status(500).json({
//             status: "failed",
//             error: error.message,
//         });
//     }
// };

// const getAllUser = async (req, res) => {
//     try {
//         const user = await User.find().select("-password");
//         console.log(user);
//         return res.status(200).json({
//             status: "success",
//             data: user,
//         });
//     } catch (error) {
//         return res.status(500).json({
//             status: "failed",
//             error: error.message,
//         });
//     }
// };

export { registerUser, loginUser };
