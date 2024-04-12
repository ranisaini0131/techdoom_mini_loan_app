import mongoose from "mongoose";
// Define User Schema
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        role: {
            type: String,
            required: true,
            enum: ["user", "admin"],
            default: "user",
        },
        otp: {
            type: Number,
        },

        otpExpire: Date,
    },
    {
        timestamps: true,
    }
);

// Create User Model
const User = mongoose.model("User", userSchema);

export default User;
