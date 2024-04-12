import mongoose, { Schema } from "mongoose";

const loanSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        amount: {
            type: Number,
            require: true,
        },
        terms: {
            type: Number,
            require: true,
        },

        status: {
            type: String,
            enum: ["pending", "approved", "rejected", "paid", "partial"],
            default: "pending",
        },
        remainingAmount: {
            type: Number,
        },
        nextPaymentDate: {
            type: String,
        },
        termAmount: {
            type: Number,
        },
        remainingTerms: {
            type: Number,
        },
    },
    { timestamps: true }
);

const Loan = mongoose.model("Loan", loanSchema);

export default Loan;
