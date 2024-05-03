<script setup lang="ts">
import { useSideBar } from "~/store/sidebar";
import { Toggle } from "@/components/ui/toggle";
const colorMode = useColorMode();

const { redirectArray, scoped } = useSideBar();
const changeColorMode = () => {
  if (colorMode.value === "dark") {
    colorMode.value = "light";
  } else {
    colorMode.value = "dark";
  }
  localStorage.setItem("nuxt-color-mode", colorMode.value);
};
const selected = ref(false);
</script>
<template>
  <aside class="flex flex-col w-full">
    <NuxtLink to="/">
      <NuxtImg
        src="/images/logo-l.webp"
        alt="JustAnime logo"
        class="max-w-32 mb-8 mx-auto"
        :class="{ 'hidden' : colorMode.value === 'dark' }"
      />
    </NuxtLink>
    <NuxtLink to="/">
      <NuxtImg
        src="/images/logo.jpg"
        alt="JustAnime logo"
        class="max-w-32 mb-8 mx-auto"
        :class="{ 'hidden' : colorMode.value !== 'dark' }"
      />
    </NuxtLink>
    <p class="dark:text-white mb-8">Главное меню</p>
    <div
      class="border-dotted border-l-[2px] border-[#000] dark:border-[#fff] mb-8"
    >
      <template v-for="(item, idx) in redirectArray">
        <div class="hover:pl-5 duration-300">
          <template v-if="colorMode.value === 'dark'">
            <template v-if="item.name !== 'Спільнота'">
              <div class="hover:pl-5 duration-300">
                <NuxtLink
                  :to="item.link"
                  class="flex flex-row items-center mb-2 cursor-pointer dark:hover:bg-neutral-700 pl-2 p-1 rounded-2xl duration-300 dark:text-white hover:bg-neutral-400 hover:pl-5"
                >
                  <div class="icon">
                    <img :src="item.icon" class="w-5 h-5 mr-2" />
                  </div>
                  <div class="text">
                    <template v-if="item.custombg === true">
                      <p class="rgb-text">{{ item.name }}</p>
                    </template>
                    <template v-else>
                      {{ item.name }}
                    </template>
                  </div>
                </NuxtLink>
              </div>
            </template>
            <template v-else>
              <a
                href="https://discord.gg/rkeg68Zk5k"
                target="_blank"
                class="flex flex-row items-center mb-2 cursor-pointer dark:hover:bg-neutral-700 pl-2 p-1 rounded-2xl duration-300 dark:text-white hover:bg-neutral-100 hover:pl-5"
              >
                <div class="icon">
                  <img :src="item.icon" class="w-5 h-5 mr-2" />
                </div>
                <div class="text">
                  <template v-if="item.custombg === true">
                    <p class="rgb-text">{{ item.name }}</p>
                  </template>
                  <template v-else>
                    {{ item.name }}
                  </template>
                </div>
              </a>
            </template>
          </template>
          <template v-else>
            <template v-if="!item.locRefBool">
              <NuxtLink
                :to="item.link"
                class="flex flex-row items-center mb-2 cursor-pointer dark:hover:bg-neutral-700 pl-2 mr-8 p-1 rounded-2xl duration-300 dark:text-white hover:bg-neutral-100"
              >
                <div class="icon">
                  <img :src="item.aicon" class="w-5 h-5 mr-2" />
                </div>
                <div class="text">
                  <template v-if="item.custombg === true">
                    <p class="rgb-text">{{ item.name }}</p>
                  </template>
                  <template v-else>
                    {{ item.name }}
                  </template>
                </div>
              </NuxtLink>
            </template>
            <template v-else>
              <div
                class="flex flex-row items-center mb-2 cursor-pointer dark:hover:bg-neutral-700 pl-2 mr-8 p-1 rounded-2xl duration-300 dark:text-white hover:bg-neutral-100"
              >
                <div class="icon">
                  <img :src="item.aicon" class="w-5 h-5 mr-2" />
                </div>
                <div class="text">
                  <template v-if="item.custombg === true">
                    <p class="rgb-text">{{ item.name }}</p>
                  </template>
                  <template v-else>
                    {{ item.name }}
                  </template>
                </div>
              </div>
            </template>
          </template>
        </div>
      </template>
    </div>
    <p class="dark:text-white mb-8">Настройки</p>
    <div class="grid grid-cols-4 gap-2 mb-8 relative">
      <Toggle class="text-neutral-400" @click="changeColorMode()"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>
      </Toggle>
      <Toggle class="text-neutral-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
          />
        </svg>
      </Toggle>
    </div>
    <p class="dark:text-white mb-8">Аккаунт</p>
    <div class="flex flex-col mb-6">
      <Button class="mb-4" variant="secondary">Авторизация</Button>
      <Button>Регистрация</Button>
    </div>
    <!-- <div class="flex flex-row items-center">
      <Skeleton class="h-12 w-12 rounded-full mr-4" />
      <div class="space-y-2">
        <Skeleton class="h-4 w-[180px]" />
        <Skeleton class="h-4 w-[140px]" />
      </div>
    </div> -->
    <p class="text-neutral-400 text-sm">
      JustAnime offers curated anime streaming, respecting copyrights without
      broadcasting, ensuring creators are fairly compensated and fans enjoy
      legally.
    </p>
  </aside>
</template>
<style>
.rgb-text {
  background: linear-gradient(
    90deg,
    rgb(166, 166, 236),
    rgb(130, 82, 241),
    rgb(175, 94, 233),
    violet
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 600;
  display: inline;
}
</style>
