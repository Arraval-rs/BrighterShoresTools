<script setup>
</script>

<template>
  <NuxtLayout class="main">
    <NuxtPage :page-key="route => route.fullPath" />
  </NuxtLayout>
</template>