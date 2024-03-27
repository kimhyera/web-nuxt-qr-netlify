<script setup>
const common = commonStore();
console.log("app.vue - theme - ", common.getTheme());
const layoutName = common.getTheme().name;

</script>

<template>
	
  <div>
    <NuxtLayout :name="layoutName">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
