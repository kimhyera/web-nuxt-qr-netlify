import { withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useRoute } from "vue-router";
import Toast from "./toast-B-XQj1nI.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "detail-add-basket",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    route.params.groupNo;
    route.params.goodsNo;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div data-v-bf4faf3f><header class="fixed-goods-header" data-v-bf4faf3f><span class="title" data-v-bf4faf3f>새우버거</span><button class="btn-history-back" title="이전페이지로 이동" data-v-bf4faf3f></button></header><main class="detail-page" data-v-bf4faf3f><section class="detail-image-wrap img-ratio-detail-top" data-v-bf4faf3f><img src="https://mannaplanetstorage.blob.core.windows.net/mannashop-img-test/store_goods/461/S285461/20220825132409AZ1388.jpg" alt="" data-v-bf4faf3f></section><section class="info-wrap" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>새우버거</span><span class="desc" data-v-bf4faf3f>새우살을 가득넣어 더 맛있어진 오리지널 새우버거</span><div class="price-row" data-v-bf4faf3f><span class="price" data-v-bf4faf3f>4,500원</span></div></section><section class="option-add-wrap" data-v-bf4faf3f><div class="option-add" data-v-bf4faf3f><div class="title-row" data-v-bf4faf3f><h3 class="title" data-v-bf4faf3f>옵션1</h3><span class="validate" data-v-bf4faf3f>필수선택</span></div><ul class="option-list" data-v-bf4faf3f><li data-v-bf4faf3f><div class="form-check-wrap" data-v-bf4faf3f><input class="form-radio" id="radio00" type="radio" value="15572751" data-v-bf4faf3f><label class="form-check-label" for="radio00" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>test12</span><span class="price" data-v-bf4faf3f>+100원</span></label></div></li><li data-v-bf4faf3f><div class="form-check-wrap" data-v-bf4faf3f><input class="form-radio" id="radio01" type="radio" value="15544753" data-v-bf4faf3f><label class="form-check-label" for="radio01" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>test1</span><span class="price" data-v-bf4faf3f>+0원</span></label></div></li><li data-v-bf4faf3f><div class="form-check-wrap" data-v-bf4faf3f><input class="form-radio" id="radio02" type="radio" value="15544754" data-v-bf4faf3f><label class="form-check-label" for="radio02" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>test2</span><span class="price" data-v-bf4faf3f>+0원</span></label></div></li></ul></div><div class="option-add" data-v-bf4faf3f><div class="title-row" data-v-bf4faf3f><h3 class="title" data-v-bf4faf3f>옵션2</h3></div><ul class="option-list" data-v-bf4faf3f><li data-v-bf4faf3f><div class="form-check-wrap" data-v-bf4faf3f><input class="form-radio" id="radio10" type="radio" value="15572752" data-v-bf4faf3f><label class="form-check-label" for="radio10" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>test3</span><span class="price" data-v-bf4faf3f>+200원</span></label></div></li><li data-v-bf4faf3f><div class="form-check-wrap" data-v-bf4faf3f><input class="form-radio" id="radio11" type="radio" value="15544756" data-v-bf4faf3f><label class="form-check-label" for="radio11" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>test4</span><span class="price" data-v-bf4faf3f>+0원</span></label></div></li><li data-v-bf4faf3f><div class="form-check-wrap" data-v-bf4faf3f><input class="form-radio" id="radio12" type="radio" value="15544763" data-v-bf4faf3f><label class="form-check-label" for="radio12" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>test11</span><span class="price" data-v-bf4faf3f>+0원</span></label></div></li></ul></div></section><section class="option-add-wrap" data-v-bf4faf3f><div class="option-add" data-v-bf4faf3f><div class="title-row" data-v-bf4faf3f><h3 class="title" data-v-bf4faf3f>그룹1</h3><span class="validate" data-v-bf4faf3f><span data-v-bf4faf3f>필수 2개 선택</span></span></div><ul class="option-list" data-v-bf4faf3f><li data-v-bf4faf3f><div class="form-check-wrap" data-v-bf4faf3f><input class="form-check" id="grp00" type="checkbox" data-v-bf4faf3f><label class="form-check-label" for="grp00" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>골드팩 </span><span class="price" data-v-bf4faf3f>+1,800원</span></label></div></li><li data-v-bf4faf3f><div class="form-check-wrap" data-v-bf4faf3f><input class="form-check" id="grp01" type="checkbox" data-v-bf4faf3f><label class="form-check-label" for="grp01" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>시저샐러드 </span><span class="price" data-v-bf4faf3f>+2,500원</span></label></div></li><li data-v-bf4faf3f><div class="form-check-wrap" data-v-bf4faf3f><input class="form-check" id="grp02" type="checkbox" data-v-bf4faf3f><label class="form-check-label" for="grp02" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>콜라 </span><span class="price" data-v-bf4faf3f>+1,300원</span></label></div></li></ul></div><div class="option-add" data-v-bf4faf3f><div class="title-row" data-v-bf4faf3f><h3 class="title" data-v-bf4faf3f>그룹2</h3><span class="validate" data-v-bf4faf3f>3개까지 선택</span></div><ul class="option-list" data-v-bf4faf3f><li data-v-bf4faf3f><div class="form-check-wrap" data-v-bf4faf3f><input class="form-check" id="grp10" type="checkbox" data-v-bf4faf3f><label class="form-check-label" for="grp10" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>골드팩 </span><span class="price" data-v-bf4faf3f>+1,800원</span></label></div></li><li data-v-bf4faf3f><div class="form-check-wrap" data-v-bf4faf3f><input class="form-check" id="grp11" type="checkbox" data-v-bf4faf3f><label class="form-check-label" for="grp11" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>시저샐러드 </span><span class="price" data-v-bf4faf3f>+2,500원</span></label></div></li><li data-v-bf4faf3f><div class="form-check-wrap" data-v-bf4faf3f><input class="form-check" id="grp12" type="checkbox" data-v-bf4faf3f><label class="form-check-label" for="grp12" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>콜라 </span><span class="price" data-v-bf4faf3f>+1,300원</span></label></div></li><li data-v-bf4faf3f><div class="form-check-wrap" data-v-bf4faf3f><input class="form-check" id="grp13" type="checkbox" disabled data-v-bf4faf3f><label class="form-check-label" for="grp13" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>선데아이스크림 플레인 </span><span class="price" data-v-bf4faf3f>+1,800원</span></label></div></li><li data-v-bf4faf3f><div class="form-check-wrap" data-v-bf4faf3f><input class="form-check" id="grp14" type="checkbox" disabled data-v-bf4faf3f><label class="form-check-label" for="grp14" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>클래식 치즈버거 </span><span class="price" data-v-bf4faf3f>+4,500원</span></label></div></li><li data-v-bf4faf3f><div class="form-check-wrap" data-v-bf4faf3f><input class="form-check" id="grp18" type="checkbox" disabled data-v-bf4faf3f><label class="form-check-label" for="grp18" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>패밀리팩 </span><span class="price" data-v-bf4faf3f>+14,300원</span></label></div></li><li data-v-bf4faf3f><div class="form-check-wrap" data-v-bf4faf3f><input class="form-check" id="grp19" type="checkbox" disabled="" data-v-bf4faf3f><label class="form-check-label" for="grp19" data-v-bf4faf3f><span class="name" data-v-bf4faf3f>1인혼닭세트 <span class="badge-soldout" data-v-bf4faf3f>품절</span></span><span class="price" data-v-bf4faf3f>+11,600원</span></label></div></li></ul></div></section><span class="border-coutom" data-v-bf4faf3f></span><section class="total-wrap" data-v-bf4faf3f><div class="count" data-v-bf4faf3f><dl data-v-bf4faf3f><dt data-v-bf4faf3f>수량</dt><ul class="count-btn-wrap" data-v-bf4faf3f><li data-v-bf4faf3f><button type="button" class="btn-minus" disabled data-v-bf4faf3f></button></li><li class="num-count" data-v-bf4faf3f>1</li><li data-v-bf4faf3f><button type="button" class="btn-plus" data-v-bf4faf3f></button></li></ul></dl></div><div class="total" data-v-bf4faf3f><dl data-v-bf4faf3f><dt data-v-bf4faf3f>주문금액</dt><dd data-v-bf4faf3f><em class="total-price" data-v-bf4faf3f>4,800원</em></dd></dl></div></section><div class="btn-wrap-fixed-wrap" data-v-bf4faf3f><div class="btn-wrap-fixed" data-v-bf4faf3f><button class="btn-cart btn-block-lg" data-v-bf4faf3f>1개 장바구니 담기</button></div><div class="btn-fixed-fake-area" data-v-bf4faf3f></div></div></main></div>`);
      _push(ssrRenderComponent(Toast, { pos: "bottom" }, {
        text: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 상품이 추가되었습니다. `);
          } else {
            return [
              createTextVNode(" 상품이 추가되었습니다. ")
            ];
          }
        }),
        button: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 장바구니로 이동 `);
          } else {
            return [
              createTextVNode(" 장바구니로 이동 ")
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
export {
  detailAddBasket as default
};
//# sourceMappingURL=detail-add-basket-DtcY_o1z.js.map
