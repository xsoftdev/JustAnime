// server/api/auth/login.post.ts
import { defineEventHandler, readBody } from "h3";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "~/server/api/users/model/user.model";

const config = useRuntimeConfig()
const SECRET_KEY = config.privateRuntimeConfig.secret_key;

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, password } = body;

  const user = await UserModel.findOne({ username });
  if (!user) {
    return { success: false, message: "User not found" };
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return { success: false, message: "Invalid password" };
  }

  const accessToken = jwt.sign({ userId: user._id }, SECRET_KEY, {
    expiresIn: "1h",
  });

  return {
    success: true,
    message: "Login successful",
    accessToken,
  };
});
