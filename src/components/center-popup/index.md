# CenterPopup 中间弹出层

继承于antd-mobile中CenterPopup组件，增加接收EVENT_POPUP_CLOSE事件来关闭弹出层。

和 Popup 不同，CenterPopup 是从中间弹出的，Dialog 和 Modal 都是基于它实现的。

### 示例

<code src="./demos/demo1.tsx"></code>

### 属性

CenterPopup 不支持 `position` 属性，并且 `getContainer` 的默认值是 `null`，其他属性同 Popup。

### CSS 变量

| 属性               | 说明             | 默认值    | 全局变量                              |
| ------------------ | ---------------- | --------- | ------------------------------------- |
| --background-color | 弹层的背景色     | `#ffffff` | `--adm-center-popup-background-color` |
| --border-radius    | 弹层的边框圆角   | `8px`     | `--adm-center-popup-border-radius`    |
| --max-width        | 弹层的最大宽度   | `75vw`    | `--adm-center-popup-max-width`        |
| --min-width        | 弹层的最小宽度   | `280px`   | `--adm-center-popup-min-width`        |
| --z-index          | 元素的 `z-index` | `1000`    | `--adm-center-popup-z-index`          |
