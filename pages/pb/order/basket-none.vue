<script setup lang="ts">
</script>

<template>
	<div class="layout1">
		<header class="header-common fixed">
			<div class="header-row"><button title="이전페이지로 이동" class="btn-history-back"></button>
				<h1 class="header-title">장바구니</h1>

			</div>
		</header>
		<div class="header-fixed-fake-area"></div>
		<main class="basket-page">

			<section class="basket-result">
				<div class="basket-none"><i class="icon-none-basket"></i>
					<p class="text">담긴 상품이 없습니다.</p>
				</div>
			</section>
<!--
			<div class="btn-wrap-fixed basket">
			  <button class="btn-primary-1 btn-block-lg" disabled> 주문하기 </button></div>-->
		</main>
	</div>
</template>

<style lang="scss" scoped>
@import "@/assets/default/scss/style"; // 공통
@import "@/assets/default/scss/components/header";
@import "@/assets/default/scss/components/navtab";
@import "@/assets/default/scss/components/basket";
@import "@/assets/default/scss/components/order/orderTotal";
</style>
