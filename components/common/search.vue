<script lang="ts" setup>
import { Toggle } from "@/components/ui/toggle";
import { MagnifyingGlassIcon } from "@radix-icons/vue";
import { Input } from "@/components/ui/input";
</script>
<template>
  <div class="flex justify-between pt-4">
    <div class="search w-full">
      <div class="relative w-full max-w-sm items-center">
        <Input
          id="search"
          type="text"
          placeholder="Search..."
          class="pl-10 text-neutral-400 md:min-w-[500px] w-full"
        />
        <span
          class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
        >
          <MagnifyingGlassIcon class="size-6 text-muted-foreground" />
        </span>
      </div>
    </div>
  </div>
</template>
