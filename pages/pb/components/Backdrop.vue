<script setup lang="ts">
</script>
<template>
  <div class="modal-backdrop">
  </div>
</template>
<style lang="scss" scoped>
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: $zindex-modal-backdrop;
    width: 100%;
    height: 100%;
    background-color: rgba(#000, 0.6);
}

</style>