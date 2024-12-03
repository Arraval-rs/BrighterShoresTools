<script setup>
  import { collection, doc } from "firebase/firestore"
  const { $currentUser } = useNuxtApp();
  const route = useRoute()
  const characterIndex = "0";

  const profession = syncronousReadUserData($currentUser.value.uid, "characters", characterIndex, "professions", route.params.profession)

</script>

<template>
  <div class="page">
    Profession Page for {{route.params.profession}}
    <pre>
      {{profession}}
    </pre>
  </div>
</template>