import { _ as __nuxt_component_0 } from "./nuxt-link-CBXZo5aS.js";
import { defineComponent, ref, resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0, a as _imports_2, b as _imports_3 } from "./img_smaple_01_2x-Ot9khhfV.js";
import { _ as _imports_1 } from "./img_smaple_03_2x-Bxcdrywo.js";
import { B as BusinessTime } from "./BusinessTime-_96kgf26.js";
import { D as DeliveryTip } from "./DeliveryTip-B-91KfQ7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "ufo";
import "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "defu";
import "klona";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "1001-popup1",
  __ssrInlineRender: true,
  setup(__props) {
    const isDeliveryTip = ref(false);
    const isBusinessTime = ref(false);
    const closeDeliveryTip = () => {
      isDeliveryTip.value = false;
      const app = (void 0).querySelector("#__nuxt");
      app == null ? void 0 : app.classList.remove("modal-open-overflow");
    };
    const closeBusinessTime = () => {
      isBusinessTime.value = false;
      const app = (void 0).querySelector("#__nuxt");
      app == null ? void 0 : app.classList.remove("modal-open-overflow");
    };
    ref(0);
    ref(0);
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_router_link = resolveComponent("router-link");
      _push(`<!--[--><div class="layout1" data-v-71c0e13c><header class="header-main" data-v-71c0e13c><div class="header-row" data-v-71c0e13c><h1 class="store-name" data-v-71c0e13c> 스토어 이름 </h1><button class="btn-user" title="마이페이지 바로가기" data-v-71c0e13c></button></div></header><nav class="navbar" data-v-71c0e13c><ul class="nav" data-v-71c0e13c><li data-v-71c0e13c>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/pb/main" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`매장소개`);
          } else {
            return [
              createTextVNode("매장소개")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-71c0e13c>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/pb/order/1001" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`배달`);
          } else {
            return [
              createTextVNode("배달")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-71c0e13c>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/pb/order/1002" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`포장`);
          } else {
            return [
              createTextVNode("포장")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-71c0e13c>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/pb/order/1008" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`테이블`);
          } else {
            return [
              createTextVNode("테이블")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-71c0e13c>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/pb/waiting" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`대기`);
          } else {
            return [
              createTextVNode("대기")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-71c0e13c>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/pb/booking" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`예약`);
          } else {
            return [
              createTextVNode("예약")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></nav><main class="order-page" data-v-71c0e13c><section class="order-dashboard" data-v-71c0e13c><div class="store-business-time" data-v-71c0e13c><div class="time-row outline" data-v-71c0e13c><span class="status open" data-v-71c0e13c>영업중</span><span class="time" data-v-71c0e13c><strong data-v-71c0e13c>목</strong> 09:00 ~ 19:00</span><button class="btn-modal-time" data-v-71c0e13c>전체보기</button></div></div><div class="delivery-info" data-v-71c0e13c><dl data-v-71c0e13c><dt data-v-71c0e13c>최소주문 금액</dt><dd data-v-71c0e13c>13,000원</dd></dl><dl data-v-71c0e13c><dt data-v-71c0e13c><button class="btn-tooltip" data-v-71c0e13c> 배달팁 <i class="btn_tooltip_16" data-v-71c0e13c></i></button></dt><dd data-v-71c0e13c>3,000원 ~</dd></dl><dl data-v-71c0e13c><dt data-v-71c0e13c>예상 소요시간</dt><dd data-v-71c0e13c>65~70분</dd></dl></div></section><section class="menu-list-section" data-v-71c0e13c><ul class="menu-group-slide" data-v-71c0e13c><li data-id="#grp_best3" data-v-71c0e13c><a class="btn-smooth" href="#grp_best3" data-v-71c0e13c>인기메뉴</a></li><li data-id="#grp_100" data-v-71c0e13c><a class="btn-smooth" href="#grp_100" data-v-71c0e13c>대표메뉴</a></li><li data-id="#grp_101" data-v-71c0e13c><a class="btn-smooth" href="#grp_101" data-v-71c0e13c>신메뉴</a></li><li data-id="#grp_102" data-v-71c0e13c><a class="btn-smooth" href="#grp_102" data-v-71c0e13c>추천메뉴</a></li><li data-id="#grp_103" data-v-71c0e13c><a class="btn-smooth" href="#grp_103" data-v-71c0e13c>콜드부르</a></li><li data-id="#grp_104" data-v-71c0e13c><a class="btn-smooth" href="#grp_104" data-v-71c0e13c>홀케이크</a></li><li data-id="#grp_105" data-v-71c0e13c><a class="btn-smooth" href="#grp_105" data-v-71c0e13c>티</a></li></ul><div class="menu-group-slide-fixed-fake-area" data-v-71c0e13c></div><ul class="menu-group-list" data-v-71c0e13c><li class="li-best3" data-v-71c0e13c><div id="grp_best3" class="best3-menu" data-v-71c0e13c><p class="grp-title" data-v-71c0e13c>인기메뉴</p><ul class="best-goods-list" data-v-71c0e13c><li data-v-71c0e13c>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-71c0e13c${_scopeId}><span class="name" data-v-71c0e13c${_scopeId}>아이스 디카페인 카페라떼</span><span class="price" data-v-71c0e13c${_scopeId}><em data-v-71c0e13c${_scopeId}>12,000</em>원</span><div class="sale-value" data-v-71c0e13c${_scopeId}><span data-v-71c0e13c${_scopeId}>월 평균 판매량</span><span data-v-71c0e13c${_scopeId}> 126개 </span></div></div><div class="position-relative" data-v-71c0e13c${_scopeId}><div class="img-wrap col-auto img-ratio-menu-list" data-v-71c0e13c${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-71c0e13c${_scopeId}></div><i class="icon_best_30" data-v-71c0e13c${_scopeId}></i></div>`);
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
      _push(`</li><li data-v-71c0e13c>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-71c0e13c${_scopeId}><span class="name" data-v-71c0e13c${_scopeId}>블루베리 쿠키 치즈 케이크</span><span class="price" data-v-71c0e13c${_scopeId}><em data-v-71c0e13c${_scopeId}>12,000</em>원</span><div class="sale-value" data-v-71c0e13c${_scopeId}><span data-v-71c0e13c${_scopeId}>월 평균 판매량</span><span data-v-71c0e13c${_scopeId}> 100개 </span></div></div><div class="position-relative" data-v-71c0e13c${_scopeId}><div class="img-wrap img-ratio-menu-list" data-v-71c0e13c${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-71c0e13c${_scopeId}></div><i class="icon_best_30" data-v-71c0e13c${_scopeId}></i></div>`);
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
      _push(`</li></ul></div></li><li id="grp_100" class="" data-v-71c0e13c><button class="btn-grp-title" data-v-71c0e13c> 대표메뉴 <i class="icon_arrow" data-v-71c0e13c></i></button><ul class="goods-list" data-v-71c0e13c><li data-v-71c0e13c>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-71c0e13c${_scopeId}><div class="badges" data-v-71c0e13c${_scopeId}><span class="badge" data-v-71c0e13c${_scopeId}>인기</span><span class="badge" data-v-71c0e13c${_scopeId}>재주문 많음</span></div><span class="name" data-v-71c0e13c${_scopeId}>블루베리 쿠키 치즈 케이크</span><span class="desc" data-v-71c0e13c${_scopeId}> 고소한 쿠키와 크림치즈를 듬뿍 넣어 만든 케이크 위에 달콤 상큼한 블루베리가 올라가 있는 치즈 케이크 메뉴 설명 입력 최대 두줄입력 두줄까지 입력 </span><span class="price" data-v-71c0e13c${_scopeId}><em data-v-71c0e13c${_scopeId}>12,000</em>원 </span></div><div class="img-wrap ratio" data-v-71c0e13c${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-71c0e13c${_scopeId}></div>`);
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
      _push(`</li><li data-v-71c0e13c>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-71c0e13c${_scopeId}><span class="name" data-v-71c0e13c${_scopeId}>아이스 디카페인 카페라떼</span><span class="desc" data-v-71c0e13c${_scopeId}>메뉴 설명 입력 최대 두줄입력 두줄까지 입력 </span><span class="price" data-v-71c0e13c${_scopeId}><em data-v-71c0e13c${_scopeId}>6,000</em>원 </span></div><div class="img-wrap ratio" data-v-71c0e13c${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-71c0e13c${_scopeId}></div>`);
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
      _push(`</li><li data-v-71c0e13c>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-71c0e13c${_scopeId}><div class="badges" data-v-71c0e13c${_scopeId}><span class="badge" data-v-71c0e13c${_scopeId}>인기</span><span class="badge" data-v-71c0e13c${_scopeId}>재주문 많음</span></div><span class="name" data-v-71c0e13c${_scopeId}>스페셜 햄 치즈 토스트</span><span class="price" data-v-71c0e13c${_scopeId}><em data-v-71c0e13c${_scopeId}>18,800</em>원 </span></div><div class="img-wrap ratio" data-v-71c0e13c${_scopeId}><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-71c0e13c${_scopeId}></div>`);
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
      _push(`</li></ul></li><li id="grp_101" class="" data-v-71c0e13c><button class="btn-grp-title" data-v-71c0e13c> 신메뉴<i class="icon_arrow" data-v-71c0e13c></i></button><ul class="goods-list" data-v-71c0e13c><li data-v-71c0e13c>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-71c0e13c${_scopeId}><span class="name" data-v-71c0e13c${_scopeId}>블루베리 쿠키 치즈 케이크</span><span class="desc" data-v-71c0e13c${_scopeId}> 고소한 쿠키와 크림치즈를 듬뿍 넣어 만든 케이크 위에 달콤 상큼한 블루베리가 올라가 있는 치즈 케이크 메뉴 설명 입력 최대 두줄입력 두줄까지 입력 </span><span class="price" data-v-71c0e13c${_scopeId}><em data-v-71c0e13c${_scopeId}>12,000</em>원 </span></div>`);
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
      _push(`</li><li data-v-71c0e13c>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-71c0e13c${_scopeId}><span class="name" data-v-71c0e13c${_scopeId}>아이스 디카페인 카페라떼</span><span class="price" data-v-71c0e13c${_scopeId}><em data-v-71c0e13c${_scopeId}>6,000</em>원 </span></div>`);
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
      _push(`</li><li data-v-71c0e13c>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-71c0e13c${_scopeId}><span class="name" data-v-71c0e13c${_scopeId}>스페셜 햄 치즈 토스트</span><span class="price" data-v-71c0e13c${_scopeId}><em data-v-71c0e13c${_scopeId}>18,800</em>원 </span></div>`);
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
      _push(`</li></ul></li><li id="grp_102" class="" data-v-71c0e13c><button class="btn-grp-title" data-v-71c0e13c> 추천메뉴<i class="icon_arrow" data-v-71c0e13c></i></button><ul class="goods-list" data-v-71c0e13c><li data-v-71c0e13c>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-71c0e13c${_scopeId}><span class="name" data-v-71c0e13c${_scopeId}>블루베리 쿠키 치즈 케이크</span><span class="desc" data-v-71c0e13c${_scopeId}> 고소한 쿠키와 크림치즈를 듬뿍 넣어 만든 케이크 위에 달콤 상큼한 블루베리가 올라가 있는 치즈 케이크 메뉴 설명 입력 최대 두줄입력 두줄까지 입력 </span><span class="price" data-v-71c0e13c${_scopeId}><em data-v-71c0e13c${_scopeId}>12,000</em>원 </span></div>`);
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
      _push(`</li><li data-v-71c0e13c>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-71c0e13c${_scopeId}><span class="name" data-v-71c0e13c${_scopeId}>아이스 디카페인 카페라떼</span><span class="price" data-v-71c0e13c${_scopeId}><em data-v-71c0e13c${_scopeId}>6,000</em>원 </span></div>`);
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
      _push(`</li><li data-v-71c0e13c>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-71c0e13c${_scopeId}><span class="name" data-v-71c0e13c${_scopeId}>스페셜 햄 치즈 토스트</span><span class="price" data-v-71c0e13c${_scopeId}><em data-v-71c0e13c${_scopeId}>18,800</em>원 </span></div>`);
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
      _push(`</li></ul></li><li id="grp_103" class="hidden" data-v-71c0e13c><button class="btn-grp-title" data-v-71c0e13c> 콜드부르<i class="icon_arrow" data-v-71c0e13c></i></button><ul class="goods-list" data-v-71c0e13c><li data-v-71c0e13c>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-71c0e13c${_scopeId}><span class="name" data-v-71c0e13c${_scopeId}>블루베리 쿠키 치즈 케이크</span><span class="desc" data-v-71c0e13c${_scopeId}> 고소한 쿠키와 크림치즈를 듬뿍 넣어 만든 케이크 위에 달콤 상큼한 블루베리가 올라가 있는 치즈 케이크 메뉴 설명 입력 최대 두줄입력 두줄까지 입력 </span><span class="price" data-v-71c0e13c${_scopeId}><em data-v-71c0e13c${_scopeId}>12,000</em>원 </span></div>`);
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
      _push(`</li><li data-v-71c0e13c>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-71c0e13c${_scopeId}><span class="name" data-v-71c0e13c${_scopeId}>아이스 디카페인 카페라떼</span><span class="price" data-v-71c0e13c${_scopeId}><em data-v-71c0e13c${_scopeId}>6,000</em>원 </span></div>`);
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
      _push(`</li><li data-v-71c0e13c>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-71c0e13c${_scopeId}><span class="name" data-v-71c0e13c${_scopeId}>스페셜 햄 치즈 토스트</span><span class="price" data-v-71c0e13c${_scopeId}><em data-v-71c0e13c${_scopeId}>18,800</em>원 </span></div>`);
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
      _push(`</li></ul></li><li id="grp_104" class="hidden" data-v-71c0e13c><button class="btn-grp-title" data-v-71c0e13c> 홀케이크<i class="icon_arrow" data-v-71c0e13c></i></button><ul class="goods-list" data-v-71c0e13c><li data-v-71c0e13c>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-71c0e13c${_scopeId}><span class="name" data-v-71c0e13c${_scopeId}>블루베리 쿠키 치즈 케이크</span><span class="desc" data-v-71c0e13c${_scopeId}> 고소한 쿠키와 크림치즈를 듬뿍 넣어 만든 케이크 위에 달콤 상큼한 블루베리가 올라가 있는 치즈 케이크 메뉴 설명 입력 최대 두줄입력 두줄까지 입력 </span><span class="price" data-v-71c0e13c${_scopeId}><em data-v-71c0e13c${_scopeId}>12,000</em>원 </span></div>`);
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
      _push(`</li></ul></li><li id="grp_105" class="hidden" data-v-71c0e13c><button class="btn-grp-title" data-v-71c0e13c> 티<i class="icon_arrow" data-v-71c0e13c></i></button><ul class="goods-list" data-v-71c0e13c><li data-v-71c0e13c>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-71c0e13c${_scopeId}><span class="name" data-v-71c0e13c${_scopeId}>카모마일 티</span><span class="desc" data-v-71c0e13c${_scopeId}> 숙면에 좋은 티 </span><span class="price" data-v-71c0e13c${_scopeId}><em data-v-71c0e13c${_scopeId}>6,000</em>원 </span></div>`);
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
      _push(`</li><li data-v-71c0e13c>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-71c0e13c${_scopeId}><span class="name" data-v-71c0e13c${_scopeId}>페퍼민트 티</span><span class="price" data-v-71c0e13c${_scopeId}><em data-v-71c0e13c${_scopeId}>6,000</em>원 </span></div>`);
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
      _push(`</li><li data-v-71c0e13c>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-71c0e13c${_scopeId}><span class="name" data-v-71c0e13c${_scopeId}>페퍼민트 티</span><span class="price" data-v-71c0e13c${_scopeId}><em data-v-71c0e13c${_scopeId}>6,000</em>원 </span></div>`);
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
      _push(`</li></ul></li></ul></section><div class="btn-wrap-fixed-wrap" data-v-71c0e13c><div class="btn-wrap-fixed" data-v-71c0e13c><button class="btn-address btn-block-lg" data-v-71c0e13c> 주소를 설정하세요. </button></div><div class="btn-fixed-fake-area" data-v-71c0e13c></div></div></main></div>`);
      if (!isBusinessTime.value) {
        _push(ssrRenderComponent(BusinessTime, { onClose: closeBusinessTime }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (isDeliveryTip.value) {
        _push(ssrRenderComponent(DeliveryTip, { onClose: closeDeliveryTip }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pb/order/1001-popup1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _1001Popup1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-71c0e13c"]]);
export {
  _1001Popup1 as default
};
//# sourceMappingURL=1001-popup1-BTunl14u.js.map
