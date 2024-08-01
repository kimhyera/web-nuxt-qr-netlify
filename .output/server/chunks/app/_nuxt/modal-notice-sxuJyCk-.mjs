import { useSSRContext, defineComponent, ref, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_1 } from './img_smaple_03_2x-Bxcdrywo.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "modal-notice",
  __ssrInlineRender: true,
  setup(__props) {
    const isScrollBottom = ref(false);
    const isShadow = ref(false);
    ref(0);
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "modal modal-memo" }, _attrs))} data-v-5a6dcd4f><div class="modal-dialog" data-v-5a6dcd4f><div class="modal-container" data-v-5a6dcd4f><div class="modal-header" data-v-5a6dcd4f><h2 class="modal-title" data-v-5a6dcd4f>\uB9E4\uC7A5 \uC54C\uB9BC</h2><button class="btn-close" data-v-5a6dcd4f></button></div><div class="modal-body" data-v-5a6dcd4f><div class="${ssrRenderClass([{ on: unref(isScrollBottom) === true }, "body-inner"])}" data-v-5a6dcd4f><div class="scrollbar-y" data-v-5a6dcd4f><div class="scroll-inner" data-v-5a6dcd4f><div class="memo-img" data-v-5a6dcd4f><div class="img-wrap" data-v-5a6dcd4f><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-5a6dcd4f></div></div><div class="memo-text" data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f> \uB9E4\uC7A5\uC54C\uB9BC \uB9E4\uC7A5\uC54C\uB9BC<br data-v-5a6dcd4f></div></div></div></div>`);
      if (unref(isShadow)) {
        _push(`<span class="shadow-bottom" data-v-5a6dcd4f></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="modal-backdrop" data-v-5a6dcd4f></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pb/popup/modal-notice.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const modalMemo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5a6dcd4f"]]);

export { modalMemo as default };
//# sourceMappingURL=modal-notice-sxuJyCk-.mjs.map
