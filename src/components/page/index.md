# Page 页面

可以内嵌在移动端，实现前端的混合式开发，大多数混合式开发框架都是基于 Page 模式进行二次开发的。

## 示例

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

<code src="./demos/demo3.tsx"></code>

## Page

### 属性

| 属性      | 说明                                                       | 类型                               | 默认值      |
| --------- | ---------------------------------------------------------- | ---------------------------------- | ----------- |
| back      | 返回区域的文字，如果为 `null` 的话，`backArrow` 也不会渲染 | `ReactNode \| null`                | `''`        |
| backArrow | 是否显示返回区域的箭头，也可以传入 `ReactNode` 进行自定义  | `boolean \| ReactNode`             | `true`      |
| left      | 左侧内容，渲染在返回区域的右侧                             | `ReactNode`                        | -           |
| onBack    | 点击返回区域后的回调                                       | `() => void`                       | -           |
| right     | 右侧内容                                                   | `ReactNode`                        | -           |
| title     | 标题                                                       | `ReactNode`                        | -           |
| color     | 标题主题颜色                                               | `'default' \| 'primary' \| string` | `'default'` |
| children  | 内容                                                       | `ReactNode`                        | -           |

### CSS 变量

| 属性                           | 说明               | 默认值                                    |
| ------------------------------ | ------------------ | ----------------------------------------- |
| --nav-bar-height               | 导航栏高度         | `var(--ljm-nav-bar-height)`               |
| --nav-bar-border-bottom        | 导航栏下边框       | `var(--ljm-nav-bar-border-bottom)`        |
| --nav-bar-background-color     | 导航栏背景色       | `var(--ljm-nav-bar-background-color)`     |
| --nav-bar-color                | 导航栏前景色       | `var(--ljm-nav-bar-color)`                |
| --nav-bar-title-font-size      | 导航栏标题字体大小 | `var(--ljm-nav-bar-title-font-size)`      |
| --nav-bar-left-right-font-size | 导航栏左右字体大小 | `var(--ljm-nav-bar-left-right-font-size)` |
| --nav-bar-icon-font-size       | 导航栏图标字体大小 | `var(--ljm-nav-bar-icon-font-size)`       |
