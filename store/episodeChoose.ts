import puppeteer from 'puppeteer';

export const useEpisode = () => {
  const episode: Ref<number> = ref(1);

  const loadEpisode = async (episode: string) => {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      
      await page.setCookie({ name: 'player[wap_player_res]', value: '720' });

      const url = `https://jut.su/${episode}`

      await page.goto(url);

      const videoSrcs = await page.evaluate(() => {
        const videos = Array.from(document.querySelectorAll('video'));
        return videos.map(video => video.getAttribute('src'));
      });

      console.log('Video Sources:', videoSrcs);

      await browser.close();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return {
    episode,
    loadEpisode
  };
};
