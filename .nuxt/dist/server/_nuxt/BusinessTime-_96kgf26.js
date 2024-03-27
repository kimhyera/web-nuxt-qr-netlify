import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "modal modal-business-time" }, _attrs))} data-v-02b0c31b><div class="modal-dialog" data-v-02b0c31b><div class="modal-container" data-v-02b0c31b><div class="modal-header" data-v-02b0c31b><h2 class="modal-title" data-v-02b0c31b>영업시간</h2><button class="btn-close" data-v-02b0c31b></button></div><div class="modal-body" data-v-02b0c31b><div class="time-info" data-v-02b0c31b><dl data-v-02b0c31b><dt data-v-02b0c31b>월-금요일</dt><dd data-v-02b0c31b>09:00 ~ 19:00</dd></dl><dl data-v-02b0c31b><dt data-v-02b0c31b>토요일</dt><dd data-v-02b0c31b>09:00 ~ 19:00</dd></dl><dl data-v-02b0c31b><dt data-v-02b0c31b>일요일</dt><dd data-v-02b0c31b>05:00 ~ 04:50</dd></dl></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/default/popup/BusinessTime.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BusinessTime = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-02b0c31b"]]);
export {
  BusinessTime as B
};
//# sourceMappingURL=BusinessTime-_96kgf26.js.map
