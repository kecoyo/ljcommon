# TabsPage 网页视图

## 示例

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## TabsPage

### 属性

| 属性             | 说明                                             | 类型                          | 默认值             |
| ---------------- | ------------------------------------------------ | ----------------------------- | ------------------ |
| activeKey        | 当前激活 `tab` 面板的 `key`                      | `string \| null`              | -                  |
| activeLineMode   | 激活 `tab` 下划线的模式                          | `'auto' \| 'full' \| 'fixed'` | `'auto'`           |
| defaultActiveKey | 初始化选中面板的 `key`，如果没有设置 `activeKey` | `string \| null`              | 第一个面板的 `key` |
| onChange         | 切换面板的回调                                   | `(key: string) => void`       | -                  |
| stretch          | 选项卡头部是否拉伸                               | `boolean`                     | `true`             |

`width` `height` 属性其实和 CSS 变量 `--width` `--height` 并不冲突，这些组件属性其实就是基于 CSS 变量实现的，只是 CSS 变量的一种快捷设置方式。

### CSS 变量

| 属性                                | 说明                        | 默认值                                          | 全局变量                                   |
| ----------------------------------- | --------------------------- | ----------------------------------------------- | ------------------------------------------ |
| --tab-bar-height                    | 选项卡头高度                | `var(--ljm-nav-bar-height)`                     | `--ljm-nav-bar-height`                     |
| --tab-bar-margin                    | 选项卡头左右边距            | `var(--ljm-tabs-page-tab-bar-margin)`           | `--ljm-tabs-page-tab-bar-margin`           |
| --tab-bar-border-bottom             | 选项卡头下边框              | `var(--ljm-tabs-page-tab-bar-border-bottom)`    | `--ljm-tabs-page-tab-bar-border-bottom`    |
| --tab-bar-background-color          | 选项卡头背景色              | `var(--ljm-tabs-page-tab-bar-background-color)` | `--ljm-tabs-page-tab-bar-background-color` |
| --tab-bar-title-color               | 选项卡头文字的颜色          | `var(--ljm-nav-bar-title-color)`                | `--ljm-nav-bar-title-color`                |
| --tab-bar-active-title-color        | 当前激活 `tab` 选项文字颜色 | `var(--ljm-tabs-page-active-title-color)`       | `--ljm-tabs-page-active-title-color`       |
| --tab-bar-title-font-size           | 选项卡头文字的大小          | `var(--ljm-nav-bar-title-font-size)`            | `--ljm-nav-bar-title-font-size`            |
| --tab-bar-active-title-font-size    | 当前激活 `tab` 选项文字颜色 | `var(--ljm-nav-bar-active-title-font-size)`     | `--ljm-nav-bar-active-title-font-size`     |
| --tab-bar-active-line-height        | 标签栏活动标签底线高度      | `var(--ljm-tabs-page-active-line-height)`       | `--ljm-tabs-page-active-line-height`       |
| --tab-bar-active-line-border-radius | 当前激活 `tab` 下划线的圆角 | `var(--tab-bar-active-line-height)`             | `--tab-bar-active-line-height`             |
| --tab-bar-active-line-color         | 当前激活 `tab` 下划线的颜色 | `var(--tab-bar-active-title-color)`             | `--tab-bar-active-title-color`             |
| --tab-content-padding               | `tab` 内容区的 `padding`    | `var(--ljm-content-padding)`                    | `--ljm-content-padding`                    |

## TabsPage.Tab

| 属性           | 说明                        | 类型        | 默认值  |
| -------------- | --------------------------- | ----------- | ------- |
| destroyOnClose | 不可见时卸载内容            | `boolean`   | `false` |
| disabled       | 是否禁用                    | `boolean`   | `false` |
| forceRender    | 被隐藏时是否渲染 `DOM` 结构 | `boolean`   | `false` |
| key            | 对应 `activeKey`            | `string`    | -       |
| title          | 选项卡头显示文字            | `ReactNode` | -       |
