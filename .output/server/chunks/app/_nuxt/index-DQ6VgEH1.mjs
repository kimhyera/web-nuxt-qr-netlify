import { useSSRContext, defineComponent, ref, mergeProps, unref } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const mode = ref("available");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout1" }, _attrs))} data-v-ca1a1a94><header class="header-common fixed" data-v-ca1a1a94><div class="header-row" data-v-ca1a1a94><button title="\uC774\uC804\uD398\uC774\uC9C0\uB85C \uC774\uB3D9" class="btn-history-back" data-v-ca1a1a94></button><h1 class="header-title" data-v-ca1a1a94>\uC7A5\uBC14\uAD6C\uB2C8</h1></div></header><div class="header-fixed-fake-area" data-v-ca1a1a94></div>`);
      if (unref(mode) !== "empty") {
        _push(`<main class="basket-page" data-v-ca1a1a94><section class="tab-wrap" data-v-ca1a1a94><ul class="tab-order" data-v-ca1a1a94><li data-v-ca1a1a94><button data-v-ca1a1a94>\uBC30\uB2EC</button></li><li data-v-ca1a1a94><a aria-current="page" href="/basket-togo" class="router-link-active router-link-exact-active on" data-v-ca1a1a94>\uD3EC\uC7A5</a></li></ul></section><section class="basket-wrap" data-v-ca1a1a94><div class="all-check-row" data-v-ca1a1a94><div class="form-check-wrap" data-v-ca1a1a94><input class="form-check-sm" id="checkAll" type="checkbox" data-v-ca1a1a94><label class="form-check-label" for="checkAll" data-v-ca1a1a94> \uC804\uCCB4\uC120\uD0DD </label></div><button class="btn-remove-all" data-v-ca1a1a94>\uC120\uD0DD\uC0AD\uC81C</button></div><ul class="basket-list" data-v-ca1a1a94><li data-v-ca1a1a94><div class="inner" data-v-ca1a1a94><div class="title-row" data-v-ca1a1a94><div class="form-check-wrap" data-v-ca1a1a94><input class="form-check-sm" id="grp01_1234" type="checkbox" data-v-ca1a1a94><label class="form-check-label" for="grp01_1234" data-v-ca1a1a94> \uBE14\uB8E8\uBCA0\uB9AC \uCFE0\uD0A4 \uCE58\uC988 \uCF00\uC774\uD06C </label></div><button class="btn-remove-goods" title="\uC0C1\uD488\uBE44\uC6B0\uAE30" data-v-ca1a1a94></button></div><ul class="option-add-list" data-v-ca1a1a94><li data-v-ca1a1a94>\uC0AC\uC774\uC988 : Tall 355ml(+0\uC6D0)</li><li data-v-ca1a1a94> \uD1A0\uD551\uCD94\uAC00\uC120\uD0DD : \uCE74\uB77C\uBA5C \uB4DC\uB9AC\uC990(+1,500\uC6D0), \uCD08\uCF5C\uB9BF \uB4DC\uB9AC\uC990(+2,000), \uC5D0\uC2A4\uD504\uB808\uC18C \uD06C\uB9BC(+2,000) </li><li data-v-ca1a1a94>\uCD94\uAC00\uC120\uD0DD : \uD718\uD551\uD06C\uB9BC(+2,000\uC6D0)</li></ul><div class="price-row" data-v-ca1a1a94><span class="price" data-v-ca1a1a94><em data-v-ca1a1a94>12,000</em>\uC6D0 </span><ul class="count-btn-wrap" data-v-ca1a1a94><li data-v-ca1a1a94><button type="button" class="btn-minus" disabled="" data-v-ca1a1a94></button></li><li class="num-count" data-v-ca1a1a94>1</li><li data-v-ca1a1a94><button type="button" class="btn-plus" data-v-ca1a1a94></button></li></ul></div></div></li><li data-v-ca1a1a94><div class="inner" data-v-ca1a1a94><div class="title-row" data-v-ca1a1a94><div class="form-check-wrap" data-v-ca1a1a94><input class="form-check-sm" id="grp02_1235" type="checkbox" data-v-ca1a1a94><label class="form-check-label" for="grp02_1235" data-v-ca1a1a94> \uC544\uC774\uC2A4 \uB514\uCE74\uD398\uC778 \uCE74\uD398\uB77C\uB5BC </label></div><button class="btn-remove-goods" title="\uC0C1\uD488\uBE44\uC6B0\uAE30" data-v-ca1a1a94></button></div><ul class="option-add-list" data-v-ca1a1a94><li data-v-ca1a1a94>\uC0AC\uC774\uC988 : Tall 355ml(+0\uC6D0)</li></ul><div class="price-row" data-v-ca1a1a94><span class="price" data-v-ca1a1a94><em data-v-ca1a1a94>12,000</em>\uC6D0 </span><ul class="count-btn-wrap" data-v-ca1a1a94><li data-v-ca1a1a94><button type="button" class="btn-minus" data-v-ca1a1a94></button></li><li class="num-count" data-v-ca1a1a94>2</li><li data-v-ca1a1a94><button type="button" class="btn-plus" data-v-ca1a1a94></button></li></ul></div></div></li></ul><div class="btn-add-menu-wrap" data-v-ca1a1a94><button type="button" class="btn-add-menu" data-v-ca1a1a94><i class="icon-add" data-v-ca1a1a94></i>\uBA54\uB274\uCD94\uAC00 </button></div></section><section class="total-wrap" data-v-ca1a1a94><div class="desc" data-v-ca1a1a94><dl data-v-ca1a1a94><dt data-v-ca1a1a94>\uCD1D \uC8FC\uBB38\uAE08\uC561</dt><dd data-v-ca1a1a94>24,000\uC6D0</dd></dl></div><div class="total" data-v-ca1a1a94><dl data-v-ca1a1a94><dt data-v-ca1a1a94>\uACB0\uC81C \uC608\uC0C1 \uAE08\uC561</dt><dd data-v-ca1a1a94><em class="total-price" data-v-ca1a1a94>25,500\uC6D0</em><span class="min-price" data-v-ca1a1a94>\uCD5C\uC18C\uC8FC\uBB38\uAE08\uC561:10,000\uC6D0</span></dd></dl></div></section>`);
        if (unref(mode) === "available") {
          _push(`<div class="btn-wrap-fixed basket" data-v-ca1a1a94><p class="btn-text" data-v-ca1a1a94> \uD560\uC778\uCFE0\uD3F0 \uBC0F \uC774\uBCA4\uD2B8 \uC801\uC6A9\uC740 \uC8FC\uBB38 \uD398\uC774\uC9C0\uC5D0\uC11C \uD655\uC778\uAC00\uB2A5 \uD569\uB2C8\uB2E4. </p><button class="btn-primary-1 btn-block-lg" data-v-ca1a1a94> \uC8FC\uBB38\uD558\uAE30 </button></div>`);
        } else if (unref(mode) === "notAvailable") {
          _push(`<div class="btn-wrap-fixed" data-v-ca1a1a94><button class="btn-closed btn-block-lg" data-v-ca1a1a94>\uC601\uC5C5\uC774 \uC885\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4</button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</main>`);
      } else if (unref(mode) === "empty") {
        _push(`<main class="basket-page" data-v-ca1a1a94><section class="basket-result" data-v-ca1a1a94><div class="basket-none" data-v-ca1a1a94><i class="icon-none-basket" data-v-ca1a1a94></i><p class="text" data-v-ca1a1a94>\uB2F4\uAE34 \uC0C1\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</p></div></section></main>`);
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

export { index as default };
//# sourceMappingURL=index-DQ6VgEH1.mjs.map
