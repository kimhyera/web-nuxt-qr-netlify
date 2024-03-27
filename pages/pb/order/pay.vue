<script setup lang="ts">

</script>
<template>
	<header class="header-common fixed">
		<div class="header-row"><button title="이전페이지로 이동" class="btn-history-back"></button>
			<h1 class="header-title">결제하기</h1>
			<div class="right-utils"><a href="/shop/mns/" class="btn-home" title="홈으로 이동"></a></div>
		</div>
	</header>
	<main class="pay-page page-pt">

		<div class="form-box form-line">
			<h3 class="title">주문 정보</h3>
			<div class="table-info">
				<dl class="table-No">
					<dt>테이블 번호</dt>
					<dd>2</dd>
				</dl>
			</div>

		</div>

		<section class="form-section">

			<div class="form-box form-line">
				<h3 class="title"> 휴대폰번호</h3>
				<div>

					<input type="tel" class="form-input-round" placeholder="결제 영수증이 발송됩니다.">
				</div>
			</div>


		</section>
		<section class="total-wrap form-line">
			<div class="desc">
				<p class="title">최종 결제 정보</p>
				<dl>
					<dt>총 주문금액</dt>
					<dd>4,500원</dd>
				</dl>

			</div>
			<div class="total">
				<dl>
					<dt>결제 금액</dt>
					<dd><em class="total-price">4,500원</em></dd>
				</dl>
			</div>
		</section>
		<section class="pay-wrap form-box form-line">
			<p class="title">결제방법</p><button type="button" class="btn-pay-type on"><span class="name">선결제</span><i
					class="icon-down"></i></button>
			<div class="contents-pay mb-md on">
				<ul class="btn-group-pay">
					<li><button type="button" class="on btn-card"> 신용카드</button></li>
					<li><button type="button" class="btn-card"><i class="icon-toss"></i> 토스페이</button></li>
					<li><button class="btn-pay"><i class="icon-naver"></i> 네이버페이 </button></li>
				</ul>

				<div class="notice-pay">
					[결제혜택]
					<br>
					<dl>
						<dt>신용카드</dt>
						<dt>신용카드 결제시 1프로 할인</dt>
					</dl>
					<dl>
						<dt>하나카드</dt>
						<dt>하나카드 결제시 11프로 할인</dt>
					</dl>
					<dl>
						<dt>토스페이</dt>
						<dt>토스페이 결제시 1%페이백</dt>
					</dl>
				</div>
			</div>
		</section>
		<section class="bottom-btn-default-section">
			<div class="terms-agree-wrap">
				<div class="agree-box">
					<div class="form-check-wrap"><input class="form-check" id="ok" type="checkbox">
						<label
							class="form-check-label" for="ok">개인정보 제 3자 제공 동의
							</label></div>


					<a href="/pb/terms/informationClause" target="_blank" class="btn-link">><i></i></a>
				</div>

				<div class="agree-box">
					<div class="form-check-wrap"><input class="form-check" id="phoneAllow" type="checkbox"><label
							class="form-check-label" for="phoneAllow">휴대폰번호 수집/이용
							동의</label></div>

							
				</div>
			</div>
			<div class="btn-wrap"><button type="button" class="btn-primary-1 btn-block-lg" disabled>결제하기
				</button></div>
		</section>
	</main>
</template>
<style lang="scss" scoped>
@import "@/assets/default/scss/style"; // 공통 
@import "@/assets/default/scss/components/header";
@import "@/assets/default/scss/contents/order/order";
</style>