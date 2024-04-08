// server/api/users/[username].get.ts
import { defineEventHandler } from 'h3';
import UserModel from '~/server/api/users/model/user.model';

export default defineEventHandler(async (event) => {
  try {
    const username = event.context.params!.username;

    const user = await UserModel.findOne({ username }).select('-password'); 

    if (!user) {
      return { success: false, message: 'User not found' };
    }
    return { success: true, data: user };
  } catch (e) {
    return { success: false, message: `Error fetching user: ${e}` };
  }
});