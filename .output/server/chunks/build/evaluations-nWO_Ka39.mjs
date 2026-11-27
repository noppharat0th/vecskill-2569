import { u as useApi } from './useApi-BHbECEYe.mjs';
import { defineComponent, unref, ref, useSSRContext } from 'vue';
import { ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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

//#region app/composables/service/evaluations.ts
function useEvaluation() {
	const api = useApi();
	const evaluations = ref();
	const form = ref({
		id: null,
		title: "",
		start_date: "",
		end_date: ""
	});
	const fetchEvaluation = async (id) => {
		const e_id = id ? id : null;
		let res;
		if (e_id) res = await api.get(`/evaluations/get-evaluation/${e_id}`);
		else res = await api.get(`/evaluations/get-evaluation/`);
		evaluations.value = res;
	};
	const createEvaluation = async () => {
		if (!form.value) return;
		const res = await api.post("/evaluations/create-evaluation", form.value);
		console.log(res);
		await fetchEvaluation();
	};
	const updateEvaluation = async () => {
		await api.put(`/evaluations/update-evaluation/${form.value.id}`, form.value);
		await fetchEvaluation();
	};
	const deleteEvaluation = async () => {
		await api.delete(`/evaluations/delete-evaluation/${form.value.id}`);
		await fetchEvaluation();
	};
	return {
		fetchEvaluation,
		createEvaluation,
		updateEvaluation,
		deleteEvaluation,
		form,
		evaluations
	};
}
//#endregion
//#region app/pages/admin/evaluations.vue?vue&type=script&setup=true&lang.ts
var evaluations_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "evaluations",
	__ssrInlineRender: true,
	setup(__props) {
		const { form, evaluations} = useEvaluation();
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[--><input type="text" class="border" placeholder="title"${ssrRenderAttr("value", unref(form).title)}><input type="date" class="border"${ssrRenderAttr("value", unref(form).start_date)}><input type="date" class="border"${ssrRenderAttr("value", unref(form).end_date)}><button>submit</button> ${ssrInterpolate(unref(evaluations)?.data)}<!--]-->`);
		};
	}
});
//#endregion
//#region app/pages/admin/evaluations.vue
var _sfc_setup = evaluations_vue_vue_type_script_setup_true_lang_default.setup;
evaluations_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/evaluations.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var evaluations_default = evaluations_vue_vue_type_script_setup_true_lang_default;

export { evaluations_default as default };
//# sourceMappingURL=evaluations-nWO_Ka39.mjs.map
