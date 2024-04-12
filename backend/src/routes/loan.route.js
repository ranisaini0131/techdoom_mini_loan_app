import { Router } from "express";
import {
    createLoan,
    getLoans,
    getLoanById,
    repayLoan,
    updateLoan,
} from "../controllers/loan.controller.js";
import { authorisedUser } from "../middlewares/verifyJWT.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const router = Router();

router.post("/create-loan", authorisedUser, createLoan);

router.post("/repay/:loanId", authorisedUser, repayLoan);

router.get("/getLoans", authorisedUser, getLoans);

router.get("/getLoanById", authorisedUser, getLoanById);

router.patch("/updateLoan/:loanId", authorisedUser, isAdmin, updateLoan);

export default router;
