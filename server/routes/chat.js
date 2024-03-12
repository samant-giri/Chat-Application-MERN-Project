import express from "express";
import { getMyChats, getMyGroups, newGroupChat } from "../controller/chat.js";
import { isAuthenticated } from "../middlewares/auth.js";

const app = express.Router();

app.use(isAuthenticated);
app.post("/new", newGroupChat);
app.get("/my", getMyChats);
app.get("/my/groups", getMyGroups);

export default app;