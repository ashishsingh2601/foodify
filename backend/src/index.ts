import express, { Request, Response } from "express"
import cors from "cors"
import "dotenv/config"
import mongoose from "mongoose"

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
    console.log("Connected to DB!");
})

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

// endpoints
app.get("/test", async (req: Request, res: Response) => {
    res.json( {
        message: "Hello!"
    });
})


app.listen(process.env.PORT || 6000, () => {
    console.log(`Server stated on: ${process.env.PORT}`);
})

