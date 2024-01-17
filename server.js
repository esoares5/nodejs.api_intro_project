import express from "express";
import dotenv from "dotenv";
import { errorHandler } from "./middleware/errorhandler.js";
import productRoutes from "./routes/productRoutes.js";
import connectDb from "./config/dbConnection.js";

dotenv.config();
connectDb();

const app=express();
const port=process.env.PORT||5000;

app.use(express.json())
app.use("/api/products", productRoutes)
app.use(errorHandler);


app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});