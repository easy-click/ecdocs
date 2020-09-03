## 说明
文本输入框
## 使用示例
```xml
<EditText android:layout_height="wrap_parent"
            android:layout_width="match_parent"
            android:tag="btn"
            android:text="按钮"
            android:textColor="#669999"
            android:textSize="14dp"
            android:gravity="center"
            android:maxLength="12"
            android:hint="我是提示"
    />
```

## 属性说明

### 公有属性
请参考 [公有属性](/zh-cn/funcs/ui-native-view.md#公有属性)

### 私有属性

| 属性名 | 说明 | 可选值 |
| :------: | :------: | :------: |
| layout_weight | 子元素权重 | 数字<br/>当父级为LinearLayout的时候，子控件可以设置权重|
| gravity | 内部的控件对齐方式 |[用法参考](https://blog.csdn.net/gaojinshan/article/details/44917205)<br/>top<br/>bottom<br/>left<br/>right<br/>center_vertical<br/>fill_vertical<br/>center_horizontal<br/>fill_horizontal<br/>center<br/>fill<br/>clip_vertical<br/>clip_horizontal<br/> |
| hit | 输入提示 | 字符串 |
| text | 文字 | 字符串 |
| textColor | 文字颜色 | 16进制，例如#FFFFFF |
| textSize | 文字大小 | 具体数字+dp |
| maxLength | 文字最大长度 | 具体数字 |
| lines | 行数 | 具体数字 |
| maxLines | 最大 | 具体数字 |
| ellipsize | 文字长度超过宽度时的显示方式 | start:省略号显示在开头<br/>end:省略号显示在结尾<br/>middle:省略号显示在中间<br/>marquee:以横向滚动方式显示(需获得当前焦点时)<br/>none:不显示 |

