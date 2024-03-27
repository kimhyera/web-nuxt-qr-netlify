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
			<section class="tab-wrap">
				<ul class="tab-order">
					<li><button>배달</button></li>
					<li><a aria-current="page" href="/basket-togo"
							class="router-link-active router-link-exact-active on">포장</a></li>
				</ul>
			</section>
			<section class="basket-wrap">
				<div class="all-check-row">
					<div class="form-check-wrap"><input class="form-check-sm" id="checkAll" type="checkbox"><label
							class="form-check-label" for="checkAll"> 전체선택 </label></div><button
						class="btn-remove-all">선택삭제</button>
				</div>
				<ul class="basket-list">
					<li>
						<div class="inner">
							<div class="title-row">
								<div class="form-check-wrap"><input class="form-check-sm" id="grp01_1234"
										type="checkbox"><label class="form-check-label" for="grp01_1234"> 블루베리 쿠키 치즈 케이크
									</label></div><button class="btn-remove-goods" title="상품비우기"></button>
							</div>
							<ul class="option-add-list">
								<li>사이즈 : Tall 355ml(+0원)</li>
								<li> 토핑추가선택 : 카라멜 드리즐(+1,500원), 초콜릿 드리즐(+2,000), 에스프레소 크림(+2,000)
								</li>
								<li>추가선택 : 휘핑크림(+2,000원)</li>
							</ul>
							<div class="price-row"><span class="price"><em>12,000</em>원 </span>
								<ul class="count-btn-wrap">
									<li><button type="button" class="btn-minus" disabled=""></button></li>
									<li class="num-count">1</li>
									<li><button type="button" class="btn-plus"></button></li>
								</ul>
							</div>
						</div>
					</li>
					<li>
						<div class="inner">
							<div class="title-row">
								<div class="form-check-wrap"><input class="form-check-sm" id="grp02_1235"
										type="checkbox"><label class="form-check-label" for="grp02_1235"> 아이스 디카페인 카페라떼
									</label></div><button class="btn-remove-goods" title="상품비우기"></button>
							</div>
							<ul class="option-add-list">
								<li>사이즈 : Tall 355ml(+0원)</li>
							</ul>
							<div class="price-row"><span class="price"><em>12,000</em>원 </span>
								<ul class="count-btn-wrap">
									<li><button type="button" class="btn-minus"></button></li>
									<li class="num-count">2</li>
									<li><button type="button" class="btn-plus"></button></li>
								</ul>
							</div>
						</div>
					</li>
				</ul>
				<div class="btn-add-menu-wrap"><button type="button" class="btn-add-menu" @click="$router.push('/pb/order/table')"><i class="icon-add"></i>메뉴추가
					</button></div>
			</section>
			<section class="total-wrap">
				<div class="desc">
					<dl>
						<dt>총 주문금액</dt>
						<dd>24,000원</dd>
					</dl>

				</div>
				<div class="total">
					<dl>
						<dt>결제 예상 금액</dt>
						<dd><em class="total-price">25,500원</em><span class="min-price">최소주문금액:10,000원</span></dd>
					</dl>
				</div>
			</section>
			<!--<div class="btn-wrap-fixed basket">
				<p class="btn-text"> 할인쿠폰 및 이벤트 적용은 주문 페이지에서 확인가능 합니다. </p><button class="btn-primary-1 btn-block-lg">
					주문하기 </button>
			</div>-->

			<div class="btn-wrap-fixed"><button class="btn-closed btn-block-lg">영업이 종료되었습니다</button></div>

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