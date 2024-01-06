# tailwind-merge-vue-directive

A Nuxt plugin that adds a "v-tw-merge" directive that you can use in your components to automatically merge tailwind classes that were passed from the parent with classes that exist on the component level (example below). 

To achieve the tailwind class merging behavior this package uses [tailwind-merge](https://www.npmjs.com/package/tailwind-merge) under the hood.

## Example
```ts
// ParentComponent.vue
<div>
   ...
   <ChildComponent  class="text-amber-500"  v-tw-merge />
   ...
</div>
```

```ts
// ChildComponent.vue
<div class="text-2xl text-red-500">
   Lorem ipsum dolor sit amet consectetur adipisicing elit
</div>
```

ChildComponent.vue will be rendered as:
```ts
<div class="text-2xl text-amber-500">
   Lorem ipsum dolor sit amet consectetur adipisicing elit
</div>
```
The classes that were passed from *ParentComponent.vue* will override the classes that were specified in *ChildComponent.vue*

## How to run dev enviroment:
General documentation and guidelines on how to work on a nuxt module: (https://nuxt.com/docs/guide/going-further/modules)
```
// run dev server
npm run dev

// build and preview
npm run dev:build && npm run dev:preview
```

## How to use in your components:
```ts
<SomeComponent class="h-20 w-20 bg-red-500" v-tw-merge/>
// or
<SomeComponent class="h-20 w-20 bg-red-500" v-twMerge/>
```
