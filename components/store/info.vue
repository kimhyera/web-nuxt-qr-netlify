<script setup lang="ts">
import { ref } from 'vue';
import BusinessTime from '@/components/default/popup/BusinessTime.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';

const common = commonStore();

SwiperCore.use([Autoplay]);

// reactivity data
const isBusinessTime = ref(false);

// methods
function closeBusinessTime() {
  isBusinessTime.value = false;
}

</script>
<template>
  <main class="store-contentss">
    <div class="section-info-wrap">
      <section class="store-summery">
        <div class="name-row">
          <h2 class="store-name">스토어 이름</h2>

          <!--<div class="store-logo img-ratio-store-logo">
            <img src="@/assets/default/images/default/component_logo_sample@2x.png" alt="매장기본로고" />
          </div>-->
        </div>
      </section>

      <div class="store-business-time">
        <div class="time-row">
          <span class="status open">영업중</span> <br>
          <span class="time"><strong>수</strong> 09:00 ~
						19:00</span><button class="btn-modal-time" @click="isBusinessTime = true">전체보기</button>
        </div><!-- 영업시간 --><!--v-if-->
      </div>



      <section class="store-links">
        <ul class="link-row">
          <li>
            <a href="`tel:0000000000">
              <i class="icon-call"></i>
              <span class="text"> 전화 </span>
            </a>
          </li>
          <li>
            <router-link to="/pb/map">
              <i class="icon-map"></i>
              <span class="text"> 지도 </span>
            </router-link>
          </li>
        </ul>
      </section>
    </div>

    <section class="store-section">
      <h2 class="section-title">매장소개</h2>


      <div class="store-slider">
        <swiper class="slider-item" :speed="400" :pagination="{ clickable: false }">
          <swiper-slide>
            <!-- 326 x 120 -->
            <div class="img-ratio-store img-wrap"><img
                src="https://mannaplanetstorage.blob.core.windows.net/mannashop-img-test/banner//20230125165327AZ0480.png"
                alt="매장이미지"></div>
          </swiper-slide>
          <swiper-slide>
            <!-- 326 x 120 -->
            <div class="img-ratio-store img-wrap"><img
                src="https://mannaplanetstorage.blob.core.windows.net/mannashop-img-test/banner//20230125165327AZ0480.png"
                alt="매장이미지"></div>
          </swiper-slide>
        </swiper>

        <div class="slide-count">1 / 2</div>
      </div>

      <div class="about-text">
        매장 소개 문구 다섯 줄 이상 대기업 쉐프 출신 요리사가
        요리하는 건강하고 맛있는 중국 음식점 입니다. 최고의 맛과
        서비스를 제공하기 위해 끊임없이 연구하고 노력하겠습니다.
        매장 소개 문구 다섯 줄 이상 대기업 쉐프 출신 요리사가
        요리하는 건강하고 맛있는 중국 음식점 입니다. 최고의 맛과
        서비스를 제공하기 위해 끊임없이 연구하고 노력하겠습니다.
        매장 소개 문구 다섯 줄 이상 대기업 쉐프 출신 요리사가
        요리하는 건강하고 맛있는 중국 음식점 입니다. 최고의 맛과
        서비스를 제공하기 위해 끊임없이 연구하고 노력하겠습니다.
      </div>

    </section>
    <span class="separator"></span>


    <section class="store-section">
      <h2 class="section-title">사업장 정보</h2>
      <div class="business-info">
        <dl>
          <dt>상호명</dt>
          <dd>주식회사 만나플래닛</dd>
        </dl>
        <dl>
          <dt>대표자</dt>
          <dd>조양현</dd>
        </dl>
        <dl>
          <dt>주소</dt>
          <dd>서울 구로구 경인로 661 (신도림동, 신도림1차푸르지오)</dd>
        </dl>
        <dl>
          <dt>사업자등록번호</dt>
          <dd>621-86-10478</dd>
        </dl>
      </div>
    </section>
    <section class="store-section">
      <h2 class="section-title">원산지 정보</h2>
      <div class="orgin-info">
        닭고기 - 국내산 / 쇠고기 - 국내산 한우, 호주산 / 명태연육 - 미국산
      </div>
    </section>

  </main>
  <footer>
    <div class="footer-info">
      <h1
          class="btn-toggle-addr"
      >
        (주)만나플래닛

      </h1>



      <div class="terms-links">
        <router-link to="/pb/terms/conditionsOfUse">이용 약관</router-link>
        <router-link to="/pb/terms/privacyNotice">개인정보 보호방침</router-link>
        <router-link to="/pb/terms/informationClause"
        >개인정보 제3자 동의</router-link
        >
        <div>
          <router-link to="/pb/terms/locationAgreement"
          >위치기반 서비스 이용 약관</router-link
          >
          <router-link to="/pb/terms/adolescentClause"
          >청소년 보호정책</router-link
          >
        </div>
      </div>
      <div class="footer-notice">
        ㈜만나플래닛은 상품거래에 대한 통신판매 중개자이며, 통신판매의 당사자가 아닙니다. 따라서, ㈜만나플래닛은 상품거래정보 및 거래에 대한 책임을 지지 않습니다.

      </div>
    </div>
  </footer>

  <!-- 영업시간 -->
  <transition name="fade">
    <BusinessTime v-if="isBusinessTime" @close="closeBusinessTime" />
  </transition>

</template>

<style lang="scss" scoped>
@import "@/assets/default/scss/style"; // 공통
@import "@/assets/default/scss/components/header";
@import "@/assets/default/scss/components/navtab";

@import '@/assets/default/scss/contents/store';
@import '@/assets/default/scss/components/store/storeNoticeEventBar';
@import '@/assets/default/scss/components/store/storeSummery';
@import '@/assets/default/scss/components/store/storeWorkTime';
@import '@/assets/default/scss/components/store/storeLinks';
@import '@/assets/default/scss/components/store/storeBanner';
@import '@/assets/default/scss/components/store/storeMemo';
@import '@/assets/default/scss/components/store/StoreDvryTip';
@import '@/assets/default/scss/components/store/storeOrdInfo';
@import '@/assets/default/scss/components/store/storeBizInfo';
@import "@/assets/default/scss/components/store/storeOriginInfo";
@import "@/assets/default/scss/components/footer";
</style>
