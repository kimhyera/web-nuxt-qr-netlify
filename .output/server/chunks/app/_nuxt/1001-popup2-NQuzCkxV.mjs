import { _ as __nuxt_component_0 } from './nuxt-link-CBXZo5aS.mjs';
import { useSSRContext, defineComponent, ref, resolveComponent, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_2, b as _imports_3 } from './img_smaple_01_2x-Ot9khhfV.mjs';
import { _ as _imports_1 } from './img_smaple_03_2x-Bxcdrywo.mjs';
import { B as BusinessTime } from './BusinessTime-_96kgf26.mjs';
import { D as DeliveryTip } from './DeliveryTip-B-91KfQ7.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../server.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'pinia-plugin-persistedstate';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "1001-popup2",
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
      _push(`<!--[--><div class="layout1" data-v-b1ba607d><header class="header-main" data-v-b1ba607d><div class="header-row" data-v-b1ba607d><h1 class="store-name" data-v-b1ba607d> \uC2A4\uD1A0\uC5B4 \uC774\uB984 </h1><button class="btn-user" title="\uB9C8\uC774\uD398\uC774\uC9C0 \uBC14\uB85C\uAC00\uAE30" data-v-b1ba607d></button></div></header><nav class="navbar" data-v-b1ba607d><ul class="nav" data-v-b1ba607d><li data-v-b1ba607d>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/pb/main" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uB9E4\uC7A5\uC18C\uAC1C`);
          } else {
            return [
              createTextVNode("\uB9E4\uC7A5\uC18C\uAC1C")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-b1ba607d>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/pb/order/1001" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uBC30\uB2EC`);
          } else {
            return [
              createTextVNode("\uBC30\uB2EC")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-b1ba607d>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/pb/order/1002" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uD3EC\uC7A5`);
          } else {
            return [
              createTextVNode("\uD3EC\uC7A5")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-b1ba607d>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/pb/order/1008" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uD14C\uC774\uBE14`);
          } else {
            return [
              createTextVNode("\uD14C\uC774\uBE14")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-b1ba607d>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/pb/waiting" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uB300\uAE30`);
          } else {
            return [
              createTextVNode("\uB300\uAE30")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-b1ba607d>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/pb/booking" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uC608\uC57D`);
          } else {
            return [
              createTextVNode("\uC608\uC57D")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></nav><main class="order-page" data-v-b1ba607d><section class="order-dashboard" data-v-b1ba607d><div class="store-business-time" data-v-b1ba607d><div class="time-row outline" data-v-b1ba607d><span class="status open" data-v-b1ba607d>\uC601\uC5C5\uC911</span><span class="time" data-v-b1ba607d><strong data-v-b1ba607d>\uBAA9</strong> 09:00 ~ 19:00</span><button class="btn-modal-time" data-v-b1ba607d>\uC804\uCCB4\uBCF4\uAE30</button></div></div><div class="delivery-info" data-v-b1ba607d><dl data-v-b1ba607d><dt data-v-b1ba607d>\uCD5C\uC18C\uC8FC\uBB38 \uAE08\uC561</dt><dd data-v-b1ba607d>13,000\uC6D0</dd></dl><dl data-v-b1ba607d><dt data-v-b1ba607d><button class="btn-tooltip" data-v-b1ba607d> \uBC30\uB2EC\uD301 <i class="btn_tooltip_16" data-v-b1ba607d></i></button></dt><dd data-v-b1ba607d>3,000\uC6D0 ~</dd></dl><dl data-v-b1ba607d><dt data-v-b1ba607d>\uC608\uC0C1 \uC18C\uC694\uC2DC\uAC04</dt><dd data-v-b1ba607d>65~70\uBD84</dd></dl></div></section><section class="menu-list-section" data-v-b1ba607d><ul class="menu-group-slide" data-v-b1ba607d><li data-id="#grp_best3" data-v-b1ba607d><a class="btn-smooth" href="#grp_best3" data-v-b1ba607d>\uC778\uAE30\uBA54\uB274</a></li><li data-id="#grp_100" data-v-b1ba607d><a class="btn-smooth" href="#grp_100" data-v-b1ba607d>\uB300\uD45C\uBA54\uB274</a></li><li data-id="#grp_101" data-v-b1ba607d><a class="btn-smooth" href="#grp_101" data-v-b1ba607d>\uC2E0\uBA54\uB274</a></li><li data-id="#grp_102" data-v-b1ba607d><a class="btn-smooth" href="#grp_102" data-v-b1ba607d>\uCD94\uCC9C\uBA54\uB274</a></li><li data-id="#grp_103" data-v-b1ba607d><a class="btn-smooth" href="#grp_103" data-v-b1ba607d>\uCF5C\uB4DC\uBD80\uB974</a></li><li data-id="#grp_104" data-v-b1ba607d><a class="btn-smooth" href="#grp_104" data-v-b1ba607d>\uD640\uCF00\uC774\uD06C</a></li><li data-id="#grp_105" data-v-b1ba607d><a class="btn-smooth" href="#grp_105" data-v-b1ba607d>\uD2F0</a></li></ul><div class="menu-group-slide-fixed-fake-area" data-v-b1ba607d></div><ul class="menu-group-list" data-v-b1ba607d><li class="li-best3" data-v-b1ba607d><div id="grp_best3" class="best3-menu" data-v-b1ba607d><p class="grp-title" data-v-b1ba607d>\uC778\uAE30\uBA54\uB274</p><ul class="best-goods-list" data-v-b1ba607d><li data-v-b1ba607d>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-b1ba607d${_scopeId}><span class="name" data-v-b1ba607d${_scopeId}>\uC544\uC774\uC2A4 \uB514\uCE74\uD398\uC778 \uCE74\uD398\uB77C\uB5BC</span><span class="price" data-v-b1ba607d${_scopeId}><em data-v-b1ba607d${_scopeId}>12,000</em>\uC6D0</span><div class="sale-value" data-v-b1ba607d${_scopeId}><span data-v-b1ba607d${_scopeId}>\uC6D4 \uD3C9\uADE0 \uD310\uB9E4\uB7C9</span><span data-v-b1ba607d${_scopeId}> 126\uAC1C </span></div></div><div class="position-relative" data-v-b1ba607d${_scopeId}><div class="img-wrap col-auto img-ratio-menu-list" data-v-b1ba607d${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-b1ba607d${_scopeId}></div><i class="icon_best_30" data-v-b1ba607d${_scopeId}></i></div>`);
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
      _push(`</li><li data-v-b1ba607d>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-b1ba607d${_scopeId}><span class="name" data-v-b1ba607d${_scopeId}>\uBE14\uB8E8\uBCA0\uB9AC \uCFE0\uD0A4 \uCE58\uC988 \uCF00\uC774\uD06C</span><span class="price" data-v-b1ba607d${_scopeId}><em data-v-b1ba607d${_scopeId}>12,000</em>\uC6D0</span><div class="sale-value" data-v-b1ba607d${_scopeId}><span data-v-b1ba607d${_scopeId}>\uC6D4 \uD3C9\uADE0 \uD310\uB9E4\uB7C9</span><span data-v-b1ba607d${_scopeId}> 100\uAC1C </span></div></div><div class="position-relative" data-v-b1ba607d${_scopeId}><div class="img-wrap img-ratio-menu-list" data-v-b1ba607d${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-b1ba607d${_scopeId}></div><i class="icon_best_30" data-v-b1ba607d${_scopeId}></i></div>`);
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
      _push(`</li></ul></div></li><li id="grp_100" class="" data-v-b1ba607d><button class="btn-grp-title" data-v-b1ba607d> \uB300\uD45C\uBA54\uB274 <i class="icon_arrow" data-v-b1ba607d></i></button><ul class="goods-list" data-v-b1ba607d><li data-v-b1ba607d>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-b1ba607d${_scopeId}><div class="badges" data-v-b1ba607d${_scopeId}><span class="badge" data-v-b1ba607d${_scopeId}>\uC778\uAE30</span><span class="badge" data-v-b1ba607d${_scopeId}>\uC7AC\uC8FC\uBB38 \uB9CE\uC74C</span></div><span class="name" data-v-b1ba607d${_scopeId}>\uBE14\uB8E8\uBCA0\uB9AC \uCFE0\uD0A4 \uCE58\uC988 \uCF00\uC774\uD06C</span><span class="desc" data-v-b1ba607d${_scopeId}> \uACE0\uC18C\uD55C \uCFE0\uD0A4\uC640 \uD06C\uB9BC\uCE58\uC988\uB97C \uB4EC\uBFCD \uB123\uC5B4 \uB9CC\uB4E0 \uCF00\uC774\uD06C \uC704\uC5D0 \uB2EC\uCF64 \uC0C1\uD07C\uD55C \uBE14\uB8E8\uBCA0\uB9AC\uAC00 \uC62C\uB77C\uAC00 \uC788\uB294 \uCE58\uC988 \uCF00\uC774\uD06C \uBA54\uB274 \uC124\uBA85 \uC785\uB825 \uCD5C\uB300 \uB450\uC904\uC785\uB825 \uB450\uC904\uAE4C\uC9C0 \uC785\uB825 </span><span class="price" data-v-b1ba607d${_scopeId}><em data-v-b1ba607d${_scopeId}>12,000</em>\uC6D0 </span></div><div class="img-wrap ratio" data-v-b1ba607d${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-b1ba607d${_scopeId}></div>`);
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
      _push(`</li><li data-v-b1ba607d>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-b1ba607d${_scopeId}><span class="name" data-v-b1ba607d${_scopeId}>\uC544\uC774\uC2A4 \uB514\uCE74\uD398\uC778 \uCE74\uD398\uB77C\uB5BC</span><span class="desc" data-v-b1ba607d${_scopeId}>\uBA54\uB274 \uC124\uBA85 \uC785\uB825 \uCD5C\uB300 \uB450\uC904\uC785\uB825 \uB450\uC904\uAE4C\uC9C0 \uC785\uB825 </span><span class="price" data-v-b1ba607d${_scopeId}><em data-v-b1ba607d${_scopeId}>6,000</em>\uC6D0 </span></div><div class="img-wrap ratio" data-v-b1ba607d${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-b1ba607d${_scopeId}></div>`);
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
      _push(`</li><li data-v-b1ba607d>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-b1ba607d${_scopeId}><div class="badges" data-v-b1ba607d${_scopeId}><span class="badge" data-v-b1ba607d${_scopeId}>\uC778\uAE30</span><span class="badge" data-v-b1ba607d${_scopeId}>\uC7AC\uC8FC\uBB38 \uB9CE\uC74C</span></div><span class="name" data-v-b1ba607d${_scopeId}>\uC2A4\uD398\uC15C \uD584 \uCE58\uC988 \uD1A0\uC2A4\uD2B8</span><span class="price" data-v-b1ba607d${_scopeId}><em data-v-b1ba607d${_scopeId}>18,800</em>\uC6D0 </span></div><div class="img-wrap ratio" data-v-b1ba607d${_scopeId}><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-b1ba607d${_scopeId}></div>`);
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
      _push(`</li></ul></li><li id="grp_101" class="" data-v-b1ba607d><button class="btn-grp-title" data-v-b1ba607d> \uC2E0\uBA54\uB274<i class="icon_arrow" data-v-b1ba607d></i></button><ul class="goods-list" data-v-b1ba607d><li data-v-b1ba607d>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-b1ba607d${_scopeId}><span class="name" data-v-b1ba607d${_scopeId}>\uBE14\uB8E8\uBCA0\uB9AC \uCFE0\uD0A4 \uCE58\uC988 \uCF00\uC774\uD06C</span><span class="desc" data-v-b1ba607d${_scopeId}> \uACE0\uC18C\uD55C \uCFE0\uD0A4\uC640 \uD06C\uB9BC\uCE58\uC988\uB97C \uB4EC\uBFCD \uB123\uC5B4 \uB9CC\uB4E0 \uCF00\uC774\uD06C \uC704\uC5D0 \uB2EC\uCF64 \uC0C1\uD07C\uD55C \uBE14\uB8E8\uBCA0\uB9AC\uAC00 \uC62C\uB77C\uAC00 \uC788\uB294 \uCE58\uC988 \uCF00\uC774\uD06C \uBA54\uB274 \uC124\uBA85 \uC785\uB825 \uCD5C\uB300 \uB450\uC904\uC785\uB825 \uB450\uC904\uAE4C\uC9C0 \uC785\uB825 </span><span class="price" data-v-b1ba607d${_scopeId}><em data-v-b1ba607d${_scopeId}>12,000</em>\uC6D0 </span></div>`);
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
      _push(`</li><li data-v-b1ba607d>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-b1ba607d${_scopeId}><span class="name" data-v-b1ba607d${_scopeId}>\uC544\uC774\uC2A4 \uB514\uCE74\uD398\uC778 \uCE74\uD398\uB77C\uB5BC</span><span class="price" data-v-b1ba607d${_scopeId}><em data-v-b1ba607d${_scopeId}>6,000</em>\uC6D0 </span></div>`);
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
      _push(`</li><li data-v-b1ba607d>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-b1ba607d${_scopeId}><span class="name" data-v-b1ba607d${_scopeId}>\uC2A4\uD398\uC15C \uD584 \uCE58\uC988 \uD1A0\uC2A4\uD2B8</span><span class="price" data-v-b1ba607d${_scopeId}><em data-v-b1ba607d${_scopeId}>18,800</em>\uC6D0 </span></div>`);
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
      _push(`</li></ul></li><li id="grp_102" class="" data-v-b1ba607d><button class="btn-grp-title" data-v-b1ba607d> \uCD94\uCC9C\uBA54\uB274<i class="icon_arrow" data-v-b1ba607d></i></button><ul class="goods-list" data-v-b1ba607d><li data-v-b1ba607d>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-b1ba607d${_scopeId}><span class="name" data-v-b1ba607d${_scopeId}>\uBE14\uB8E8\uBCA0\uB9AC \uCFE0\uD0A4 \uCE58\uC988 \uCF00\uC774\uD06C</span><span class="desc" data-v-b1ba607d${_scopeId}> \uACE0\uC18C\uD55C \uCFE0\uD0A4\uC640 \uD06C\uB9BC\uCE58\uC988\uB97C \uB4EC\uBFCD \uB123\uC5B4 \uB9CC\uB4E0 \uCF00\uC774\uD06C \uC704\uC5D0 \uB2EC\uCF64 \uC0C1\uD07C\uD55C \uBE14\uB8E8\uBCA0\uB9AC\uAC00 \uC62C\uB77C\uAC00 \uC788\uB294 \uCE58\uC988 \uCF00\uC774\uD06C \uBA54\uB274 \uC124\uBA85 \uC785\uB825 \uCD5C\uB300 \uB450\uC904\uC785\uB825 \uB450\uC904\uAE4C\uC9C0 \uC785\uB825 </span><span class="price" data-v-b1ba607d${_scopeId}><em data-v-b1ba607d${_scopeId}>12,000</em>\uC6D0 </span></div>`);
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
      _push(`</li><li data-v-b1ba607d>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-b1ba607d${_scopeId}><span class="name" data-v-b1ba607d${_scopeId}>\uC544\uC774\uC2A4 \uB514\uCE74\uD398\uC778 \uCE74\uD398\uB77C\uB5BC</span><span class="price" data-v-b1ba607d${_scopeId}><em data-v-b1ba607d${_scopeId}>6,000</em>\uC6D0 </span></div>`);
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
      _push(`</li><li data-v-b1ba607d>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-b1ba607d${_scopeId}><span class="name" data-v-b1ba607d${_scopeId}>\uC2A4\uD398\uC15C \uD584 \uCE58\uC988 \uD1A0\uC2A4\uD2B8</span><span class="price" data-v-b1ba607d${_scopeId}><em data-v-b1ba607d${_scopeId}>18,800</em>\uC6D0 </span></div>`);
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
      _push(`</li></ul></li><li id="grp_103" class="hidden" data-v-b1ba607d><button class="btn-grp-title" data-v-b1ba607d> \uCF5C\uB4DC\uBD80\uB974<i class="icon_arrow" data-v-b1ba607d></i></button><ul class="goods-list" data-v-b1ba607d><li data-v-b1ba607d>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-b1ba607d${_scopeId}><span class="name" data-v-b1ba607d${_scopeId}>\uBE14\uB8E8\uBCA0\uB9AC \uCFE0\uD0A4 \uCE58\uC988 \uCF00\uC774\uD06C</span><span class="desc" data-v-b1ba607d${_scopeId}> \uACE0\uC18C\uD55C \uCFE0\uD0A4\uC640 \uD06C\uB9BC\uCE58\uC988\uB97C \uB4EC\uBFCD \uB123\uC5B4 \uB9CC\uB4E0 \uCF00\uC774\uD06C \uC704\uC5D0 \uB2EC\uCF64 \uC0C1\uD07C\uD55C \uBE14\uB8E8\uBCA0\uB9AC\uAC00 \uC62C\uB77C\uAC00 \uC788\uB294 \uCE58\uC988 \uCF00\uC774\uD06C \uBA54\uB274 \uC124\uBA85 \uC785\uB825 \uCD5C\uB300 \uB450\uC904\uC785\uB825 \uB450\uC904\uAE4C\uC9C0 \uC785\uB825 </span><span class="price" data-v-b1ba607d${_scopeId}><em data-v-b1ba607d${_scopeId}>12,000</em>\uC6D0 </span></div>`);
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
      _push(`</li><li data-v-b1ba607d>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-b1ba607d${_scopeId}><span class="name" data-v-b1ba607d${_scopeId}>\uC544\uC774\uC2A4 \uB514\uCE74\uD398\uC778 \uCE74\uD398\uB77C\uB5BC</span><span class="price" data-v-b1ba607d${_scopeId}><em data-v-b1ba607d${_scopeId}>6,000</em>\uC6D0 </span></div>`);
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
      _push(`</li><li data-v-b1ba607d>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-b1ba607d${_scopeId}><span class="name" data-v-b1ba607d${_scopeId}>\uC2A4\uD398\uC15C \uD584 \uCE58\uC988 \uD1A0\uC2A4\uD2B8</span><span class="price" data-v-b1ba607d${_scopeId}><em data-v-b1ba607d${_scopeId}>18,800</em>\uC6D0 </span></div>`);
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
      _push(`</li></ul></li><li id="grp_104" class="hidden" data-v-b1ba607d><button class="btn-grp-title" data-v-b1ba607d> \uD640\uCF00\uC774\uD06C<i class="icon_arrow" data-v-b1ba607d></i></button><ul class="goods-list" data-v-b1ba607d><li data-v-b1ba607d>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-b1ba607d${_scopeId}><span class="name" data-v-b1ba607d${_scopeId}>\uBE14\uB8E8\uBCA0\uB9AC \uCFE0\uD0A4 \uCE58\uC988 \uCF00\uC774\uD06C</span><span class="desc" data-v-b1ba607d${_scopeId}> \uACE0\uC18C\uD55C \uCFE0\uD0A4\uC640 \uD06C\uB9BC\uCE58\uC988\uB97C \uB4EC\uBFCD \uB123\uC5B4 \uB9CC\uB4E0 \uCF00\uC774\uD06C \uC704\uC5D0 \uB2EC\uCF64 \uC0C1\uD07C\uD55C \uBE14\uB8E8\uBCA0\uB9AC\uAC00 \uC62C\uB77C\uAC00 \uC788\uB294 \uCE58\uC988 \uCF00\uC774\uD06C \uBA54\uB274 \uC124\uBA85 \uC785\uB825 \uCD5C\uB300 \uB450\uC904\uC785\uB825 \uB450\uC904\uAE4C\uC9C0 \uC785\uB825 </span><span class="price" data-v-b1ba607d${_scopeId}><em data-v-b1ba607d${_scopeId}>12,000</em>\uC6D0 </span></div>`);
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
      _push(`</li></ul></li><li id="grp_105" class="hidden" data-v-b1ba607d><button class="btn-grp-title" data-v-b1ba607d> \uD2F0<i class="icon_arrow" data-v-b1ba607d></i></button><ul class="goods-list" data-v-b1ba607d><li data-v-b1ba607d>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-b1ba607d${_scopeId}><span class="name" data-v-b1ba607d${_scopeId}>\uCE74\uBAA8\uB9C8\uC77C \uD2F0</span><span class="desc" data-v-b1ba607d${_scopeId}> \uC219\uBA74\uC5D0 \uC88B\uC740 \uD2F0 </span><span class="price" data-v-b1ba607d${_scopeId}><em data-v-b1ba607d${_scopeId}>6,000</em>\uC6D0 </span></div>`);
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
      _push(`</li><li data-v-b1ba607d>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-b1ba607d${_scopeId}><span class="name" data-v-b1ba607d${_scopeId}>\uD398\uD37C\uBBFC\uD2B8 \uD2F0</span><span class="price" data-v-b1ba607d${_scopeId}><em data-v-b1ba607d${_scopeId}>6,000</em>\uC6D0 </span></div>`);
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
      _push(`</li><li data-v-b1ba607d>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: "pb/path",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-wrap" data-v-b1ba607d${_scopeId}><span class="name" data-v-b1ba607d${_scopeId}>\uD398\uD37C\uBBFC\uD2B8 \uD2F0</span><span class="price" data-v-b1ba607d${_scopeId}><em data-v-b1ba607d${_scopeId}>6,000</em>\uC6D0 </span></div>`);
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
      _push(`</li></ul></li></ul></section><div class="btn-wrap-fixed-wrap" data-v-b1ba607d><div class="btn-wrap-fixed" data-v-b1ba607d><button class="btn-address btn-block-lg" data-v-b1ba607d> \uC8FC\uC18C\uB97C \uC124\uC815\uD558\uC138\uC694. </button></div><div class="btn-fixed-fake-area" data-v-b1ba607d></div></div></main></div>`);
      if (isBusinessTime.value) {
        _push(ssrRenderComponent(BusinessTime, { onClose: closeBusinessTime }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!isDeliveryTip.value) {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pb/order/1001-popup2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _1001Popup2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b1ba607d"]]);

export { _1001Popup2 as default };
//# sourceMappingURL=1001-popup2-NQuzCkxV.mjs.map
