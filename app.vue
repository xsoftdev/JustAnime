<template>
  <NuxtLoadingIndicator />
  <NuxtLayout key="default">
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
</script>





<style>
@font-face {
  font-family: "Euclid";
  src: url("./assets/fonts/DinPro.ttf");
}
* {
  font-family: "Euclid";
}

html.light body {
}
html.dark body {
  background: #09090b;
}
</style>
