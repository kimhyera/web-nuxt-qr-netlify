<script setup>
import { useRoute } from 'vue-router'

import Toast from '../popup/toast.vue';

const route = useRoute()

const groupNo = route.params.groupNo
const goodsNo = route.params.goodsNo
</script>
<template>
	<div>

		<header class="fixed-goods-header"><span class="title">새우버거</span><button class="btn-history-back"
				title="이전페이지로 이동"></button></header>
		<main class="detail-page">
			<section class="detail-image-wrap img-ratio-detail-top"><img
					src="https://mannaplanetstorage.blob.core.windows.net/mannashop-img-test/store_goods/461/S285461/20220825132409AZ1388.jpg"
					alt=""></section>
			<section class="info-wrap"><span class="name">새우버거</span><span class="desc">새우살을 가득넣어 더 맛있어진 오리지널 새우버거</span>
				<div class="price-row"><span class="price">4,500원</span></div>
			</section>

			<!-- 옵션 리스트 -->
			<section class="option-add-wrap">
				<div class="option-add">
					<div class="title-row">
						<h3 class="title">옵션1</h3>
						<span class="validate">필수선택</span>
					</div>
					<ul class="option-list">
						<li>
							<div class="form-check-wrap"><input class="form-radio" id="radio00" type="radio"
									value="15572751"><label class="form-check-label" for="radio00"><span
										class="name">test12</span><span class="price">+100원</span></label></div>
						</li>
						<li>
							<div class="form-check-wrap"><input class="form-radio" id="radio01" type="radio"
									value="15544753"><label class="form-check-label" for="radio01"><span
										class="name">test1</span><span class="price">+0원</span></label></div>
						</li>
						<li>
							<div class="form-check-wrap"><input class="form-radio" id="radio02" type="radio"
									value="15544754"><label class="form-check-label" for="radio02"><span
										class="name">test2</span><span class="price">+0원</span></label></div>
						</li>
					</ul>
				</div>
				<div class="option-add">
					<div class="title-row">
						<h3 class="title">옵션2</h3>
					</div>
					<ul class="option-list">
						<li>
							<div class="form-check-wrap"><input class="form-radio" id="radio10" type="radio"
									value="15572752"><label class="form-check-label" for="radio10"><span
										class="name">test3</span><span class="price">+200원</span></label></div>
						</li>
						<li>
							<div class="form-check-wrap"><input class="form-radio" id="radio11" type="radio"
									value="15544756"><label class="form-check-label" for="radio11"><span
										class="name">test4</span><span class="price">+0원</span></label></div>
						</li>
						<li>
							<div class="form-check-wrap"><input class="form-radio" id="radio12" type="radio"
									value="15544763"><label class="form-check-label" for="radio12"><span
										class="name">test11</span><span class="price">+0원</span></label></div>
						</li>
					</ul>
				</div>
			</section>
			<!-- //옵션 리스트 -->

			<!-- 추가상품  -->

			<section class="option-add-wrap">
				<div class="option-add">
					<div class="title-row">
						<h3 class="title">그룹1</h3><span class="validate"><span>필수 2개 선택</span></span>
					</div>
					<ul class="option-list">
						<li>
							<div class="form-check-wrap"><input class="form-check" id="grp00" type="checkbox"><label
									class="form-check-label" for="grp00"><span class="name">골드팩 </span><span
										class="price">+1,800원</span></label></div>
						</li>
						<li>
							<div class="form-check-wrap"><input class="form-check" id="grp01" type="checkbox"><label
									class="form-check-label" for="grp01"><span class="name">시저샐러드 </span><span
										class="price">+2,500원</span></label></div>
						</li>
						<li>
							<div class="form-check-wrap"><input class="form-check" id="grp02" type="checkbox"><label
									class="form-check-label" for="grp02"><span class="name">콜라 </span><span
										class="price">+1,300원</span></label></div>
						</li>
					</ul>
				</div>
				<div class="option-add">
					<div class="title-row">
						<h3 class="title">그룹2</h3><span class="validate">3개까지 선택</span>
					<!-- 3개 이상 선택시 input : disabled  추가-->
					</div>
					<ul class="option-list">
						<li>
							<div class="form-check-wrap"><input class="form-check" id="grp10" type="checkbox"><label
									class="form-check-label" for="grp10"><span class="name">골드팩 </span><span
										class="price">+1,800원</span></label></div>
						</li>
						<li>
							<div class="form-check-wrap"><input class="form-check" id="grp11" type="checkbox"><label
									class="form-check-label" for="grp11"><span class="name">시저샐러드 </span><span
										class="price">+2,500원</span></label></div>
						</li>
						<li>
							<div class="form-check-wrap"><input class="form-check" id="grp12" type="checkbox"><label
									class="form-check-label" for="grp12"><span class="name">콜라 </span><span
										class="price">+1,300원</span></label></div>
						</li>
						<li>
						
							<div class="form-check-wrap"><input class="form-check" id="grp13" type="checkbox" disabled><label
									class="form-check-label" for="grp13"><span class="name">선데아이스크림 플레인
										</span><span class="price">+1,800원</span></label></div>
						</li>
						<li>
							<div class="form-check-wrap"><input class="form-check" id="grp14" type="checkbox" disabled><label
								class="form-check-label" for="grp14"><span class="name">클래식 치즈버거 </span><span
									class="price">+4,500원</span></label></div>
					</li>
				
					<li>
						<div class="form-check-wrap"><input class="form-check" id="grp18" type="checkbox" disabled><label
								class="form-check-label" for="grp18"><span class="name">패밀리팩 </span><span
									class="price">+14,300원</span></label></div>
					</li>
					<!-- 품절상품  -->
					<li>
						<div class="form-check-wrap"><input class="form-check" id="grp19" type="checkbox"
								disabled=""><label class="form-check-label" for="grp19"><span class="name">1인혼닭세트 <span
										class="badge-soldout">품절</span></span><span
									class="price">+11,600원</span></label></div>
					</li>
				</ul>
			</div>
		</section>



		<!--// 추가상품  -->
		<span class="border-coutom"></span>


		<section class="total-wrap">
			<div class="count">
				<dl>
					<dt>수량</dt>
					<ul class="count-btn-wrap">
						<li><button type="button" class="btn-minus" disabled></button></li>
						<li class="num-count">1</li>
						<li><button type="button" class="btn-plus"></button></li>
					</ul>
				</dl>
			</div>
			<div class="total">
				<dl>
					<dt>주문금액</dt>
					<dd><em class="total-price">4,800원</em></dd>
				</dl>
			</div>
		</section>
		<div class="btn-wrap-fixed-wrap">
			<div class="btn-wrap-fixed"><button class="btn-cart btn-block-lg">1개 장바구니 담기</button></div>
			<!--btn-wrap fixed 여백 조정 -->
			<div class="btn-fixed-fake-area"></div>
		</div>
	</main>


</div>


<Toast pos="bottom"> 
	<template #text> 상품이 추가되었습니다.
 </template>
	<template #button> 장바구니로 이동  </template>
</Toast>

</template>



<style lang="scss" scoped>@import '@/assets/default/scss/contents/order/goodsDetail';</style>
