import express from "express";
const router = express.Router();
import userSignup from "../controller/user_controller";

router.post("/signup", userSignup)
export default router;