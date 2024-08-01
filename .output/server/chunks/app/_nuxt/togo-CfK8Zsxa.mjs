import { useSSRContext, defineComponent, ref, resolveComponent, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_2, b as _imports_3 } from './img_smaple_01_2x-Ot9khhfV.mjs';
import { _ as _imports_1 } from './img_smaple_03_2x-Bxcdrywo.mjs';
import { B as BusinessTime } from './BusinessTime-_96kgf26.mjs';
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
      _push(`<!--[--><div class="layout1" data-v-3b39e6eb><header class="header-main" data-v-3b39e6eb><div class="header-row" data-v-3b39e6eb><h1 class="store-name" data-v-3b39e6eb> \uC2A4\uD1A0\uC5B4 \uC774\uB984 </h1><button class="btn-user" title="\uB9C8\uC774\uD398\uC774\uC9C0 \uBC14\uB85C\uAC00\uAE30" data-v-3b39e6eb></button></div></header><main class="order-page" data-v-3b39e6eb><section class="order-dashboard" data-v-3b39e6eb><div class="togo-info" data-v-3b39e6eb><dl data-v-3b39e6eb><dt data-v-3b39e6eb><button class="btn-tooltip" data-v-3b39e6eb>\uD53D\uC5C5\uC2DC\uAC04 <i class="btn_tooltip_16" data-v-3b39e6eb></i></button></dt><dd data-v-3b39e6eb>55\uBD84 \uD6C4</dd></dl><dl class="store-address" data-v-3b39e6eb><dt data-v-3b39e6eb><a href="/pb/map" class="store-map-link" data-v-3b39e6eb>\uB9E4\uC7A5\uC704\uCE58</a><button class="btn-copy" data-v-3b39e6eb>\uC8FC\uC18C\uBCF5\uC0AC</button></dt><dd data-v-3b39e6eb><input type="text" readonly class="input-address" data-v-3b39e6eb><div class="front-address" data-v-3b39e6eb>\uC11C\uC6B8 \uAD6C\uB85C\uAD6C \uACBD\uC778\uB85C 661 (\uC2E0\uB3C4\uB9BC\uB3D9, \uC2E0\uB3C4\uB9BC1\uCC28\uD478\uB974\uC9C0\uC624)</div></dd></dl></div></section><section class="menu-list-section" data-v-3b39e6eb><ul class="menu-group-slide" data-v-3b39e6eb><li data-id="#grp_best3" data-v-3b39e6eb><a class="btn-smooth" href="#grp_best3" data-v-3b39e6eb>\uC778\uAE30\uBA54\uB274</a></li><li data-id="#grp_100" data-v-3b39e6eb><a class="btn-smooth" href="#grp_100" data-v-3b39e6eb>\uB300\uD45C\uBA54\uB274</a></li><li data-id="#grp_101" data-v-3b39e6eb><a class="btn-smooth" href="#grp_101" data-v-3b39e6eb>\uC2E0\uBA54\uB274</a></li><li data-id="#grp_102" data-v-3b39e6eb><a class="btn-smooth" href="#grp_102" data-v-3b39e6eb>\uCD94\uCC9C\uBA54\uB274</a></li><li data-id="#grp_103" data-v-3b39e6eb><a class="btn-smooth" href="#grp_103" data-v-3b39e6eb>\uCF5C\uB4DC\uBD80\uB974</a></li><li data-id="#grp_104" data-v-3b39e6eb><a class="btn-smooth" href="#grp_104" data-v-3b39e6eb>\uD640\uCF00\uC774\uD06C</a></li><li data-id="#grp_105" data-v-3b39e6eb><a class="btn-smooth" href="#grp_105" data-v-3b39e6eb>\uD2F0</a></li></ul><div class="menu-group-slide-fixed-fake-area" data-v-3b39e6eb></div><ul class="menu-group-list" data-v-3b39e6eb><li class="li-best3" data-v-3b39e6eb><div id="grp_best3" class="best3-menu" data-v-3b39e6eb><p class="grp-title" data-v-3b39e6eb>\uC778\uAE30\uBA54\uB274</p><ul class="best-goods-list" data-v-3b39e6eb><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><span class="name" data-v-3b39e6eb${_scopeId}>\uC544\uC774\uC2A4 \uB514\uCE74\uD398\uC778 \uCE74\uD398\uB77C\uB5BC</span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>12,000</em>\uC6D0</span><div class="sale-value" data-v-3b39e6eb${_scopeId}><span data-v-3b39e6eb${_scopeId}>\uC6D4 \uD3C9\uADE0 \uD310\uB9E4\uB7C9</span><span data-v-3b39e6eb${_scopeId}> 126\uAC1C </span></div></div><div class="position-relative" data-v-3b39e6eb${_scopeId}><div class="img-wrap col-auto img-ratio-menu-list" data-v-3b39e6eb${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-3b39e6eb${_scopeId}></div><i class="icon_best_30" data-v-3b39e6eb${_scopeId}></i></div>`);
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
      _push(`</li><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><span class="name" data-v-3b39e6eb${_scopeId}>\uBE14\uB8E8\uBCA0\uB9AC \uCFE0\uD0A4 \uCE58\uC988 \uCF00\uC774\uD06C</span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>12,000</em>\uC6D0</span><div class="sale-value" data-v-3b39e6eb${_scopeId}><span data-v-3b39e6eb${_scopeId}>\uC6D4 \uD3C9\uADE0 \uD310\uB9E4\uB7C9</span><span data-v-3b39e6eb${_scopeId}> 100\uAC1C </span></div></div><div class="position-relative" data-v-3b39e6eb${_scopeId}><div class="img-wrap img-ratio-menu-list" data-v-3b39e6eb${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-3b39e6eb${_scopeId}></div><i class="icon_best_30" data-v-3b39e6eb${_scopeId}></i></div>`);
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
      _push(`</li></ul></div></li><li id="grp_100" class="" data-v-3b39e6eb><button class="btn-grp-title" data-v-3b39e6eb> \uB300\uD45C\uBA54\uB274 <i class="icon_arrow" data-v-3b39e6eb></i></button><ul class="goods-list" data-v-3b39e6eb><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><div class="badges" data-v-3b39e6eb${_scopeId}><span class="badge" data-v-3b39e6eb${_scopeId}>\uC778\uAE30</span><span class="badge" data-v-3b39e6eb${_scopeId}>\uC7AC\uC8FC\uBB38 \uB9CE\uC74C</span></div><span class="name" data-v-3b39e6eb${_scopeId}>\uBE14\uB8E8\uBCA0\uB9AC \uCFE0\uD0A4 \uCE58\uC988 \uCF00\uC774\uD06C</span><span class="desc" data-v-3b39e6eb${_scopeId}> \uACE0\uC18C\uD55C \uCFE0\uD0A4\uC640 \uD06C\uB9BC\uCE58\uC988\uB97C \uB4EC\uBFCD \uB123\uC5B4 \uB9CC\uB4E0 \uCF00\uC774\uD06C \uC704\uC5D0 \uB2EC\uCF64 \uC0C1\uD07C\uD55C \uBE14\uB8E8\uBCA0\uB9AC\uAC00 \uC62C\uB77C\uAC00 \uC788\uB294 \uCE58\uC988 \uCF00\uC774\uD06C \uBA54\uB274 \uC124\uBA85 \uC785\uB825 \uCD5C\uB300 \uB450\uC904\uC785\uB825 \uB450\uC904\uAE4C\uC9C0 \uC785\uB825 </span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>12,000</em>\uC6D0 </span></div><div class="img-wrap ratio" data-v-3b39e6eb${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-3b39e6eb${_scopeId}></div>`);
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
      _push(`</li><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><span class="name" data-v-3b39e6eb${_scopeId}>\uC544\uC774\uC2A4 \uB514\uCE74\uD398\uC778 \uCE74\uD398\uB77C\uB5BC</span><span class="desc" data-v-3b39e6eb${_scopeId}>\uBA54\uB274 \uC124\uBA85 \uC785\uB825 \uCD5C\uB300 \uB450\uC904\uC785\uB825 \uB450\uC904\uAE4C\uC9C0 \uC785\uB825 </span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>6,000</em>\uC6D0 </span></div><div class="img-wrap ratio" data-v-3b39e6eb${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-3b39e6eb${_scopeId}></div>`);
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
      _push(`</li><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><div class="badges" data-v-3b39e6eb${_scopeId}><span class="badge" data-v-3b39e6eb${_scopeId}>\uC778\uAE30</span><span class="badge" data-v-3b39e6eb${_scopeId}>\uC7AC\uC8FC\uBB38 \uB9CE\uC74C</span></div><span class="name" data-v-3b39e6eb${_scopeId}>\uC2A4\uD398\uC15C \uD584 \uCE58\uC988 \uD1A0\uC2A4\uD2B8</span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>18,800</em>\uC6D0 </span></div><div class="img-wrap ratio" data-v-3b39e6eb${_scopeId}><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-3b39e6eb${_scopeId}></div>`);
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
      _push(`</li></ul></li><li id="grp_101" class="" data-v-3b39e6eb><button class="btn-grp-title" data-v-3b39e6eb> \uC2E0\uBA54\uB274<i class="icon_arrow" data-v-3b39e6eb></i></button><ul class="goods-list" data-v-3b39e6eb><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><span class="name" data-v-3b39e6eb${_scopeId}>\uBE14\uB8E8\uBCA0\uB9AC \uCFE0\uD0A4 \uCE58\uC988 \uCF00\uC774\uD06C</span><span class="desc" data-v-3b39e6eb${_scopeId}> \uACE0\uC18C\uD55C \uCFE0\uD0A4\uC640 \uD06C\uB9BC\uCE58\uC988\uB97C \uB4EC\uBFCD \uB123\uC5B4 \uB9CC\uB4E0 \uCF00\uC774\uD06C \uC704\uC5D0 \uB2EC\uCF64 \uC0C1\uD07C\uD55C \uBE14\uB8E8\uBCA0\uB9AC\uAC00 \uC62C\uB77C\uAC00 \uC788\uB294 \uCE58\uC988 \uCF00\uC774\uD06C \uBA54\uB274 \uC124\uBA85 \uC785\uB825 \uCD5C\uB300 \uB450\uC904\uC785\uB825 \uB450\uC904\uAE4C\uC9C0 \uC785\uB825 </span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>12,000</em>\uC6D0 </span></div>`);
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
      _push(`</li><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><span class="name" data-v-3b39e6eb${_scopeId}>\uC544\uC774\uC2A4 \uB514\uCE74\uD398\uC778 \uCE74\uD398\uB77C\uB5BC</span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>6,000</em>\uC6D0 </span></div>`);
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
      _push(`</li><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><span class="name" data-v-3b39e6eb${_scopeId}>\uC2A4\uD398\uC15C \uD584 \uCE58\uC988 \uD1A0\uC2A4\uD2B8</span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>18,800</em>\uC6D0 </span></div>`);
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
      _push(`</li></ul></li><li id="grp_102" class="" data-v-3b39e6eb><button class="btn-grp-title" data-v-3b39e6eb> \uCD94\uCC9C\uBA54\uB274<i class="icon_arrow" data-v-3b39e6eb></i></button><ul class="goods-list" data-v-3b39e6eb><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><span class="name" data-v-3b39e6eb${_scopeId}>\uBE14\uB8E8\uBCA0\uB9AC \uCFE0\uD0A4 \uCE58\uC988 \uCF00\uC774\uD06C</span><span class="desc" data-v-3b39e6eb${_scopeId}> \uACE0\uC18C\uD55C \uCFE0\uD0A4\uC640 \uD06C\uB9BC\uCE58\uC988\uB97C \uB4EC\uBFCD \uB123\uC5B4 \uB9CC\uB4E0 \uCF00\uC774\uD06C \uC704\uC5D0 \uB2EC\uCF64 \uC0C1\uD07C\uD55C \uBE14\uB8E8\uBCA0\uB9AC\uAC00 \uC62C\uB77C\uAC00 \uC788\uB294 \uCE58\uC988 \uCF00\uC774\uD06C \uBA54\uB274 \uC124\uBA85 \uC785\uB825 \uCD5C\uB300 \uB450\uC904\uC785\uB825 \uB450\uC904\uAE4C\uC9C0 \uC785\uB825 </span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>12,000</em>\uC6D0 </span></div>`);
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
      _push(`</li><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><span class="name" data-v-3b39e6eb${_scopeId}>\uC544\uC774\uC2A4 \uB514\uCE74\uD398\uC778 \uCE74\uD398\uB77C\uB5BC</span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>6,000</em>\uC6D0 </span></div>`);
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
      _push(`</li><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><span class="name" data-v-3b39e6eb${_scopeId}>\uC2A4\uD398\uC15C \uD584 \uCE58\uC988 \uD1A0\uC2A4\uD2B8</span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>18,800</em>\uC6D0 </span></div>`);
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
      _push(`</li></ul></li><li id="grp_103" class="hidden" data-v-3b39e6eb><button class="btn-grp-title" data-v-3b39e6eb> \uCF5C\uB4DC\uBD80\uB974<i class="icon_arrow" data-v-3b39e6eb></i></button><ul class="goods-list" data-v-3b39e6eb><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><span class="name" data-v-3b39e6eb${_scopeId}>\uBE14\uB8E8\uBCA0\uB9AC \uCFE0\uD0A4 \uCE58\uC988 \uCF00\uC774\uD06C</span><span class="desc" data-v-3b39e6eb${_scopeId}> \uACE0\uC18C\uD55C \uCFE0\uD0A4\uC640 \uD06C\uB9BC\uCE58\uC988\uB97C \uB4EC\uBFCD \uB123\uC5B4 \uB9CC\uB4E0 \uCF00\uC774\uD06C \uC704\uC5D0 \uB2EC\uCF64 \uC0C1\uD07C\uD55C \uBE14\uB8E8\uBCA0\uB9AC\uAC00 \uC62C\uB77C\uAC00 \uC788\uB294 \uCE58\uC988 \uCF00\uC774\uD06C \uBA54\uB274 \uC124\uBA85 \uC785\uB825 \uCD5C\uB300 \uB450\uC904\uC785\uB825 \uB450\uC904\uAE4C\uC9C0 \uC785\uB825 </span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>12,000</em>\uC6D0 </span></div>`);
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
      _push(`</li><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><span class="name" data-v-3b39e6eb${_scopeId}>\uC544\uC774\uC2A4 \uB514\uCE74\uD398\uC778 \uCE74\uD398\uB77C\uB5BC</span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>6,000</em>\uC6D0 </span></div>`);
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
      _push(`</li><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><span class="name" data-v-3b39e6eb${_scopeId}>\uC2A4\uD398\uC15C \uD584 \uCE58\uC988 \uD1A0\uC2A4\uD2B8</span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>18,800</em>\uC6D0 </span></div>`);
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
      _push(`</li></ul></li><li id="grp_104" class="hidden" data-v-3b39e6eb><button class="btn-grp-title" data-v-3b39e6eb> \uD640\uCF00\uC774\uD06C<i class="icon_arrow" data-v-3b39e6eb></i></button><ul class="goods-list" data-v-3b39e6eb><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><span class="name" data-v-3b39e6eb${_scopeId}>\uBE14\uB8E8\uBCA0\uB9AC \uCFE0\uD0A4 \uCE58\uC988 \uCF00\uC774\uD06C</span><span class="desc" data-v-3b39e6eb${_scopeId}> \uACE0\uC18C\uD55C \uCFE0\uD0A4\uC640 \uD06C\uB9BC\uCE58\uC988\uB97C \uB4EC\uBFCD \uB123\uC5B4 \uB9CC\uB4E0 \uCF00\uC774\uD06C \uC704\uC5D0 \uB2EC\uCF64 \uC0C1\uD07C\uD55C \uBE14\uB8E8\uBCA0\uB9AC\uAC00 \uC62C\uB77C\uAC00 \uC788\uB294 \uCE58\uC988 \uCF00\uC774\uD06C \uBA54\uB274 \uC124\uBA85 \uC785\uB825 \uCD5C\uB300 \uB450\uC904\uC785\uB825 \uB450\uC904\uAE4C\uC9C0 \uC785\uB825 </span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>12,000</em>\uC6D0 </span></div>`);
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
      _push(`</li></ul></li><li id="grp_105" class="hidden" data-v-3b39e6eb><button class="btn-grp-title" data-v-3b39e6eb> \uD2F0<i class="icon_arrow" data-v-3b39e6eb></i></button><ul class="goods-list" data-v-3b39e6eb><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><span class="name" data-v-3b39e6eb${_scopeId}>\uCE74\uBAA8\uB9C8\uC77C \uD2F0</span><span class="desc" data-v-3b39e6eb${_scopeId}> \uC219\uBA74\uC5D0 \uC88B\uC740 \uD2F0 </span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>6,000</em>\uC6D0 </span></div>`);
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
      _push(`</li><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><span class="name" data-v-3b39e6eb${_scopeId}>\uD398\uD37C\uBBFC\uD2B8 \uD2F0</span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>6,000</em>\uC6D0 </span></div>`);
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
      _push(`</li><li data-v-3b39e6eb>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-3b39e6eb${_scopeId}><span class="name" data-v-3b39e6eb${_scopeId}>\uD398\uD37C\uBBFC\uD2B8 \uD2F0</span><span class="price" data-v-3b39e6eb${_scopeId}><em data-v-3b39e6eb${_scopeId}>6,000</em>\uC6D0 </span></div>`);
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
      _push(`</li></ul></li></ul></section><div class="btn-wrap-fixed" data-v-3b39e6eb><div class="btn-row" data-v-3b39e6eb><button class="btn-cart-link" data-v-3b39e6eb> \uC7A5\uBC14\uAD6C\uB2C8 <span class="count" data-v-3b39e6eb>0</span></button><button class="btn-order-link" data-v-3b39e6eb>0\uC6D0 <em data-v-67f37c94="" data-v-3b39e6eb>\uD3EC\uC7A5</em> \uC8FC\uBB38 </button></div></div></main></div>`);
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

export { togo as default };
//# sourceMappingURL=togo-CfK8Zsxa.mjs.map
