import { t as sidebar_default } from './sidebar-DpcZCmIY.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import '../virtual/entry.mjs';
import 'nostics';
import 'nostics/formatters/ansi';
import 'unhead/utils';
import '../routes/renderer.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'jsonwebtoken';
import 'knex';
import '@iconify/utils';
import 'consola';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import '@vueuse/core';
import '@vueuse/shared';
import 'tailwind-variants';
import 'tailwindcss/colors';
import './PopperArrow-3aLlQXRX.mjs';
import '@floating-ui/vue';
import './_virtual_public-DtqpTDnc.mjs';
import './useApi-BHbECEYe.mjs';

//#region app/layouts/dashboard.vue?vue&type=script&setup=true&lang.ts
var dashboard_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "dashboard",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-screen w-full bg-[#f7f8fa]" }, _attrs))}>`);
			_push(ssrRenderComponent(sidebar_default, null, null, _parent));
			_push(`<div class="min-w-0 flex-1">`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div></div>`);
		};
	}
});
//#endregion
//#region app/layouts/dashboard.vue
var _sfc_setup = dashboard_vue_vue_type_script_setup_true_lang_default.setup;
dashboard_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/dashboard.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var dashboard_default = dashboard_vue_vue_type_script_setup_true_lang_default;

export { dashboard_default as default };
//# sourceMappingURL=dashboard-DjwJTXHb.mjs.map
