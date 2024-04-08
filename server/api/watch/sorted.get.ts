import { defineEventHandler, readBody } from 'h3';
import WatchModel from '~/server/api/watch/model/video.model';

export default defineEventHandler(async (event) => {
  try {
    const body: Record<string, any> = await readBody(event);

    let filter: Record<string, boolean> = {};
    if (body && typeof body.item !== 'undefined') {
      filter[body.item] = true;
    }

    const results = await WatchModel.find(filter).limit(60);

    return { success: true, data: results };
  } catch (e) {
    return { success: false, message: `Error fetching filtered anime: ${e}` };
  }
});