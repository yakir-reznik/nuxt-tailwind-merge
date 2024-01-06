import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit";
import { defineNuxtPlugin } from "nuxt/app";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-tailwind-merge",
    configKey: "nuxtTailwindMerge",
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);
    addPlugin(resolver.resolve("./runtime/plugin"));
  },
});
