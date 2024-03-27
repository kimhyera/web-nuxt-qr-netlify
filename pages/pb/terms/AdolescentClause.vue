<script setup lang="ts">
</script>
<template>
	<div class="layout1">

		<header class="header-common fixed">
			<div class="header-row"><button @click="$router.go(-1)" title="이전페이지로 이동" class="btn-history-back"></button>
				<h1 class="header-title">청소년 보호방침</h1>

			</div>
		</header>

		<!--헤더 //-->
		<main class="terms-page page-contents">

				
			<ul class="terms-list">
				<li>
					<p>
						㈜만나플래닛(이하 “회사”라고 합니다)은 청소년들이 유해한 정보로부터 보호될 수 있도록 정보통신망 이용 촉진 및 정보보호 등에
						관한 법률, 청소년보호법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계법률에 근거하여 청소년 보호방침을 시행하고
						있습니다.
					</p>
				</li>
				<li>
					<h2>1. 청소년 접근제한 및 관리조치</h2>
					<p>
						회사는 별도의 인증장치와 청소년유해매체물의 표시를 운영하고 있으며, 이를 통해, 청소년에 대한 유해정보의 접근 가능성을 사전에
						예방하고 있으며, 청소년유해상품(유해물건, 약물, 매체)의 주문도 제한하고 있습니다.
					</p>
				</li>
				<li>
					<h2>2. 청소년 보호를 위한 교육</h2>
					<p>
						회사는 청소년 보호와 관련한 업무 담당자를 대상으로 정보통신망 이용 촉진 및 정보보호에 관한 법률 및 청소년보호법 등 관련법령 및
						유해정보 발견 시 처리 방법 등의 교육을 시행하고 있습니다.
					</p>
				</li>
				<li>
					<h2>3. 청소년 보호에 대한 의견수렴과 피해상담 및 고충처리</h2>
					<p>
						회사는 청소년 유해매체와 상품에 대한 피해상담, 고충처리를 위해 청소년보호책임자, 관리자, 담당자를 지정하고, 청소년 보호 민원
						창구를 운영하고 있습니다. 관련상담은 청소년보호책임자, 관리자, 담당자를 통해 접수해 주시면, 안전하고 공정하게 처리될 수 있도록
						하겠습니다.
					</p>
				</li>
				<li>
					<h2>4. 청소년보호책임자, 관리자, 담당자의 지정</h2>
					<p>
						1. 청소년보호책임자 (피해상담 및 고충처리책임자)<br />
						· 성명 : 신태수 단장 (부장)<br />
						· 소속부서 : 스마트스토어사업본부 DSS사업단<br />
						· 전화번호 : 070-7595-0022<br />
						· 팩스번호 : 02-3439-7044<br />
						· 전자우편 : roy7419@manna-corp.com
					</p>
					<p class="mt-4">
						2. 청소년보호관리자 및 담당자<br />
						· 성명 : 신태수 단장 (부장)<br />
						· 소속부서 : 스마트스토어사업본부 DSS사업단<br />
						· 전화번호 : 070-7595-0022<br />
						· 팩스번호 : 02-3439-7044<br />
						· 전자우편 : roy7419@manna-corp.com
					</p>
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