import { defineComponent, ref, resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0, a as _imports_2, b as _imports_3 } from "./img_smaple_01_2x-Ot9khhfV.js";
import { _ as _imports_1 } from "./img_smaple_03_2x-Bxcdrywo.js";
import { B as BusinessTime } from "./BusinessTime-_96kgf26.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "togo",
  __ssrInlineRender: true,
  setup(__props) {
    const isBusinessTime = ref(false);
    const closeBusinessTime = () => {
      isBusinessTime.value = false;
      const app = (void 0).querySelector("#__nuxt");
      app == null ? void 0 : app.classList.remove("modal-open-overflow");
    };
    ref(0);
    ref(0);
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<!--[--><div class="layout1" data-v-3b39e6eb><header class="header-main" data-v-3b39e6eb><div class="header-row" data-v-3b39e6eb><h1 class="store-name" data-v-3b39e6eb> 스토어 이름 </h1><button class="btn-user" title="마이페이지 바로가기" data-v-3b39e6eb></button></div></header><main class="order-page" data-v-3b39e6eb><section class="order-dashboard" data-v-3b39e6eb><div class="togo-info" data-v-3b39e6eb><dl data-v-3b39e6eb><dt data-v-3b39e6eb><button class="btn-tooltip" data-v-3b39e6eb>픽업시간 <i class="btn_tooltip_16" data-v-3b39e6eb></i></button></dt><dd data-v-3b39e6eb>55분 후</dd></dl><dl class="store-address" data-v-3b39e6eb><dt data-v-3b39e6eb><a href="/pb/map" class="store-map-link" data-v-3b39e6eb>매장위치</a><button class="btn-copy" data-v-3b39e6eb>주소복사</button></dt><dd data-v-3b39e6eb><input type="text" readonly class="input-address" data-v-3b39e6eb><div class="front-address" data-v-3b39e6eb>서울 구로구 경인로 661 (신도림동, 신도림1차푸르지오)</div></dd></dl></div></section><section class="menu-list-section" data-v-3b39e6eb><ul class="menu-group-slide" data-v-3b39e6eb><li data-id="#grp_best3" data-v-3b39e6eb><a class="btn-smooth" href="#grp_best3" data-v-3b39e6eb>인기메뉴</a></li><li data-id="#grp_100" data-v-3b39e6eb><a class="btn-smooth" href="#grp_100" data-v-3b39e6eb>대표메뉴</a></li><li data-id="#grp_101" data-v-3b39e6eb><a class="btn-smooth" href="#grp_101" data-v-3b39e6eb>신메뉴</a></li><li data-id="#grp_102" data-v-3b39e6eb><a class="btn-smooth" href="#grp_102" data-v-3b39e6eb>추천메뉴</a></li><li data-id="#grp_103" data-v-3b39e6eb><a class="btn-smooth" href="#grp_103" data-v-3b39e6eb>콜드부르</a></li><li data-id="#grp_104" data-v-3b39e6eb><a class="btn-smooth" href="#grp_104" data-v-3b39e6eb>홀케이크</a></li><li data-id="#grp_105" data-v-3b39e6eb><a class="btn-smooth" href="#grp_105" data-v-3b39e6eb>티</a></li></ul><div class="menu-group-slide-fixed-fake-area" data-v-3b39e6eb></div><ul class="menu-group-list" data-v-3b39e6eb><li class="li-best3" data-v-3b39e6eb><div id="grp_best3" class="best3-menu" data-v-3b39e6eb><p class="grp-title" data-v-3b39e6eb>인기메뉴</p><ul class="best-goods-list" data-v-3b39e6eb><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><span class="name" data-v-3b39e6eb${_scopeId}>아이스 디카페인 카페라떼</span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>12,000</em>원</span><div class="sale-value" data-v-3b39e6eb${_scopeId}><span data-v-3b39e6eb${_scopeId}>월 평균 판매량</span><span data-v-3b39e6eb${_scopeId}> 126개 </span></div></div><div class="position-relative" data-v-3b39e6eb${_scopeId}><div class="img-wrap col-auto img-ratio-menu-list" data-v-3b39e6eb${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-3b39e6eb${_scopeId}></div><i class="icon_best_30" data-v-3b39e6eb${_scopeId}></i></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("span", { class: "name" }, "아이스 디카페인 카페라떼"),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "12,000"),
                  createTextVNode("원")
                ]),
                createVNode("div", { class: "sale-value" }, [
                  createVNode("span", null, "월 평균 판매량"),
                  createVNode("span", null, " 126개 ")
                ])
              ]),
              createVNode("div", { class: "position-relative" }, [
                createVNode("div", { class: "img-wrap col-auto img-ratio-menu-list" }, [
                  createVNode("img", {
                    src: _imports_0,
                    alt: ""
                  })
                ]),
                createVNode("i", { class: "icon_best_30" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><span class="name" data-v-3b39e6eb${_scopeId}>블루베리 쿠키 치즈 케이크</span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>12,000</em>원</span><div class="sale-value" data-v-3b39e6eb${_scopeId}><span data-v-3b39e6eb${_scopeId}>월 평균 판매량</span><span data-v-3b39e6eb${_scopeId}> 100개 </span></div></div><div class="position-relative" data-v-3b39e6eb${_scopeId}><div class="img-wrap img-ratio-menu-list" data-v-3b39e6eb${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-3b39e6eb${_scopeId}></div><i class="icon_best_30" data-v-3b39e6eb${_scopeId}></i></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("span", { class: "name" }, "블루베리 쿠키 치즈 케이크"),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "12,000"),
                  createTextVNode("원")
                ]),
                createVNode("div", { class: "sale-value" }, [
                  createVNode("span", null, "월 평균 판매량"),
                  createVNode("span", null, " 100개 ")
                ])
              ]),
              createVNode("div", { class: "position-relative" }, [
                createVNode("div", { class: "img-wrap img-ratio-menu-list" }, [
                  createVNode("img", {
                    src: _imports_1,
                    alt: ""
                  })
                ]),
                createVNode("i", { class: "icon_best_30" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></li><li id="grp_100" class="" data-v-3b39e6eb><button class="btn-grp-title" data-v-3b39e6eb> 대표메뉴 <i class="icon_arrow" data-v-3b39e6eb></i></button><ul class="goods-list" data-v-3b39e6eb><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><div class="badges" data-v-3b39e6eb${_scopeId}><span class="badge" data-v-3b39e6eb${_scopeId}>인기</span><span class="badge" data-v-3b39e6eb${_scopeId}>재주문 많음</span></div><span class="name" data-v-3b39e6eb${_scopeId}>블루베리 쿠키 치즈 케이크</span><span class="desc" data-v-3b39e6eb${_scopeId}> 고소한 쿠키와 크림치즈를 듬뿍 넣어 만든 케이크 위에 달콤 상큼한 블루베리가 올라가 있는 치즈 케이크 메뉴 설명 입력 최대 두줄입력 두줄까지 입력 </span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>12,000</em>원 </span></div><div class="img-wrap ratio" data-v-3b39e6eb${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-3b39e6eb${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("div", { class: "badges" }, [
                  createVNode("span", { class: "badge" }, "인기"),
                  createVNode("span", { class: "badge" }, "재주문 많음")
                ]),
                createVNode("span", { class: "name" }, "블루베리 쿠키 치즈 케이크"),
                createVNode("span", { class: "desc" }, " 고소한 쿠키와 크림치즈를 듬뿍 넣어 만든 케이크 위에 달콤 상큼한 블루베리가 올라가 있는 치즈 케이크 메뉴 설명 입력 최대 두줄입력 두줄까지 입력 "),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "12,000"),
                  createTextVNode("원 ")
                ])
              ]),
              createVNode("div", { class: "img-wrap ratio" }, [
                createVNode("img", {
                  src: _imports_1,
                  alt: ""
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><span class="name" data-v-3b39e6eb${_scopeId}>아이스 디카페인 카페라떼</span><span class="desc" data-v-3b39e6eb${_scopeId}>메뉴 설명 입력 최대 두줄입력 두줄까지 입력 </span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>6,000</em>원 </span></div><div class="img-wrap ratio" data-v-3b39e6eb${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-3b39e6eb${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("span", { class: "name" }, "아이스 디카페인 카페라떼"),
                createVNode("span", { class: "desc" }, "메뉴 설명 입력 최대 두줄입력 두줄까지 입력 "),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "6,000"),
                  createTextVNode("원 ")
                ])
              ]),
              createVNode("div", { class: "img-wrap ratio" }, [
                createVNode("img", {
                  src: _imports_2,
                  alt: ""
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><div class="badges" data-v-3b39e6eb${_scopeId}><span class="badge" data-v-3b39e6eb${_scopeId}>인기</span><span class="badge" data-v-3b39e6eb${_scopeId}>재주문 많음</span></div><span class="name" data-v-3b39e6eb${_scopeId}>스페셜 햄 치즈 토스트</span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>18,800</em>원 </span></div><div class="img-wrap ratio" data-v-3b39e6eb${_scopeId}><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-3b39e6eb${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("div", { class: "badges" }, [
                  createVNode("span", { class: "badge" }, "인기"),
                  createVNode("span", { class: "badge" }, "재주문 많음")
                ]),
                createVNode("span", { class: "name" }, "스페셜 햄 치즈 토스트"),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "18,800"),
                  createTextVNode("원 ")
                ])
              ]),
              createVNode("div", { class: "img-wrap ratio" }, [
                createVNode("img", {
                  src: _imports_3,
                  alt: ""
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li id="grp_101" class="" data-v-3b39e6eb><button class="btn-grp-title" data-v-3b39e6eb> 신메뉴<i class="icon_arrow" data-v-3b39e6eb></i></button><ul class="goods-list" data-v-3b39e6eb><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><span class="name" data-v-3b39e6eb${_scopeId}>블루베리 쿠키 치즈 케이크</span><span class="desc" data-v-3b39e6eb${_scopeId}> 고소한 쿠키와 크림치즈를 듬뿍 넣어 만든 케이크 위에 달콤 상큼한 블루베리가 올라가 있는 치즈 케이크 메뉴 설명 입력 최대 두줄입력 두줄까지 입력 </span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>12,000</em>원 </span></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("span", { class: "name" }, "블루베리 쿠키 치즈 케이크"),
                createVNode("span", { class: "desc" }, " 고소한 쿠키와 크림치즈를 듬뿍 넣어 만든 케이크 위에 달콤 상큼한 블루베리가 올라가 있는 치즈 케이크 메뉴 설명 입력 최대 두줄입력 두줄까지 입력 "),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "12,000"),
                  createTextVNode("원 ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><span class="name" data-v-3b39e6eb${_scopeId}>아이스 디카페인 카페라떼</span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>6,000</em>원 </span></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("span", { class: "name" }, "아이스 디카페인 카페라떼"),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "6,000"),
                  createTextVNode("원 ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><span class="name" data-v-3b39e6eb${_scopeId}>스페셜 햄 치즈 토스트</span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>18,800</em>원 </span></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("span", { class: "name" }, "스페셜 햄 치즈 토스트"),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "18,800"),
                  createTextVNode("원 ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li id="grp_102" class="" data-v-3b39e6eb><button class="btn-grp-title" data-v-3b39e6eb> 추천메뉴<i class="icon_arrow" data-v-3b39e6eb></i></button><ul class="goods-list" data-v-3b39e6eb><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><span class="name" data-v-3b39e6eb${_scopeId}>블루베리 쿠키 치즈 케이크</span><span class="desc" data-v-3b39e6eb${_scopeId}> 고소한 쿠키와 크림치즈를 듬뿍 넣어 만든 케이크 위에 달콤 상큼한 블루베리가 올라가 있는 치즈 케이크 메뉴 설명 입력 최대 두줄입력 두줄까지 입력 </span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>12,000</em>원 </span></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("span", { class: "name" }, "블루베리 쿠키 치즈 케이크"),
                createVNode("span", { class: "desc" }, " 고소한 쿠키와 크림치즈를 듬뿍 넣어 만든 케이크 위에 달콤 상큼한 블루베리가 올라가 있는 치즈 케이크 메뉴 설명 입력 최대 두줄입력 두줄까지 입력 "),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "12,000"),
                  createTextVNode("원 ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><span class="name" data-v-3b39e6eb${_scopeId}>아이스 디카페인 카페라떼</span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>6,000</em>원 </span></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("span", { class: "name" }, "아이스 디카페인 카페라떼"),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "6,000"),
                  createTextVNode("원 ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><span class="name" data-v-3b39e6eb${_scopeId}>스페셜 햄 치즈 토스트</span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>18,800</em>원 </span></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("span", { class: "name" }, "스페셜 햄 치즈 토스트"),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "18,800"),
                  createTextVNode("원 ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li id="grp_103" class="hidden" data-v-3b39e6eb><button class="btn-grp-title" data-v-3b39e6eb> 콜드부르<i class="icon_arrow" data-v-3b39e6eb></i></button><ul class="goods-list" data-v-3b39e6eb><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><span class="name" data-v-3b39e6eb${_scopeId}>블루베리 쿠키 치즈 케이크</span><span class="desc" data-v-3b39e6eb${_scopeId}> 고소한 쿠키와 크림치즈를 듬뿍 넣어 만든 케이크 위에 달콤 상큼한 블루베리가 올라가 있는 치즈 케이크 메뉴 설명 입력 최대 두줄입력 두줄까지 입력 </span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>12,000</em>원 </span></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("span", { class: "name" }, "블루베리 쿠키 치즈 케이크"),
                createVNode("span", { class: "desc" }, " 고소한 쿠키와 크림치즈를 듬뿍 넣어 만든 케이크 위에 달콤 상큼한 블루베리가 올라가 있는 치즈 케이크 메뉴 설명 입력 최대 두줄입력 두줄까지 입력 "),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "12,000"),
                  createTextVNode("원 ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><span class="name" data-v-3b39e6eb${_scopeId}>아이스 디카페인 카페라떼</span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>6,000</em>원 </span></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("span", { class: "name" }, "아이스 디카페인 카페라떼"),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "6,000"),
                  createTextVNode("원 ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><span class="name" data-v-3b39e6eb${_scopeId}>스페셜 햄 치즈 토스트</span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>18,800</em>원 </span></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("span", { class: "name" }, "스페셜 햄 치즈 토스트"),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "18,800"),
                  createTextVNode("원 ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li id="grp_104" class="hidden" data-v-3b39e6eb><button class="btn-grp-title" data-v-3b39e6eb> 홀케이크<i class="icon_arrow" data-v-3b39e6eb></i></button><ul class="goods-list" data-v-3b39e6eb><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><span class="name" data-v-3b39e6eb${_scopeId}>블루베리 쿠키 치즈 케이크</span><span class="desc" data-v-3b39e6eb${_scopeId}> 고소한 쿠키와 크림치즈를 듬뿍 넣어 만든 케이크 위에 달콤 상큼한 블루베리가 올라가 있는 치즈 케이크 메뉴 설명 입력 최대 두줄입력 두줄까지 입력 </span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>12,000</em>원 </span></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("span", { class: "name" }, "블루베리 쿠키 치즈 케이크"),
                createVNode("span", { class: "desc" }, " 고소한 쿠키와 크림치즈를 듬뿍 넣어 만든 케이크 위에 달콤 상큼한 블루베리가 올라가 있는 치즈 케이크 메뉴 설명 입력 최대 두줄입력 두줄까지 입력 "),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "12,000"),
                  createTextVNode("원 ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li id="grp_105" class="hidden" data-v-3b39e6eb><button class="btn-grp-title" data-v-3b39e6eb> 티<i class="icon_arrow" data-v-3b39e6eb></i></button><ul class="goods-list" data-v-3b39e6eb><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><span class="name" data-v-3b39e6eb${_scopeId}>카모마일 티</span><span class="desc" data-v-3b39e6eb${_scopeId}> 숙면에 좋은 티 </span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>6,000</em>원 </span></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("span", { class: "name" }, "카모마일 티"),
                createVNode("span", { class: "desc" }, " 숙면에 좋은 티 "),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "6,000"),
                  createTextVNode("원 ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><span class="name" data-v-3b39e6eb${_scopeId}>페퍼민트 티</span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>6,000</em>원 </span></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("span", { class: "name" }, "페퍼민트 티"),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "6,000"),
                  createTextVNode("원 ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><span class="name" data-v-3b39e6eb${_scopeId}>페퍼민트 티</span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>6,000</em>원 </span></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("span", { class: "name" }, "페퍼민트 티"),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "6,000"),
                  createTextVNode("원 ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li></ul></section><div class="btn-wrap-fixed" data-v-3b39e6eb><div class="btn-row" data-v-3b39e6eb><button class="btn-cart-link" data-v-3b39e6eb> 장바구니 <span class="count" data-v-3b39e6eb>0</span></button><button class="btn-order-link" data-v-3b39e6eb>0원 <em data-v-67f37c94="" data-v-3b39e6eb>포장</em> 주문 </button></div></div></main></div>`);
      if (isBusinessTime.value) {
        _push(ssrRenderComponent(BusinessTime, { onClose: closeBusinessTime }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pb/order/togo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const togo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3b39e6eb"]]);
export {
  togo as default
};
//# sourceMappingURL=togo-CfK8Zsxa.js.map
