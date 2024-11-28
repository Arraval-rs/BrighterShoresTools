<script setup>
	const links = [
    {
      label: "Dashboard",
      icon: "",
      to: "/index"
    },
    {
      label: "Professions",
      icon: "",
      to: "/professionDashboard",
      childen: [{
      	label: "Guard",
      	icon: "",
      	to: "/profession"
      }]
    }
  ]
</script>

<template>
	<div class="header">
		<div class="header-footer-item">Brighter Shores Tools</div>
		<div class="header-footer-item" style="text-align:center">Links Component</div>
		<div class="header-footer-item" style="text-align:right">Light/Dark Toggle</div>
	</div>
</template>