<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';

const common = commonStore();

const isToggleWorkTime = ref(true)
const isToggleMemo = ref(false)



const emit = defineEmits(['close']);

SwiperCore.use([Autoplay]);

// reactivity data
const modalTranslateY = ref<any>(null);
let startY = 0;


// methods

const handleTouchStart = (event: TouchEvent) => {
	startY = event.touches[0].clientY;

};

const handleTouchMove = (event: TouchEvent) => {
	const deltaY = event.touches[0].clientY - startY;
	modalTranslateY.value = Math.min(1000, Math.max(0, deltaY));
};

const handleTouchEnd = () => {
	// 터치 종료 후 
	const winH = window.innerHeight * 0.8;
	if (winH < modalTranslateY.value) {
		emit('close');
	} else {
		modalTranslateY.value = 0;
	}

};



</script>

<template>

	<div class="modal-storeinfo" :style="{ transform: `translateY(${modalTranslateY}px)` }">
		<div class="modal-handlebar"  @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
			<div class="modal-header header-page">
				<button class="btn-close" @click="emit('close')"></button>
			</div>



			<i class="handlebar"></i>
		</div>

		<div class="scrollbar-y">

			<main class="store-contentss">
				<!-- storeSummery -->
				<section class="store-summery">


					<div class="status-row">

						<span class="status open">영업중</span>
						<span class="takeout">포장가능</span>
					</div>
					<h2 class="store-name">동대문엽기떡볶이 - 신도림점</h2>
					<!-- storeWorkTime -->
					<div class="store-worktime">
						<div class="time-head" @click="isToggleWorkTime = !isToggleWorkTime"  :class="{on: isToggleWorkTime }">
							수 09:00 ~19:00
							<i class="i-arrow"></i>
						</div>
						<div v-if="isToggleWorkTime" class="time-list">
							<ul>
								<li>
									월-금 09:00 ~ 19:00
								</li>
								<li>
									토 09:00 ~ 19:00
								</li>
								<li>
									일 휴무
								</li>
							</ul>
						</div>

					</div>
					<!-- End storeWorkTime -->

					<div class="store-links">
						<ul class="link-row">
							<li>
								<a href="`tel:0000000000">
									<i class="icon-call"></i>
									<span class="text"> 전화걸기 </span>
								</a>
							</li>
							<li>
								<router-link to="/pb/map">
									<i class="icon-map"></i>
									<span class="text"> 지도보기 </span>
								</router-link>
							</li>
						</ul>
					</div>

				</section>

				<!--End storeSummery -->


				<!-- storeMemo -->
				<section class="store-memo">


					<div class="store-slider">
						<swiper class="slider-item" :speed="400" :pagination="{ clickable: false }">
							<swiper-slide>
								<!-- 326 x 120 -->
								<div class="img-ratio-store img-wrap"><img
										src="https://mannaplanetstorage.blob.core.windows.net/mannashop-img-test/banner//20230125165327AZ0480.png"
										alt="매장이미지"></div>
							</swiper-slide>
							<swiper-slide>
								<!-- 326 x 120 -->
								<div class="img-ratio-store img-wrap"><img
										src="https://mannaplanetstorage.blob.core.windows.net/mannashop-img-test/banner//20230125165327AZ0480.png"
										alt="매장이미지"></div>
							</swiper-slide>
						</swiper>

						<div class="slide-count">1 / 2</div>
					</div>

					<div class="about-text"  :class="{on: isToggleMemo }">
						매장 소개 문구 다섯 줄 이상 대기업 쉐프 출신 요리사가
						요리하는 건강하고 맛있는 중국 음식점 입니다. 최고의 맛과
						서비스를 제공하기 위해 끊임없이 연구하고 노력하겠습니다.
						매장 소개 문구 다섯 줄 이상 대기업 쉐프 출신 요리사가
						요리하는 건강하고 맛있는 중국 음식점 입니다. 최고의 맛과
						서비스를 제공하기 위해 끊임없이 연구하고 노력하겠습니다.
						매장 소개 문구 다섯 줄 이상 대기업 쉐프 출신 요리사가
						요리하는 건강하고 맛있는 중국 음식점 입니다. 최고의 맛과
						서비스를 제공하기 위해 끊임없이 연구하고 노력하겠습니다.
					</div>


					<button type="button" class="btn-more"  @click="isToggleMemo = !isToggleMemo"  >

						<i class="icon-more"></i>
					</button>

				</section>

				<!-- End storeMemo -->
				<span class="separator"></span>

				<!-- storeBizInfo -->
				<section class="store-section">
					<h2 class="section-title">사업장 정보</h2>
					<div class="business-info">
						<dl>
							<dt>상호명</dt>
							<dd>동대문엽기떡볶이 - 신도림점</dd>
						</dl>
						<dl>
							<dt>대표자</dt>
							<dd>김대표</dd>
						</dl>
						<dl>
							<dt>사업자등록번호</dt>
							<dd>123-00-00000</dd>
						</dl>
						<dl>
							<dt>주소</dt>
							<dd>서울 영등포구 대림동 688-27 1층</dd>
						</dl>
					</div>
				</section>
				<!-- End storeBizInfo -->

				<!-- storeOriginInfo -->
				<section class="store-section">
					<h2 class="section-title">원산지 정보</h2>
					<div class="orgin-info">
						닭고기 - 국내산 / 쇠고기 - 국내산 한우, 호주산 / 명태연육 - 미국산
					</div>
				</section>
				<!-- End storeOriginInfo -->

			</main>
			<footer>
				<div class="footer-info">
					<h1 class="btn-toggle-addr">
						(주)만나플래닛

					</h1>



					<div class="terms-links">
						<router-link to="/pb/terms/conditionsOfUse">이용 약관</router-link>
						<router-link to="/pb/terms/privacyNotice">개인정보 보호방침</router-link>
						<router-link to="/pb/terms/informationClause">개인정보 제3자 동의</router-link>
						<div>
							<router-link to="/pb/terms/locationAgreement">위치기반 서비스 이용 약관</router-link>
							<router-link to="/pb/terms/adolescentClause">청소년 보호정책</router-link>
						</div>
					</div>
					<div class="footer-notice">
						㈜만나플래닛은 상품거래에 대한 통신판매 중개자이며, 통신판매의 당사자가 아닙니다. 따라서, ㈜만나플래닛은 상품거래정보 및 거래에 대한 책임을 지지 않습니다.

					</div>
				</div>
			</footer>
		</div>
	</div>



</template>

<style lang="scss" scoped>
@import '@/assets/default/scss/components/popups/storeinfo';
@import '@/assets/default/scss/components/store/storeSummery';
@import '@/assets/default/scss/components/store/storeWorkTime';
@import '@/assets/default/scss/components/store/storeLinks';
@import '@/assets/default/scss/components/store/storeMemo';
@import '@/assets/default/scss/components/store/storeBizInfo';
@import "@/assets/default/scss/components/store/storeOriginInfo";
@import "@/assets/default/scss/components/footer";
</style>
