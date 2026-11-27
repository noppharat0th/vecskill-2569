import { L as __exportAll, J as useState, N as NuxtLink, a as _sfc_main$5, b as _sfc_main$2, c as useComponentProps, e as useAppConfig, M as injectTooltipProviderContext, f as useForwardProps, g as usePortal, t as tv, F as FieldGroupReset, p as useForwardExpose, P as Primitive, T as Teleport_default, q as Presence_default, x as createContext, V as VisuallyHidden_default, y as useForwardProps$1 } from '../virtual/entry.mjs';
import { P as PopperRoot_default, u as useId$1, b as PopperAnchor_default, c as useForwardPropsEmits, d as PopperArrow_default, D as DismissableLayer_default, e as PopperContent_default } from './PopperArrow-3aLlQXRX.mjs';
import { u as useAuth, _ as _virtual_public__2Flogo2_default } from './_virtual_public-DtqpTDnc.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, useSlots, toRef, computed, renderSlot, Fragment, renderList, watch, ref, toHandlers, normalizeProps, guardReactiveProps, resolveDynamicComponent, createTextVNode, withModifiers, watchEffect, reactive, useSSRContext } from 'vue';
import { B as defu } from '../_/nitro.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { reactivePick, useVModel, useTimeoutFn, createSharedComposable } from '@vueuse/core';
import { refAutoReset, tryOnScopeDispose, createEventHook } from '@vueuse/shared';
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
import './useApi-BHbECEYe.mjs';
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

//#region node_modules/reka-ui/dist/shared/useGraceArea.js
function useGraceArea(triggerElement, containerElement) {
	const isPointerInTransit = refAutoReset(false, 300);
	tryOnScopeDispose(() => {
		isPointerInTransit.value = false;
	});
	const pointerGraceArea = ref(null);
	const pointerExit = createEventHook();
	function handleRemoveGraceArea() {
		pointerGraceArea.value = null;
		isPointerInTransit.value = false;
	}
	function handleCreateGraceArea(event, hoverTarget) {
		if (!hoverTarget) return;
		const currentTarget = event.currentTarget;
		const exitPoint = {
			x: event.clientX,
			y: event.clientY
		};
		const paddedExitPoints = getPaddedExitPoints(exitPoint, getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect()), 1);
		const hoverTargetPoints = getPointsFromRect(hoverTarget.getBoundingClientRect());
		const graceArea = getHull([...paddedExitPoints, ...hoverTargetPoints]);
		pointerGraceArea.value = graceArea;
		isPointerInTransit.value = true;
	}
	watchEffect((cleanupFn) => {
		if (triggerElement.value && containerElement.value) {
			const handleTriggerLeave = (event) => handleCreateGraceArea(event, containerElement.value);
			const handleContentLeave = (event) => handleCreateGraceArea(event, triggerElement.value);
			triggerElement.value.addEventListener("pointerleave", handleTriggerLeave);
			containerElement.value.addEventListener("pointerleave", handleContentLeave);
			cleanupFn(() => {
				triggerElement.value?.removeEventListener("pointerleave", handleTriggerLeave);
				containerElement.value?.removeEventListener("pointerleave", handleContentLeave);
			});
		}
	});
	watchEffect((cleanupFn) => {
		if (pointerGraceArea.value) {
			const handleTrackPointerGrace = (event) => {
				if (!pointerGraceArea.value || !(event.target instanceof Element)) return;
				const target = event.target;
				const pointerPosition = {
					x: event.clientX,
					y: event.clientY
				};
				const hasEnteredTarget = triggerElement.value?.contains(target) || containerElement.value?.contains(target);
				const isPointerOutsideGraceArea = !isPointInPolygon(pointerPosition, pointerGraceArea.value);
				const isAnotherGraceAreaTrigger = !!target.closest("[data-grace-area-trigger]");
				if (hasEnteredTarget) handleRemoveGraceArea();
				else if (isPointerOutsideGraceArea || isAnotherGraceAreaTrigger) {
					handleRemoveGraceArea();
					pointerExit.trigger();
				}
			};
			triggerElement.value?.ownerDocument.addEventListener("pointermove", handleTrackPointerGrace);
			cleanupFn(() => triggerElement.value?.ownerDocument.removeEventListener("pointermove", handleTrackPointerGrace));
		}
	});
	return {
		isPointerInTransit,
		onPointerExit: pointerExit.on
	};
}
function getExitSideFromRect(point, rect) {
	const top = Math.abs(rect.top - point.y);
	const bottom = Math.abs(rect.bottom - point.y);
	const right = Math.abs(rect.right - point.x);
	const left = Math.abs(rect.left - point.x);
	switch (Math.min(top, bottom, right, left)) {
		case left: return "left";
		case right: return "right";
		case top: return "top";
		case bottom: return "bottom";
		default: throw new Error("unreachable");
	}
}
function getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
	const paddedExitPoints = [];
	switch (exitSide) {
		case "top":
			paddedExitPoints.push({
				x: exitPoint.x - padding,
				y: exitPoint.y + padding
			}, {
				x: exitPoint.x + padding,
				y: exitPoint.y + padding
			});
			break;
		case "bottom":
			paddedExitPoints.push({
				x: exitPoint.x - padding,
				y: exitPoint.y - padding
			}, {
				x: exitPoint.x + padding,
				y: exitPoint.y - padding
			});
			break;
		case "left":
			paddedExitPoints.push({
				x: exitPoint.x + padding,
				y: exitPoint.y - padding
			}, {
				x: exitPoint.x + padding,
				y: exitPoint.y + padding
			});
			break;
		case "right": paddedExitPoints.push({
			x: exitPoint.x - padding,
			y: exitPoint.y - padding
		}, {
			x: exitPoint.x - padding,
			y: exitPoint.y + padding
		});
	}
	return paddedExitPoints;
}
function getPointsFromRect(rect) {
	const { top, right, bottom, left } = rect;
	return [
		{
			x: left,
			y: top
		},
		{
			x: right,
			y: top
		},
		{
			x: right,
			y: bottom
		},
		{
			x: left,
			y: bottom
		}
	];
}
function isPointInPolygon(point, polygon) {
	const { x, y } = point;
	let inside = false;
	for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
		const xi = polygon[i].x;
		const yi = polygon[i].y;
		const xj = polygon[j].x;
		const yj = polygon[j].y;
		if (yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
	}
	return inside;
}
function getHull(points) {
	const newPoints = points.slice();
	newPoints.sort((a, b) => {
		if (a.x < b.x) return -1;
		else if (a.x > b.x) return 1;
		else if (a.y < b.y) return -1;
		else if (a.y > b.y) return 1;
		else return 0;
	});
	return getHullPresorted(newPoints);
}
function getHullPresorted(points) {
	if (points.length <= 1) return points.slice();
	const upperHull = [];
	for (let i = 0; i < points.length; i++) {
		const p = points[i];
		while (upperHull.length >= 2) {
			const q = upperHull.at(-1);
			const r = upperHull[upperHull.length - 2];
			if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) upperHull.pop();
			else break;
		}
		upperHull.push(p);
	}
	upperHull.pop();
	const lowerHull = [];
	for (let i = points.length - 1; i >= 0; i--) {
		const p = points[i];
		while (lowerHull.length >= 2) {
			const q = lowerHull.at(-1);
			const r = lowerHull[lowerHull.length - 2];
			if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) lowerHull.pop();
			else break;
		}
		lowerHull.push(p);
	}
	lowerHull.pop();
	if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) return upperHull;
	else return upperHull.concat(lowerHull);
}
//#endregion
//#region node_modules/reka-ui/dist/Tooltip/TooltipArrow.js
var TooltipArrow_default = /* @__PURE__ */ defineComponent({
	__name: "TooltipArrow",
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
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(PopperArrow_default), normalizeProps(guardReactiveProps(props)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Tooltip/utils.js
var TOOLTIP_OPEN = "tooltip.open";
//#endregion
//#region node_modules/reka-ui/dist/Tooltip/TooltipRoot.js
var [injectTooltipRootContext, provideTooltipRootContext] = /*#__PURE__*/ createContext("TooltipRoot");
var TooltipRoot_default = /* @__PURE__ */ defineComponent({
	__name: "TooltipRoot",
	props: {
		defaultOpen: {
			type: Boolean,
			required: false,
			default: false
		},
		open: {
			type: Boolean,
			required: false,
			default: void 0
		},
		delayDuration: {
			type: Number,
			required: false,
			default: void 0
		},
		disableHoverableContent: {
			type: Boolean,
			required: false,
			default: void 0
		},
		disableClosingTrigger: {
			type: Boolean,
			required: false,
			default: void 0
		},
		disabled: {
			type: Boolean,
			required: false,
			default: void 0
		},
		ignoreNonKeyboardFocus: {
			type: Boolean,
			required: false,
			default: void 0
		}
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		useForwardExpose();
		const providerContext = injectTooltipProviderContext();
		const disableHoverableContent = computed(() => props.disableHoverableContent ?? providerContext.disableHoverableContent.value);
		const disableClosingTrigger = computed(() => props.disableClosingTrigger ?? providerContext.disableClosingTrigger.value);
		const disableTooltip = computed(() => props.disabled ?? providerContext.disabled.value);
		const delayDuration = computed(() => props.delayDuration ?? providerContext.delayDuration.value);
		const ignoreNonKeyboardFocus = computed(() => props.ignoreNonKeyboardFocus ?? providerContext.ignoreNonKeyboardFocus.value);
		const open = useVModel(props, "open", emit, {
			defaultValue: props.defaultOpen,
			passive: props.open === void 0
		});
		watch(open, (isOpen) => {
			if (!providerContext.onClose) return;
			if (isOpen) {
				providerContext.onOpen();
				(void 0).dispatchEvent(new CustomEvent(TOOLTIP_OPEN));
			} else providerContext.onClose();
		});
		const wasOpenDelayedRef = ref(false);
		const trigger = ref();
		const stateAttribute = computed(() => {
			if (!open.value) return "closed";
			return wasOpenDelayedRef.value ? "delayed-open" : "instant-open";
		});
		const { start: startTimer, stop: clearTimer } = useTimeoutFn(() => {
			wasOpenDelayedRef.value = true;
			open.value = true;
		}, delayDuration, { immediate: false });
		function handleOpen() {
			clearTimer();
			wasOpenDelayedRef.value = false;
			open.value = true;
		}
		function handleClose() {
			clearTimer();
			open.value = false;
		}
		function handleDelayedOpen() {
			startTimer();
		}
		provideTooltipRootContext({
			contentId: "",
			open,
			stateAttribute,
			trigger,
			onTriggerChange(el) {
				trigger.value = el;
			},
			onTriggerEnter() {
				if (providerContext.isOpenDelayed.value) handleDelayedOpen();
				else handleOpen();
			},
			onTriggerLeave() {
				if (disableHoverableContent.value) handleClose();
				else clearTimer();
			},
			onOpen: handleOpen,
			onClose: handleClose,
			disableHoverableContent,
			disableClosingTrigger,
			disabled: disableTooltip,
			ignoreNonKeyboardFocus
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(PopperRoot_default), null, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", { open: unref(open) })]),
				_: 3
			});
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Tooltip/TooltipContentImpl.js
var TooltipContentImpl_default = /* @__PURE__ */ defineComponent({
	__name: "TooltipContentImpl",
	props: {
		ariaLabel: {
			type: String,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false,
			default: void 0
		},
		as: {
			type: null,
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
		align: {
			type: null,
			required: false
		},
		alignOffset: {
			type: Number,
			required: false
		},
		avoidCollisions: {
			type: Boolean,
			required: false,
			default: void 0
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
		sticky: {
			type: String,
			required: false
		},
		hideWhenDetached: {
			type: Boolean,
			required: false,
			default: void 0
		},
		positionStrategy: {
			type: String,
			required: false
		},
		updatePositionStrategy: {
			type: String,
			required: false
		}
	},
	emits: ["escapeKeyDown", "pointerDownOutside"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const rootContext = injectTooltipRootContext();
		const providerContext = injectTooltipProviderContext();
		const { forwardRef, currentElement } = useForwardExpose();
		const ariaLabel = computed(() => props.ariaLabel || currentElement.value?.textContent);
		const popperContentProps = computed(() => {
			const { ariaLabel: _, ...restProps } = props;
			return defu(restProps, providerContext.content.value ?? {}, {
				side: "top",
				sideOffset: 0,
				align: "center",
				avoidCollisions: true,
				collisionBoundary: [],
				collisionPadding: 0,
				arrowPadding: 0,
				sticky: "partial",
				hideWhenDetached: false
			});
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(DismissableLayer_default), {
				"as-child": "",
				"disable-outside-pointer-events": false,
				onEscapeKeyDown: _cache[0] || (_cache[0] = ($event) => emits("escapeKeyDown", $event)),
				onPointerDownOutside: _cache[1] || (_cache[1] = (event) => {
					if (unref(rootContext).disableClosingTrigger.value && unref(rootContext).trigger.value?.contains(event.target)) event.preventDefault();
					emits("pointerDownOutside", event);
				}),
				onFocusOutside: _cache[2] || (_cache[2] = withModifiers(() => {}, ["prevent"])),
				onDismiss: _cache[3] || (_cache[3] = ($event) => unref(rootContext).onClose())
			}, {
				default: withCtx(() => [createVNode(unref(PopperContent_default), mergeProps({
					ref: unref(forwardRef),
					"data-state": unref(rootContext).stateAttribute.value
				}, {
					..._ctx.$attrs,
					...popperContentProps.value
				}, { style: {
					"--reka-tooltip-content-transform-origin": "var(--reka-popper-transform-origin)",
					"--reka-tooltip-content-available-width": "var(--reka-popper-available-width)",
					"--reka-tooltip-content-available-height": "var(--reka-popper-available-height)",
					"--reka-tooltip-trigger-width": "var(--reka-popper-anchor-width)",
					"--reka-tooltip-trigger-height": "var(--reka-popper-anchor-height)"
				} }), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default"), createVNode(unref(VisuallyHidden_default), {
						id: unref(rootContext).contentId,
						role: "tooltip"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(ariaLabel.value), 1)]),
						_: 1
					}, 8, ["id"])]),
					_: 3
				}, 16, ["data-state"])]),
				_: 3
			});
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Tooltip/TooltipContentHoverable.js
var TooltipContentHoverable_default = /* @__PURE__ */ defineComponent({
	__name: "TooltipContentHoverable",
	props: {
		ariaLabel: {
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
		side: {
			type: null,
			required: false
		},
		sideOffset: {
			type: Number,
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
		}
	},
	setup(__props) {
		const forwardedProps = useForwardProps$1(__props);
		const { forwardRef, currentElement } = useForwardExpose();
		const { trigger, onClose } = injectTooltipRootContext();
		const providerContext = injectTooltipProviderContext();
		const { isPointerInTransit, onPointerExit } = useGraceArea(trigger, currentElement);
		providerContext.isPointerInTransitRef = isPointerInTransit;
		onPointerExit(() => {
			onClose();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(TooltipContentImpl_default, mergeProps({ ref: unref(forwardRef) }, unref(forwardedProps)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Tooltip/TooltipContent.js
var TooltipContent_default = /* @__PURE__ */ defineComponent({
	__name: "TooltipContent",
	props: {
		forceMount: {
			type: Boolean,
			required: false
		},
		ariaLabel: {
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
		side: {
			type: null,
			required: false
		},
		sideOffset: {
			type: Number,
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
		}
	},
	emits: ["escapeKeyDown", "pointerDownOutside"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const rootContext = injectTooltipRootContext();
		const forwarded = useForwardPropsEmits(props, emits);
		const { forwardRef } = useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Presence_default), { present: _ctx.forceMount || unref(rootContext).open.value }, {
				default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(unref(rootContext).disableHoverableContent.value ? TooltipContentImpl_default : TooltipContentHoverable_default), mergeProps({ ref: unref(forwardRef) }, unref(forwarded)), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16))]),
				_: 3
			}, 8, ["present"]);
		};
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Tooltip/TooltipPortal.js
var TooltipPortal_default = /* @__PURE__ */ defineComponent({
	__name: "TooltipPortal",
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
//#region node_modules/reka-ui/dist/Tooltip/TooltipTrigger.js
var TooltipTrigger_default = /* @__PURE__ */ defineComponent({
	__name: "TooltipTrigger",
	props: {
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
		const rootContext = injectTooltipRootContext();
		const providerContext = injectTooltipProviderContext();
		rootContext.contentId ||= useId$1(void 0, "reka-tooltip-content");
		const { forwardRef} = useForwardExpose();
		const isPointerDown = ref(false);
		const hasPointerMoveOpened = ref(false);
		const tooltipListeners = computed(() => {
			if (rootContext.disabled.value) return {};
			return {
				click: handleClick,
				focus: handleFocus,
				pointermove: handlePointerMove,
				pointerleave: handlePointerLeave,
				pointerdown: handlePointerDown,
				blur: handleBlur
			};
		});
		function handlePointerUp() {
			setTimeout(() => {
				isPointerDown.value = false;
			}, 1);
		}
		function handlePointerDown() {
			if (rootContext.open && !rootContext.disableClosingTrigger.value) rootContext.onClose();
			isPointerDown.value = true;
			(void 0).addEventListener("pointerup", handlePointerUp, { once: true });
		}
		function handlePointerMove(event) {
			if (event.pointerType === "touch") return;
			if (!hasPointerMoveOpened.value && !providerContext.isPointerInTransitRef.value) {
				rootContext.onTriggerEnter();
				hasPointerMoveOpened.value = true;
			}
		}
		function handlePointerLeave() {
			rootContext.onTriggerLeave();
			hasPointerMoveOpened.value = false;
		}
		function handleFocus(event) {
			if (isPointerDown.value) return;
			if (rootContext.ignoreNonKeyboardFocus.value && !event.target.matches?.(":focus-visible")) return;
			rootContext.onOpen();
		}
		function handleBlur() {
			rootContext.onClose();
		}
		function handleClick() {
			if (!rootContext.disableClosingTrigger.value) rootContext.onClose();
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(PopperAnchor_default), {
				"as-child": "",
				reference: _ctx.reference
			}, {
				default: withCtx(() => [createVNode(unref(Primitive), mergeProps({
					ref: unref(forwardRef),
					"aria-describedby": unref(rootContext).open.value ? unref(rootContext).contentId : void 0,
					"data-state": unref(rootContext).stateAttribute.value,
					as: _ctx.as,
					"as-child": props.asChild,
					"data-grace-area-trigger": ""
				}, toHandlers(tooltipListeners.value)), {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 16, [
					"aria-describedby",
					"data-state",
					"as",
					"as-child"
				])]),
				_: 3
			}, 8, ["reference"]);
		};
	}
});
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/composables/useKbd.js
var kbdKeysMap = {
	meta: "",
	ctrl: "",
	alt: "",
	win: "⊞",
	command: "⌘",
	shift: "⇧",
	control: "⌃",
	option: "⌥",
	enter: "↵",
	delete: "⌦",
	backspace: "⌫",
	escape: "Esc",
	tab: "⇥",
	capslock: "⇪",
	arrowup: "↑",
	arrowright: "→",
	arrowdown: "↓",
	arrowleft: "←",
	pageup: "⇞",
	pagedown: "⇟",
	home: "↖",
	end: "↘"
};
var _useKbd = () => {
	const macOS = computed(() => false);
	const kbdKeysSpecificMap = reactive({
		meta: " ",
		alt: " ",
		ctrl: " "
	});
	function getKbdKey(value) {
		if (!value) return;
		if ([
			"meta",
			"alt",
			"ctrl"
		].includes(value)) return kbdKeysSpecificMap[value];
		return kbdKeysMap[value] || value;
	}
	return {
		macOS,
		getKbdKey
	};
};
var useKbd = /* @__PURE__ */ createSharedComposable(_useKbd);
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Fkbd.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fkbd_default = {
	"base": "inline-flex items-center justify-center px-1 rounded-sm font-medium font-sans uppercase",
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
		"size": {
			"sm": "h-4 min-w-[16px] text-[10px]",
			"md": "h-5 min-w-[20px] text-[11px]",
			"lg": "h-6 min-w-[24px] text-[12px]"
		}
	},
	"compoundVariants": [
		{
			"color": "primary",
			"variant": "solid",
			"class": "text-inverted bg-primary"
		},
		{
			"color": "secondary",
			"variant": "solid",
			"class": "text-inverted bg-secondary"
		},
		{
			"color": "success",
			"variant": "solid",
			"class": "text-inverted bg-success"
		},
		{
			"color": "info",
			"variant": "solid",
			"class": "text-inverted bg-info"
		},
		{
			"color": "warning",
			"variant": "solid",
			"class": "text-inverted bg-warning"
		},
		{
			"color": "error",
			"variant": "solid",
			"class": "text-inverted bg-error"
		},
		{
			"color": "primary",
			"variant": "outline",
			"class": "ring ring-inset ring-primary/50 text-primary"
		},
		{
			"color": "secondary",
			"variant": "outline",
			"class": "ring ring-inset ring-secondary/50 text-secondary"
		},
		{
			"color": "success",
			"variant": "outline",
			"class": "ring ring-inset ring-success/50 text-success"
		},
		{
			"color": "info",
			"variant": "outline",
			"class": "ring ring-inset ring-info/50 text-info"
		},
		{
			"color": "warning",
			"variant": "outline",
			"class": "ring ring-inset ring-warning/50 text-warning"
		},
		{
			"color": "error",
			"variant": "outline",
			"class": "ring ring-inset ring-error/50 text-error"
		},
		{
			"color": "primary",
			"variant": "soft",
			"class": "text-primary bg-primary/10"
		},
		{
			"color": "secondary",
			"variant": "soft",
			"class": "text-secondary bg-secondary/10"
		},
		{
			"color": "success",
			"variant": "soft",
			"class": "text-success bg-success/10"
		},
		{
			"color": "info",
			"variant": "soft",
			"class": "text-info bg-info/10"
		},
		{
			"color": "warning",
			"variant": "soft",
			"class": "text-warning bg-warning/10"
		},
		{
			"color": "error",
			"variant": "soft",
			"class": "text-error bg-error/10"
		},
		{
			"color": "primary",
			"variant": "subtle",
			"class": "text-primary ring ring-inset ring-primary/25 bg-primary/10"
		},
		{
			"color": "secondary",
			"variant": "subtle",
			"class": "text-secondary ring ring-inset ring-secondary/25 bg-secondary/10"
		},
		{
			"color": "success",
			"variant": "subtle",
			"class": "text-success ring ring-inset ring-success/25 bg-success/10"
		},
		{
			"color": "info",
			"variant": "subtle",
			"class": "text-info ring ring-inset ring-info/25 bg-info/10"
		},
		{
			"color": "warning",
			"variant": "subtle",
			"class": "text-warning ring ring-inset ring-warning/25 bg-warning/10"
		},
		{
			"color": "error",
			"variant": "subtle",
			"class": "text-error ring ring-inset ring-error/25 bg-error/10"
		},
		{
			"color": "neutral",
			"variant": "solid",
			"class": "text-inverted bg-inverted"
		},
		{
			"color": "neutral",
			"variant": "outline",
			"class": "ring ring-inset ring-accented text-default bg-default"
		},
		{
			"color": "neutral",
			"variant": "soft",
			"class": "text-default bg-elevated"
		},
		{
			"color": "neutral",
			"variant": "subtle",
			"class": "ring ring-inset ring-accented text-default bg-elevated"
		}
	],
	"defaultVariants": {
		"variant": "outline",
		"color": "neutral",
		"size": "md"
	}
};
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/components/Kbd.vue
var _sfc_main$1 = {
	__name: "UKbd",
	__ssrInlineRender: true,
	props: {
		as: {
			type: null,
			required: false,
			default: "kbd"
		},
		value: {
			type: null,
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
		class: {
			type: null,
			required: false
		},
		ui: {
			type: Object,
			required: false
		}
	},
	setup(__props) {
		const props = useComponentProps("kbd", __props);
		const { getKbdKey } = useKbd();
		const appConfig = useAppConfig();
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Fkbd_default,
			...appConfig.ui?.kbd || {}
		}));
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(Primitive), mergeProps({
				as: unref(props).as,
				class: ui.value({
					class: [unref(props).ui?.base, unref(props).class],
					color: unref(props).color,
					variant: unref(props).variant,
					size: unref(props).size
				})
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {}, () => {
						_push(`${ssrInterpolate(unref(getKbdKey)(unref(props).value))}`);
					}, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default", {}, () => [createTextVNode(toDisplayString(unref(getKbdKey)(unref(props).value)), 1)])];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$2 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Kbd.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
//#endregion
//#region virtual:nuxt:node_modules%2F.cache%2Fnuxt%2F.nuxt%2Fui%2Ftooltip.ts
var virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Ftooltip_default = { "slots": {
	"content": "flex items-center gap-1 bg-default text-highlighted shadow-sm rounded-sm ring ring-default h-6 px-2.5 py-1 text-xs select-none data-[state=delayed-open]:animate-[scale-in_100ms_var(--ease-out)] data-[state=closed]:animate-[scale-out_100ms_var(--ease-out)] origin-(--reka-tooltip-content-transform-origin) pointer-events-auto",
	"arrow": "fill-bg stroke-default",
	"text": "truncate",
	"kbds": "hidden lg:inline-flex items-center shrink-0 gap-0.5 not-first-of-type:before:content-['·'] not-first-of-type:before:me-0.5",
	"kbdsSize": "sm"
} };
//#endregion
//#region node_modules/@nuxt/ui/dist/runtime/components/Tooltip.vue
var _sfc_main = {
	__name: "UTooltip",
	__ssrInlineRender: true,
	props: {
		text: {
			type: String,
			required: false
		},
		kbds: {
			type: Array,
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
		reference: {
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
		defaultOpen: {
			type: Boolean,
			required: false
		},
		open: {
			type: Boolean,
			required: false
		},
		delayDuration: {
			type: Number,
			required: false
		},
		disableHoverableContent: {
			type: Boolean,
			required: false
		},
		disableClosingTrigger: {
			type: Boolean,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		},
		ignoreNonKeyboardFocus: {
			type: Boolean,
			required: false
		}
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const _props = __props;
		const emits = __emit;
		const slots = useSlots();
		const props = useComponentProps("tooltip", _props);
		const appConfig = useAppConfig();
		const providerContext = injectTooltipProviderContext();
		const rootProps = useForwardProps(reactivePick(props, "defaultOpen", "open", "delayDuration", "disableHoverableContent", "disableClosingTrigger", "ignoreNonKeyboardFocus"), emits);
		const portalProps = usePortal(toRef(() => props.portal));
		const contentProps = toRef(() => defu(props.content, providerContext.content.value, {
			side: "bottom",
			sideOffset: 8,
			collisionPadding: 8
		}));
		const arrowProps = toRef(() => defu(props.arrow, { rounded: true }));
		const ui = computed(() => tv({
			extend: virtual_nuxt_node_modules_2F_cache_2Fnuxt_2F_nuxt_2Fui_2Ftooltip_default,
			...appConfig.ui?.tooltip || {}
		})({ side: contentProps.value.side }));
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(TooltipRoot_default), mergeProps(unref(rootProps), { disabled: !(unref(props).text || unref(props).kbds?.length || !!slots.content) || unref(props).disabled }, _attrs), {
				default: withCtx(({ open }, _push, _parent, _scopeId) => {
					if (_push) {
						if (!!slots.default || !!unref(props).reference) _push(ssrRenderComponent(unref(TooltipTrigger_default), mergeProps(_ctx.$attrs, {
							"as-child": "",
							reference: unref(props).reference,
							class: unref(props).class
						}), {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push, _parent, _scopeId);
								else return [renderSlot(_ctx.$slots, "default", { open })];
							}),
							_: 2
						}, _parent, _scopeId));
						else _push(`<!---->`);
						_push(ssrRenderComponent(unref(TooltipPortal_default), unref(portalProps), {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(ssrRenderComponent(unref(FieldGroupReset), null, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) _push(ssrRenderComponent(unref(TooltipContent_default), mergeProps(contentProps.value, {
											"data-slot": "content",
											class: ui.value.content({ class: [!slots.default && unref(props).class, unref(props).ui?.content] })
										}), {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) {
													ssrRenderSlot(_ctx.$slots, "content", { ui: ui.value }, () => {
														if (unref(props).text) _push(`<span data-slot="text" class="${ssrRenderClass(ui.value.text({ class: unref(props).ui?.text }))}"${_scopeId}>${ssrInterpolate(unref(props).text)}</span>`);
														else _push(`<!---->`);
														if (unref(props).kbds?.length) {
															_push(`<span data-slot="kbds" class="${ssrRenderClass(ui.value.kbds({ class: unref(props).ui?.kbds }))}"${_scopeId}><!--[-->`);
															ssrRenderList(unref(props).kbds, (kbd, index) => {
																_push(ssrRenderComponent(_sfc_main$1, mergeProps({
																	key: index,
																	size: unref(props).ui?.kbdsSize || ui.value.kbdsSize()
																}, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, _parent, _scopeId));
															});
															_push(`<!--]--></span>`);
														} else _push(`<!---->`);
													}, _push, _parent, _scopeId);
													if (!!unref(props).arrow) _push(ssrRenderComponent(unref(TooltipArrow_default), mergeProps(arrowProps.value, {
														"data-slot": "arrow",
														class: ui.value.arrow({ class: unref(props).ui?.arrow })
													}), null, _parent, _scopeId));
													else _push(`<!---->`);
												} else return [renderSlot(_ctx.$slots, "content", { ui: ui.value }, () => [unref(props).text ? (openBlock(), createBlock("span", {
													key: 0,
													"data-slot": "text",
													class: ui.value.text({ class: unref(props).ui?.text })
												}, toDisplayString(unref(props).text), 3)) : createCommentVNode("", true), unref(props).kbds?.length ? (openBlock(), createBlock("span", {
													key: 1,
													"data-slot": "kbds",
													class: ui.value.kbds({ class: unref(props).ui?.kbds })
												}, [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).kbds, (kbd, index) => {
													return openBlock(), createBlock(_sfc_main$1, mergeProps({
														key: index,
														size: unref(props).ui?.kbdsSize || ui.value.kbdsSize()
													}, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
												}), 128))], 2)) : createCommentVNode("", true)]), !!unref(props).arrow ? (openBlock(), createBlock(unref(TooltipArrow_default), mergeProps({ key: 0 }, arrowProps.value, {
													"data-slot": "arrow",
													class: ui.value.arrow({ class: unref(props).ui?.arrow })
												}), null, 16, ["class"])) : createCommentVNode("", true)];
											}),
											_: 2
										}, _parent, _scopeId));
										else return [createVNode(unref(TooltipContent_default), mergeProps(contentProps.value, {
											"data-slot": "content",
											class: ui.value.content({ class: [!slots.default && unref(props).class, unref(props).ui?.content] })
										}), {
											default: withCtx(() => [renderSlot(_ctx.$slots, "content", { ui: ui.value }, () => [unref(props).text ? (openBlock(), createBlock("span", {
												key: 0,
												"data-slot": "text",
												class: ui.value.text({ class: unref(props).ui?.text })
											}, toDisplayString(unref(props).text), 3)) : createCommentVNode("", true), unref(props).kbds?.length ? (openBlock(), createBlock("span", {
												key: 1,
												"data-slot": "kbds",
												class: ui.value.kbds({ class: unref(props).ui?.kbds })
											}, [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).kbds, (kbd, index) => {
												return openBlock(), createBlock(_sfc_main$1, mergeProps({
													key: index,
													size: unref(props).ui?.kbdsSize || ui.value.kbdsSize()
												}, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
											}), 128))], 2)) : createCommentVNode("", true)]), !!unref(props).arrow ? (openBlock(), createBlock(unref(TooltipArrow_default), mergeProps({ key: 0 }, arrowProps.value, {
												"data-slot": "arrow",
												class: ui.value.arrow({ class: unref(props).ui?.arrow })
											}), null, 16, ["class"])) : createCommentVNode("", true)]),
											_: 3
										}, 16, ["class"])];
									}),
									_: 2
								}, _parent, _scopeId));
								else return [createVNode(unref(FieldGroupReset), null, {
									default: withCtx(() => [createVNode(unref(TooltipContent_default), mergeProps(contentProps.value, {
										"data-slot": "content",
										class: ui.value.content({ class: [!slots.default && unref(props).class, unref(props).ui?.content] })
									}), {
										default: withCtx(() => [renderSlot(_ctx.$slots, "content", { ui: ui.value }, () => [unref(props).text ? (openBlock(), createBlock("span", {
											key: 0,
											"data-slot": "text",
											class: ui.value.text({ class: unref(props).ui?.text })
										}, toDisplayString(unref(props).text), 3)) : createCommentVNode("", true), unref(props).kbds?.length ? (openBlock(), createBlock("span", {
											key: 1,
											"data-slot": "kbds",
											class: ui.value.kbds({ class: unref(props).ui?.kbds })
										}, [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).kbds, (kbd, index) => {
											return openBlock(), createBlock(_sfc_main$1, mergeProps({
												key: index,
												size: unref(props).ui?.kbdsSize || ui.value.kbdsSize()
											}, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
										}), 128))], 2)) : createCommentVNode("", true)]), !!unref(props).arrow ? (openBlock(), createBlock(unref(TooltipArrow_default), mergeProps({ key: 0 }, arrowProps.value, {
											"data-slot": "arrow",
											class: ui.value.arrow({ class: unref(props).ui?.arrow })
										}), null, 16, ["class"])) : createCommentVNode("", true)]),
										_: 3
									}, 16, ["class"])]),
									_: 3
								})];
							}),
							_: 2
						}, _parent, _scopeId));
					} else return [!!slots.default || !!unref(props).reference ? (openBlock(), createBlock(unref(TooltipTrigger_default), mergeProps({ key: 0 }, _ctx.$attrs, {
						"as-child": "",
						reference: unref(props).reference,
						class: unref(props).class
					}), {
						default: withCtx(() => [renderSlot(_ctx.$slots, "default", { open })]),
						_: 2
					}, 1040, ["reference", "class"])) : createCommentVNode("", true), createVNode(unref(TooltipPortal_default), unref(portalProps), {
						default: withCtx(() => [createVNode(unref(FieldGroupReset), null, {
							default: withCtx(() => [createVNode(unref(TooltipContent_default), mergeProps(contentProps.value, {
								"data-slot": "content",
								class: ui.value.content({ class: [!slots.default && unref(props).class, unref(props).ui?.content] })
							}), {
								default: withCtx(() => [renderSlot(_ctx.$slots, "content", { ui: ui.value }, () => [unref(props).text ? (openBlock(), createBlock("span", {
									key: 0,
									"data-slot": "text",
									class: ui.value.text({ class: unref(props).ui?.text })
								}, toDisplayString(unref(props).text), 3)) : createCommentVNode("", true), unref(props).kbds?.length ? (openBlock(), createBlock("span", {
									key: 1,
									"data-slot": "kbds",
									class: ui.value.kbds({ class: unref(props).ui?.kbds })
								}, [(openBlock(true), createBlock(Fragment, null, renderList(unref(props).kbds, (kbd, index) => {
									return openBlock(), createBlock(_sfc_main$1, mergeProps({
										key: index,
										size: unref(props).ui?.kbdsSize || ui.value.kbdsSize()
									}, { ref_for: true }, typeof kbd === "string" ? { value: kbd } : kbd), null, 16, ["size"]);
								}), 128))], 2)) : createCommentVNode("", true)]), !!unref(props).arrow ? (openBlock(), createBlock(unref(TooltipArrow_default), mergeProps({ key: 0 }, arrowProps.value, {
									"data-slot": "arrow",
									class: ui.value.arrow({ class: unref(props).ui?.arrow })
								}), null, 16, ["class"])) : createCommentVNode("", true)]),
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
};
var _sfc_setup$1 = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Tooltip.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region app/layouts/sidebar.vue?vue&type=script&setup=true&lang.ts
var sidebar_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "sidebar",
	__ssrInlineRender: true,
	setup(__props) {
		const expanded = useState("dashboard-sidebar-expanded", () => true);
		const { user, logout } = useAuth();
		const sections = [{ items: [
			{
				label: "Users",
				icon: "i-lucide-users-round",
				to: "/admin"
			},
			{
				label: "Evaluations",
				icon: "i-lucide-clipboard-check",
				to: "/admin/evaluations"
			},
			{
				label: "Indicators",
				icon: "i-lucide-chart-no-axes-column-increasing",
				to: "/admin/indicators"
			}
		] }];
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			const _component_UTooltip = _sfc_main;
			const _component_UIcon = _sfc_main$5;
			const _component_UButton = _sfc_main$2;
			_push(`<aside${ssrRenderAttrs(mergeProps({
				class: ["sticky top-0 flex h-screen shrink-0 flex-col border-r border-gray-200 bg-white px-2.5 py-3 transition-[width] duration-300 ease-in-out", unref(expanded) ? "w-56" : "w-[60px]"],
				"aria-label": "Main navigation"
			}, _attrs))}><div class="flex h-11 items-center gap-3 px-1">`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/admin",
				class: "flex min-w-0 flex-1 items-center gap-2.5",
				"aria-label": "EC Performance home"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<img${ssrRenderAttr("src", _virtual_public__2Flogo2_default)} class="h-13 w-13 shrink-0 object-contain" alt=""${_scopeId}>`);
						if (unref(expanded)) _push(`<span class="min-w-0 leading-tight -ml-2"${_scopeId}><span class="block text-sm font-bold text-gray-900"${_scopeId}>MEC</span><span class="block text-[11px] text-gray-500"${_scopeId}>Mukdahan</span></span>`);
						else _push(`<!---->`);
					} else return [createVNode("img", {
						src: _virtual_public__2Flogo2_default,
						class: "h-13 w-13 shrink-0 object-contain",
						alt: ""
					}), unref(expanded) ? (openBlock(), createBlock("span", {
						key: 0,
						class: "min-w-0 leading-tight -ml-2"
					}, [createVNode("span", { class: "block text-sm font-bold text-gray-900" }, "MEC"), createVNode("span", { class: "block text-[11px] text-gray-500" }, "Mukdahan")])) : createCommentVNode("", true)];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_UTooltip, {
				text: unref(expanded) ? "Collapse sidebar" : "Expand sidebar",
				content: { side: "right" }
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<button type="button" class="flex size-8 shrink-0 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"${ssrRenderAttr("aria-label", unref(expanded) ? "Collapse sidebar" : "Expand sidebar")}${ssrRenderAttr("aria-expanded", unref(expanded))}${_scopeId}>`);
						_push(ssrRenderComponent(_component_UIcon, {
							name: unref(expanded) ? "i-lucide-panel-left-close" : "i-lucide-panel-left-open",
							class: "size-4"
						}, null, _parent, _scopeId));
						_push(`</button>`);
					} else return [createVNode("button", {
						type: "button",
						class: "flex size-8 shrink-0 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100 hover:text-gray-900",
						"aria-label": unref(expanded) ? "Collapse sidebar" : "Expand sidebar",
						"aria-expanded": unref(expanded),
						onClick: ($event) => expanded.value = !unref(expanded)
					}, [createVNode(_component_UIcon, {
						name: unref(expanded) ? "i-lucide-panel-left-close" : "i-lucide-panel-left-open",
						class: "size-4"
					}, null, 8, ["name"])], 8, [
						"aria-label",
						"aria-expanded",
						"onClick"
					])];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="my-4 border-t border-gray-100"></div><nav class="flex-1 space-y-6 overflow-y-auto overflow-x-hidden"><!--[-->`);
			ssrRenderList(sections, (section) => {
				_push(`<section>`);
				if (unref(expanded)) _push(`<p class="mb-2 px-2 text-[10px] font-semibold tracking-[0.12em] text-gray-400">${ssrInterpolate(section.title)}</p>`);
				else _push(`<!---->`);
				_push(`<div class="space-y-1"><!--[-->`);
				ssrRenderList(section.items, (item) => {
					_push(ssrRenderComponent(_component_UTooltip, {
						key: item.label,
						text: item.label,
						content: { side: "right" },
						disabled: unref(expanded)
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(ssrRenderComponent(_component_NuxtLink, {
								to: item.to,
								title: unref(expanded) ? void 0 : item.label,
								"active-class": "!bg-gray-100 !font-medium !text-gray-950",
								class: "flex h-8 items-center gap-3 rounded-lg px-2.5 text-[12px] text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) {
										_push(ssrRenderComponent(_component_UIcon, {
											name: item.icon,
											class: "size-[18px] shrink-0"
										}, null, _parent, _scopeId));
										if (unref(expanded)) _push(`<span class="truncate"${_scopeId}>${ssrInterpolate(item.label)}</span>`);
										else _push(`<!---->`);
									} else return [createVNode(_component_UIcon, {
										name: item.icon,
										class: "size-[18px] shrink-0"
									}, null, 8, ["name"]), unref(expanded) ? (openBlock(), createBlock("span", {
										key: 0,
										class: "truncate"
									}, toDisplayString(item.label), 1)) : createCommentVNode("", true)];
								}),
								_: 2
							}, _parent, _scopeId));
							else return [createVNode(_component_NuxtLink, {
								to: item.to,
								title: unref(expanded) ? void 0 : item.label,
								"active-class": "!bg-gray-100 !font-medium !text-gray-950",
								class: "flex h-8 items-center gap-3 rounded-lg px-2.5 text-[12px] text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
							}, {
								default: withCtx(() => [createVNode(_component_UIcon, {
									name: item.icon,
									class: "size-[18px] shrink-0"
								}, null, 8, ["name"]), unref(expanded) ? (openBlock(), createBlock("span", {
									key: 0,
									class: "truncate"
								}, toDisplayString(item.label), 1)) : createCommentVNode("", true)]),
								_: 2
							}, 1032, ["to", "title"])];
						}),
						_: 2
					}, _parent));
				});
				_push(`<!--]--></div></section>`);
			});
			_push(`<!--]--></nav><div class="border-t border-gray-100 pt-3"><div class="${ssrRenderClass([unref(expanded) ? "" : "justify-center", "flex items-center gap-2.5 rounded-lg px-2 py-2"])}">`);
			if (unref(expanded)) _push(`<div class="min-w-0 flex-1"><p class="truncate text-xs font-medium text-gray-800">${ssrInterpolate(unref(user)?.username)}</p><p class="truncate text-[11px] text-gray-500">${ssrInterpolate(unref(user)?.role)}</p></div>`);
			else _push(`<!---->`);
			if (!unref(expanded)) _push(ssrRenderComponent(_component_UTooltip, {
				text: "Log out",
				content: { side: "right" }
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<button type="button" class="flex size-8 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900" aria-label="Log out"${_scopeId}>`);
						_push(ssrRenderComponent(_component_UIcon, {
							name: "i-lucide-log-out",
							class: "size-4"
						}, null, _parent, _scopeId));
						_push(`</button>`);
					} else return [createVNode("button", {
						type: "button",
						class: "flex size-8 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900",
						"aria-label": "Log out",
						onClick: unref(logout)
					}, [createVNode(_component_UIcon, {
						name: "i-lucide-log-out",
						class: "size-4"
					})], 8, ["onClick"])];
				}),
				_: 1
			}, _parent));
			else _push(ssrRenderComponent(_component_UButton, {
				icon: "i-lucide-log-out",
				color: "neutral",
				variant: "ghost",
				size: "xs",
				"aria-label": "Log out",
				onClick: unref(logout)
			}, null, _parent));
			_push(`</div></div></aside>`);
		};
	}
});
//#endregion
//#region app/layouts/sidebar.vue
var sidebar_exports = /* @__PURE__ */ __exportAll({ default: () => sidebar_default });
var _sfc_setup = sidebar_vue_vue_type_script_setup_true_lang_default.setup;
sidebar_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/sidebar.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var sidebar_default = sidebar_vue_vue_type_script_setup_true_lang_default;

export { sidebar_exports as n, sidebar_default as t };
//# sourceMappingURL=sidebar-DpcZCmIY.mjs.map
