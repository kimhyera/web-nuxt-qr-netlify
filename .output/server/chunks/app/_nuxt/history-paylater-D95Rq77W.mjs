import { useSSRContext, defineComponent, ref } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import SwiperCore, { Autoplay } from 'swiper';
import modalStoreInfo from './modal-store-info-BH2NkX__.mjs';
import modalMemo from './modal-notice-sxuJyCk-.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'pinia-plugin-persistedstate';
import 'swiper/vue';
import './img_smaple_03_2x-Bxcdrywo.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

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
      _push(`<!--[--><div class="layout1" data-v-0d476499><header class="header-main" data-v-0d476499><div class="header-row" data-v-0d476499><h1 class="store-name" data-v-0d476499> \uC2A4\uD1A0\uC5B4 \uC774\uB984 <i class="i-store-info" data-v-0d476499></i></h1></div></header><main class="order-page" data-v-0d476499><section class="order-dashboard" data-v-0d476499><div class="table-info" data-v-0d476499><dl class="table-No" data-v-0d476499><dt data-v-0d476499>\uD14C\uC774\uBE14 \uBC88\uD638</dt><dd data-v-0d476499>2</dd></dl></div></section><section class="order-history fixed" data-v-0d476499><h2 class="section-title" data-v-0d476499>\uC8FC\uBB38\uB0B4\uC5ED</h2><div class="history-wrap scrollbar-y" data-v-0d476499><div class="history-order" data-v-0d476499><div class="h-head" data-v-0d476499><h3 class="title" data-v-0d476499> \uC8FC\uBB38 1 </h3><span class="date" data-v-0d476499>2023.11.11</span></div><ul class="order-list" data-v-0d476499><li data-v-0d476499><div class="info-row" data-v-0d476499><p class="name" data-v-0d476499>[ 1\uC778\uCC0C\uAC1CSET ] 1\uAC1C</p><p class="price" data-v-0d476499><b data-v-0d476499>32,900</b>\uC6D0</p></div><ul class="option-add-list" data-v-0d476499><li data-v-0d476499>\uAE30\uBCF8 : (+15,900\uC6D0)</li></ul><ul class="option-add-list" data-v-0d476499></ul><ul class="option-add-list" data-v-0d476499><li data-v-0d476499>\uCD94\uAC00\uC120\uD0DD : 3\uC885\uBC18\uCC2C \uBE7C\uACE0\uB85C \uBCC0\uACBD (+5,000\uC6D0)</li><li data-v-0d476499>\uCD94\uAC00\uC120\uD0DD : \uB450\uBD80\uC0AC\uB9AC(4ea) \uCD94\uAC00 (+1,000\uC6D0)</li><li data-v-0d476499>\uCD94\uAC00\uC120\uD0DD : \uB450\uD23C\uC804\uC9C0100g \uCD94\uAC00 (+3,000\uC6D0)</li><li data-v-0d476499>\uCD94\uAC00\uC120\uD0DD : \uBCF4\uB4E4 \\&#39;\\&#39;\uACC4\uB780\uB9D0\uC774\\&#39;\\&#39; (+0\uC6D0)</li><li data-v-0d476499>\uCD94\uAC00\uC120\uD0DD : \uC9C1\uD654 \\&#39;\\&#39;\uC81C\uC721\uBCF6\uC74C\\&#39;\\&#39; \uCD94\uAC00 (+8,000\uC6D0)</li></ul></li><li data-v-0d476499><div class="info-row" data-v-0d476499><p class="name" data-v-0d476499>\uB3C4\uC2DC\uB77D\uAD11\uCC9C\uAE40 1\uAC1C</p><p class="price" data-v-0d476499><b data-v-0d476499>1,000</b>\uC6D0</p></div><ul class="option-add-list" data-v-0d476499><li data-v-0d476499>\uAE30\uBCF8 : (+1,000\uC6D0)</li></ul><ul class="option-add-list" data-v-0d476499><li data-v-0d476499>\uC635\uC1581 : 2\uBD09 (+0\uC6D0)</li></ul></li><li data-v-0d476499><div class="info-row" data-v-0d476499><p class="name" data-v-0d476499>\uB300\uC811\uBC25 3\uAC1C</p><p class="price" data-v-0d476499><b data-v-0d476499>3,000</b>\uC6D0</p></div><ul class="option-add-list" data-v-0d476499><li data-v-0d476499>\uAE30\uBCF8 : (+1,000\uC6D0)</li></ul><ul class="option-add-list" data-v-0d476499></ul></li></ul></div><div class="history-order" data-v-0d476499><div class="h-head" data-v-0d476499><h3 class="title" data-v-0d476499> \uC8FC\uBB38 2 </h3><span class="date" data-v-0d476499>2023.11.11</span></div><ul class="order-list" data-v-0d476499><li data-v-0d476499><div class="info-row" data-v-0d476499><p class="name" data-v-0d476499>[ 1\uC778\uCC0C\uAC1CSET ] 1\uAC1C</p><p class="price" data-v-0d476499><b data-v-0d476499>32,900</b>\uC6D0</p></div><ul class="option-add-list" data-v-0d476499><li data-v-0d476499>\uAE30\uBCF8 : (+15,900\uC6D0)</li></ul><ul class="option-add-list" data-v-0d476499></ul><ul class="option-add-list" data-v-0d476499><li data-v-0d476499>\uCD94\uAC00\uC120\uD0DD : 3\uC885\uBC18\uCC2C \uBE7C\uACE0\uB85C \uBCC0\uACBD (+5,000\uC6D0)</li><li data-v-0d476499>\uCD94\uAC00\uC120\uD0DD : \uB450\uBD80\uC0AC\uB9AC(4ea) \uCD94\uAC00 (+1,000\uC6D0)</li><li data-v-0d476499>\uCD94\uAC00\uC120\uD0DD : \uB450\uD23C\uC804\uC9C0100g \uCD94\uAC00 (+3,000\uC6D0)</li><li data-v-0d476499>\uCD94\uAC00\uC120\uD0DD : \uBCF4\uB4E4 \\&#39;\\&#39;\uACC4\uB780\uB9D0\uC774\\&#39;\\&#39; (+0\uC6D0)</li><li data-v-0d476499>\uCD94\uAC00\uC120\uD0DD : \uC9C1\uD654 \\&#39;\\&#39;\uC81C\uC721\uBCF6\uC74C\\&#39;\\&#39; \uCD94\uAC00 (+8,000\uC6D0)</li></ul></li><li data-v-0d476499><div class="info-row" data-v-0d476499><p class="name" data-v-0d476499>\uB3C4\uC2DC\uB77D\uAD11\uCC9C\uAE40 1\uAC1C</p><p class="price" data-v-0d476499><b data-v-0d476499>1,000</b>\uC6D0</p></div><ul class="option-add-list" data-v-0d476499><li data-v-0d476499>\uAE30\uBCF8 : (+1,000\uC6D0)</li></ul><ul class="option-add-list" data-v-0d476499><li data-v-0d476499>\uC635\uC1581 : 2\uBD09 (+0\uC6D0)</li></ul></li><li data-v-0d476499><div class="info-row" data-v-0d476499><p class="name" data-v-0d476499>\uB300\uC811\uBC25 3\uAC1C</p><p class="price" data-v-0d476499><b data-v-0d476499>3,000</b>\uC6D0</p></div><ul class="option-add-list" data-v-0d476499><li data-v-0d476499>\uAE30\uBCF8 : (+1,000\uC6D0)</li></ul><ul class="option-add-list" data-v-0d476499></ul></li></ul></div></div><ul class="btn-bottom-wrap" data-v-0d476499><li data-v-0d476499><button class="btn-primary-1" data-v-0d476499>\uCD94\uAC00\uC8FC\uBB38</button></li><li data-v-0d476499><button class="btn-primary-2" data-v-0d476499>\uACB0\uC81C\uD558\uAE30</button>&gt;</li></ul></section></main></div>`);
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

export { historyPaylater as default };
//# sourceMappingURL=history-paylater-D95Rq77W.mjs.map
