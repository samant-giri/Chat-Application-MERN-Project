import { compare } from "bcrypt";
import { User } from "../models/user.js";
import { cookieOptions, sendToken } from "../utils/features.js";
import { TryCatch } from "../middlewares/error.js";
import { ErrorHandler } from "../utils/utility.js";

export const newUser = TryCatch(async (req, res) => {
  const { name, username, password } = req.body;

  const avatar = {
    public_id: "kjbkj",
    url: "sdbahbubhjb",
  };

  const user = await User.create({
    name,
    username,
    password,
    avatar,
  });

  sendToken(res, user, 201, "User created");
});

export const login = TryCatch(async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username }).select("+password");

  if (!user) return next(new ErrorHandler("Invalid username or password", 404));

  const isMatch = await compare(password, user.password);

  if (!isMatch)
    return next(new ErrorHandler("Invalid password or password", 404));

  sendToken(res, user, 200, `Welcome back ${user.name}`);
});

export const getMyProfile = async (req, res, next) => {

  const user = await User.findById(req.user);
  console.log(req.user);

  res.status(200).json({
    success: true,
    user,
  });
};

export const logout = (req, res, next) => {
  return res
    .status(200)
    .cookie("chattu-token", "", { ...cookieOptions, maxAge: 0 })
    .json({
      success: true,
      message: "User logged out successfully",
    });
};

export const searchUser = () => {

  const { name } = req.query;
  return res
    .status(200)
    .json({
      success: true,
      message: name,
    });
}
