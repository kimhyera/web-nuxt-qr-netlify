<script setup lang="ts">
</script>
<template>
	<div class="layout1">

		<header class="header-common fixed">
			<div class="header-row"><button @click="$router.go(-1)" title="이전페이지로 이동" class="btn-history-back"></button>
				<h1 class="header-title">개인정보의 제3자 제공</h1>

			</div>
		</header>

		<!--헤더 //-->
		<main class="terms-page page-contents">
			<TermsNav>
				<template #title>개인정보의 제3자 제공</template>
			</TermsNav>
				
			<ul class="terms-list">
				<li>
					<p>주식회사 만나플래닛은 원활한 서비스 제공을 위하여<br> 최소한의 범위 내에서 아래와 같이 제3자에게 개인정보를 제공합니다.</p>

                <div class="row-scroll">
					<table>
						<colgroup>
							<col style="width: 25%" />
							<col style="width: 25%" />
							<col style="width: 25%" />
							<col style="width: 25%" />
						</colgroup>
						<thead>
							<tr>
								<th>제공받는 자</th>
								<th>제공 목적</th>
								<th>제공 항목</th>
								<th>이용 및 보유기간</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>개별 가맹점<br />(음식, 배달업체, 배달연동, 중계업체, 수거업체 등)</td>
								<td>
									주문관리, 배달서비스, 문의 응대, 서비스 관리. (선택: 마케팅 홍보, 쿠폰 지급, 스탬프 지급 등)<br /><br />
									단, 회원이 개별 가맹점과 거래가 완료된 가맹점에 한하여 해당 가맹점에만 제공합니다.
								</td>
								<td>
									수령인 정보(주소, 휴대전화번호)<br />
									*안심번호 적용시, 휴대전화번호는 제공되지 않음(단, 안심번호에 장애가 있는 경우, 휴대전화번호 제공될 수 있음)<br />
									*포장/방문을 이용하는 경우 주소 정보는 제공되지 않음
								</td>
								<td>이용목적(서비스 제공) 달성 시, <br />단 관계법령 규정에 의해 보존의 필요가 있는 경우 해당기간 까지 보관</td>
							</tr>
						</tbody>
					</table>
			</div>
					<p>개인정보 제공에 동의하지 않으실 수 있으며, <br> 동의하지 않으실 경우 서비스 이용이 제한될 수 있습니다.</p>
				</li>
			</ul>
		</main>
	</div>
</template>
<style lang="scss" scoped>
@import "@/assets/default/scss/style"; // 공통 
@import "@/assets/default/scss/components/header";
@import '@/assets/default/scss/contents/terms';
</style>