import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout1" }, _attrs))} data-v-de689964><header class="header-common fixed" data-v-de689964><div class="header-row" data-v-de689964><button title="\uC774\uC804\uD398\uC774\uC9C0\uB85C \uC774\uB3D9" class="btn-history-back" data-v-de689964></button><h1 class="header-title" data-v-de689964>\uC7A5\uBC14\uAD6C\uB2C8</h1></div></header><div class="header-fixed-fake-area" data-v-de689964></div><main class="basket-page" data-v-de689964><section class="basket-result" data-v-de689964><div class="basket-none" data-v-de689964><i class="icon-none-basket" data-v-de689964></i><p class="text" data-v-de689964>\uB2F4\uAE34 \uC0C1\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</p></div></section></main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pb/order/basket-none.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const basketNone = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-de689964"]]);

export { basketNone as default };
//# sourceMappingURL=basket-none-6MfVm48F.mjs.map
