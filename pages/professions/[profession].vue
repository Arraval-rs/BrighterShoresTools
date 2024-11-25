<script setup>
  const route = useRoute()
</script>

<template>
  <div class="page">
    Profession Page for {{route.params.profession}}
  </div>
</template>