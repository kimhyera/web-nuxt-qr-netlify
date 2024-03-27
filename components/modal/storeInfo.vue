<script setup lang="ts">
// import StoreInfo from '../components/StoreInfo.vue';

</script>

<template>
  <div class="modal modal-bottom">
    <div class="modal-dialog bottom">
      <div class="modal-storeinfo">
        <div class="modal-header header-page">
          <h2 class="modal-title">매장정보</h2>
          <button class="btn-close" @click="$emit('close')"></button>
        </div>
        <div class="scrollbar-y">
          <div class="scroll-inner">
            <StoreInfo />
          </div>
        </div>
      </div>
    </div>

    <div class="modal-backdrop"></div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/default/scss/components/ui/modal';
@import '@/assets/default/scss/components/popups/storeinfo';
</style>
