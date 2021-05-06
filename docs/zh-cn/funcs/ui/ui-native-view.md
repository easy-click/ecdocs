
## 支持以下视图
- [LinearLayout线性布局](/zh-cn/funcs/ui/uidetail/linearlayout.md)
- [FrameLayout帧布局](/zh-cn/funcs/ui/uidetail/framelayout.md)
- [RelativeLayout绝对布局](/zh-cn/funcs/ui/uidetail/relativelayout.md)
- [ScrollView滚动框](/zh-cn/funcs/ui/uidetail/scrollview.md)
- [HorizontalScrollView滚动框](/zh-cn/funcs/ui/uidetail/h_scrollview.md)

- [View视图](/zh-cn/funcs/ui/uidetail/view.md)
- [Button按钮](/zh-cn/funcs/ui/uidetail/button.md)
- [TextView文本](/zh-cn/funcs/ui/uidetail/textview.md)
- [EditText输入框](/zh-cn/funcs/ui/uidetail/edittext.md)
- [CheckBox复选框](/zh-cn/funcs/ui/uidetail/checkbox.md)
- [RadioGroup布局](/zh-cn/funcs/ui/uidetail/radiogroup.md)
- [RadioButton单选框](/zh-cn/funcs/ui/uidetail/radiobutton.md)
- [Spinner下拉选择框](/zh-cn/funcs/ui/uidetail/spinner.md)
- [WebView内嵌浏览器](/zh-cn/funcs/ui/uidetail/webview.md)
- [ImageView图像](/zh-cn/funcs/ui/uidetail/imageview.md)
- [CardView卡片布局](/zh-cn/funcs/ui/uidetail/cardview.md)
- [Swtich开关按钮](/zh-cn/funcs/ui/uidetail/switch.md)
- [FlexboxLayout弹性盒子布局](/zh-cn/funcs/ui/uidetail/flexboxlayout.md)
- [include标签](/zh-cn/funcs/ui/uidetail/includetag.md)
- [Canvas标签](/zh-cn/funcs/ui/uidetail/canvas.md)

## 公有属性

| 属性名 | 说明 | 可选值 |
| :------: | :------: | :------: |
| layout_width | 宽度 | wrap_content: 和自身内容一样的长度<br/> match_parent:和父组件一样的长度<br/>具体数字+dp |
| layout_height | 高度 | wrap_content: 和自身内容一样的长度<br/> match_parent:和父组件一样的长度<br/>具体数字+dp |
| background | 背景色 | 16进制的背景色，例如#FFFFFF或者#FFFFFFFF |
| tag | 标签 | 中英文都可，在代码中可以通过tag获取对应的值 |
| visibility | 是否可展示 | gone:不展示<br/>visible:展示<br/>invisible:不展示但是占用空间 |
| clickable | 是否可点击 | true: 可点击 <br/>false: 不可点击 |
| enable | 是否启用 | true: 启用 <br/>false: 禁用 |
| minHeight | 最小高度 | 具体数字+dp |
| minWidth | 最小宽度 | 具体数字+dp |
| paddingLeft | 左内边距 | 具体数字+dp |
| paddingTop | 上内边距 | 具体数字+dp |
| paddingRight | 右内边距 | 具体数字+dp |
| paddingBottom | 下内边距 | 具体数字+dp |
| padding | 上下左右内边距 | 具体数字+dp |
| layout_gravity | 自身相当于父容器的对齐方式 |[用法参考](https://blog.csdn.net/gaojinshan/article/details/44917205)<br/>top<br/>bottom<br/>left<br/>right<br/>center_vertical<br/>fill_vertical<br/>center_horizontal<br/>fill_horizontal<br/>center<br/>fill<br/>clip_vertical<br/>clip_horizontal<br/> |
| layout_margin | 上下左右外边距 | 具体数字+dp |
| layout_marginLeft | 左外边距 | 具体数字+dp |
| layout_marginRight | 右外边距 | 具体数字+dp |
| layout_marginTop | 上外边距 | 具体数字+dp |
| layout_marginBottom | 下外边距 | 具体数字+dp |
| cornerRadius | 视图的圆角度数 | 具体数字+dp |


## UI高度和宽度解释
- 属性为：layout_width, layout_height
- match_parent 填充满父容器
- wrap_content 以自身实际宽度为准
- 数字型，例如：12dp，代表12个dp宽度，dp是android的宽度单位

## UI界面参数读取

- 参考  [全局模块UI参数读取](/zh-cn/funcs/global/global.md#ui参数读取)