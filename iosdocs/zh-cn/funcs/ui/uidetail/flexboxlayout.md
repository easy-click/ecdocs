## 说明
Flex是Flexible Box的缩写，意为「弹性布局」，在前端css样式中应用甚为广泛，之前做过React-Native和微信小程序，页面布局大多使用flex弹性布局，可以在不同屏幕尺寸上提供一致的布局结构，可以简便、完整、响应式地实现各种页面布局，今天为大家打开Android移动端的flex布局大门--FlexboxLayout，在android中我们经常所见的标签、流式布局等都可以用FlexboxLayout来实现。


## 使用示例
```xml
<?xml version="1.0" encoding="utf-8"?>
<ScrollView xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xmlns:android="http://schemas.android.com/apk/res/android"
            xsi:noNamespaceSchemaLocation="layout.xsd"
            android:background="#333333"
            android:layout_height="match_parent"
            android:layout_width="match_parent">
    <FlexboxLayout android:layout_height="200dp"
                   android:layout_width="match_parent"
                   android:background="#888888"
                   android:flexDirection="row"
                   android:flexWrap="wrap">

        <Button android:layout_width="wrap_content"
                android:layout_weight="1"
                android:layout_order="1"
                android:layout_flexGrow="20.0"
                android:layout_flexShrink="20.0"
                android:layout_alignSelf="auto"
                android:layout_height="wrap_content"
                  android:text="1"/>

        <Button android:layout_width="wrap_content"
                  android:layout_weight="1"
                  android:layout_height="wrap_content"
                  android:text="2"/>

        <Button android:layout_width="wrap_content"
                android:layout_weight="1"
                android:layout_height="wrap_content"
                  android:text="3"/>

        <Button android:layout_width="wrap_content"
                android:layout_weight="1"
                android:layout_height="wrap_content"
                android:text="4"/>

        <Button android:layout_width="wrap_content"
                android:layout_weight="1"
                android:layout_height="wrap_content"
                android:text="5"/>
        <Button android:layout_width="wrap_content"
                android:layout_weight="1"
                android:layout_height="wrap_content"
                android:text="6"/>
    </FlexboxLayout>
</ScrollView>

```

## 属性说明

### 公有属性
请参考 [公有属性](/zh-cn/funcs/ui/ui-native-view.md#公有属性)

### 私有属性

| 属性名 | 说明 | 可选值 |
| :------: | :------: | :------: |
| flexDirection | 属性决定主轴的方向（即内部子元素的排列方向） | row（默认值）：水平显示，起点在左端<br/>row_reverse：水平显示，起点在右端，与row相反的顺序<br/>column：垂直显示，起点在顶部<br/>column_reverse：垂直显示，起点在底部，与column相反的顺序<br/>xml中使用app:flexDirection="row"，代码中使用flexboxLayout.setFlexDirection(FlexDirection.ROW)|
| flexWrap | 决定是否换行 | nowrap（默认值）：不换行<br/>wrap：按正常方向换行，第一行在上方<br/>wrap_reverse：按反方向换行，第一行在下方 /
| justifyContent | 决定元素在主轴上的对齐方式 | flex_start（默认值）：主轴方向起点对齐<br/>flex_end：主轴方向终点对齐<br/>center： 主轴方向居中对齐<br/>space_between：主轴方向两端对齐，元素之间的间隔都相等。<br/>space-around：每个元素两侧的间隔相等。所以，元素之间的间隔比元素与布局边框的间隔大一倍。 /
| 更多属性 | 参考 https://www.cnblogs.com/taixiang/p/9177215.html | /