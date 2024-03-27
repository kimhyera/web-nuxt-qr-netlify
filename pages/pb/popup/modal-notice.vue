<script setup lang="ts">
const isScrollBottom = ref(false);
const isShadow = ref(false);
const scrollTop = ref(0);
const scrollbarRef = ref<HTMLElement | null>(null);
const innerRef = ref<HTMLElement | null>(null);


onMounted(() => {
	const marginError = 10;
	if ((innerRef.value as HTMLElement).offsetHeight > (scrollbarRef.value as HTMLElement).offsetHeight) {
		isShadow.value = true;
	} else {
		isShadow.value = false;
	}

	(scrollbarRef.value as HTMLElement).addEventListener('scroll', () => {
		scrollTop.value = (scrollbarRef.value as HTMLElement).scrollTop;

		if (scrollTop.value + marginError > (innerRef.value as HTMLElement).offsetHeight - (scrollbarRef.value as HTMLElement).offsetHeight) {
			isScrollBottom.value = true;
		} else {
			isScrollBottom.value = false;
		}
	});
});
</script>

<template>
	<div class="modal modal-memo">
		<div class="modal-dialog">
			<div class="modal-container">
				<div class="modal-header">
					<h2 class="modal-title">매장 알림</h2>
					<button class="btn-close" @click="$emit('close')"></button>
				</div>

				<div class="modal-body">
					<div class="body-inner" :class="{ on: isScrollBottom === true }">
						<div class="scrollbar-y" ref="scrollbarRef">
							<div class="scroll-inner" ref="innerRef">
								<div class="memo-img">
									<!-- 720 x 170 -->

									<div class="img-wrap">
										<img src="@/assets/common/images/default/img_smaple_03@2x.jpg" alt="" />
									</div>
								</div>
								<div class="memo-text">

									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>

									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>

									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>

									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>

									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>

									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>

									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>

									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>

									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>

									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>
									매장알림 매장알림<br>
								</div>
							</div>
						</div>
					</div>

					<span class="shadow-bottom" v-if="isShadow"></span>
				</div>
			</div>
		</div>

		<div class="modal-backdrop"></div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/assets/default/scss/components/ui/modal';
@import '@/assets/default/scss/components/popups/memo';
</style>
