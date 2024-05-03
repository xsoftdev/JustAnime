<template>
  <div class="grid grid-cols-2 h-[100vh] items-center">
    <div class="col-span-1 bg-layout-authentificate h-full" />
    <div class="col-span-1">
      <slot />
    </div>
  </div>
</template>
<style>
.bg-layout-authentificate {
  background: url('/layout-bg/solo-leveling.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>