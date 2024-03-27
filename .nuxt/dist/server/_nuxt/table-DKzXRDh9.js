import { defineComponent, ref, resolveComponent, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0, a as _imports_2, b as _imports_3 } from "./img_smaple_01_2x-Ot9khhfV.js";
import { _ as _imports_1 } from "./img_smaple_03_2x-Bxcdrywo.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay } from "swiper";
import modalStoreInfo from "./modal-store-info-CXbmSRe4.js";
import modalMemo from "./modal-notice-sxuJyCk-.js";
import Backdrop from "./Backdrop-U1gvmcf5.js";
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
  __name: "table",
  __ssrInlineRender: true,
  setup(__props) {
    SwiperCore.use([Autoplay]);
    const isBusinessTime = ref(false);
    const isStoreInfo = ref(false);
    const isMemo = ref(false);
    const closeBusinessTime = () => {
      isBusinessTime.value = false;
      const app = (void 0).querySelector("#__nuxt");
      app == null ? void 0 : app.classList.remove("modal-open-overflow");
    };
    const closeStoreInfo = () => {
      isStoreInfo.value = false;
      const app = (void 0).querySelector("#__nuxt");
      app == null ? void 0 : app.classList.remove("modal-open-fixed");
    };
    const closeMemo = () => {
      isMemo.value = false;
    };
    ref(0);
    ref(0);
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_BusinessTime = resolveComponent("BusinessTime");
      _push(`<!--[--><div class="layout1" data-v-92896c87><header class="header-main" data-v-92896c87><div class="header-row" data-v-92896c87><h1 class="store-name" data-v-92896c87> 스토어 이름 <i class="i-store-info" data-v-92896c87></i></h1></div></header><main class="order-page order-main" data-v-92896c87><section class="order-dashboard" data-v-92896c87><div class="table-info" data-v-92896c87><dl class="table-No" data-v-92896c87><dt data-v-92896c87>테이블 번호</dt><dd data-v-92896c87>2</dd></dl></div></section><section class="store-notice-event" data-v-92896c87><div class="memo-event-slider" data-v-92896c87>`);
      _push(ssrRenderComponent(unref(Swiper), {
        class: "slider-item",
        speed: 700,
        autoplay: { delay: 4e3, disableOnInteraction: false },
        loop: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="item-overflow" data-v-92896c87${_scopeId2}><i class="icon-notice" data-v-92896c87${_scopeId2}></i><button type="button" class="btn-link" data-v-92896c87${_scopeId2}> 매장에서 설정한 문구 출력 영역 한줄만 처리 매장에서 설정한 문구 출력 영역 한줄만 처리 </button></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item-overflow" }, [
                      createVNode("i", { class: "icon-notice" }),
                      createVNode("button", {
                        type: "button",
                        class: "btn-link",
                        onClick: ($event) => isMemo.value = true
                      }, " 매장에서 설정한 문구 출력 영역 한줄만 처리 매장에서 설정한 문구 출력 영역 한줄만 처리 ", 8, ["onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="item-overflow" data-v-92896c87${_scopeId2}><i class="icon-notice" data-v-92896c87${_scopeId2}></i><button type="button" class="btn-link" data-v-92896c87${_scopeId2}> 제목 노출 </button></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item-overflow" }, [
                      createVNode("i", { class: "icon-notice" }),
                      createVNode("button", {
                        type: "button",
                        class: "btn-link",
                        onClick: ($event) => isMemo.value = true
                      }, " 제목 노출 ", 8, ["onClick"])
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
                      class: "btn-link",
                      onClick: ($event) => isMemo.value = true
                    }, " 매장에서 설정한 문구 출력 영역 한줄만 처리 매장에서 설정한 문구 출력 영역 한줄만 처리 ", 8, ["onClick"])
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
                      class: "btn-link",
                      onClick: ($event) => isMemo.value = true
                    }, " 제목 노출 ", 8, ["onClick"])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="menu-list-section" data-v-92896c87><ul class="menu-group-slide" data-v-92896c87><li data-id="#grp_best3" data-v-92896c87><a class="btn-smooth" href="#grp_best3" data-v-92896c87>인기메뉴</a></li><li data-id="#grp_100" data-v-92896c87><a class="btn-smooth" href="#grp_100" data-v-92896c87>대표메뉴</a></li><li data-id="#grp_101" data-v-92896c87><a class="btn-smooth" href="#grp_101" data-v-92896c87>신메뉴</a></li><li data-id="#grp_102" data-v-92896c87><a class="btn-smooth" href="#grp_102" data-v-92896c87>추천메뉴</a></li><li data-id="#grp_103" data-v-92896c87><a class="btn-smooth" href="#grp_103" data-v-92896c87>콜드부르</a></li><li data-id="#grp_104" data-v-92896c87><a class="btn-smooth" href="#grp_104" data-v-92896c87>홀케이크</a></li><li data-id="#grp_105" data-v-92896c87><a class="btn-smooth" href="#grp_105" data-v-92896c87>티</a></li></ul><div class="menu-group-slide-fixed-fake-area" data-v-92896c87></div><ul class="menu-group-list" data-v-92896c87><li class="li-best3" data-v-92896c87><div id="grp_best3" class="best3-menu" data-v-92896c87><p class="grp-title" data-v-92896c87>인기메뉴</p><ul class="best-goods-list" data-v-92896c87><li data-v-92896c87>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-92896c87${_scopeId}><span class="name" data-v-92896c87${_scopeId}>아이스 디카페인 카페라떼</span><span class="price" data-v-92896c87${_scopeId}><em data-v-92896c87${_scopeId}>12,000</em>원</span><div class="sale-value" data-v-92896c87${_scopeId}><span data-v-92896c87${_scopeId}>월 평균 판매량</span><span data-v-92896c87${_scopeId}> 126개 </span></div></div><div class="position-relative" data-v-92896c87${_scopeId}><div class="img-wrap col-auto img-ratio-menu-list" data-v-92896c87${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-92896c87${_scopeId}></div><i class="icon_best_30" data-v-92896c87${_scopeId}></i></div>`);
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
      _push(`</li><li data-v-92896c87>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-92896c87${_scopeId}><span class="name" data-v-92896c87${_scopeId}>블루베리 쿠키 치즈 케이크</span><span class="price" data-v-92896c87${_scopeId}><em data-v-92896c87${_scopeId}>12,000</em>원</span><div class="sale-value" data-v-92896c87${_scopeId}><span data-v-92896c87${_scopeId}>월 평균 판매량</span><span data-v-92896c87${_scopeId}> 100개 </span></div></div><div class="position-relative" data-v-92896c87${_scopeId}><div class="img-wrap img-ratio-menu-list" data-v-92896c87${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-92896c87${_scopeId}></div><i class="icon_best_30" data-v-92896c87${_scopeId}></i></div>`);
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
      _push(`</li></ul></div></li><li id="grp_100" class="" data-v-92896c87><button class="btn-grp-title" data-v-92896c87> 대표메뉴 <i class="icon_arrow" data-v-92896c87></i></button><ul class="goods-list" data-v-92896c87><li data-v-92896c87>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-92896c87${_scopeId}><div class="badges" data-v-92896c87${_scopeId}></div><span class="name" data-v-92896c87${_scopeId}>블루베리 쿠키 치즈 케이크</span><span class="desc" data-v-92896c87${_scopeId}> 고소한 쿠키와 크림치즈를 듬뿍 넣어 만든 케이크 위에 달콤 상큼한 블루베리가 올라가 있는 치즈 케이크 메뉴 설명 입력 최대 두줄입력 두줄까지 입력 </span><span class="price" data-v-92896c87${_scopeId}><em data-v-92896c87${_scopeId}>12,000</em>원 </span></div><div class="img-wrap ratio" data-v-92896c87${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-92896c87${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("div", { class: "badges" }),
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
      _push(`</li><li data-v-92896c87>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-92896c87${_scopeId}><span class="name" data-v-92896c87${_scopeId}>아이스 디카페인 카페라떼</span><span class="desc" data-v-92896c87${_scopeId}>메뉴 설명 입력 최대 두줄입력 두줄까지 입력 </span><span class="price" data-v-92896c87${_scopeId}><em data-v-92896c87${_scopeId}>6,000</em>원 </span></div><div class="img-wrap ratio" data-v-92896c87${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-92896c87${_scopeId}></div>`);
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
      _push(`</li><li data-v-92896c87>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-92896c87${_scopeId}><div class="badges" data-v-92896c87${_scopeId}></div><span class="name" data-v-92896c87${_scopeId}>스페셜 햄 치즈 토스트</span><span class="price" data-v-92896c87${_scopeId}><em data-v-92896c87${_scopeId}>18,800</em>원 </span></div><div class="img-wrap ratio" data-v-92896c87${_scopeId}><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-92896c87${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("div", { class: "badges" }),
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
      _push(`</li></ul></li><li id="grp_101" class="" data-v-92896c87><button class="btn-grp-title" data-v-92896c87> 신메뉴<i class="icon_arrow" data-v-92896c87></i></button><ul class="goods-list" data-v-92896c87><li data-v-92896c87>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-92896c87${_scopeId}><span class="name" data-v-92896c87${_scopeId}>블루베리 쿠키 치즈 케이크</span><span class="desc" data-v-92896c87${_scopeId}> 고소한 쿠키와 크림치즈를 듬뿍 넣어 만든 케이크 위에 달콤 상큼한 블루베리가 올라가 있는 치즈 케이크 메뉴 설명 입력 최대 두줄입력 두줄까지 입력 </span><span class="price" data-v-92896c87${_scopeId}><em data-v-92896c87${_scopeId}>12,000</em>원 </span></div>`);
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
      _push(`</li><li data-v-92896c87>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-92896c87${_scopeId}><span class="name" data-v-92896c87${_scopeId}>아이스 디카페인 카페라떼</span><span class="price" data-v-92896c87${_scopeId}><em data-v-92896c87${_scopeId}>6,000</em>원 </span></div>`);
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
      _push(`</li><li data-v-92896c87>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-92896c87${_scopeId}><span class="name" data-v-92896c87${_scopeId}>스페셜 햄 치즈 토스트</span><span class="price" data-v-92896c87${_scopeId}><em data-v-92896c87${_scopeId}>18,800</em>원 </span></div>`);
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
      _push(`</li></ul></li><li id="grp_102" class="" data-v-92896c87><button class="btn-grp-title" data-v-92896c87> 추천메뉴<i class="icon_arrow" data-v-92896c87></i></button><ul class="goods-list" data-v-92896c87><li data-v-92896c87>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-92896c87${_scopeId}><span class="name" data-v-92896c87${_scopeId}>블루베리 쿠키 치즈 케이크</span><span class="desc" data-v-92896c87${_scopeId}> 고소한 쿠키와 크림치즈를 듬뿍 넣어 만든 케이크 위에 달콤 상큼한 블루베리가 올라가 있는 치즈 케이크 메뉴 설명 입력 최대 두줄입력 두줄까지 입력 </span><span class="price" data-v-92896c87${_scopeId}><em data-v-92896c87${_scopeId}>12,000</em>원 </span></div>`);
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
      _push(`</li><li data-v-92896c87>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-92896c87${_scopeId}><span class="name" data-v-92896c87${_scopeId}>아이스 디카페인 카페라떼</span><span class="price" data-v-92896c87${_scopeId}><em data-v-92896c87${_scopeId}>6,000</em>원 </span></div>`);
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
      _push(`</li><li data-v-92896c87>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-92896c87${_scopeId}><span class="name" data-v-92896c87${_scopeId}>스페셜 햄 치즈 토스트</span><span class="price" data-v-92896c87${_scopeId}><em data-v-92896c87${_scopeId}>18,800</em>원 </span></div>`);
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
      _push(`</li></ul></li><li id="grp_103" class="hidden" data-v-92896c87><button class="btn-grp-title" data-v-92896c87> 콜드부르<i class="icon_arrow" data-v-92896c87></i></button><ul class="goods-list" data-v-92896c87><li data-v-92896c87>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-92896c87${_scopeId}><span class="name" data-v-92896c87${_scopeId}>블루베리 쿠키 치즈 케이크</span><span class="desc" data-v-92896c87${_scopeId}> 고소한 쿠키와 크림치즈를 듬뿍 넣어 만든 케이크 위에 달콤 상큼한 블루베리가 올라가 있는 치즈 케이크 메뉴 설명 입력 최대 두줄입력 두줄까지 입력 </span><span class="price" data-v-92896c87${_scopeId}><em data-v-92896c87${_scopeId}>12,000</em>원 </span></div>`);
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
      _push(`</li><li data-v-92896c87>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-92896c87${_scopeId}><span class="name" data-v-92896c87${_scopeId}>아이스 디카페인 카페라떼</span><span class="price" data-v-92896c87${_scopeId}><em data-v-92896c87${_scopeId}>6,000</em>원 </span></div>`);
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
      _push(`</li><li data-v-92896c87>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-92896c87${_scopeId}><span class="name" data-v-92896c87${_scopeId}>스페셜 햄 치즈 토스트</span><span class="price" data-v-92896c87${_scopeId}><em data-v-92896c87${_scopeId}>18,800</em>원 </span></div>`);
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
      _push(`</li></ul></li><li id="grp_104" class="hidden" data-v-92896c87><button class="btn-grp-title" data-v-92896c87> 홀케이크<i class="icon_arrow" data-v-92896c87></i></button><ul class="goods-list" data-v-92896c87><li data-v-92896c87>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-92896c87${_scopeId}><span class="name" data-v-92896c87${_scopeId}>블루베리 쿠키 치즈 케이크</span><span class="desc" data-v-92896c87${_scopeId}> 고소한 쿠키와 크림치즈를 듬뿍 넣어 만든 케이크 위에 달콤 상큼한 블루베리가 올라가 있는 치즈 케이크 메뉴 설명 입력 최대 두줄입력 두줄까지 입력 </span><span class="price" data-v-92896c87${_scopeId}><em data-v-92896c87${_scopeId}>12,000</em>원 </span></div>`);
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
      _push(`</li></ul></li><li id="grp_105" class="hidden" data-v-92896c87><button class="btn-grp-title" data-v-92896c87> 티<i class="icon_arrow" data-v-92896c87></i></button><ul class="goods-list" data-v-92896c87><li data-v-92896c87>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-92896c87${_scopeId}><span class="name" data-v-92896c87${_scopeId}>카모마일 티</span><span class="desc" data-v-92896c87${_scopeId}> 숙면에 좋은 티 </span><span class="price" data-v-92896c87${_scopeId}><em data-v-92896c87${_scopeId}>6,000</em>원 </span></div>`);
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
      _push(`</li><li data-v-92896c87>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-92896c87${_scopeId}><span class="name" data-v-92896c87${_scopeId}>페퍼민트 티</span><span class="price" data-v-92896c87${_scopeId}><em data-v-92896c87${_scopeId}>6,000</em>원 </span></div>`);
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
      _push(`</li><li data-v-92896c87>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-92896c87${_scopeId}><span class="name" data-v-92896c87${_scopeId}>페퍼민트 티</span><span class="price" data-v-92896c87${_scopeId}><em data-v-92896c87${_scopeId}>6,000</em>원 </span></div>`);
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
      _push(`</li></ul></li></ul></section><div class="btn-wrap-fixed" data-v-92896c87><div class="btn-row" data-v-92896c87><button class="btn-cart-link" data-v-92896c87> 장바구니 <span class="count" data-v-92896c87>0</span></button><button class="btn-order-link" data-v-92896c87>35,000원 주문하기 </button></div></div></main></div>`);
      if (isBusinessTime.value) {
        _push(ssrRenderComponent(_component_BusinessTime, { onClose: closeBusinessTime }, null, _parent));
      } else {
        _push(`<!---->`);
      }
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pb/order/table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const table = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-92896c87"]]);
export {
  table as default
};
//# sourceMappingURL=table-DKzXRDh9.js.map
