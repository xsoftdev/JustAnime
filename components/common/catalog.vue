<template>
  <ScrollArea class="h-[84vh] w-full rounded-md dark">
    <div class="text-white custom-grid gap-12">
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
<style scoped>
.custom-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}
@media (max-width: 1280px) {
  .custom-grid {
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  }
}
</style>
