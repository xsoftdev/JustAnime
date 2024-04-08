<template>
  <CommonHead :breadcrumbs="'Ранги на сайте'" />
  <CommonSearch class="mb-6"/>
  <div class="flex justify-between pt-4 flex-wrap gap-10">
    <template v-for="(item, idx) in ranks" :key="idx">
      <div class="max-w-[320px]">
        <div class="flex flex-row items-center mb-3">
          <Skeleton class="h-16 w-16 rounded-full mr-4" />
          <div class="space-y-2">
            <p class="w-[240px] rounded-xl dark:text-neutral-200 text-neutral-700 py-[2px]">
              @MisakiHakahara
            </p>
            <template v-if="item.title === 'F-Ранг'">
              <p class="w-[180px] rounded-xl dark:text-neutral-200 text-neutral-700 py-[2px]">
                {{ item.title }}
              </p>
            </template>
            <template v-else-if="item.title === 'E-Ранг'">
              <p class="w-[180px] rounded-xl text-yellow-200 py-[2px]">
                {{ item.title }}
              </p>
            </template>
            <template v-else-if="item.title === 'D-Ранг'">
              <p class="w-[180px] rounded-xl text-orange-300 py-[2px]">
                {{ item.title }}
              </p>
            </template>
            <template v-else-if="item.title === 'C-Ранг'">
              <p class="w-[180px] rounded-xl text-red-300 py-[2px]">
                {{ item.title }}
              </p>
            </template>
            <template v-else-if="item.title === 'B-Ранг'">
              <p class="w-[180px] rounded-xl text-red-400 py-[2px]">
                {{ item.title }}
              </p>
            </template>
            <template v-else-if="item.title === 'A-Ранг'">
              <p class="w-[180px] rounded-xl text-red-600 py-[2px]">
                {{ item.title }}
              </p>
            </template>
            <template v-else-if="item.title === 'S-Ранг'">
              <p class="w-[180px] rounded-xl text-violet-200 py-[2px]">
                {{ item.title }}
              </p>
            </template>
            <template v-else-if="item.title === 'SS-Ранг'">
              <p class="w-[180px] rounded-xl text-violet-400 py-[2px]">
                {{ item.title }}
              </p>
            </template>
            <template v-else-if="item.title === 'SSS-Ранг'">
              <p class="w-[180px] rounded-xl text-violet-600 py-[2px]">
                {{ item.title }}
              </p>
            </template>
            <template v-else-if="item.title === 'SSS+ Ранг'">
              <p class="w-[180px] rounded-xl rgb-text py-[2px]">
                {{ item.title }}
              </p>
            </template>
          </div>
        </div>
        <span class="dark:text-neutral-400 text-neutral-500">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { Skeleton } from "@/components/ui/skeleton";
const ranks = [
  {
    title: "F-Ранг",
    text: "Каждый пользователь который зарегистрировался получает F-Ранг, и получает возможность добавлять в закладки и получать достижения",
  },
  {
    title: "E-Ранг",
    text: "Этот ранг уже получить труднее чем F-Ранг, однако после просмотра 5 серий аниме ты сможешь получить это ранг",
  },
  {
    title: "D-Ранг",
    text: "Данный ранг можно получить при просмотре 1 сезона (12 серий) аниме, и получить доступ в чат D-Ранговых (ТГ)",
  },
  {
    title: "C-Ранг",
    text: "C-Ранг уже серьезно, его можно получить за просмотр аниме (36 серий). Доступ к чату с идеями для Админов",
  },
  {
    title: "B-Ранг",
    text: "B-Ранг - состоявшийся фанат JustAnime, мы будем рады видеть подобных людей в нашей команде. (100 Серий)",
  },
  {
    title: "A-Ранг",
    text: "При достижении A-Ранга появится возможность стать полноценным помощником Администраторам. Условие - 200 Серий",
  },
  {
    title: "S-Ранг",
    text: "Такого человека невозможно не назвать лучшим из лучших, не один день смотревших Аниме и по истине разбирающегося. (500 Серий)",
  },
  {
    title: "SS-Ранг",
    text: "Ты просто нечто если достиг SS-Ранга, это просто невероятно насколько же много у тебя познаний?! Условие - (700 Серий)",
  },
  {
    title: "SSS-Ранг",
    text: "Описать такого человека невозможно, перейдем сразу к делу - войдешь в состав Модераторов? Условие - (1000 Серий)",
  },
  {
    title: "SSS+ Ранг",
    text: "Ты вообще человек? Давай к нам в Админ состав? Условие - (2250 Серий - 870 часов просмотра аниме...)",
  },
];
</script>
