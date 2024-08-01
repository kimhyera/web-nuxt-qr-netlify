import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}>\uC8FC\uBB38\uB0B4\uC5ED - \uD31D\uC5C5 (\uD6C4\uBD88\uD615) </div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pb/order/popup-history-paylater.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const popupHistoryPaylater = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { popupHistoryPaylater as default };
//# sourceMappingURL=popup-history-paylater-Bdig94-y.mjs.map
