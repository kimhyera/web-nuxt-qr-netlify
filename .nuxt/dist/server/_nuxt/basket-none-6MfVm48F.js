import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout1" }, _attrs))} data-v-de689964><header class="header-common fixed" data-v-de689964><div class="header-row" data-v-de689964><button title="이전페이지로 이동" class="btn-history-back" data-v-de689964></button><h1 class="header-title" data-v-de689964>장바구니</h1></div></header><div class="header-fixed-fake-area" data-v-de689964></div><main class="basket-page" data-v-de689964><section class="basket-result" data-v-de689964><div class="basket-none" data-v-de689964><i class="icon-none-basket" data-v-de689964></i><p class="text" data-v-de689964>담긴 상품이 없습니다.</p></div></section></main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pb/order/basket-none.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const basketNone = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-de689964"]]);
export {
  basketNone as default
};
//# sourceMappingURL=basket-none-6MfVm48F.js.map
