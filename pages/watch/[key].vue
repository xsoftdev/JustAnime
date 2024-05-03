<script lang="ts" setup>
import { Player } from "@/components/ui/VideoPlayer";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Skeleton } from "@/components/ui/skeleton";
import { useRoute } from "vue-router";
import { ref } from "vue";
import { ScrollArea } from "@/components/ui/scroll-area";

const route = useRoute();
const key = route.params.key;

const anime = ref([]);
const video = ref([]);
let posters;
const isLoaded = ref(false);

fetch(`/api/watch/${key}`)
  .then((response) => response.json())
  .then((data) => {
    anime.value = data.data;
    video.value = data.assets;
    posters = data.assets.posters;
    setTimeout(() => {
      isLoaded.value = true;
    }, 1500);
  })
  .catch((error) => {
    console.error("Error fetching anime:", error);
  });

const truncate = (text: string, maxLength: number): string => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength - 3) + "...";
  }

  return text;
};
</script>
<template>
  <template v-if="isLoaded">
    <CommonHead :breadcrumbs="truncate(anime.title, 16)" />
  </template>
  <CommonSearch />

  <template v-if="isLoaded">
      <div class="flex xl:flex-row flex-col xl:items-start items-center py-5">
        <div class="img px-4 xl:max-w-[300px] w-full">
          <img :src="anime.image" class="rounded-2xl w-full mb-2" />
          <p class="dark:text-neutral-200 text-neutral-700 mb-1">
            {{ anime.title }}
          </p>
          <p class="dark:text-neutral-400 text-neutral-600 mb-4">
            {{ anime.genre }}
          </p>
          <div class="grid grid-cols-2 gap-2 mb-4">
            <Toggle class="text-neutral-400">
              <NuxtImg src="/icons/achievements.svg" class="w-6 h-6 mr-1" />
              Достижения
            </Toggle>
            <Toggle class="text-neutral-400">
              <NuxtImg src="/icons/bookmarks.svg" class="w-6 h-6 mr-1" />
              Закладки
            </Toggle>
          </div>
          <Button class="w-full mb-4">Включить уведомления</Button>
          <Button class="w-full mb-4 text-neutral-400" variant="outline"
            >Сообщить об ошибке</Button
          ><Button :disabled="true" class="w-full mb-4 text-neutral-400" variant="ghost"
            >Коментарии пользователей</Button
          >
        </div>
        <div class="player md:w-[80%] w-full h-[95%]">
          <Player :videoData="video" />
        </div>
      </div>
      <article
        class="px-4 text-neutral-400 lg:text-md xl:text-left text-center text-sm"
      >
        {{ anime.description }}
      </article>
  </template>
  <template v-else>
    <div class="grid grid-cols-10 py-5">
      <div class="img col-span-2 px-4">
        <Skeleton class="rounded-2xl w-full h-[380px] mb-2" />
        <Skeleton class="h-[24px] mb-1"></Skeleton>
        <Skeleton class="h-[24px] mb-4"></Skeleton>
        <div class="grid grid-cols-2 gap-2 mb-4">
          <Skeleton class="w-full h-[36px]"></Skeleton>

          <Skeleton class="w-full h-[36px]"></Skeleton>
        </div>
        <Skeleton class="w-full h-[36px] mb-4"></Skeleton>
        <Skeleton class="w-full h-[36px] mb-4"></Skeleton>
      </div>
      <div class="player col-span-8">
        <Skeleton class="w-full h-[97%]"></Skeleton>
      </div>
    </div>
    <div class="px-4 h-full">
      <Skeleton class="w-full h-full pt-5"> </Skeleton>
    </div>
  </template>
</template>