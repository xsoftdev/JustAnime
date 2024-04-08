<template>
  <ScrollArea class="h-[84vh] w-full rounded-md dark py-4">
    <div class="text-white grid grid-cols-6 gap-12">
      <template v-for="(anime, index) in animeList" :key="index">
        <NuxtLink :to="`/watch/` + anime.url">
          <Card
            :image="anime.image"
            :title="anime.title"
            :genre="anime.genre"
          />
        </NuxtLink>
      </template>
    </div>
  </ScrollArea>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const animeList = ref([]);

fetch("/api/watch/catalog")
  .then((response) => response.json())
  .then((data) => {
    animeList.value = data.data;
  })
  .catch((error) => {
    console.error("Error fetching anime:", error);
  });
</script>
