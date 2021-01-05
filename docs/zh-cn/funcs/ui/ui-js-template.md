## 模板创建
- 如果不需要和JS进行交互的情况下，可以直接使用模板进行创建
- 模板创建只需要在项目工程的layout文件夹下创建xml 文件，并编写对应的XML代码即可
- 例如:
> ```xml
> <?xml version="1.0" encoding="UTF-8" ?>
> <LinearLayout
>        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
>        xmlns:android="http://schemas.android.com/apk/res/android"
>        xsi:noNamespaceSchemaLocation="layout.xsd"
>        android:layout_height="match_parent"
>        android:layout_width="match_parent">
> <TextView android:layout_width="wrap_content"
>                        android:layout_height="wrap_content"
>                        android:text="helloworld "/>
>
> 
> </LinearLayout>
> ``` 


## 多tab标签支持
只要在工程的layout工程下新建一个ui.js文件即可
内容是 
> ```javascript
>     function main(){
>         ui.layout("参数配置","main.html");
>         ui.layout("注册使用","reg.html");
>         ui.layout("使用说明","intr.html");
>     }
>     main();
> ```

- 支持的原生视图请查看 原生UI控件 章节