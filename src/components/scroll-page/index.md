# ScrollPage 滚动页面

## 示例

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

<code src="./demos/demo3.tsx"></code>

## ScrollPage

### 属性

| 属性    | 说明                                | 类型                                | 默认值 |
| ------- | ----------------------------------- | ----------------------------------- | ------ |
| src     | 网页地址                            | `string`                            | -      |
| onClick | 网页点击事件                        | `(event: React.MouseEvent) => void` | -      |
| width   | 网页宽度，如果传入数字则单位为 `px` | `string \| number`                  | -      |
| height  | 网页高度，如果传入数字则单位为 `px` | `string \| number`                  | -      |

`width` `height` 属性其实和 CSS 变量 `--width` `--height` 并不冲突，这些组件属性其实就是基于 CSS 变量实现的，只是 CSS 变量的一种快捷设置方式。

### CSS 变量

| 属性     | 说明     | 默认值 | 全局变量 |
| -------- | -------- | ------ | -------- |
| --height | 网页高度 | `100%` | -        |
| --width  | 网页宽度 | `100%` | -        |
