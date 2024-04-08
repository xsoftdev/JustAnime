import { defineEventHandler, readBody } from 'h3';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from './model/user.model';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const SECRET_KEY = config.private.secret_key; // Убедитесь, что ключи правильно заданы в nuxt.config
  const ACCESS_TOKEN_EXPIRES = '15m';
  const REFRESH_TOKEN_EXPIRES = '7d';

  try {
    const body = await readBody(event);
    const { username, email, password } = body;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return { success: false, message: 'Email already in use' };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
      level: "F-Ранг",
      recent_played: []
    });

    await newUser.save();

    const accessToken = jwt.sign({ userId: newUser._id }, SECRET_KEY, { expiresIn: ACCESS_TOKEN_EXPIRES });
    const refreshToken = jwt.sign({ userId: newUser._id }, SECRET_KEY, { expiresIn: REFRESH_TOKEN_EXPIRES });

    return {
      success: true,
      message: 'User created successfully',
      data: {
        user: {
          id: newUser._id,
          username: newUser.username,
          email: newUser.email
        },
        tokens: {
          accessToken,
          refreshToken
        }
      }
    };
  } catch (e) {
    return { success: false, message: `Error creating user: ${e}` };
  }
});
