## 说明
下拉选框
## 使用示例
```xml
<Spinner android:layout_height="wrap_parent"
            android:layout_width="match_parent"
            android:tag="btn"
            android:text="选择1|选择2"
            android:textColor="#669999"
            android:textSize="14dp"
            android:defaultText="选择2"
            android:gravity="center"
    />
```

## 属性说明

### 公有属性
请参考 [公有属性](/zh-cn/funcs/ui/ui-native-view.md#公有属性)

### 私有属性

| 属性名 | 说明 | 可选值 |
| :------: | :------: | :------: |
| layout_weight | 子元素权重 | 数字<br/>当父级为LinearLayout的时候，子控件可以设置权重|
| gravity | 内部的控件对齐方式 |[用法参考](https://blog.csdn.net/gaojinshan/article/details/44917205)<br/>top<br/>bottom<br/>left<br/>right<br/>center_vertical<br/>fill_vertical<br/>center_horizontal<br/>fill_horizontal<br/>center<br/>fill<br/>clip_vertical<br/>clip_horizontal<br/> |
| text | 下拉文字 | 字符串<br/>多个下拉选项用竖线分隔，例如：选项1&#124;选型2|
| textColor | 文字颜色 | 16进制，例如#FFFFFF |
| textSize | 文字大小 | 具体数字+dp |
| defaultText | 默认选择的数据 | text中的某一项 |


