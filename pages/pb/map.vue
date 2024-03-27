<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import imageSrc from '@/assets/default/images/icon/icon_map_pin_28.svg';

declare global {
	interface Window {
		app: unknown;
		Kakao: any;
		kakao: any;
		myMtsAuth: any;
	}
}

const props = defineProps({
	themeName: {
		type: String,
		default: 'default',
	},
});

const router = useRouter();



// reactivity data
const imageSrcPath = ref(imageSrc);
const mapContainer = ref<HTMLElement | null>(null);
const inputRef: any = ref(null);
const stLatY = ref('37.5090492151745');
const stLngX = ref('126.8869873429');
const locPosition = computed<any>(() => new window.kakao.maps.LatLng(stLatY.value, stLngX.value));

// methods 

// 지도 초기화
function initMap() {
	if (!mapContainer.value) return;
	let map = new window.kakao.maps.Map(mapContainer.value, {
		center: locPosition.value,
		level: 3,
	});

	createMarker(map);
	drawCustomOverlay(map);
};


// 마커표시
function createMarker(map: any) {
	const imageSize = new window.kakao.maps.Size(30, 30);
	const imageOption = { offset: new window.kakao.maps.Point(15, 15) };
	const markerImage = new window.kakao.maps.MarkerImage(imageSrcPath.value, imageSize, imageOption);
	let marker = new window.kakao.maps.Marker({
		position: locPosition.value,
		image: markerImage,
	});
	marker.setMap(map);
};
// 오버레이
function drawCustomOverlay(map: any) {
	var customOverlay = new window.kakao.maps.CustomOverlay({
		clickable: true,
		content: `<div class="customOverlay arrow_box">가맹점이름</div>`,
		position: locPosition.value,
		zIndex: 4,
	});

	customOverlay.setMap(map);
};
const runtimeConfig = useRuntimeConfig();


function onCopy() {
	inputRef.value.select();
	document.execCommand('copy');
}

onMounted(async () => {
	if (window.kakao && window.kakao.maps) {
		initMap();
	} else {
		const script = document.createElement('script');
		script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${runtimeConfig.public.VITE_KAKAO_API_KEY}&libraries=services`;
		document.head.appendChild(script);

		script.onload = () =>
			window.kakao.maps.load(() => {
				initMap();
			});
	}
});



</script>

<template>
	<div class="layout1">

		<header class="header-main fixed">
			<div class="header-row">
				<h1 class="store-name">
					지도보기
				</h1>
				<button class="btn-user" title="마이페이지 바로가기"></button>
			</div>
		</header>
		<div class="address-layer">
			<div class="inner">
				<div class="layer-head">
					<h2>매장주소</h2>
					<button class="btn-copy" @click="onCopy">주소복사</button>
				</div>

				<div class="address-text">
					<input type="text" ref="inputRef" readonly value="서울 구로구 경인로 661 (신도림동, 신도림1차푸르지오)"
						class="input-address" />
					<div class="front-address">서울 구로구 경인로 661 (신도림동, 신도림1차푸르지오)</div>
				</div>
			</div>
		</div>
		<div id="map" ref="mapContainer"></div>
	</div>
</template>

<style lang="scss" scoped>
@import "@/assets/default/scss/style"; // 공통 
@import "@/assets/default/scss/components/header";
@import '@/assets/default/scss/contents/storeMap';
</style>