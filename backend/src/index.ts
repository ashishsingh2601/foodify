import express, { Request, Response } from "express"
import cors from "cors"
import "dotenv/config"
import mongoose from "mongoose"
import myUserRoute from "./routes/MyUserRoute"
import { v2 as cloudinary } from "cloudinary"
import myRestaurantRoute from "./routes/MyRestaurantRoute";
import restaurantRoute from "./routes/RestaurantRoute";
import orderRoute from "./routes/OrderRoute";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
    console.log("Connected to DB!");
}).catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1); // Exit the process on failure
});

// cloudinary connection
if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    throw new Error("Missing Cloudinary configuration.");
}
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
console.log("Registering restaurant routes...");
app.use("/api/my/restaurant", myRestaurantRoute);
console.log("Restaurant routes registered!");

app.use("/api/restaurant", restaurantRoute);
app.use("/api/order", orderRoute);


app.listen(process.env.PORT || 6000, () => {
    console.log(`Server stated on: ${process.env.PORT}`);
});
