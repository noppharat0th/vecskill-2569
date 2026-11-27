import { u as useApi } from './useApi-BHbECEYe.mjs';
import { defineComponent, mergeProps, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
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

//#region app/composables/service/indicator.ts
function useIndicator() {
	const api = useApi();
	const indicators = ref();
	const form = ref({
		id: null,
		eval_id: Number,
		name: "",
		description: "",
		weight: "",
		type: "",
		type_file: ""
	});
	const fetchIndicator = async () => {
		const res = await api.get("/indicator/get-indicator");
		indicators.value = res;
	};
	const createIndicator = async () => {
		await api.post("/indicator/create-indicator", form.value);
		await fetchIndicator();
	};
	const updateIndicator = async () => {
		await api.put(`/indicator/create-indicator/${form.value.id}`, form.value);
		await fetchIndicator();
	};
	const deleteIndicator = async () => {
		await api.put(`/indicator/delete-indicator/${form.value.id}`, form.value);
		await fetchIndicator();
	};
	return {
		fetchIndicator,
		createIndicator,
		updateIndicator,
		deleteIndicator,
		form,
		indicators
	};
}
//#endregion
//#region app/pages/admin/indicators.vue?vue&type=script&setup=true&lang.ts
var indicators_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "indicators",
	__ssrInlineRender: true,
	setup(__props) {
		useIndicator();
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<input${ssrRenderAttrs(mergeProps({ type: "text" }, _attrs))}>`);
		};
	}
});
//#endregion
//#region app/pages/admin/indicators.vue
var _sfc_setup = indicators_vue_vue_type_script_setup_true_lang_default.setup;
indicators_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/indicators.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var indicators_default = indicators_vue_vue_type_script_setup_true_lang_default;

export { indicators_default as default };
//# sourceMappingURL=indicators-YywbG4qF.mjs.map
