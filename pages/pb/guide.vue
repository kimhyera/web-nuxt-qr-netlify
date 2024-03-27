<template>
	<div class="guide-wrapper">
		<h1 class="guide-title">Style Guide</h1>

		<div class="row">
			<div class="col-6">
				<dl class="card">
					<dt>
						<h1 class="title">Font Style</h1>
					</dt>
					<dd>
						<h2 class="title-sub">Font Weight</h2>
						<div>
							<p class="mt-5 text-point-lg">포인트 21/ 32/ -30/ #222222</p>
							<p class="mt-5 text-point">매장명, 포인트 19/ 30/ -30/ #222222</p>
							<p class="mt-5 section-title">컨텐츠 대타이틀 17/ 28/ -30/ #222222</p>
							<p class="mt-5 section-title-sm">GNB, 컨텐츠 서브타이틀 16/ 27/ -30/ #444444</p>

							<p class="mt-5 section-body">컨텐츠 본문 15/ 25/ -30/ #666666</p>

							<p class="mt-5 section-footnote">주석, 본문 서브 13/ 21/ -30/ #888888</p>
						</div>
					</dd>
				</dl>
			</div>
			<div class="col-6">
				<dl class="card">
					<dt>
						<h1 class="title">Color</h1>
					</dt>
					<dd>
						<div class="row">
							<div class="col-auto">
								<h2 class="title-sub">Primary</h2>
								<div class="guide-gatter-5">
									<button type="button" class="btn-form btn-primary-1">primary-1</button>

									<button type="button" class="btn-form btn-primary-2">primary-2</button>
									<button type="button" class="btn-form color-primary-3">primary-3</button>
								</div>
							</div>

							<div class="col-auto">
								<h2 class="title-sub">Etc</h2>
								<div class="guide-gatter-5">
									<button type="button" class="btn-form color-etc">Etc</button>
								</div>
							</div>
						</div>

						<div class="row mt-10">
							<div class="col-auto">
								<h2 class="title-sub">BG, Line</h2>
								<div class="guide-gatter-5">
									<button type="button" class="btn-form" style="background-color: #aaa">#aaa</button>

									<button type="button" class="btn-form" style="background-color: #ccc">#ccc</button>
									<button type="button" class="btn-form"
										style="background-color: #e9e9e9">#e9e9e9</button>
								</div>
							</div>
						</div>
					</dd>
				</dl>
			</div>
			<div class="col-12 mt-10">
				<dl class="card">
					<dt>
						<h1 class="title">Button Color</h1>
					</dt>
					<dd>
						<div class="row">
							<div class="col-12">
								<h2 class="title-sub-2">Normal</h2>
								<div class="guide-gatter-5">
									<button type="button" class="btn-form btn-primary-1">primary-1</button>

									<button type="button" class="btn-form btn-primary-2">primary-2</button>
									<button type="button" class="btn-form btn-outline-1">outline-1</button>

									<button type="button" class="btn-form btn-outline-2">outline-2</button>
								</div>

								<h2 class="title-sub-2">Disabled</h2>

								<div class="guide-gatter-5">
									<button type="button" disabled class="btn-form btn-primary-1">primary-1</button>

									<button type="button" disabled class="btn-form btn-primary-2">primary-2</button>
									<button type="button" disabled class="btn-form btn-outline-1">outline-1</button>

									<button type="button" disabled class="btn-form btn-outline-2">outline-2</button>
								</div>
							</div>
						</div>
					</dd>
				</dl>
			</div>


		</div>

		<div class="row mt-10">
			<div class="col">
				<dl class="card">
					<dt>Button Size</dt>
					<dd>
						<h3 class="title-sub-2">Normal</h3>
						<button type="button" class="btn-primary-1 btn-block">확인</button>
						<h3 class="title-sub-2">Large</h3>
						<button type="button" class="btn-primary-1 btn-block-lg mt-5">쿠폰적용</button>
						<br />
						<button type="button" class="btn-primary-2 btn-block-lg mt-5">대기취소</button>
						<br />
						<button type="button" class="btn-primary-1 btn-block-lg mt-5" disabled>영업시간이 종료되었습니다.</button>
					</dd>
				</dl>
			</div>
			<div class="col">
				<dl class="card">
					<dt>Button Style</dt>

					<dd>
						<h3 class="title-sub">Form</h3>
						<button type="button" class="mr-5 mb-5 btn-filming">QR 재촬영</button>
						<button type="button" class="mr-5 mb-5 btn-modify">수정</button>
						<button type="button" class="mr-5 mb-5 btn-review-write">리뷰작성</button>
						<button type="button" class="mr-5 mb-5 btn-auth">인증요청</button>
						<button type="button" class="mr-5 mb-5 btn-ok">확인</button>

						<button type="button" class="btn-search">검색</button>
						<ul class="count-btn-wrap">
							<li>
								<button type="button" class="btn-minus" disabled></button>
							</li>
							<li class="num-count">33</li>
							<li>
								<button type="button" class="btn-plus"></button>
							</li>
						</ul>

						<br />
						<h3 class="title-sub">Icon</h3>
						<button type="button" class="btn-add-menu"><i class="icon-add"></i>메뉴추가</button>
						<br />
						<button type="button" class="btn-more">더 보기<i class="icon-more"></i></button>
					</dd>
				</dl>
			</div>

			<div class="col">
				<dl class="card">
					<dt>Button Grop</dt>

					<dd>
						<h3 class="title-sub">하단</h3>
						<div class="btn-group-footer">
							<router-link to="/">로그인</router-link>

							<router-link to="/">이용안내</router-link>
						</div>

						<br />
						<h3 class="title-sub">결제</h3>
						<ul class="btn-group-card-cash">
							<li>
								<button class="btn-card">신용카드</button>
							</li>
							<li>
								<button class="btn-cash">현금결제</button>
							</li>
						</ul>
						<br />

						<ul class="btn-group-pay">
							<li>
								<button class="btn-pay"><i class="icon-naver"></i> 네이버페이</button>
							</li>
							<li>
								<button class="btn-pay"><i class="icon-kakao"></i> 카카오페이</button>
							</li>
							<li>
								<button class="btn-pay"><i class="icon-payco"></i> 페이코</button>
							</li>
							<li>
								<button class="btn-pay"><i class="icon-toss"></i> 토스페이</button>
							</li>
						</ul>

						<br />
						<h3 class="title-sub">로그인</h3>
						<ul class="btn-group-order-login">
							<li>
								<button class="btn-nonmember">비회원 주문</button>
							</li>
							<li>
								<router-link to="/signin" class="btn-login">로그인</router-link>
							</li>
						</ul>
					</dd>
				</dl>
			</div>
		</div>

		<div class="row mt-10">
			<div class="col-4 stretch">
				<dl class="card">
					<dt>
						<h1 class="title">checkbox</h1>
					</dt>
					<dd>
						<div class="form-check-wrap">
							<input class="form-check" id="check1" type="checkbox" />
							<label class="form-check-label" for="check1"> checkbox</label>
						</div>
						<div class="form-check-wrap">
							<input class="form-check" id="check2" type="checkbox" name="checkName" checked />
							<label class="form-check-label" for="check2"> checked checkbox</label>
						</div>

						<div class="form-check-wrap">
							<input class="form-check" id="check3" type="checkbox" name="checkName" disabled />
							<label class="form-check-label" for="check3">Disabled checkbox</label>
						</div>

						<div class="form-check-wrap mt-10">
							<input class="form-check-sm" id="useId" type="checkbox" /><label class="form-check-label"
								for="useId"> checkbox</label>
						</div>
						<div class="form-check-wrap">
							<input class="form-check-sm" id="useId" type="checkbox" checked /><label
								class="form-check-label" for="useId">
								checked checkbox</label>
						</div>
						<div class="form-check-wrap">
							<input class="form-check-sm" id="useId" type="checkbox" disabled /><label
								class="form-check-label" for="useId">
								Disabled checkbox</label>
						</div>
						<div class="form-check-wrap mt-10">
							<input class="form-check-line" id="useId" type="checkbox" /><label class="form-check-label"
								for="useId">
								포토리뷰만(30)</label>
						</div>
						<div class="form-check-wrap">
							<input class="form-check-line" id="useId" type="checkbox" checked /><label
								class="form-check-label" for="useId">
								포토리뷰만(30)</label>
						</div>
						<div class="form-check-wrap mt-10">
							<input class="form-check-line-sm" id="useId" type="checkbox" /><label
								class="form-check-label" for="useId"> SMS</label>
						</div>
						<div class="form-check-wrap">
							<input class="form-check-line-sm" id="useId" type="checkbox" checked /><label
								class="form-check-label" for="useId">
								SMS</label>
						</div>
					</dd>
				</dl>
			</div>
			<div class="col-4 stretch">
				<dl class="card">
					<dt>
						<h1 class="title">Radio input</h1>
					</dt>
					<dd>
						<div class="form-check-wrap">
							<input class="form-radio" id="radio1" type="radio" name="radioName" />
							<label class="form-check-label" for="radio1">radio</label>
						</div>
						<div class="form-check-wrap">
							<input class="form-radio" id="radio2" type="radio" name="radioName" checked />
							<label class="form-check-label" for="radio2"> checked radio</label>
						</div>

						<div class="form-check-wrap">
							<input class="form-radio" id="radio3" type="radio" name="radioName" disabled />
							<label class="form-check-label" for="radio3">Disabled radio</label>
						</div>
						<br />

						<h1 class="title-sub">Swich</h1>
						<div class="form-switch">
							<input class="form-switch" id="switch1" type="checkbox" />
							<label class="form-switch-label" for="switch1"></label>
						</div>
						<div class="form-switch mt-5">
							<input class="form-switch" id="switch2" type="checkbox" checked />
							<label class="form-switch-label" for="switch2"></label>
						</div>
					</dd>
				</dl>
			</div>
			<div class="col-4 stretch">
				<dl class="card">
					<dt>
						<h1 class="title">Select</h1>
					</dt>
					<dd>
						<h2 class="title-sub">Normal</h2>
						<div class="form-select-wrap">
							<select name="" id="" class="form-select select-block">
								<option value="">옵션 01</option>
								<option value="">옵션 02</option>
								<option value="">옵션 03</option>
							</select>
						</div>

						<h2 class="title-sub">Disabled</h2>

						<div class="form-select-wrap">
							<select name="" id="" class="form-select select-block" disabled>
								<option value="">옵션 01</option>
								<option value="">옵션 02</option>
								<option value="">옵션 03</option>
							</select>
						</div>
					</dd>
				</dl>
			</div>
		</div>

		<dl class="card">
			<dt>
				<h1 class="title">Form</h1>
			</dt>
			<dd>
				<div class="row">
					<div class="col-4">
						<h3 class="title-sub">input</h3>
						<h3 class="title-sub-2">기본</h3>

						<div class="input-clear-wrap">
							<input type="text" class="form-input" placeholder="내용을 입력해주세요" required />

							<i class="icon-delete-input round-line" @click="clearInput"></i>
						</div>
						<div class="input-clear-wrap mt-10">
							<input type="text" class="form-input-round" placeholder="내용을 입력해주세요" required />

							<i class="icon-delete-input round-line" @click="clearInput"></i>
						</div>
						<h2 class="title-sub-2">내용 입력중</h2>

						<div class="input-clear-wrap">
							<input type="text" class="form-input" required />
							<i class="icon-delete-input round-line" style="display: block" @click="clearInput"></i>
						</div>

						<h2 class="title-sub-2">입력 오류</h2>

						<div class="input-clear-wrap">
							<input type="text" class="form-input error" focus required />

							<i class="icon-delete-input round-line" @click="clearInput"></i>
						</div>

						<span class="error-msg"> 오류 메시지 출력 </span>

						<!-- <h3 class="title-sub">Search</h3>

						<div class="input-clear-wrap input-search-wrap">
							<input type="text" class="form-input" required />
							<i
								class="icon-delete-input round-line"
								@click="clearInput"
							></i>
							<button class="btn-search"></button>
						</div> -->
					</div>

					<div class="col-4">
						<h2 class="title-sub">Textarea</h2>
						<h2 class="title-sub-2">기본</h2>
						<div class="textarea-wrap">
							<textarea name="" class="form-textarea" id="" cols="30" rows="10"
								placeholder="최소 10자 이상 솔직한 리뷰를 남겨주세요!" required></textarea>

							<div class="text-count"><span class="current">0</span>/100</div>
						</div>
						<!-- 
						<h2 class="title-sub-2">내용 입력중</h2>
						<div class="textarea-wrap">
							<textarea
								name=""
								class="form-textarea"
								id=""
								cols="30"
								rows="10"
								placeholder="최소 10자 이상 솔직한 리뷰를 남겨주세요!"
								required
							></textarea>
							<i
								class="icon-delete-input round-line"
								style="display: block"
								@click="clearInput"
							></i>

							<div class="text-count">
								<span class="current">0</span>/100
							</div>
						</div> -->

						<h2 class="title-sub-2">Disabled</h2>
						<div class="textarea-wrap disabled">
							<textarea disabled name="" class="form-textarea" id="" cols="30" rows="10"
								placeholder="신고사유를 입력해주세요"></textarea>

							<div class="text-count"><span class="current">0</span>/100</div>
						</div>
					</div>
					<div class="col-4">
						<h3 class="title-sub">인증하기</h3>
						<h3 class="title-sub-2">인증전</h3>
						<ul class="form-list">
							<li>
								<div class="input-btn-wrap">
									<div class="input-clear-wrap">
										<input type="tel" class="form-input" placeholder="'-' 없이 숫자만 입력하세요." required />
										<i class="icon-delete-input round-line" @click="clearInput"></i>
									</div>

									<button type="button" class="btn-auth">인증요청</button>
								</div>
							</li>
							<li>
								<div class="input-btn-wrap">
									<div class="input-clear-wrap input-auth-wrap">
										<input type="number" class="form-input" placeholder="인증번호 입력" required />
										<i class="icon-delete-input round-line" style="display: block"
											@click="clearInput"></i>
										<em class="tel-count">2:59</em>
									</div>
									<button type="button" class="btn-form btn-outline-1">인증 확인</button>
								</div>
							</li>
						</ul>

						<h3 class="title-sub-2">인증번호 완료</h3>

						<ul class="form-list">
							<li>
								<div class="input-btn-wrap">
									<div class="input-wrap">
										<input type="text" class="form-input" value="01065791929" readonly />
									</div>
									<button type="button" class="btn-auth" disabled>인증요청</button>
								</div>
							</li>

							<li>
								<div class="input-btn-wrap">
									<div class="input-clear-wrap input-tel">
										<input type="text" class="form-input" placeholder="인증번호 입력" value="33223"
											readonly />
									</div>
									<button type="button" class="btn-form btn-outline-1" disabled>인증 완료</button>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</dd>
		</dl>

		<!-- <div class="row">
			<div class="col">
				<dl class="card">
					<dt>
						<h1 class="title">이미지 비율</h1>
					</dt>

					<dd>
						<h2 class="title-sub">매장 슬라이드 (326 x 184)</h2>

						<div class="img-ratio-st-slide">
							<img
								src="@/assets/images/main/image_sample_01.png"
								alt=""
							/>
						</div>

						<h2 class="title-sub mt-10">매장 리스트(210 x 117)</h2>

						<div class="img-ratio-st-list">
							<img
								src="@/assets/images/main/image_sample_01.png"
								alt=""
							/>
						</div>
						<h2 class="title-sub mt-10">
							매장 상세 팝업 (360 x 252)
						</h2>

						<div class="img-ratio-st-view">
							<img
								src="@/assets/images/main/image_sample_01_view.png"
								alt=""
							/>
						</div>
					</dd>
				</dl>
			</div>
			<div class="col">
				<dl class="card">
					<dt>이미지 비율</dt>
					<dd>
						<h2 class="title-sub">매장 배너 (326 x 109)</h2>

						<div class="img-ratio-st-banner">
							<img
								src="@/assets/images/main/store_banner.png"
								alt=""
							/>
						</div>
					</dd>
				</dl>
			</div>
		</div> -->
		<div class="row mt-10">
			<div class="col-12">
				<dl class="card">
					<dt>
						<h1 class="title">팝업</h1>
					</dt>
					<dd>
						<div class="d-flex">
							<div class="mr-10">
								<h2 class="title-sub">모달 (기본)</h2>
								<button type="button" class="btn-form btn-primary-1" @click="onModal">open</button>
							</div>

							<!-- <div class="mr-10">
								<h2 class="title-sub">모달 하단</h2>
								<button
									type="button"
									class="btn-form btn-primary-2"
									@click="onModalBottm"
								>
									open
								</button>
							</div> -->

							<div>
								<h2 class="title-sub">토스트</h2>
								<button type="button" class="btn-form btn-primary-2" @click="showToast">open</button>
							</div>
						</div>
					</dd>
				</dl>
			</div>
		</div>
	</div>
</template>


<style lang="scss" scoped>
.guide-wrapper {
	max-width: 1024px;
	margin: 0 auto;
	padding: 40px 0 100px;
}

.guide-title {
	text-align: center;
	margin-bottom: 30px;
	color: #000;
	font-weight: 700;
}



.row>* {
	// padding-left: 15px;
	// padding-right: 15px;

	align-items: stretch;
	justify-content: stretch;
	flex-direction: column;
   margin-bottom:  30px;
}

.card {
	border: 1px solid #dedede;
	margin-bottom: 20px;
	height: 100%;
	

	dt {
		background: #f4f5f9;
		padding: 10px;
	}

	dd {
		padding: 15px 15px;
	}

	.title,
	dt {
		font-weight: 700;
		color: #000;
		font-size: 18px;
	}

	.title-sub {
		font-size: 18px;
		font-weight: 500;
		margin-bottom: 5px;
		color: #000;
	}

	.title-sub-2 {
		font-size: 15px;
		font-weight: 500;
		margin-top: 10px;
		margin-bottom: 5px;
		color: #000;
	}

	.color-box {
		width: 100px;
		border-radius: 5px;
		display: inline-block;
		padding: 10px;
		color: #fff;
		text-align: center;
	}
}

.form-check-wrap {
	margin-top: 6px;
}

.guide-gatter-5 {
	>* {
		margin-right: 5px;

		&:last-child {
			margin-right: 0;
		}
	}
}

.stretch {
	align-items: stretch;
	justify-content: stretch;
	display: flex;
	flex-direction: column;

	>* {
		height: 100%;
	}
}



.fs-12 {
	font-size: 12px;
}

.fs-13 {
	font-size: 13px;
}

.fs-14 {
	font-size: 14px;
}

.fs-15 {
	font-size: 15px;
}

.fs-16 {
	font-size: 16px;
}

.fs-18 {
	font-size: 18px;
}

.fw-100 {
	font-weight: 100;
}

.fw-300 {
	font-weight: 300;
}

.fw-400 {
	font-weight: 400;
}

.fw-500 {
	font-weight: 500;
}

.fw-700 {
	font-weight: 700;
}

.bg {
	background-color: #f3f4f6;
}

.btn-form {
	display: inline-block;
}
</style>
