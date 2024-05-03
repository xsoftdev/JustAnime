<template>
  <CommonHead :breadcrumbs="'Новини'" />
  <CommonSearch />
  <div class="flex flex-wrap gap-y-4">
    <template v-for="(item, idx) in items" :key="idx">
      <div class="flex flex-row items-center p-4 max-w-[760px]">
        <div class="poster mr-4">
          <NuxtImg :src="item.src" alt="" class="md:min-w-[265px]" />
        </div>
        <div class="info">
          <div class="text-[20px] mb-4 text-white font-bold tracking-wider">
            {{ item.title }}
          </div>
          <div class="text-sm mb-4 text-neutral-400">
            {{ item.desc }}
          </div>
          <div class="flex flex-row justify-between items-end">
            <div class="user flex flex-row items-center">
              <div class="user-img mr-4">
                <NuxtImg src="/news/hihihaha.png" class="w-[45px]"/>
              </div>
              <div class="user-info flex flex-col">
                <p class="rgb-text font-bold">{{ item.author }}</p>
              <p class="text-neutral-400">{{ item.date }}</p>
              </div>
            </div>
            <div class="button">
              <Button class="w-[191px]">Перейти</Button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script setup>
const items = ref([
  {
    src: "/news/news1.png",
    title: "Новая 14 серия Solo Leveling уже доступна!",
    desc: "Coffee is the most popular drink in the world and drinking coffee in the morning has become a routine for many people before their activities. Besides being considered to be able to provide energy intake, it turns out that the ...",
    author: "MisakiHakahara",
    date: "Сегодня 16:03",
    url: "solo-leveling-14-seriya",
  },
  {
    src: "/news/news2.png",
    title: "Стала известна дата выхода нового сезона аниме “Черный клевер”",
    desc: "Coffee is the most popular drink in the world and drinking coffee in the morning has become a routine for many people before their activities. Besides being considered to be able to provide energy intake, it turns out that the ...",
    author: "MisakiHakahara",
    date: "Сегодня 16:03",
    url: "stala-izvesna-data-vihoda-novogo-sezona-anime_cherniy_klever",
  },
  {
    src: "/news/news3.png",
    title: "Новая 14 серия Solo Leveling уже доступна!",
    desc: "Coffee is the most popular drink in the world and drinking coffee in the morning has become a routine for many people before their activities. Besides being considered to be able to provide energy intake, it turns out that the ...",
    author: "MisakiHakahara",
    date: "Сегодня 16:03",
    url: "solo-leveling-14-seriya",
  },
  {
    src: "/news/news4.png",
    title: "Новая 14 серия Solo Leveling уже доступна!",
    desc: "Coffee is the most popular drink in the world and drinking coffee in the morning has become a routine for many people before their activities. Besides being considered to be able to provide energy intake, it turns out that the ...",
    author: "MisakiHakahara",
    date: "Сегодня 16:03",
    url: "solo-leveling-14-seriya",
  },
]);
</script>
