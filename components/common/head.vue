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
const isDesktop = useMediaQuery("(min-width: 768px)");

const props = defineProps({
  breadcrumbs: String
})

const isOpen = ref(false);
</script>
<template>
  <header class="w-full">
    <div class="flex justify-between items-center w-full">
      <div class="breadcrumbs mr-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Главная</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/">{{ breadcrumbs }}</BreadcrumbLink>
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
        <div class="cooperation">
          <UseTemplate>
            <form class="grid items-start gap-4 px-4">
              <div class="grid gap-2">
                <Label html-for="tg">Ваш телеграм</Label>
                <Input id="tg" type="text" default-value="@your_telegram" />
              </div>
              <div class="grid gap-2">
                <Label html-for="years">Возраст</Label>
                <Input id="years" default-value="16+" />
              </div>
              <Button type="submit">Отправить</Button>
            </form>
          </UseTemplate>

          <Dialog v-if="isDesktop" v-model:open="isOpen">
            <DialogTrigger as-child>
              <Button class="dark">Стать участником</Button>
            </DialogTrigger>
            <DialogContent class="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Стать участником</DialogTitle>
                <DialogDescription>
                  Оставьте заявку и станьте одним из участников команды.
                </DialogDescription>
              </DialogHeader>
              <GridForm />
            </DialogContent>
          </Dialog>

          <Drawer v-else v-model:open="isOpen">
            <DrawerTrigger as-child>
              <Button variant="outline" class="dark text-neutral-400">Стать участником</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader class="text-left">
                <DrawerTitle>Стать участником</DrawerTitle>
                <DrawerDescription>
                  Оставьте заявку и станьте одним из участников команды.
                </DrawerDescription>
              </DrawerHeader>
              <GridForm />
              <DrawerFooter class="pt-2">
                <DrawerClose as-child>
                  <Button variant="outline"> Cancel </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  </header>
</template>

<style></style>
