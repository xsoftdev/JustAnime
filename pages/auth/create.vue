<script lang="ts" setup>
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ref } from 'vue';

definePageMeta({
  layout: "authentificate",
});

const isLoading = ref(false)
async function onSubmit(event: Event) {
  event.preventDefault()
  isLoading.value = true

  setTimeout(() => {
    isLoading.value = false
  }, 3000)
}
</script>
<template>
  <div class="lg:p-8">
    <div
      class="mx-auto flex w-full flex-col justify-center items-center sm:w-[350px]"
    >
      <div class="flex flex-col text-center">
        <NuxtImg
          src="/images/logo.jpg"
          alt="JustAnime logo"
          class="max-w-32 mb-8 mx-auto"
        />
        <h1 class="text-2xl font-semibold tracking-wider text-white mb-4">
          Создать аккаунт
        </h1>
        <p class="text-sm text-muted-foreground mb-8">
          При создании аккаунта вы сможете прокачивать свой уровень при
          просмотре аниме, а так-же участвовать в розыгрышах от JustAnime
        </p>
        <div :class="cn('grid gap-6', $attrs.class ?? '')">
          <form @submit="onSubmit">
            <div class="grid gap-2">
              <div class="grid gap-1 space-y-3 mb-6 text-neutral-400">
                <Label class="sr-only" for="email"> Email </Label>
                <Input
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  auto-capitalize="none"
                  auto-complete="email"
                  auto-correct="off"
                  :disabled="isLoading"
                />
                <Label class="sr-only" for="username"> Username </Label>
                <Input
                  id="username"
                  placeholder="@username"
                  type="text"
                  auto-capitalize="none"
                  auto-correct="off"
                  :disabled="isLoading"
                />
                <Label class="sr-only" for="password"> Password </Label>
                <Input
                  id="password"
                  placeholder="Введите пароль"
                  type="password"
                  auto-capitalize="none"
                  auto-correct="off"
                  :disabled="isLoading"
                />
                <Label class="sr-only" for="cpassword"> Confirm Password </Label>
                <Input
                  id="cpassword"
                  placeholder="Введите пароль повторно"
                  type="password"
                  auto-capitalize="none"
                  auto-correct="off"
                  :disabled="isLoading"
                />
              </div>
              <Button :disabled="isLoading">
                <NuxtImg src="/icons/loader.svg"
                  v-if="isLoading"
                  class="mr-2 h-4 w-4 animate-spin"
                />
                Создать аккаунт
              </Button>
            </div>
          </form>
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <span class="w-full border-t" />
            </div>
            <div class="relative flex justify-center text-xs uppercase">
              <span class="bg-background px-2 text-muted-foreground">
                Другой способ
              </span>
            </div>
          </div>
          <Button  type="button" class="dark" disabled>
            <NuxtImg src="/icons/google.svg" class="mr-2 h-4 w-4" />
            Google
          </Button>
          <Button  type="button" class="dark" disabled>
            <NuxtImg src="/icons/facebook.svg" class="mr-2 h-4 w-4" />
            Facebook
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
