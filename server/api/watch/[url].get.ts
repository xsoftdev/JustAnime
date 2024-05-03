import { defineEventHandler } from 'h3';
import puppeteer from 'puppeteer';
import cheerio from 'cheerio';
import WatchModel from './model/video.model';

interface EventContext {
  params?: {
    url?: string;
  };
}

interface Series {
  player: any;
  posters: any;
}

export default defineEventHandler(async (event: { context: EventContext }) => {
  try {
    const watchData = await WatchModel.findOne({ url: event.context.params!.url });

    let player: any;
    let posters: any;

    const response = await fetch(`https://api.anilibria.tv/v3/title?code=${event.context.params!.url}`);
    const responseData = await response.json();

    if (responseData && responseData.player && responseData.posters) {
      player = responseData.player;
      posters = responseData.posters;
    } else {
      throw new Error('Missing player or posters data in API response');
    }

    return {
      success: true,
      data: watchData || {},
      assets: {
        player: player,
        posters: posters
      }
    };
  } catch (error) {
    console.error(error);
    return { success: false, message: `Error fetching data: ${error}` };
  }
});
