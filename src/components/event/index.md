# Event 事件发送

一个高性能的 EventEmitter。

## 示例

<code src="./demos/demo1.tsx"></code>

## Event

### 属性

| 属性               | 说明                                       | 类型                                                                       | 默认值  |
| ------------------ | ------------------------------------------ | -------------------------------------------------------------------------- | ------- |
| eventNames         | 返回一个数组，列出发射器已注册侦听器的事件 | `string[]`                                                                 | `[]`    |
| listeners          | 返回为给定事件注册的侦听器                 | `(event: string) => function[]`                                            | `[]`    |
| listenerCount      | 返回侦听给定事件的侦听器数                 | `(event: string) => number`                                                | `0`     |
| emit               | 调用为给定事件注册的每个侦听器             | `(event: string, ...args) => boolean`                                      | -       |
| on                 | 为给定事件添加侦听器                       | `(event: string, fn: function, context?: object) => this`                  | -       |
| addListener        | 为给定事件添加侦听器                       | `(event: string, fn: function, context?: object) => this`                  | -       |
| once               | 为给定事件添加一次性侦听器                 | `(event: string, fn: function, context?: object) => this`                  | -       |
| off                | 删除给定事件的侦听器                       | `(event: string, fn?: function, context?: object, once?: boolean) => this` | -       |
| removeListener     | 删除给定事件的侦听器                       | `(event: string, fn?: function, context?: object, once?: boolean) => this` | -       |
| removeAllListeners | 删除所有侦听器或指定事件的侦听器           | `(event?: string) => this`                                                 | -       |
| debug              | 是否开启调试日志                           | `boolean`                                                                  | `false` |
| setDebug           | 设置是否开启调试日志                       | `(debug: boolean) => void`                                                 | -       |
