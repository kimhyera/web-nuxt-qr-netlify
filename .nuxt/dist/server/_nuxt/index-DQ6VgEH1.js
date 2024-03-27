import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import "hookable";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const mode = ref("available");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout1" }, _attrs))} data-v-ca1a1a94><header class="header-common fixed" data-v-ca1a1a94><div class="header-row" data-v-ca1a1a94><button title="이전페이지로 이동" class="btn-history-back" data-v-ca1a1a94></button><h1 class="header-title" data-v-ca1a1a94>장바구니</h1></div></header><div class="header-fixed-fake-area" data-v-ca1a1a94></div>`);
      if (unref(mode) !== "empty") {
        _push(`<main class="basket-page" data-v-ca1a1a94><section class="tab-wrap" data-v-ca1a1a94><ul class="tab-order" data-v-ca1a1a94><li data-v-ca1a1a94><button data-v-ca1a1a94>배달</button></li><li data-v-ca1a1a94><a aria-current="page" href="/basket-togo" class="router-link-active router-link-exact-active on" data-v-ca1a1a94>포장</a></li></ul></section><section class="basket-wrap" data-v-ca1a1a94><div class="all-check-row" data-v-ca1a1a94><div class="form-check-wrap" data-v-ca1a1a94><input class="form-check-sm" id="checkAll" type="checkbox" data-v-ca1a1a94><label class="form-check-label" for="checkAll" data-v-ca1a1a94> 전체선택 </label></div><button class="btn-remove-all" data-v-ca1a1a94>선택삭제</button></div><ul class="basket-list" data-v-ca1a1a94><li data-v-ca1a1a94><div class="inner" data-v-ca1a1a94><div class="title-row" data-v-ca1a1a94><div class="form-check-wrap" data-v-ca1a1a94><input class="form-check-sm" id="grp01_1234" type="checkbox" data-v-ca1a1a94><label class="form-check-label" for="grp01_1234" data-v-ca1a1a94> 블루베리 쿠키 치즈 케이크 </label></div><button class="btn-remove-goods" title="상품비우기" data-v-ca1a1a94></button></div><ul class="option-add-list" data-v-ca1a1a94><li data-v-ca1a1a94>사이즈 : Tall 355ml(+0원)</li><li data-v-ca1a1a94> 토핑추가선택 : 카라멜 드리즐(+1,500원), 초콜릿 드리즐(+2,000), 에스프레소 크림(+2,000) </li><li data-v-ca1a1a94>추가선택 : 휘핑크림(+2,000원)</li></ul><div class="price-row" data-v-ca1a1a94><span class="price" data-v-ca1a1a94><em data-v-ca1a1a94>12,000</em>원 </span><ul class="count-btn-wrap" data-v-ca1a1a94><li data-v-ca1a1a94><button type="button" class="btn-minus" disabled="" data-v-ca1a1a94></button></li><li class="num-count" data-v-ca1a1a94>1</li><li data-v-ca1a1a94><button type="button" class="btn-plus" data-v-ca1a1a94></button></li></ul></div></div></li><li data-v-ca1a1a94><div class="inner" data-v-ca1a1a94><div class="title-row" data-v-ca1a1a94><div class="form-check-wrap" data-v-ca1a1a94><input class="form-check-sm" id="grp02_1235" type="checkbox" data-v-ca1a1a94><label class="form-check-label" for="grp02_1235" data-v-ca1a1a94> 아이스 디카페인 카페라떼 </label></div><button class="btn-remove-goods" title="상품비우기" data-v-ca1a1a94></button></div><ul class="option-add-list" data-v-ca1a1a94><li data-v-ca1a1a94>사이즈 : Tall 355ml(+0원)</li></ul><div class="price-row" data-v-ca1a1a94><span class="price" data-v-ca1a1a94><em data-v-ca1a1a94>12,000</em>원 </span><ul class="count-btn-wrap" data-v-ca1a1a94><li data-v-ca1a1a94><button type="button" class="btn-minus" data-v-ca1a1a94></button></li><li class="num-count" data-v-ca1a1a94>2</li><li data-v-ca1a1a94><button type="button" class="btn-plus" data-v-ca1a1a94></button></li></ul></div></div></li></ul><div class="btn-add-menu-wrap" data-v-ca1a1a94><button type="button" class="btn-add-menu" data-v-ca1a1a94><i class="icon-add" data-v-ca1a1a94></i>메뉴추가 </button></div></section><section class="total-wrap" data-v-ca1a1a94><div class="desc" data-v-ca1a1a94><dl data-v-ca1a1a94><dt data-v-ca1a1a94>총 주문금액</dt><dd data-v-ca1a1a94>24,000원</dd></dl></div><div class="total" data-v-ca1a1a94><dl data-v-ca1a1a94><dt data-v-ca1a1a94>결제 예상 금액</dt><dd data-v-ca1a1a94><em class="total-price" data-v-ca1a1a94>25,500원</em><span class="min-price" data-v-ca1a1a94>최소주문금액:10,000원</span></dd></dl></div></section>`);
        if (unref(mode) === "available") {
          _push(`<div class="btn-wrap-fixed basket" data-v-ca1a1a94><p class="btn-text" data-v-ca1a1a94> 할인쿠폰 및 이벤트 적용은 주문 페이지에서 확인가능 합니다. </p><button class="btn-primary-1 btn-block-lg" data-v-ca1a1a94> 주문하기 </button></div>`);
        } else if (unref(mode) === "notAvailable") {
          _push(`<div class="btn-wrap-fixed" data-v-ca1a1a94><button class="btn-closed btn-block-lg" data-v-ca1a1a94>영업이 종료되었습니다</button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</main>`);
      } else if (unref(mode) === "empty") {
        _push(`<main class="basket-page" data-v-ca1a1a94><section class="basket-result" data-v-ca1a1a94><div class="basket-none" data-v-ca1a1a94><i class="icon-none-basket" data-v-ca1a1a94></i><p class="text" data-v-ca1a1a94>담긴 상품이 없습니다.</p></div></section></main>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ca1a1a94"]]);
export {
  index as default
};
//# sourceMappingURL=index-DQ6VgEH1.js.map
