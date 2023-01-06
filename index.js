
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
const app = express()
import DefaultData from "./default";
dotenv.config()
import router from "./router/router";
import cors from "cors"
import bodyParser from "body-parser";
import { v4 as uuid } from "uuid"
// const USERNAME = process.env.DB__USERNAME
// const PASSWORD = process.env.DB_PASSWORD

app.use(cors())

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/", router)


// server to MD cloud connect by using mongoose
mongoose.set("strictQuery", false);
const URL = `mongodb+srv://user:codeinterview@ecommorce.hjbmbqw.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connection to CosmosDB successful"))
    .catch((err) => console.error(err));




const PORT = 8000
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`))

DefaultData();



export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams["MID"] = process.env.PAYTM_MID;
paytmParams["WEBSITE"] = process.env.PAYTM_WEBSITE;
paytmParams["CHANNEL_ID"] = process.env.PAYTM_CHANNEL_ID;
paytmParams["INDUSTY_TYPE_ID"] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams["ORDER_ID"] = uuid();
paytmParams["CUST_ID"] = process.env.PAYTM_CUST_ID;
paytmParams["TXN_AMOUNT"] = "100";
paytmParams["CALLBACK_URL"] = "http://localhost:8000/callback";
paytmParams["EMAIL"] = "sagarkumarmohapatra5@gmail.com";
paytmParams["MOBIL_NO"] = "9777937220";




