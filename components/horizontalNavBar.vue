<script setup>
	const props = defineProps({
		links: Object
	})
</script>

<template>
	<navItem v-for="link in links" :link="link" />
</template>