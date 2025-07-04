import express, { Request, Response } from "express"
import cors from "cors"
import "dotenv/config"
import mongoose from "mongoose"
import myUserRoute from "./routes/MyUserRoute"
import { v2 as cloudinary } from "cloudinary"

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
    console.log("Connected to DB!");
})

// cloudinary connection
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();

//middlewares
app.use(express.json());
app.use(cors({
    origin: [
        "https://foodify-frontend-048b.onrender.com",
        "http://localhost:3000", 
        "http://localhost:5173", 
    ]
}));


app.get("/health", async (req: Request, res: Response) => {
    res.send({
        message: "Health OK!"
    });
});

app.use("/api/my/user", myUserRoute);


app.listen(process.env.PORT || 6000, () => {
    console.log(`Server stated on: ${process.env.PORT}`);
});
