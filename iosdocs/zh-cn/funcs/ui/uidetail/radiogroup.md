## 说明
RadioGroup用于包裹RadioButton实现只选中一个的效果，继承LinearLayout，包含线性布局的属性

## 使用示例
```xml
   <RadioGroup android:layout_width="match_parent"
                    android:layout_marginTop="10dp"
                    android:layout_height="100dp"
                    android:orientation="horizontal">

            <RadioButton   android:layout_height="80dp"
                            android:layout_width="50dp"
                            android:text="r1"
                            android:tag="r1"
                            android:gravity="center"/>
            <RadioButton    android:layout_height="80dp"
                            android:layout_width="50dp"
                            android:text="r2"
                            android:gravity="center"
                            android:tag="r2"/>
</RadioGroup>
```

## 属性说明

### 公有属性
请参考 [公有属性](/zh-cn/funcs/ui/ui-native-view.md#公有属性)

### 私有属性

| 属性名 | 说明 | 可选值 |
| :------: | :------: | :------: |
| orientation | 方向 | vertical:垂直 <br/> horizontal:水平 |