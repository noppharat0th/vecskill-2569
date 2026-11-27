import { u as useHead$1, N as NuxtLink } from '../virtual/entry.mjs';
import { u as useAuth, _ as _virtual_public__2Flogo2_default } from './_virtual_public-DtqpTDnc.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderDynamicModel, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
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
import './useApi-BHbECEYe.mjs';

//#region app/pages/index.vue?vue&type=script&setup=true&lang.ts
var inputClass = "h-8 w-full rounded border border-[#89888d] bg-white px-3 text-sm focus:border-[#1f75cb] focus:outline-2 focus:outline-offset-1 focus:outline-[#428fdc]";
var linkClass = "text-[#1f5fc4] hover:underline";
var index_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		useHead$1({ title: "Sign in · PersonSystem" });
		useAuth();
		ref("");
		ref("");
		const remember = ref(false);
		const showPassword = ref(false);
		const loading = ref(false);
		const error = ref("");
		ref({
			fname: "",
			lname: "",
			username: "",
			password: ""
		});
		const formLogin = ref({
			username: "",
			password: ""
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex min-h-screen flex-col pt-30 overflow-hidden bg-[#edebe9] font-sans text-[#333238]" }, _attrs))}><div class="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] blur-[30px] bg-[radial-gradient(ellipse_38%_55%_at_50%_100%,rgba(250,190,120,0.85),transparent_70%),radial-gradient(ellipse_30%_50%_at_70%_100%,rgba(240,160,170,0.7),transparent_70%),radial-gradient(ellipse_30%_55%_at_85%_100%,rgba(190,170,225,0.75),transparent_70%),radial-gradient(ellipse_28%_45%_at_22%_100%,rgba(245,200,180,0.6),transparent_70%)]" aria-hidden="true"></div><main class="relative z-10 flex flex-1 flex-col items-center px-4 pt-20"><div class="flex"><img class="w-30 h-auto"${ssrRenderAttr("src", _virtual_public__2Flogo2_default)} alt=""><div class="-ml-4 mt-10"><h1 class="font-bold text-[30px]">EC</h1></div></div><span class="">Performance Management System</span><form class="mt-5 w-full max-w-[465px]">`);
			if (unref(error)) _push(`<p class="mb-4 rounded border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">${ssrInterpolate(unref(error))}</p>`);
			else _push(`<!---->`);
			_push(`<label for="user_login" class="mb-1 block text-sm font-semibold">Username</label><input id="user_login"${ssrRenderAttr("value", unref(formLogin).username)} type="text" autocomplete="username" autofocus required class="${ssrRenderClass(inputClass)}"><label for="user_password" class="mb-1 mt-4 block text-sm font-semibold">Password</label><div class="relative"><input id="user_password"${ssrRenderDynamicModel(unref(showPassword) ? "text" : "password", unref(formLogin).password, null)}${ssrRenderAttr("type", unref(showPassword) ? "text" : "password")} autocomplete="current-password" required class="${ssrRenderClass([inputClass, "pr-10"])}"><button type="button" class="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded hover:bg-black/5"${ssrRenderAttr("aria-label", unref(showPassword) ? "Hide password" : "Show password")}>`);
			if (!unref(showPassword)) _push(`<svg class="h-4 w-4" viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" d="M8 3C4.5 3 1.7 5.2.4 8c1.3 2.8 4.1 5 7.6 5s6.3-2.2 7.6-5C14.3 5.2 11.5 3 8 3Zm0 8.2A3.2 3.2 0 1 1 8 4.8a3.2 3.2 0 0 1 0 6.4ZM8 6.4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" clip-rule="evenodd"></path></svg>`);
			else _push(`<svg class="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M2 2l12 12M6.5 6.6A2 2 0 0 0 9.4 9.5M4 4.5C2.5 5.5 1.3 6.7.4 8c1.3 2.8 4.1 5 7.6 5 1.2 0 2.3-.3 3.3-.7M13 11c.9-.8 1.7-1.8 2.4-3-1.3-2.8-4.1-5-7.4-5-.5 0-1 .1-1.5.2"></path></svg>`);
			_push(`</button></div><div class="mt-1 text-right">`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/forgot-password",
				class: [linkClass, "text-sm"]
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Forgot your password?`);
					else return [createTextVNode("Forgot your password?")];
				}),
				_: 1
			}, _parent));
			_push(`</div><label class="mt-3 flex cursor-pointer items-center gap-2 text-sm"><input${ssrIncludeBooleanAttr(Array.isArray(unref(remember)) ? ssrLooseContain(unref(remember), null) : unref(remember)) ? " checked" : ""} type="checkbox" class="h-4 w-4 rounded border-[#89888d] accent-[#333238]"> Remember me </label><button type="submit"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="mt-4 h-8 w-full rounded bg-[#333238] text-sm font-semibold text-white transition hover:bg-[#1f1e24] disabled:opacity-60">${ssrInterpolate(unref(loading) ? "Signing in…" : "Sign in")}</button><button type="button" class="mt-2 flex h-8 w-full items-center justify-center gap-1.5 rounded border border-[#bfbfc3] bg-white text-sm transition hover:bg-[#f5f5f5]"><svg class="h-4 w-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><circle cx="6" cy="5" r="2.6"></circle><path d="M1 13c0-2.4 2.2-4 5-4s5 1.6 5 4v1H1v-1Z"></path><circle cx="12.5" cy="9" r="1.4"></circle><path d="M12 10.2h1v3.3l-.5.5-.5-.5v-.6h.6v-.5H12v-2.2Z"></path></svg> Register </button><p class="mt-4 text-center text-sm"> Don&#39;t have an account yet? `);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/register",
				class: linkClass
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Register now`);
					else return [createTextVNode("Register now")];
				}),
				_: 1
			}, _parent));
			_push(`</p></form></main></div>`);
		};
	}
});
//#endregion
//#region app/pages/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var pages_default = index_vue_vue_type_script_setup_true_lang_default;

export { pages_default as default };
//# sourceMappingURL=pages-sC0i9tng.mjs.map
