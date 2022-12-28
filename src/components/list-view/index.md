# ListView 列表视图

可以内嵌在移动端，实现前端的混合式开发，大多数混合式开发框架都是基于 ListView 模式进行二次开发的。

## 示例

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

<code src="./demos/demo3.tsx"></code>

## ListView

### 属性

| 属性    | 说明                                | 类型                                | 默认值 |
| ------- | ----------------------------------- | ----------------------------------- | ------ |
| src     | 列表地址                            | `string`                            | -      |
| onClick | 列表点击事件                        | `(event: React.MouseEvent) => void` | -      |
| width   | 列表宽度，如果传入数字则单位为 `px` | `string \| number`                  | -      |
| height  | 列表高度，如果传入数字则单位为 `px` | `string \| number`                  | -      |

`width` `height` 属性其实和 CSS 变量 `--width` `--height` 并不冲突，这些组件属性其实就是基于 CSS 变量实现的，只是 CSS 变量的一种快捷设置方式。

### CSS 变量

| 属性     | 说明     | 默认值 | 全局变量 |
| -------- | -------- | ------ | -------- |
| --height | 列表高度 | `100%` | -        |
| --width  | 列表宽度 | `100%` | -        |
