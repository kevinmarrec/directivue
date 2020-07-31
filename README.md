# directivue

Lightweight and Optimized **Vue Directives** for your Vue projects

## Available Directives

- **AutoFocus** : Auto focus an element when inserted in the DOM (Safari support)
- **ClickOutside** : Trigger a given function when clicking outside element
- **Ripple** : Trigger a ripple effect when clicking/touching element (Mobile support)

Live Demo : https://directivue.netlify.app

## Installation

```sh
yarn add directivue
# OR
npm install directivue
```

## Usage

```ts
import Vue from 'vue'
import { ClickOutside, Ripple, /* ... */ } from 'directivue'

Vue.directive('clickOutside', ClickOutside)
Vue.directive('ripple', Ripple)
// ...
```
