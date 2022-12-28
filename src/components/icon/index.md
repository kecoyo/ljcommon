# Icon 图标

使用 svg-sprite-loader 方式，利用 svg 的 symbol 元素，将每个 icon 包裹在 symbol 中，通过 use 使用该 symbol。

## 何时使用

- 需要展示图标时使用。

## 示例

<code src="./demos/demo1.tsx"></code>

## Icon

### 属性

| 属性    | 说明                                | 类型                                                        | 默认值 |
| ------- | ----------------------------------- | ----------------------------------------------------------- | ------ |
| src     | 图标地址                            | `string`                                                    | -      |
| onClick | 图标点击事件                        | `(event: React.MouseEvent<HTMLIconElement, Event>) => void` | -      |
| width   | 图标宽度，如果传入数字则单位为 `px` | `string \| number`                                          | -      |
| height  | 图标高度，如果传入数字则单位为 `px` | `string \| number`                                          | -      |

此外，还支持以下 HTML 原生属性：`crossOrigin`、`decoding`、`loading`、`referrerPolicy`、`sizes`、`srcSet`、`useMap`

`width` `height` 属性其实和 CSS 变量 `--width` `--height` 并不冲突，这些组件属性其实就是基于 CSS 变量实现的，只是 CSS 变量的一种快捷设置方式。

### CSS 变量

| 属性     | 说明     | 默认值 | 全局变量            |
| -------- | -------- | ------ | ------------------- |
| --height | 图标高度 | `auto` | `--ljm-icon-height` |
| --width  | 图标宽度 | `auto` | `--ljm-icon-width`  |
