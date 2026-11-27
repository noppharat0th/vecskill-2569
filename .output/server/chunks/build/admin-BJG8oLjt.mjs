import { u as useHead$1, a as _sfc_main$5, b as _sfc_main$4, c as useComponentProps, d as useLocale, e as useAppConfig, f as useForwardProps, g as usePortal, t as tv, V as VisuallyHidden_default, F as FieldGroupReset, P as Primitive, h as _sfc_main$3$1, i as useFormField, j as useFieldGroup, k as useComponentIcons, l as isArrayOfArray, m as get, n as _sfc_main$4$1, o as useEmitAsProps, p as useForwardExpose, q as Presence_default, T as Teleport_default, r as isNullish, s as useCollection, v as looseToNumber, w as getDisplayValue, x as createContext, y as useForwardProps$1, z as injectConfigProviderContext, A as getActiveElement, B as AUTOFOCUS_ON_UNMOUNT, C as focus, D as AUTOFOCUS_ON_MOUNT, E as focusFirst$1, G as getTabbableCandidates, H as EVENT_OPTIONS, I as getTabbableEdges } from '../virtual/entry.mjs';
import { u as useId$1, a as useDirection, P as PopperRoot_default, b as PopperAnchor_default, c as useForwardPropsEmits, d as PopperArrow_default, D as DismissableLayer_default, h as handleAndDispatchCustomEvent, e as PopperContent_default, f as context } from './PopperArrow-3aLlQXRX.mjs';
import { u as useApi } from './useApi-BHbECEYe.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, withModifiers, Fragment, renderList, computed, toValue, useSlots, toRef, toHandlers, renderSlot, createTextVNode, useTemplateRef, onScopeDispose, resolveDynamicComponent, useModel, mergeModels, toRefs, withDirectives, vShow, normalizeProps, guardReactiveProps, createElementBlock, watch, Teleport, createElementVNode, watchEffect, nextTick, normalizeStyle, reactive, useSSRContext } from 'vue';
import { B as defu, O as isEqual } from '../_/nitro.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderSlot, ssrRenderVNode, ssrRenderAttr } from 'vue/server-renderer';
import { reactivePick, createReusableTemplate, useVModel, unrefElement, useResizeObserver, createSharedComposable, useEventListener, createGlobalState } from '@vueuse/core';
import { refAutoReset, tryOnBeforeUnmount, isClient, isIOS } from '@vueuse/shared';
import { hideOthers } from 'aria-hidden';
import 'nostics';
import 'nostics/formatters/ansi';
import 'unhead/utils';
import '../routes/renderer.mjs';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'tailwind-variants';
import 'tailwindcss/colors';
import '@floating-ui/vue';
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

//#region node_modules/reka-ui/dist/shared/clamp.js
/**
* The `clamp` function restricts a number within a specified range by returning the value itself if it
* falls within the range, or the closest boundary value if it exceeds the range.
* @param {number} value - The `value` parameter represents the number that you want to clamp within
* the specified range defined by `min` and `max` values.
* @param {number} min - If the `value` parameter is less than the `min` value, the
* function will return the `min` value.
* @param {number} max - If the `value` parameter is greater than the `max` value,
* the function will return `max`.
* @returns The `clamp` function returns the value of `value` constrained within the range defined by
* `min` and `max`.
*/
function clamp(value, min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY) {
	return Math.min(max, Math.max(min, value));
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useBodyScrollLock.js
var useBodyLockStackCount = createSharedComposable(() => {
	const map = ref(/* @__PURE__ */ new Map());
	const initialOverflow = ref();
	const locked = computed(() => {
		for (const value of map.value.values()) if (value) return true;
		return false;
	});
	const context$1 = injectConfigProviderContext({ scrollBody: ref(true) });
	let stopTouchMoveListener = null;
	const resetBodyStyle = () => {
		(void 0).body.style.paddingRight = "";
		(void 0).body.style.marginRight = "";
		if (context.layersWithOutsidePointerEventsDisabled.size === 0) (void 0).body.style.pointerEvents = "";
		(void 0).documentElement.style.removeProperty("--scrollbar-width");
		(void 0).body.style.overflow = initialOverflow.value ?? "";
		isIOS && stopTouchMoveListener?.();
		initialOverflow.value = void 0;
	};
	watch(locked, (val, oldVal) => {
		if (!isClient) return;
		if (!val) {
			if (oldVal) resetBodyStyle();
			return;
		}
		if (initialOverflow.value === void 0) initialOverflow.value = (void 0).body.style.overflow;
		const verticalScrollbarWidth = (void 0).innerWidth - (void 0).documentElement.clientWidth;
		const defaultConfig = {
			padding: verticalScrollbarWidth,
			margin: 0
		};
		const config = context$1.scrollBody?.value ? typeof context$1.scrollBody.value === "object" ? defu({
			padding: context$1.scrollBody.value.padding === true ? verticalScrollbarWidth : context$1.scrollBody.value.padding,
			margin: context$1.scrollBody.value.margin === true ? verticalScrollbarWidth : context$1.scrollBody.value.margin
		}, defaultConfig) : defaultConfig : {
			padding: 0,
			margin: 0
		};
		if (verticalScrollbarWidth > 0) {
			(void 0).body.style.paddingRight = typeof config.padding === "number" ? `${config.padding}px` : String(config.padding);
			(void 0).body.style.marginRight = typeof config.margin === "number" ? `${config.margin}px` : String(config.margin);
			(void 0).documentElement.style.setProperty("--scrollbar-width", `${verticalScrollbarWidth}px`);
			(void 0).body.style.overflow = "hidden";
		}
		if (isIOS) stopTouchMoveListener = useEventListener(void 0, "touchmove", (e) => preventDefault(e), { passive: false });
		nextTick(() => {
			if (!locked.value) return;
			(void 0).body.style.pointerEvents = "none";
			(void 0).body.style.overflow = "hidden";
		});
	}, {
		immediate: true,
		flush: "sync"
	});
	return map;
});
function useBodyScrollLock(initialState) {
	const id = Math.random().toString(36).substring(2, 7);
	const map = useBodyLockStackCount();
	map.value.set(id, initialState ?? false);
	const locked = computed({
		get: () => map.value.get(id) ?? false,
		set: (value) => map.value.set(id, value)
	});
	tryOnBeforeUnmount(() => {
		map.value.delete(id);
	});
	return locked;
}
function checkOverflowScroll(ele) {
	const style = (void 0).getComputedStyle(ele);
	if (style.overflowX === "scroll" || style.overflowY === "scroll" || style.overflowX === "auto" && ele.clientWidth < ele.scrollWidth || style.overflowY === "auto" && ele.clientHeight < ele.scrollHeight) return true;
	else {
		const parent = ele.parentNode;
		if (!(parent instanceof Element) || parent.tagName === "BODY") return false;
		return checkOverflowScroll(parent);
	}
}
function preventDefault(rawEvent) {
	const e = rawEvent || (void 0).event;
	const _target = e.target;
	if (_target instanceof Element && checkOverflowScroll(_target)) return false;
	if (e.touches.length > 1) return true;
	if (e.preventDefault && e.cancelable) e.preventDefault();
	return false;
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useFocusGuards.js
/** Number of components which have requested interest to have focus guards */
var count = 0;
/**
* Injects a pair of focus guards at the edges of the whole DOM tree
* to ensure `focusin` & `focusout` events can be caught consistently.
*/
function useFocusGuards() {
	watchEffect((cleanupFn) => {
		if (!isClient) return;
		const edgeGuards = (void 0).querySelectorAll("[data-reka-focus-guard]");
		(void 0).body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
		(void 0).body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
		count++;
		cleanupFn(() => {
			if (count === 1) (void 0).querySelectorAll("[data-reka-focus-guard]").forEach((node) => node.remove());
			count--;
		});
	});
}
function createFocusGuard() {
	const element = (void 0).createElement("span");
	element.setAttribute("data-reka-focus-guard", "");
	element.tabIndex = 0;
	element.style.outline = "none";
	element.style.opacity = "0";
	element.style.position = "fixed";
	element.style.pointerEvents = "none";
	return element;
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useFormControl.js
function useFormControl(el) {
	return computed(() => toValue(el) ? Boolean(unrefElement(el)?.closest("form")) : true);
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useHideOthers.js
/**
* The `useHideOthers` function is a TypeScript function that takes a target element reference and
* hides all other elements in ARIA when the target element is present, and restores the visibility of the
* hidden elements when the target element is removed.
* @param {MaybeElementRef} target - The `target` parameter is a reference to the element that you want
* to hide other elements when it is clicked or focused.
*/
function useHideOthers(target) {
	let undo;
	watch(() => unrefElement(target), (el) => {
		let isInsideClosedPopover = false;
		try {
			isInsideClosedPopover = !!el?.closest("[popover]:not(:popover-open)");
		} catch {}
		if (el && !isInsideClosedPopover) undo = hideOthers(el);
		else if (undo) undo();
	});
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useTypeahead.js
function useTypeahead(callback) {
	const search = refAutoReset("", 1e3);
	const handleTypeaheadSearch = (key, items) => {
		search.value = search.value + key;
		{
			const currentItem = getActiveElement();
			const itemsWithTextValue = items.map((item) => ({
				...item,
				textValue: item.value?.textValue ?? item.ref.textContent?.trim() ?? ""
			}));
			const currentMatch = itemsWithTextValue.find((item) => item.ref === currentItem);
			const nextMatch = getNextMatch(itemsWithTextValue.map((item) => item.textValue), search.value, currentMatch?.textValue);
			const newItem = itemsWithTextValue.find((item) => item.textValue === nextMatch);
			if (newItem) newItem.ref.focus();
			return newItem?.ref;
		}
	};
	const resetTypeahead = () => {
		search.value = "";
	};
	return {
		search,
		handleTypeaheadSearch,
		resetTypeahead
	};
}
/**
* Wraps an array around itself at a given start index
* Example: `wrapArray(['a', 'b', 'c', 'd'], 2) === ['c', 'd', 'a', 'b']`
*/
function wrapArray(array, startIndex) {
	return array.map((_, index) => array[(startIndex + index) % array.length]);
}
/**
* This is the "meat" of the typeahead matching logic. It takes in all the values,
* the search and the current match, and returns the next match (or `undefined`).
*
* We normalize the search because if a user has repeatedly pressed a character,
* we want the exact same behavior as if we only had that one character
* (ie. cycle through options starting with that character)
*
* We also reorder the values by wrapping the array around the current match.
* This is so we always look forward from the current match, and picking the first
* match will always be the correct one.
*
* Finally, if the normalized search is exactly one character, we exclude the
* current match from the values because otherwise it would be the first to match always
* and focus would never move. This is as opposed to the regular case, where we
* don't want focus to move if the current match still matches.
*/
function getNextMatch(values, search, currentMatch) {
	const normalizedSearch = search.length > 1 && Array.from(search).every((char) => char === search[0]) ? search[0] : search;
	const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
	let wrappedValues = wrapArray(values, Math.max(currentMatchIndex, 0));
	if (normalizedSearch.length === 1) wrappedValues = wrappedValues.filter((v) => v !== currentMatch);
	const nextMatch = wrappedValues.find((value) => value.toLowerCase().startsWith(normalizedSearch.toLowerCase()));
	return nextMatch !== currentMatch ? nextMatch : void 0;
}
//#endregion
//#region node_modules/reka-ui/dist/Dialog/DialogRoot.js
var [injectDialogRootContext, provideDialogRootContext] = /*#__PURE__*/ createContext("DialogRoot");
var DialogRoot_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "DialogRoot",
	props: {
		open: {
			type: Boolean,
			required: false,
			default: void 0
		},
		defaultOpen: {
			type: Boolean,
			required: false,
			default: false
		},
		modal: {
			type: Boolean,
			required: false,
			default: true
		},
		unmountOnHide: {
			type: Boolean,
			required: false,
			default: true
		}
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const open = useVModel(props, "open", __emit, {
			defaultValue: props.defaultOpen,
			passive: props.open === void 0
		});
		const triggerElement = ref();
		const contentElement = ref();
		const { modal, unmountOnHide } = toRefs(props);
		provideDialogRootContext({
			open,
			modal,
			unmountOnHide,
			openModal: () => {
				open.value = true;
			},
			onOpenChange: (value) => {
				open.value = value;
			},
			onOpenToggle: () => {
				open.value = !open.value;
			},
			contentId: "",
			titleId: "",
			descriptionId: "",
			triggerElement,
			contentElement
		});
		return (_ctx, _cache) => {
			return renderSlot(_ctx.$slots, "default", {
				open: unref(open),
				close: () => open.value = false
			});
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Dialog/DialogClose.js
var DialogClose_default = /* @__PURE__ */ defineComponent({
	__name: "DialogClose",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "button"
		}
	},
	setup(__props) {
		const props = __props;
		useForwardExpose();
		const rootContext = injectDialogRootContext();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
				type: _ctx.as === "button" ? "button" : void 0,
				onClick: _cache[0] || (_cache[0] = ($event) => unref(rootContext).onOpenChange(false))
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["type"]);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/FocusScope/stack.js
var useFocusStackState = createGlobalState(() => {
	return ref([]);
});
function createFocusScopesStack() {
	/** A stack of focus scopes, with the active one at the top */
	const stack = useFocusStackState();
	return {
		add(focusScope) {
			const activeFocusScope = stack.value[0];
			if (focusScope !== activeFocusScope) activeFocusScope?.pause();
			stack.value = arrayRemove(stack.value, focusScope);
			stack.value.unshift(focusScope);
		},
		remove(focusScope) {
			stack.value = arrayRemove(stack.value, focusScope);
			stack.value[0]?.resume();
		}
	};
}
function arrayRemove(array, item) {
	const updatedArray = [...array];
	const index = updatedArray.indexOf(item);
	if (index !== -1) updatedArray.splice(index, 1);
	return updatedArray;
}
//#endregion
//#region node_modules/reka-ui/dist/FocusScope/FocusScope.js
var FocusScope_default = /* @__PURE__ */ defineComponent({
	__name: "FocusScope",
	props: {
		loop: {
			type: Boolean,
			required: false,
			default: false
		},
		trapped: {
			type: Boolean,
			required: false,
			default: false
		},
		present: {
			type: Boolean,
			required: false,
			default: true
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	emits: ["mountAutoFocus", "unmountAutoFocus"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { currentRef, currentElement } = useForwardExpose();
		const lastFocusedElementRef = ref(null);
		const focusScopesStack = createFocusScopesStack();
		const focusScope = /*#__PURE__*/ reactive({
			paused: false,
			pause() {
				this.paused = true;
			},
			resume() {
				this.paused = false;
			}
		});
		watchEffect((cleanupFn) => {
			if (!isClient) return;
			const container = currentElement.value;
			if (!props.trapped) return;
			function handleFocusIn(event) {
				if (focusScope.paused || !container) return;
				const target = event.target;
				if (container.contains(target)) lastFocusedElementRef.value = target;
				else focus(lastFocusedElementRef.value, { select: true });
			}
			function handleFocusOut(event) {
				if (focusScope.paused || !container) return;
				const relatedTarget = event.relatedTarget;
				if (relatedTarget === null) return;
				if (!container.contains(relatedTarget)) focus(lastFocusedElementRef.value, { select: true });
			}
			function handleMutations(mutations) {
				const lastFocusedElement = lastFocusedElementRef.value;
				if (lastFocusedElement === null) return;
				if (!mutations.some((m) => m.removedNodes.length > 0)) return;
				const activeElement = getActiveElement();
				if (activeElement && container.contains(activeElement)) return;
				if (!container.contains(lastFocusedElement)) focus(container);
			}
			(void 0).addEventListener("focusin", handleFocusIn);
			(void 0).addEventListener("focusout", handleFocusOut);
			const mutationObserver = new MutationObserver(handleMutations);
			if (container) mutationObserver.observe(container, {
				childList: true,
				subtree: true
			});
			cleanupFn(() => {
				(void 0).removeEventListener("focusin", handleFocusIn);
				(void 0).removeEventListener("focusout", handleFocusOut);
				mutationObserver.disconnect();
			});
		});
		function dispatchMountAutoFocus(container, previouslyFocusedElement) {
			const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
			const handleMountAutoFocus = (ev) => emits("mountAutoFocus", ev);
			container.addEventListener(AUTOFOCUS_ON_MOUNT, handleMountAutoFocus);
			container.dispatchEvent(mountEvent);
			container.removeEventListener(AUTOFOCUS_ON_MOUNT, handleMountAutoFocus);
			if (!mountEvent.defaultPrevented) {
				focusFirst$1(getTabbableCandidates(container), { select: true });
				if (getActiveElement() === previouslyFocusedElement) focus(container);
			}
		}
		watchEffect(async (cleanupFn) => {
			const container = currentElement.value;
			await nextTick();
			if (!container) return;
			if (props.present !== false) focusScopesStack.add(focusScope);
			const previouslyFocusedElement = getActiveElement();
			if (!container.contains(previouslyFocusedElement) && props.present !== false) dispatchMountAutoFocus(container, previouslyFocusedElement);
			cleanupFn(() => {
				const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
				const unmountEventHandler = (ev) => {
					emits("unmountAutoFocus", ev);
				};
				container.addEventListener(AUTOFOCUS_ON_UNMOUNT, unmountEventHandler);
				container.dispatchEvent(unmountEvent);
				container.setAttribute("data-focus-scope-unmounting", "");
				setTimeout(() => {
					if (!unmountEvent.defaultPrevented) focus(previouslyFocusedElement ?? (void 0).body, { select: true });
					container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, unmountEventHandler);
					focusScopesStack.remove(focusScope);
					container.removeAttribute("data-focus-scope-unmounting");
				}, 0);
			});
		});
		watch(() => props.present, async (present, prevPresent) => {
			if (!isClient) return;
			if (present === false && prevPresent === true) {
				focusScopesStack.remove(focusScope);
				return;
			}
			if (present !== true || prevPresent !== false) return;
			focusScopesStack.add(focusScope);
			await nextTick();
			const container = currentElement.value;
			if (!container) return;
			const previouslyFocusedElement = getActiveElement();
			if (!container.contains(previouslyFocusedElement)) dispatchMountAutoFocus(container, previouslyFocusedElement);
		});
		function handleKeyDown(event) {
			if (!props.loop && !props.trapped) return;
			if (focusScope.paused) return;
			const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
			const focusedElement = getActiveElement();
			if (isTabKey && focusedElement) {
				const container = event.currentTarget;
				const [first, last] = getTabbableEdges(container);
				if (!(first && last)) {
					if (focusedElement === container) event.preventDefault();
				} else if (!event.shiftKey && focusedElement === last) {
					event.preventDefault();
					if (props.loop) focus(first, { select: true });
				} else if (event.shiftKey && focusedElement === first) {
					event.preventDefault();
					if (props.loop) focus(last, { select: true });
				}
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				ref_key: "currentRef",
				ref: currentRef,
				tabindex: "-1",
				"as-child": _ctx.asChild,
				as: _ctx.as,
				onKeydown: handleKeyDown
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, ["as-child", "as"]);
		};
	}
});
function getOpenState(open) {
	return open ? "open" : "closed";
}
function focusFirst(candidates) {
	const PREVIOUSLY_FOCUSED_ELEMENT = getActiveElement();
	for (const candidate of candidates) {
		if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
		candidate.focus();
		if (getActiveElement() !== PREVIOUSLY_FOCUSED_ELEMENT) return;
	}
}
//#endregion
//#region node_modules/reka-ui/dist/Dialog/DialogContentImpl.js
var DialogContentImpl_default = /* @__PURE__ */ defineComponent({
	__name: "DialogContentImpl",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		trapFocus: {
			type: Boolean,
			required: false
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		present: {
			type: Boolean,
			required: false
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const rootContext = injectDialogRootContext();
		const { forwardRef} = useForwardExpose();
		rootContext.titleId ||= useId$1(void 0, "reka-dialog-title");
		rootContext.descriptionId ||= useId$1(void 0, "reka-dialog-description");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(FocusScope_default), {
				"as-child": "",
				loop: "",
				trapped: props.trapFocus,
				present: props.present,
				onMountAutoFocus: _cache[5] || (_cache[5] = ($event) => emits("openAutoFocus", $event)),
				onUnmountAutoFocus: _cache[6] || (_cache[6] = ($event) => emits("closeAutoFocus", $event))
			}, {
				default: withCtx(() => [createVNode(unref(DismissableLayer_default), mergeProps({
					id: unref(rootContext).contentId,
					ref: unref(forwardRef),
					as: _ctx.as,
					"as-child": _ctx.asChild,
					present: props.present,
					"disable-outside-pointer-events": _ctx.disableOutsidePointerEvents,
					role: "dialog",
					"aria-describedby": unref(rootContext).descriptionId,
					"aria-labelledby": unref(rootContext).titleId,
					"data-state": unref(getOpenState)(unref(rootContext).open.value)
				}, _ctx.$attrs, {
					onDismiss: _cache[0] || (_cache[0] = ($event) => unref(rootContext).onOpenChange(false)),
					onEscapeKeyDown: _cache[1] || (_cache[1] = ($event) => emits("escapeKeyDown", $event)),
					onFocusOutside: _cache[2] || (_cache[2] = ($event) => emits("focusOutside", $event)),
					onInteractOutside: _cache[3] || (_cache[3] = ($event) => emits("interactOutside", $event)),
					onPointerDownOutside: _cache[4] || (_cache[4] = ($event) => emits("pointerDownOutside", $event))
				}), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16, [
					"id",
					"as",
					"as-child",
					"present",
					"disable-outside-pointer-events",
					"aria-describedby",
					"aria-labelledby",
					"data-state"
				])]),
				_: 3
			}, 8, ["trapped", "present"]);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Dialog/DialogContentModal.js
var DialogContentModal_default = /* @__PURE__ */ defineComponent({
	__name: "DialogContentModal",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		trapFocus: {
			type: Boolean,
			required: false
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: false,
			default: true
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		present: {
			type: Boolean,
			required: true
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const rootContext = injectDialogRootContext();
		const emitsAsProps = useEmitAsProps(emits);
		const { forwardRef, currentElement } = useForwardExpose();
		useHideOthers(computed(() => props.present ? currentElement.value : void 0));
		const forwardedProps = computed(() => {
			const { present: _, ...rest } = props;
			return rest;
		});
		watch(() => props.present, (isPresent, wasPresent) => {
			if (!isPresent && wasPresent) rootContext.triggerElement.value?.focus();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(DialogContentImpl_default, mergeProps({
				...forwardedProps.value,
				...unref(emitsAsProps)
			}, {
				ref: unref(forwardRef),
				present: _ctx.present,
				"trap-focus": unref(rootContext).open.value,
				"disable-outside-pointer-events": props.disableOutsidePointerEvents,
				onCloseAutoFocus: _cache[0] || (_cache[0] = (event) => {
					if (!event.defaultPrevented) {
						event.preventDefault();
						unref(rootContext).triggerElement.value?.focus();
					}
				}),
				onPointerDownOutside: _cache[1] || (_cache[1] = (event) => {
					const originalEvent = event.detail.originalEvent;
					const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
					if (originalEvent.button === 2 || ctrlLeftClick) event.preventDefault();
				}),
				onFocusOutside: _cache[2] || (_cache[2] = (event) => {
					event.preventDefault();
				})
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, [
				"present",
				"trap-focus",
				"disable-outside-pointer-events"
			]);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Dialog/DialogContentNonModal.js
var DialogContentNonModal_default = /* @__PURE__ */ defineComponent({
	__name: "DialogContentNonModal",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		trapFocus: {
			type: Boolean,
			required: false
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		present: {
			type: Boolean,
			required: true
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emitsAsProps = useEmitAsProps(__emit);
		useForwardExpose();
		const rootContext = injectDialogRootContext();
		const hasInteractedOutsideRef = ref(false);
		const hasPointerDownOutsideRef = ref(false);
		const forwardedProps = computed(() => {
			const { present: _, ...rest } = props;
			return rest;
		});
		watch(() => props.present, (isPresent, wasPresent) => {
			if (!isPresent && wasPresent) {
				if (!hasInteractedOutsideRef.value) rootContext.triggerElement.value?.focus();
				hasInteractedOutsideRef.value = false;
				hasPointerDownOutsideRef.value = false;
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(DialogContentImpl_default, mergeProps({
				...forwardedProps.value,
				...unref(emitsAsProps)
			}, {
				present: _ctx.present,
				"trap-focus": false,
				"disable-outside-pointer-events": false,
				onCloseAutoFocus: _cache[0] || (_cache[0] = (event) => {
					if (!event.defaultPrevented) {
						if (!hasInteractedOutsideRef.value) unref(rootContext).triggerElement.value?.focus();
						event.preventDefault();
					}
					hasInteractedOutsideRef.value = false;
					hasPointerDownOutsideRef.value = false;
				}),
				onInteractOutside: _cache[1] || (_cache[1] = (event) => {
					if (!event.defaultPrevented) {
						hasInteractedOutsideRef.value = true;
						if (event.detail.originalEvent.type === "pointerdown") hasPointerDownOutsideRef.value = true;
					}
					const target = event.target;
					if (unref(rootContext).triggerElement.value?.contains(target)) event.preventDefault();
					if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.value) event.preventDefault();
				})
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["present"]);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Dialog/DialogContent.js
var DialogContent_default = /* @__PURE__ */ defineComponent({
	__name: "DialogContent",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: false,
			default: void 0
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	emits: [
		"escapeKeyDown",
		"pointerDownOutside",
		"focusOutside",
		"interactOutside",
		"openAutoFocus",
		"closeAutoFocus"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const rootContext = injectDialogRootContext();
		const emitsAsProps = useEmitAsProps(emits);
		const { forwardRef } = useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Presence_default), {
				present: _ctx.forceMount || unref(rootContext).open.value,
				"force-mount": _ctx.forceMount || !unref(rootContext).unmountOnHide.value
			}, {
				default: withCtx(({ present }) => [unref(rootContext).modal.value ? withDirectives((openBlock(), createBlock(DialogContentModal_default, mergeProps({
					key: 0,
					ref: unref(forwardRef),
					present: unref(rootContext).unmountOnHide.value || present
				}, {
					...props,
					...unref(emitsAsProps),
					..._ctx.$attrs
				}), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 2
				}, 1040, ["present"])), [[vShow, unref(rootContext).unmountOnHide.value || present]]) : withDirectives((openBlock(), createBlock(DialogContentNonModal_default, mergeProps({
					key: 1,
					ref: unref(forwardRef),
					present: unref(rootContext).unmountOnHide.value || present
				}, {
					...props,
					...unref(emitsAsProps),
					..._ctx.$attrs
				}), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 2
				}, 1040, ["present"])), [[vShow, unref(rootContext).unmountOnHide.value || present]])]),
				_: 3
			}, 8, ["present", "force-mount"]);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Dialog/DialogDescription.js
var DialogDescription_default = /* @__PURE__ */ defineComponent({
	__name: "DialogDescription",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "p"
		}
	},
	setup(__props) {
		const props = __props;
		useForwardExpose();
		const rootContext = injectDialogRootContext();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, { id: unref(rootContext).descriptionId }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["id"]);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Dialog/DialogOverlayImpl.js
var DialogOverlayImpl_default = /* @__PURE__ */ defineComponent({
	__name: "DialogOverlayImpl",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		present: {
			type: Boolean,
			required: false,
			default: true
		}
	},
	setup(__props) {
		const props = __props;
		const rootContext = injectDialogRootContext();
		const scrollLocked = useBodyScrollLock(props.present);
		watch(() => props.present, (val) => scrollLocked.value = val);
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				as: _ctx.as,
				"as-child": _ctx.asChild,
				"data-state": unref(rootContext).open.value ? "open" : "closed",
				style: { "pointer-events": "auto" },
				onPointerdown: _cache[0] || (_cache[0] = withModifiers(() => {}, [
					"left",
					"self",
					"prevent"
				]))
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, [
				"as",
				"as-child",
				"data-state"
			]);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Dialog/DialogOverlay.js
var DialogOverlay_default = /* @__PURE__ */ defineComponent({
	__name: "DialogOverlay",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const rootContext = injectDialogRootContext();
		const { forwardRef } = useForwardExpose();
		return (_ctx, _cache) => {
			return unref(rootContext)?.modal.value ? (openBlock(), createBlock(unref(Presence_default), {
				key: 0,
				present: _ctx.forceMount || unref(rootContext).open.value,
				"force-mount": _ctx.forceMount || !unref(rootContext).unmountOnHide.value
			}, {
				default: withCtx(({ present }) => [withDirectives(createVNode(DialogOverlayImpl_default, mergeProps(_ctx.$attrs, {
					ref: unref(forwardRef),
					as: _ctx.as,
					"as-child": _ctx.asChild,
					present: unref(rootContext).unmountOnHide.value || present
				}), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 2
				}, 1040, [
					"as",
					"as-child",
					"present"
				]), [[vShow, unref(rootContext).unmountOnHide.value || present]])]),
				_: 3
			}, 8, ["present", "force-mount"])) : createCommentVNode("v-if", true);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Dialog/DialogPortal.js
var DialogPortal_default = /* @__PURE__ */ defineComponent({
	__name: "DialogPortal",
	props: {
		to: {
			type: null,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		defer: {
			type: Boolean,
			required: false
		},
		forceMount: {
			type: Boolean,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Teleport_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Dialog/DialogTitle.js
var DialogTitle_default = /* @__PURE__ */ defineComponent({
	__name: "DialogTitle",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "h2"
		}
	},
	setup(__props) {
		const props = __props;
		const rootContext = injectDialogRootContext();
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, { id: unref(rootContext).titleId }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["id"]);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Dialog/DialogTrigger.js
var DialogTrigger_default = /* @__PURE__ */ defineComponent({
	__name: "DialogTrigger",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "button"
		}
	},
	setup(__props) {
		const props = __props;
		const rootContext = injectDialogRootContext();
		const { forwardRef} = useForwardExpose();
		rootContext.contentId ||= useId$1(void 0, "reka-dialog-content");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
				ref: unref(forwardRef),
				type: _ctx.as === "button" ? "button" : void 0,
				"aria-haspopup": "dialog",
				"aria-expanded": unref(rootContext).open.value || false,
				"aria-controls": unref(rootContext).open.value ? unref(rootContext).contentId : void 0,
				"data-state": unref(rootContext).open.value ? "open" : "closed",
				onClick: unref(rootContext).onOpenToggle
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, [
				"type",
				"aria-expanded",
				"aria-controls",
				"data-state",
				"onClick"
			]);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/shared/useNonce.js
function useNonce(nonce) {
	const context = injectConfigProviderContext({ nonce: ref() });
	return computed(() => nonce?.value || context.nonce?.value);
}
//#endregion
//#region node_modules/reka-ui/dist/Select/utils.js
var OPEN_KEYS = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
];
var SELECTION_KEYS = [" ", "Enter"];
function valueComparator(value, currentValue, comparator) {
	if (value === void 0) return false;
	else if (Array.isArray(value)) return value.some((val) => compare(val, currentValue, comparator));
	else return compare(value, currentValue, comparator);
}
function compare(value, currentValue, comparator) {
	if (value === void 0 || currentValue === void 0) return false;
	if (typeof value === "string") return value === currentValue;
	if (typeof comparator === "function") return comparator(value, currentValue);
	if (typeof comparator === "string") return value?.[comparator] === currentValue?.[comparator];
	return isEqual(value, currentValue);
}
function shouldShowPlaceholder(value) {
	return value === void 0 || value === null || value === "" || Array.isArray(value) && value.length === 0;
}
//#endregion
//#region node_modules/reka-ui/dist/Select/SelectRoot.js
var _hoisted_1$1 = ["value"];
var [injectSelectRootContext, provideSelectRootContext] = /*#__PURE__*/ createContext("SelectRoot");
var SelectRoot_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "SelectRoot",
	props: {
		open: {
			type: Boolean,
			required: false,
			default: void 0
		},
		defaultOpen: {
			type: Boolean,
			required: false
		},
		defaultValue: {
			type: null,
			required: false
		},
		modelValue: {
			type: null,
			required: false,
			default: void 0
		},
		nullableValue: {
			type: String,
			required: false,
			default: ""
		},
		by: {
			type: [String, Function],
			required: false
		},
		dir: {
			type: String,
			required: false
		},
		multiple: {
			type: Boolean,
			required: false
		},
		autocomplete: {
			type: String,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		name: {
			type: String,
			required: false
		},
		required: {
			type: Boolean,
			required: false
		}
	},
	emits: ["update:modelValue", "update:open"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { required, disabled, multiple, dir: propDir } = toRefs(props);
		const modelValue = useVModel(props, "modelValue", emits, {
			defaultValue: props.defaultValue ?? (multiple.value ? [] : void 0),
			passive: props.modelValue === void 0,
			deep: true
		});
		const open = useVModel(props, "open", emits, {
			defaultValue: props.defaultOpen,
			passive: props.open === void 0
		});
		const triggerElement = ref();
		const valueElement = ref();
		const triggerPointerDownPosRef = ref({
			x: 0,
			y: 0
		});
		const isEmptyModelValue = computed(() => {
			if (multiple.value && Array.isArray(modelValue.value)) return modelValue.value?.length === 0;
			else return isNullish(modelValue.value);
		});
		useCollection({ isProvider: true });
		const dir = useDirection(propDir);
		const isFormControl = useFormControl(triggerElement);
		const optionsSet = ref(/* @__PURE__ */ new Set());
		const nativeSelectKey = computed(() => {
			return Array.from(optionsSet.value).map((option) => option.value).join(";");
		});
		function handleValueChange(value) {
			if (multiple.value) {
				const array = Array.isArray(modelValue.value) ? [...modelValue.value] : [];
				const index = array.findIndex((i) => compare(i, value, props.by));
				index === -1 ? array.push(value) : array.splice(index, 1);
				modelValue.value = [...array];
			} else modelValue.value = value;
		}
		function getOption(value) {
			return Array.from(optionsSet.value).find((option) => valueComparator(value, option.value, props.by));
		}
		provideSelectRootContext({
			triggerElement,
			onTriggerChange: (node) => {
				triggerElement.value = node;
			},
			valueElement,
			onValueElementChange: (node) => {
				valueElement.value = node;
			},
			contentId: "",
			modelValue,
			onValueChange: handleValueChange,
			by: props.by,
			open,
			multiple,
			required,
			onOpenChange: (value) => {
				open.value = value;
			},
			dir,
			triggerPointerDownPosRef,
			disabled,
			isEmptyModelValue,
			optionsSet,
			onOptionAdd: (option) => {
				const existingOption = getOption(option.value);
				if (existingOption) optionsSet.value.delete(existingOption);
				optionsSet.value.add(option);
			},
			onOptionRemove: (option) => {
				const existingOption = getOption(option.value);
				if (existingOption) optionsSet.value.delete(existingOption);
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(PopperRoot_default), null, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
					modelValue: unref(modelValue),
					open: unref(open)
				}), unref(isFormControl) && _ctx.name ? (openBlock(), createBlock(BubbleSelect_default, {
					key: nativeSelectKey.value,
					"aria-hidden": "true",
					tabindex: "-1",
					multiple: unref(multiple),
					required: unref(required),
					name: _ctx.name,
					autocomplete: _ctx.autocomplete,
					disabled: unref(disabled),
					value: unref(modelValue)
				}, {
					default: withCtx(() => [unref(isNullish)(unref(modelValue)) ? (openBlock(), createElementBlock("option", {
						key: 0,
						value: _ctx.nullableValue
					}, null, 8, _hoisted_1$1)) : createCommentVNode("v-if", true), (openBlock(true), createElementBlock(Fragment, null, renderList(Array.from(optionsSet.value), (option) => {
						return openBlock(), createElementBlock("option", mergeProps({ key: option.value ?? "" }, { ref_for: true }, option), null, 16);
					}), 128))]),
					_: 1
				}, 8, [
					"multiple",
					"required",
					"name",
					"autocomplete",
					"disabled",
					"value"
				])) : createCommentVNode("v-if", true)]),
				_: 3
			});
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Select/BubbleSelect.js
var BubbleSelect_default = /* @__PURE__ */ defineComponent({
	__name: "BubbleSelect",
	props: {
		autocomplete: {
			type: String,
			required: false
		},
		autofocus: {
			type: Boolean,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		form: {
			type: String,
			required: false
		},
		multiple: {
			type: Boolean,
			required: false
		},
		name: {
			type: String,
			required: false
		},
		required: {
			type: Boolean,
			required: false
		},
		size: {
			type: Number,
			required: false
		},
		value: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		const selectElement = ref();
		const rootContext = injectSelectRootContext();
		watch(() => props.value, (cur, prev) => {
			const selectProto = (void 0).HTMLSelectElement.prototype;
			const setValue = Object.getOwnPropertyDescriptor(selectProto, "value").set;
			if (cur !== prev && setValue && selectElement.value) {
				const event = new Event("change", { bubbles: true });
				setValue.call(selectElement.value, cur);
				selectElement.value.dispatchEvent(event);
			}
		});
		/**
		* Form autofill will trigger an `input` event on the `select` element.
		* We listen to that event and update our internal state to support it.
		*/
		function handleInput(event) {
			rootContext.onValueChange(event.target.value);
		}
		/**
		* We purposefully use a `select` here to support form autofill as much
		* as possible.
		*
		* We purposefully do not add the `value` attribute here to allow the value
		* to be set programmatically and bubble to any parent form `onChange` event.
		*
		* We use `VisuallyHidden` rather than `display: "none"` because Safari autofill
		* won't work otherwise.
		*/
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(VisuallyHidden_default), { "as-child": "" }, {
				default: withCtx(() => [createElementVNode("select", mergeProps({
					ref_key: "selectElement",
					ref: selectElement
				}, props, { onInput: handleInput }), [renderSlot(_ctx.$slots, "default")], 16)]),
				_: 3
			});
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Select/SelectPopperPosition.js
var SelectPopperPosition_default = /* @__PURE__ */ defineComponent({
	__name: "SelectPopperPosition",
	props: {
		memoDependencies: {
			type: Array,
			required: false
		},
		side: {
			type: null,
			required: false
		},
		sideOffset: {
			type: Number,
			required: false
		},
		sideFlip: {
			type: Boolean,
			required: false
		},
		align: {
			type: null,
			required: false,
			default: "start"
		},
		alignOffset: {
			type: Number,
			required: false
		},
		alignFlip: {
			type: Boolean,
			required: false
		},
		avoidCollisions: {
			type: Boolean,
			required: false
		},
		collisionBoundary: {
			type: null,
			required: false
		},
		collisionPadding: {
			type: [Number, Object],
			required: false,
			default: 10
		},
		arrowPadding: {
			type: Number,
			required: false
		},
		hideShiftedArrow: {
			type: Boolean,
			required: false
		},
		sticky: {
			type: String,
			required: false
		},
		hideWhenDetached: {
			type: Boolean,
			required: false
		},
		positionStrategy: {
			type: String,
			required: false
		},
		updatePositionStrategy: {
			type: String,
			required: false
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: false
		},
		prioritizePosition: {
			type: Boolean,
			required: false
		},
		reference: {
			type: null,
			required: false
		},
		dir: {
			type: String,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const forwarded = useForwardProps$1(__props);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(PopperContent_default), mergeProps(unref(forwarded), { style: {
				"boxSizing": "border-box",
				"--reka-select-content-transform-origin": "var(--reka-popper-transform-origin)",
				"--reka-select-content-available-width": "var(--reka-popper-available-width)",
				"--reka-select-content-available-height": "var(--reka-popper-available-height)",
				"--reka-select-trigger-width": "var(--reka-popper-anchor-width)",
				"--reka-select-trigger-height": "var(--reka-popper-anchor-height)"
			} }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Select/SelectContentImpl.js
var SelectContentDefaultContextValue = {
	onViewportChange: () => {},
	itemTextRefCallback: () => {},
	itemRefCallback: () => {}
};
var [injectSelectContentContext, provideSelectContentContext] = /*#__PURE__*/ createContext("SelectContent");
var SelectContentImpl_default = /* @__PURE__ */ defineComponent({
	__name: "SelectContentImpl",
	props: {
		position: {
			type: String,
			required: false,
			default: "item-aligned"
		},
		bodyLock: {
			type: Boolean,
			required: false,
			default: true
		},
		memoDependencies: {
			type: Array,
			required: false
		},
		side: {
			type: null,
			required: false
		},
		sideOffset: {
			type: Number,
			required: false
		},
		sideFlip: {
			type: Boolean,
			required: false
		},
		align: {
			type: null,
			required: false,
			default: "start"
		},
		alignOffset: {
			type: Number,
			required: false
		},
		alignFlip: {
			type: Boolean,
			required: false
		},
		avoidCollisions: {
			type: Boolean,
			required: false
		},
		collisionBoundary: {
			type: null,
			required: false
		},
		collisionPadding: {
			type: [Number, Object],
			required: false
		},
		arrowPadding: {
			type: Number,
			required: false
		},
		hideShiftedArrow: {
			type: Boolean,
			required: false
		},
		sticky: {
			type: String,
			required: false
		},
		hideWhenDetached: {
			type: Boolean,
			required: false
		},
		positionStrategy: {
			type: String,
			required: false
		},
		updatePositionStrategy: {
			type: String,
			required: false
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: false
		},
		prioritizePosition: {
			type: Boolean,
			required: false
		},
		reference: {
			type: null,
			required: false
		},
		dir: {
			type: String,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: false,
			default: true
		}
	},
	emits: [
		"closeAutoFocus",
		"escapeKeyDown",
		"pointerDownOutside"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const rootContext = injectSelectRootContext();
		useFocusGuards();
		useBodyScrollLock(props.bodyLock);
		const { CollectionSlot, getItems } = useCollection();
		const content = ref();
		useHideOthers(content);
		const { search, handleTypeaheadSearch } = useTypeahead();
		const viewport = ref();
		const selectedItem = ref();
		const selectedItemText = ref();
		const isPositioned = ref(false);
		const firstValidItemFoundRef = ref(false);
		const firstSelectedItemInArrayFoundRef = ref(false);
		function focusSelectedItem() {
			if (selectedItem.value && content.value) focusFirst([selectedItem.value, content.value]);
		}
		watch(isPositioned, () => {
			focusSelectedItem();
		});
		const { onOpenChange, triggerPointerDownPosRef } = rootContext;
		watchEffect((cleanupFn) => {
			if (!content.value) return;
			let pointerMoveDelta = {
				x: 0,
				y: 0
			};
			const handlePointerMove = (event) => {
				pointerMoveDelta = {
					x: Math.abs(Math.round(event.pageX) - (triggerPointerDownPosRef.value?.x ?? 0)),
					y: Math.abs(Math.round(event.pageY) - (triggerPointerDownPosRef.value?.y ?? 0))
				};
			};
			const handlePointerUp = (event) => {
				if (event.pointerType === "touch") return;
				if (pointerMoveDelta.x <= 10 && pointerMoveDelta.y <= 10) event.preventDefault();
				else if (!content.value?.contains(event.target)) onOpenChange(false);
				(void 0).removeEventListener("pointermove", handlePointerMove);
				triggerPointerDownPosRef.value = null;
			};
			if (triggerPointerDownPosRef.value !== null) {
				(void 0).addEventListener("pointermove", handlePointerMove);
				(void 0).addEventListener("pointerup", handlePointerUp, {
					capture: true,
					once: true
				});
			}
			cleanupFn(() => {
				(void 0).removeEventListener("pointermove", handlePointerMove);
				(void 0).removeEventListener("pointerup", handlePointerUp, { capture: true });
			});
		});
		function handleKeyDown(event) {
			const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
			if (event.key === "Tab") event.preventDefault();
			if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key, getItems());
			if ([
				"ArrowUp",
				"ArrowDown",
				"Home",
				"End"
			].includes(event.key)) {
				let candidateNodes = [...getItems().map((i) => i.ref)];
				if (["ArrowUp", "End"].includes(event.key)) candidateNodes = candidateNodes.slice().reverse();
				if (["ArrowUp", "ArrowDown"].includes(event.key)) {
					const currentElement = event.target;
					const currentIndex = candidateNodes.indexOf(currentElement);
					candidateNodes = candidateNodes.slice(currentIndex + 1);
				}
				setTimeout(() => focusFirst(candidateNodes));
				event.preventDefault();
			}
		}
		const pickedProps = computed(() => {
			if (props.position === "popper") return props;
			else return {};
		});
		const forwardedProps = useForwardProps$1(pickedProps.value);
		provideSelectContentContext({
			content,
			viewport,
			onViewportChange: (node) => {
				viewport.value = node;
			},
			itemRefCallback: (node, value, disabled) => {
				const isFirstValidItem = !firstValidItemFoundRef.value && !disabled;
				const isSelectedItem = valueComparator(rootContext.modelValue.value, value, rootContext.by);
				if (rootContext.multiple.value) {
					if (firstSelectedItemInArrayFoundRef.value) return;
					if (isSelectedItem || isFirstValidItem) {
						selectedItem.value = node;
						if (isSelectedItem) firstSelectedItemInArrayFoundRef.value = true;
					}
				} else if (isSelectedItem || isFirstValidItem) selectedItem.value = node;
				if (isFirstValidItem) firstValidItemFoundRef.value = true;
			},
			selectedItem,
			selectedItemText,
			onItemLeave: () => {
				content.value?.focus();
			},
			itemTextRefCallback: (node, value, disabled) => {
				const isFirstValidItem = !firstValidItemFoundRef.value && !disabled;
				if (valueComparator(rootContext.modelValue.value, value, rootContext.by) || isFirstValidItem) selectedItemText.value = node;
			},
			focusSelectedItem,
			position: props.position,
			isPositioned,
			searchRef: search
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(CollectionSlot), null, {
				default: withCtx(() => [createVNode(unref(FocusScope_default), {
					"as-child": "",
					onMountAutoFocus: _cache[6] || (_cache[6] = withModifiers(() => {}, ["prevent"])),
					onUnmountAutoFocus: _cache[7] || (_cache[7] = (event) => {
						emits("closeAutoFocus", event);
						if (event.defaultPrevented) return;
						unref(rootContext).triggerElement.value?.focus({ preventScroll: true });
						event.preventDefault();
					})
				}, {
					default: withCtx(() => [createVNode(unref(DismissableLayer_default), {
						"as-child": "",
						"disable-outside-pointer-events": _ctx.disableOutsidePointerEvents,
						onFocusOutside: _cache[2] || (_cache[2] = withModifiers(() => {}, ["prevent"])),
						onDismiss: _cache[3] || (_cache[3] = ($event) => unref(rootContext).onOpenChange(false)),
						onEscapeKeyDown: _cache[4] || (_cache[4] = ($event) => emits("escapeKeyDown", $event)),
						onPointerDownOutside: _cache[5] || (_cache[5] = ($event) => emits("pointerDownOutside", $event))
					}, {
						default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(_ctx.position === "popper" ? SelectPopperPosition_default : SelectItemAlignedPosition_default), mergeProps({
							..._ctx.$attrs,
							...unref(forwardedProps)
						}, {
							id: unref(rootContext).contentId,
							ref: (vnode) => {
								if (!vnode) return void 0;
								const el = unref(unrefElement)(vnode);
								if (el?.hasAttribute("data-reka-popper-content-wrapper")) content.value = el.firstElementChild;
								else content.value = el;
							},
							role: "listbox",
							"data-state": unref(rootContext).open.value ? "open" : "closed",
							dir: unref(rootContext).dir.value,
							style: {
								display: "flex",
								flexDirection: "column",
								outline: "none"
							},
							onContextmenu: _cache[0] || (_cache[0] = withModifiers(() => {}, ["prevent"])),
							onPlaced: _cache[1] || (_cache[1] = ($event) => isPositioned.value = true),
							onKeydown: handleKeyDown
						}), {
							default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
							_: 3
						}, 16, [
							"id",
							"data-state",
							"dir",
							"onKeydown"
						]))]),
						_: 3
					}, 8, ["disable-outside-pointer-events"])]),
					_: 3
				})]),
				_: 3
			});
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Select/SelectItemAlignedPosition.js
var [injectSelectItemAlignedPositionContext, provideSelectItemAlignedPositionContext] = /*#__PURE__*/ createContext("SelectItemAlignedPosition");
var SelectItemAlignedPosition_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "SelectItemAlignedPosition",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	emits: ["placed"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { getItems } = useCollection();
		const rootContext = injectSelectRootContext();
		const contentContext = injectSelectContentContext();
		const shouldExpandOnScrollRef = ref(false);
		const shouldRepositionRef = ref(true);
		const contentWrapperElement = ref();
		const { forwardRef, currentElement: contentElement } = useForwardExpose();
		const { viewport, selectedItem, selectedItemText, focusSelectedItem } = contentContext;
		function position() {
			if (rootContext.triggerElement.value && rootContext.valueElement.value && contentWrapperElement.value && contentElement.value && viewport?.value && selectedItem?.value && selectedItemText?.value) {
				const triggerRect = rootContext.triggerElement.value.getBoundingClientRect();
				const contentRect = contentElement.value.getBoundingClientRect();
				const valueNodeRect = rootContext.valueElement.value.getBoundingClientRect();
				const itemTextRect = selectedItemText.value.getBoundingClientRect();
				if (rootContext.dir.value !== "rtl") {
					const itemTextOffset = itemTextRect.left - contentRect.left;
					const left = valueNodeRect.left - itemTextOffset;
					const leftDelta = triggerRect.left - left;
					const minContentWidth = triggerRect.width + leftDelta;
					const contentWidth = Math.max(minContentWidth, contentRect.width);
					const rightEdge = (void 0).innerWidth - 10;
					const clampedLeft = clamp(left, 10, Math.max(10, rightEdge - contentWidth));
					contentWrapperElement.value.style.minWidth = `${minContentWidth}px`;
					contentWrapperElement.value.style.left = `${clampedLeft}px`;
				} else {
					const itemTextOffset = contentRect.right - itemTextRect.right;
					const right = (void 0).innerWidth - valueNodeRect.right - itemTextOffset;
					const rightDelta = (void 0).innerWidth - triggerRect.right - right;
					const minContentWidth = triggerRect.width + rightDelta;
					const contentWidth = Math.max(minContentWidth, contentRect.width);
					const leftEdge = (void 0).innerWidth - 10;
					const clampedRight = clamp(right, 10, Math.max(10, leftEdge - contentWidth));
					contentWrapperElement.value.style.minWidth = `${minContentWidth}px`;
					contentWrapperElement.value.style.right = `${clampedRight}px`;
				}
				const items = getItems().map((i) => i.ref);
				const availableHeight = (void 0).innerHeight - 20;
				const itemsHeight = viewport.value.scrollHeight;
				const contentStyles = (void 0).getComputedStyle(contentElement.value);
				const contentBorderTopWidth = Number.parseInt(contentStyles.borderTopWidth, 10);
				const contentPaddingTop = Number.parseInt(contentStyles.paddingTop, 10);
				const contentBorderBottomWidth = Number.parseInt(contentStyles.borderBottomWidth, 10);
				const contentPaddingBottom = Number.parseInt(contentStyles.paddingBottom, 10);
				const fullContentHeight = contentBorderTopWidth + contentPaddingTop + itemsHeight + contentPaddingBottom + contentBorderBottomWidth;
				const minContentHeight = Math.min(selectedItem.value.offsetHeight * 5, fullContentHeight);
				const viewportStyles = (void 0).getComputedStyle(viewport.value);
				const viewportPaddingTop = Number.parseInt(viewportStyles.paddingTop, 10);
				const viewportPaddingBottom = Number.parseInt(viewportStyles.paddingBottom, 10);
				const topEdgeToTriggerMiddle = triggerRect.top + triggerRect.height / 2 - 10;
				const triggerMiddleToBottomEdge = availableHeight - topEdgeToTriggerMiddle;
				const selectedItemHalfHeight = selectedItem.value.offsetHeight / 2;
				const itemOffsetMiddle = selectedItem.value.offsetTop + selectedItemHalfHeight;
				const contentTopToItemMiddle = contentBorderTopWidth + contentPaddingTop + itemOffsetMiddle;
				const itemMiddleToContentBottom = fullContentHeight - contentTopToItemMiddle;
				if (contentTopToItemMiddle <= topEdgeToTriggerMiddle) {
					const isLastItem = selectedItem.value === items.at(-1);
					contentWrapperElement.value.style.bottom = `0px`;
					const viewportOffsetBottom = contentElement.value.clientHeight - viewport.value.offsetTop - viewport.value.offsetHeight;
					const height = contentTopToItemMiddle + Math.max(triggerMiddleToBottomEdge, selectedItemHalfHeight + (isLastItem ? viewportPaddingBottom : 0) + viewportOffsetBottom + contentBorderBottomWidth);
					contentWrapperElement.value.style.height = `${height}px`;
				} else {
					const isFirstItem = selectedItem.value === items[0];
					contentWrapperElement.value.style.top = `0px`;
					const height = Math.max(topEdgeToTriggerMiddle, contentBorderTopWidth + viewport.value.offsetTop + (isFirstItem ? viewportPaddingTop : 0) + selectedItemHalfHeight) + itemMiddleToContentBottom;
					contentWrapperElement.value.style.height = `${height}px`;
					viewport.value.scrollTop = contentTopToItemMiddle - topEdgeToTriggerMiddle + viewport.value.offsetTop;
				}
				contentWrapperElement.value.style.margin = `10px 0`;
				contentWrapperElement.value.style.minHeight = `${minContentHeight}px`;
				contentWrapperElement.value.style.maxHeight = `${availableHeight}px`;
				emits("placed");
				requestAnimationFrame(() => shouldExpandOnScrollRef.value = true);
			}
		}
		const contentZIndex = ref("");
		function handleScrollButtonChange(node) {
			if (node && shouldRepositionRef.value === true) {
				position();
				focusSelectedItem?.();
				shouldRepositionRef.value = false;
			}
		}
		useResizeObserver(rootContext.triggerElement, () => {
			position();
		});
		provideSelectItemAlignedPositionContext({
			contentWrapper: contentWrapperElement,
			shouldExpandOnScrollRef,
			onScrollButtonChange: handleScrollButtonChange
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "contentWrapperElement",
				ref: contentWrapperElement,
				style: normalizeStyle({
					display: "flex",
					flexDirection: "column",
					position: "fixed",
					zIndex: contentZIndex.value
				})
			}, [createVNode(unref(Primitive), mergeProps({
				ref: unref(forwardRef),
				style: {
					boxSizing: "border-box",
					maxHeight: "100%"
				}
			}, {
				..._ctx.$attrs,
				...props
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16)], 4);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Select/SelectArrow.js
var SelectArrow_default = /* @__PURE__ */ defineComponent({
	__name: "SelectArrow",
	props: {
		width: {
			type: Number,
			required: false,
			default: 10
		},
		height: {
			type: Number,
			required: false,
			default: 5
		},
		rounded: {
			type: Boolean,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "svg"
		}
	},
	setup(__props) {
		const props = __props;
		const contentContext = injectSelectContentContext(SelectContentDefaultContextValue);
		return (_ctx, _cache) => {
			return unref(contentContext).position === "popper" ? (openBlock(), createBlock(unref(PopperArrow_default), normalizeProps(mergeProps({ key: 0 }, props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16)) : createCommentVNode("v-if", true);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Select/SelectProvider.js
var SelectProvider_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "SelectProvider",
	props: { context: {
		type: Object,
		required: true
	} },
	setup(__props) {
		provideSelectRootContext(__props.context);
		provideSelectContentContext(SelectContentDefaultContextValue);
		return (_ctx, _cache) => {
			return renderSlot(_ctx.$slots, "default");
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Select/SelectContent.js
var _hoisted_1 = { key: 1 };
var SelectContent_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "SelectContent",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		position: {
			type: String,
			required: false
		},
		bodyLock: {
			type: Boolean,
			required: false
		},
		memoDependencies: {
			type: Array,
			required: false
		},
		side: {
			type: null,
			required: false
		},
		sideOffset: {
			type: Number,
			required: false
		},
		sideFlip: {
			type: Boolean,
			required: false
		},
		align: {
			type: null,
			required: false
		},
		alignOffset: {
			type: Number,
			required: false
		},
		alignFlip: {
			type: Boolean,
			required: false
		},
		avoidCollisions: {
			type: Boolean,
			required: false
		},
		collisionBoundary: {
			type: null,
			required: false
		},
		collisionPadding: {
			type: [Number, Object],
			required: false
		},
		arrowPadding: {
			type: Number,
			required: false
		},
		hideShiftedArrow: {
			type: Boolean,
			required: false
		},
		sticky: {
			type: String,
			required: false
		},
		hideWhenDetached: {
			type: Boolean,
			required: false
		},
		positionStrategy: {
			type: String,
			required: false
		},
		updatePositionStrategy: {
			type: String,
			required: false
		},
		disableUpdateOnLayoutShift: {
			type: Boolean,
			required: false
		},
		prioritizePosition: {
			type: Boolean,
			required: false
		},
		reference: {
			type: null,
			required: false
		},
		dir: {
			type: String,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		},
		disableOutsidePointerEvents: {
			type: Boolean,
			required: false
		}
	},
	emits: [
		"closeAutoFocus",
		"escapeKeyDown",
		"pointerDownOutside"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const forwarded = useForwardPropsEmits(props, __emit);
		const rootContext = injectSelectRootContext();
		const fragment = ref();
		const presenceRef = ref();
		const present = computed(() => props.forceMount || rootContext.open.value);
		const renderPresence = ref(present.value);
		let renderPresenceTimeout;
		function clearRenderPresenceTimeout() {
			if (renderPresenceTimeout) {
				clearTimeout(renderPresenceTimeout);
				renderPresenceTimeout = void 0;
			}
		}
		watch(present, (_value, _oldValue, onCleanup) => {
			clearRenderPresenceTimeout();
			renderPresenceTimeout = setTimeout(() => {
				renderPresence.value = present.value;
				renderPresenceTimeout = void 0;
			});
			onCleanup(clearRenderPresenceTimeout);
		});
		return (_ctx, _cache) => {
			return present.value || renderPresence.value || presenceRef.value?.present ? (openBlock(), createBlock(unref(Presence_default), {
				key: 0,
				ref_key: "presenceRef",
				ref: presenceRef,
				present: present.value
			}, {
				default: withCtx(() => [createVNode(SelectContentImpl_default, normalizeProps(guardReactiveProps({
					...unref(forwarded),
					..._ctx.$attrs
				})), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16)]),
				_: 3
			}, 8, ["present"])) : fragment.value ? (openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(Teleport, { to: fragment.value }, [createVNode(SelectProvider_default, { context: unref(rootContext) }, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, ["context"])], 8, ["to"]))])) : createCommentVNode("v-if", true);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Select/SelectGroup.js
var [injectSelectGroupContext, provideSelectGroupContext] = /*#__PURE__*/ createContext("SelectGroup");
var SelectGroup_default = /* @__PURE__ */ defineComponent({
	__name: "SelectGroup",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		const id = useId$1(void 0, "reka-select-group");
		provideSelectGroupContext({ id });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps({ role: "group" }, props, { "aria-labelledby": unref(id) }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["aria-labelledby"]);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Select/SelectItem.js
var [injectSelectItemContext, provideSelectItemContext] = /*#__PURE__*/ createContext("SelectItem");
var SelectItem_default = /* @__PURE__ */ defineComponent({
	__name: "SelectItem",
	props: {
		value: {
			type: null,
			required: true
		},
		disabled: {
			type: Boolean,
			required: false
		},
		textValue: {
			type: String,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	emits: ["select"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { disabled } = toRefs(props);
		const rootContext = injectSelectRootContext();
		const contentContext = injectSelectContentContext();
		const { forwardRef} = useForwardExpose();
		const { CollectionItem } = useCollection();
		const isSelected = computed(() => valueComparator(rootContext.modelValue?.value, props.value, rootContext.by));
		const isFocused = ref(false);
		const textValue = ref(props.textValue ?? "");
		const textId = useId$1(void 0, "reka-select-item-text");
		const SELECT_SELECT = "select.select";
		async function handleSelectCustomEvent(ev) {
			if (ev.defaultPrevented) return;
			const eventDetail = {
				originalEvent: ev,
				value: props.value
			};
			handleAndDispatchCustomEvent(SELECT_SELECT, handleSelect, eventDetail);
		}
		async function handleSelect(ev) {
			await nextTick();
			emits("select", ev);
			if (ev.defaultPrevented) return;
			if (!disabled.value) {
				rootContext.onValueChange(props.value);
				if (!rootContext.multiple.value) rootContext.onOpenChange(false);
			}
		}
		async function handlePointerMove(event) {
			await nextTick();
			if (event.defaultPrevented) return;
			if (disabled.value) contentContext.onItemLeave?.();
			else event.currentTarget?.focus({ preventScroll: true });
		}
		async function handlePointerLeave(event) {
			await nextTick();
			if (event.defaultPrevented) return;
			if (event.currentTarget === getActiveElement()) contentContext.onItemLeave?.();
		}
		async function handleKeyDown(event) {
			await nextTick();
			if (event.defaultPrevented) return;
			if (contentContext.searchRef?.value !== "" && event.key === " ") return;
			if (SELECTION_KEYS.includes(event.key)) handleSelectCustomEvent(event);
			if (event.key === " ") event.preventDefault();
		}
		if (props.value === "") throw new Error("A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
		provideSelectItemContext({
			value: props.value,
			disabled,
			textId,
			isSelected,
			onItemTextChange: (node) => {
				textValue.value = ((textValue.value || node?.textContent) ?? "").trim();
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(CollectionItem), { value: { textValue: textValue.value } }, {
				default: withCtx(() => [createVNode(unref(Primitive), {
					ref: unref(forwardRef),
					role: "option",
					"aria-labelledby": unref(textId),
					"data-highlighted": isFocused.value ? "" : void 0,
					"aria-selected": isSelected.value,
					"data-state": isSelected.value ? "checked" : "unchecked",
					"aria-disabled": unref(disabled) || void 0,
					"data-disabled": unref(disabled) ? "" : void 0,
					tabindex: unref(disabled) ? void 0 : -1,
					as: _ctx.as,
					"as-child": _ctx.asChild,
					onFocus: _cache[0] || (_cache[0] = ($event) => isFocused.value = true),
					onBlur: _cache[1] || (_cache[1] = ($event) => isFocused.value = false),
					onPointerup: handleSelectCustomEvent,
					onPointerdown: _cache[2] || (_cache[2] = (event) => {
						event.currentTarget.focus({ preventScroll: true });
					}),
					onTouchend: _cache[3] || (_cache[3] = withModifiers(() => {}, ["prevent", "stop"])),
					onPointermove: handlePointerMove,
					onPointerleave: handlePointerLeave,
					onKeydown: handleKeyDown
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 8, [
					"aria-labelledby",
					"data-highlighted",
					"aria-selected",
					"data-state",
					"aria-disabled",
					"data-disabled",
					"tabindex",
					"as",
					"as-child"
				])]),
				_: 3
			}, 8, ["value"]);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Select/SelectItemIndicator.js
var SelectItemIndicator_default = /* @__PURE__ */ defineComponent({
	__name: "SelectItemIndicator",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "span"
		}
	},
	setup(__props) {
		const props = __props;
		const itemContext = injectSelectItemContext();
		return (_ctx, _cache) => {
			return unref(itemContext).isSelected.value ? (openBlock(), createBlock(unref(Primitive), mergeProps({
				key: 0,
				"aria-hidden": "true"
			}, props), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16)) : createCommentVNode("v-if", true);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Select/SelectItemText.js
var SelectItemText_default = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "SelectItemText",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "span"
		}
	},
	setup(__props) {
		const props = __props;
		injectSelectRootContext();
		injectSelectContentContext();
		const itemContext = injectSelectItemContext();
		const { forwardRef, currentElement: itemTextElement } = useForwardExpose();
		computed(() => {
			return {
				value: itemContext.value,
				disabled: itemContext.disabled.value,
				textContent: itemTextElement.value?.textContent ?? itemContext.value?.toString() ?? ""
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps({
				id: unref(itemContext).textId,
				ref: unref(forwardRef)
			}, {
				...props,
				..._ctx.$attrs
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["id"]);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Select/SelectLabel.js
var SelectLabel_default = /* @__PURE__ */ defineComponent({
	__name: "SelectLabel",
	props: {
		for: {
			type: String,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "div"
		}
	},
	setup(__props) {
		const props = __props;
		const groupContext = injectSelectGroupContext({ id: "" });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, { id: unref(groupContext).id }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["id"]);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Select/SelectPortal.js
var SelectPortal_default = /* @__PURE__ */ defineComponent({
	__name: "SelectPortal",
	props: {
		to: {
			type: null,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		defer: {
			type: Boolean,
			required: false
		},
		forceMount: {
			type: Boolean,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Teleport_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Select/SelectSeparator.js
var SelectSeparator_default = /* @__PURE__ */ defineComponent({
	__name: "SelectSeparator",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps({ "aria-hidden": "true" }, props), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Select/SelectTrigger.js
var SelectTrigger_default = /* @__PURE__ */ defineComponent({
	__name: "SelectTrigger",
	props: {
		disabled: {
			type: Boolean,
			required: false
		},
		reference: {
			type: null,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "button"
		}
	},
	setup(__props) {
		const props = __props;
		const rootContext = injectSelectRootContext();
		const { forwardRef} = useForwardExpose();
		const isDisabled = computed(() => rootContext.disabled?.value || props.disabled);
		rootContext.contentId ||= useId$1(void 0, "reka-select-content");
		const { getItems } = useCollection();
		const { search, handleTypeaheadSearch, resetTypeahead } = useTypeahead();
		function handleOpen() {
			if (!isDisabled.value) {
				rootContext.onOpenChange(true);
				resetTypeahead();
			}
		}
		function handlePointerOpen(event) {
			handleOpen();
			rootContext.triggerPointerDownPosRef.value = {
				x: Math.round(event.pageX),
				y: Math.round(event.pageY)
			};
		}
		function isPlainLeftClick(event) {
			return event.button === 0 && event.ctrlKey === false;
		}
		let openedFromPointerDown = false;
		function onTriggerPointerDown(event) {
			if (event.pointerType === "touch") return event.preventDefault();
			const target = event.target;
			if (target.hasPointerCapture(event.pointerId)) target.releasePointerCapture(event.pointerId);
			if (isPlainLeftClick(event)) {
				handlePointerOpen(event);
				openedFromPointerDown = true;
			}
		}
		function onTriggerMouseDown(event) {
			if (isPlainLeftClick(event)) event.preventDefault();
		}
		function onTriggerClick(event) {
			if (!openedFromPointerDown) event.currentTarget?.focus();
			openedFromPointerDown = false;
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(PopperAnchor_default), {
				"as-child": "",
				reference: _ctx.reference
			}, {
				default: withCtx(() => [createVNode(unref(Primitive), {
					ref: unref(forwardRef),
					role: "combobox",
					type: _ctx.as === "button" ? "button" : void 0,
					"aria-controls": unref(rootContext).open.value ? unref(rootContext).contentId : void 0,
					"aria-expanded": unref(rootContext).open.value || false,
					"aria-required": unref(rootContext).required?.value,
					"aria-autocomplete": "none",
					disabled: isDisabled.value,
					dir: unref(rootContext)?.dir.value,
					"data-state": unref(rootContext)?.open.value ? "open" : "closed",
					"data-disabled": isDisabled.value ? "" : void 0,
					"data-placeholder": unref(shouldShowPlaceholder)(unref(rootContext).modelValue?.value) ? "" : void 0,
					"as-child": _ctx.asChild,
					as: _ctx.as,
					onClick: onTriggerClick,
					onPointerdown: onTriggerPointerDown,
					onMousedown: onTriggerMouseDown,
					onPointerup: _cache[0] || (_cache[0] = withModifiers((event) => {
						if (event.pointerType === "touch") handlePointerOpen(event);
					}, ["prevent"])),
					onKeydown: _cache[1] || (_cache[1] = (event) => {
						const isTypingAhead = unref(search) !== "";
						if (!(event.ctrlKey || event.altKey || event.metaKey) && event.key.length === 1) {
							if (isTypingAhead && event.key === " ") return;
						}
						unref(handleTypeaheadSearch)(event.key, unref(getItems)());
						if (unref(OPEN_KEYS).includes(event.key)) {
							handleOpen();
							event.preventDefault();
						}
					})
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 8, [
					"type",
					"aria-controls",
					"aria-expanded",
					"aria-required",
					"disabled",
					"dir",
					"data-state",
					"data-disabled",
					"data-placeholder",
					"as-child",
					"as"
				])]),
				_: 3
			}, 8, ["reference"]);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Select/SelectValue.js
var SelectValue_default = /* @__PURE__ */ defineComponent({
	__name: "SelectValue",
	props: {
		placeholder: {
			type: String,
			required: false,
			default: ""
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "span"
		}
	},
	setup(__props) {
		const props = __props;
		const { forwardRef} = useForwardExpose();
		const rootContext = injectSelectRootContext();
		const selectedLabel = computed(() => {
			let list = [];
			const options = Array.from(rootContext.optionsSet.value);
			const getOption = (value) => options.find((option) => valueComparator(value, option.value, rootContext.by));
			if (Array.isArray(rootContext.modelValue.value)) list = rootContext.modelValue.value.map((value) => getOption(value)?.textContent ?? "");
			else list = [getOption(rootContext.modelValue.value)?.textContent ?? ""];
			return list.filter(Boolean);
		});
		const slotText = computed(() => {
			return selectedLabel.value.length ? selectedLabel.value.join(", ") : props.placeholder;
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				ref: unref(forwardRef),
				as: _ctx.as,
				"as-child": _ctx.asChild,
				style: { pointerEvents: "none" },
				"data-placeholder": selectedLabel.value.length ? void 0 : props.placeholder
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
					selectedLabel: selectedLabel.value,
					modelValue: unref(rootContext).modelValue.value
				}, () => [createTextVNode(toDisplayString(slotText.value), 1)])]),
				_: 3
			}, 8, [
				"as",
				"as-child",
				"data-placeholder"
			]);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Select/SelectViewport.js
var SelectViewport_default = /* @__PURE__ */ defineComponent({
	__name: "SelectViewport",
	props: {
		nonce: {
			type: String,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		const { nonce: propNonce } = toRefs(props);
		const nonce = useNonce(propNonce);
		const alignedPositionContext = injectSelectContentContext().position === "item-aligned" ? injectSelectItemAlignedPositionContext() : void 0;
		const { forwardRef} = useForwardExpose();
		const prevScrollTopRef = ref(0);
		function handleScroll(event) {
			const viewport = event.currentTarget;
			const { shouldExpandOnScrollRef, contentWrapper } = alignedPositionContext ?? {};
			if (shouldExpandOnScrollRef?.value && contentWrapper?.value) {
				const scrolledBy = Math.abs(prevScrollTopRef.value - viewport.scrollTop);
				if (scrolledBy > 0) {
					const availableHeight = (void 0).innerHeight - 20;
					const cssMinHeight = Number.parseFloat(contentWrapper.value.style.minHeight);
					const cssHeight = Number.parseFloat(contentWrapper.value.style.height);
					const prevHeight = Math.max(cssMinHeight, cssHeight);
					if (prevHeight < availableHeight) {
						const nextHeight = prevHeight + scrolledBy;
						const clampedNextHeight = Math.min(availableHeight, nextHeight);
						const heightDiff = nextHeight - clampedNextHeight;
						contentWrapper.value.style.height = `${clampedNextHeight}px`;
						if (contentWrapper.value.style.bottom === "0px") {
							viewport.scrollTop = heightDiff > 0 ? heightDiff : 0;
							contentWrapper.value.style.justifyContent = "flex-end";
						}
					}
				}
			}
			prevScrollTopRef.value = viewport.scrollTop;
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(Primitive), mergeProps({
				ref: unref(forwardRef),
				"data-reka-select-viewport": "",
				role: "presentation"
			}, {
				..._ctx.$attrs,
				...props
			}, {
				style: {
					position: "relative",
					flex: 1,
					overflow: "hidden auto"
				},
				onScroll: handleScroll
			}), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16), createVNode(unref(Primitive), {
				as: "style",
				nonce: unref(nonce)
			}, {
				default: withCtx(() => _cache[0] || (_cache[0] = [createTextVNode(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-select-viewport]::-webkit-scrollbar { display: none; } ")])),
				_: 1,
				__: [0]
			}, 8, ["nonce"])], 64);
		};
	}
});
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Finput.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Finput_default = {
	"slots": {
		"root": "relative inline-flex items-center",
		"base": ["w-full rounded-md border-0 appearance-none placeholder:text-dimmed disabled:cursor-not-allowed disabled:opacity-75", "transition-colors"],
		"leading": "absolute inset-y-0 start-0 flex items-center",
		"leadingIcon": "shrink-0 text-dimmed",
		"leadingAvatar": "shrink-0",
		"leadingAvatarSize": "",
		"trailing": "absolute inset-y-0 end-0 flex items-center",
		"trailingIcon": "shrink-0 text-dimmed"
	},
	"variants": {
		"fieldGroup": {
			"horizontal": {
				"root": "group has-focus-visible:z-[1]",
				"base": "group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none"
			},
			"vertical": {
				"root": "group has-focus-visible:z-[1]",
				"base": "group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none"
			}
		},
		"size": {
			"xs": {
				"base": "px-2 py-1 text-sm/4 gap-1",
				"leading": "ps-2",
				"trailing": "pe-2",
				"leadingIcon": "size-4",
				"leadingAvatarSize": "3xs",
				"trailingIcon": "size-4"
			},
			"sm": {
				"base": "px-2.5 py-1.5 text-sm/4 gap-1.5",
				"leading": "ps-2.5",
				"trailing": "pe-2.5",
				"leadingIcon": "size-4",
				"leadingAvatarSize": "3xs",
				"trailingIcon": "size-4"
			},
			"md": {
				"base": "px-2.5 py-1.5 text-base/5 gap-1.5",
				"leading": "ps-2.5",
				"trailing": "pe-2.5",
				"leadingIcon": "size-5",
				"leadingAvatarSize": "2xs",
				"trailingIcon": "size-5"
			},
			"lg": {
				"base": "px-3 py-2 text-base/5 gap-2",
				"leading": "ps-3",
				"trailing": "pe-3",
				"leadingIcon": "size-5",
				"leadingAvatarSize": "2xs",
				"trailingIcon": "size-5"
			},
			"xl": {
				"base": "px-3 py-2 text-base gap-2",
				"leading": "ps-3",
				"trailing": "pe-3",
				"leadingIcon": "size-6",
				"leadingAvatarSize": "xs",
				"trailingIcon": "size-6"
			}
		},
		"variant": {
			"outline": "text-highlighted bg-default ring ring-inset ring-accented",
			"soft": "text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50",
			"subtle": "text-highlighted bg-elevated ring ring-inset ring-accented",
			"ghost": "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent",
			"none": "text-highlighted bg-transparent focus:outline-none"
		},
		"color": {
			"primary": "",
			"secondary": "",
			"success": "",
			"info": "",
			"warning": "",
			"error": "",
			"neutral": ""
		},
		"leading": { "true": "" },
		"trailing": { "true": "" },
		"loading": { "true": "" },
		"highlight": { "true": "" },
		"fixed": { "false": "" },
		"type": { "file": "file:me-1.5 file:font-medium file:text-muted file:outline-none" }
	},
	"compoundVariants": [
		{
			"color": "primary",
			"variant": ["outline", "subtle"],
			"class": "outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary"
		},
		{
			"color": "secondary",
			"variant": ["outline", "subtle"],
			"class": "outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary"
		},
		{
			"color": "success",
			"variant": ["outline", "subtle"],
			"class": "outline-success/25 focus-visible:outline-3 focus-visible:ring-success"
		},
		{
			"color": "info",
			"variant": ["outline", "subtle"],
			"class": "outline-info/25 focus-visible:outline-3 focus-visible:ring-info"
		},
		{
			"color": "warning",
			"variant": ["outline", "subtle"],
			"class": "outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning"
		},
		{
			"color": "error",
			"variant": ["outline", "subtle"],
			"class": "outline-error/25 focus-visible:outline-3 focus-visible:ring-error"
		},
		{
			"color": "primary",
			"variant": ["soft", "ghost"],
			"class": "outline-primary/25 focus-visible:outline-3"
		},
		{
			"color": "secondary",
			"variant": ["soft", "ghost"],
			"class": "outline-secondary/25 focus-visible:outline-3"
		},
		{
			"color": "success",
			"variant": ["soft", "ghost"],
			"class": "outline-success/25 focus-visible:outline-3"
		},
		{
			"color": "info",
			"variant": ["soft", "ghost"],
			"class": "outline-info/25 focus-visible:outline-3"
		},
		{
			"color": "warning",
			"variant": ["soft", "ghost"],
			"class": "outline-warning/25 focus-visible:outline-3"
		},
		{
			"color": "error",
			"variant": ["soft", "ghost"],
			"class": "outline-error/25 focus-visible:outline-3"
		},
		{
			"color": "primary",
			"highlight": true,
			"class": "ring ring-inset ring-primary"
		},
		{
			"color": "secondary",
			"highlight": true,
			"class": "ring ring-inset ring-secondary"
		},
		{
			"color": "success",
			"highlight": true,
			"class": "ring ring-inset ring-success"
		},
		{
			"color": "info",
			"highlight": true,
			"class": "ring ring-inset ring-info"
		},
		{
			"color": "warning",
			"highlight": true,
			"class": "ring ring-inset ring-warning"
		},
		{
			"color": "error",
			"highlight": true,
			"class": "ring ring-inset ring-error"
		},
		{
			"color": "neutral",
			"variant": ["outline", "subtle"],
			"class": "outline-inverted/25 focus-visible:outline-3 focus-visible:ring-inverted"
		},
		{
			"color": "neutral",
			"variant": ["soft", "ghost"],
			"class": "outline-inverted/25 focus-visible:outline-3"
		},
		{
			"color": "neutral",
			"highlight": true,
			"class": "ring ring-inset ring-inverted"
		},
		{
			"leading": true,
			"size": "xs",
			"class": "ps-7"
		},
		{
			"leading": true,
			"size": "sm",
			"class": "ps-8"
		},
		{
			"leading": true,
			"size": "md",
			"class": "ps-9"
		},
		{
			"leading": true,
			"size": "lg",
			"class": "ps-10"
		},
		{
			"leading": true,
			"size": "xl",
			"class": "ps-11"
		},
		{
			"trailing": true,
			"size": "xs",
			"class": "pe-7"
		},
		{
			"trailing": true,
			"size": "sm",
			"class": "pe-8"
		},
		{
			"trailing": true,
			"size": "md",
			"class": "pe-9"
		},
		{
			"trailing": true,
			"size": "lg",
			"class": "pe-10"
		},
		{
			"trailing": true,
			"size": "xl",
			"class": "pe-11"
		},
		{
			"loading": true,
			"leading": true,
			"class": { "leadingIcon": "animate-spin" }
		},
		{
			"loading": true,
			"leading": false,
			"trailing": true,
			"class": { "trailingIcon": "animate-spin" }
		},
		{
			"fixed": false,
			"size": "xs",
			"class": "md:text-xs"
		},
		{
			"fixed": false,
			"size": "sm",
			"class": "md:text-xs"
		},
		{
			"fixed": false,
			"size": "md",
			"class": "md:text-sm"
		},
		{
			"fixed": false,
			"size": "lg",
			"class": "md:text-sm"
		}
	],
	"defaultVariants": {
		"size": "md",
		"color": "primary",
		"variant": "outline"
	}
};
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/components/Input.vue
var _sfc_main$3 = /*@__PURE__*/ Object.assign({ inheritAttrs: false }, {
	__name: "UInput",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false
		},
		id: {
			type: String,
			required: false
		},
		name: {
			type: String,
			required: false
		},
		type: {
			type: null,
			required: false,
			default: "text"
		},
		placeholder: {
			type: String,
			required: false
		},
		color: {
			type: null,
			required: false
		},
		variant: {
			type: null,
			required: false
		},
		size: {
			type: null,
			required: false
		},
		required: {
			type: Boolean,
			required: false
		},
		autocomplete: {
			type: [String, Object],
			required: false,
			default: "off"
		},
		autofocus: {
			type: Boolean,
			required: false
		},
		autofocusDelay: {
			type: Number,
			required: false,
			default: 0
		},
		disabled: {
			type: Boolean,
			required: false
		},
		highlight: {
			type: Boolean,
			required: false
		},
		fixed: {
			type: Boolean,
			required: false
		},
		modelValue: {
			type: null,
			required: false
		},
		defaultValue: {
			type: null,
			required: false
		},
		modelModifiers: {
			type: null,
			required: false
		},
		class: {
			type: null,
			required: false
		},
		ui: {
			type: Object,
			required: false
		},
		icon: {
			type: null,
			required: false
		},
		avatar: {
			type: Object,
			required: false
		},
		leading: {
			type: Boolean,
			required: false
		},
		leadingIcon: {
			type: null,
			required: false
		},
		trailing: {
			type: Boolean,
			required: false
		},
		trailingIcon: {
			type: null,
			required: false
		},
		loading: {
			type: Boolean,
			required: false
		},
		loadingIcon: {
			type: null,
			required: false
		}
	},
	emits: [
		"update:modelValue",
		"blur",
		"change"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const _props = __props;
		const emits = __emit;
		const slots = useSlots();
		const props = useComponentProps("input", _props);
		const modelValue = useVModel(props, "modelValue", emits, { defaultValue: props.defaultValue });
		const appConfig = useAppConfig();
		const { emitFormBlur, emitFormInput, emitFormChange, size: formFieldSize, color: formFieldColor, id, name, highlight: formFieldHighlight, disabled: formFieldDisabled, emitFormFocus, ariaAttrs } = useFormField(_props, { deferInputValidation: true });
		const { orientation, size: fieldGroupSize } = useFieldGroup(_props);
		const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
		const color = computed(() => formFieldColor.value ?? props.color);
		const highlight = computed(() => formFieldHighlight.value ?? props.highlight);
		const size = computed(() => fieldGroupSize.value ?? formFieldSize.value ?? props.size);
		const disabled = computed(() => formFieldDisabled.value ?? props.disabled);
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Finput_default,
			...appConfig.ui?.input || {}
		})({
			type: props.type,
			color: color.value,
			variant: props.variant,
			size: size.value,
			loading: props.loading,
			highlight: highlight.value,
			fixed: props.fixed,
			leading: isLeading.value || !!props.avatar || !!slots.leading,
			trailing: isTrailing.value || !!slots.trailing,
			fieldGroup: orientation.value
		}));
		const inputRef = useTemplateRef("inputRef");
		function updateInput(value) {
			if (props.modelModifiers?.trim && (typeof value === "string" || value === null || value === void 0)) value = value?.trim() ?? null;
			if (props.modelModifiers?.number || props.type === "number") value = looseToNumber(value);
			if (props.modelModifiers?.nullable) value ||= null;
			if (props.modelModifiers?.optional && !props.modelModifiers?.nullable && value !== null) value ||= void 0;
			modelValue.value = value;
			emitFormInput();
		}
		function onInput(event) {
			if (!props.modelModifiers?.lazy) updateInput(event.target.value);
		}
		function onChange(event) {
			const value = event.target.value;
			if (props.modelModifiers?.lazy) updateInput(value);
			if (props.modelModifiers?.trim) event.target.value = value.trim();
			emitFormChange();
			emits("change", event);
		}
		function onBlur(event) {
			emitFormBlur();
			emits("blur", event);
		}
		let autofocusTimeoutId;
		onScopeDispose(() => clearTimeout(autofocusTimeoutId));
		__expose({ inputRef });
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Primitive), mergeProps({
				as: unref(props).as,
				"data-slot": _ctx.$attrs["data-slot"] ?? "root",
				class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] })
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<input${ssrRenderAttrs(mergeProps({
							id: unref(id),
							ref_key: "inputRef",
							ref: inputRef,
							type: unref(props).type,
							value: unref(modelValue),
							name: unref(name),
							placeholder: unref(props).placeholder,
							class: ui.value.base({ class: unref(props).ui?.base }),
							disabled: disabled.value,
							required: unref(props).required,
							autocomplete: unref(props).autocomplete
						}, {
							..._ctx.$attrs,
							...unref(ariaAttrs)
						}, { "data-slot": "base" }))}${_scopeId}>`);
						ssrRenderSlot(_ctx.$slots, "default", { ui: ui.value }, null, _push, _parent, _scopeId);
						if (unref(isLeading) || !!unref(props).avatar || !!slots.leading) {
							_push(`<span data-slot="leading" class="${ssrRenderClass(ui.value.leading({ class: unref(props).ui?.leading }))}"${_scopeId}>`);
							ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
								if (unref(isLeading) && unref(leadingIconName)) _push(ssrRenderComponent(_sfc_main$5, {
									name: unref(leadingIconName),
									"data-slot": "leadingIcon",
									class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
								}, null, _parent, _scopeId));
								else if (!!unref(props).avatar) _push(ssrRenderComponent(_sfc_main$3$1, mergeProps({ size: unref(props).ui?.leadingAvatarSize || ui.value.leadingAvatarSize() }, unref(props).avatar, {
									"data-slot": "leadingAvatar",
									class: ui.value.leadingAvatar({ class: unref(props).ui?.leadingAvatar })
								}), null, _parent, _scopeId));
								else _push(`<!---->`);
							}, _push, _parent, _scopeId);
							_push(`</span>`);
						} else _push(`<!---->`);
						if (unref(isTrailing) || !!slots.trailing) {
							_push(`<span data-slot="trailing" class="${ssrRenderClass(ui.value.trailing({ class: unref(props).ui?.trailing }))}"${_scopeId}>`);
							ssrRenderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => {
								if (unref(trailingIconName)) _push(ssrRenderComponent(_sfc_main$5, {
									name: unref(trailingIconName),
									"data-slot": "trailingIcon",
									class: ui.value.trailingIcon({ class: unref(props).ui?.trailingIcon })
								}, null, _parent, _scopeId));
								else _push(`<!---->`);
							}, _push, _parent, _scopeId);
							_push(`</span>`);
						} else _push(`<!---->`);
					} else return [
						createVNode("input", mergeProps({
							id: unref(id),
							ref_key: "inputRef",
							ref: inputRef,
							type: unref(props).type,
							value: unref(modelValue),
							name: unref(name),
							placeholder: unref(props).placeholder,
							class: ui.value.base({ class: unref(props).ui?.base }),
							disabled: disabled.value,
							required: unref(props).required,
							autocomplete: unref(props).autocomplete
						}, {
							..._ctx.$attrs,
							...unref(ariaAttrs)
						}, {
							"data-slot": "base",
							onInput,
							onBlur,
							onChange,
							onFocus: unref(emitFormFocus)
						}), null, 16, [
							"id",
							"type",
							"value",
							"name",
							"placeholder",
							"disabled",
							"required",
							"autocomplete",
							"onFocus"
						]),
						renderSlot(_ctx.$slots, "default", { ui: ui.value }),
						unref(isLeading) || !!unref(props).avatar || !!slots.leading ? (openBlock(), createBlock("span", {
							key: 0,
							"data-slot": "leading",
							class: ui.value.leading({ class: unref(props).ui?.leading })
						}, [renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$5, {
							key: 0,
							name: unref(leadingIconName),
							"data-slot": "leadingIcon",
							class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
						}, null, 8, ["name", "class"])) : !!unref(props).avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
							key: 1,
							size: unref(props).ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
						}, unref(props).avatar, {
							"data-slot": "leadingAvatar",
							class: ui.value.leadingAvatar({ class: unref(props).ui?.leadingAvatar })
						}), null, 16, ["size", "class"])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true),
						unref(isTrailing) || !!slots.trailing ? (openBlock(), createBlock("span", {
							key: 1,
							"data-slot": "trailing",
							class: ui.value.trailing({ class: unref(props).ui?.trailing })
						}, [renderSlot(_ctx.$slots, "trailing", { ui: ui.value }, () => [unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$5, {
							key: 0,
							name: unref(trailingIconName),
							"data-slot": "trailingIcon",
							class: ui.value.trailingIcon({ class: unref(props).ui?.trailingIcon })
						}, null, 8, ["name", "class"])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true)
					];
				}),
				_: 3
			}, _parent));
		};
	}
});
var _sfc_setup$6 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Input.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
//#endregion
//#region app/components/BaseInput.vue?vue&type=script&setup=true&lang.ts
var BaseInput_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	inheritAttrs: false,
	__name: "BaseInput",
	__ssrInlineRender: true,
	props: /*@__PURE__*/ mergeModels({
		type: {},
		placeholder: {},
		autocomplete: {},
		icon: {},
		required: { type: Boolean },
		width: { default: "full" }
	}, {
		"modelValue": {},
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const model = useModel(__props, "modelValue");
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(_sfc_main$3, mergeProps({
				modelValue: model.value,
				"onUpdate:modelValue": ($event) => model.value = $event
			}, _ctx.$attrs, {
				type: __props.type,
				placeholder: __props.placeholder,
				autocomplete: __props.autocomplete,
				icon: __props.icon,
				required: __props.required,
				class: __props.width === "search" ? "w-full sm:max-w-xs" : "w-full"
			}, _attrs), null, _parent));
		};
	}
});
//#endregion
//#region app/components/BaseInput.vue
var _sfc_setup$5 = BaseInput_vue_vue_type_script_setup_true_lang_default.setup;
BaseInput_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BaseInput.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var BaseInput_default = Object.assign(BaseInput_vue_vue_type_script_setup_true_lang_default, { __name: "BaseInput" });
//#endregion
//#region app/components/Table.vue?vue&type=script&setup=true&lang.ts
var Table_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "Table",
	__ssrInlineRender: true,
	props: {
		rows: {},
		columns: {},
		loading: { type: Boolean },
		emptyText: {}
	},
	setup(__props) {
		const props = __props;
		function cellValue(row, column) {
			if (column.value) return column.value(row);
			return row[column.key];
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full overflow-x-auto border border-gray-200 bg-white" }, _attrs))}><table class="w-full border-collapse text-left text-sm"><thead class="bg-gray-50/80"><tr class="border-b border-gray-100"><!--[-->`);
			ssrRenderList(props.columns, (column) => {
				_push(`<th class="h-10 px-4 text-left text-[11px] font-medium text-gray-500">${ssrInterpolate(column.label)}</th>`);
			});
			_push(`<!--]--></tr></thead><tbody>`);
			if (props.loading) _push(`<tr><td${ssrRenderAttr("colspan", props.columns.length)} class="px-4 py-8 text-center text-sm text-gray-500"> Loading… </td></tr>`);
			else if (props.rows.length === 0) _push(`<tr><td${ssrRenderAttr("colspan", props.columns.length)} class="px-4 py-8 text-center text-sm text-gray-500">${ssrInterpolate(props.emptyText || "No data found")}</td></tr>`);
			else _push(`<!---->`);
			_push(`<!--[-->`);
			ssrRenderList(props.loading || props.rows.length === 0 ? [] : props.rows, (row, index) => {
				_push(`<tr class="border-b border-gray-100 last:border-0 hover:bg-gray-50/60"><!--[-->`);
				ssrRenderList(props.columns, (column) => {
					_push(`<td class="px-4 py-3 align-middle text-gray-700">`);
					ssrRenderSlot(_ctx.$slots, column.key, {
						row,
						value: cellValue(row, column)
					}, () => {
						_push(`${ssrInterpolate(cellValue(row, column) ?? "—")}`);
					}, _push, _parent);
					_push(`</td>`);
				});
				_push(`<!--]--></tr>`);
			});
			_push(`<!--]--></tbody></table></div>`);
		};
	}
});
//#endregion
//#region app/components/Table.vue
var _sfc_setup$4 = Table_vue_vue_type_script_setup_true_lang_default.setup;
Table_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Table.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var Table_default = Object.assign(Table_vue_vue_type_script_setup_true_lang_default, { __name: "Table" });
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/utils/overlay.js
function pointerDownOutside(e, options = {}) {
	const originalEvent = e.detail.originalEvent;
	const target = originalEvent.target;
	if (!target?.isConnected) {
		e.preventDefault();
		return;
	}
	if (options.scrollable) {
		if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) e.preventDefault();
	}
}
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fmodal.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fmodal_default = {
	"slots": {
		"overlay": "fixed inset-0",
		"content": "bg-default divide-y divide-default flex flex-col focus:outline-none",
		"header": "flex items-center gap-1.5 p-4 sm:px-6 min-h-(--ui-header-height)",
		"wrapper": "",
		"body": "flex-1 p-4 sm:p-6",
		"footer": "flex items-center gap-1.5 p-4 sm:px-6",
		"title": "text-highlighted font-semibold",
		"description": "mt-1 text-muted text-sm",
		"close": "absolute top-4 end-4"
	},
	"variants": {
		"transition": { "true": {
			"overlay": "data-[state=open]:animate-[fade-in_200ms_var(--ease-out)] data-[state=closed]:animate-[fade-out_200ms_var(--ease-out)]",
			"content": "data-[state=open]:animate-[scale-in_200ms_var(--ease-out)] data-[state=closed]:animate-[scale-out_200ms_var(--ease-out)]"
		} },
		"fullscreen": {
			"true": { "content": "inset-0" },
			"false": { "content": "w-[calc(100vw-2rem)] max-w-lg rounded-lg shadow-lg ring ring-default" }
		},
		"overlay": { "true": { "overlay": "bg-elevated/75" } },
		"scrollable": {
			"true": {
				"overlay": "overflow-y-auto",
				"content": "relative"
			},
			"false": {
				"content": "fixed",
				"body": "overflow-y-auto"
			}
		}
	},
	"compoundVariants": [{
		"scrollable": true,
		"fullscreen": false,
		"class": { "overlay": "grid place-items-center p-4 sm:py-8" }
	}, {
		"scrollable": false,
		"fullscreen": false,
		"class": { "content": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)] overflow-hidden" }
	}]
};
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/components/Modal.vue
var _sfc_main$2 = {
	__name: "UModal",
	__ssrInlineRender: true,
	props: {
		title: {
			type: String,
			required: false
		},
		description: {
			type: String,
			required: false
		},
		content: {
			type: Object,
			required: false
		},
		overlay: {
			type: Boolean,
			required: false,
			default: true
		},
		scrollable: {
			type: Boolean,
			required: false
		},
		transition: {
			type: Boolean,
			required: false,
			default: true
		},
		fullscreen: {
			type: Boolean,
			required: false
		},
		portal: {
			type: [Boolean, String],
			required: false,
			skipCheck: true,
			default: true
		},
		close: {
			type: [Boolean, Object],
			required: false,
			default: true
		},
		closeIcon: {
			type: null,
			required: false
		},
		dismissible: {
			type: Boolean,
			required: false,
			default: true
		},
		class: {
			type: null,
			required: false
		},
		ui: {
			type: Object,
			required: false
		},
		open: {
			type: Boolean,
			required: false
		},
		defaultOpen: {
			type: Boolean,
			required: false
		},
		modal: {
			type: Boolean,
			required: false,
			default: true
		},
		unmountOnHide: {
			type: Boolean,
			required: false
		}
	},
	emits: [
		"leave",
		"after:leave",
		"enter",
		"after:enter",
		"close:prevent",
		"update:open"
	],
	setup(__props, { emit: __emit }) {
		const _props = __props;
		const emits = __emit;
		const slots = useSlots();
		const props = useComponentProps("modal", _props);
		const { t } = useLocale();
		const appConfig = useAppConfig();
		const rootProps = useForwardProps(reactivePick(props, "open", "defaultOpen", "modal", "unmountOnHide"), emits);
		const portalProps = usePortal(toRef(() => props.portal));
		const contentProps = toRef(() => props.content);
		const contentEvents = computed(() => {
			if (!props.dismissible) return ["interactOutside", "escapeKeyDown"].reduce((acc, curr) => {
				acc[curr] = (e) => {
					e.preventDefault();
					emits("close:prevent");
				};
				return acc;
			}, {});
			return { pointerDownOutside: (e) => pointerDownOutside(e, { scrollable: props.scrollable }) };
		});
		const [DefineContentTemplate, ReuseContentTemplate] = createReusableTemplate();
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fmodal_default,
			...appConfig.ui?.modal || {}
		})({
			transition: props.transition,
			fullscreen: props.fullscreen,
			overlay: props.overlay,
			scrollable: props.scrollable
		}));
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(DialogRoot_default), mergeProps(unref(rootProps), _attrs), {
				default: withCtx(({ open, close }, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(DefineContentTemplate), null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(unref(DialogContent_default), mergeProps({
									"data-slot": "content",
									class: ui.value.content({ class: [!slots.default && unref(props).class, unref(props).ui?.content] })
								}, contentProps.value, {
									onEnter: ($event) => !unref(props).scrollable && emits("enter"),
									onAfterEnter: ($event) => !unref(props).scrollable && emits("after:enter"),
									onLeave: ($event) => !unref(props).scrollable && emits("leave"),
									onAfterLeave: ($event) => !unref(props).scrollable && emits("after:leave")
								}, toHandlers(contentEvents.value)), {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) {
											if (!unref(props).title && !slots.title || !unref(props).description && !slots.description || !!slots.content) _push(ssrRenderComponent(unref(VisuallyHidden_default), null, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) {
														if (!unref(props).title && !slots.title) _push(ssrRenderComponent(unref(DialogTitle_default), null, null, _parent, _scopeId));
														else if (!!slots.content) _push(ssrRenderComponent(unref(DialogTitle_default), null, {
															default: withCtx((_, _push, _parent, _scopeId) => {
																if (_push) ssrRenderSlot(_ctx.$slots, "title", {}, () => {
																	_push(`${ssrInterpolate(unref(props).title)}`);
																}, _push, _parent, _scopeId);
																else return [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])];
															}),
															_: 2
														}, _parent, _scopeId));
														else _push(`<!---->`);
														if (!unref(props).description && !slots.description) _push(ssrRenderComponent(unref(DialogDescription_default), null, null, _parent, _scopeId));
														else if (!!slots.content) _push(ssrRenderComponent(unref(DialogDescription_default), null, {
															default: withCtx((_, _push, _parent, _scopeId) => {
																if (_push) ssrRenderSlot(_ctx.$slots, "description", {}, () => {
																	_push(`${ssrInterpolate(unref(props).description)}`);
																}, _push, _parent, _scopeId);
																else return [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])];
															}),
															_: 2
														}, _parent, _scopeId));
														else _push(`<!---->`);
													} else return [!unref(props).title && !slots.title ? (openBlock(), createBlock(unref(DialogTitle_default), { key: 0 })) : !!slots.content ? (openBlock(), createBlock(unref(DialogTitle_default), { key: 1 }, {
														default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
														_: 3
													})) : createCommentVNode("", true), !unref(props).description && !slots.description ? (openBlock(), createBlock(unref(DialogDescription_default), { key: 2 })) : !!slots.content ? (openBlock(), createBlock(unref(DialogDescription_default), { key: 3 }, {
														default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])]),
														_: 3
													})) : createCommentVNode("", true)];
												}),
												_: 2
											}, _parent, _scopeId));
											else _push(`<!---->`);
											ssrRenderSlot(_ctx.$slots, "content", { close }, () => {
												if (!!slots.header || unref(props).title || !!slots.title || unref(props).description || !!slots.description || unref(props).close || !!slots.close) {
													_push(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: unref(props).ui?.header }))}"${_scopeId}>`);
													ssrRenderSlot(_ctx.$slots, "header", { close }, () => {
														if (unref(props).title || !!slots.title || unref(props).description || !!slots.description) {
															_push(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: unref(props).ui?.wrapper }))}"${_scopeId}>`);
															if (unref(props).title || !!slots.title) _push(ssrRenderComponent(unref(DialogTitle_default), {
																"data-slot": "title",
																class: ui.value.title({ class: unref(props).ui?.title })
															}, {
																default: withCtx((_, _push, _parent, _scopeId) => {
																	if (_push) ssrRenderSlot(_ctx.$slots, "title", {}, () => {
																		_push(`${ssrInterpolate(unref(props).title)}`);
																	}, _push, _parent, _scopeId);
																	else return [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])];
																}),
																_: 2
															}, _parent, _scopeId));
															else _push(`<!---->`);
															if (unref(props).description || !!slots.description) _push(ssrRenderComponent(unref(DialogDescription_default), {
																"data-slot": "description",
																class: ui.value.description({ class: unref(props).ui?.description })
															}, {
																default: withCtx((_, _push, _parent, _scopeId) => {
																	if (_push) ssrRenderSlot(_ctx.$slots, "description", {}, () => {
																		_push(`${ssrInterpolate(unref(props).description)}`);
																	}, _push, _parent, _scopeId);
																	else return [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])];
																}),
																_: 2
															}, _parent, _scopeId));
															else _push(`<!---->`);
															_push(`</div>`);
														} else _push(`<!---->`);
														ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent, _scopeId);
														if (unref(props).close || !!slots.close) _push(ssrRenderComponent(unref(DialogClose_default), { "as-child": "" }, {
															default: withCtx((_, _push, _parent, _scopeId) => {
																if (_push) ssrRenderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
																	if (unref(props).close) _push(ssrRenderComponent(_sfc_main$4, mergeProps({
																		icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
																		color: "neutral",
																		variant: "ghost",
																		"aria-label": unref(t)("modal.close")
																	}, typeof unref(props).close === "object" ? unref(props).close : {}, {
																		"data-slot": "close",
																		class: ui.value.close({ class: unref(props).ui?.close })
																	}), null, _parent, _scopeId));
																	else _push(`<!---->`);
																}, _push, _parent, _scopeId);
																else return [renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [unref(props).close ? (openBlock(), createBlock(_sfc_main$4, mergeProps({
																	key: 0,
																	icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
																	color: "neutral",
																	variant: "ghost",
																	"aria-label": unref(t)("modal.close")
																}, typeof unref(props).close === "object" ? unref(props).close : {}, {
																	"data-slot": "close",
																	class: ui.value.close({ class: unref(props).ui?.close })
																}), null, 16, [
																	"icon",
																	"aria-label",
																	"class"
																])) : createCommentVNode("", true)])];
															}),
															_: 2
														}, _parent, _scopeId));
														else _push(`<!---->`);
													}, _push, _parent, _scopeId);
													_push(`</div>`);
												} else _push(`<!---->`);
												if (!!slots.body) {
													_push(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: unref(props).ui?.body }))}"${_scopeId}>`);
													ssrRenderSlot(_ctx.$slots, "body", { close }, null, _push, _parent, _scopeId);
													_push(`</div>`);
												} else _push(`<!---->`);
												if (!!slots.footer) {
													_push(`<div data-slot="footer" class="${ssrRenderClass(ui.value.footer({ class: unref(props).ui?.footer }))}"${_scopeId}>`);
													ssrRenderSlot(_ctx.$slots, "footer", { close }, null, _push, _parent, _scopeId);
													_push(`</div>`);
												} else _push(`<!---->`);
											}, _push, _parent, _scopeId);
										} else return [!unref(props).title && !slots.title || !unref(props).description && !slots.description || !!slots.content ? (openBlock(), createBlock(unref(VisuallyHidden_default), { key: 0 }, {
											default: withCtx(() => [!unref(props).title && !slots.title ? (openBlock(), createBlock(unref(DialogTitle_default), { key: 0 })) : !!slots.content ? (openBlock(), createBlock(unref(DialogTitle_default), { key: 1 }, {
												default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
												_: 3
											})) : createCommentVNode("", true), !unref(props).description && !slots.description ? (openBlock(), createBlock(unref(DialogDescription_default), { key: 2 })) : !!slots.content ? (openBlock(), createBlock(unref(DialogDescription_default), { key: 3 }, {
												default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])]),
												_: 3
											})) : createCommentVNode("", true)]),
											_: 3
										})) : createCommentVNode("", true), renderSlot(_ctx.$slots, "content", { close }, () => [
											!!slots.header || unref(props).title || !!slots.title || unref(props).description || !!slots.description || unref(props).close || !!slots.close ? (openBlock(), createBlock("div", {
												key: 0,
												"data-slot": "header",
												class: ui.value.header({ class: unref(props).ui?.header })
											}, [renderSlot(_ctx.$slots, "header", { close }, () => [
												unref(props).title || !!slots.title || unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
													key: 0,
													"data-slot": "wrapper",
													class: ui.value.wrapper({ class: unref(props).ui?.wrapper })
												}, [unref(props).title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle_default), {
													key: 0,
													"data-slot": "title",
													class: ui.value.title({ class: unref(props).ui?.title })
												}, {
													default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
													_: 3
												}, 8, ["class"])) : createCommentVNode("", true), unref(props).description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription_default), {
													key: 1,
													"data-slot": "description",
													class: ui.value.description({ class: unref(props).ui?.description })
												}, {
													default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])]),
													_: 3
												}, 8, ["class"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
												renderSlot(_ctx.$slots, "actions"),
												unref(props).close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose_default), {
													key: 1,
													"as-child": ""
												}, {
													default: withCtx(() => [renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [unref(props).close ? (openBlock(), createBlock(_sfc_main$4, mergeProps({
														key: 0,
														icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
														color: "neutral",
														variant: "ghost",
														"aria-label": unref(t)("modal.close")
													}, typeof unref(props).close === "object" ? unref(props).close : {}, {
														"data-slot": "close",
														class: ui.value.close({ class: unref(props).ui?.close })
													}), null, 16, [
														"icon",
														"aria-label",
														"class"
													])) : createCommentVNode("", true)])]),
													_: 2
												}, 1024)) : createCommentVNode("", true)
											])], 2)) : createCommentVNode("", true),
											!!slots.body ? (openBlock(), createBlock("div", {
												key: 1,
												"data-slot": "body",
												class: ui.value.body({ class: unref(props).ui?.body })
											}, [renderSlot(_ctx.$slots, "body", { close })], 2)) : createCommentVNode("", true),
											!!slots.footer ? (openBlock(), createBlock("div", {
												key: 2,
												"data-slot": "footer",
												class: ui.value.footer({ class: unref(props).ui?.footer })
											}, [renderSlot(_ctx.$slots, "footer", { close })], 2)) : createCommentVNode("", true)
										])];
									}),
									_: 2
								}, _parent, _scopeId));
								else return [createVNode(unref(DialogContent_default), mergeProps({
									"data-slot": "content",
									class: ui.value.content({ class: [!slots.default && unref(props).class, unref(props).ui?.content] })
								}, contentProps.value, {
									onEnter: ($event) => !unref(props).scrollable && emits("enter"),
									onAfterEnter: ($event) => !unref(props).scrollable && emits("after:enter"),
									onLeave: ($event) => !unref(props).scrollable && emits("leave"),
									onAfterLeave: ($event) => !unref(props).scrollable && emits("after:leave")
								}, toHandlers(contentEvents.value)), {
									default: withCtx(() => [!unref(props).title && !slots.title || !unref(props).description && !slots.description || !!slots.content ? (openBlock(), createBlock(unref(VisuallyHidden_default), { key: 0 }, {
										default: withCtx(() => [!unref(props).title && !slots.title ? (openBlock(), createBlock(unref(DialogTitle_default), { key: 0 })) : !!slots.content ? (openBlock(), createBlock(unref(DialogTitle_default), { key: 1 }, {
											default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
											_: 3
										})) : createCommentVNode("", true), !unref(props).description && !slots.description ? (openBlock(), createBlock(unref(DialogDescription_default), { key: 2 })) : !!slots.content ? (openBlock(), createBlock(unref(DialogDescription_default), { key: 3 }, {
											default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])]),
											_: 3
										})) : createCommentVNode("", true)]),
										_: 3
									})) : createCommentVNode("", true), renderSlot(_ctx.$slots, "content", { close }, () => [
										!!slots.header || unref(props).title || !!slots.title || unref(props).description || !!slots.description || unref(props).close || !!slots.close ? (openBlock(), createBlock("div", {
											key: 0,
											"data-slot": "header",
											class: ui.value.header({ class: unref(props).ui?.header })
										}, [renderSlot(_ctx.$slots, "header", { close }, () => [
											unref(props).title || !!slots.title || unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
												key: 0,
												"data-slot": "wrapper",
												class: ui.value.wrapper({ class: unref(props).ui?.wrapper })
											}, [unref(props).title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle_default), {
												key: 0,
												"data-slot": "title",
												class: ui.value.title({ class: unref(props).ui?.title })
											}, {
												default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
												_: 3
											}, 8, ["class"])) : createCommentVNode("", true), unref(props).description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription_default), {
												key: 1,
												"data-slot": "description",
												class: ui.value.description({ class: unref(props).ui?.description })
											}, {
												default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])]),
												_: 3
											}, 8, ["class"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
											renderSlot(_ctx.$slots, "actions"),
											unref(props).close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose_default), {
												key: 1,
												"as-child": ""
											}, {
												default: withCtx(() => [renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [unref(props).close ? (openBlock(), createBlock(_sfc_main$4, mergeProps({
													key: 0,
													icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
													color: "neutral",
													variant: "ghost",
													"aria-label": unref(t)("modal.close")
												}, typeof unref(props).close === "object" ? unref(props).close : {}, {
													"data-slot": "close",
													class: ui.value.close({ class: unref(props).ui?.close })
												}), null, 16, [
													"icon",
													"aria-label",
													"class"
												])) : createCommentVNode("", true)])]),
												_: 2
											}, 1024)) : createCommentVNode("", true)
										])], 2)) : createCommentVNode("", true),
										!!slots.body ? (openBlock(), createBlock("div", {
											key: 1,
											"data-slot": "body",
											class: ui.value.body({ class: unref(props).ui?.body })
										}, [renderSlot(_ctx.$slots, "body", { close })], 2)) : createCommentVNode("", true),
										!!slots.footer ? (openBlock(), createBlock("div", {
											key: 2,
											"data-slot": "footer",
											class: ui.value.footer({ class: unref(props).ui?.footer })
										}, [renderSlot(_ctx.$slots, "footer", { close })], 2)) : createCommentVNode("", true)
									])]),
									_: 2
								}, 1040, [
									"class",
									"onEnter",
									"onAfterEnter",
									"onLeave",
									"onAfterLeave"
								])];
							}),
							_: 2
						}, _parent, _scopeId));
						if (!!slots.default) _push(ssrRenderComponent(unref(DialogTrigger_default), {
							"as-child": "",
							class: unref(props).class
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push, _parent, _scopeId);
								else return [renderSlot(_ctx.$slots, "default", { open })];
							}),
							_: 2
						}, _parent, _scopeId));
						else _push(`<!---->`);
						_push(ssrRenderComponent(unref(DialogPortal_default), mergeProps(unref(portalProps), { "force-mount": unref(portalProps).disabled && unref(props).unmountOnHide === false || void 0 }), {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(unref(FieldGroupReset), null, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) {
											if (unref(props).scrollable) _push(ssrRenderComponent(unref(DialogOverlay_default), {
												"data-slot": "overlay",
												class: ui.value.overlay({ class: unref(props).ui?.overlay }),
												onEnter: ($event) => emits("enter"),
												onAfterEnter: ($event) => emits("after:enter"),
												onLeave: ($event) => emits("leave"),
												onAfterLeave: ($event) => emits("after:leave")
											}, {
												default: withCtx((_, _push, _parent, _scopeId) => {
													if (_push) _push(ssrRenderComponent(unref(ReuseContentTemplate), null, null, _parent, _scopeId));
													else return [createVNode(unref(ReuseContentTemplate))];
												}),
												_: 2
											}, _parent, _scopeId));
											else {
												_push(`<!--[-->`);
												if (unref(props).overlay) _push(ssrRenderComponent(unref(DialogOverlay_default), {
													"data-slot": "overlay",
													class: ui.value.overlay({ class: unref(props).ui?.overlay })
												}, null, _parent, _scopeId));
												else _push(`<!---->`);
												_push(ssrRenderComponent(unref(ReuseContentTemplate), null, null, _parent, _scopeId));
												_push(`<!--]-->`);
											}
										} else return [unref(props).scrollable ? (openBlock(), createBlock(unref(DialogOverlay_default), {
											key: 0,
											"data-slot": "overlay",
											class: ui.value.overlay({ class: unref(props).ui?.overlay }),
											onEnter: ($event) => emits("enter"),
											onAfterEnter: ($event) => emits("after:enter"),
											onLeave: ($event) => emits("leave"),
											onAfterLeave: ($event) => emits("after:leave")
										}, {
											default: withCtx(() => [createVNode(unref(ReuseContentTemplate))]),
											_: 1
										}, 8, [
											"class",
											"onEnter",
											"onAfterEnter",
											"onLeave",
											"onAfterLeave"
										])) : (openBlock(), createBlock(Fragment, { key: 1 }, [unref(props).overlay ? (openBlock(), createBlock(unref(DialogOverlay_default), {
											key: 0,
											"data-slot": "overlay",
											class: ui.value.overlay({ class: unref(props).ui?.overlay })
										}, null, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(ReuseContentTemplate))], 64))];
									}),
									_: 2
								}, _parent, _scopeId));
								else return [createVNode(unref(FieldGroupReset), null, {
									default: withCtx(() => [unref(props).scrollable ? (openBlock(), createBlock(unref(DialogOverlay_default), {
										key: 0,
										"data-slot": "overlay",
										class: ui.value.overlay({ class: unref(props).ui?.overlay }),
										onEnter: ($event) => emits("enter"),
										onAfterEnter: ($event) => emits("after:enter"),
										onLeave: ($event) => emits("leave"),
										onAfterLeave: ($event) => emits("after:leave")
									}, {
										default: withCtx(() => [createVNode(unref(ReuseContentTemplate))]),
										_: 1
									}, 8, [
										"class",
										"onEnter",
										"onAfterEnter",
										"onLeave",
										"onAfterLeave"
									])) : (openBlock(), createBlock(Fragment, { key: 1 }, [unref(props).overlay ? (openBlock(), createBlock(unref(DialogOverlay_default), {
										key: 0,
										"data-slot": "overlay",
										class: ui.value.overlay({ class: unref(props).ui?.overlay })
									}, null, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(ReuseContentTemplate))], 64))]),
									_: 1
								})];
							}),
							_: 2
						}, _parent, _scopeId));
					} else return [
						createVNode(unref(DefineContentTemplate), null, {
							default: withCtx(() => [createVNode(unref(DialogContent_default), mergeProps({
								"data-slot": "content",
								class: ui.value.content({ class: [!slots.default && unref(props).class, unref(props).ui?.content] })
							}, contentProps.value, {
								onEnter: ($event) => !unref(props).scrollable && emits("enter"),
								onAfterEnter: ($event) => !unref(props).scrollable && emits("after:enter"),
								onLeave: ($event) => !unref(props).scrollable && emits("leave"),
								onAfterLeave: ($event) => !unref(props).scrollable && emits("after:leave")
							}, toHandlers(contentEvents.value)), {
								default: withCtx(() => [!unref(props).title && !slots.title || !unref(props).description && !slots.description || !!slots.content ? (openBlock(), createBlock(unref(VisuallyHidden_default), { key: 0 }, {
									default: withCtx(() => [!unref(props).title && !slots.title ? (openBlock(), createBlock(unref(DialogTitle_default), { key: 0 })) : !!slots.content ? (openBlock(), createBlock(unref(DialogTitle_default), { key: 1 }, {
										default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
										_: 3
									})) : createCommentVNode("", true), !unref(props).description && !slots.description ? (openBlock(), createBlock(unref(DialogDescription_default), { key: 2 })) : !!slots.content ? (openBlock(), createBlock(unref(DialogDescription_default), { key: 3 }, {
										default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])]),
										_: 3
									})) : createCommentVNode("", true)]),
									_: 3
								})) : createCommentVNode("", true), renderSlot(_ctx.$slots, "content", { close }, () => [
									!!slots.header || unref(props).title || !!slots.title || unref(props).description || !!slots.description || unref(props).close || !!slots.close ? (openBlock(), createBlock("div", {
										key: 0,
										"data-slot": "header",
										class: ui.value.header({ class: unref(props).ui?.header })
									}, [renderSlot(_ctx.$slots, "header", { close }, () => [
										unref(props).title || !!slots.title || unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
											key: 0,
											"data-slot": "wrapper",
											class: ui.value.wrapper({ class: unref(props).ui?.wrapper })
										}, [unref(props).title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle_default), {
											key: 0,
											"data-slot": "title",
											class: ui.value.title({ class: unref(props).ui?.title })
										}, {
											default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])]),
											_: 3
										}, 8, ["class"])) : createCommentVNode("", true), unref(props).description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription_default), {
											key: 1,
											"data-slot": "description",
											class: ui.value.description({ class: unref(props).ui?.description })
										}, {
											default: withCtx(() => [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])]),
											_: 3
										}, 8, ["class"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
										renderSlot(_ctx.$slots, "actions"),
										unref(props).close || !!slots.close ? (openBlock(), createBlock(unref(DialogClose_default), {
											key: 1,
											"as-child": ""
										}, {
											default: withCtx(() => [renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [unref(props).close ? (openBlock(), createBlock(_sfc_main$4, mergeProps({
												key: 0,
												icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
												color: "neutral",
												variant: "ghost",
												"aria-label": unref(t)("modal.close")
											}, typeof unref(props).close === "object" ? unref(props).close : {}, {
												"data-slot": "close",
												class: ui.value.close({ class: unref(props).ui?.close })
											}), null, 16, [
												"icon",
												"aria-label",
												"class"
											])) : createCommentVNode("", true)])]),
											_: 2
										}, 1024)) : createCommentVNode("", true)
									])], 2)) : createCommentVNode("", true),
									!!slots.body ? (openBlock(), createBlock("div", {
										key: 1,
										"data-slot": "body",
										class: ui.value.body({ class: unref(props).ui?.body })
									}, [renderSlot(_ctx.$slots, "body", { close })], 2)) : createCommentVNode("", true),
									!!slots.footer ? (openBlock(), createBlock("div", {
										key: 2,
										"data-slot": "footer",
										class: ui.value.footer({ class: unref(props).ui?.footer })
									}, [renderSlot(_ctx.$slots, "footer", { close })], 2)) : createCommentVNode("", true)
								])]),
								_: 2
							}, 1040, [
								"class",
								"onEnter",
								"onAfterEnter",
								"onLeave",
								"onAfterLeave"
							])]),
							_: 2
						}, 1024),
						!!slots.default ? (openBlock(), createBlock(unref(DialogTrigger_default), {
							key: 0,
							"as-child": "",
							class: unref(props).class
						}, {
							default: withCtx(() => [renderSlot(_ctx.$slots, "default", { open })]),
							_: 2
						}, 1032, ["class"])) : createCommentVNode("", true),
						createVNode(unref(DialogPortal_default), mergeProps(unref(portalProps), { "force-mount": unref(portalProps).disabled && unref(props).unmountOnHide === false || void 0 }), {
							default: withCtx(() => [createVNode(unref(FieldGroupReset), null, {
								default: withCtx(() => [unref(props).scrollable ? (openBlock(), createBlock(unref(DialogOverlay_default), {
									key: 0,
									"data-slot": "overlay",
									class: ui.value.overlay({ class: unref(props).ui?.overlay }),
									onEnter: ($event) => emits("enter"),
									onAfterEnter: ($event) => emits("after:enter"),
									onLeave: ($event) => emits("leave"),
									onAfterLeave: ($event) => emits("after:leave")
								}, {
									default: withCtx(() => [createVNode(unref(ReuseContentTemplate))]),
									_: 1
								}, 8, [
									"class",
									"onEnter",
									"onAfterEnter",
									"onLeave",
									"onAfterLeave"
								])) : (openBlock(), createBlock(Fragment, { key: 1 }, [unref(props).overlay ? (openBlock(), createBlock(unref(DialogOverlay_default), {
									key: 0,
									"data-slot": "overlay",
									class: ui.value.overlay({ class: unref(props).ui?.overlay })
								}, null, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(ReuseContentTemplate))], 64))]),
								_: 1
							})]),
							_: 1
						}, 16, ["force-mount"])
					];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$3 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Modal.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Falert.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Falert_default = {
	"slots": {
		"root": "relative overflow-hidden w-full rounded-lg p-4 flex gap-2.5",
		"wrapper": "min-w-0 flex-1 flex flex-col",
		"title": "text-sm font-medium",
		"description": "text-sm opacity-90",
		"icon": "shrink-0 size-5",
		"avatar": "shrink-0",
		"avatarSize": "2xl",
		"actions": "flex flex-wrap gap-1.5 shrink-0",
		"close": "p-0"
	},
	"variants": {
		"color": {
			"primary": "",
			"secondary": "",
			"success": "",
			"info": "",
			"warning": "",
			"error": "",
			"neutral": ""
		},
		"variant": {
			"solid": "",
			"outline": "",
			"soft": "",
			"subtle": ""
		},
		"orientation": {
			"horizontal": {
				"root": "items-center",
				"actions": "items-center"
			},
			"vertical": {
				"root": "items-start",
				"actions": "items-start mt-2.5"
			}
		},
		"title": { "true": { "description": "mt-1" } }
	},
	"compoundVariants": [
		{
			"color": "primary",
			"variant": "solid",
			"class": { "root": "bg-primary text-inverted" }
		},
		{
			"color": "secondary",
			"variant": "solid",
			"class": { "root": "bg-secondary text-inverted" }
		},
		{
			"color": "success",
			"variant": "solid",
			"class": { "root": "bg-success text-inverted" }
		},
		{
			"color": "info",
			"variant": "solid",
			"class": { "root": "bg-info text-inverted" }
		},
		{
			"color": "warning",
			"variant": "solid",
			"class": { "root": "bg-warning text-inverted" }
		},
		{
			"color": "error",
			"variant": "solid",
			"class": { "root": "bg-error text-inverted" }
		},
		{
			"color": "primary",
			"variant": "outline",
			"class": { "root": "text-primary ring ring-inset ring-primary/25" }
		},
		{
			"color": "secondary",
			"variant": "outline",
			"class": { "root": "text-secondary ring ring-inset ring-secondary/25" }
		},
		{
			"color": "success",
			"variant": "outline",
			"class": { "root": "text-success ring ring-inset ring-success/25" }
		},
		{
			"color": "info",
			"variant": "outline",
			"class": { "root": "text-info ring ring-inset ring-info/25" }
		},
		{
			"color": "warning",
			"variant": "outline",
			"class": { "root": "text-warning ring ring-inset ring-warning/25" }
		},
		{
			"color": "error",
			"variant": "outline",
			"class": { "root": "text-error ring ring-inset ring-error/25" }
		},
		{
			"color": "primary",
			"variant": "soft",
			"class": { "root": "bg-primary/10 text-primary" }
		},
		{
			"color": "secondary",
			"variant": "soft",
			"class": { "root": "bg-secondary/10 text-secondary" }
		},
		{
			"color": "success",
			"variant": "soft",
			"class": { "root": "bg-success/10 text-success" }
		},
		{
			"color": "info",
			"variant": "soft",
			"class": { "root": "bg-info/10 text-info" }
		},
		{
			"color": "warning",
			"variant": "soft",
			"class": { "root": "bg-warning/10 text-warning" }
		},
		{
			"color": "error",
			"variant": "soft",
			"class": { "root": "bg-error/10 text-error" }
		},
		{
			"color": "primary",
			"variant": "subtle",
			"class": { "root": "bg-primary/10 text-primary ring ring-inset ring-primary/25" }
		},
		{
			"color": "secondary",
			"variant": "subtle",
			"class": { "root": "bg-secondary/10 text-secondary ring ring-inset ring-secondary/25" }
		},
		{
			"color": "success",
			"variant": "subtle",
			"class": { "root": "bg-success/10 text-success ring ring-inset ring-success/25" }
		},
		{
			"color": "info",
			"variant": "subtle",
			"class": { "root": "bg-info/10 text-info ring ring-inset ring-info/25" }
		},
		{
			"color": "warning",
			"variant": "subtle",
			"class": { "root": "bg-warning/10 text-warning ring ring-inset ring-warning/25" }
		},
		{
			"color": "error",
			"variant": "subtle",
			"class": { "root": "bg-error/10 text-error ring ring-inset ring-error/25" }
		},
		{
			"color": "neutral",
			"variant": "solid",
			"class": { "root": "text-inverted bg-inverted" }
		},
		{
			"color": "neutral",
			"variant": "outline",
			"class": { "root": "text-highlighted bg-default ring ring-inset ring-default" }
		},
		{
			"color": "neutral",
			"variant": "soft",
			"class": { "root": "text-highlighted bg-elevated/50" }
		},
		{
			"color": "neutral",
			"variant": "subtle",
			"class": { "root": "text-highlighted bg-elevated/50 ring ring-inset ring-accented" }
		}
	],
	"defaultVariants": {
		"color": "primary",
		"variant": "solid"
	}
};
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/components/Alert.vue
var _sfc_main$1 = {
	__name: "UAlert",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false
		},
		title: {
			type: String,
			required: false
		},
		description: {
			type: String,
			required: false
		},
		icon: {
			type: null,
			required: false
		},
		avatar: {
			type: Object,
			required: false
		},
		color: {
			type: null,
			required: false
		},
		variant: {
			type: null,
			required: false
		},
		orientation: {
			type: null,
			required: false,
			default: "vertical"
		},
		actions: {
			type: Array,
			required: false
		},
		close: {
			type: [Boolean, Object],
			required: false
		},
		closeIcon: {
			type: null,
			required: false
		},
		class: {
			type: null,
			required: false
		},
		ui: {
			type: Object,
			required: false
		}
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const _props = __props;
		const emits = __emit;
		const slots = useSlots();
		const props = useComponentProps("alert", _props);
		const { t } = useLocale();
		const appConfig = useAppConfig();
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Falert_default,
			...appConfig.ui?.alert || {}
		})({
			color: props.color,
			variant: props.variant,
			orientation: props.orientation,
			title: !!props.title || !!slots.title
		}));
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Primitive), mergeProps({
				as: unref(props).as,
				"data-orientation": unref(props).orientation,
				"data-slot": "root",
				class: ui.value.root({ class: [unref(props).ui?.root, unref(props).class] })
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						ssrRenderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => {
							if (unref(props).avatar) _push(ssrRenderComponent(_sfc_main$3$1, mergeProps({ size: unref(props).ui?.avatarSize || ui.value.avatarSize() }, unref(props).avatar, {
								"data-slot": "avatar",
								class: ui.value.avatar({ class: unref(props).ui?.avatar })
							}), null, _parent, _scopeId));
							else if (unref(props).icon) _push(ssrRenderComponent(_sfc_main$5, {
								name: unref(props).icon,
								"data-slot": "icon",
								class: ui.value.icon({ class: unref(props).ui?.icon })
							}, null, _parent, _scopeId));
							else _push(`<!---->`);
						}, _push, _parent, _scopeId);
						_push(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: unref(props).ui?.wrapper }))}"${_scopeId}>`);
						if (unref(props).title || !!slots.title) {
							_push(`<div data-slot="title" class="${ssrRenderClass(ui.value.title({ class: unref(props).ui?.title }))}"${_scopeId}>`);
							ssrRenderSlot(_ctx.$slots, "title", {}, () => {
								_push(`${ssrInterpolate(unref(props).title)}`);
							}, _push, _parent, _scopeId);
							_push(`</div>`);
						} else _push(`<!---->`);
						if (unref(props).description || !!slots.description) {
							_push(`<div data-slot="description" class="${ssrRenderClass(ui.value.description({ class: unref(props).ui?.description }))}"${_scopeId}>`);
							ssrRenderSlot(_ctx.$slots, "description", {}, () => {
								_push(`${ssrInterpolate(unref(props).description)}`);
							}, _push, _parent, _scopeId);
							_push(`</div>`);
						} else _push(`<!---->`);
						if (unref(props).orientation === "vertical" && (unref(props).actions?.length || !!slots.actions)) {
							_push(`<div data-slot="actions" class="${ssrRenderClass(ui.value.actions({ class: unref(props).ui?.actions }))}"${_scopeId}>`);
							ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
								_push(`<!--[-->`);
								ssrRenderList(unref(props).actions, (action, index) => {
									_push(ssrRenderComponent(_sfc_main$4, mergeProps({
										key: index,
										size: "xs"
									}, { ref_for: true }, action), null, _parent, _scopeId));
								});
								_push(`<!--]-->`);
							}, _push, _parent, _scopeId);
							_push(`</div>`);
						} else _push(`<!---->`);
						_push(`</div>`);
						if (unref(props).orientation === "horizontal" && (unref(props).actions?.length || !!slots.actions) || unref(props).close) {
							_push(`<div data-slot="actions" class="${ssrRenderClass(ui.value.actions({
								class: unref(props).ui?.actions,
								orientation: "horizontal"
							}))}"${_scopeId}>`);
							if (unref(props).orientation === "horizontal" && (unref(props).actions?.length || !!slots.actions)) ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
								_push(`<!--[-->`);
								ssrRenderList(unref(props).actions, (action, index) => {
									_push(ssrRenderComponent(_sfc_main$4, mergeProps({
										key: index,
										size: "xs"
									}, { ref_for: true }, action), null, _parent, _scopeId));
								});
								_push(`<!--]-->`);
							}, _push, _parent, _scopeId);
							else _push(`<!---->`);
							ssrRenderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
								if (unref(props).close) _push(ssrRenderComponent(_sfc_main$4, mergeProps({
									icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
									color: "neutral",
									variant: "link",
									"aria-label": unref(t)("alert.close")
								}, typeof unref(props).close === "object" ? unref(props).close : {}, {
									"data-slot": "close",
									class: ui.value.close({ class: unref(props).ui?.close }),
									onClick: ($event) => emits("update:open", false)
								}), null, _parent, _scopeId));
								else _push(`<!---->`);
							}, _push, _parent, _scopeId);
							_push(`</div>`);
						} else _push(`<!---->`);
					} else return [
						renderSlot(_ctx.$slots, "leading", { ui: ui.value }, () => [unref(props).avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
							key: 0,
							size: unref(props).ui?.avatarSize || ui.value.avatarSize()
						}, unref(props).avatar, {
							"data-slot": "avatar",
							class: ui.value.avatar({ class: unref(props).ui?.avatar })
						}), null, 16, ["size", "class"])) : unref(props).icon ? (openBlock(), createBlock(_sfc_main$5, {
							key: 1,
							name: unref(props).icon,
							"data-slot": "icon",
							class: ui.value.icon({ class: unref(props).ui?.icon })
						}, null, 8, ["name", "class"])) : createCommentVNode("", true)]),
						createVNode("div", {
							"data-slot": "wrapper",
							class: ui.value.wrapper({ class: unref(props).ui?.wrapper })
						}, [
							unref(props).title || !!slots.title ? (openBlock(), createBlock("div", {
								key: 0,
								"data-slot": "title",
								class: ui.value.title({ class: unref(props).ui?.title })
							}, [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(unref(props).title), 1)])], 2)) : createCommentVNode("", true),
							unref(props).description || !!slots.description ? (openBlock(), createBlock("div", {
								key: 1,
								"data-slot": "description",
								class: ui.value.description({ class: unref(props).ui?.description })
							}, [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(unref(props).description), 1)])], 2)) : createCommentVNode("", true),
							unref(props).orientation === "vertical" && (unref(props).actions?.length || !!slots.actions) ? (openBlock(), createBlock("div", {
								key: 2,
								"data-slot": "actions",
								class: ui.value.actions({ class: unref(props).ui?.actions })
							}, [renderSlot(_ctx.$slots, "actions", {}, () => [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).actions, (action, index) => {
								return openBlock(), createBlock(_sfc_main$4, mergeProps({
									key: index,
									size: "xs"
								}, { ref_for: true }, action), null, 16);
							}), 128))])], 2)) : createCommentVNode("", true)
						], 2),
						unref(props).orientation === "horizontal" && (unref(props).actions?.length || !!slots.actions) || unref(props).close ? (openBlock(), createBlock("div", {
							key: 0,
							"data-slot": "actions",
							class: ui.value.actions({
								class: unref(props).ui?.actions,
								orientation: "horizontal"
							})
						}, [unref(props).orientation === "horizontal" && (unref(props).actions?.length || !!slots.actions) ? renderSlot(_ctx.$slots, "actions", {}, () => [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).actions, (action, index) => {
							return openBlock(), createBlock(_sfc_main$4, mergeProps({
								key: index,
								size: "xs"
							}, { ref_for: true }, action), null, 16);
						}), 128))], void 0, 0) : createCommentVNode("", true), renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => [unref(props).close ? (openBlock(), createBlock(_sfc_main$4, mergeProps({
							key: 0,
							icon: unref(props).closeIcon || unref(appConfig).ui.icons.close,
							color: "neutral",
							variant: "link",
							"aria-label": unref(t)("alert.close")
						}, typeof unref(props).close === "object" ? unref(props).close : {}, {
							"data-slot": "close",
							class: ui.value.close({ class: unref(props).ui?.close }),
							onClick: ($event) => emits("update:open", false)
						}), null, 16, [
							"icon",
							"aria-label",
							"class",
							"onClick"
						])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true)
					];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$2 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Alert.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fselect.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fselect_default = {
	"slots": {
		"base": ["relative group rounded-md inline-flex items-center disabled:cursor-not-allowed disabled:opacity-75", "transition-colors"],
		"leading": "absolute inset-y-0 start-0 flex items-center",
		"leadingIcon": "shrink-0 text-dimmed",
		"leadingAvatar": "shrink-0",
		"leadingAvatarSize": "",
		"trailing": "absolute inset-y-0 end-0 flex items-center",
		"trailingIcon": "shrink-0 text-dimmed",
		"value": "truncate pointer-events-none",
		"placeholder": "truncate text-dimmed",
		"arrow": "fill-bg stroke-default",
		"content": "max-h-[min(15rem,var(--reka-select-content-available-height,15rem))] w-(--reka-select-trigger-width) bg-default shadow-lg rounded-md ring ring-default overflow-hidden origin-(--reka-select-content-transform-origin) pointer-events-auto flex flex-col",
		"viewport": "relative divide-y divide-default scroll-py-1 overflow-y-auto flex-1",
		"group": "p-1 isolate",
		"empty": "text-center text-muted",
		"label": "font-semibold text-highlighted",
		"separator": "-mx-1 my-1 h-px bg-border",
		"item": ["group relative w-full flex items-start select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75 text-default data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-elevated/50", "transition-colors before:transition-colors"],
		"itemLeadingIcon": ["shrink-0 text-dimmed group-data-highlighted:not-group-data-disabled:text-default", "transition-colors"],
		"itemLeadingAvatar": "shrink-0",
		"itemLeadingAvatarSize": "",
		"itemLeadingChip": "shrink-0",
		"itemLeadingChipSize": "",
		"itemTrailing": "ms-auto inline-flex gap-1.5 items-center",
		"itemTrailingIcon": "shrink-0",
		"itemWrapper": "flex-1 flex flex-col min-w-0",
		"itemLabel": "truncate",
		"itemDescription": "truncate text-muted"
	},
	"variants": {
		"fieldGroup": {
			"horizontal": "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]",
			"vertical": "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]"
		},
		"size": {
			"xs": {
				"base": "px-2 py-1 text-sm/4 gap-1",
				"leading": "ps-2",
				"trailing": "pe-2",
				"leadingIcon": "size-4",
				"leadingAvatarSize": "3xs",
				"trailingIcon": "size-4",
				"label": "p-1 text-[10px]/3 gap-1",
				"item": "p-1 text-xs gap-1",
				"itemLeadingIcon": "size-4",
				"itemLeadingAvatarSize": "3xs",
				"itemLeadingChip": "size-4",
				"itemLeadingChipSize": "sm",
				"itemTrailingIcon": "size-4",
				"empty": "p-2 text-xs"
			},
			"sm": {
				"base": "px-2.5 py-1.5 text-sm/4 gap-1.5",
				"leading": "ps-2.5",
				"trailing": "pe-2.5",
				"leadingIcon": "size-4",
				"leadingAvatarSize": "3xs",
				"trailingIcon": "size-4",
				"label": "p-1.5 text-[10px]/3 gap-1.5",
				"item": "p-1.5 text-xs gap-1.5",
				"itemLeadingIcon": "size-4",
				"itemLeadingAvatarSize": "3xs",
				"itemLeadingChip": "size-4",
				"itemLeadingChipSize": "sm",
				"itemTrailingIcon": "size-4",
				"empty": "p-2.5 text-xs"
			},
			"md": {
				"base": "px-2.5 py-1.5 text-base/5 gap-1.5",
				"leading": "ps-2.5",
				"trailing": "pe-2.5",
				"leadingIcon": "size-5",
				"leadingAvatarSize": "2xs",
				"trailingIcon": "size-5",
				"label": "p-1.5 text-xs gap-1.5",
				"item": "p-1.5 text-sm gap-1.5",
				"itemLeadingIcon": "size-5",
				"itemLeadingAvatarSize": "2xs",
				"itemLeadingChip": "size-5",
				"itemLeadingChipSize": "md",
				"itemTrailingIcon": "size-5",
				"empty": "p-2.5 text-sm"
			},
			"lg": {
				"base": "px-3 py-2 text-base/5 gap-2",
				"leading": "ps-3",
				"trailing": "pe-3",
				"leadingIcon": "size-5",
				"leadingAvatarSize": "2xs",
				"trailingIcon": "size-5",
				"label": "p-2 text-xs gap-2",
				"item": "p-2 text-sm gap-2",
				"itemLeadingIcon": "size-5",
				"itemLeadingAvatarSize": "2xs",
				"itemLeadingChip": "size-5",
				"itemLeadingChipSize": "md",
				"itemTrailingIcon": "size-5",
				"empty": "p-3 text-sm"
			},
			"xl": {
				"base": "px-3 py-2 text-base gap-2",
				"leading": "ps-3",
				"trailing": "pe-3",
				"leadingIcon": "size-6",
				"leadingAvatarSize": "xs",
				"trailingIcon": "size-6",
				"label": "p-2 text-sm gap-2",
				"item": "p-2 text-base gap-2",
				"itemLeadingIcon": "size-6",
				"itemLeadingAvatarSize": "xs",
				"itemLeadingChip": "size-6",
				"itemLeadingChipSize": "lg",
				"itemTrailingIcon": "size-6",
				"empty": "p-3 text-base"
			}
		},
		"variant": {
			"outline": "text-highlighted bg-default ring ring-inset ring-accented hover:bg-elevated disabled:bg-default",
			"soft": "text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50",
			"subtle": "text-highlighted bg-elevated ring ring-inset ring-accented hover:bg-accented/75 disabled:bg-elevated",
			"ghost": "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent",
			"none": "text-highlighted bg-transparent focus:outline-none"
		},
		"color": {
			"primary": "",
			"secondary": "",
			"success": "",
			"info": "",
			"warning": "",
			"error": "",
			"neutral": ""
		},
		"leading": { "true": "" },
		"trailing": { "true": "" },
		"loading": { "true": "" },
		"highlight": { "true": "" },
		"fixed": { "false": "" },
		"type": { "file": "file:me-1.5 file:font-medium file:text-muted file:outline-none" },
		"position": {
			"popper": { "content": "data-[state=open]:animate-[scale-in_100ms_var(--ease-out)] data-[state=closed]:animate-[scale-out_100ms_var(--ease-out)]" },
			"item-aligned": { "content": "" }
		},
		"multiple": { "true": "" }
	},
	"compoundVariants": [
		{
			"color": "primary",
			"variant": ["outline", "subtle"],
			"class": "outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary"
		},
		{
			"color": "secondary",
			"variant": ["outline", "subtle"],
			"class": "outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary"
		},
		{
			"color": "success",
			"variant": ["outline", "subtle"],
			"class": "outline-success/25 focus-visible:outline-3 focus-visible:ring-success"
		},
		{
			"color": "info",
			"variant": ["outline", "subtle"],
			"class": "outline-info/25 focus-visible:outline-3 focus-visible:ring-info"
		},
		{
			"color": "warning",
			"variant": ["outline", "subtle"],
			"class": "outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning"
		},
		{
			"color": "error",
			"variant": ["outline", "subtle"],
			"class": "outline-error/25 focus-visible:outline-3 focus-visible:ring-error"
		},
		{
			"color": "primary",
			"variant": ["soft", "ghost"],
			"class": "outline-primary/25 focus-visible:outline-3"
		},
		{
			"color": "secondary",
			"variant": ["soft", "ghost"],
			"class": "outline-secondary/25 focus-visible:outline-3"
		},
		{
			"color": "success",
			"variant": ["soft", "ghost"],
			"class": "outline-success/25 focus-visible:outline-3"
		},
		{
			"color": "info",
			"variant": ["soft", "ghost"],
			"class": "outline-info/25 focus-visible:outline-3"
		},
		{
			"color": "warning",
			"variant": ["soft", "ghost"],
			"class": "outline-warning/25 focus-visible:outline-3"
		},
		{
			"color": "error",
			"variant": ["soft", "ghost"],
			"class": "outline-error/25 focus-visible:outline-3"
		},
		{
			"color": "primary",
			"highlight": true,
			"class": "ring ring-inset ring-primary"
		},
		{
			"color": "secondary",
			"highlight": true,
			"class": "ring ring-inset ring-secondary"
		},
		{
			"color": "success",
			"highlight": true,
			"class": "ring ring-inset ring-success"
		},
		{
			"color": "info",
			"highlight": true,
			"class": "ring ring-inset ring-info"
		},
		{
			"color": "warning",
			"highlight": true,
			"class": "ring ring-inset ring-warning"
		},
		{
			"color": "error",
			"highlight": true,
			"class": "ring ring-inset ring-error"
		},
		{
			"color": "neutral",
			"variant": ["outline", "subtle"],
			"class": "outline-inverted/25 focus-visible:outline-3 focus-visible:ring-inverted"
		},
		{
			"color": "neutral",
			"variant": ["soft", "ghost"],
			"class": "outline-inverted/25 focus-visible:outline-3"
		},
		{
			"color": "neutral",
			"highlight": true,
			"class": "ring ring-inset ring-inverted"
		},
		{
			"leading": true,
			"size": "xs",
			"class": "ps-7"
		},
		{
			"leading": true,
			"size": "sm",
			"class": "ps-8"
		},
		{
			"leading": true,
			"size": "md",
			"class": "ps-9"
		},
		{
			"leading": true,
			"size": "lg",
			"class": "ps-10"
		},
		{
			"leading": true,
			"size": "xl",
			"class": "ps-11"
		},
		{
			"trailing": true,
			"size": "xs",
			"class": "pe-7"
		},
		{
			"trailing": true,
			"size": "sm",
			"class": "pe-8"
		},
		{
			"trailing": true,
			"size": "md",
			"class": "pe-9"
		},
		{
			"trailing": true,
			"size": "lg",
			"class": "pe-10"
		},
		{
			"trailing": true,
			"size": "xl",
			"class": "pe-11"
		},
		{
			"loading": true,
			"leading": true,
			"class": { "leadingIcon": "animate-spin" }
		},
		{
			"loading": true,
			"leading": false,
			"trailing": true,
			"class": { "trailingIcon": "animate-spin" }
		},
		{
			"fixed": false,
			"size": "xs",
			"class": "md:text-xs"
		},
		{
			"fixed": false,
			"size": "sm",
			"class": "md:text-xs"
		},
		{
			"fixed": false,
			"size": "md",
			"class": "md:text-sm"
		},
		{
			"fixed": false,
			"size": "lg",
			"class": "md:text-sm"
		}
	],
	"defaultVariants": {
		"size": "md",
		"color": "primary",
		"variant": "outline",
		"position": "popper"
	}
};
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/components/Select.vue
var _sfc_main = /*@__PURE__*/ Object.assign({ inheritAttrs: false }, {
	__name: "USelect",
	__ssrInlineRender: true,
	props: {
		id: {
			type: String,
			required: false
		},
		placeholder: {
			type: String,
			required: false
		},
		color: {
			type: null,
			required: false
		},
		variant: {
			type: null,
			required: false
		},
		size: {
			type: null,
			required: false
		},
		trailingIcon: {
			type: null,
			required: false
		},
		selectedIcon: {
			type: null,
			required: false
		},
		content: {
			type: Object,
			required: false
		},
		arrow: {
			type: [Boolean, Object],
			required: false
		},
		portal: {
			type: [Boolean, String],
			required: false,
			skipCheck: true,
			default: true
		},
		valueKey: {
			type: null,
			required: false,
			default: "value"
		},
		labelKey: {
			type: null,
			required: false,
			default: "label"
		},
		descriptionKey: {
			type: null,
			required: false,
			default: "description"
		},
		items: {
			type: null,
			required: false
		},
		defaultValue: {
			type: null,
			required: false
		},
		modelValue: {
			type: null,
			required: false
		},
		modelModifiers: {
			type: null,
			required: false
		},
		multiple: {
			type: Boolean,
			required: false
		},
		highlight: {
			type: Boolean,
			required: false
		},
		fixed: {
			type: Boolean,
			required: false
		},
		autofocus: {
			type: Boolean,
			required: false
		},
		autofocusDelay: {
			type: Number,
			required: false,
			default: 0
		},
		class: {
			type: null,
			required: false
		},
		ui: {
			type: Object,
			required: false
		},
		open: {
			type: Boolean,
			required: false
		},
		defaultOpen: {
			type: Boolean,
			required: false
		},
		nullableValue: {
			type: String,
			required: false
		},
		autocomplete: {
			type: String,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		name: {
			type: String,
			required: false
		},
		required: {
			type: Boolean,
			required: false
		},
		icon: {
			type: null,
			required: false
		},
		avatar: {
			type: Object,
			required: false
		},
		leading: {
			type: Boolean,
			required: false
		},
		leadingIcon: {
			type: null,
			required: false
		},
		trailing: {
			type: Boolean,
			required: false
		},
		loading: {
			type: Boolean,
			required: false
		},
		loadingIcon: {
			type: null,
			required: false
		}
	},
	emits: [
		"change",
		"blur",
		"focus",
		"update:modelValue",
		"update:open"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const _props = __props;
		const emits = __emit;
		const slots = useSlots();
		const props = useComponentProps("select", _props);
		const appConfig = useAppConfig();
		const rootProps = useForwardProps(reactivePick(props, "open", "defaultOpen", "disabled", "autocomplete", "required", "multiple", "nullableValue"), emits);
		const portalProps = usePortal(toRef(() => props.portal));
		const position = computed(() => props.content?.position ?? appConfig.ui?.select?.defaultVariants?.position ?? virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fselect_default.defaultVariants?.position);
		const contentProps = toRef(() => defu(props.content, {
			side: "bottom",
			sideOffset: 8,
			collisionPadding: 8,
			position: position.value
		}));
		const arrowProps = toRef(() => defu(props.arrow, { rounded: true }));
		const { emitFormChange, emitFormInput, emitFormBlur, emitFormFocus, size: formFieldSize, color: formFieldColor, id, name, highlight: formFieldHighlight, disabled: formFieldDisabled, ariaAttrs } = useFormField(_props);
		const { orientation, size: fieldGroupSize } = useFieldGroup(_props);
		const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(computed(() => ({
			icon: props.icon,
			leading: props.leading,
			leadingIcon: props.leadingIcon,
			trailing: props.trailing,
			trailingIcon: props.trailingIcon ?? appConfig.ui.icons.chevronDown,
			loading: props.loading,
			loadingIcon: props.loadingIcon
		})));
		const color = computed(() => formFieldColor.value ?? props.color);
		const highlight = computed(() => formFieldHighlight.value ?? props.highlight);
		const size = computed(() => fieldGroupSize.value ?? formFieldSize.value ?? props.size);
		const disabled = computed(() => formFieldDisabled.value ?? props.disabled);
		const isItemAligned = computed(() => position.value === "item-aligned");
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fselect_default,
			...appConfig.ui?.select || {}
		})({
			color: color.value,
			variant: props.variant,
			size: size.value,
			loading: props.loading,
			highlight: highlight.value,
			fixed: props.fixed,
			leading: isLeading.value || !!props.avatar || !!slots.leading,
			trailing: isTrailing.value || !!slots.trailing,
			fieldGroup: orientation.value,
			position: position.value,
			multiple: props.multiple
		}));
		const groups = computed(() => props.items?.length ? isArrayOfArray(props.items) ? props.items : [props.items] : []);
		const items = computed(() => groups.value.flatMap((group) => group));
		function displayValue(value) {
			if (props.multiple && Array.isArray(value)) {
				const displayedValues = value.map((item) => getDisplayValue(items.value, item, {
					labelKey: props.labelKey,
					valueKey: props.valueKey
				})).filter((v) => v != null && v !== "");
				return displayedValues.length > 0 ? displayedValues.join(", ") : void 0;
			}
			return getDisplayValue(items.value, value, {
				labelKey: props.labelKey,
				valueKey: props.valueKey
			});
		}
		const triggerRef = useTemplateRef("triggerRef");
		let autofocusTimeoutId;
		onScopeDispose(() => clearTimeout(autofocusTimeoutId));
		function onUpdate(value) {
			if (props.modelModifiers?.trim && (typeof value === "string" || value === null || value === void 0)) value = value?.trim() ?? null;
			if (props.modelModifiers?.number) value = looseToNumber(value);
			if (props.modelModifiers?.nullable) value ??= null;
			if (props.modelModifiers?.optional && !props.modelModifiers?.nullable && value !== null) value ??= void 0;
			const event = new Event("change", { target: { value } });
			emits("change", event);
			emitFormChange();
			emitFormInput();
		}
		function onUpdateOpen(value) {
			if (!value) {
				const event = new FocusEvent("blur");
				emits("blur", event);
				emitFormBlur();
			} else {
				const event = new FocusEvent("focus");
				emits("focus", event);
				emitFormFocus();
			}
		}
		function isSelectItem(item) {
			return typeof item === "object" && item !== null;
		}
		function onTriggerClick(open) {
			if (!open) triggerRef.value?.$el?.dispatchEvent(new PointerEvent("pointerdown", {
				bubbles: true,
				button: 0
			}));
		}
		const viewportRef = useTemplateRef("viewportRef");
		__expose({
			triggerRef: toRef(() => triggerRef.value?.$el),
			viewportRef: toRef(() => {
				const instance = viewportRef.value;
				return instance && typeof instance === "object" && "$el" in instance ? instance.$el : instance;
			})
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(SelectRoot_default), mergeProps({ name: unref(name) }, unref(rootProps), {
				autocomplete: unref(props).autocomplete,
				disabled: disabled.value,
				"default-value": unref(props).defaultValue,
				"model-value": __props.modelValue,
				"onUpdate:modelValue": onUpdate,
				"onUpdate:open": onUpdateOpen
			}, _attrs), {
				default: withCtx(({ modelValue, open }, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(SelectTrigger_default), mergeProps({
							id: unref(id),
							ref_key: "triggerRef",
							ref: triggerRef,
							"data-slot": "base",
							class: ui.value.base({ class: [unref(props).ui?.base, unref(props).class] })
						}, {
							..._ctx.$attrs,
							...unref(ariaAttrs)
						}, { onClick: ($event) => onTriggerClick(open) }), {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									if (unref(isLeading) || !!unref(props).avatar || !!slots.leading) {
										_push(`<span data-slot="leading" class="${ssrRenderClass(ui.value.leading({ class: unref(props).ui?.leading }))}"${_scopeId}>`);
										ssrRenderSlot(_ctx.$slots, "leading", {
											modelValue,
											open,
											ui: ui.value
										}, () => {
											if (unref(isLeading) && unref(leadingIconName)) _push(ssrRenderComponent(_sfc_main$5, {
												name: unref(leadingIconName),
												"data-slot": "leadingIcon",
												class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
											}, null, _parent, _scopeId));
											else if (!!unref(props).avatar) _push(ssrRenderComponent(_sfc_main$3$1, mergeProps({ size: unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize() }, unref(props).avatar, {
												"data-slot": "itemLeadingAvatar",
												class: ui.value.itemLeadingAvatar({ class: unref(props).ui?.itemLeadingAvatar })
											}), null, _parent, _scopeId));
											else _push(`<!---->`);
										}, _push, _parent, _scopeId);
										_push(`</span>`);
									} else _push(`<!---->`);
									_push(`<!--[-->`);
									ssrRenderList([displayValue(modelValue)], (displayedModelValue) => {
										_push(ssrRenderComponent(unref(SelectValue_default), {
											"data-slot": displayedModelValue != null ? "value" : "placeholder",
											class: displayedModelValue != null ? ui.value.value({ class: unref(props).ui?.value }) : ui.value.placeholder({ class: unref(props).ui?.placeholder })
										}, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) ssrRenderSlot(_ctx.$slots, "default", {
													modelValue,
													open,
													ui: ui.value
												}, () => {
													_push(`${ssrInterpolate(displayedModelValue ?? unref(props).placeholder ?? "\xA0")}`);
												}, _push, _parent, _scopeId);
												else return [renderSlot(_ctx.$slots, "default", {
													modelValue,
													open,
													ui: ui.value
												}, () => [createTextVNode(toDisplayString(displayedModelValue ?? unref(props).placeholder ?? "\xA0"), 1)])];
											}),
											_: 2
										}, _parent, _scopeId));
									});
									_push(`<!--]-->`);
									if (unref(isTrailing) || !!slots.trailing) {
										_push(`<span data-slot="trailing" class="${ssrRenderClass(ui.value.trailing({ class: unref(props).ui?.trailing }))}"${_scopeId}>`);
										ssrRenderSlot(_ctx.$slots, "trailing", {
											modelValue,
											open,
											ui: ui.value
										}, () => {
											if (unref(trailingIconName)) _push(ssrRenderComponent(_sfc_main$5, {
												name: unref(trailingIconName),
												"data-slot": "trailingIcon",
												class: ui.value.trailingIcon({ class: unref(props).ui?.trailingIcon })
											}, null, _parent, _scopeId));
											else _push(`<!---->`);
										}, _push, _parent, _scopeId);
										_push(`</span>`);
									} else _push(`<!---->`);
								} else return [
									unref(isLeading) || !!unref(props).avatar || !!slots.leading ? (openBlock(), createBlock("span", {
										key: 0,
										"data-slot": "leading",
										class: ui.value.leading({ class: unref(props).ui?.leading })
									}, [renderSlot(_ctx.$slots, "leading", {
										modelValue,
										open,
										ui: ui.value
									}, () => [unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$5, {
										key: 0,
										name: unref(leadingIconName),
										"data-slot": "leadingIcon",
										class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
									}, null, 8, ["name", "class"])) : !!unref(props).avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
										key: 1,
										size: unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
									}, unref(props).avatar, {
										"data-slot": "itemLeadingAvatar",
										class: ui.value.itemLeadingAvatar({ class: unref(props).ui?.itemLeadingAvatar })
									}), null, 16, ["size", "class"])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true),
									(openBlock(true), createBlock(Fragment, null, renderList([displayValue(modelValue)], (displayedModelValue) => {
										return openBlock(), createBlock(unref(SelectValue_default), {
											key: displayedModelValue,
											"data-slot": displayedModelValue != null ? "value" : "placeholder",
											class: displayedModelValue != null ? ui.value.value({ class: unref(props).ui?.value }) : ui.value.placeholder({ class: unref(props).ui?.placeholder })
										}, {
											default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
												modelValue,
												open,
												ui: ui.value
											}, () => [createTextVNode(toDisplayString(displayedModelValue ?? unref(props).placeholder ?? "\xA0"), 1)])]),
											_: 2
										}, 1032, ["data-slot", "class"]);
									}), 128)),
									unref(isTrailing) || !!slots.trailing ? (openBlock(), createBlock("span", {
										key: 1,
										"data-slot": "trailing",
										class: ui.value.trailing({ class: unref(props).ui?.trailing })
									}, [renderSlot(_ctx.$slots, "trailing", {
										modelValue,
										open,
										ui: ui.value
									}, () => [unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$5, {
										key: 0,
										name: unref(trailingIconName),
										"data-slot": "trailingIcon",
										class: ui.value.trailingIcon({ class: unref(props).ui?.trailingIcon })
									}, null, 8, ["name", "class"])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true)
								];
							}),
							_: 2
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(SelectPortal_default), unref(portalProps), {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(unref(FieldGroupReset), null, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(ssrRenderComponent(unref(SelectContent_default), mergeProps({
											"data-slot": "content",
											class: ui.value.content({ class: unref(props).ui?.content })
										}, contentProps.value), {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) {
													ssrRenderSlot(_ctx.$slots, "content-top", {}, null, _push, _parent, _scopeId);
													ssrRenderVNode(_push, createVNode(resolveDynamicComponent(isItemAligned.value ? unref(SelectViewport_default) : "div"), {
														ref_key: "viewportRef",
														ref: viewportRef,
														role: "presentation",
														"data-slot": "viewport",
														class: ui.value.viewport({ class: unref(props).ui?.viewport })
													}, {
														default: withCtx((_, _push, _parent, _scopeId) => {
															if (_push) {
																_push(`<!--[-->`);
																ssrRenderList(groups.value, (group, groupIndex) => {
																	_push(ssrRenderComponent(unref(SelectGroup_default), {
																		key: `group-${groupIndex}`,
																		"data-slot": "group",
																		class: ui.value.group({ class: unref(props).ui?.group })
																	}, {
																		default: withCtx((_, _push, _parent, _scopeId) => {
																			if (_push) {
																				_push(`<!--[-->`);
																				ssrRenderList(group, (item, index) => {
																					_push(`<!--[-->`);
																					if (isSelectItem(item) && item.type === "label") _push(ssrRenderComponent(unref(SelectLabel_default), {
																						"data-slot": "label",
																						class: ui.value.label({ class: [
																							unref(props).ui?.label,
																							item.ui?.label,
																							item.class
																						] })
																					}, {
																						default: withCtx((_, _push, _parent, _scopeId) => {
																							if (_push) _push(`${ssrInterpolate(unref(get)(item, unref(props).labelKey))}`);
																							else return [createTextVNode(toDisplayString(unref(get)(item, unref(props).labelKey)), 1)];
																						}),
																						_: 2
																					}, _parent, _scopeId));
																					else if (isSelectItem(item) && item.type === "separator") _push(ssrRenderComponent(unref(SelectSeparator_default), {
																						"data-slot": "separator",
																						class: ui.value.separator({ class: [
																							unref(props).ui?.separator,
																							item.ui?.separator,
																							item.class
																						] })
																					}, null, _parent, _scopeId));
																					else _push(ssrRenderComponent(unref(SelectItem_default), {
																						"data-slot": "item",
																						class: ui.value.item({ class: [
																							unref(props).ui?.item,
																							isSelectItem(item) && item.ui?.item,
																							isSelectItem(item) && item.class
																						] }),
																						disabled: isSelectItem(item) && item.disabled,
																						value: isSelectItem(item) ? unref(get)(item, unref(props).valueKey) : item,
																						onSelect: ($event) => isSelectItem(item) && item.onSelect?.($event)
																					}, {
																						default: withCtx((_, _push, _parent, _scopeId) => {
																							if (_push) ssrRenderSlot(_ctx.$slots, "item", {
																								item,
																								index,
																								ui: ui.value
																							}, () => {
																								ssrRenderSlot(_ctx.$slots, "item-leading", {
																									item,
																									index,
																									ui: ui.value
																								}, () => {
																									if (isSelectItem(item) && item.icon) _push(ssrRenderComponent(_sfc_main$5, {
																										name: item.icon,
																										"data-slot": "itemLeadingIcon",
																										class: ui.value.itemLeadingIcon({ class: [unref(props).ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
																									}, null, _parent, _scopeId));
																									else if (isSelectItem(item) && item.avatar) _push(ssrRenderComponent(_sfc_main$3$1, mergeProps({ size: item.ui?.itemLeadingAvatarSize || unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize() }, { ref_for: true }, item.avatar, {
																										"data-slot": "itemLeadingAvatar",
																										class: ui.value.itemLeadingAvatar({ class: [unref(props).ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
																									}), null, _parent, _scopeId));
																									else if (isSelectItem(item) && item.chip) _push(ssrRenderComponent(_sfc_main$4$1, mergeProps({
																										size: item.ui?.itemLeadingChipSize || unref(props).ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
																										inset: "",
																										standalone: ""
																									}, { ref_for: true }, item.chip, {
																										"data-slot": "itemLeadingChip",
																										class: ui.value.itemLeadingChip({ class: [unref(props).ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
																									}), null, _parent, _scopeId));
																									else _push(`<!---->`);
																								}, _push, _parent, _scopeId);
																								_push(`<span data-slot="itemWrapper" class="${ssrRenderClass(ui.value.itemWrapper({ class: [unref(props).ui?.itemWrapper, isSelectItem(item) && item.ui?.itemWrapper] }))}"${_scopeId}>`);
																								_push(ssrRenderComponent(unref(SelectItemText_default), {
																									"data-slot": "itemLabel",
																									class: ui.value.itemLabel({ class: [unref(props).ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] })
																								}, {
																									default: withCtx((_, _push, _parent, _scopeId) => {
																										if (_push) ssrRenderSlot(_ctx.$slots, "item-label", {
																											item,
																											index
																										}, () => {
																											_push(`${ssrInterpolate(isSelectItem(item) ? unref(get)(item, unref(props).labelKey) : item)}`);
																										}, _push, _parent, _scopeId);
																										else return [renderSlot(_ctx.$slots, "item-label", {
																											item,
																											index
																										}, () => [createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, unref(props).labelKey) : item), 1)])];
																									}),
																									_: 2
																								}, _parent, _scopeId));
																								if (isSelectItem(item) && (unref(get)(item, unref(props).descriptionKey) || !!slots["item-description"])) {
																									_push(`<span data-slot="itemDescription" class="${ssrRenderClass(ui.value.itemDescription({ class: [unref(props).ui?.itemDescription, isSelectItem(item) && item.ui?.itemDescription] }))}"${_scopeId}>`);
																									ssrRenderSlot(_ctx.$slots, "item-description", {
																										item,
																										index
																									}, () => {
																										_push(`${ssrInterpolate(unref(get)(item, unref(props).descriptionKey))}`);
																									}, _push, _parent, _scopeId);
																									_push(`</span>`);
																								} else _push(`<!---->`);
																								_push(`</span><span data-slot="itemTrailing" class="${ssrRenderClass(ui.value.itemTrailing({ class: [unref(props).ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] }))}"${_scopeId}>`);
																								ssrRenderSlot(_ctx.$slots, "item-trailing", {
																									item,
																									index,
																									ui: ui.value
																								}, null, _push, _parent, _scopeId);
																								_push(ssrRenderComponent(unref(SelectItemIndicator_default), { "as-child": "" }, {
																									default: withCtx((_, _push, _parent, _scopeId) => {
																										if (_push) _push(ssrRenderComponent(_sfc_main$5, {
																											name: unref(props).selectedIcon || unref(appConfig).ui.icons.check,
																											"data-slot": "itemTrailingIcon",
																											class: ui.value.itemTrailingIcon({ class: [unref(props).ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
																										}, null, _parent, _scopeId));
																										else return [createVNode(_sfc_main$5, {
																											name: unref(props).selectedIcon || unref(appConfig).ui.icons.check,
																											"data-slot": "itemTrailingIcon",
																											class: ui.value.itemTrailingIcon({ class: [unref(props).ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
																										}, null, 8, ["name", "class"])];
																									}),
																									_: 2
																								}, _parent, _scopeId));
																								_push(`</span>`);
																							}, _push, _parent, _scopeId);
																							else return [renderSlot(_ctx.$slots, "item", {
																								item,
																								index,
																								ui: ui.value
																							}, () => [
																								renderSlot(_ctx.$slots, "item-leading", {
																									item,
																									index,
																									ui: ui.value
																								}, () => [isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$5, {
																									key: 0,
																									name: item.icon,
																									"data-slot": "itemLeadingIcon",
																									class: ui.value.itemLeadingIcon({ class: [unref(props).ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
																								}, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
																									key: 1,
																									size: item.ui?.itemLeadingAvatarSize || unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
																								}, { ref_for: true }, item.avatar, {
																									"data-slot": "itemLeadingAvatar",
																									class: ui.value.itemLeadingAvatar({ class: [unref(props).ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
																								}), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$4$1, mergeProps({
																									key: 2,
																									size: item.ui?.itemLeadingChipSize || unref(props).ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
																									inset: "",
																									standalone: ""
																								}, { ref_for: true }, item.chip, {
																									"data-slot": "itemLeadingChip",
																									class: ui.value.itemLeadingChip({ class: [unref(props).ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
																								}), null, 16, ["size", "class"])) : createCommentVNode("", true)]),
																								createVNode("span", {
																									"data-slot": "itemWrapper",
																									class: ui.value.itemWrapper({ class: [unref(props).ui?.itemWrapper, isSelectItem(item) && item.ui?.itemWrapper] })
																								}, [createVNode(unref(SelectItemText_default), {
																									"data-slot": "itemLabel",
																									class: ui.value.itemLabel({ class: [unref(props).ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] })
																								}, {
																									default: withCtx(() => [renderSlot(_ctx.$slots, "item-label", {
																										item,
																										index
																									}, () => [createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, unref(props).labelKey) : item), 1)])]),
																									_: 2
																								}, 1032, ["class"]), isSelectItem(item) && (unref(get)(item, unref(props).descriptionKey) || !!slots["item-description"]) ? (openBlock(), createBlock("span", {
																									key: 0,
																									"data-slot": "itemDescription",
																									class: ui.value.itemDescription({ class: [unref(props).ui?.itemDescription, isSelectItem(item) && item.ui?.itemDescription] })
																								}, [renderSlot(_ctx.$slots, "item-description", {
																									item,
																									index
																								}, () => [createTextVNode(toDisplayString(unref(get)(item, unref(props).descriptionKey)), 1)])], 2)) : createCommentVNode("", true)], 2),
																								createVNode("span", {
																									"data-slot": "itemTrailing",
																									class: ui.value.itemTrailing({ class: [unref(props).ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] })
																								}, [renderSlot(_ctx.$slots, "item-trailing", {
																									item,
																									index,
																									ui: ui.value
																								}), createVNode(unref(SelectItemIndicator_default), { "as-child": "" }, {
																									default: withCtx(() => [createVNode(_sfc_main$5, {
																										name: unref(props).selectedIcon || unref(appConfig).ui.icons.check,
																										"data-slot": "itemTrailingIcon",
																										class: ui.value.itemTrailingIcon({ class: [unref(props).ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
																									}, null, 8, ["name", "class"])]),
																									_: 2
																								}, 1024)], 2)
																							])];
																						}),
																						_: 2
																					}, _parent, _scopeId));
																					_push(`<!--]-->`);
																				});
																				_push(`<!--]-->`);
																			} else return [(openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
																				return openBlock(), createBlock(Fragment, { key: `group-${groupIndex}-${index}` }, [isSelectItem(item) && item.type === "label" ? (openBlock(), createBlock(unref(SelectLabel_default), {
																					key: 0,
																					"data-slot": "label",
																					class: ui.value.label({ class: [
																						unref(props).ui?.label,
																						item.ui?.label,
																						item.class
																					] })
																				}, {
																					default: withCtx(() => [createTextVNode(toDisplayString(unref(get)(item, unref(props).labelKey)), 1)]),
																					_: 2
																				}, 1032, ["class"])) : isSelectItem(item) && item.type === "separator" ? (openBlock(), createBlock(unref(SelectSeparator_default), {
																					key: 1,
																					"data-slot": "separator",
																					class: ui.value.separator({ class: [
																						unref(props).ui?.separator,
																						item.ui?.separator,
																						item.class
																					] })
																				}, null, 8, ["class"])) : (openBlock(), createBlock(unref(SelectItem_default), {
																					key: 2,
																					"data-slot": "item",
																					class: ui.value.item({ class: [
																						unref(props).ui?.item,
																						isSelectItem(item) && item.ui?.item,
																						isSelectItem(item) && item.class
																					] }),
																					disabled: isSelectItem(item) && item.disabled,
																					value: isSelectItem(item) ? unref(get)(item, unref(props).valueKey) : item,
																					onSelect: ($event) => isSelectItem(item) && item.onSelect?.($event)
																				}, {
																					default: withCtx(() => [renderSlot(_ctx.$slots, "item", {
																						item,
																						index,
																						ui: ui.value
																					}, () => [
																						renderSlot(_ctx.$slots, "item-leading", {
																							item,
																							index,
																							ui: ui.value
																						}, () => [isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$5, {
																							key: 0,
																							name: item.icon,
																							"data-slot": "itemLeadingIcon",
																							class: ui.value.itemLeadingIcon({ class: [unref(props).ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
																						}, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
																							key: 1,
																							size: item.ui?.itemLeadingAvatarSize || unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
																						}, { ref_for: true }, item.avatar, {
																							"data-slot": "itemLeadingAvatar",
																							class: ui.value.itemLeadingAvatar({ class: [unref(props).ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
																						}), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$4$1, mergeProps({
																							key: 2,
																							size: item.ui?.itemLeadingChipSize || unref(props).ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
																							inset: "",
																							standalone: ""
																						}, { ref_for: true }, item.chip, {
																							"data-slot": "itemLeadingChip",
																							class: ui.value.itemLeadingChip({ class: [unref(props).ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
																						}), null, 16, ["size", "class"])) : createCommentVNode("", true)]),
																						createVNode("span", {
																							"data-slot": "itemWrapper",
																							class: ui.value.itemWrapper({ class: [unref(props).ui?.itemWrapper, isSelectItem(item) && item.ui?.itemWrapper] })
																						}, [createVNode(unref(SelectItemText_default), {
																							"data-slot": "itemLabel",
																							class: ui.value.itemLabel({ class: [unref(props).ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] })
																						}, {
																							default: withCtx(() => [renderSlot(_ctx.$slots, "item-label", {
																								item,
																								index
																							}, () => [createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, unref(props).labelKey) : item), 1)])]),
																							_: 2
																						}, 1032, ["class"]), isSelectItem(item) && (unref(get)(item, unref(props).descriptionKey) || !!slots["item-description"]) ? (openBlock(), createBlock("span", {
																							key: 0,
																							"data-slot": "itemDescription",
																							class: ui.value.itemDescription({ class: [unref(props).ui?.itemDescription, isSelectItem(item) && item.ui?.itemDescription] })
																						}, [renderSlot(_ctx.$slots, "item-description", {
																							item,
																							index
																						}, () => [createTextVNode(toDisplayString(unref(get)(item, unref(props).descriptionKey)), 1)])], 2)) : createCommentVNode("", true)], 2),
																						createVNode("span", {
																							"data-slot": "itemTrailing",
																							class: ui.value.itemTrailing({ class: [unref(props).ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] })
																						}, [renderSlot(_ctx.$slots, "item-trailing", {
																							item,
																							index,
																							ui: ui.value
																						}), createVNode(unref(SelectItemIndicator_default), { "as-child": "" }, {
																							default: withCtx(() => [createVNode(_sfc_main$5, {
																								name: unref(props).selectedIcon || unref(appConfig).ui.icons.check,
																								"data-slot": "itemTrailingIcon",
																								class: ui.value.itemTrailingIcon({ class: [unref(props).ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
																							}, null, 8, ["name", "class"])]),
																							_: 2
																						}, 1024)], 2)
																					])]),
																					_: 2
																				}, 1032, [
																					"class",
																					"disabled",
																					"value",
																					"onSelect"
																				]))], 64);
																			}), 128))];
																		}),
																		_: 2
																	}, _parent, _scopeId));
																});
																_push(`<!--]-->`);
															} else return [(openBlock(true), createBlock(Fragment, null, renderList(groups.value, (group, groupIndex) => {
																return openBlock(), createBlock(unref(SelectGroup_default), {
																	key: `group-${groupIndex}`,
																	"data-slot": "group",
																	class: ui.value.group({ class: unref(props).ui?.group })
																}, {
																	default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
																		return openBlock(), createBlock(Fragment, { key: `group-${groupIndex}-${index}` }, [isSelectItem(item) && item.type === "label" ? (openBlock(), createBlock(unref(SelectLabel_default), {
																			key: 0,
																			"data-slot": "label",
																			class: ui.value.label({ class: [
																				unref(props).ui?.label,
																				item.ui?.label,
																				item.class
																			] })
																		}, {
																			default: withCtx(() => [createTextVNode(toDisplayString(unref(get)(item, unref(props).labelKey)), 1)]),
																			_: 2
																		}, 1032, ["class"])) : isSelectItem(item) && item.type === "separator" ? (openBlock(), createBlock(unref(SelectSeparator_default), {
																			key: 1,
																			"data-slot": "separator",
																			class: ui.value.separator({ class: [
																				unref(props).ui?.separator,
																				item.ui?.separator,
																				item.class
																			] })
																		}, null, 8, ["class"])) : (openBlock(), createBlock(unref(SelectItem_default), {
																			key: 2,
																			"data-slot": "item",
																			class: ui.value.item({ class: [
																				unref(props).ui?.item,
																				isSelectItem(item) && item.ui?.item,
																				isSelectItem(item) && item.class
																			] }),
																			disabled: isSelectItem(item) && item.disabled,
																			value: isSelectItem(item) ? unref(get)(item, unref(props).valueKey) : item,
																			onSelect: ($event) => isSelectItem(item) && item.onSelect?.($event)
																		}, {
																			default: withCtx(() => [renderSlot(_ctx.$slots, "item", {
																				item,
																				index,
																				ui: ui.value
																			}, () => [
																				renderSlot(_ctx.$slots, "item-leading", {
																					item,
																					index,
																					ui: ui.value
																				}, () => [isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$5, {
																					key: 0,
																					name: item.icon,
																					"data-slot": "itemLeadingIcon",
																					class: ui.value.itemLeadingIcon({ class: [unref(props).ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
																				}, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
																					key: 1,
																					size: item.ui?.itemLeadingAvatarSize || unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
																				}, { ref_for: true }, item.avatar, {
																					"data-slot": "itemLeadingAvatar",
																					class: ui.value.itemLeadingAvatar({ class: [unref(props).ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
																				}), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$4$1, mergeProps({
																					key: 2,
																					size: item.ui?.itemLeadingChipSize || unref(props).ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
																					inset: "",
																					standalone: ""
																				}, { ref_for: true }, item.chip, {
																					"data-slot": "itemLeadingChip",
																					class: ui.value.itemLeadingChip({ class: [unref(props).ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
																				}), null, 16, ["size", "class"])) : createCommentVNode("", true)]),
																				createVNode("span", {
																					"data-slot": "itemWrapper",
																					class: ui.value.itemWrapper({ class: [unref(props).ui?.itemWrapper, isSelectItem(item) && item.ui?.itemWrapper] })
																				}, [createVNode(unref(SelectItemText_default), {
																					"data-slot": "itemLabel",
																					class: ui.value.itemLabel({ class: [unref(props).ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] })
																				}, {
																					default: withCtx(() => [renderSlot(_ctx.$slots, "item-label", {
																						item,
																						index
																					}, () => [createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, unref(props).labelKey) : item), 1)])]),
																					_: 2
																				}, 1032, ["class"]), isSelectItem(item) && (unref(get)(item, unref(props).descriptionKey) || !!slots["item-description"]) ? (openBlock(), createBlock("span", {
																					key: 0,
																					"data-slot": "itemDescription",
																					class: ui.value.itemDescription({ class: [unref(props).ui?.itemDescription, isSelectItem(item) && item.ui?.itemDescription] })
																				}, [renderSlot(_ctx.$slots, "item-description", {
																					item,
																					index
																				}, () => [createTextVNode(toDisplayString(unref(get)(item, unref(props).descriptionKey)), 1)])], 2)) : createCommentVNode("", true)], 2),
																				createVNode("span", {
																					"data-slot": "itemTrailing",
																					class: ui.value.itemTrailing({ class: [unref(props).ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] })
																				}, [renderSlot(_ctx.$slots, "item-trailing", {
																					item,
																					index,
																					ui: ui.value
																				}), createVNode(unref(SelectItemIndicator_default), { "as-child": "" }, {
																					default: withCtx(() => [createVNode(_sfc_main$5, {
																						name: unref(props).selectedIcon || unref(appConfig).ui.icons.check,
																						"data-slot": "itemTrailingIcon",
																						class: ui.value.itemTrailingIcon({ class: [unref(props).ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
																					}, null, 8, ["name", "class"])]),
																					_: 2
																				}, 1024)], 2)
																			])]),
																			_: 2
																		}, 1032, [
																			"class",
																			"disabled",
																			"value",
																			"onSelect"
																		]))], 64);
																	}), 128))]),
																	_: 2
																}, 1032, ["class"]);
															}), 128))];
														}),
														_: 2
													}), _parent, _scopeId);
													ssrRenderSlot(_ctx.$slots, "content-bottom", {}, null, _push, _parent, _scopeId);
													if (!!unref(props).arrow) _push(ssrRenderComponent(unref(SelectArrow_default), mergeProps(arrowProps.value, {
														"data-slot": "arrow",
														class: ui.value.arrow({ class: unref(props).ui?.arrow })
													}), null, _parent, _scopeId));
													else _push(`<!---->`);
												} else return [
													renderSlot(_ctx.$slots, "content-top"),
													(openBlock(), createBlock(resolveDynamicComponent(isItemAligned.value ? unref(SelectViewport_default) : "div"), {
														ref_key: "viewportRef",
														ref: viewportRef,
														role: "presentation",
														"data-slot": "viewport",
														class: ui.value.viewport({ class: unref(props).ui?.viewport })
													}, {
														default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(groups.value, (group, groupIndex) => {
															return openBlock(), createBlock(unref(SelectGroup_default), {
																key: `group-${groupIndex}`,
																"data-slot": "group",
																class: ui.value.group({ class: unref(props).ui?.group })
															}, {
																default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
																	return openBlock(), createBlock(Fragment, { key: `group-${groupIndex}-${index}` }, [isSelectItem(item) && item.type === "label" ? (openBlock(), createBlock(unref(SelectLabel_default), {
																		key: 0,
																		"data-slot": "label",
																		class: ui.value.label({ class: [
																			unref(props).ui?.label,
																			item.ui?.label,
																			item.class
																		] })
																	}, {
																		default: withCtx(() => [createTextVNode(toDisplayString(unref(get)(item, unref(props).labelKey)), 1)]),
																		_: 2
																	}, 1032, ["class"])) : isSelectItem(item) && item.type === "separator" ? (openBlock(), createBlock(unref(SelectSeparator_default), {
																		key: 1,
																		"data-slot": "separator",
																		class: ui.value.separator({ class: [
																			unref(props).ui?.separator,
																			item.ui?.separator,
																			item.class
																		] })
																	}, null, 8, ["class"])) : (openBlock(), createBlock(unref(SelectItem_default), {
																		key: 2,
																		"data-slot": "item",
																		class: ui.value.item({ class: [
																			unref(props).ui?.item,
																			isSelectItem(item) && item.ui?.item,
																			isSelectItem(item) && item.class
																		] }),
																		disabled: isSelectItem(item) && item.disabled,
																		value: isSelectItem(item) ? unref(get)(item, unref(props).valueKey) : item,
																		onSelect: ($event) => isSelectItem(item) && item.onSelect?.($event)
																	}, {
																		default: withCtx(() => [renderSlot(_ctx.$slots, "item", {
																			item,
																			index,
																			ui: ui.value
																		}, () => [
																			renderSlot(_ctx.$slots, "item-leading", {
																				item,
																				index,
																				ui: ui.value
																			}, () => [isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$5, {
																				key: 0,
																				name: item.icon,
																				"data-slot": "itemLeadingIcon",
																				class: ui.value.itemLeadingIcon({ class: [unref(props).ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
																			}, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
																				key: 1,
																				size: item.ui?.itemLeadingAvatarSize || unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
																			}, { ref_for: true }, item.avatar, {
																				"data-slot": "itemLeadingAvatar",
																				class: ui.value.itemLeadingAvatar({ class: [unref(props).ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
																			}), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$4$1, mergeProps({
																				key: 2,
																				size: item.ui?.itemLeadingChipSize || unref(props).ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
																				inset: "",
																				standalone: ""
																			}, { ref_for: true }, item.chip, {
																				"data-slot": "itemLeadingChip",
																				class: ui.value.itemLeadingChip({ class: [unref(props).ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
																			}), null, 16, ["size", "class"])) : createCommentVNode("", true)]),
																			createVNode("span", {
																				"data-slot": "itemWrapper",
																				class: ui.value.itemWrapper({ class: [unref(props).ui?.itemWrapper, isSelectItem(item) && item.ui?.itemWrapper] })
																			}, [createVNode(unref(SelectItemText_default), {
																				"data-slot": "itemLabel",
																				class: ui.value.itemLabel({ class: [unref(props).ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] })
																			}, {
																				default: withCtx(() => [renderSlot(_ctx.$slots, "item-label", {
																					item,
																					index
																				}, () => [createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, unref(props).labelKey) : item), 1)])]),
																				_: 2
																			}, 1032, ["class"]), isSelectItem(item) && (unref(get)(item, unref(props).descriptionKey) || !!slots["item-description"]) ? (openBlock(), createBlock("span", {
																				key: 0,
																				"data-slot": "itemDescription",
																				class: ui.value.itemDescription({ class: [unref(props).ui?.itemDescription, isSelectItem(item) && item.ui?.itemDescription] })
																			}, [renderSlot(_ctx.$slots, "item-description", {
																				item,
																				index
																			}, () => [createTextVNode(toDisplayString(unref(get)(item, unref(props).descriptionKey)), 1)])], 2)) : createCommentVNode("", true)], 2),
																			createVNode("span", {
																				"data-slot": "itemTrailing",
																				class: ui.value.itemTrailing({ class: [unref(props).ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] })
																			}, [renderSlot(_ctx.$slots, "item-trailing", {
																				item,
																				index,
																				ui: ui.value
																			}), createVNode(unref(SelectItemIndicator_default), { "as-child": "" }, {
																				default: withCtx(() => [createVNode(_sfc_main$5, {
																					name: unref(props).selectedIcon || unref(appConfig).ui.icons.check,
																					"data-slot": "itemTrailingIcon",
																					class: ui.value.itemTrailingIcon({ class: [unref(props).ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
																				}, null, 8, ["name", "class"])]),
																				_: 2
																			}, 1024)], 2)
																		])]),
																		_: 2
																	}, 1032, [
																		"class",
																		"disabled",
																		"value",
																		"onSelect"
																	]))], 64);
																}), 128))]),
																_: 2
															}, 1032, ["class"]);
														}), 128))]),
														_: 3
													}, 8, ["class"])),
													renderSlot(_ctx.$slots, "content-bottom"),
													!!unref(props).arrow ? (openBlock(), createBlock(unref(SelectArrow_default), mergeProps({ key: 0 }, arrowProps.value, {
														"data-slot": "arrow",
														class: ui.value.arrow({ class: unref(props).ui?.arrow })
													}), null, 16, ["class"])) : createCommentVNode("", true)
												];
											}),
											_: 2
										}, _parent, _scopeId));
										else return [createVNode(unref(SelectContent_default), mergeProps({
											"data-slot": "content",
											class: ui.value.content({ class: unref(props).ui?.content })
										}, contentProps.value), {
											default: withCtx(() => [
												renderSlot(_ctx.$slots, "content-top"),
												(openBlock(), createBlock(resolveDynamicComponent(isItemAligned.value ? unref(SelectViewport_default) : "div"), {
													ref_key: "viewportRef",
													ref: viewportRef,
													role: "presentation",
													"data-slot": "viewport",
													class: ui.value.viewport({ class: unref(props).ui?.viewport })
												}, {
													default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(groups.value, (group, groupIndex) => {
														return openBlock(), createBlock(unref(SelectGroup_default), {
															key: `group-${groupIndex}`,
															"data-slot": "group",
															class: ui.value.group({ class: unref(props).ui?.group })
														}, {
															default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
																return openBlock(), createBlock(Fragment, { key: `group-${groupIndex}-${index}` }, [isSelectItem(item) && item.type === "label" ? (openBlock(), createBlock(unref(SelectLabel_default), {
																	key: 0,
																	"data-slot": "label",
																	class: ui.value.label({ class: [
																		unref(props).ui?.label,
																		item.ui?.label,
																		item.class
																	] })
																}, {
																	default: withCtx(() => [createTextVNode(toDisplayString(unref(get)(item, unref(props).labelKey)), 1)]),
																	_: 2
																}, 1032, ["class"])) : isSelectItem(item) && item.type === "separator" ? (openBlock(), createBlock(unref(SelectSeparator_default), {
																	key: 1,
																	"data-slot": "separator",
																	class: ui.value.separator({ class: [
																		unref(props).ui?.separator,
																		item.ui?.separator,
																		item.class
																	] })
																}, null, 8, ["class"])) : (openBlock(), createBlock(unref(SelectItem_default), {
																	key: 2,
																	"data-slot": "item",
																	class: ui.value.item({ class: [
																		unref(props).ui?.item,
																		isSelectItem(item) && item.ui?.item,
																		isSelectItem(item) && item.class
																	] }),
																	disabled: isSelectItem(item) && item.disabled,
																	value: isSelectItem(item) ? unref(get)(item, unref(props).valueKey) : item,
																	onSelect: ($event) => isSelectItem(item) && item.onSelect?.($event)
																}, {
																	default: withCtx(() => [renderSlot(_ctx.$slots, "item", {
																		item,
																		index,
																		ui: ui.value
																	}, () => [
																		renderSlot(_ctx.$slots, "item-leading", {
																			item,
																			index,
																			ui: ui.value
																		}, () => [isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$5, {
																			key: 0,
																			name: item.icon,
																			"data-slot": "itemLeadingIcon",
																			class: ui.value.itemLeadingIcon({ class: [unref(props).ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
																		}, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
																			key: 1,
																			size: item.ui?.itemLeadingAvatarSize || unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
																		}, { ref_for: true }, item.avatar, {
																			"data-slot": "itemLeadingAvatar",
																			class: ui.value.itemLeadingAvatar({ class: [unref(props).ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
																		}), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$4$1, mergeProps({
																			key: 2,
																			size: item.ui?.itemLeadingChipSize || unref(props).ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
																			inset: "",
																			standalone: ""
																		}, { ref_for: true }, item.chip, {
																			"data-slot": "itemLeadingChip",
																			class: ui.value.itemLeadingChip({ class: [unref(props).ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
																		}), null, 16, ["size", "class"])) : createCommentVNode("", true)]),
																		createVNode("span", {
																			"data-slot": "itemWrapper",
																			class: ui.value.itemWrapper({ class: [unref(props).ui?.itemWrapper, isSelectItem(item) && item.ui?.itemWrapper] })
																		}, [createVNode(unref(SelectItemText_default), {
																			"data-slot": "itemLabel",
																			class: ui.value.itemLabel({ class: [unref(props).ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] })
																		}, {
																			default: withCtx(() => [renderSlot(_ctx.$slots, "item-label", {
																				item,
																				index
																			}, () => [createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, unref(props).labelKey) : item), 1)])]),
																			_: 2
																		}, 1032, ["class"]), isSelectItem(item) && (unref(get)(item, unref(props).descriptionKey) || !!slots["item-description"]) ? (openBlock(), createBlock("span", {
																			key: 0,
																			"data-slot": "itemDescription",
																			class: ui.value.itemDescription({ class: [unref(props).ui?.itemDescription, isSelectItem(item) && item.ui?.itemDescription] })
																		}, [renderSlot(_ctx.$slots, "item-description", {
																			item,
																			index
																		}, () => [createTextVNode(toDisplayString(unref(get)(item, unref(props).descriptionKey)), 1)])], 2)) : createCommentVNode("", true)], 2),
																		createVNode("span", {
																			"data-slot": "itemTrailing",
																			class: ui.value.itemTrailing({ class: [unref(props).ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] })
																		}, [renderSlot(_ctx.$slots, "item-trailing", {
																			item,
																			index,
																			ui: ui.value
																		}), createVNode(unref(SelectItemIndicator_default), { "as-child": "" }, {
																			default: withCtx(() => [createVNode(_sfc_main$5, {
																				name: unref(props).selectedIcon || unref(appConfig).ui.icons.check,
																				"data-slot": "itemTrailingIcon",
																				class: ui.value.itemTrailingIcon({ class: [unref(props).ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
																			}, null, 8, ["name", "class"])]),
																			_: 2
																		}, 1024)], 2)
																	])]),
																	_: 2
																}, 1032, [
																	"class",
																	"disabled",
																	"value",
																	"onSelect"
																]))], 64);
															}), 128))]),
															_: 2
														}, 1032, ["class"]);
													}), 128))]),
													_: 3
												}, 8, ["class"])),
												renderSlot(_ctx.$slots, "content-bottom"),
												!!unref(props).arrow ? (openBlock(), createBlock(unref(SelectArrow_default), mergeProps({ key: 0 }, arrowProps.value, {
													"data-slot": "arrow",
													class: ui.value.arrow({ class: unref(props).ui?.arrow })
												}), null, 16, ["class"])) : createCommentVNode("", true)
											]),
											_: 3
										}, 16, ["class"])];
									}),
									_: 2
								}, _parent, _scopeId));
								else return [createVNode(unref(FieldGroupReset), null, {
									default: withCtx(() => [createVNode(unref(SelectContent_default), mergeProps({
										"data-slot": "content",
										class: ui.value.content({ class: unref(props).ui?.content })
									}, contentProps.value), {
										default: withCtx(() => [
											renderSlot(_ctx.$slots, "content-top"),
											(openBlock(), createBlock(resolveDynamicComponent(isItemAligned.value ? unref(SelectViewport_default) : "div"), {
												ref_key: "viewportRef",
												ref: viewportRef,
												role: "presentation",
												"data-slot": "viewport",
												class: ui.value.viewport({ class: unref(props).ui?.viewport })
											}, {
												default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(groups.value, (group, groupIndex) => {
													return openBlock(), createBlock(unref(SelectGroup_default), {
														key: `group-${groupIndex}`,
														"data-slot": "group",
														class: ui.value.group({ class: unref(props).ui?.group })
													}, {
														default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
															return openBlock(), createBlock(Fragment, { key: `group-${groupIndex}-${index}` }, [isSelectItem(item) && item.type === "label" ? (openBlock(), createBlock(unref(SelectLabel_default), {
																key: 0,
																"data-slot": "label",
																class: ui.value.label({ class: [
																	unref(props).ui?.label,
																	item.ui?.label,
																	item.class
																] })
															}, {
																default: withCtx(() => [createTextVNode(toDisplayString(unref(get)(item, unref(props).labelKey)), 1)]),
																_: 2
															}, 1032, ["class"])) : isSelectItem(item) && item.type === "separator" ? (openBlock(), createBlock(unref(SelectSeparator_default), {
																key: 1,
																"data-slot": "separator",
																class: ui.value.separator({ class: [
																	unref(props).ui?.separator,
																	item.ui?.separator,
																	item.class
																] })
															}, null, 8, ["class"])) : (openBlock(), createBlock(unref(SelectItem_default), {
																key: 2,
																"data-slot": "item",
																class: ui.value.item({ class: [
																	unref(props).ui?.item,
																	isSelectItem(item) && item.ui?.item,
																	isSelectItem(item) && item.class
																] }),
																disabled: isSelectItem(item) && item.disabled,
																value: isSelectItem(item) ? unref(get)(item, unref(props).valueKey) : item,
																onSelect: ($event) => isSelectItem(item) && item.onSelect?.($event)
															}, {
																default: withCtx(() => [renderSlot(_ctx.$slots, "item", {
																	item,
																	index,
																	ui: ui.value
																}, () => [
																	renderSlot(_ctx.$slots, "item-leading", {
																		item,
																		index,
																		ui: ui.value
																	}, () => [isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$5, {
																		key: 0,
																		name: item.icon,
																		"data-slot": "itemLeadingIcon",
																		class: ui.value.itemLeadingIcon({ class: [unref(props).ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
																	}, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
																		key: 1,
																		size: item.ui?.itemLeadingAvatarSize || unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
																	}, { ref_for: true }, item.avatar, {
																		"data-slot": "itemLeadingAvatar",
																		class: ui.value.itemLeadingAvatar({ class: [unref(props).ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
																	}), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$4$1, mergeProps({
																		key: 2,
																		size: item.ui?.itemLeadingChipSize || unref(props).ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
																		inset: "",
																		standalone: ""
																	}, { ref_for: true }, item.chip, {
																		"data-slot": "itemLeadingChip",
																		class: ui.value.itemLeadingChip({ class: [unref(props).ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
																	}), null, 16, ["size", "class"])) : createCommentVNode("", true)]),
																	createVNode("span", {
																		"data-slot": "itemWrapper",
																		class: ui.value.itemWrapper({ class: [unref(props).ui?.itemWrapper, isSelectItem(item) && item.ui?.itemWrapper] })
																	}, [createVNode(unref(SelectItemText_default), {
																		"data-slot": "itemLabel",
																		class: ui.value.itemLabel({ class: [unref(props).ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] })
																	}, {
																		default: withCtx(() => [renderSlot(_ctx.$slots, "item-label", {
																			item,
																			index
																		}, () => [createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, unref(props).labelKey) : item), 1)])]),
																		_: 2
																	}, 1032, ["class"]), isSelectItem(item) && (unref(get)(item, unref(props).descriptionKey) || !!slots["item-description"]) ? (openBlock(), createBlock("span", {
																		key: 0,
																		"data-slot": "itemDescription",
																		class: ui.value.itemDescription({ class: [unref(props).ui?.itemDescription, isSelectItem(item) && item.ui?.itemDescription] })
																	}, [renderSlot(_ctx.$slots, "item-description", {
																		item,
																		index
																	}, () => [createTextVNode(toDisplayString(unref(get)(item, unref(props).descriptionKey)), 1)])], 2)) : createCommentVNode("", true)], 2),
																	createVNode("span", {
																		"data-slot": "itemTrailing",
																		class: ui.value.itemTrailing({ class: [unref(props).ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] })
																	}, [renderSlot(_ctx.$slots, "item-trailing", {
																		item,
																		index,
																		ui: ui.value
																	}), createVNode(unref(SelectItemIndicator_default), { "as-child": "" }, {
																		default: withCtx(() => [createVNode(_sfc_main$5, {
																			name: unref(props).selectedIcon || unref(appConfig).ui.icons.check,
																			"data-slot": "itemTrailingIcon",
																			class: ui.value.itemTrailingIcon({ class: [unref(props).ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
																		}, null, 8, ["name", "class"])]),
																		_: 2
																	}, 1024)], 2)
																])]),
																_: 2
															}, 1032, [
																"class",
																"disabled",
																"value",
																"onSelect"
															]))], 64);
														}), 128))]),
														_: 2
													}, 1032, ["class"]);
												}), 128))]),
												_: 3
											}, 8, ["class"])),
											renderSlot(_ctx.$slots, "content-bottom"),
											!!unref(props).arrow ? (openBlock(), createBlock(unref(SelectArrow_default), mergeProps({ key: 0 }, arrowProps.value, {
												"data-slot": "arrow",
												class: ui.value.arrow({ class: unref(props).ui?.arrow })
											}), null, 16, ["class"])) : createCommentVNode("", true)
										]),
										_: 3
									}, 16, ["class"])]),
									_: 3
								})];
							}),
							_: 2
						}, _parent, _scopeId));
					} else return [createVNode(unref(SelectTrigger_default), mergeProps({
						id: unref(id),
						ref_key: "triggerRef",
						ref: triggerRef,
						"data-slot": "base",
						class: ui.value.base({ class: [unref(props).ui?.base, unref(props).class] })
					}, {
						..._ctx.$attrs,
						...unref(ariaAttrs)
					}, { onClick: ($event) => onTriggerClick(open) }), {
						default: withCtx(() => [
							unref(isLeading) || !!unref(props).avatar || !!slots.leading ? (openBlock(), createBlock("span", {
								key: 0,
								"data-slot": "leading",
								class: ui.value.leading({ class: unref(props).ui?.leading })
							}, [renderSlot(_ctx.$slots, "leading", {
								modelValue,
								open,
								ui: ui.value
							}, () => [unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$5, {
								key: 0,
								name: unref(leadingIconName),
								"data-slot": "leadingIcon",
								class: ui.value.leadingIcon({ class: unref(props).ui?.leadingIcon })
							}, null, 8, ["name", "class"])) : !!unref(props).avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
								key: 1,
								size: unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
							}, unref(props).avatar, {
								"data-slot": "itemLeadingAvatar",
								class: ui.value.itemLeadingAvatar({ class: unref(props).ui?.itemLeadingAvatar })
							}), null, 16, ["size", "class"])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true),
							(openBlock(true), createBlock(Fragment, null, renderList([displayValue(modelValue)], (displayedModelValue) => {
								return openBlock(), createBlock(unref(SelectValue_default), {
									key: displayedModelValue,
									"data-slot": displayedModelValue != null ? "value" : "placeholder",
									class: displayedModelValue != null ? ui.value.value({ class: unref(props).ui?.value }) : ui.value.placeholder({ class: unref(props).ui?.placeholder })
								}, {
									default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
										modelValue,
										open,
										ui: ui.value
									}, () => [createTextVNode(toDisplayString(displayedModelValue ?? unref(props).placeholder ?? "\xA0"), 1)])]),
									_: 2
								}, 1032, ["data-slot", "class"]);
							}), 128)),
							unref(isTrailing) || !!slots.trailing ? (openBlock(), createBlock("span", {
								key: 1,
								"data-slot": "trailing",
								class: ui.value.trailing({ class: unref(props).ui?.trailing })
							}, [renderSlot(_ctx.$slots, "trailing", {
								modelValue,
								open,
								ui: ui.value
							}, () => [unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$5, {
								key: 0,
								name: unref(trailingIconName),
								"data-slot": "trailingIcon",
								class: ui.value.trailingIcon({ class: unref(props).ui?.trailingIcon })
							}, null, 8, ["name", "class"])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true)
						]),
						_: 2
					}, 1040, [
						"id",
						"class",
						"onClick"
					]), createVNode(unref(SelectPortal_default), unref(portalProps), {
						default: withCtx(() => [createVNode(unref(FieldGroupReset), null, {
							default: withCtx(() => [createVNode(unref(SelectContent_default), mergeProps({
								"data-slot": "content",
								class: ui.value.content({ class: unref(props).ui?.content })
							}, contentProps.value), {
								default: withCtx(() => [
									renderSlot(_ctx.$slots, "content-top"),
									(openBlock(), createBlock(resolveDynamicComponent(isItemAligned.value ? unref(SelectViewport_default) : "div"), {
										ref_key: "viewportRef",
										ref: viewportRef,
										role: "presentation",
										"data-slot": "viewport",
										class: ui.value.viewport({ class: unref(props).ui?.viewport })
									}, {
										default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(groups.value, (group, groupIndex) => {
											return openBlock(), createBlock(unref(SelectGroup_default), {
												key: `group-${groupIndex}`,
												"data-slot": "group",
												class: ui.value.group({ class: unref(props).ui?.group })
											}, {
												default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
													return openBlock(), createBlock(Fragment, { key: `group-${groupIndex}-${index}` }, [isSelectItem(item) && item.type === "label" ? (openBlock(), createBlock(unref(SelectLabel_default), {
														key: 0,
														"data-slot": "label",
														class: ui.value.label({ class: [
															unref(props).ui?.label,
															item.ui?.label,
															item.class
														] })
													}, {
														default: withCtx(() => [createTextVNode(toDisplayString(unref(get)(item, unref(props).labelKey)), 1)]),
														_: 2
													}, 1032, ["class"])) : isSelectItem(item) && item.type === "separator" ? (openBlock(), createBlock(unref(SelectSeparator_default), {
														key: 1,
														"data-slot": "separator",
														class: ui.value.separator({ class: [
															unref(props).ui?.separator,
															item.ui?.separator,
															item.class
														] })
													}, null, 8, ["class"])) : (openBlock(), createBlock(unref(SelectItem_default), {
														key: 2,
														"data-slot": "item",
														class: ui.value.item({ class: [
															unref(props).ui?.item,
															isSelectItem(item) && item.ui?.item,
															isSelectItem(item) && item.class
														] }),
														disabled: isSelectItem(item) && item.disabled,
														value: isSelectItem(item) ? unref(get)(item, unref(props).valueKey) : item,
														onSelect: ($event) => isSelectItem(item) && item.onSelect?.($event)
													}, {
														default: withCtx(() => [renderSlot(_ctx.$slots, "item", {
															item,
															index,
															ui: ui.value
														}, () => [
															renderSlot(_ctx.$slots, "item-leading", {
																item,
																index,
																ui: ui.value
															}, () => [isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$5, {
																key: 0,
																name: item.icon,
																"data-slot": "itemLeadingIcon",
																class: ui.value.itemLeadingIcon({ class: [unref(props).ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
															}, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$3$1, mergeProps({
																key: 1,
																size: item.ui?.itemLeadingAvatarSize || unref(props).ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
															}, { ref_for: true }, item.avatar, {
																"data-slot": "itemLeadingAvatar",
																class: ui.value.itemLeadingAvatar({ class: [unref(props).ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
															}), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$4$1, mergeProps({
																key: 2,
																size: item.ui?.itemLeadingChipSize || unref(props).ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
																inset: "",
																standalone: ""
															}, { ref_for: true }, item.chip, {
																"data-slot": "itemLeadingChip",
																class: ui.value.itemLeadingChip({ class: [unref(props).ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
															}), null, 16, ["size", "class"])) : createCommentVNode("", true)]),
															createVNode("span", {
																"data-slot": "itemWrapper",
																class: ui.value.itemWrapper({ class: [unref(props).ui?.itemWrapper, isSelectItem(item) && item.ui?.itemWrapper] })
															}, [createVNode(unref(SelectItemText_default), {
																"data-slot": "itemLabel",
																class: ui.value.itemLabel({ class: [unref(props).ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] })
															}, {
																default: withCtx(() => [renderSlot(_ctx.$slots, "item-label", {
																	item,
																	index
																}, () => [createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, unref(props).labelKey) : item), 1)])]),
																_: 2
															}, 1032, ["class"]), isSelectItem(item) && (unref(get)(item, unref(props).descriptionKey) || !!slots["item-description"]) ? (openBlock(), createBlock("span", {
																key: 0,
																"data-slot": "itemDescription",
																class: ui.value.itemDescription({ class: [unref(props).ui?.itemDescription, isSelectItem(item) && item.ui?.itemDescription] })
															}, [renderSlot(_ctx.$slots, "item-description", {
																item,
																index
															}, () => [createTextVNode(toDisplayString(unref(get)(item, unref(props).descriptionKey)), 1)])], 2)) : createCommentVNode("", true)], 2),
															createVNode("span", {
																"data-slot": "itemTrailing",
																class: ui.value.itemTrailing({ class: [unref(props).ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] })
															}, [renderSlot(_ctx.$slots, "item-trailing", {
																item,
																index,
																ui: ui.value
															}), createVNode(unref(SelectItemIndicator_default), { "as-child": "" }, {
																default: withCtx(() => [createVNode(_sfc_main$5, {
																	name: unref(props).selectedIcon || unref(appConfig).ui.icons.check,
																	"data-slot": "itemTrailingIcon",
																	class: ui.value.itemTrailingIcon({ class: [unref(props).ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
																}, null, 8, ["name", "class"])]),
																_: 2
															}, 1024)], 2)
														])]),
														_: 2
													}, 1032, [
														"class",
														"disabled",
														"value",
														"onSelect"
													]))], 64);
												}), 128))]),
												_: 2
											}, 1032, ["class"]);
										}), 128))]),
										_: 3
									}, 8, ["class"])),
									renderSlot(_ctx.$slots, "content-bottom"),
									!!unref(props).arrow ? (openBlock(), createBlock(unref(SelectArrow_default), mergeProps({ key: 0 }, arrowProps.value, {
										"data-slot": "arrow",
										class: ui.value.arrow({ class: unref(props).ui?.arrow })
									}), null, 16, ["class"])) : createCommentVNode("", true)
								]),
								_: 3
							}, 16, ["class"])]),
							_: 3
						})]),
						_: 3
					}, 16)];
				}),
				_: 3
			}, _parent));
		};
	}
});
var _sfc_setup$1 = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Select.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region app/composables/useTableData.ts
function useTableData(source, options = {}) {
	const search = ref("");
	const rows = computed(() => toValue(source) ?? []);
	const valueOf = (row, key) => row[key];
	return {
		search,
		filteredRows: computed(() => {
			const query = search.value.trim().toLowerCase();
			if (!query) return rows.value;
			return rows.value.filter((row) => {
				return (options.searchKeys?.map((key) => valueOf(row, key)) ?? options.columns?.map((column) => column.value ? column.value(row) : valueOf(row, column.key)) ?? Object.values(row)).filter((value) => value != null).join(" ").toLowerCase().includes(query);
			});
		})
	};
}
//#endregion
//#region app/composables/service/users.ts
function useUserService() {
	const api = useApi();
	const error = ref("");
	const users = ref([]);
	const form = ref({
		id: null,
		fname: "",
		lname: "",
		username: "",
		password: "",
		confirm_password: "",
		role: "evaluatee"
	});
	const fetchUser = async () => {
		const res = await api.get("/users/get-users");
		users.value = res.data;
		return users.value;
	};
	const updateUser = async () => {
		if (form.value.id === null) return;
		await api.put(`/users/update-user/${form.value.id}`, form.value);
		await fetchUser();
	};
	const createUser = async () => {
		error.value = "";
		if (form.value.password !== form.value.confirm_password) {
			error.value = "รหัสผ่านไม่ตรงกัน";
			return false;
		}
		const { fname, lname, username, password, role } = form.value;
		await api.post("/users/create-user", {
			fname,
			lname,
			username,
			password,
			role
		});
		await fetchUser();
		return true;
	};
	const resetPassword = async () => {
		await api.put("/auth/reset-password");
	};
	return {
		error,
		form,
		users,
		fetchUser,
		updateUser,
		createUser,
		resetPassword
	};
}
//#endregion
//#region app/pages/admin/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		useHead$1({ title: "Manage users · PersonSystem" });
		const { users, fetchUser, createUser, form, error: formError } = useUserService();
		const roleColor = {
			evaluator: "bg-blue-50 text-blue-700",
			evaluatee: "bg-violet-50 text-violet-700",
			admin: "bg-gray-100 text-gray-700"
		};
		const cap = (s) => s[0].toUpperCase() + s.slice(1);
		const createRoleOptions = ["evaluatee", "evaluator"].map((role) => ({
			label: cap(role),
			value: role
		}));
		const fields = [
			{
				key: "fname",
				label: "First name",
				auto: "given-name"
			},
			{
				key: "lname",
				label: "Last name",
				auto: "family-name"
			},
			{
				key: "username",
				label: "Username",
				auto: "username",
				full: true
			},
			{
				key: "role",
				label: "Role",
				full: true
			},
			{
				key: "password",
				label: "Password",
				auto: "new-password",
				type: "password"
			},
			{
				key: "confirm_password",
				label: "Confirm password",
				auto: "new-password",
				type: "password"
			}
		];
		const loading = ref(false);
		const creating = ref(false);
		const createModalOpen = ref(false);
		const columns = [
			{
				key: "id",
				label: "ID"
			},
			{
				key: "name",
				label: "Name",
				value: (u) => [u.fname, u.lname].filter(Boolean).join(" ")
			},
			{
				key: "username",
				label: "Username"
			},
			{
				key: "role",
				label: "Role"
			}
		];
		const { search, filteredRows } = useTableData(users, { columns });
		async function loadUsers() {
			loading.value = true;
			try {
				await fetchUser();
			} catch (e) {} finally {
				loading.value = false;
			}
		}
		function openCreateModal() {
			form.value = {
				id: null,
				fname: "",
				lname: "",
				username: "",
				password: "",
				confirm_password: "",
				role: "evaluatee"
			};
			formError.value = "";
			createModalOpen.value = true;
		}
		async function submitCreateUser() {
			formError.value = "";
			creating.value = true;
			try {
				if (await createUser()) createModalOpen.value = false;
			} catch (e) {
				formError.value = e.message || "Unable to create user.";
			} finally {
				creating.value = false;
			}
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UIcon = _sfc_main$5;
			const _component_UButton = _sfc_main$4;
			const _component_BaseInput = BaseInput_default;
			const _component_Table = Table_default;
			const _component_UModal = _sfc_main$2;
			const _component_UAlert = _sfc_main$1;
			const _component_USelect = _sfc_main;
			const _component_UInput = _sfc_main$3;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "min-w-0 flex-1 px-5 py-5 sm:px-7" }, _attrs))}><div class="w-full space-y-4"><header class="flex flex-wrap items-center justify-between gap-4"><div><div class="mb-1 flex items-center gap-2 text-[11px] text-gray-400"><span>Workspace</span>`);
			_push(ssrRenderComponent(_component_UIcon, {
				name: "i-lucide-chevron-right",
				class: "size-3"
			}, null, _parent));
			_push(`<span class="text-gray-600">Manage users</span></div><h1 class="text-xl font-semibold tracking-tight text-gray-900">Manage users</h1><p class="mt-0.5 text-xs text-gray-500">View and manage the people in your workspace.</p></div><div class="flex items-center gap-2">`);
			_push(ssrRenderComponent(_component_UButton, {
				label: "Create user",
				icon: "i-lucide-user-plus",
				color: "neutral",
				onClick: openCreateModal
			}, null, _parent));
			_push(ssrRenderComponent(_component_UButton, {
				label: "Refresh",
				icon: "i-lucide-refresh-cw",
				color: "neutral",
				variant: "outline",
				loading: unref(loading),
				onClick: loadUsers
			}, null, _parent));
			_push(`</div></header><section class="overflow-hidden rounded-lg border border-gray-200 bg-white"><div class="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 px-3 py-2"><div class="flex min-w-0 flex-1 flex-wrap items-center gap-2">`);
			_push(ssrRenderComponent(_component_BaseInput, {
				modelValue: unref(search),
				"onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
				icon: "i-lucide-search",
				placeholder: "Search users…",
				"aria-label": "Search users",
				width: "search"
			}, null, _parent));
			_push(`</div></div>`);
			_push(ssrRenderComponent(_component_Table, {
				rows: unref(filteredRows),
				columns,
				loading: unref(loading),
				"empty-text": "No users match your search."
			}, {
				role: withCtx(({ value }, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="${ssrRenderClass([roleColor[value], "inline-flex rounded-full px-2.5 py-1 text-[11px] font-medium capitalize"])}"${_scopeId}>${ssrInterpolate(value)}</span>`);
					else return [createVNode("span", { class: ["inline-flex rounded-full px-2.5 py-1 text-[11px] font-medium capitalize", roleColor[value]] }, toDisplayString(value), 3)];
				}),
				_: 1
			}, _parent));
			_push(`<footer class="border-t border-gray-100 px-4 py-2 text-xs text-gray-500">${ssrInterpolate(unref(filteredRows).length)} users </footer></section></div>`);
			_push(ssrRenderComponent(_component_UModal, {
				open: unref(createModalOpen),
				"onUpdate:open": ($event) => isRef(createModalOpen) ? createModalOpen.value = $event : null
			}, {
				content: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="space-y-5 p-5 sm:p-6"${_scopeId}><header class="space-y-1"${_scopeId}><h2 class="text-lg font-semibold text-gray-900"${_scopeId}>Create user</h2><p class="text-sm text-gray-500"${_scopeId}>Add a user to your workspace.</p></header>`);
						if (unref(formError)) _push(ssrRenderComponent(_component_UAlert, {
							color: "error",
							variant: "soft",
							title: "Could not create user",
							description: unref(formError)
						}, null, _parent, _scopeId));
						else _push(`<!---->`);
						_push(`<form class="grid gap-x-3 gap-y-4 sm:grid-cols-2"${_scopeId}><!--[-->`);
						ssrRenderList(fields, (f) => {
							_push(`<label class="${ssrRenderClass([{ "sm:col-span-2": f.full }, "block space-y-1.5"])}"${_scopeId}><span class="text-sm font-medium text-gray-700"${_scopeId}>${ssrInterpolate(f.label)}</span>`);
							if (f.key === "role") _push(ssrRenderComponent(_component_USelect, {
								modelValue: unref(form).role,
								"onUpdate:modelValue": ($event) => unref(form).role = $event,
								items: unref(createRoleOptions),
								required: "",
								class: "w-full"
							}, null, _parent, _scopeId));
							else _push(ssrRenderComponent(_component_UInput, {
								modelValue: unref(form)[f.key],
								"onUpdate:modelValue": ($event) => unref(form)[f.key] = $event,
								type: f.type,
								autocomplete: f.auto,
								required: "",
								class: "w-full"
							}, null, _parent, _scopeId));
							_push(`</label>`);
						});
						_push(`<!--]--><footer class="flex justify-end gap-2 border-t border-gray-100 pt-4 sm:col-span-2"${_scopeId}>`);
						_push(ssrRenderComponent(_component_UButton, {
							label: "Cancel",
							color: "neutral",
							variant: "ghost",
							type: "button",
							disabled: unref(creating),
							onClick: ($event) => createModalOpen.value = false
						}, null, _parent, _scopeId));
						_push(ssrRenderComponent(_component_UButton, {
							label: "Create user",
							color: "neutral",
							type: "submit",
							loading: unref(creating)
						}, null, _parent, _scopeId));
						_push(`</footer></form></div>`);
					} else return [createVNode("div", { class: "space-y-5 p-5 sm:p-6" }, [
						createVNode("header", { class: "space-y-1" }, [createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Create user"), createVNode("p", { class: "text-sm text-gray-500" }, "Add a user to your workspace.")]),
						unref(formError) ? (openBlock(), createBlock(_component_UAlert, {
							key: 0,
							color: "error",
							variant: "soft",
							title: "Could not create user",
							description: unref(formError)
						}, null, 8, ["description"])) : createCommentVNode("", true),
						createVNode("form", {
							class: "grid gap-x-3 gap-y-4 sm:grid-cols-2",
							onSubmit: withModifiers(submitCreateUser, ["prevent"])
						}, [(openBlock(), createBlock(Fragment, null, renderList(fields, (f) => {
							return createVNode("label", {
								key: f.key,
								class: ["block space-y-1.5", { "sm:col-span-2": f.full }]
							}, [createVNode("span", { class: "text-sm font-medium text-gray-700" }, toDisplayString(f.label), 1), f.key === "role" ? (openBlock(), createBlock(_component_USelect, {
								key: 0,
								modelValue: unref(form).role,
								"onUpdate:modelValue": ($event) => unref(form).role = $event,
								items: unref(createRoleOptions),
								required: "",
								class: "w-full"
							}, null, 8, [
								"modelValue",
								"onUpdate:modelValue",
								"items"
							])) : (openBlock(), createBlock(_component_UInput, {
								key: 1,
								modelValue: unref(form)[f.key],
								"onUpdate:modelValue": ($event) => unref(form)[f.key] = $event,
								type: f.type,
								autocomplete: f.auto,
								required: "",
								class: "w-full"
							}, null, 8, [
								"modelValue",
								"onUpdate:modelValue",
								"type",
								"autocomplete"
							]))], 2);
						}), 64)), createVNode("footer", { class: "flex justify-end gap-2 border-t border-gray-100 pt-4 sm:col-span-2" }, [createVNode(_component_UButton, {
							label: "Cancel",
							color: "neutral",
							variant: "ghost",
							type: "button",
							disabled: unref(creating),
							onClick: ($event) => createModalOpen.value = false
						}, null, 8, ["disabled", "onClick"]), createVNode(_component_UButton, {
							label: "Create user",
							color: "neutral",
							type: "submit",
							loading: unref(creating)
						}, null, 8, ["loading"])])], 32)
					])];
				}),
				_: 1
			}, _parent));
			_push(`</main>`);
		};
	}
});
//#endregion
//#region app/pages/admin/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var admin_default = index_vue_vue_type_script_setup_true_lang_default;

export { admin_default as default };
//# sourceMappingURL=admin-BJG8oLjt.mjs.map
