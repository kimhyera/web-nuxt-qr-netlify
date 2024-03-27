<script setup lang="ts">
defineProps(['storeName']);
</script>

<template>
  <header class="header-main">
    <div class="header-row">
      <h1 class="store-name">
        {{ storeName }}
      </h1>
      <button class="btn-user" title="마이페이지 바로가기"></button>
    </div>
  </header>
</template>


<style lang="scss" scoped>
@import "@/assets/default/scss/components/header";
</style>
