import { defineEventHandler } from 'h3';
import puppeteer from 'puppeteer';
import cheerio from 'cheerio';
import WatchModel from './model/video.model';

interface EventContext {
  params?: {
    url?: string;
  };
}

interface Episode {
  href: string;
  text: string;
}

export default defineEventHandler(async (event: { context: EventContext }) => {
  try {
    const url = `https://jut.su/${event.context.params!.url}`;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const html = await page.content();
    const $ = cheerio.load(html);

    const episodes: Episode[] = [];
    $('div#dle-content div a').each((i, element) => {
      const href = $(element).attr('href');
      const text = $(element).text().trim();
      if (href && href.includes('episode')) {
        episodes.push({ href, text });
      }
    });

    await browser.close();

    const watchData = await WatchModel.findOne({ url: event.context.params!.url });

    return {
      success: true,
      data: watchData || {},
      assets: episodes,
    };
  } catch (error) {
    console.error(error);
    return { success: false, message: `Error fetching data: ${error}` };
  }
});
