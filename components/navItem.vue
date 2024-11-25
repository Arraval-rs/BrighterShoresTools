<script setup>
	const props = defineProps({
		link: Object,
		vertical: Boolean
	})
</script>

<template>
	<UButton v-if="link.items == null" :label="link.label" :to="link.to" />
	<UPopover v-else mode="hover">
		<UButton :label="link.label" trailing-icon="i-heroicons-chevron-down-20-solid" />
		<template #panel>
			<navItem v-for="nestedLink in link.items" :link="nestedLink"/>
		</template>
	</UPopover>
</template>