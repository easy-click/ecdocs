## 说明
FrameLayout，帧布局是最为简单的一种布局，该布局为每个加入其中的控件创建一个空白区域，称为一帧，每个控件占据一帧。采用帧布局时，所有控件都默认显示在屏幕左上角，并按照先后放入的顺序重叠摆放，先放入的将会在最底层，后放入的控件显示在最顶层。帧布局使用于图层设计。

## 使用示例
```xml
 <FrameLayout
            android:layout_width="match_parent"
            android:layout_height="match_parent">
</FrameLayout>
```

## 属性说明

### 公有属性
请参考 [公有属性](/zh-cn/funcs/ui/ui-native-view.md#公有属性)

### 私有属性

| 属性名 | 说明 | 可选值 |
| :------: | :------: | :------: |
| layout_weight | 子元素权重 | 数字<br/>当父级为LinearLayout的时候，子控件可以设置权重|