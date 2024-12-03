<script setup>
  import { onMounted } from "vue";

  const { $ui, $uiConfig, $currentUser } = useNuxtApp();

  onMounted(() => {
    if($currentUser.value == null) {
      $ui.start("#firebaseui-auth-container", $uiConfig);
    }
  });
</script>

<template>
  <NuxtLayout class="main">
    <NuxtPage v-if="$currentUser !== null" :page-key="route => route.fullPath" />
      <div v-else class="page">
        <div id="firebaseui-auth-container"></div>
      </div>
  </NuxtLayout>
</template>