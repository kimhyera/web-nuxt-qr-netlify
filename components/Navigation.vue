<template>
  <nav class="navbar" :class="{'fixed': fixed}">
    <ul class="nav">
      <li>
        <NuxtLink to="/pb/main">매장소개</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/order/delivery">배달</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/order/togo">포장</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/pb/order/1008">테이블</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/pb/waiting">대기</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/pb/booking">예약</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
<script setup>
defineProps(['fixed']);
</script>

<style lang="scss" scoped>
@import "@/assets/default/scss/components/navtab";
</style>
