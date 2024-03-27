import { defineComponent, ref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import SwiperCore, { Autoplay } from "swiper";
import modalStoreInfo from "./modal-store-info-CXbmSRe4.js";
import modalMemo from "./modal-notice-sxuJyCk-.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
import "klona";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
import "swiper/vue";
import "./img_smaple_03_2x-Bxcdrywo.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "history-paylater",
  __ssrInlineRender: true,
  setup(__props) {
    SwiperCore.use([Autoplay]);
    ref(false);
    const isStoreInfo = ref(false);
    const isMemo = ref(false);
    const closeStoreInfo = () => {
      isStoreInfo.value = false;
      const app = (void 0).querySelector("#__nuxt");
      app == null ? void 0 : app.classList.remove("modal-open-fixed");
    };
    const closeMemo = () => {
      isMemo.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="layout1" data-v-0d476499><header class="header-main" data-v-0d476499><div class="header-row" data-v-0d476499><h1 class="store-name" data-v-0d476499> 스토어 이름 <i class="i-store-info" data-v-0d476499></i></h1></div></header><main class="order-page" data-v-0d476499><section class="order-dashboard" data-v-0d476499><div class="table-info" data-v-0d476499><dl class="table-No" data-v-0d476499><dt data-v-0d476499>테이블 번호</dt><dd data-v-0d476499>2</dd></dl></div></section><section class="order-history fixed" data-v-0d476499><h2 class="section-title" data-v-0d476499>주문내역</h2><div class="history-wrap scrollbar-y" data-v-0d476499><div class="history-order" data-v-0d476499><div class="h-head" data-v-0d476499><h3 class="title" data-v-0d476499> 주문 1 </h3><span class="date" data-v-0d476499>2023.11.11</span></div><ul class="order-list" data-v-0d476499><li data-v-0d476499><div class="info-row" data-v-0d476499><p class="name" data-v-0d476499>[ 1인찌개SET ] 1개</p><p class="price" data-v-0d476499><b data-v-0d476499>32,900</b>원</p></div><ul class="option-add-list" data-v-0d476499><li data-v-0d476499>기본 : (+15,900원)</li></ul><ul class="option-add-list" data-v-0d476499></ul><ul class="option-add-list" data-v-0d476499><li data-v-0d476499>추가선택 : 3종반찬 빼고로 변경 (+5,000원)</li><li data-v-0d476499>추가선택 : 두부사리(4ea) 추가 (+1,000원)</li><li data-v-0d476499>추가선택 : 두툼전지100g 추가 (+3,000원)</li><li data-v-0d476499>추가선택 : 보들 \\&#39;\\&#39;계란말이\\&#39;\\&#39; (+0원)</li><li data-v-0d476499>추가선택 : 직화 \\&#39;\\&#39;제육볶음\\&#39;\\&#39; 추가 (+8,000원)</li></ul></li><li data-v-0d476499><div class="info-row" data-v-0d476499><p class="name" data-v-0d476499>도시락광천김 1개</p><p class="price" data-v-0d476499><b data-v-0d476499>1,000</b>원</p></div><ul class="option-add-list" data-v-0d476499><li data-v-0d476499>기본 : (+1,000원)</li></ul><ul class="option-add-list" data-v-0d476499><li data-v-0d476499>옵션1 : 2봉 (+0원)</li></ul></li><li data-v-0d476499><div class="info-row" data-v-0d476499><p class="name" data-v-0d476499>대접밥 3개</p><p class="price" data-v-0d476499><b data-v-0d476499>3,000</b>원</p></div><ul class="option-add-list" data-v-0d476499><li data-v-0d476499>기본 : (+1,000원)</li></ul><ul class="option-add-list" data-v-0d476499></ul></li></ul></div><div class="history-order" data-v-0d476499><div class="h-head" data-v-0d476499><h3 class="title" data-v-0d476499> 주문 2 </h3><span class="date" data-v-0d476499>2023.11.11</span></div><ul class="order-list" data-v-0d476499><li data-v-0d476499><div class="info-row" data-v-0d476499><p class="name" data-v-0d476499>[ 1인찌개SET ] 1개</p><p class="price" data-v-0d476499><b data-v-0d476499>32,900</b>원</p></div><ul class="option-add-list" data-v-0d476499><li data-v-0d476499>기본 : (+15,900원)</li></ul><ul class="option-add-list" data-v-0d476499></ul><ul class="option-add-list" data-v-0d476499><li data-v-0d476499>추가선택 : 3종반찬 빼고로 변경 (+5,000원)</li><li data-v-0d476499>추가선택 : 두부사리(4ea) 추가 (+1,000원)</li><li data-v-0d476499>추가선택 : 두툼전지100g 추가 (+3,000원)</li><li data-v-0d476499>추가선택 : 보들 \\&#39;\\&#39;계란말이\\&#39;\\&#39; (+0원)</li><li data-v-0d476499>추가선택 : 직화 \\&#39;\\&#39;제육볶음\\&#39;\\&#39; 추가 (+8,000원)</li></ul></li><li data-v-0d476499><div class="info-row" data-v-0d476499><p class="name" data-v-0d476499>도시락광천김 1개</p><p class="price" data-v-0d476499><b data-v-0d476499>1,000</b>원</p></div><ul class="option-add-list" data-v-0d476499><li data-v-0d476499>기본 : (+1,000원)</li></ul><ul class="option-add-list" data-v-0d476499><li data-v-0d476499>옵션1 : 2봉 (+0원)</li></ul></li><li data-v-0d476499><div class="info-row" data-v-0d476499><p class="name" data-v-0d476499>대접밥 3개</p><p class="price" data-v-0d476499><b data-v-0d476499>3,000</b>원</p></div><ul class="option-add-list" data-v-0d476499><li data-v-0d476499>기본 : (+1,000원)</li></ul><ul class="option-add-list" data-v-0d476499></ul></li></ul></div></div><ul class="btn-bottom-wrap" data-v-0d476499><li data-v-0d476499><button class="btn-primary-1" data-v-0d476499>추가주문</button></li><li data-v-0d476499><button class="btn-primary-2" data-v-0d476499>결제하기</button>&gt;</li></ul></section></main></div>`);
      if (isStoreInfo.value) {
        _push(ssrRenderComponent(modalStoreInfo, { onClose: closeStoreInfo }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (isMemo.value) {
        _push(ssrRenderComponent(modalMemo, { onClose: closeMemo }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pb/order/history-paylater.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const historyPaylater = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0d476499"]]);
export {
  historyPaylater as default
};
//# sourceMappingURL=history-paylater-CNYJR2Af.js.map
