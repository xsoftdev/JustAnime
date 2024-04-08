<script setup lang="ts">
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
</script>

<template>
  <div class="md:block hidden">
    <ResizablePanelGroup
      id="handle-demo-group-1"
      direction="horizontal"
      class="min-h-[99vh] w-full rounded-lg"
    >
      <ResizablePanel
        id="handle-demo-panel-1"
        :default-size="18"
        class="min-w-[240px] max-w-[320px]"
      >
        <div class="flex h-full justify-center p-6">
          <CommonSidebar />
        </div>
      </ResizablePanel>
      <ResizableHandle id="handle-demo-handle-1" with-handle />
      <ResizablePanel id="handle-demo-panel-2" :default-size="82">
        <div class="flex h-full w-full p-6 flex-col">
          <slot />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
  <div class="md:hidden block">
    <div class="flex h-full w-full p-6 flex-col">
      <slot />
    </div>
  </div>
</template>
