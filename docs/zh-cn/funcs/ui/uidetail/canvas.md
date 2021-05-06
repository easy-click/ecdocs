## 说明
Canvas画布组件,可以自己画出很多想要的效果

适合 EC 6.8.0+

## 使用示例
```xml
<?xml version="1.0" encoding="utf-8"?>

    <LinearLayout
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:android="http://schemas.android.com/apk/res/android" xsi:noNamespaceSchemaLocation="layout.xsd"
        android:layout_height="match_parent" android:layout_width="match_parent"
                  android:background="#336699"
                  android:orientation="vertical" android:padding="20dp">



            <Canvas  android:tag="ca" android:cornerRadius="24dp"
                    android:background="#88000000" android:textColor="#ffffff" android:layout_width="match_parent"/>


    </LinearLayout>



```

## UI中的用法(ui.js)

```javascript

//绘制区间
var minX = -5;
var maxX = 5;
var minY = -10;

//画笔
var paint = new android.graphics.Paint();
//要绘制的函数，这里是一个一元二次函数
var f = function(x){
    return x * x + 3 * x - 4;
}

function main(){
  ui.layout("ddd","f.xml")
  logd(ui.ca);

  ui.ca.onDraw(function (canvas){
        logd("==> "+canvas);
           var w = canvas.getWidth();
            var h = canvas.getHeight();
            //计算y轴区间上限
            var maxY = minY + (maxX - minX) * h / w;
            //设置画笔颜色为黑色
            paint.setColor(android.graphics.Color.parseColor("#000000"));
            //绘制两个坐标轴
            canvas.drawLine(w / 2, 0, w / 2, h, paint);
            canvas.drawLine(0, h / 2, w, h / 2, paint);
            //设置画笔颜色为红色
            paint.setColor(android.graphics.Color.parseColor("#ff0000"));
            //绘制图像
            for(var i = 0; i < w; i++){
                var x = minX + i / w * (maxX - minX);
                var y = f(x);
                var j = h - (y - minY) / (maxY - minY) * h;
                canvas.drawPoint(i, j, paint);
         }
  })
}
main();



```



## 属性说明

### 公有属性
请参考 [公有属性](/zh-cn/funcs/ui/ui-native-view.md#公有属性)

### 私有属性

| 属性名 | 说明 | 可选值 |
| :------: | :------: | :------: |
| layout_weight | 子元素权重 | 数字<br/>当父级为LinearLayout的时候，子控件可以设置权重|
| fillViewport | 填充所有视图 | true: 是 false:否 |

## 



