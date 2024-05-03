<script lang="ts" setup>
import { SlashIcon } from "@radix-icons/vue";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { MagnifyingGlassIcon } from "@radix-icons/vue";
import { ref } from "vue";
import { createReusableTemplate, useMediaQuery } from "@vueuse/core";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
const [UseTemplate, GridForm] = createReusableTemplate();
const colorMode = useColorMode();

const changeColorMode = () => {
  if (colorMode.value === "dark") {
    colorMode.value = "light";
  } else {
    colorMode.value = "dark";
  }
  localStorage.setItem("nuxt-color-mode", colorMode.value);
};
const props = defineProps({
  breadcrumbs: String,
});

const isOpen = ref(false);

// Mobile
const openBurger = ref(false);
import { useSideBar } from "~/store/sidebar";
import { Toggle } from "@/components/ui/toggle";
const { redirectArray, scoped } = useSideBar();
const selected = ref(false);
</script>
<template>
  <header class="w-full">
    <div class="mobile justify-between items-center mb-2 lg:hidden flex">
      <div class="burger" @click="openBurger = true">
        <svg
          class="w-8 h-8"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z"
              fill="#D4D4D4"
            ></path>
            <path
              d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z"
              fill="#D4D4D4"
            ></path>
            <path
              d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z"
              fill="#D4D4D4"
            ></path>
          </g>
        </svg>
      </div>
      <div class="logo">
        <template v-if="colorMode.value === 'dark'">
          <NuxtLink to="/">
            <NuxtImg
              src="/images/logo.jpg"
              alt="JustAnime logo"
              class="max-w-[60px]"
            />
          </NuxtLink>
        </template>
        <template v-else>
          <NuxtLink to="/">
            <NuxtImg
              src="/images/logo-l.webp"
              alt="JustAnime logo"
              class="max-w-[60px]"
            />
          </NuxtLink>
        </template>
      </div>
    </div>
    <div class="flex justify-between items-center w-full">
      <div class="breadcrumbs mr-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" class="lg:text-md text-sm"
                >Главная</BreadcrumbLink
              >
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/" class="lg:text-md text-sm">{{
                breadcrumbs
              }}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div class="dialog flex flex-row">
        <div class="toggle mr-2">
          <Toggle class="text-neutral-400 dark">
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
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          </Toggle>
        </div>
        <div class="cooperation lg:block hidden">
          <UseTemplate>
            <form class="grid items-start gap-4 px-4">
              <div class="grid gap-2">
                <Label html-for="tg" class="dark:text-white"
                  >Ваш телеграм</Label
                >
                <Input
                  id="tg"
                  type="text"
                  class="dark:text-white"
                  default-value="@your_telegram"
                />
              </div>
              <div class="grid gap-2">
                <Label html-for="years" class="dark:text-white">Возраст</Label>
                <Input id="years" default-value="16+" class="dark:text-white" />
              </div>
              <Button type="submit">Отправить</Button>
            </form>
          </UseTemplate>
          <Drawer v-model:open="isOpen">
            <DrawerTrigger as-child>
              <Button variant="outline" class="text-neutral-400"
                >Стать участником</Button
              >
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader class="text-left">
                <DrawerTitle class="dark:text-white"
                  >Стать участником</DrawerTitle
                >
                <DrawerDescription>
                  Оставьте заявку и станьте одним из участников команды.
                </DrawerDescription>
              </DrawerHeader>
              <GridForm />
              <DrawerFooter class="pt-2">
                <DrawerClose as-child>
                  <Button variant="outline" class="dark:text-white">Отменить</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
        <div class="lg:hidden block">
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
        </div>
      </div>
    </div>
  </header>
  <template v-if="openBurger">
    <div
      class="fixed w-full h-[100vh] bg-[#40404080] z-40 top-0 left-0"
      @click="openBurger = false"
    ></div>
    <div
      class="fixed w-[70%] p-4 py-4 z-50 h-[100vh] flex flex-col bg-neutral-900 left-0 top-0"
    >
      <template v-if="colorMode.value === 'dark'">
        <NuxtLink to="/">
          <NuxtImg
            src="/images/logo.jpg"
            alt="JustAnime logo"
            class="max-w-20 mb-4"
          />
        </NuxtLink>
      </template>
      <template v-else>
        <NuxtLink to="/">
          <NuxtImg
            src="/images/logo-l.webp"
            alt="JustAnime logo"
            class="max-w-20 mb-4"
          />
        </NuxtLink>
      </template>
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
      <div class="absolute top-4 right-4" @click="openBurger = false">
        <svg
          class="w-6 h-6"
          fill="white"
          viewBox="0 0 30 30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M29.484 0c-.13.004-.252.057-.343.15L17.164 12.13c-.49.47.235 1.197.706.707L29.846.857c.325-.318.1-.857-.363-.857zM12.488 17c-.13.004-.25.058-.34.15L.162 29.14c-.486.467.233 1.186.7.7L12.848 17.85c.325-.313.093-.85-.36-.85zM.5 0a.5.5 0 0 0-.348.86L29.14 29.845a.5.5 0 1 0 .706-.706L.86.152A.5.5 0 0 0 .5 0z"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  </template>
</template>

<style></style>
