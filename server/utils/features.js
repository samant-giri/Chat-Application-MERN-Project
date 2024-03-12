import mongoose from "mongoose";
import jwt from "jsonwebtoken";

export const cookieOptions = {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    sameSite: "none",
    httpOnly: true,
    secure: true,
}

export const connectDB = (url) =>
  mongoose
    .connect(url, { dbName: "Chat_MERN" })
    .then((data) => console.log(`Database connected : ${data.connection.host}`))
    .catch((err) => {
      throw err;
    });

export const sendToken = (res, user, code, message) => {
    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);

    return res.status(code)
        .cookie("chattu-token", token, cookieOptions)
        .json({
        success: true,
        message,
    });
};

export const emitEvent = (req, event, user, data) => { 
  console.log("Emitting event", event);
};
