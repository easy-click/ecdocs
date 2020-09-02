# 说明
相对布局是通过相对定位的方式制定控件位置，即以其他的控件或父容器为参照物，摆放控件位置。在设计相对布局时要遵循控件之间的依赖关系，后放入的控件的位置要依赖于先放入的控件。
# 使用示例
```xml
 <RelativeLayout
            android:gravity="center"
            android:layout_width="match_parent"
            android:layout_height="match_parent">
</RelativeLayout>
```

# 属性说明

## 公有属性
请参考 [公有属性](/zh-cn/funcs/ui-native-view.md#公有属性)

## 私有属性

| 属性名 | 说明 | 可选值 |
| :------: | :------: | :------: |
| layout_weight | 子元素权重 | 数字<br/>当父级为LinearLayout的时候，子控件可以设置权重|
| gravity | 内部的控件对齐方式 |[用法参考](https://blog.csdn.net/gaojinshan/article/details/44917205)<br/>top<br/>bottom<br/>left<br/>right<br/>center_vertical<br/>fill_vertical<br/>center_horizontal<br/>fill_horizontal<br/>center<br/>fill<br/>clip_vertical<br/>clip_horizontal<br/> |