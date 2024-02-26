
import { app } from "./app.js"
import colors from "colors";
import Razorpay from "razorpay";
import connectDB from "./config/db.js";

connectDB();

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });

//PORT
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(
      `Server Running on mode on port ${PORT}`.bgCyan
        .white
    );
  });