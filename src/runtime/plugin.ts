import { defineNuxtPlugin } from "#app";
import type { DirectiveBinding, VNode } from "vue";
import { twMerge } from "tailwind-merge";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("twMerge", {
    beforeMount: computeClasses,
    updated: computeClasses,

    // This is where im stuck :x
    getSSRProps: (binding, vNode) => {
      console.log({ binding, vNode });
      return undefined;
    },
  });
});

type ComputeClasses = (
  el: HTMLElement,
  binding: DirectiveBinding,
  vNode: any
) => void;

const computeClasses: ComputeClasses = (el, binding, vNode) => {
  const existingClasses = el?.classList?.value;
  const inheritedClasses = vNode?.ctx?.attrs?.class;

  // This works because the fallthrough classes are always added at the end of the string
  el.classList.value = twMerge(existingClasses, inheritedClasses);
};
