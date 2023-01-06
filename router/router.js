import express from "express";
const router = express.Router();
import { userSignup, userlogin } from "../controller/user_controller";
import { getProducts, getProductByid } from "../controller/product_controller"
import { addPaymentGeteWay, paytmResponse } from "../controller/payment_controller";
router.post("/signup", userSignup)
router.post("/login", userlogin)
router.get("/products", getProducts)
router.get("/product/:id", getProductByid)
router.post("/payment", addPaymentGeteWay)
router.post("/callback", paytmResponse)
export default router;