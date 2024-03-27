<template>
  <div class="store-business-time"><!-- 영업중 -->
    <div class="time-row outline">
      <span class="status open">영업중</span><span class="time">
      <strong>목</strong>
							09:00 ~ 19:00
    </span>
      <button class="btn-modal-time" @click="$emit('show')">전체보기</button>
    </div>
    <!-- 영업시간 --><!--v-if-->
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
@import '@/assets/default/scss/components/store/storeWorkTime';
</style>
