import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TermsNav = resolveComponent("TermsNav");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout1" }, _attrs))} data-v-26b7a7f1><header class="header-common fixed" data-v-26b7a7f1><div class="header-row" data-v-26b7a7f1><button title="\uC774\uC804\uD398\uC774\uC9C0\uB85C \uC774\uB3D9" class="btn-history-back" data-v-26b7a7f1></button><h1 class="header-title" data-v-26b7a7f1>\uAC1C\uC778\uC815\uBCF4\uC758 \uC81C3\uC790 \uC81C\uACF5</h1></div></header><main class="terms-page page-contents" data-v-26b7a7f1>`);
  _push(ssrRenderComponent(_component_TermsNav, null, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\uAC1C\uC778\uC815\uBCF4\uC758 \uC81C3\uC790 \uC81C\uACF5`);
      } else {
        return [
          createTextVNode("\uAC1C\uC778\uC815\uBCF4\uC758 \uC81C3\uC790 \uC81C\uACF5")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul class="terms-list" data-v-26b7a7f1><li data-v-26b7a7f1><p data-v-26b7a7f1>\uC8FC\uC2DD\uD68C\uC0AC \uB9CC\uB098\uD50C\uB798\uB2DB\uC740 \uC6D0\uD65C\uD55C \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uC704\uD558\uC5EC<br data-v-26b7a7f1> \uCD5C\uC18C\uD55C\uC758 \uBC94\uC704 \uB0B4\uC5D0\uC11C \uC544\uB798\uC640 \uAC19\uC774 \uC81C3\uC790\uC5D0\uAC8C \uAC1C\uC778\uC815\uBCF4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.</p><div class="row-scroll" data-v-26b7a7f1><table data-v-26b7a7f1><colgroup data-v-26b7a7f1><col style="${ssrRenderStyle({ "width": "25%" })}" data-v-26b7a7f1><col style="${ssrRenderStyle({ "width": "25%" })}" data-v-26b7a7f1><col style="${ssrRenderStyle({ "width": "25%" })}" data-v-26b7a7f1><col style="${ssrRenderStyle({ "width": "25%" })}" data-v-26b7a7f1></colgroup><thead data-v-26b7a7f1><tr data-v-26b7a7f1><th data-v-26b7a7f1>\uC81C\uACF5\uBC1B\uB294 \uC790</th><th data-v-26b7a7f1>\uC81C\uACF5 \uBAA9\uC801</th><th data-v-26b7a7f1>\uC81C\uACF5 \uD56D\uBAA9</th><th data-v-26b7a7f1>\uC774\uC6A9 \uBC0F \uBCF4\uC720\uAE30\uAC04</th></tr></thead><tbody data-v-26b7a7f1><tr data-v-26b7a7f1><td data-v-26b7a7f1>\uAC1C\uBCC4 \uAC00\uB9F9\uC810<br data-v-26b7a7f1>(\uC74C\uC2DD, \uBC30\uB2EC\uC5C5\uCCB4, \uBC30\uB2EC\uC5F0\uB3D9, \uC911\uACC4\uC5C5\uCCB4, \uC218\uAC70\uC5C5\uCCB4 \uB4F1)</td><td data-v-26b7a7f1> \uC8FC\uBB38\uAD00\uB9AC, \uBC30\uB2EC\uC11C\uBE44\uC2A4, \uBB38\uC758 \uC751\uB300, \uC11C\uBE44\uC2A4 \uAD00\uB9AC. (\uC120\uD0DD: \uB9C8\uCF00\uD305 \uD64D\uBCF4, \uCFE0\uD3F0 \uC9C0\uAE09, \uC2A4\uD0EC\uD504 \uC9C0\uAE09 \uB4F1)<br data-v-26b7a7f1><br data-v-26b7a7f1> \uB2E8, \uD68C\uC6D0\uC774 \uAC1C\uBCC4 \uAC00\uB9F9\uC810\uACFC \uAC70\uB798\uAC00 \uC644\uB8CC\uB41C \uAC00\uB9F9\uC810\uC5D0 \uD55C\uD558\uC5EC \uD574\uB2F9 \uAC00\uB9F9\uC810\uC5D0\uB9CC \uC81C\uACF5\uD569\uB2C8\uB2E4. </td><td data-v-26b7a7f1> \uC218\uB839\uC778 \uC815\uBCF4(\uC8FC\uC18C, \uD734\uB300\uC804\uD654\uBC88\uD638)<br data-v-26b7a7f1> *\uC548\uC2EC\uBC88\uD638 \uC801\uC6A9\uC2DC, \uD734\uB300\uC804\uD654\uBC88\uD638\uB294 \uC81C\uACF5\uB418\uC9C0 \uC54A\uC74C(\uB2E8, \uC548\uC2EC\uBC88\uD638\uC5D0 \uC7A5\uC560\uAC00 \uC788\uB294 \uACBD\uC6B0, \uD734\uB300\uC804\uD654\uBC88\uD638 \uC81C\uACF5\uB420 \uC218 \uC788\uC74C)<br data-v-26b7a7f1> *\uD3EC\uC7A5/\uBC29\uBB38\uC744 \uC774\uC6A9\uD558\uB294 \uACBD\uC6B0 \uC8FC\uC18C \uC815\uBCF4\uB294 \uC81C\uACF5\uB418\uC9C0 \uC54A\uC74C </td><td data-v-26b7a7f1>\uC774\uC6A9\uBAA9\uC801(\uC11C\uBE44\uC2A4 \uC81C\uACF5) \uB2EC\uC131 \uC2DC, <br data-v-26b7a7f1>\uB2E8 \uAD00\uACC4\uBC95\uB839 \uADDC\uC815\uC5D0 \uC758\uD574 \uBCF4\uC874\uC758 \uD544\uC694\uAC00 \uC788\uB294 \uACBD\uC6B0 \uD574\uB2F9\uAE30\uAC04 \uAE4C\uC9C0 \uBCF4\uAD00</td></tr></tbody></table></div><p data-v-26b7a7f1>\uAC1C\uC778\uC815\uBCF4 \uC81C\uACF5\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uC73C\uC2E4 \uC218 \uC788\uC73C\uBA70, <br data-v-26b7a7f1> \uB3D9\uC758\uD558\uC9C0 \uC54A\uC73C\uC2E4 \uACBD\uC6B0 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC774 \uC81C\uD55C\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p></li></ul></main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pb/terms/informationClause.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const informationClause = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-26b7a7f1"]]);

export { informationClause as default };
//# sourceMappingURL=informationClause-CIAAjfoG.mjs.map
