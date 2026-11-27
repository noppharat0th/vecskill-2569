import { _ as _plugin_vue_export_helper_default, u as useHead$1, N as NuxtLink } from '../virtual/entry.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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

//#region node_modules/nuxt/dist/app/components/error-404.vue
var _sfc_main = {
	__name: "error-404",
	__ssrInlineRender: true,
	props: {
		appName: {
			type: String,
			default: "Nuxt"
		},
		status: {
			type: Number,
			default: 404
		},
		statusText: {
			type: String,
			default: "Page not found"
		},
		description: {
			type: String,
			default: "Sorry, the page you are looking for could not be found."
		},
		backHome: {
			type: String,
			default: "Go back home"
		}
	},
	setup(__props) {
		const props = __props;
		useHead$1({
			title: `${props.status} - ${props.statusText} | ${props.appName}`,
			script: [{ innerHTML: `!function(){let e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(let e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(let t of e)if("childList"===t.type)for(let e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)}).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;let r=function(e){let r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),r.credentials="use-credentials"===e.crossOrigin?"include":"anonymous"===e.crossOrigin?"omit":"same-origin",r}(e);fetch(e.href,r)}}();` }],
			style: [{ innerHTML: `*,:after,:before{box-sizing:border-box;border-style:solid;border-width:0;border-color:var(--un-default-border-color,#e5e7eb)}:after,:before{--un-content:""}html{-webkit-text-size-adjust:100%;tab-size:4;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}body{line-height:inherit;margin:0}h1,h2{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}h1,h2,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 #0000;--un-ring-shadow:0 0 #0000;--un-shadow-inset: ;--un-shadow:0 0 #0000;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:#93c5fd80;--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }` }]
		});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "antialiased bg-white dark:bg-[#020420] dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-[#020420] tracking-wide" }, _attrs))} data-v-b8cc6c10><div class="max-w-520px text-center" data-v-b8cc6c10><h1 class="font-semibold leading-none mb-4 sm:text-[110px] tabular-nums text-[80px]" data-v-b8cc6c10>${ssrInterpolate(__props.status)}</h1><h2 class="font-semibold mb-2 sm:text-3xl text-2xl" data-v-b8cc6c10>${ssrInterpolate(__props.statusText)}</h2><p class="mb-4 px-2 text-[#64748B] text-md" data-v-b8cc6c10>${ssrInterpolate(__props.description)}</p><div class="flex items-center justify-center w-full" data-v-b8cc6c10>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/",
				class: "font-medium hover:text-[#00DC82] text-sm underline underline-offset-3"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(__props.backHome)}`);
					else return [createTextVNode(toDisplayString(__props.backHome), 1)];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt/dist/app/components/error-404.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var error_404_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-b8cc6c10"]]);

export { error_404_default as default };
//# sourceMappingURL=error-404-BHPsk5x5.mjs.map
