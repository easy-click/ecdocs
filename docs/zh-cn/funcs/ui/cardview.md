## 说明
CardView 卡片布局

## 使用示例
```xml
<CardView>
            <LinearLayout android:orientation="vertical">
                <TextView android:layout_width="match_parent" android:layout_height="wrap_content"
                          android:padding="20dp" android:text="CardView演示"/>
                <ImageView
                        android:src="https://upload.jianshu.io/users/upload_avatars/4321745/406ef6d9-28c1-4f35-8cee-37818cc404af.jpg"
                        android:layout_width="200dp" android:layout_height="200dp" android:scaleType="CENTER_CROP"/>
            </LinearLayout>
        </CardView>
```

## 属性说明

### 公有属性
请参考 [公有属性](/zh-cn/funcs/ui-native-view.md#公有属性)

### 私有属性

| 属性名 | 说明 | 可选值 |
| :------: | :------: | :------: |
| layout_weight |  背景颜色 | 颜色的字符串<br/>例如 #888888|
| cardBackgroundColor | 背景颜色 | 数字 <br/>例如 20dp|
| cardCornerRadius | 设置圆角大小 |  数字 <br/>例如 20dp|
| cardElevation | 设置z轴的阴影 | 数字 <br/>例如 20dp|
| cardMaxElevation | 设置z轴的最大高度值 |数字 <br/>例如 20dp|