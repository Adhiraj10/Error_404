import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import userRouter from './routes/auth.js';
import shopRouter from './routes/shops.js'
import path from 'path'
import cors from 'cors'
import {fileURLToPath} from 'url';
import productRouter from './routes/products.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())
//mongodb+srv://adminTanish:<password>@cluster0.v510cyv.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.2srh4x5.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,)
.then(() => console.log("CONNECTION SUCCESSFULL"))
.catch((err) => console.log(err));
app.use("/public",express.static(path.join(__dirname , "uploads")));
app.use("/api",userRouter); //SignIn/SignUp Normal Users
app.use("/api" , shopRouter)
app.use("/api",productRouter)
app.listen(process.env.PORT|| 5000, () => console.log("Listening"));