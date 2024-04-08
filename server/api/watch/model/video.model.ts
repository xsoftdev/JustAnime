import mongoose, { Schema, model } from "mongoose";

// Определение схемы для качества видео
const VideoQualitySchema = new Schema({
  resolution: { type: String, required: true }, // '480p', '720p', '1080p'
  videoLink: { type: String, required: true }, // Ссылка на видео
});

// Определение схемы для серии
const SeriesSchema = new Schema({
  title: { type: String, required: true }, // Название серии
  videoQualities: [VideoQualitySchema], // Варианты качества видео
});

// Определение схемы для WatchModel
const WatchSchema = new Schema(
  {
    title: { type: String, required: true }, // Название видео/сериала/фильма
    genre: { type: String, required: true }, // Жанр
    image: { type: String, required: true }, // Ссылка на изображение
    description: {type: String, required: true},
    views: { type: Number, required: true },
    new: { type: Boolean, default: false }, // Новинка
    ongoing: { type: Boolean, default: false }, // Онгоинг
    finished: { type: Boolean, default: false }, // Завершено
  },
  {
    timestamps: true, // Добавляем поля createdAt и updatedAt
  }
);

const WatchModel = model("Watch", WatchSchema);

export default WatchModel;
