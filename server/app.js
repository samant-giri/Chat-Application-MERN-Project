import express, { urlencoded } from "express";
import { connectDB } from "./utils/features.js";
import dotenv from "dotenv";
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";

import userRoute from "./routes/user.js";
import chatRoute from "./routes/chat.js";
import { createUser } from "./seeders/user.js";

dotenv.config({
    path: "./.env"
})

const port = process.env.PORT || 3000;

connectDB(process.env.MONGO_URI);
// createUser(10);

const app = express();

// using middlewares here 
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hey how are you");
});

app.use("/user", userRoute);
app.use("/chat", chatRoute)

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
