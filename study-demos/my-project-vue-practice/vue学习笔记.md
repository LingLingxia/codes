# jsx

## createElement
- 实验代码`@/src/components/jsx.js`
- 没有管理或者监听任何传递给他的状态，也没有生命周期方法。它只是一个接收参数的函数。
- createElement 接受的参数：
```
// @returns {VNode}
createElement(
  // {String | Object | Function}
  // 一个 HTML 标签字符串，组件选项对象，或者
  // 解析上述任何一种的一个 async 异步函数。必需参数。
  'div',

  // {Object}
  // 一个包含模板相关属性的数据对象
  // 你可以在 template 中使用这些特性。可选参数。
  {
    // (详情见下一节)
  },

  // {String | Array}
  // 子虚拟节点 (VNodes)，由 `createElement()` 构建而成，
  // 也可以使用字符串来生成“文本虚拟节点”。可选参数。
  [
    '先写一些文字',
    createElement('h1', '一则头条'),
    createElement(MyComponent, {
      props: {
        someProp: 'foobar'
      }
    })
  ]
)

```

- 可选的参数对象
```
{
  staticClass:string,//静态类
  staticStyle:Object,//静态样式
  // 和`v-bind:class`一样的 API
  // 接收一个字符串、对象或字符串和对象组成的数组
  'class': {
    foo: true,
    bar: false
  },
  // 和`v-bind:style`一样的 API
  // 接收一个字符串、对象或对象组成的数组
  style: {
    color: 'red',
    fontSize: '14px'
  },
  // 普通的 HTML 特性
  attrs: {
    id: 'foo'
  },
  // 组件 props
  props: {
    myProp: 'bar'
  },
  // DOM 属性
  domProps: {
    innerHTML: 'baz'
  },
  // 事件监听器基于 `on`
  // 所以不再支持如 `v-on:keyup.enter` 修饰器
  // 需要手动匹配 keyCode。
  on: {
    click: this.clickHandler
  },
  // 仅用于组件，用于监听原生事件，而不是组件内部使用
  // `vm.$emit` 触发的事件。
  nativeOn: {
    click: this.nativeClickHandler
  },
  // 自定义指令。注意，你无法对 `binding` 中的 `oldValue`
  // 赋值，因为 Vue 已经自动为你进行了同步。
  directives: [
    {
      name: 'my-custom-directive',
      value: '2',
      expression: '1 + 1',
      arg: 'foo',
      modifiers: {
        bar: true
      }
    }
  ],
  // 作用域插槽格式
  // { name: props => VNode | Array<VNode> }
  scopedSlots: {
    default: props => createElement('span', props.text)
  },
  // 如果组件是其他组件的子组件，需为插槽指定名称
  slot: 'name-of-slot',
  // 其他特殊顶层属性
  key: 'myKey',
  ref: 'myRef',
  // 如果你在渲染函数中向多个元素都应用了相同的 ref 名，
  // 那么 `$refs.myRef` 会变成一个数组。
  refInFor: true
}
```
## 函数式组件
- 实验代码`@/src/components/jsx.js`
- 一个函数式组件需要标记functional:true,此时会有第二个参数context
- 一个函数式组件无状态,无实例,上下文,所需要的一切都通过prop传递,开销小,因此它适合用作纯展示或者作为一个中间组件.
- 内部定义的props失效,所有的props通过context.props取值.
- 组件需要的一切都是通过上下文传递，包括：
```
props：提供所有 prop 的对象
children: VNode 子节点的数组
slots: 返回所有插槽的对象的函数
scopedSlots: (2.6.0+) 一个暴露传入的作用域插槽以及函数形式的普通插槽的对象。
data：传递给组件的数据对象，作为 createElement 的第二个参数传入组件
parent：对父组件的引用
listeners: (2.3.0+) 一个包含了所有在父组件上注册的事件侦听器的对象。这只是一个指向 data.on 的别名。
injections: (2.3.0+) 如果使用了 inject 选项，则该对象包含了应当被注入的属性。
```