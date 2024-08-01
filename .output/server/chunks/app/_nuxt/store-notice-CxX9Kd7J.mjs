import { useSSRContext, defineComponent, ref, resolveComponent, unref, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_2, b as _imports_3 } from './img_smaple_01_2x-Ot9khhfV.mjs';
import { _ as _imports_1 } from './img_smaple_03_2x-Bxcdrywo.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Autoplay } from 'swiper';
import modalStoreInfo from './modal-store-info-BH2NkX__.mjs';
import modalMemo from './modal-notice-sxuJyCk-.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '../server.mjs';
import 'vue-router';
import 'pinia-plugin-persistedstate';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "store-notice",
  __ssrInlineRender: true,
  setup(__props) {
    SwiperCore.use([Autoplay]);
    const isStoreInfo = ref(false);
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
      _push(`<!--[--><div class="layout1" data-v-4f0caf57><header class="header-main" data-v-4f0caf57><div class="header-row" data-v-4f0caf57><h1 class="store-name" data-v-4f0caf57> \uC2A4\uD1A0\uC5B4 \uC774\uB984 <i class="i-store-info" data-v-4f0caf57></i></h1></div></header><main class="order-page" data-v-4f0caf57><section class="order-dashboard" data-v-4f0caf57><div class="table-info" data-v-4f0caf57><dl class="table-No" data-v-4f0caf57><dt data-v-4f0caf57>\uD14C\uC774\uBE14 \uBC88\uD638</dt><dd data-v-4f0caf57>2</dd></dl></div></section><section class="store-notice-event" data-v-4f0caf57><div class="memo-event-slider" data-v-4f0caf57>`);
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
                  _push3(`<div class="item-overflow" data-v-4f0caf57${_scopeId2}><i class="icon-notice" data-v-4f0caf57${_scopeId2}></i><button type="button" class="btn-link" data-v-4f0caf57${_scopeId2}> \uB9E4\uC7A5\uC5D0\uC11C \uC124\uC815\uD55C \uBB38\uAD6C \uCD9C\uB825 \uC601\uC5ED \uD55C\uC904\uB9CC \uCC98\uB9AC \uB9E4\uC7A5\uC5D0\uC11C \uC124\uC815\uD55C \uBB38\uAD6C \uCD9C\uB825 \uC601\uC5ED \uD55C\uC904\uB9CC \uCC98\uB9AC </button></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item-overflow" }, [
                      createVNode("i", { class: "icon-notice" }),
                      createVNode("button", {
                        type: "button",
                        class: "btn-link"
                      }, " \uB9E4\uC7A5\uC5D0\uC11C \uC124\uC815\uD55C \uBB38\uAD6C \uCD9C\uB825 \uC601\uC5ED \uD55C\uC904\uB9CC \uCC98\uB9AC \uB9E4\uC7A5\uC5D0\uC11C \uC124\uC815\uD55C \uBB38\uAD6C \uCD9C\uB825 \uC601\uC5ED \uD55C\uC904\uB9CC \uCC98\uB9AC ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="item-overflow" data-v-4f0caf57${_scopeId2}><i class="icon-notice" data-v-4f0caf57${_scopeId2}></i><button type="button" class="btn-link" data-v-4f0caf57${_scopeId2}> \uC81C\uBAA9 \uB178\uCD9C </button></div>`);
                } else {
                  return [
                    createVNode("div", { class: "item-overflow" }, [
                      createVNode("i", { class: "icon-notice" }),
                      createVNode("button", {
                        type: "button",
                        class: "btn-link"
                      }, " \uC81C\uBAA9 \uB178\uCD9C ")
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
                    }, " \uB9E4\uC7A5\uC5D0\uC11C \uC124\uC815\uD55C \uBB38\uAD6C \uCD9C\uB825 \uC601\uC5ED \uD55C\uC904\uB9CC \uCC98\uB9AC \uB9E4\uC7A5\uC5D0\uC11C \uC124\uC815\uD55C \uBB38\uAD6C \uCD9C\uB825 \uC601\uC5ED \uD55C\uC904\uB9CC \uCC98\uB9AC ")
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
                    }, " \uC81C\uBAA9 \uB178\uCD9C ")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="menu-list-section" data-v-4f0caf57><ul class="menu-group-slide" data-v-4f0caf57><li data-id="#grp_best3" data-v-4f0caf57><a class="btn-smooth" href="#grp_best3" data-v-4f0caf57>\uC778\uAE30\uBA54\uB274</a></li><li data-id="#grp_100" data-v-4f0caf57><a class="btn-smooth" href="#grp_100" data-v-4f0caf57>\uB300\uD45C\uBA54\uB274</a></li><li data-id="#grp_101" data-v-4f0caf57><a class="btn-smooth" href="#grp_101" data-v-4f0caf57>\uC2E0\uBA54\uB274</a></li><li data-id="#grp_102" data-v-4f0caf57><a class="btn-smooth" href="#grp_102" data-v-4f0caf57>\uCD94\uCC9C\uBA54\uB274</a></li><li data-id="#grp_103" data-v-4f0caf57><a class="btn-smooth" href="#grp_103" data-v-4f0caf57>\uCF5C\uB4DC\uBD80\uB974</a></li><li data-id="#grp_104" data-v-4f0caf57><a class="btn-smooth" href="#grp_104" data-v-4f0caf57>\uD640\uCF00\uC774\uD06C</a></li><li data-id="#grp_105" data-v-4f0caf57><a class="btn-smooth" href="#grp_105" data-v-4f0caf57>\uD2F0</a></li></ul><div class="menu-group-slide-fixed-fake-area" data-v-4f0caf57></div><ul class="menu-group-list" data-v-4f0caf57><li class="li-best3" data-v-4f0caf57><div id="grp_best3" class="best3-menu" data-v-4f0caf57><p class="grp-title" data-v-4f0caf57>\uC778\uAE30\uBA54\uB274</p><ul class="best-goods-list" data-v-4f0caf57><li data-v-4f0caf57>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-4f0caf57${_scopeId}><span class="name" data-v-4f0caf57${_scopeId}>\uC544\uC774\uC2A4 \uB514\uCE74\uD398\uC778 \uCE74\uD398\uB77C\uB5BC</span><span class="price" data-v-4f0caf57${_scopeId}><em data-v-4f0caf57${_scopeId}>12,000</em>\uC6D0</span><div class="sale-value" data-v-4f0caf57${_scopeId}><span data-v-4f0caf57${_scopeId}>\uC6D4 \uD3C9\uADE0 \uD310\uB9E4\uB7C9</span><span data-v-4f0caf57${_scopeId}> 126\uAC1C </span></div></div><div class="position-relative" data-v-4f0caf57${_scopeId}><div class="img-wrap col-auto img-ratio-menu-list" data-v-4f0caf57${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-4f0caf57${_scopeId}></div><i class="icon_best_30" data-v-4f0caf57${_scopeId}></i></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("span", { class: "name" }, "\uC544\uC774\uC2A4 \uB514\uCE74\uD398\uC778 \uCE74\uD398\uB77C\uB5BC"),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "12,000"),
                  createTextVNode("\uC6D0")
                ]),
                createVNode("div", { class: "sale-value" }, [
                  createVNode("span", null, "\uC6D4 \uD3C9\uADE0 \uD310\uB9E4\uB7C9"),
                  createVNode("span", null, " 126\uAC1C ")
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
      _push(`</li><li data-v-4f0caf57>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-4f0caf57${_scopeId}><span class="name" data-v-4f0caf57${_scopeId}>\uBE14\uB8E8\uBCA0\uB9AC \uCFE0\uD0A4 \uCE58\uC988 \uCF00\uC774\uD06C</span><span class="price" data-v-4f0caf57${_scopeId}><em data-v-4f0caf57${_scopeId}>12,000</em>\uC6D0</span><div class="sale-value" data-v-4f0caf57${_scopeId}><span data-v-4f0caf57${_scopeId}>\uC6D4 \uD3C9\uADE0 \uD310\uB9E4\uB7C9</span><span data-v-4f0caf57${_scopeId}> 100\uAC1C </span></div></div><div class="position-relative" data-v-4f0caf57${_scopeId}><div class="img-wrap img-ratio-menu-list" data-v-4f0caf57${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-4f0caf57${_scopeId}></div><i class="icon_best_30" data-v-4f0caf57${_scopeId}></i></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("span", { class: "name" }, "\uBE14\uB8E8\uBCA0\uB9AC \uCFE0\uD0A4 \uCE58\uC988 \uCF00\uC774\uD06C"),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "12,000"),
                  createTextVNode("\uC6D0")
                ]),
                createVNode("div", { class: "sale-value" }, [
                  createVNode("span", null, "\uC6D4 \uD3C9\uADE0 \uD310\uB9E4\uB7C9"),
                  createVNode("span", null, " 100\uAC1C ")
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
      _push(`</li></ul></div></li><li id="grp_100" class="" data-v-4f0caf57><button class="btn-grp-title" data-v-4f0caf57> \uB300\uD45C\uBA54\uB274 <i class="icon_arrow" data-v-4f0caf57></i></button><ul class="goods-list" data-v-4f0caf57><li data-v-4f0caf57>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-4f0caf57${_scopeId}><div class="badges" data-v-4f0caf57${_scopeId}><span class="badge" data-v-4f0caf57${_scopeId}>\uC778\uAE30</span><span class="badge" data-v-4f0caf57${_scopeId}>\uC7AC\uC8FC\uBB38 \uB9CE\uC74C</span></div><span class="name" data-v-4f0caf57${_scopeId}>\uBE14\uB8E8\uBCA0\uB9AC \uCFE0\uD0A4 \uCE58\uC988 \uCF00\uC774\uD06C</span><span class="desc" data-v-4f0caf57${_scopeId}> \uACE0\uC18C\uD55C \uCFE0\uD0A4\uC640 \uD06C\uB9BC\uCE58\uC988\uB97C \uB4EC\uBFCD \uB123\uC5B4 \uB9CC\uB4E0 \uCF00\uC774\uD06C \uC704\uC5D0 \uB2EC\uCF64 \uC0C1\uD07C\uD55C \uBE14\uB8E8\uBCA0\uB9AC\uAC00 \uC62C\uB77C\uAC00 \uC788\uB294 \uCE58\uC988 \uCF00\uC774\uD06C \uBA54\uB274 \uC124\uBA85 \uC785\uB825 \uCD5C\uB300 \uB450\uC904\uC785\uB825 \uB450\uC904\uAE4C\uC9C0 \uC785\uB825 </span><span class="price" data-v-4f0caf57${_scopeId}><em data-v-4f0caf57${_scopeId}>12,000</em>\uC6D0 </span></div><div class="img-wrap ratio" data-v-4f0caf57${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-4f0caf57${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("div", { class: "badges" }, [
                  createVNode("span", { class: "badge" }, "\uC778\uAE30"),
                  createVNode("span", { class: "badge" }, "\uC7AC\uC8FC\uBB38 \uB9CE\uC74C")
                ]),
                createVNode("span", { class: "name" }, "\uBE14\uB8E8\uBCA0\uB9AC \uCFE0\uD0A4 \uCE58\uC988 \uCF00\uC774\uD06C"),
                createVNode("span", { class: "desc" }, " \uACE0\uC18C\uD55C \uCFE0\uD0A4\uC640 \uD06C\uB9BC\uCE58\uC988\uB97C \uB4EC\uBFCD \uB123\uC5B4 \uB9CC\uB4E0 \uCF00\uC774\uD06C \uC704\uC5D0 \uB2EC\uCF64 \uC0C1\uD07C\uD55C \uBE14\uB8E8\uBCA0\uB9AC\uAC00 \uC62C\uB77C\uAC00 \uC788\uB294 \uCE58\uC988 \uCF00\uC774\uD06C \uBA54\uB274 \uC124\uBA85 \uC785\uB825 \uCD5C\uB300 \uB450\uC904\uC785\uB825 \uB450\uC904\uAE4C\uC9C0 \uC785\uB825 "),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "12,000"),
                  createTextVNode("\uC6D0 ")
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
      _push(`</li><li data-v-4f0caf57>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-4f0caf57${_scopeId}><span class="name" data-v-4f0caf57${_scopeId}>\uC544\uC774\uC2A4 \uB514\uCE74\uD398\uC778 \uCE74\uD398\uB77C\uB5BC</span><span class="desc" data-v-4f0caf57${_scopeId}>\uBA54\uB274 \uC124\uBA85 \uC785\uB825 \uCD5C\uB300 \uB450\uC904\uC785\uB825 \uB450\uC904\uAE4C\uC9C0 \uC785\uB825 </span><span class="price" data-v-4f0caf57${_scopeId}><em data-v-4f0caf57${_scopeId}>6,000</em>\uC6D0 </span></div><div class="img-wrap ratio" data-v-4f0caf57${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-4f0caf57${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("span", { class: "name" }, "\uC544\uC774\uC2A4 \uB514\uCE74\uD398\uC778 \uCE74\uD398\uB77C\uB5BC"),
                createVNode("span", { class: "desc" }, "\uBA54\uB274 \uC124\uBA85 \uC785\uB825 \uCD5C\uB300 \uB450\uC904\uC785\uB825 \uB450\uC904\uAE4C\uC9C0 \uC785\uB825 "),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "6,000"),
                  createTextVNode("\uC6D0 ")
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
      _push(`</li><li data-v-4f0caf57>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-4f0caf57${_scopeId}><div class="badges" data-v-4f0caf57${_scopeId}><span class="badge" data-v-4f0caf57${_scopeId}>\uC778\uAE30</span><span class="badge" data-v-4f0caf57${_scopeId}>\uC7AC\uC8FC\uBB38 \uB9CE\uC74C</span></div><span class="name" data-v-4f0caf57${_scopeId}>\uC2A4\uD398\uC15C \uD584 \uCE58\uC988 \uD1A0\uC2A4\uD2B8</span><span class="price" data-v-4f0caf57${_scopeId}><em data-v-4f0caf57${_scopeId}>18,800</em>\uC6D0 </span></div><div class="img-wrap ratio" data-v-4f0caf57${_scopeId}><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-4f0caf57${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("div", { class: "badges" }, [
                  createVNode("span", { class: "badge" }, "\uC778\uAE30"),
                  createVNode("span", { class: "badge" }, "\uC7AC\uC8FC\uBB38 \uB9CE\uC74C")
                ]),
                createVNode("span", { class: "name" }, "\uC2A4\uD398\uC15C \uD584 \uCE58\uC988 \uD1A0\uC2A4\uD2B8"),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "18,800"),
                  createTextVNode("\uC6D0 ")
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
      _push(`</li></ul></li><li id="grp_101" class="" data-v-4f0caf57><button class="btn-grp-title" data-v-4f0caf57> \uC2E0\uBA54\uB274<i class="icon_arrow" data-v-4f0caf57></i></button><ul class="goods-list" data-v-4f0caf57><li data-v-4f0caf57>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-4f0caf57${_scopeId}><span class="name" data-v-4f0caf57${_scopeId}>\uBE14\uB8E8\uBCA0\uB9AC \uCFE0\uD0A4 \uCE58\uC988 \uCF00\uC774\uD06C</span><span class="desc" data-v-4f0caf57${_scopeId}> \uACE0\uC18C\uD55C \uCFE0\uD0A4\uC640 \uD06C\uB9BC\uCE58\uC988\uB97C \uB4EC\uBFCD \uB123\uC5B4 \uB9CC\uB4E0 \uCF00\uC774\uD06C \uC704\uC5D0 \uB2EC\uCF64 \uC0C1\uD07C\uD55C \uBE14\uB8E8\uBCA0\uB9AC\uAC00 \uC62C\uB77C\uAC00 \uC788\uB294 \uCE58\uC988 \uCF00\uC774\uD06C \uBA54\uB274 \uC124\uBA85 \uC785\uB825 \uCD5C\uB300 \uB450\uC904\uC785\uB825 \uB450\uC904\uAE4C\uC9C0 \uC785\uB825 </span><span class="price" data-v-4f0caf57${_scopeId}><em data-v-4f0caf57${_scopeId}>12,000</em>\uC6D0 </span></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("span", { class: "name" }, "\uBE14\uB8E8\uBCA0\uB9AC \uCFE0\uD0A4 \uCE58\uC988 \uCF00\uC774\uD06C"),
                createVNode("span", { class: "desc" }, " \uACE0\uC18C\uD55C \uCFE0\uD0A4\uC640 \uD06C\uB9BC\uCE58\uC988\uB97C \uB4EC\uBFCD \uB123\uC5B4 \uB9CC\uB4E0 \uCF00\uC774\uD06C \uC704\uC5D0 \uB2EC\uCF64 \uC0C1\uD07C\uD55C \uBE14\uB8E8\uBCA0\uB9AC\uAC00 \uC62C\uB77C\uAC00 \uC788\uB294 \uCE58\uC988 \uCF00\uC774\uD06C \uBA54\uB274 \uC124\uBA85 \uC785\uB825 \uCD5C\uB300 \uB450\uC904\uC785\uB825 \uB450\uC904\uAE4C\uC9C0 \uC785\uB825 "),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "12,000"),
                  createTextVNode("\uC6D0 ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-4f0caf57>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-4f0caf57${_scopeId}><span class="name" data-v-4f0caf57${_scopeId}>\uC544\uC774\uC2A4 \uB514\uCE74\uD398\uC778 \uCE74\uD398\uB77C\uB5BC</span><span class="price" data-v-4f0caf57${_scopeId}><em data-v-4f0caf57${_scopeId}>6,000</em>\uC6D0 </span></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("span", { class: "name" }, "\uC544\uC774\uC2A4 \uB514\uCE74\uD398\uC778 \uCE74\uD398\uB77C\uB5BC"),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "6,000"),
                  createTextVNode("\uC6D0 ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-4f0caf57>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-4f0caf57${_scopeId}><span class="name" data-v-4f0caf57${_scopeId}>\uC2A4\uD398\uC15C \uD584 \uCE58\uC988 \uD1A0\uC2A4\uD2B8</span><span class="price" data-v-4f0caf57${_scopeId}><em data-v-4f0caf57${_scopeId}>18,800</em>\uC6D0 </span></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("span", { class: "name" }, "\uC2A4\uD398\uC15C \uD584 \uCE58\uC988 \uD1A0\uC2A4\uD2B8"),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "18,800"),
                  createTextVNode("\uC6D0 ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li id="grp_102" class="" data-v-4f0caf57><button class="btn-grp-title" data-v-4f0caf57> \uCD94\uCC9C\uBA54\uB274<i class="icon_arrow" data-v-4f0caf57></i></button><ul class="goods-list" data-v-4f0caf57><li data-v-4f0caf57>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-4f0caf57${_scopeId}><span class="name" data-v-4f0caf57${_scopeId}>\uBE14\uB8E8\uBCA0\uB9AC \uCFE0\uD0A4 \uCE58\uC988 \uCF00\uC774\uD06C</span><span class="desc" data-v-4f0caf57${_scopeId}> \uACE0\uC18C\uD55C \uCFE0\uD0A4\uC640 \uD06C\uB9BC\uCE58\uC988\uB97C \uB4EC\uBFCD \uB123\uC5B4 \uB9CC\uB4E0 \uCF00\uC774\uD06C \uC704\uC5D0 \uB2EC\uCF64 \uC0C1\uD07C\uD55C \uBE14\uB8E8\uBCA0\uB9AC\uAC00 \uC62C\uB77C\uAC00 \uC788\uB294 \uCE58\uC988 \uCF00\uC774\uD06C \uBA54\uB274 \uC124\uBA85 \uC785\uB825 \uCD5C\uB300 \uB450\uC904\uC785\uB825 \uB450\uC904\uAE4C\uC9C0 \uC785\uB825 </span><span class="price" data-v-4f0caf57${_scopeId}><em data-v-4f0caf57${_scopeId}>12,000</em>\uC6D0 </span></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("span", { class: "name" }, "\uBE14\uB8E8\uBCA0\uB9AC \uCFE0\uD0A4 \uCE58\uC988 \uCF00\uC774\uD06C"),
                createVNode("span", { class: "desc" }, " \uACE0\uC18C\uD55C \uCFE0\uD0A4\uC640 \uD06C\uB9BC\uCE58\uC988\uB97C \uB4EC\uBFCD \uB123\uC5B4 \uB9CC\uB4E0 \uCF00\uC774\uD06C \uC704\uC5D0 \uB2EC\uCF64 \uC0C1\uD07C\uD55C \uBE14\uB8E8\uBCA0\uB9AC\uAC00 \uC62C\uB77C\uAC00 \uC788\uB294 \uCE58\uC988 \uCF00\uC774\uD06C \uBA54\uB274 \uC124\uBA85 \uC785\uB825 \uCD5C\uB300 \uB450\uC904\uC785\uB825 \uB450\uC904\uAE4C\uC9C0 \uC785\uB825 "),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "12,000"),
                  createTextVNode("\uC6D0 ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-4f0caf57>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-4f0caf57${_scopeId}><span class="name" data-v-4f0caf57${_scopeId}>\uC544\uC774\uC2A4 \uB514\uCE74\uD398\uC778 \uCE74\uD398\uB77C\uB5BC</span><span class="price" data-v-4f0caf57${_scopeId}><em data-v-4f0caf57${_scopeId}>6,000</em>\uC6D0 </span></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("span", { class: "name" }, "\uC544\uC774\uC2A4 \uB514\uCE74\uD398\uC778 \uCE74\uD398\uB77C\uB5BC"),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "6,000"),
                  createTextVNode("\uC6D0 ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-4f0caf57>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-4f0caf57${_scopeId}><span class="name" data-v-4f0caf57${_scopeId}>\uC2A4\uD398\uC15C \uD584 \uCE58\uC988 \uD1A0\uC2A4\uD2B8</span><span class="price" data-v-4f0caf57${_scopeId}><em data-v-4f0caf57${_scopeId}>18,800</em>\uC6D0 </span></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("span", { class: "name" }, "\uC2A4\uD398\uC15C \uD584 \uCE58\uC988 \uD1A0\uC2A4\uD2B8"),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "18,800"),
                  createTextVNode("\uC6D0 ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li id="grp_103" class="hidden" data-v-4f0caf57><button class="btn-grp-title" data-v-4f0caf57> \uCF5C\uB4DC\uBD80\uB974<i class="icon_arrow" data-v-4f0caf57></i></button><ul class="goods-list" data-v-4f0caf57><li data-v-4f0caf57>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-4f0caf57${_scopeId}><span class="name" data-v-4f0caf57${_scopeId}>\uBE14\uB8E8\uBCA0\uB9AC \uCFE0\uD0A4 \uCE58\uC988 \uCF00\uC774\uD06C</span><span class="desc" data-v-4f0caf57${_scopeId}> \uACE0\uC18C\uD55C \uCFE0\uD0A4\uC640 \uD06C\uB9BC\uCE58\uC988\uB97C \uB4EC\uBFCD \uB123\uC5B4 \uB9CC\uB4E0 \uCF00\uC774\uD06C \uC704\uC5D0 \uB2EC\uCF64 \uC0C1\uD07C\uD55C \uBE14\uB8E8\uBCA0\uB9AC\uAC00 \uC62C\uB77C\uAC00 \uC788\uB294 \uCE58\uC988 \uCF00\uC774\uD06C \uBA54\uB274 \uC124\uBA85 \uC785\uB825 \uCD5C\uB300 \uB450\uC904\uC785\uB825 \uB450\uC904\uAE4C\uC9C0 \uC785\uB825 </span><span class="price" data-v-4f0caf57${_scopeId}><em data-v-4f0caf57${_scopeId}>12,000</em>\uC6D0 </span></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("span", { class: "name" }, "\uBE14\uB8E8\uBCA0\uB9AC \uCFE0\uD0A4 \uCE58\uC988 \uCF00\uC774\uD06C"),
                createVNode("span", { class: "desc" }, " \uACE0\uC18C\uD55C \uCFE0\uD0A4\uC640 \uD06C\uB9BC\uCE58\uC988\uB97C \uB4EC\uBFCD \uB123\uC5B4 \uB9CC\uB4E0 \uCF00\uC774\uD06C \uC704\uC5D0 \uB2EC\uCF64 \uC0C1\uD07C\uD55C \uBE14\uB8E8\uBCA0\uB9AC\uAC00 \uC62C\uB77C\uAC00 \uC788\uB294 \uCE58\uC988 \uCF00\uC774\uD06C \uBA54\uB274 \uC124\uBA85 \uC785\uB825 \uCD5C\uB300 \uB450\uC904\uC785\uB825 \uB450\uC904\uAE4C\uC9C0 \uC785\uB825 "),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "12,000"),
                  createTextVNode("\uC6D0 ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-4f0caf57>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-4f0caf57${_scopeId}><span class="name" data-v-4f0caf57${_scopeId}>\uC544\uC774\uC2A4 \uB514\uCE74\uD398\uC778 \uCE74\uD398\uB77C\uB5BC</span><span class="price" data-v-4f0caf57${_scopeId}><em data-v-4f0caf57${_scopeId}>6,000</em>\uC6D0 </span></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("span", { class: "name" }, "\uC544\uC774\uC2A4 \uB514\uCE74\uD398\uC778 \uCE74\uD398\uB77C\uB5BC"),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "6,000"),
                  createTextVNode("\uC6D0 ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-4f0caf57>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-4f0caf57${_scopeId}><span class="name" data-v-4f0caf57${_scopeId}>\uC2A4\uD398\uC15C \uD584 \uCE58\uC988 \uD1A0\uC2A4\uD2B8</span><span class="price" data-v-4f0caf57${_scopeId}><em data-v-4f0caf57${_scopeId}>18,800</em>\uC6D0 </span></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("span", { class: "name" }, "\uC2A4\uD398\uC15C \uD584 \uCE58\uC988 \uD1A0\uC2A4\uD2B8"),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "18,800"),
                  createTextVNode("\uC6D0 ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li id="grp_104" class="hidden" data-v-4f0caf57><button class="btn-grp-title" data-v-4f0caf57> \uD640\uCF00\uC774\uD06C<i class="icon_arrow" data-v-4f0caf57></i></button><ul class="goods-list" data-v-4f0caf57><li data-v-4f0caf57>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-4f0caf57${_scopeId}><span class="name" data-v-4f0caf57${_scopeId}>\uBE14\uB8E8\uBCA0\uB9AC \uCFE0\uD0A4 \uCE58\uC988 \uCF00\uC774\uD06C</span><span class="desc" data-v-4f0caf57${_scopeId}> \uACE0\uC18C\uD55C \uCFE0\uD0A4\uC640 \uD06C\uB9BC\uCE58\uC988\uB97C \uB4EC\uBFCD \uB123\uC5B4 \uB9CC\uB4E0 \uCF00\uC774\uD06C \uC704\uC5D0 \uB2EC\uCF64 \uC0C1\uD07C\uD55C \uBE14\uB8E8\uBCA0\uB9AC\uAC00 \uC62C\uB77C\uAC00 \uC788\uB294 \uCE58\uC988 \uCF00\uC774\uD06C \uBA54\uB274 \uC124\uBA85 \uC785\uB825 \uCD5C\uB300 \uB450\uC904\uC785\uB825 \uB450\uC904\uAE4C\uC9C0 \uC785\uB825 </span><span class="price" data-v-4f0caf57${_scopeId}><em data-v-4f0caf57${_scopeId}>12,000</em>\uC6D0 </span></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("span", { class: "name" }, "\uBE14\uB8E8\uBCA0\uB9AC \uCFE0\uD0A4 \uCE58\uC988 \uCF00\uC774\uD06C"),
                createVNode("span", { class: "desc" }, " \uACE0\uC18C\uD55C \uCFE0\uD0A4\uC640 \uD06C\uB9BC\uCE58\uC988\uB97C \uB4EC\uBFCD \uB123\uC5B4 \uB9CC\uB4E0 \uCF00\uC774\uD06C \uC704\uC5D0 \uB2EC\uCF64 \uC0C1\uD07C\uD55C \uBE14\uB8E8\uBCA0\uB9AC\uAC00 \uC62C\uB77C\uAC00 \uC788\uB294 \uCE58\uC988 \uCF00\uC774\uD06C \uBA54\uB274 \uC124\uBA85 \uC785\uB825 \uCD5C\uB300 \uB450\uC904\uC785\uB825 \uB450\uC904\uAE4C\uC9C0 \uC785\uB825 "),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "12,000"),
                  createTextVNode("\uC6D0 ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li id="grp_105" class="hidden" data-v-4f0caf57><button class="btn-grp-title" data-v-4f0caf57> \uD2F0<i class="icon_arrow" data-v-4f0caf57></i></button><ul class="goods-list" data-v-4f0caf57><li data-v-4f0caf57>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-4f0caf57${_scopeId}><span class="name" data-v-4f0caf57${_scopeId}>\uCE74\uBAA8\uB9C8\uC77C \uD2F0</span><span class="desc" data-v-4f0caf57${_scopeId}> \uC219\uBA74\uC5D0 \uC88B\uC740 \uD2F0 </span><span class="price" data-v-4f0caf57${_scopeId}><em data-v-4f0caf57${_scopeId}>6,000</em>\uC6D0 </span></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("span", { class: "name" }, "\uCE74\uBAA8\uB9C8\uC77C \uD2F0"),
                createVNode("span", { class: "desc" }, " \uC219\uBA74\uC5D0 \uC88B\uC740 \uD2F0 "),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "6,000"),
                  createTextVNode("\uC6D0 ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-4f0caf57>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-4f0caf57${_scopeId}><span class="name" data-v-4f0caf57${_scopeId}>\uD398\uD37C\uBBFC\uD2B8 \uD2F0</span><span class="price" data-v-4f0caf57${_scopeId}><em data-v-4f0caf57${_scopeId}>6,000</em>\uC6D0 </span></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("span", { class: "name" }, "\uD398\uD37C\uBBFC\uD2B8 \uD2F0"),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "6,000"),
                  createTextVNode("\uC6D0 ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-4f0caf57>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-4f0caf57${_scopeId}><span class="name" data-v-4f0caf57${_scopeId}>\uD398\uD37C\uBBFC\uD2B8 \uD2F0</span><span class="price" data-v-4f0caf57${_scopeId}><em data-v-4f0caf57${_scopeId}>6,000</em>\uC6D0 </span></div>`);
          } else {
            return [
              createVNode("div", { class: "info-wrap" }, [
                createVNode("span", { class: "name" }, "\uD398\uD37C\uBBFC\uD2B8 \uD2F0"),
                createVNode("span", { class: "price" }, [
                  createVNode("em", null, "6,000"),
                  createTextVNode("\uC6D0 ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li></ul></section><div class="btn-wrap-fixed" data-v-4f0caf57><div class="btn-row" data-v-4f0caf57><button class="btn-cart-link" data-v-4f0caf57> \uC7A5\uBC14\uAD6C\uB2C8 <span class="count" data-v-4f0caf57>0</span></button><button class="btn-order-link" data-v-4f0caf57>35,000\uC6D0 \uC8FC\uBB38\uD558\uAE30 </button></div></div></main></div>`);
      if (isStoreInfo.value) {
        _push(ssrRenderComponent(modalStoreInfo, { onClose: closeStoreInfo }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(modalMemo, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pb/order/store-notice.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const storeNotice = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4f0caf57"]]);

export { storeNotice as default };
//# sourceMappingURL=store-notice-CxX9Kd7J.mjs.map
