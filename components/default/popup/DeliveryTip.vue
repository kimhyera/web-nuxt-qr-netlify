<script setup lang="ts">
</script>
<template>
  <div class="modal-delivery-tip">
    <div class="modal-header header-page">
      <h2 class="modal-title">배달팁 안내</h2>
      <button class="btn-close" @click="$emit('close')"></button>
    </div>
    <div class="scrollbar-y">
      <div class="scroll-inner">
        <div class="delivery-tip-notice">
          <p>운영방침에 따라 지역별 배달팁 및 그외 배달팁이 추가될 수 있습니다.</p>
          <p>배달팁은 할인이 포함된 주문 금액으로 책정됩니다.</p>
        </div>
        <dl class="delivery-tip-min-amt">
          <dt>최소주문 금액 :</dt>
          <dd>10,000원</dd>
        </dl>
        <div class="default-tip">
          <p class="title">기본 배달팁</p>
          <div class="order-price-tip">
            <div class="delivery-tip-info">
              <dl class="">
                <dt>50,000원 이상</dt>
                <dd>2,000원</dd>
              </dl>
              <!-- 해당 금액 클래스 : on  -->
              <dl class="on">
                <dt>30,000원 이상 ~ 50,000원 미만</dt>
                <dd>5,000원</dd>
              </dl>
              <dl class="">
                <dt>12,000원 이상 ~ 30,000원 미만</dt>
                <dd>12,000원</dd>
              </dl>
              <dl class="">
                <dt>10,000원 이상 ~ 12,000원 미만</dt>
                <dd>15,000원</dd>
              </dl>
            </div>
          </div>
          <div class="fixed-tip">
            <p class="des">※ 아래 구역은 주문금액 상관없이 배달팁이 적용됩니다</p>
            <div class="delivery-tip-info">
              <dl class="">
                <dt>신길</dt>
                <dd>3,000원</dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="block-tip">
          <p class="title">블록 배달팁</p>
          <div class="delivery-tip-info">
            <dl class="on">
              <dt>신도림</dt>
              <dd>+0원</dd>
            </dl>
            <dl class="on">
              <dt>영등포</dt>
              <dd>+2,000원</dd>
            </dl>
          </div>
        </div>
        <div class="area-tip">
          <p class="title">특정지명 배달팁</p>
          <div class="delivery-tip-info">
            <dl class="on">
              <dt>신도림</dt>
              <dd>+500원</dd>
            </dl>
          </div>
        </div>
        <div class="distance-tip">
          <p class="title">거리구간별 배달팁</p>
          <p class="notice">※ 매장과 배달지의 직선거리를 기준으로 계산됩니다</p>
          <div class="delivery-tip-info"><!--v-if-->
            <ul class="bullets">
              <li>1m 미만 0원 추가</li>
              <li>1m 이상 1m당 할증 배달팁 500원</li>
              <li>배달구간내 최대 금액 4,000원</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-wrap-fixed">
      <button class="btn btn-primary-1 btn-block" @click="$emit('close')">확인</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/default/scss/components/ui/buttons';
@import '@/assets/default/scss/components/ui/modal';
@import '@/assets/default/scss/components/popups/deleveryTip';
</style>
