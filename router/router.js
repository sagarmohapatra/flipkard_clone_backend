import express from "express";
const router = express.Router();
import { userSignup, userlogin } from "../controller/user_controller";
import { getProducts } from "../controller/product_controller"

router.post("/signup", userSignup)
router.post("/login", userlogin)
router.get("/products", getProducts)
export default router;