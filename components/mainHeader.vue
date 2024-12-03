<script setup>
  const colorMode = useColorMode()
  const isDark = computed({
    get () {
      return colorMode.value === 'dark'
    },
    set () {
      colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
  })

	const links = [
    {
      label: "Home",
      to: "/"
    },
    {
      label: "Dashboard",
      to: "/professions"
    },
    {
      label: "Act 1",
      items: [
        {label: "Guard", to: "/professions/Guard"},
        {label: "Chef", to: "/professions/Chef"},
        {label: "Fisherman", to: "/professions/Fisherman"},
        {label: "Forager", to: "/professions/Forager"},
        {label: "Alchemist", to: "/professions/Alchemist"}
      ]
    },
    {
      label: "Act 2",
      items: [
        {label: "Scout", to: "/professions/Scout"},
        {label: "Gatherer", to: "/professions/Gatherer"},
        {label: "Woodcutter", to: "/professions/Woodcutter"},
        {label: "Carpenter", to: "/professions/Carpenter"}
      ]
    },
    {
      label: "Act 3",
      items: [
        {label: "Minefighter", to: "/professions/Minefighter"},
        {label: "Bonewright", to: "/professions/Bonewright"},
        {label: "Miner", to: "/professions/Miner"},
        {label: "Blacksmith", to: "/professions/Blacksmith"},
        {label: "Stonemason", to: "/professions/Stonemason"}
      ]
    },
    {
      label: "Act 4",
      items: [
        {label: "Watchman", to: "/professions/Watchman"},
        {label: "Detective", to: "/professions/Detective"},
        {label: "Leatherworker", to: "/professions/Leatherworker"},
        {label: "Merchant", to: "/professions/Merchant"}
      ]
    }
  ]
</script>

<template>
	<div class="header">
		<div class="header-footer-item">Brighter Shores Tools</div>
		<horizontalNavBar class="header-footer-item" style="text-align:center" :links="links"/>
		<div class="header-footer-item" style="text-align:right">
      <ClientOnly>
        <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" @click="isDark = !isDark" />
      </ClientOnly>
    </div>
	</div>
</template>