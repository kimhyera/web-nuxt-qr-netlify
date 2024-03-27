<script setup lang="ts">

</script>

<template>
	<main class="guide-wrapper">
		<table class="table-custom">
			<caption></caption>
			<colgroup>
				<col width="15%">
				<col>
				<col width="33%">
				<col width="15%">
			</colgroup>
			<thead>
				<tr>
					<th>1DEPTH</th>
					<th>2DEPTH</th>
					<th>PATH</th>
					<th>비고</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>가맹점 팝업</td>
					<td>가맹점 정보</td>

					<td><a href="/pb/order/store-info" class="">/pb/order/store-info </a></td>
					<td>완료 </td>
				</tr>
			
				<tr>
					<td></td>

					<td>팝업 - 매장알림</td>

					<td><a href="/pb/order/store-notice" class="">/pb/order/store-notice </a></td>
					<td>완료 </td>
				</tr>
				<tr>
					<td></td>

					<td>지도보기</td>

					<td><a href="/pb/map" class="">/pb/map </a></td>
					<td>완료</td>
				</tr>

				<tr class="line-gr">
					<td>주문</td>
					<td>테이블</td>

					<td><a href="/pb/order/table" class="">/pb/order/table</a></td>
					<td>완료</td>
				</tr>

				<tr>
					<td></td>

					<td>매장이용/포장</td>

					<td><a href="/pb/order/togo" class="">/pb/order/togo</a></td>
					<td>완료</td>
				</tr>


				<tr>
					<td></td>

					<td>메뉴상세</td>

					<td><a href="/pb/order/1234/123456" class="">pb/order/1234/123456</a></td>
					<td> 완료 </td>
				</tr>

				<tr>
					<td></td>

					<td>메뉴상세 - 상품추가</td>

					<td><a href="/pb/order/detail-add-basket" class="">pb/order/detail-add-basket</a></td>
					<td> 완료 </td>
				</tr>
				<tr>
					<td></td>

					<td>장바구니</td>

					<td><a href="/pb/order/basket" class="">/pb/order/basket</a></td>
					<td>완료</td>
				</tr>
				<tr>
					<td></td>


					<td>장바구니- 영업시간 종료</td>

					<td><a href="/pb/order/basket-closed" class="">/pb/order/basket-closed</a></td>
					<td>완료</td>
				</tr>

				<tr>
					<td></td>

					<td>장바구니- 상품없는경우</td>

					<td><a href="/pb/order/basket-none" class="">/pb/order/basket-none</a></td>
					<td>완료</td>
				</tr>

				
				<tr class="line-gr">
					<td>결제</td>
					<td>결제하기- 테이블 (공통) </td>

					<td><a href="/pb/order/pay" class="">/pb/order/pay</a></td>
					<td>완료</td>

				</tr>
				<tr>
					<td></td>
					<td>결제하기-매장이용(선불형) </td>

					<td><a href="/pb/order/pay-hall" class="">/pb/order/pay-hall</a></td>

					<td>완료</td>

				</tr>
				
				<tr>
					<td></td>
					<td>결제하기-테이크아웃 (선불형) </td>

					<td><a href="/pb/order/pay-togo" class="">/pb/order/pay-togo</a></td>

					<td>완료</td>

				</tr>


				<tr>
					<td></td>

					<td>주문 완료 (공통) </td>

					<td><a href="/pb/order/pay-completed" class="">/pb/order/pay-completed</a></td>
					<td>완료</td>

				</tr>



			




				<tr>
					<td></td>
					<td>주문내역 (후불형) </td>

					<td><a href="/pb/order/history-paylater" class="">/pb/order/histor-paylatery</a></td>
					<td></td>

				</tr>


				<tr>
					<td></td>

					<td>주문내역 - 팝업 (후불형)</td>

					<td><a href="/pb/order/popup-history-paylater" class="">/pb/order/popup-history-paylater</a></td>
					<td></td>

				</tr>

				
				
				<tr class="line-gr">
					<td>약관</td>
					<td>서비스 이용약관	 </td>

					<td><a href="/pb/terms/conditionsOfUse" class="">/pb/terms/conditionsOfUse</a></td>
					<td>완료</td>

				</tr>
				<tr>
					<td></td>
					<td>개인정보처리방침 </td>

					<td><a href="/pb/terms/privacyNotice" class="">/pb/terms/privacyNotice</a></td>
					<td>완료</td>

				</tr>
				<tr>
					<td></td>
					<td>개인정보 제3자 동의	 </td>

					<td><a href="/pb/terms/informationClause" class="">/pb/terms/informationClause</a></td>
					<td>완료</td>

				</tr>
				<tr>
					<td></td>
					<td>위치기반 서비스 이용 약관 </td>

					<td><a href="/pb/terms/locationAgreement" class="">/pb/terms/locationAgreement</a></td>
					<td>완료</td>

				</tr>
				<tr>
					<td></td>
					<td>청소년 보호정책 </td>

					<td><a href="/pb/terms/adolescentClause" class="">/pb/terms/adolescentClause</a></td>
					<td>완료</td>

				</tr>



			</tbody>
		</table>
	</main>
</template>

<style lang="scss" scoped>
@import "@/assets/default/scss/style"; // 공통 

.guide-wrapper {
	max-width: 1100px;
	margin: 0 auto;
	padding: 40px 0 100px
}

.guide-title {
	text-align: center;
	margin-bottom: 30px;
	color: #000;
	font-weight: 700
}

.card {
	margin-bottom: 20px
}

.card dt {
	background: #f4f5f9;
	padding: 10px
}

.card dd {
	padding: 12px 0
}

.card .title {
	font-weight: 700;
	color: #000;
	font-size: 20px
}

.card .title-sub {
	font-size: 18px;
	font-weight: 500;
	padding: 15px 0 10px;
	margin-bottom: 0;
	color: #000
}

.card .color-box {
	width: 100px;
	border-radius: 5px;
	display: inline-block;
	padding: 10px;
	color: #fff;
	text-align: center
}

.form-check-wrap {
	margin-top: 6px
}

.guide-gatter-5 {
	margin-right: 5px
}

.guide-gatter-5>:last-child {
	margin-right: 0
}

.stretch {
	align-items: stretch;
	justify-content: stretch;
	display: flex;
	flex-direction: column
}

.stretch {
	height: 100%
}

.bg-dark {
	background: #333
}

.table-custom {
	width: 100%;
	text-align: left;
	background: #fff;
	table-layout: fixed;
	border: 1px solid #ddd
}

.table-custom thead th {
	text-align: center;
	font-weight: 700;
	color: #333;
	background-color: #f4f5f9;
	border-top: 2px solid #9398a1
}

.table-custom td,
.table-custom th {
	padding: 8px 10px;
	border: 1px solid #e8e8e8;
	border-bottom: 0;
	color: #666;
	font-size: .875rem
}

.table-custom td.status,
.table-custom th.status {
	color: #777
}

.table-custom td.primary-1,
.table-custom th.primary-1 {
	color: var(--primary-1)
}

.table-custom .line td {
	border-top-color: #6b6d77
}

.table-custom .line-gr td {
	border-top-color: #c2c2cc
}

a {
	text-decoration: underline
}
</style>
