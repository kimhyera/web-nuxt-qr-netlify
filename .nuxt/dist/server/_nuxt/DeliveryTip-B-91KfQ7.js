import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "modal-delivery-tip" }, _attrs))} data-v-f4281298><div class="modal-header header-page" data-v-f4281298><h2 class="modal-title" data-v-f4281298>배달팁 안내</h2><button class="btn-close" data-v-f4281298></button></div><div class="scrollbar-y" data-v-f4281298><div class="scroll-inner" data-v-f4281298><div class="delivery-tip-notice" data-v-f4281298><p data-v-f4281298>운영방침에 따라 지역별 배달팁 및 그외 배달팁이 추가될 수 있습니다.</p><p data-v-f4281298>배달팁은 할인이 포함된 주문 금액으로 책정됩니다.</p></div><dl class="delivery-tip-min-amt" data-v-f4281298><dt data-v-f4281298>최소주문 금액 :</dt><dd data-v-f4281298>10,000원</dd></dl><div class="default-tip" data-v-f4281298><p class="title" data-v-f4281298>기본 배달팁</p><div class="order-price-tip" data-v-f4281298><div class="delivery-tip-info" data-v-f4281298><dl class="" data-v-f4281298><dt data-v-f4281298>50,000원 이상</dt><dd data-v-f4281298>2,000원</dd></dl><dl class="on" data-v-f4281298><dt data-v-f4281298>30,000원 이상 ~ 50,000원 미만</dt><dd data-v-f4281298>5,000원</dd></dl><dl class="" data-v-f4281298><dt data-v-f4281298>12,000원 이상 ~ 30,000원 미만</dt><dd data-v-f4281298>12,000원</dd></dl><dl class="" data-v-f4281298><dt data-v-f4281298>10,000원 이상 ~ 12,000원 미만</dt><dd data-v-f4281298>15,000원</dd></dl></div></div><div class="fixed-tip" data-v-f4281298><p class="des" data-v-f4281298>※ 아래 구역은 주문금액 상관없이 배달팁이 적용됩니다</p><div class="delivery-tip-info" data-v-f4281298><dl class="" data-v-f4281298><dt data-v-f4281298>신길</dt><dd data-v-f4281298>3,000원</dd></dl></div></div></div><div class="block-tip" data-v-f4281298><p class="title" data-v-f4281298>블록 배달팁</p><div class="delivery-tip-info" data-v-f4281298><dl class="on" data-v-f4281298><dt data-v-f4281298>신도림</dt><dd data-v-f4281298>+0원</dd></dl><dl class="on" data-v-f4281298><dt data-v-f4281298>영등포</dt><dd data-v-f4281298>+2,000원</dd></dl></div></div><div class="area-tip" data-v-f4281298><p class="title" data-v-f4281298>특정지명 배달팁</p><div class="delivery-tip-info" data-v-f4281298><dl class="on" data-v-f4281298><dt data-v-f4281298>신도림</dt><dd data-v-f4281298>+500원</dd></dl></div></div><div class="distance-tip" data-v-f4281298><p class="title" data-v-f4281298>거리구간별 배달팁</p><p class="notice" data-v-f4281298>※ 매장과 배달지의 직선거리를 기준으로 계산됩니다</p><div class="delivery-tip-info" data-v-f4281298><ul class="bullets" data-v-f4281298><li data-v-f4281298>1m 미만 0원 추가</li><li data-v-f4281298>1m 이상 1m당 할증 배달팁 500원</li><li data-v-f4281298>배달구간내 최대 금액 4,000원</li></ul></div></div></div></div><div class="btn-wrap-fixed" data-v-f4281298><button class="btn btn-primary-1 btn-block" data-v-f4281298>확인</button></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/default/popup/DeliveryTip.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DeliveryTip = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f4281298"]]);
export {
  DeliveryTip as D
};
//# sourceMappingURL=DeliveryTip-B-91KfQ7.js.map
