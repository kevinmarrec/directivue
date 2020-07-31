# directivue

Lightweight and Optimized **Vue Directives** for your Vue projects

## Available Directives

- **ClickOutside** : Trigger a given function when clicking outside element
- **Ripple** : Trigger a ripple effect when clicking/touching element (Mobile support)

## Installation

```sh
yarn add directivue
# OR
npm install directivue
```

## Usage

```ts
import Vue from 'vue'
import { ClickOutside, /* Ripple, ... */ } from 'directivue'

Vue.directive('clickOutside', ClickOutside)
// Vue.directive('ripple', Ripple)
// ...
```
