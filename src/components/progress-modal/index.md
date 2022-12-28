# ProgressModal 进度弹窗

## 示例

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## ProgressModal

### 属性

`ProgressModal`属性继承了`Modal`所有属性，同时增加了以下属性：

| 属性    | 说明         | 类型     | 默认值 |
| ------- | ------------ | -------- | ------ |
| percent | 进度         | `number` | `0`    |
| message | 进度文本提示 | `string` | -      |

## 指令式

可以通过指令式的方式使用 `ProgressModal`：

### ProgressModal.show

```ts | pure
const handler = ProgressModal.show(props)
```

可以通过调用 `ProgressModal` 上的 `show` 方法直接打开弹窗，其中 `props` 参数的类型同上表，但不支持传入 `visible` 属性。

当弹窗被关闭后，组件实例会自动销毁。

`show` 方法的返回值为一个组件控制器，包含以下属性：

| 属性    | 说明         | 类型                                                      | 默认值 |
| ------- | ------------ | --------------------------------------------------------- | ------ |
| close   | 关闭弹窗     | `() => void`                                              | -      |
| replace | 替换弹窗组件 | `(element: ReactElement<ProgressModalShowProps>) => void` | -      |
| update  | 替换弹窗属性 | `(props: ProgressModalShowProps) => void`                 | -      |

`show` 只是一个很基础的方法，在实际业务中，更为常用的是下面的 `start` 方法：

### ProgressModal.start

| 属性    | 说明         | 类型                                       | 默认值 |
| ------- | ------------ | ------------------------------------------ | ------ |
| message | 进度文本提示 | `string \| ((progress: number) => string)` | -      |

### ProgressModal.clear

可以通过调用 `ProgressModal` 上的 `clear` 方法关闭所有打开的弹窗，通常用于路由监听中，处理路由前进、后退不能关闭弹窗的问题。
