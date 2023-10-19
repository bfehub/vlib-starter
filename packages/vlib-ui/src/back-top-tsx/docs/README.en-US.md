---
permalink: /en/components/backtoptsx
---

# BackTopTsx

Back top button.

## Base Usage

Swipe to view the button in the bottom right corner of the container.

<demo src="../__demos__/basic.vue"></demo>

## Component Configuration

### BackTopTsx Props

| prop              | description                                                              | type            | default |
| ----------------- | ------------------------------------------------------------------------ | --------------- | ------- |
| target            | Objects that trigger scrolling                                           | string          | window  |
| visibility-height | Only when the rolling height reaches this parameter value will it appear | number / string | 200     |
| right             | Control its display position, distance from the right margin of the page | number / string | 40      |
| bottom            | Control its display position, distance from the bottom of the page       | number / string | 40      |

### BackTopTsx Events

| event | description                          | param                         |
| ----- | ------------------------------------ | ----------------------------- |
| click | Event triggered by clicking a button | `(event: MouseEvent) => void` |

### BackTopTsx Slots

| slot    | description               |
| ------- | ------------------------- |
| default | Customize default content |

## Type Definition

Component exports the following type definitions

```ts
import type { BackTopTsxProps } from '@bfehub/vlib-ui'
```

## Style Variables

The component provides the following CSS variables that can be used to customize styles

| name                            | default |
| ------------------------------- | ------- |
| --vlib-back-top-tsx-right       | 40px    |
| --vlib-back-top-tsx-bottom      | 40px    |
| --vlib-back-top-tsx-button-size | 40px    |
