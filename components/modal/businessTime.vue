<script setup lang="ts">
</script>
<template>
  <div class="modal modal-business-time">
    <div class="modal-dialog">
      <div class="modal-container">
        <div class="modal-header">
          <h2 class="modal-title">영업시간</h2>
          <button class="btn-close" @click="$emit('close')"></button>
        </div>
        <div class="modal-body">
          <div class="time-info">
            <dl>
              <dt>월-금요일</dt>
              <dd>09:00 ~ 19:00</dd>
            </dl>
            <dl>
              <dt>토요일</dt>
              <dd>09:00 ~ 19:00</dd>
            </dl>
            <dl>
              <dt>일요일</dt>
              <dd>05:00 ~ 04:50</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/default/scss/components/ui/modal';
@import '@/assets/default/scss/components/popups/businessTime';
</style>
