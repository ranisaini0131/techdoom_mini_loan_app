import mongoose from "mongoose";

const repaymentSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        amountPaid: {
            type: Number,
            require: true,
        },
    },
    { timestamps: true }
);

const Repayment = mongoose.model("Repayment", repaymentSchema);

export default Repayment;
