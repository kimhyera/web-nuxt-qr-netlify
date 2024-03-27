<script lang="ts" setup>
const props = defineProps({
	pos: {
		type: String,
		default: 'top', //center, top, bottom
	},
});
</script>


<template>
	<div class="toast" :class="pos">
		<div class="toast-container">
			<div class="toast-body">
				<div class="toast-row">
					<span>


						<slot name="text"></slot>
					</span>
					<button class="btn-link">

						<slot name="button"></slot>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>


<style lang="scss" scoped>
@import '@/assets/default/scss/components/ui/toast';
</style>
