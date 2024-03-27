import { defineComponent, ref, computed, mergeProps, useSSRContext } from "vue";
import "hookable";
import { ssrRenderAttrs } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const imageSrc = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='30'%20height='33'%20viewBox='0%200%2030%2033'%3e%3cg%20data-name='icon_map%20pin/28'%3e%3cpath%20data-name='사각형%205729'%20style='fill:none'%20d='M0%200h30v30H0z'/%3e%3cg%20data-name='그룹%2012632'%20transform='translate(-161%20-320)'%3e%3cellipse%20data-name='타원%20734'%20cx='8.5'%20cy='3'%20rx='8.5'%20ry='3'%20transform='translate(167%20344)'%20style='fill:rgba(0,0,0,.35)'/%3e%3cg%20data-name='그룹%2012446'%3e%3cpath%20data-name='패스%2030316'%20d='M10.759%200A11.168%2011.168%200%200%200%20.032%2012.033c.757%2010.144%2010.727%2015.058%2010.727%2015.058s9.97-4.913%2010.727-15.058A11.168%2011.168%200%200%200%2010.759%200'%20transform='translate(165%20320)'%20style='fill:%23303258'/%3e%3cpath%20data-name='패스%2030317'%20d='M16.3%2010.832a5.727%205.727%200%201%201-5.727-5.727%205.728%205.728%200%200%201%205.727%205.727'%20transform='translate(165.186%20320.195)'%20style='fill:%23fff'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "map",
  __ssrInlineRender: true,
  props: {
    themeName: {
      type: String,
      default: "default"
    }
  },
  setup(__props) {
    useRouter();
    ref(imageSrc);
    ref(null);
    ref(null);
    const stLatY = ref("37.5090492151745");
    const stLngX = ref("126.8869873429");
    computed(() => new (void 0).kakao.maps.LatLng(stLatY.value, stLngX.value));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout1" }, _attrs))} data-v-2679e18a><header class="header-main fixed" data-v-2679e18a><div class="header-row" data-v-2679e18a><h1 class="store-name" data-v-2679e18a> 지도보기 </h1><button class="btn-user" title="마이페이지 바로가기" data-v-2679e18a></button></div></header><div class="address-layer" data-v-2679e18a><div class="inner" data-v-2679e18a><div class="layer-head" data-v-2679e18a><h2 data-v-2679e18a>매장주소</h2><button class="btn-copy" data-v-2679e18a>주소복사</button></div><div class="address-text" data-v-2679e18a><input type="text" readonly value="서울 구로구 경인로 661 (신도림동, 신도림1차푸르지오)" class="input-address" data-v-2679e18a><div class="front-address" data-v-2679e18a>서울 구로구 경인로 661 (신도림동, 신도림1차푸르지오)</div></div></div></div><div id="map" data-v-2679e18a></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pb/map.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const map = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2679e18a"]]);
export {
  map as default
};
//# sourceMappingURL=map-Dw7auSiz.js.map
