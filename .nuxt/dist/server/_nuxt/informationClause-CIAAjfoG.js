import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TermsNav = resolveComponent("TermsNav");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout1" }, _attrs))} data-v-26b7a7f1><header class="header-common fixed" data-v-26b7a7f1><div class="header-row" data-v-26b7a7f1><button title="이전페이지로 이동" class="btn-history-back" data-v-26b7a7f1></button><h1 class="header-title" data-v-26b7a7f1>개인정보의 제3자 제공</h1></div></header><main class="terms-page page-contents" data-v-26b7a7f1>`);
  _push(ssrRenderComponent(_component_TermsNav, null, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`개인정보의 제3자 제공`);
      } else {
        return [
          createTextVNode("개인정보의 제3자 제공")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul class="terms-list" data-v-26b7a7f1><li data-v-26b7a7f1><p data-v-26b7a7f1>주식회사 만나플래닛은 원활한 서비스 제공을 위하여<br data-v-26b7a7f1> 최소한의 범위 내에서 아래와 같이 제3자에게 개인정보를 제공합니다.</p><div class="row-scroll" data-v-26b7a7f1><table data-v-26b7a7f1><colgroup data-v-26b7a7f1><col style="${ssrRenderStyle({ "width": "25%" })}" data-v-26b7a7f1><col style="${ssrRenderStyle({ "width": "25%" })}" data-v-26b7a7f1><col style="${ssrRenderStyle({ "width": "25%" })}" data-v-26b7a7f1><col style="${ssrRenderStyle({ "width": "25%" })}" data-v-26b7a7f1></colgroup><thead data-v-26b7a7f1><tr data-v-26b7a7f1><th data-v-26b7a7f1>제공받는 자</th><th data-v-26b7a7f1>제공 목적</th><th data-v-26b7a7f1>제공 항목</th><th data-v-26b7a7f1>이용 및 보유기간</th></tr></thead><tbody data-v-26b7a7f1><tr data-v-26b7a7f1><td data-v-26b7a7f1>개별 가맹점<br data-v-26b7a7f1>(음식, 배달업체, 배달연동, 중계업체, 수거업체 등)</td><td data-v-26b7a7f1> 주문관리, 배달서비스, 문의 응대, 서비스 관리. (선택: 마케팅 홍보, 쿠폰 지급, 스탬프 지급 등)<br data-v-26b7a7f1><br data-v-26b7a7f1> 단, 회원이 개별 가맹점과 거래가 완료된 가맹점에 한하여 해당 가맹점에만 제공합니다. </td><td data-v-26b7a7f1> 수령인 정보(주소, 휴대전화번호)<br data-v-26b7a7f1> *안심번호 적용시, 휴대전화번호는 제공되지 않음(단, 안심번호에 장애가 있는 경우, 휴대전화번호 제공될 수 있음)<br data-v-26b7a7f1> *포장/방문을 이용하는 경우 주소 정보는 제공되지 않음 </td><td data-v-26b7a7f1>이용목적(서비스 제공) 달성 시, <br data-v-26b7a7f1>단 관계법령 규정에 의해 보존의 필요가 있는 경우 해당기간 까지 보관</td></tr></tbody></table></div><p data-v-26b7a7f1>개인정보 제공에 동의하지 않으실 수 있으며, <br data-v-26b7a7f1> 동의하지 않으실 경우 서비스 이용이 제한될 수 있습니다.</p></li></ul></main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pb/terms/informationClause.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const informationClause = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-26b7a7f1"]]);
export {
  informationClause as default
};
//# sourceMappingURL=informationClause-CIAAjfoG.js.map
