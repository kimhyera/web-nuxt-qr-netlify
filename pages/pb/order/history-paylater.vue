<script setup lang="ts">
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import modalStoreInfo from '../popup/modal-store-info.vue';
import modalMemo from '../popup/modal-notice.vue';

SwiperCore.use([Autoplay]);


const isBusinessTime = ref(false);
const isStoreInfo = ref(false);
const isMemo = ref(false);


;

const showStoreInfo = () => {
	isStoreInfo.value = true;
	const app = document.querySelector('#__nuxt');
	app?.classList.add('modal-open-fixed');
};


const closeStoreInfo = () => {
	isStoreInfo.value = false;
	const app = document.querySelector('#__nuxt');
	app?.classList.remove('modal-open-fixed');
};


const closeMemo = () => {
	isMemo.value = false;
};



</script>

<template>
	<div class="layout1">
		<header class="header-main">
			<div class="header-row">
				<h1 class="store-name">
					스토어 이름
					<i class="i-store-info" @click="showStoreInfo"></i>
				</h1>


			</div>
		</header>
		<main class="order-page">
			<section class="order-dashboard" ref="topRef">
				<div class="table-info">
					<dl class="table-No">
						<dt>테이블 번호</dt>
						<dd>2</dd>
					</dl>
				</div>
			</section>
			<section class="order-history fixed" ref="fixedRef">
				<h2 class="section-title">주문내역</h2>
				<div class="history-wrap scrollbar-y" ref="scrollRef">
					<div class="history-order">
						<div class="h-head">
							<h3 class="title">
								주문 1
							</h3>

							<span class="date">2023.11.11</span>
						</div>
						<ul class="order-list">
							<li>
								<div class="info-row">
									<p class="name">[ 1인찌개SET ] 1개</p>
									<p class="price"><b>32,900</b>원</p>
								</div>
								<ul class="option-add-list">
									<li>기본 : (+15,900원)</li>
								</ul>
								<ul class="option-add-list"></ul>
								<ul class="option-add-list">
									<li>추가선택 : 3종반찬 빼고로 변경 (+5,000원)</li>
									<li>추가선택 : 두부사리(4ea) 추가 (+1,000원)</li>
									<li>추가선택 : 두툼전지100g 추가 (+3,000원)</li>
									<li>추가선택 : 보들 \'\'계란말이\'\' (+0원)</li>
									<li>추가선택 : 직화 \'\'제육볶음\'\' 추가 (+8,000원)</li>
								</ul>
							</li>
							<li>
								<div class="info-row">
									<p class="name">도시락광천김 1개</p>
									<p class="price"><b>1,000</b>원</p>
								</div>
								<ul class="option-add-list">
									<li>기본 : (+1,000원)</li>
								</ul>
								<ul class="option-add-list">
									<li>옵션1 : 2봉 (+0원)</li>
								</ul>
							</li>
							<li>
								<div class="info-row">
									<p class="name">대접밥 3개</p>
									<p class="price"><b>3,000</b>원</p>
								</div>
								<ul class="option-add-list">
									<li>기본 : (+1,000원)</li>
								</ul>
								<ul class="option-add-list"></ul>
							</li>
						</ul>

					</div>

					<div class="history-order">
						<div class="h-head">
							<h3 class="title">
								주문 2
							</h3>

							<span class="date">2023.11.11</span>
						</div>
						<ul class="order-list">
							<li>
								<div class="info-row">
									<p class="name">[ 1인찌개SET ] 1개</p>
									<p class="price"><b>32,900</b>원</p>
								</div>
								<ul class="option-add-list">
									<li>기본 : (+15,900원)</li>
								</ul>
								<ul class="option-add-list"></ul>
								<ul class="option-add-list">
									<li>추가선택 : 3종반찬 빼고로 변경 (+5,000원)</li>
									<li>추가선택 : 두부사리(4ea) 추가 (+1,000원)</li>
									<li>추가선택 : 두툼전지100g 추가 (+3,000원)</li>
									<li>추가선택 : 보들 \'\'계란말이\'\' (+0원)</li>
									<li>추가선택 : 직화 \'\'제육볶음\'\' 추가 (+8,000원)</li>
								</ul>
							</li>
							<li>
								<div class="info-row">
									<p class="name">도시락광천김 1개</p>
									<p class="price"><b>1,000</b>원</p>
								</div>
								<ul class="option-add-list">
									<li>기본 : (+1,000원)</li>
								</ul>
								<ul class="option-add-list">
									<li>옵션1 : 2봉 (+0원)</li>
								</ul>
							</li>
							<li>
								<div class="info-row">
									<p class="name">대접밥 3개</p>
									<p class="price"><b>3,000</b>원</p>
								</div>
								<ul class="option-add-list">
									<li>기본 : (+1,000원)</li>
								</ul>
								<ul class="option-add-list"></ul>
							</li>
						</ul>

					</div>

				</div>

				<ul class="btn-bottom-wrap">
					<li><button class="btn-primary-1">추가주문</button></li>
					<li><button class="btn-primary-2">결제하기</button>></li>
				</ul>


			</section>


		</main>

	</div>

	
	<!-- 매장정보  -->
	<transition name="fade">
		<modalStoreInfo v-if="isStoreInfo" @close="closeStoreInfo" />
	</transition>

	<transition name="fade">
		<modalMemo v-if="isMemo" @close="closeMemo" />
	</transition>


</template>

<style lang="scss" scoped>
@import "@/assets/default/scss/components/header";
@import '@/assets/default/scss/components/order/orderDashboardTable';
@import '@/assets/default/scss/contents/order/history';


.order-history {
    height: calc(var(--vh, 1vh)  * 100 - 175px);
 
}

.scrollbar-y {
        height: calc(var(--vh, 1vh) * 100 - 300px);
 }


</style>