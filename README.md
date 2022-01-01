# Vue Resizable Input

[![npm](https://img.shields.io/npm/v/v-resizable-input.svg) ![npm](https://img.shields.io/npm/dm/v-resizable-input.svg)](https://www.npmjs.com/package/v-resizable-input)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

An simple customizable input for vue that resizes itself to the its content.

![](https://https://github.com/codefarm-bs/resizable-input/tree/master/assets/image.png)


# 🛠️ Getting started

## Installation

### NPM

```sh
$ npm i -S v-resizable-input
```

### Yarn

```sh
$ yarn add v-resizable-input
```

### Import the component

```javascript
import ResizableInput from "v-resizable-input"
```

```javascript
components: {
  ResizableInput,
}
```

## Usage

```html
<resizable-input
    v-model="title"
    :max="40"
    :row="1"
    :placeholder="'Enter you title here ...'"
    :enterable="false"/>
```

## Interface

### Props

| Props            | Required  | Type            | Default   | Description  |
| ---------------- | --------- | --------------- | --------- | -------------|
| `v-model`     | no     | String, Number  | ''        | value binding |
| `value`       | no     | String, Number  | ''        | part of the `v-model` binding |
| `max`         | no     | Number          | 100       | max textarea characters |
| `row`         | no     | Number          | 1         | number of min rows for your textarea |
| `placeholder` | no     | String          | "Enter your text ..." | placeholder for your textarea |
| `enterable`   | no     | Boolean         | true      | allows to accept enter on textarea |
| `hasHelper`   | no     | Boolean         | true      | indicate how much characters feasible |
| `inputCss`    | no     | String         | 'tailwind classes'      | as default it use tailwind css classes but you can fully customize its style |
| `helperCss`   | no     | String         | 'tailwind classes'      | as default it use tailwind css classes but you can fully customize its style |

### Events

| Name      | Params   | Description  |
| ----------|:---------|--------------|
| input     | value    | fires on textarea content changed. part of the `v-model` binding. [read more](https://vuejs.org/v2/guide/components.html#Form-Input-Components-using-Custom-Events) |

### Slots

There are no slots available



## License

[MIT](http://opensource.org/licenses/MIT)