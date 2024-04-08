<template>
  <div
    class="video-player bg-black relative rounded-2xl z-0"
    @mouseenter="controlPanel = true"
    @mouseleave="controlPanel = false"
  >
    <video
      ref="videoElement"
      class="video-js w-full rounded-2xl"
      @timeupdate="onTimeUpdate"
      @loadedmetadata="onLoadedMetadata"
      @click="togglePlay"
      @play="isPlaying = true"
      @pause="isPlaying = false"
      id="custom-player-JustAnime"
    >
      <source :src="videoSrc" type="video/mp4" />
    </video>
    <div class="absolute top-5 right-5 z-[10000]">
      <Select>
        <SelectTrigger class="w-[240px] dark text-neutral-400">
          <SelectValue placeholder="Выберите серию" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Серии</SelectLabel>
            <template v-for="(item, idx) in props.videoData" :key="idx">
              <SelectItem :value="item.text">
                <div class="flex flex-row">
                  <span class="mr-2">{{ idx + 1 }}.</span>
                  <p>{{ truncate(item.text, 20) }}</p>
                </div>
              </SelectItem>
            </template>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <template v-if="controlPanel === true" @mouseenter="controlPanel = true">
      <div
        class="video-player__controls absolute bottom-4 left-[5%] max-w-[90%] w-full flex items-center justify-between p-4 bg-opacity-50 bg-[#00000090] rounded-full"
      >
        <button @click="togglePlay" class="play-pause-button mr-6">
          <span v-if="isPlaying" class="icon-pause"
            ><NuxtImg src="/icons/Pause.svg" class="w-10 h-10"
          /></span>
          <span v-else class="icon-play"
            ><NuxtImg src="/icons/Player.svg" class="w-10 h-10"
          /></span>
        </button>
        <div class="flex items-center">
          <span class="elapsed-time text-sm text-white tracking-wider">{{
            elapsedTime
          }}</span>
          <!-- <Progress v-model="progress" class="w-3/5" @input="onScrub" /> -->
          <span class="total-time text-sm text-white tracking-wider mr-6">{{
            formattedDuration
          }}</span>
        </div>
        <div class="controls-right flex items-center justify-between">
          <button @click="toggleMute" class="mute-button">
            <!-- Icons can be replaced with SVG or Tailwind CSS icons -->
            <span v-if="isMuted" class="icon-unmute">🔈</span>
            <span v-else class="icon-mute">
              <NuxtImg src="/icons/audio.svg" class="w-8 h-8" />
            </span>
          </button>
          <button class="settings-button pl-4">
            <NuxtImg src="/icons/settings.svg" class="w-8 h-8" />
          </button>
          <button class="fullscreen-button pl-4" @click="toggleFullScreen">
            <NuxtImg src="/icons/fullscreen.svg" class="w-8 h-8" />
          </button>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const props = defineProps({
  videoData: {
    type: Array, // User[]?
  },
})
console.log(props.videoData[0].href)
const controlPanel = ref(false);
const videoSrc = ref(props.videoData[0].href)
const videoElement = ref(null);
const isPlaying = ref(false);
const isMuted = ref(false);
const duration = ref(0);
const currentTime = ref(0);

const togglePlay = () => {
  if (videoElement.value.paused) {
    videoElement.value.play();
  } else {
    videoElement.value.pause();
  }
};
const progress = computed({
  get: () => (currentTime.value / duration.value) * 100,
  set: (newValue) => {
    videoElement.value.currentTime = (newValue / 100) * duration.value;
  },
});
const onTimeUpdate = () => {
  currentTime.value = videoElement.value.currentTime;
};
const toggleFullScreen = () => {
  const videoElement = document.getElementById("custom-player-JustAnime");

  if (!document.fullscreenElement) {
    videoElement.requestFullscreen().catch((err) => {
      alert(
        `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
      );
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
};


const onScrub = (event) => {
  const progressBar = event.currentTarget;
  const { left, width } = progressBar.getBoundingClientRect();
  const clickX = event.clientX - left;
  const clickRatio = clickX / width;
  const newTime = clickRatio * duration.value;
  videoElement.value.currentTime = newTime;
};

const onLoadedMetadata = () => {
  duration.value = videoElement.value.duration;
};

const toggleMute = () => {
  videoElement.value.muted = !videoElement.value.muted;
  isMuted.value = videoElement.value.muted;
};

const elapsedTime = computed(() => {
  const minutes = Math.floor(currentTime.value / 60);
  const seconds = Math.floor(currentTime.value % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
});

const formattedDuration = computed(() => {
  const minutes = Math.floor(duration.value / 60);
  const seconds = Math.floor(duration.value % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
});
</script>

<style scoped>
.video-player {
  border-radius: 16px;
}

.video-player__controls {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 10px;
  align-items: center;
  /* ... */
}

.progress-bar-container {
  width: 100%; /* ensure it takes up as much space as it can in the grid */
  position: relative; /* for precise click positioning */
  /* ... */
}

.progress-bar {
  /* Adjust the styling as needed */
  height: 10px;
  cursor: pointer; /* to indicate it's clickable */
  /* ... */
}
</style>
