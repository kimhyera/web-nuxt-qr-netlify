import { defineComponent, ref, resolveComponent, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0, a as _imports_2, b as _imports_3 } from "./img_smaple_01_2x-Ot9khhfV.js";
import { _ as _imports_1 } from "./img_smaple_03_2x-Bxcdrywo.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay } from "swiper";
import modalStoreInfo from "./modal-store-info-CXbmSRe4.js";
import Backdrop from "./Backdrop-U1gvmcf5.js";
import modalMemo from "./modal-notice-sxuJyCk-.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
import "klona";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "cookie-es";
import "ohash";
import "pinia-plugin-persistedstate";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "store-info",
  __ssrInlineRender: true,
  setup(__props) {
    SwiperCore.use([Autoplay]);
    const isMemo = ref(false);
    const isStoreInfo = ref(true);
    const closeMemo = () => {
      isMemo.value = false;
    };
    const closeStoreInfo = () => {
      isStoreInfo.value = false;
      const app = (void 0).querySelector("#__nuxt");
      app == null ? void 0 : app.classList.remove("modal-open-fixed");
    };
    ref(0);
    ref(0);
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<!--[--><div class="layout1" data-v-52812ce7><header class="header-main" data-v-52812ce7><div class="header-row" data-v-52812ce7><h1 class="store-name" data-v-52812ce7> 스토어 이름 <i class="i-store-info" data-v-52812ce7></i></h1></div></header><main class="order-page" data-v-52812ce7><section class="order-dashboard" data-v-52812ce7><div class="table-info" data-v-52812ce7><dl class="table-No" data-v-52812ce7><dt data-v-52812ce7>테이블 번호</dt><dd data-v-52812ce7>2</dd></dl></div></section><section class="store-notice-event" data-v-52812ce7><div class="memo-event-slider" data-v-52812ce7>`);
      _push(ssrRenderComponent(unref(Swiper), {
        class: "slider-item",
        speed: 600,
        autoplay: { delay: 3e3, disableOnInteraction: false },
        loop: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="item-overflow" data-v-52812ce7${_scopeId2}><i class="icon-notice" data-v-52812ce7${_scopeId2}></i><button type="button" class="btn-link" data-v-52812ce7${_scopeId2}> 매장에서 설정한 문구 출력 영역 한줄만 처리 매장에서 설정한 문구 출력 영역 한줄만 처리 </button></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item-overflow" }, [
                      createVNode("i", { class: "icon-notice" }),
                      createVNode("button", {
                        type: "button",
                        class: "btn-link"
                      }, " 매장에서 설정한 문구 출력 영역 한줄만 처리 매장에서 설정한 문구 출력 영역 한줄만 처리 ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="item-overflow" data-v-52812ce7${_scopeId2}><i class="icon-notice" data-v-52812ce7${_scopeId2}></i><button type="button" class="btn-link" data-v-52812ce7${_scopeId2}> 제목 노출 </button></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item-overflow" }, [
                      createVNode("i", { class: "icon-notice" }),
                      createVNode("button", {
                        type: "button",
                        class: "btn-link"
                      }, " 제목 노출 ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "item-overflow" }, [
                    createVNode("i", { class: "icon-notice" }),
                    createVNode("button", {
                      type: "button",
                      class: "btn-link"
                    }, " 매장에서 설정한 문구 출력 영역 한줄만 처리 매장에서 설정한 문구 출력 영역 한줄만 처리 ")
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "item-overflow" }, [
                    createVNode("i", { class: "icon-notice" }),
                    createVNode("button", {
                      type: "button",
                      class: "btn-link"
                    }, " 제목 노출 ")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="menu-list-section" data-v-52812ce7><ul class="menu-group-slide" data-v-52812ce7><li data-id="#grp_best3" data-v-52812ce7><a class="btn-smooth" href="#grp_best3" data-v-52812ce7>인기메뉴</a></li><li data-id="#grp_100" data-v-52812ce7><a class="btn-smooth" href="#grp_100" data-v-52812ce7>대표메뉴</a></li><li data-id="#grp_101" data-v-52812ce7><a class="btn-smooth" href="#grp_101" data-v-52812ce7>신메뉴</a></li><li data-id="#grp_102" data-v-52812ce7><a class="btn-smooth" href="#grp_102" data-v-52812ce7>추천메뉴</a></li><li data-id="#grp_103" data-v-52812ce7><a class="btn-smooth" href="#grp_103" data-v-52812ce7>콜드부르</a></li><li data-id="#grp_104" data-v-52812ce7><a class="btn-smooth" href="#grp_104" data-v-52812ce7>홀케이크</a></li><li data-id="#grp_105" data-v-52812ce7><a class="btn-smooth" href="#grp_105" data-v-52812ce7>티</a></li></ul><div class="menu-group-slide-fixed-fake-area" data-v-52812ce7></div><ul class="menu-group-list" data-v-52812ce7><li class="li-best3" data-v-52812ce7><div id="grp_best3" class="best3-menu" data-v-52812ce7><p class="grp-title" data-v-52812ce7>인기메뉴</p><ul class="best-goods-list" data-v-52812ce7><li data-v-52812ce7>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-52812ce7${_scopeId}><span class="name" data-v-52812ce7${_scopeId}>아이스 디카페인 카페라떼</span><span class="price" data-v-52812ce7${_scopeId}><em data-v-52812ce7${_scopeId}>12,000</em>원</span><div class="sale-value" data-v-52812ce7${_scopeId}><span data-v-52812ce7${_scopeId}>월 평균 판매량</span><span data-v-52812ce7${_scopeId}> 126개 </span></div></div><div class="position-relative" data-v-52812ce7${_scopeId}><div class="img-wrap col-auto img-ratio-menu-list" data-v-52812ce7${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-52812ce7${_scopeId}></div><i class="icon_best_30" data-v-52812ce7${_scopeId}></i></div>`);
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
      _push(`</li><li data-v-52812ce7>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-52812ce7${_scopeId}><span class="name" data-v-52812ce7${_scopeId}>블루베리 쿠키 치즈 케이크</span><span class="price" data-v-52812ce7${_scopeId}><em data-v-52812ce7${_scopeId}>12,000</em>원</span><div class="sale-value" data-v-52812ce7${_scopeId}><span data-v-52812ce7${_scopeId}>월 평균 판매량</span><span data-v-52812ce7${_scopeId}> 100개 </span></div></div><div class="position-relative" data-v-52812ce7${_scopeId}><div class="img-wrap img-ratio-menu-list" data-v-52812ce7${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-52812ce7${_scopeId}></div><i class="icon_best_30" data-v-52812ce7${_scopeId}></i></div>`);
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
      _push(`</li></ul></div></li><li id="grp_100" class="" data-v-52812ce7><button class="btn-grp-title" data-v-52812ce7> 대표메뉴 <i class="icon_arrow" data-v-52812ce7></i></button><ul class="goods-list" data-v-52812ce7><li data-v-52812ce7>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-52812ce7${_scopeId}><div class="badges" data-v-52812ce7${_scopeId}><span class="badge" data-v-52812ce7${_scopeId}>인기</span><span class="badge" data-v-52812ce7${_scopeId}>재주문 많음</span></div><span class="name" data-v-52812ce7${_scopeId}>블루베리 쿠키 치즈 케이크</span><span class="desc" data-v-52812ce7${_scopeId}> 고소한 쿠키와 크림치즈를 듬뿍 넣어 만든 케이크 위에 달콤 상큼한 블루베리가 올라가 있는 치즈 케이크 메뉴 설명 입력 최대 두줄입력 두줄까지 입력 </span><span class="price" data-v-52812ce7${_scopeId}><em data-v-52812ce7${_scopeId}>12,000</em>원 </span></div><div class="img-wrap ratio" data-v-52812ce7${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-52812ce7${_scopeId}></div>`);
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
      _push(`</li><li data-v-52812ce7>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-52812ce7${_scopeId}><span class="name" data-v-52812ce7${_scopeId}>아이스 디카페인 카페라떼</span><span class="desc" data-v-52812ce7${_scopeId}>메뉴 설명 입력 최대 두줄입력 두줄까지 입력 </span><span class="price" data-v-52812ce7${_scopeId}><em data-v-52812ce7${_scopeId}>6,000</em>원 </span></div><div class="img-wrap ratio" data-v-52812ce7${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-52812ce7${_scopeId}></div>`);
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
      _push(`</li><li data-v-52812ce7>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-52812ce7${_scopeId}><div class="badges" data-v-52812ce7${_scopeId}><span class="badge" data-v-52812ce7${_scopeId}>인기</span><span class="badge" data-v-52812ce7${_scopeId}>재주문 많음</span></div><span class="name" data-v-52812ce7${_scopeId}>스페셜 햄 치즈 토스트</span><span class="price" data-v-52812ce7${_scopeId}><em data-v-52812ce7${_scopeId}>18,800</em>원 </span></div><div class="img-wrap ratio" data-v-52812ce7${_scopeId}><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-52812ce7${_scopeId}></div>`);
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
      _push(`</li></ul></li><li id="grp_101" class="" data-v-52812ce7><button class="btn-grp-title" data-v-52812ce7> 신메뉴<i class="icon_arrow" data-v-52812ce7></i></button><ul class="goods-list" data-v-52812ce7><li data-v-52812ce7>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-52812ce7${_scopeId}><span class="name" data-v-52812ce7${_scopeId}>블루베리 쿠키 치즈 케이크</span><span class="desc" data-v-52812ce7${_scopeId}> 고소한 쿠키와 크림치즈를 듬뿍 넣어 만든 케이크 위에 달콤 상큼한 블루베리가 올라가 있는 치즈 케이크 메뉴 설명 입력 최대 두줄입력 두줄까지 입력 </span><span class="price" data-v-52812ce7${_scopeId}><em data-v-52812ce7${_scopeId}>12,000</em>원 </span></div>`);
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
      _push(`</li><li data-v-52812ce7>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-52812ce7${_scopeId}><span class="name" data-v-52812ce7${_scopeId}>아이스 디카페인 카페라떼</span><span class="price" data-v-52812ce7${_scopeId}><em data-v-52812ce7${_scopeId}>6,000</em>원 </span></div>`);
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
      _push(`</li><li data-v-52812ce7>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-52812ce7${_scopeId}><span class="name" data-v-52812ce7${_scopeId}>스페셜 햄 치즈 토스트</span><span class="price" data-v-52812ce7${_scopeId}><em data-v-52812ce7${_scopeId}>18,800</em>원 </span></div>`);
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
      _push(`</li></ul></li><li id="grp_102" class="" data-v-52812ce7><button class="btn-grp-title" data-v-52812ce7> 추천메뉴<i class="icon_arrow" data-v-52812ce7></i></button><ul class="goods-list" data-v-52812ce7><li data-v-52812ce7>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-52812ce7${_scopeId}><span class="name" data-v-52812ce7${_scopeId}>블루베리 쿠키 치즈 케이크</span><span class="desc" data-v-52812ce7${_scopeId}> 고소한 쿠키와 크림치즈를 듬뿍 넣어 만든 케이크 위에 달콤 상큼한 블루베리가 올라가 있는 치즈 케이크 메뉴 설명 입력 최대 두줄입력 두줄까지 입력 </span><span class="price" data-v-52812ce7${_scopeId}><em data-v-52812ce7${_scopeId}>12,000</em>원 </span></div>`);
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
      _push(`</li><li data-v-52812ce7>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-52812ce7${_scopeId}><span class="name" data-v-52812ce7${_scopeId}>아이스 디카페인 카페라떼</span><span class="price" data-v-52812ce7${_scopeId}><em data-v-52812ce7${_scopeId}>6,000</em>원 </span></div>`);
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
      _push(`</li><li data-v-52812ce7>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-52812ce7${_scopeId}><span class="name" data-v-52812ce7${_scopeId}>스페셜 햄 치즈 토스트</span><span class="price" data-v-52812ce7${_scopeId}><em data-v-52812ce7${_scopeId}>18,800</em>원 </span></div>`);
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
      _push(`</li></ul></li><li id="grp_103" class="hidden" data-v-52812ce7><button class="btn-grp-title" data-v-52812ce7> 콜드부르<i class="icon_arrow" data-v-52812ce7></i></button><ul class="goods-list" data-v-52812ce7><li data-v-52812ce7>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-52812ce7${_scopeId}><span class="name" data-v-52812ce7${_scopeId}>블루베리 쿠키 치즈 케이크</span><span class="desc" data-v-52812ce7${_scopeId}> 고소한 쿠키와 크림치즈를 듬뿍 넣어 만든 케이크 위에 달콤 상큼한 블루베리가 올라가 있는 치즈 케이크 메뉴 설명 입력 최대 두줄입력 두줄까지 입력 </span><span class="price" data-v-52812ce7${_scopeId}><em data-v-52812ce7${_scopeId}>12,000</em>원 </span></div>`);
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
      _push(`</li><li data-v-52812ce7>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-52812ce7${_scopeId}><span class="name" data-v-52812ce7${_scopeId}>아이스 디카페인 카페라떼</span><span class="price" data-v-52812ce7${_scopeId}><em data-v-52812ce7${_scopeId}>6,000</em>원 </span></div>`);
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
      _push(`</li><li data-v-52812ce7>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-52812ce7${_scopeId}><span class="name" data-v-52812ce7${_scopeId}>스페셜 햄 치즈 토스트</span><span class="price" data-v-52812ce7${_scopeId}><em data-v-52812ce7${_scopeId}>18,800</em>원 </span></div>`);
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
      _push(`</li></ul></li><li id="grp_104" class="hidden" data-v-52812ce7><button class="btn-grp-title" data-v-52812ce7> 홀케이크<i class="icon_arrow" data-v-52812ce7></i></button><ul class="goods-list" data-v-52812ce7><li data-v-52812ce7>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-52812ce7${_scopeId}><span class="name" data-v-52812ce7${_scopeId}>블루베리 쿠키 치즈 케이크</span><span class="desc" data-v-52812ce7${_scopeId}> 고소한 쿠키와 크림치즈를 듬뿍 넣어 만든 케이크 위에 달콤 상큼한 블루베리가 올라가 있는 치즈 케이크 메뉴 설명 입력 최대 두줄입력 두줄까지 입력 </span><span class="price" data-v-52812ce7${_scopeId}><em data-v-52812ce7${_scopeId}>12,000</em>원 </span></div>`);
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
      _push(`</li></ul></li><li id="grp_105" class="hidden" data-v-52812ce7><button class="btn-grp-title" data-v-52812ce7> 티<i class="icon_arrow" data-v-52812ce7></i></button><ul class="goods-list" data-v-52812ce7><li data-v-52812ce7>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-52812ce7${_scopeId}><span class="name" data-v-52812ce7${_scopeId}>카모마일 티</span><span class="desc" data-v-52812ce7${_scopeId}> 숙면에 좋은 티 </span><span class="price" data-v-52812ce7${_scopeId}><em data-v-52812ce7${_scopeId}>6,000</em>원 </span></div>`);
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
      _push(`</li><li data-v-52812ce7>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-52812ce7${_scopeId}><span class="name" data-v-52812ce7${_scopeId}>페퍼민트 티</span><span class="price" data-v-52812ce7${_scopeId}><em data-v-52812ce7${_scopeId}>6,000</em>원 </span></div>`);
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
      _push(`</li><li data-v-52812ce7>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-52812ce7${_scopeId}><span class="name" data-v-52812ce7${_scopeId}>페퍼민트 티</span><span class="price" data-v-52812ce7${_scopeId}><em data-v-52812ce7${_scopeId}>6,000</em>원 </span></div>`);
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
      _push(`</li></ul></li></ul></section><div class="btn-wrap-fixed" data-v-52812ce7><div class="btn-row" data-v-52812ce7><button class="btn-cart-link" data-v-52812ce7> 장바구니 <span class="count" data-v-52812ce7>0</span></button><button class="btn-order-link" data-v-52812ce7>35,000원 주문하기 </button></div></div></main></div>`);
      if (isStoreInfo.value) {
        _push(ssrRenderComponent(modalStoreInfo, { onClose: closeStoreInfo }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (isStoreInfo.value) {
        _push(ssrRenderComponent(Backdrop, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (isMemo.value) {
        _push(ssrRenderComponent(modalMemo, { onClose: closeMemo }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pb/order/store-info.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const storeInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-52812ce7"]]);
export {
  storeInfo as default
};
//# sourceMappingURL=store-info-BMtW2B3x.js.map
