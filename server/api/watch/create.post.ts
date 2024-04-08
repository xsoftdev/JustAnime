// server/api/watch/create.post.ts
import { defineEventHandler, readBody } from 'h3';
import WatchModel from '~/server/api/watch/model/video.model'; // Предполагается, что модель находится в этом месте

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const newWatch = new WatchModel(body);
    await newWatch.save();
    return { success: true, data: newWatch };
  } catch (e) {
    return { success: false, message: `Error creating watch item: ${e}` };
  }
});
