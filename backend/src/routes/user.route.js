import { Router } from "express";
import { loginUser, registerUser } from "../controllers/user.controller.js";
import { authorisedUser } from "../middlewares/verifyJWT.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const router = Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
// router.get("/user-profile/:id", authorisedUser, getProfile)
// router.get("/getAllUsers", authorisedUser, isAdmin, getAllUser)

export default router;
