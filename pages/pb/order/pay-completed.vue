<script setup lang="ts">
</script>
<template>
			<header class="header-common">
				<div class="header-row"><button title="이전페이지 닫기" class="btn-router-close"></button></div>
			</header>
			<main class="order-finish-page">
				<section class="finish-head"><span class="ordertype">테이블</span>
					<h2 class="title">주문이 완료 되었습니다.</h2><span class="date">2022년 5월 29일 오후 4시 30분</span>
				</section>
				<section class="finish-body">
					<div class="order-info">
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
							<li>
								<div class="info-row">
									<p class="name">[ 1인짜박SET ] 1개</p>
									<p class="price"><b>16,900</b>원</p>
								</div>
								<ul class="option-add-list">
									<li>기본 : (+16,900원)</li>
								</ul>
								<ul class="option-add-list"></ul>
							</li>
							<li>
								<div class="info-row">
									<p class="name">중독 \'\'김치짜박이\'\' SET 1개</p>
									<p class="price"><b>25,000</b>원</p>
								</div>
								<ul class="option-add-list">
									<li>기본 : (+25,000원)</li>
								</ul>
								<ul class="option-add-list">
									<li>옵션1 : 2~3인 (+0원)</li>
								</ul>
							</li>
						</ul>
						<div class="total-wrap">
							<div class="desc">
								<dl>
									<dt class="str-dt">결제정보</dt>
									<dd class="str-dd"></dd>
								</dl>
								<dl>
									<dt>주문금액</dt>
									<dd>90,500원</dd>
								</dl>
							</div>
							<div class="total">
								<dl>
									<dt>총 결제 금액</dt>
									<dd><em class="total-price">81,300원</em><span class="min-price">결제방식: 현금</span></dd>
								</dl>
							</div>
						</div>
					</div>
				
					<div class="btn-wrap"><a href="/shop/mns/" class="btn-primary-1 btn-block-lg">확인</a></div>
				</section>
			</main>
</template><style lang="scss" scoped>
@import "@/assets/default/scss/components/header";
@import '@/assets/default/scss/contents/order/finish';
</style>