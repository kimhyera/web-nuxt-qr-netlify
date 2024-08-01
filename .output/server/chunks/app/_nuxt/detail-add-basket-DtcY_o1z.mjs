import { withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import Toast from './toast-B-XQj1nI.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "detail-add-basket",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    route.params.groupNo;
    route.params.goodsNo;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div data-v-bf4faf3f><header class="fixed-goods-header" data-v-bf4faf3f><span class="title" data-v-bf4faf3f>\uC0C8\uC6B0\uBC84\uAC70</span><button class="btn-history-back" title="\uC774\uC804\uD398\uC774\uC9C0\uB85C \uC774\uB3D9" data-v-bf4faf3f></button></header><main class="detail-page" data-v-bf4faf3f><section class="detail-image-wrap img-ratio-detail-top" data-v-bf4faf3f><img src="https://mannaplanetstorage.blob.core.windows.net/mannashop-img-test/store_goods/461/S285461/20220825132409AZ1388.jpg" alt="" data-v-bf4faf3f></section><section class="info-wrap" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>\uC0C8\uC6B0\uBC84\uAC70</span><span class="desc" data-v-bf4faf3f>\uC0C8\uC6B0\uC0B4\uC744 \uAC00\uB4DD\uB123\uC5B4 \uB354 \uB9DB\uC788\uC5B4\uC9C4 \uC624\uB9AC\uC9C0\uB110 \uC0C8\uC6B0\uBC84\uAC70</span><div class="price-row" data-v-bf4faf3f><span class="price" data-v-bf4faf3f>4,500\uC6D0</span></div></section><section class="option-add-wrap" data-v-bf4faf3f><div class="option-add" data-v-bf4faf3f><div class="title-row" data-v-bf4faf3f><h3 class="title" data-v-bf4faf3f>\uC635\uC1581</h3><span class="validate" data-v-bf4faf3f>\uD544\uC218\uC120\uD0DD</span></div><ul class="option-list" data-v-bf4faf3f><li data-v-bf4faf3f><div class="form-check-wrap" data-v-bf4faf3f><input class="form-radio" id="radio00" type="radio" value="15572751" data-v-bf4faf3f><label class="form-check-label" for="radio00" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>test12</span><span class="price" data-v-bf4faf3f>+100\uC6D0</span></label></div></li><li data-v-bf4faf3f><div class="form-check-wrap" data-v-bf4faf3f><input class="form-radio" id="radio01" type="radio" value="15544753" data-v-bf4faf3f><label class="form-check-label" for="radio01" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>test1</span><span class="price" data-v-bf4faf3f>+0\uC6D0</span></label></div></li><li data-v-bf4faf3f><div class="form-check-wrap" data-v-bf4faf3f><input class="form-radio" id="radio02" type="radio" value="15544754" data-v-bf4faf3f><label class="form-check-label" for="radio02" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>test2</span><span class="price" data-v-bf4faf3f>+0\uC6D0</span></label></div></li></ul></div><div class="option-add" data-v-bf4faf3f><div class="title-row" data-v-bf4faf3f><h3 class="title" data-v-bf4faf3f>\uC635\uC1582</h3></div><ul class="option-list" data-v-bf4faf3f><li data-v-bf4faf3f><div class="form-check-wrap" data-v-bf4faf3f><input class="form-radio" id="radio10" type="radio" value="15572752" data-v-bf4faf3f><label class="form-check-label" for="radio10" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>test3</span><span class="price" data-v-bf4faf3f>+200\uC6D0</span></label></div></li><li data-v-bf4faf3f><div class="form-check-wrap" data-v-bf4faf3f><input class="form-radio" id="radio11" type="radio" value="15544756" data-v-bf4faf3f><label class="form-check-label" for="radio11" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>test4</span><span class="price" data-v-bf4faf3f>+0\uC6D0</span></label></div></li><li data-v-bf4faf3f><div class="form-check-wrap" data-v-bf4faf3f><input class="form-radio" id="radio12" type="radio" value="15544763" data-v-bf4faf3f><label class="form-check-label" for="radio12" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>test11</span><span class="price" data-v-bf4faf3f>+0\uC6D0</span></label></div></li></ul></div></section><section class="option-add-wrap" data-v-bf4faf3f><div class="option-add" data-v-bf4faf3f><div class="title-row" data-v-bf4faf3f><h3 class="title" data-v-bf4faf3f>\uADF8\uB8F91</h3><span class="validate" data-v-bf4faf3f><span data-v-bf4faf3f>\uD544\uC218 2\uAC1C \uC120\uD0DD</span></span></div><ul class="option-list" data-v-bf4faf3f><li data-v-bf4faf3f><div class="form-check-wrap" data-v-bf4faf3f><input class="form-check" id="grp00" type="checkbox" data-v-bf4faf3f><label class="form-check-label" for="grp00" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>\uACE8\uB4DC\uD329 </span><span class="price" data-v-bf4faf3f>+1,800\uC6D0</span></label></div></li><li data-v-bf4faf3f><div class="form-check-wrap" data-v-bf4faf3f><input class="form-check" id="grp01" type="checkbox" data-v-bf4faf3f><label class="form-check-label" for="grp01" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>\uC2DC\uC800\uC0D0\uB7EC\uB4DC </span><span class="price" data-v-bf4faf3f>+2,500\uC6D0</span></label></div></li><li data-v-bf4faf3f><div class="form-check-wrap" data-v-bf4faf3f><input class="form-check" id="grp02" type="checkbox" data-v-bf4faf3f><label class="form-check-label" for="grp02" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>\uCF5C\uB77C </span><span class="price" data-v-bf4faf3f>+1,300\uC6D0</span></label></div></li></ul></div><div class="option-add" data-v-bf4faf3f><div class="title-row" data-v-bf4faf3f><h3 class="title" data-v-bf4faf3f>\uADF8\uB8F92</h3><span class="validate" data-v-bf4faf3f>3\uAC1C\uAE4C\uC9C0 \uC120\uD0DD</span></div><ul class="option-list" data-v-bf4faf3f><li data-v-bf4faf3f><div class="form-check-wrap" data-v-bf4faf3f><input class="form-check" id="grp10" type="checkbox" data-v-bf4faf3f><label class="form-check-label" for="grp10" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>\uACE8\uB4DC\uD329 </span><span class="price" data-v-bf4faf3f>+1,800\uC6D0</span></label></div></li><li data-v-bf4faf3f><div class="form-check-wrap" data-v-bf4faf3f><input class="form-check" id="grp11" type="checkbox" data-v-bf4faf3f><label class="form-check-label" for="grp11" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>\uC2DC\uC800\uC0D0\uB7EC\uB4DC </span><span class="price" data-v-bf4faf3f>+2,500\uC6D0</span></label></div></li><li data-v-bf4faf3f><div class="form-check-wrap" data-v-bf4faf3f><input class="form-check" id="grp12" type="checkbox" data-v-bf4faf3f><label class="form-check-label" for="grp12" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>\uCF5C\uB77C </span><span class="price" data-v-bf4faf3f>+1,300\uC6D0</span></label></div></li><li data-v-bf4faf3f><div class="form-check-wrap" data-v-bf4faf3f><input class="form-check" id="grp13" type="checkbox" disabled data-v-bf4faf3f><label class="form-check-label" for="grp13" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>\uC120\uB370\uC544\uC774\uC2A4\uD06C\uB9BC \uD50C\uB808\uC778 </span><span class="price" data-v-bf4faf3f>+1,800\uC6D0</span></label></div></li><li data-v-bf4faf3f><div class="form-check-wrap" data-v-bf4faf3f><input class="form-check" id="grp14" type="checkbox" disabled data-v-bf4faf3f><label class="form-check-label" for="grp14" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>\uD074\uB798\uC2DD \uCE58\uC988\uBC84\uAC70 </span><span class="price" data-v-bf4faf3f>+4,500\uC6D0</span></label></div></li><li data-v-bf4faf3f><div class="form-check-wrap" data-v-bf4faf3f><input class="form-check" id="grp18" type="checkbox" disabled data-v-bf4faf3f><label class="form-check-label" for="grp18" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>\uD328\uBC00\uB9AC\uD329 </span><span class="price" data-v-bf4faf3f>+14,300\uC6D0</span></label></div></li><li data-v-bf4faf3f><div class="form-check-wrap" data-v-bf4faf3f><input class="form-check" id="grp19" type="checkbox" disabled="" data-v-bf4faf3f><label class="form-check-label" for="grp19" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>1\uC778\uD63C\uB2ED\uC138\uD2B8 <span class="badge-soldout" data-v-bf4faf3f>\uD488\uC808</span></span><span class="price" data-v-bf4faf3f>+11,600\uC6D0</span></label></div></li></ul></div></section><span class="border-coutom" data-v-bf4faf3f></span><section class="total-wrap" data-v-bf4faf3f><div class="count" data-v-bf4faf3f><dl data-v-bf4faf3f><dt data-v-bf4faf3f>\uC218\uB7C9</dt><ul class="count-btn-wrap" data-v-bf4faf3f><li data-v-bf4faf3f><button type="button" class="btn-minus" disabled data-v-bf4faf3f></button></li><li class="num-count" data-v-bf4faf3f>1</li><li data-v-bf4faf3f><button type="button" class="btn-plus" data-v-bf4faf3f></button></li></ul></dl></div><div class="total" data-v-bf4faf3f><dl data-v-bf4faf3f><dt data-v-bf4faf3f>\uC8FC\uBB38\uAE08\uC561</dt><dd data-v-bf4faf3f><em class="total-price" data-v-bf4faf3f>4,800\uC6D0</em></dd></dl></div></section><div class="btn-wrap-fixed-wrap" data-v-bf4faf3f><div class="btn-wrap-fixed" data-v-bf4faf3f><button class="btn-cart btn-block-lg" data-v-bf4faf3f>1\uAC1C \uC7A5\uBC14\uAD6C\uB2C8 \uB2F4\uAE30</button></div><div class="btn-fixed-fake-area" data-v-bf4faf3f></div></div></main></div>`);
      _push(ssrRenderComponent(Toast, { pos: "bottom" }, {
        text: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \uC0C1\uD488\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. `);
          } else {
            return [
              createTextVNode(" \uC0C1\uD488\uC774 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4. ")
            ];
          }
        }),
        button: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \uC7A5\uBC14\uAD6C\uB2C8\uB85C \uC774\uB3D9 `);
          } else {
            return [
              createTextVNode(" \uC7A5\uBC14\uAD6C\uB2C8\uB85C \uC774\uB3D9 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pb/order/detail-add-basket.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const detailAddBasket = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bf4faf3f"]]);

export { detailAddBasket as default };
//# sourceMappingURL=detail-add-basket-DtcY_o1z.mjs.map
