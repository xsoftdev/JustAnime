<script lang="ts" setup>
import { truncate } from "@/utils/truncate";
import { Skeleton } from "@/components/ui/skeleton";

const store = useColorMode();
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
});

const isLoaded = ref(false);

setTimeout(() => {
  isLoaded.value = true;
}, 1500);
</script>
<template>
  <template v-if="isLoaded">
    <div class="max-w-[240px] min-w-[140px] mx-auto">
      <NuxtImg :src="image" class="rounded-2xl mb-2" />
      <template v-if="store.value === 'dark'">
        <p class="font-semibold md:text-[18px] text-[14px] text-white mb-1">
          {{ truncate(title, 32) }}
        </p>
        <p class="text-white md:text-[14px] text-[12px]">
          {{ truncate(genre, 28) }}
        </p>
      </template>
      <template v-else>
        <p class="font-semibold text-[18px] text-black mb-1">
          {{ truncate(title, 32) }}
        </p>
        <p class="text-black text-[14px]">
          {{ truncate(genre, 28) }}
        </p>
      </template>
    </div>
  </template>
  <template v-else>
    <div class="max-w-[270px] mx-auto">
      <Skeleton
        class="rounded-2xl mb-2 h-[300px] w-[250px] bg-neutral-400"
      ></Skeleton>
      <Skeleton class="w-[250px] h-[30px] bg-neutral-400 mb-1"></Skeleton>
      <Skeleton class="w-[250px] h-[25px] bg-neutral-400 mb-1"></Skeleton>
    </div>
  </template>
</template>
