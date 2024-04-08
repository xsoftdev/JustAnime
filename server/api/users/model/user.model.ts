import mongoose, { Schema, model } from "mongoose";
import { IUser } from "~/server/interfaces/IUser";

const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  level: { type: String, default: 'F-Ранг' },
  recent_played: [{ type: String }]
}, {
  timestamps: true
});

const UserModel = model<IUser>('User', userSchema);

export default UserModel;
