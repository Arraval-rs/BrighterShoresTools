<script setup>
  import { collection, doc } from "firebase/firestore"
  const route = useRoute()
  const { $userProfessions } = useNuxtApp();
  const characterIndex = "0";

  const professionData = useDocument(doc($userProfessions, characterIndex, "professions", route.params.profession))
</script>

<template>
  <div class="page">
    Profession Page for {{route.params.profession}}
    <pre>
      {{professionData}}
    </pre>
  </div>
</template>