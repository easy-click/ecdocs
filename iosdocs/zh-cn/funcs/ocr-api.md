## 说明

- OCR模块是属于对图像进行识别
- OCR模块的对象前缀是ocr，例如 ocr.initOcr()这样调用
- 目前的OCR包含了 ocrLite



## ocr.initOcr 初始化

 * 初始化OCR模块
 
 * @param map map参数表
 * key分别为：
 * type : OCR类型，值分别为:
    * ocrLite = ocrLite,

 * 如果类型是 ocrLite, 参数设置为 : {"type":"ocrLite","cpuType:"","baseDir":""},
    * baseDir: ocrLite 类库存放路径，一般会和ec自带在同个目录下,文件夹名称是: OcrLiteNcnn
    * cpuType: 主机的cpu类型，分别是win-lib-cpu-x64，win-lib-cpu-x86,Linux-Lib-CPU,Darwin-Lib-CPU
    * 如果baseDir和cpuType不填写，重新会自动查找
 * @return {bool} 布尔型 成功或者失败


- ocrLite OCR例子

> ```javascript
>   function main() {
>   	let ocrLite = {
>   		"type": "ocrLite"
>        "baseDir":"c:/ec/OcrLiteNcnn",
>        "cpuType":"win-lib-cpu-x64"
>   	}
>    
>   	let inited = ocr.initOcr(ocrLite)
>   	logd("初始化结果 -> " + inited);
>   	if (!inited) {
>   		loge("error : " + ocr.getErrorMsg());
>   		return;
>   	}
>   
>   	for (var ix = 0; ix < 20; ix++) {
>    
>   		//读取一个bitmap
>   		let bitmap = image.readBitmap("/sdcard/Screenshot_20210127_152932_com.huawei.android.lau.jpg");
>   		if (!bitmap) {
>   			loge("读取图片失败");
>   			continue;
>   		}
>   		console.time("1")
>   		logd("start---ocr");
>   		// 对图片进行识别
>   		let result = ocr.ocrBitmap(bitmap, 20 * 1000, {});
>   		logd(result)
>   		if (result) {
>   			logd("ocr结果-》 " + JSON.stringify(result));
>   			for (var i = 0; i < result.length; i++) {
>   				var value = result[i];
>   				logd("文字 : " + value.label + " x: " + value.x + " y: " + value.y + " width: " + value.width + " height: " + value.height);
>   			}
>   		} else {
>   			logw("未识别到结果");
>   		}
>   	
>   		logd("耗时: " + console.timeEnd(1) + " ms")
>   		sleep(1000);
>   		logd("ix = "+ix)
>   	}
>   	//释放所有资源
>   	ocr.releaseAll();
>   }
>   main();
> 
> ```






## ocr.ocrBitmap 识别文字
 * 对 BufferedImage 进行OCR，返回的是JSON数据，其中数据类似于与：
 * [{
 * 	"label": "奇趣装扮三阶盘化",
 *	"confidence": 0.48334712,
 *	"x": 11,
 *	"y": 25,
 *	"width": 100,
 *	"height": 100
 * }]
 *  <br/>
 *  label: 代表是识别的文字
 *  confidence：代表识别的准确度
 *  x: 代表X开始坐标
 *  Y: 代表Y开始坐标
 *  width: 代表宽度
 *  height: 代表高度
 * @param bitmap 图片
 * @param timeout 超时时间 单位毫秒
 * @param extra 扩展参数，map形式，例如 {"token":"xxx"}
 * @return {JSON} JSON对象 



## ocr.ocrImage 识别文字
 * 对 AutoImage 进行OCR，返回的是JSON数据，其中数据类似于与：
 * [{
 * 	"label": "奇趣装扮三阶盘化",
 *	"confidence": 0.48334712,
 *	"x": 11,
 *	"y": 25,
 *	"width": 100,
 *	"height": 100
 * }]
 *  <br/>
 *  label: 代表是识别的文字
 *  confidence：代表识别的准确度
 *  x: 代表X开始坐标
 *  Y: 代表Y开始坐标
 *  width: 代表宽度
 *  height: 代表高度
 * @param bitmap 图片
 * @param timeout 超时时间 单位毫秒
 * @param extra 扩展参数，map形式，例如 {"token":"xxx"}
 * @return {JSON} JSON对象 


```javascript
代码例子常见 OCR初始化
```







## ocr.getErrorMsg 获取错误消息
 * 获取OCR错误消息
 * 适用版本(EC 5.17.0+)
 * @return {string} null代表没有错误



```javascript
代码例子常见 OCR初始化
```



## ocr.releaseAll 释放OCR资源
 * 释放OCR占用的资源
 * 适用版本(EC 5.17.0+)
 * @return {bool} 成功或者失败



```javascript
代码例子常见 OCR初始化
```

