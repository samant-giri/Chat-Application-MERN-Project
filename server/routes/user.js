import express from "express"
import { getMyProfile, login, logout, newUser, searchUser } from "../controller/user.js";
import { singleAvatar } from "../middlewares/multer.js";
import { isAuthenticated } from "../middlewares/auth.js";

const app = express.Router();

app.post("/new", singleAvatar,newUser);
app.post("/login", singleAvatar, login);

// After here user must be logged in to access route
app.use(isAuthenticated);
app.get("/me", getMyProfile);
app.get("/logout", logout);
app.get("/search", searchUser);

export default app;