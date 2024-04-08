import { defineEventHandler } from 'h3';
import WatchModel from '~/server/api/watch/model/video.model';

export default defineEventHandler(async (event) => {
  try {
    const popularAnime = await WatchModel.find({})
      .sort({ views: -1 }) 
      .limit(60);

    return { success: true, data: popularAnime };
  } catch (e) {
    return { success: false, message: `Error fetching popular anime: ${e}` };
  }
});