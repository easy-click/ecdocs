## 说明
LinearLayout，中文意思就是线性布局，
在实际开发中比较常用的布局，它主要以水平和垂直的方式来显示界面中的控件。
在线性布局中，线性布局管理器允许为每一个子视图指定一个weight属性，以控制每一个子视图在空间内的大小。
而线性布局中的orientation属性则是用于控制控件的排列方向。
- android:orientation="vertical"属性将其指定为垂直线性排列；
- android:orientation="horizontal"属性将其指定为水平线性排列；

## 使用示例
```xml
<LinearLayout android:layout_width="match_parent" 
                android:layout_height="match_parent" 
                android:orientation="vertical">
</LinearLayout>
```

## 属性说明

### 公有属性
请参考 [公有属性](/zh-cn/funcs/ui/ui-native-view.md#公有属性)

### 私有属性

| 属性名 | 说明 | 可选值 |
| :------: | :------: | :------: |
| orientation | 方向 | vertical:垂直 <br/> horizontal:水平 |