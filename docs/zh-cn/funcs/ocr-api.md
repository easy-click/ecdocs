## 说明

- OCR模块是属于对图像进行识别
- OCR模块的对象前缀是ocr，例如 ocr.initOcr()这样调用
- 目前的OCR包含了ocrLite,百度AI的easyedge,paddleocr,Tesseract和百度在线识别
- Tesseract 请下载对应的语言包或者自己创建语言包


## ocr.initOcr 初始化

 * 初始化OCR模块，精准度和时间推荐 easyedge > paddleocr > baiduOnline > tess
 * 适用版本(EC 5.18.0+)
 * @param map map参数表
 * key分别为：
 * type : OCR类型，
 * 值分别为 tess = Tesseract模块，baiduOnline=百度在在线识别模块，paddleocr=百度离线的paddleocr，easyedge=百度AI OCR
 * ocrLite = ocrLite
 * 如果类型是 tess,请将训练的模型放到 /sdcard/tessdata/ 文件夹下,参数设置为 : {"type":"tess","language":"chi_sim","debug":false}<Br/>
 * language: 语言数据集文件， 例如chi_sim.traineddata 代表是中文简体语言，参数就填写chi_sim
 * debug: 代码是否设置调试模式，一般设置false即可
 * 如果类型是 baiduOnline, 参数设置为 : {"type":"baiduOnline","ak":"xxx","sk":"xx"}<Br/>
 * ak = api key,sk = secret key, 百度OCR文档地址 : https://ai.baidu.com/ai-doc/OCR/Ck3h7y2ia<Br/>
 * 如果类型是 ocrLite, 参数设置为 : {"type":"ocrLite","numThread":4,"padding":10,"maxSideLen":0}<Br/>
 * numThread: 线程数量。 <br/>
 * padding: 图像预处理，在图片外周添加白边，用于提升识别率，文字框没有正确框住所有文字时，增加此值。<br/>
 * maxSideLen: 按图片最长边的长度，此值为0代表不缩放，例：1024，如果图片长边大于1024则把图像整体缩小到1024再进行图像分割计算，如果图片长边小于1024则不缩放，如果图片长边小于32，则缩放到32。<br/>
 * @return {bool} 布尔型 成功或者失败

- easyedge OCR例子

> ```javascript
>   function main() {
>       logd("isServiceOk "+isServiceOk());
>       startEnv()
>       logd("isServiceOk "+isServiceOk());
>        let request = image.requestScreenCapture(10000,0);
>        if (!request) {
>            request = image.requestScreenCapture(10000,0);
>        }
>        logd("申请截图结果... "+request)
>        if(!request){
>           loge("申请截图权限失败,检查是否开启后台弹出,悬浮框等权限")
>          exit()
>       }
>       //申请完权限至少等1s(垃圾设备多加点)再截图,否则会截不到图
>       sleep(1000)
>       
>   	let paddleocr = {
>   		"type": "paddleocr"
>   	}
>    
>   	let easyedge = {
>   		"type": "easyedge",
>    
>   	}
>   	let inited = ocr.initOcr(easyedge)
>   	logd("初始化结果 -> " + inited);
>   	if (!inited) {
>   		loge("error : " + ocr.getErrorMsg());
>   		return;
>   	}
>    
>   	let initServer = ocr.initOcrServer(5 * 1000);
>   	logd("initServer " + initServer);
>   	if (!initServer) {
>   		loge("initServer error : " + ocr.getErrorMsg());
>   		return;
>   	}
>    	ocr.setDaemonServer(true,500);
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
>   		bitmap.recycle();
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

- Paddle OCR例子

> ```javascript
>   function main() {
>       logd("isServiceOk "+isServiceOk());
>       startEnv()
>       logd("isServiceOk "+isServiceOk());
>        let request = image.requestScreenCapture(10000,0);
>        if (!request) {
>            request = image.requestScreenCapture(10000,0);
>        }
>        logd("申请截图结果... "+request)
>        if(!request){
>           loge("申请截图权限失败,检查是否开启后台弹出,悬浮框等权限")
>          exit()
>       }
>       //申请完权限至少等1s(垃圾设备多加点)再截图,否则会截不到图
>       sleep(1000)
>       
>   	let paddleocr = {
>   		"type": "paddleocr"
>   	}
>    
>   	let easyedge = {
>   		"type": "easyedge",
>    
>   	}
>   	let inited = ocr.initOcr(paddleocr)
>   	logd("初始化结果 -> " + inited);
>   	if (!inited) {
>   		loge("error : " + ocr.getErrorMsg());
>   		return;
>   	}
>    
>   	let initServer = ocr.initOcrServer(5 * 1000);
>   	logd("initServer " + initServer);
>   	if (!initServer) {
>   		loge("initServer error : " + ocr.getErrorMsg());
>   		return;
>   	}
>    	ocr.setDaemonServer(true,500);
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
>   		bitmap.recycle();
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



- Tesseract 例子

> ```javascript
> function main() {
>       logd("isServiceOk "+isServiceOk());
>       startEnv()
>       logd("isServiceOk "+isServiceOk());
>        let request = image.requestScreenCapture(10000,0);
>        if (!request) {
>            request = image.requestScreenCapture(10000,0);
>        }
>        logd("申请截图结果... "+request)
>        if(!request){
>           loge("申请截图权限失败,检查是否开启后台弹出,悬浮框等权限")
>          exit()
>       }
>       //申请完权限至少等1s(垃圾设备多加点)再截图,否则会截不到图
>       sleep(1000)
>       
>     //Tesseract模块初始化参数
>     let tessInitMap ={
>         "type":"tess",
>         "language":"chi_sim",
>         "debug":true
>     }
> 
>     let  inited = ocr.initOcr(tessInitMap)
>     logd("初始化结果 -> "+inited );
>     if (!inited) {
>         loge("error : "+ocr.getErrorMsg());
>         return;
>     }
> 
>     //读取一个bitmap
>     let bitmap = image.readBitmap("/sdcard/a.png");
>     if (!bitmap) {
>          loge("读取图片失败");
>          return;
>     }
>     // 对图片进行识别
>     let result = ocr.ocrBitmap(bitmap,20*1000,{});
>     if (result) {
>         logd("ocr结果-》 "+JSON.stringify(result));
>         for (var i = 0; i < result.length; i++) {
>             var value=result[i];
>             logd("文字 : "+value.label+" x: "+value.x +" y: "+value.y+" width: "+value.width+" height: "+value.height);
>         }
>     }else{
>         logw("未识别到结果");
>     }
> 
>     bitmap.recycle();
>     //释放所有资源
>     ocr.releaseAll();
> 
> }
> 
> 
> 
> main();
> 
> ```



- 百度在线OCR例子

> ```javascript
> 
>   function main() {
>       logd("isServiceOk "+isServiceOk());
>       startEnv()
>       logd("isServiceOk "+isServiceOk());
>        let request = image.requestScreenCapture(10000,0);
>        if (!request) {
>            request = image.requestScreenCapture(10000,0);
>        }
>        logd("申请截图结果... "+request)
>        if(!request){
>           loge("申请截图权限失败,检查是否开启后台弹出,悬浮框等权限")
>          exit()
>       }
>       //申请完权限至少等1s(垃圾设备多加点)再截图,否则会截不到图
>       sleep(1000)
>       
>        let baiduOnlineInitMap ={
>               "type":"baiduOnline",
>               "ak":"xx",
>               "sk":"xx"
>        }
>   
>       let  inited = ocr.initOcr(baiduOnlineInitMap)
>       logd("初始化结果 -> "+inited );
>       if (!inited) {
>           loge("error : "+ocr.getErrorMsg());
>           return;
>       }
>   
>       //读取一个bitmap
>       let bitmap = image.readBitmap("/sdcard/a.png");
>       if (!bitmap) {
>            loge("读取图片失败");
>            return;
>       }
>       // URL 参数参见 ： https://ai.baidu.com/ai-doc/OCR/tk3h7y2aq
>       // 对图片进行识别
>       let result = ocr.ocrBitmap(bitmap,20*1000,{"url":"https://aip.baidubce.com/rest/2.0/ocr/v1/accurate"});
>       if (result) {
>           logd("ocr结果-》 "+JSON.stringify(result));
>           for (var i = 0; i < result.length; i++) {
>               var value=result[i];
>               logd("文字 : "+value.label+" x: "+value.x +" y: "+value.y+" width: "+value.width+" height: "+value.height);
>           }
>       }else{
>           logw("未识别到结果 " +ocr.getErrorMsg());
>       }
>   
>       bitmap.recycle();
>       //释放所有资源
>       ocr.releaseAll();
>   
>   }
> 
>   main();
>   
> ```







## ocr.setOcrType 设置类型
 * 设置OCR实现方式
 * 适用版本(EC 5.17.0+)
 * @param type 值分别为 tess = Tesseract模块，baiduOnline=百度在在线识别模块
 * @return {bool} 成功或者失败



```javascript
代码例子常见 OCR初始化
```



## ocr.setDaemonServer 守护OCR服务

* 设置是否守护OCR服务
* 适合版本 EC 6.9.0+
* @param daemon true 代表守护，false代表不守护
* @param delay 每次守护间隔，单位是毫秒
* @return {bool} 成功或者失败



```javascript
代码例子常见 OCR初始化
```






## ocr.ocrBitmap 识别文字
 * 对Bitmap进行OCR，返回的是JSON数据，其中数据类似于与：
 * 适用版本(EC 5.17.0+)
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



## ocr.ocrImage 识别文字
 * 对 AutoImage 进行OCR，返回的是JSON数据，其中数据类似于与：
 * 适用版本(EC 8.2.0+)
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
 * @param image 图片
 * @param timeout 超时时间 单位毫秒
 * @param extra 扩展参数，map形式，例如 {"token":"xxx"}
 * @return {JSON} JSON对象 



```javascript
function main() {
    //let start = startEnv()
    //logd("start {}", start)

    let s = image.requestScreenCapture(10000, 0);
    logd("s {}", s)


    logd("初始化ocrLite")

    let m = {
        "type": "ocrLite"
    }
    m = {"type": "ocrLite", "numThread": 8, "padding": 10, "maxSideLen": 0};
    let iniit = ocr.initOcr(m);
    logd("初始化o " + iniit)
    image.initOpenCV()
    sleep(1000)
    let id = thread.execAsync(function () {
        while (true) {
            sleep(1000)

            let tmpImage = image.captureFullScreen();
            logd("截图 tmpImage {}", tmpImage)
            let tt = image.binaryzation(tmpImage, 1, 100)
            console.time(1)
            let result = ocr.ocrImage(tt, 10000, {"maxSideLen": 1024});
            if (result) {
                for (let i = 0; i < result.length; i++) {
                    logd(JSON.stringify(result[i]))
                }
            }
            logd("耗时 {}", console.timeEnd(1))
            image.recycle(tt)
            image.recycle(tmpImage)
        }
    })

    logd("线程 thread id = {}", id)

    sleep(115 * 1000)
    thread.cancelThread(id)
    sleep(1000)
    //restartScript("/sdcard/release.iec", true, 3)
}

main();

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

