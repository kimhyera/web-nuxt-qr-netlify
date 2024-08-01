import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "toast",
  __ssrInlineRender: true,
  props: {
    pos: {
      type: String,
      default: "top"
      //center, top, bottom
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["toast", __props.pos]
      }, _attrs))} data-v-c505755c><div class="toast-container" data-v-c505755c><div class="toast-body" data-v-c505755c><div class="toast-row" data-v-c505755c><span data-v-c505755c>`);
      ssrRenderSlot(_ctx.$slots, "text", {}, null, _push, _parent);
      _push(`</span><button class="btn-link" data-v-c505755c>`);
      ssrRenderSlot(_ctx.$slots, "button", {}, null, _push, _parent);
      _push(`</button></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pb/popup/toast.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Toast = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c505755c"]]);

export { Toast as default };
//# sourceMappingURL=toast-B-XQj1nI.mjs.map
