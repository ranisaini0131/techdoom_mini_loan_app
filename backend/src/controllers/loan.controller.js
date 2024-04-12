import moment from "moment";
import mongoose from "mongoose";
import Loan from "../models/loan.model.js";
import Repayment from "../models/repayment.model.js";

const createLoan = async (req, res) => {
    try {
        console.log(req.user, "7");
        const { amount, terms } = req.body;

        const weekDate = moment().add(6, "days").format("YYYY-MM-DD");

        if (amount && terms) {
            //create new loan
            const newLoan = new Loan({
                user: req.user._id,
                amount,
                terms,
                remainingAmount: amount,
                leftTerms: terms,
                termAmount: amount / terms,
                nextPaymentDate: weekDate,
            });

            await newLoan.save();

            return res.status(200).json({
                status: "sucess",
                message: "Loan created successfully",
            });
        } else {
            return res.status(422).json({
                status: "fail",
                message: "Please provide required  fields",
            });
        }
    } catch (error) {
        console.log("Error: ", error.message);
    }
};

const repayLoan = async (req, res) => {
    try {
        const { loanId } = req.params;
        const { amount } = req.body;

        if (!loanId || !amount) {
            return res.status(422).json({
                status: "fail",
                message: "Provide required fields",
            });
        }

        const loan = await Loan.findById({ _id: loanId });

        if (loan.status === "paid" || loan.remainingAmount === 0) {
            return res.status(422).json({
                status: "fail",
                message: "Loan already paid",
            });
        }

        if (amount < loan.termAmount) {
            return res.status(422).json({
                status: "fail",
                message: `Your term amount is ${loan.termAmount}`,
            });
        }

        const remainingAmount = loan.remainingAmount - amount;
        const leftTerms = (loan.remainingAmount - amount) / loan.termAmount;
        const nextPaymentDate = moment(loan.nextPaymentDate)
            .add(6, "days")
            .format("YYYY-MM-DD");

        const updatedLoad = await Loan.findByIdAndUpdate(
            loanId,
            {
                $set: {
                    remainingAmount,
                    leftTerms,
                    nextPaymentDate: nextPaymentDate,
                    status: remainingAmount ? "partial" : "paid",
                },
            },
            {
                new: true,
            }
        );

        const repayment = new Repayment({
            loanId: loan._id,
            amount,
        });

        await repayment.save();

        return res.status(422).json({
            status: "success",
            message: "Installment paid Successfully!",
            data: {
                updatedLoad,
                repayment,
            },
        });
    } catch (error) {
        console.log(error.message);
    }
};

const getLoanById = async (req, res) => {
    try {
        console.log(req.user, "114");
        const loan = await Loan.find({ user: req.user._id });

        return res.status(200).json({
            status: "success",
            Loans: loan,
        });
    } catch (error) {
        console.log(error);
    }
};

const getLoans = async (req, res) => {
    try {
        const loans = await Loan.aggregate([
            // {
            //     $match: {
            //         user: req.user._id,
            //     },
            // },
            {
                $lookup: {
                    from: "repayments",
                    localField: "_id",
                    foreignField: "loanId",
                    as: "repayments",
                },
            },
        ]);

        return res.status(200).json({
            status: "success",
            Loans: loans,
        });
    } catch (error) {
        console.error(error);
    }
};

const updateLoan = async (req, res) => {
    try {
        const { loanId } = req.params;
        const { status } = req.body;

        if (!loanId || !status) {
            return res.status(422).json({
                status: "fail",
                message: "Provide required fields",
            });
        }

        const loan = await Loan.findByIdAndUpdate(
            loanId,
            { status },
            { new: true }
        );

        return res.status(200).json({
            status: "success",
            message: "Status updated",
            loan,
        });
    } catch (error) {
        console.error(error);
    }
};

export { createLoan, repayLoan, getLoanById, getLoans, updateLoan };
