<template>
  <div class="relative">
    <div class="video-container">
      <video
        ref="videoPlayer"
        class="video-js vjs-default-skin vjs-fluid"
        id="custom-player"
        preload="auto"
        controls
      ></video>
    </div>
    <div class="xl:absolute flex flex-col xl:pt-0 pt-4 right-4 top-4">
      <Select class="mb-4">
        <SelectTrigger
          class="md:w-[240px] mb-4 w-full bg-neutral-200 text-neutral-900 dark:text-neutral-200 dark:bg-neutral-900"
        >
          <SelectValue placeholder="Выбери серию" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <template
              v-for="(item, index) in props.videoData.player.list"
              :key="item.uuid"
            >
              <SelectItem
                :value="item.hls.fhd"
                @click="(selectedSeries = item.hls.fhd), (choosedSeries = item)"
              >
                {{ `${item.episode}. ${item.name || "Серия"}` }}
              </SelectItem>
            </template>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger
          class="md:w-[240px] w-full bg-neutral-200 text-neutral-900 dark:text-neutral-200 dark:bg-neutral-900"
        >
          <SelectValue placeholder="Выбери качество (480p)" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <template v-for="(item, index) in choosedSeries">
              <SelectItem
              :value="item"
              >
              <p @click="chooseQuality = item.includes('720') ? 'hd' : item.includes('480') ? 'sd' : item.includes('1080') ? 'fhd' : null">
                {{ item.includes('720') ? 'HD (720p)' : item.includes('480') ? 'SD (480p)' : item.includes('1080') ? 'Full HD (1080p)' : '' }}
              </p>
            </SelectItem>
              </template>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  </div>
</template>

<script setup>
import { Select } from "@/components/ui/select";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { ref, onMounted, watch } from "vue";
const props = defineProps({
  videoData: {
    type: Array,
  },
});
const choosedSeries = ref(props.videoData.player.list[1].hls);
const chooseQuality = ref(null);
let player = null;
const videoPlayer = ref();
const selectedSeries = ref(props.videoData.player.list[1].hls.fhd);
const nextSeries = ref()
onMounted(() => {
  if (videoPlayer.value) {
    player = videojs(videoPlayer.value, {
      autoplay: false,
      controls: true,
    });

    player.ready(() => {
      loadVideo();
    });
  } else {
    console.error("Video element not found!");
  }
});

const loadVideo = () => {
  if (player) {
    const link = `${props.videoData.player.host}${selectedSeries.value}`;
    player.src([
      {
        src: `https://${link}`,
        type: "application/x-mpegURL",
      },
    ]);
  } else {
    console.error("Player not initialized!");
  }
};

watch(
  selectedSeries,
  () => {
    loadVideo();
  },
  { immediate: true },
);

watchEffect(chooseQuality, () => {
  console.log("Quality changed:", chooseQuality);
});
</script>

<style scoped>
.video-container {
  width: 100%; /* Ensures video fills container width */
  height: auto; /* Allows video to adjust based on aspect ratio */
}

.custom-player {
  height: 100% !important;
}
</style>
