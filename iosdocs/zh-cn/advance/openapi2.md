---
title: 企业版开放API v1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.15"

---

# 企业版开放API

> v1.0.0

# 自动化接口/截图

## GET 抓取JPG图片

GET /openapi/captureFullScreenJpg

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|deviceId|query|string| 是 |none|

> 返回示例

> 200 Response

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|图片|Inline|

### 返回数据结构

## GET 抓取PNG图片

GET /openapi/captureFullScreenPng

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|deviceId|query|string| 是 |none|

> 返回示例

> 200 Response

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|图片|Inline|

### 返回数据结构

## GET 抓取图片流

GET /openapi/captureScreenStreamByte

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|deviceId|query|string| 是 |none|

> 返回示例

> 200 Response

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|图片|Inline|

### 返回数据结构

## POST 关闭图片流

POST /openapi/stopScreenStream

> Body 请求参数

```json
{
  "deviceId": "6a290cdc0b6db0565955355b157acc090e33f76e"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» deviceId|body|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "data": true,
  "msg": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||0 成功 其他失败|
|» data|boolean|true|none||true 成功 false 失败|
|» msg|string|true|none||错误消息|

## POST 开启图片流

POST /openapi/startScreenStream

> Body 请求参数

```json
{
  "deviceId": "6a290cdc0b6db0565955355b157acc090e33f76e"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» deviceId|body|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "data": true,
  "msg": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||0 成功 其他失败|
|» data|boolean|true|none||true 成功 false 失败|
|» msg|string|true|none||错误消息|

## POST 图片流是否正常

POST /openapi/isScreenStreamOk

> Body 请求参数

```json
{
  "deviceId": "6a290cdc0b6db0565955355b157acc090e33f76e"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» deviceId|body|string| 是 |none|

> 返回示例

> 成功

```json
{
  "code": 0,
  "data": true
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||0 成功 其他失败|
|» data|boolean|true|none||true 成功 false 失败|
|» msg|string|true|none||错误消息|

# 自动化接口/动作

## POST 长按

POST /openapi/press

> Body 请求参数

```json
{
  "deviceId": "6a290cdc0b6db0565955355b157acc090e33f76e",
  "x": 300,
  "y": 100,
  "duration": 1000
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» deviceId|body|string| 是 |设备ID|
|» x|body|integer| 是 |x坐标|
|» y|body|integer| 是 |Y坐标|
|» duration|body|integer| 是 |持续时长 单位毫秒|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "data": true,
  "msg": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||0 成功 其他失败|
|» data|boolean|true|none||true 成功 false 失败|
|» msg|string|true|none||错误消息|

## POST 点击坐标

POST /openapi/clickPoint

> Body 请求参数

```json
{
  "deviceId": "6a290cdc0b6db0565955355b157acc090e33f76e",
  "x": 300,
  "y": 100
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» deviceId|body|string| 是 |设备id|
|» x|body|integer| 是 |x坐标|
|» y|body|integer| 是 |y坐标|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "data": true,
  "msg": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||0 成功 其他失败|
|» data|boolean|true|none||true 成功 false 失败|
|» msg|string|true|none||错误消息|

## POST 长按坐标

POST /openapi/longClickPoint

> Body 请求参数

```json
{
  "deviceId": "6a290cdc0b6db0565955355b157acc090e33f76e",
  "x": 300,
  "y": 100,
  "duration": 1000
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» deviceId|body|string| 是 |设备id|
|» x|body|integer| 是 |x坐标|
|» y|body|integer| 是 |y坐标|
|» duration|body|integer| 是 |持续时长 单位 毫秒|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "data": true,
  "msg": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||0 成功 其他失败|
|» data|boolean|true|none||true 成功 false 失败|
|» msg|string|true|none||错误消息|

## POST 多点触摸

POST /openapi/multiTouch

> Body 请求参数

```json
{
  "deviceId": "6a290cdc0b6db0565955355b157acc090e33f76e",
  "finger1": [
    {
      "action": 0,
      "x": 500,
      "y": 200,
      "pointer": 1,
      "delay": 1
    },
    {
      "action": 2,
      "x": 500,
      "y": 200,
      "pointer": 1,
      "delay": 20
    },
    {
      "action": 2,
      "x": 500,
      "y": 300,
      "pointer": 1,
      "delay": 20
    }
  ],
  "finger2": [
    {
      "action": 0,
      "x": 500,
      "y": 200,
      "pointer": 2,
      "delay": 1
    },
    {
      "action": 2,
      "x": 500,
      "y": 200,
      "pointer": 2,
      "delay": 20
    },
    {
      "action": 2,
      "x": 500,
      "y": 300,
      "pointer": 2,
      "delay": 20
    }
  ],
  "finger3": [
    {
      "action": 0,
      "x": 200,
      "y": 200,
      "pointer": 3,
      "delay": 1
    },
    {
      "action": 2,
      "x": 300,
      "y": 200,
      "pointer": 3,
      "delay": 201
    },
    {
      "action": 2,
      "x": 400,
      "y": 300,
      "pointer": 3,
      "delay": 201
    }
  ],
  "finger4": [
    {
      "action": 0,
      "x": 200,
      "y": 200,
      "pointer": 4,
      "delay": 1
    },
    {
      "action": 2,
      "x": 300,
      "y": 200,
      "pointer": 4,
      "delay": 201
    },
    {
      "action": 2,
      "x": 400,
      "y": 300,
      "pointer": 4,
      "delay": 201
    }
  ],
  "finger5": [
    {
      "action": 0,
      "x": 200,
      "y": 200,
      "pointer": 5,
      "delay": 1
    },
    {
      "action": 2,
      "x": 300,
      "y": 200,
      "pointer": 5,
      "delay": 201
    },
    {
      "action": 2,
      "x": 400,
      "y": 300,
      "pointer": 5,
      "delay": 201
    }
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» deviceId|body|string| 是 |设备ID|
|» finger1|body|[object]| 是 |手指1|
|»» action|body|integer| 是 |按下为0，弹起为1，移动为2|
|»» x|body|integer| 是 |X坐标|
|»» y|body|integer| 是 |Y坐标|
|»» pointer|body|integer| 是 |设置第几个手指触摸点，分别是 1，2，3等，代表第n个手指|
|»» delay|body|integer| 是 |该动作延迟多少毫秒执行，这个是值当前这个事件先延迟后执行|
|» finger2|body|[object]| 是 |手指2|
|»» action|body|integer| 是 |none|
|»» x|body|integer| 是 |none|
|»» y|body|integer| 是 |none|
|»» pointer|body|integer| 是 |none|
|»» delay|body|integer| 是 |none|
|» finger3|body|[object]| 是 |手指3|
|»» action|body|integer| 是 |none|
|»» x|body|integer| 是 |none|
|»» y|body|integer| 是 |none|
|»» pointer|body|integer| 是 |none|
|»» delay|body|integer| 是 |none|
|» finger4|body|[object]| 是 |手指4|
|»» action|body|integer| 是 |none|
|»» x|body|integer| 是 |none|
|»» y|body|integer| 是 |none|
|»» pointer|body|integer| 是 |none|
|»» delay|body|integer| 是 |none|
|» finger5|body|[object]| 是 |手指5|
|»» action|body|integer| 是 |none|
|»» x|body|integer| 是 |none|
|»» y|body|integer| 是 |none|
|»» pointer|body|integer| 是 |none|
|»» delay|body|integer| 是 |none|

> 返回示例

> 成功

```json
{
  "code": 0,
  "data": true
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||0 成功 其他失败|
|» data|boolean|true|none||true 成功 false 失败|
|» msg|string|true|none||错误消息|

## POST 滑动

POST /openapi/swipeToPoint

> Body 请求参数

```json
{
  "deviceId": "6a290cdc0b6db0565955355b157acc090e33f76e",
  "startX": 300,
  "startY": 700,
  "endX": 300,
  "endY": 10,
  "duration": 1000
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» deviceId|body|string| 是 |设备ID|
|» startX|body|integer| 是 |起始X坐标|
|» startY|body|integer| 是 |起始Y坐标|
|» endX|body|integer| 是 |终点X坐标|
|» endY|body|integer| 是 |终点Y坐标|
|» duration|body|integer| 是 |持续时长 单位毫秒|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "data": true,
  "msg": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||0 成功 其他失败|
|» data|boolean|true|none||true 成功 false 失败|
|» msg|string|true|none||错误消息|

## POST 双击坐标

POST /openapi/doubleClickPoint

> Body 请求参数

```json
{
  "deviceId": "6a290cdc0b6db0565955355b157acc090e33f76e",
  "x": 300,
  "y": 100
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» deviceId|body|string| 是 |设备id|
|» x|body|integer| 是 |x坐标|
|» y|body|integer| 是 |y坐标|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "data": true,
  "msg": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||0 成功 其他失败|
|» data|boolean|true|none||true 成功 false 失败|
|» msg|string|true|none||错误消息|

## POST 安装App

POST /openapi/installApp

> Body 请求参数

```json
{
  "deviceId": "6a290cdc0b6db0565955355b157acc090e33f76e",
  "bundleId": "com.cctv.yangshipin.app.iphone",
  "path": "/Users/wangbx/Downloads/央视频_2.4.3.ipa"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» deviceId|body|string| 是 |设备ID|
|» bundleId|body|string| 是 |包名|
|» path|body|string| 是 |要安装的ipa本机路径|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "data": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||0 成功 其他失败|
|» data|string|true|none||ok 代表成功|

## POST 关闭App

POST /openapi/stopApp

> Body 请求参数

```json
{
  "deviceId": "6a290cdc0b6db0565955355b157acc090e33f76e",
  "bundleId": "rn.notes.best"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» deviceId|body|string| 是 |设备ID|
|» bundleId|body|string| 是 |包名|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "data": true,
  "msg": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||0 成功 其他失败|
|» data|boolean|true|none||true 成功 false 失败|
|» msg|string|true|none||错误消息|

## POST 输入文本

POST /openapi/inputText

> Body 请求参数

```json
{
  "deviceId": "6a290cdc0b6db0565955355b157acc090e33f76e",
  "content": "6a290cdc0b6db0565955355b157acc090e33f76e",
  "duration": 1000
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» deviceId|body|string| 是 |设备ID|
|» content|body|string| 是 |内容|
|» duration|body|integer| 是 |持续时间单位毫秒|

> 返回示例

> 成功

```json
{
  "code": 0,
  "data": true
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||0 成功 其他失败|
|» data|boolean|true|none||true 成功 false 失败|
|» msg|string|true|none||错误消息|

## POST 运行App

POST /openapi/appLaunch

> Body 请求参数

```json
{
  "deviceId": "6a290cdc0b6db0565955355b157acc090e33f76e",
  "bundleId": "rn.notes.best"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» deviceId|body|string| 是 |设备ID|
|» bundleId|body|string| 是 |包名|

> 返回示例

> 成功

```json
{
  "code": 0,
  "data": 312
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||0 成功 其他失败|
|» data|integer|true|none||进程pid|
|» msg|string|true|none||错误消息|

## POST 打开App

POST /openapi/openApp

> Body 请求参数

```json
{
  "deviceId": "6a290cdc0b6db0565955355b157acc090e33f76e",
  "bundleId": "rn.notes.best"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» deviceId|body|string| 是 |设备ID|
|» bundleId|body|string| 是 |包名|

> 返回示例

> 成功

```json
{
  "code": 0,
  "data": true
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||0 成功 其他失败|
|» data|boolean|true|none||true 成功 false 失败|
|» msg|string|true|none||错误消息|

## POST 杀死进程

POST /openapi/appKillByBundleId

> Body 请求参数

```json
{
  "deviceId": "6a290cdc0b6db0565955355b157acc090e33f76e",
  "bundleId": "rn.notes.best"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» deviceId|body|string| 是 |none|
|» bundleId|body|string| 是 |none|

> 返回示例

> 成功

```json
{
  "code": 0,
  "data": true
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||0 成功 其他失败|
|» data|boolean|true|none||true 成功 false 失败|
|» msg|string|true|none||错误消息|

## POST 卸载App

POST /openapi/uninstallApp

> Body 请求参数

```json
{
  "deviceId": "6a290cdc0b6db0565955355b157acc090e33f76e",
  "bundleId": "com.cctv.yangshipin.app.iphone"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» deviceId|body|string| 是 |设备ID|
|» bundleId|body|string| 是 |包名|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "data": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||0 成功 其他失败|
|» data|string|true|none||ok 代表成功|

## POST 主页

POST /openapi/home

> Body 请求参数

```json
{
  "deviceId": "6a290cdc0b6db0565955355b157acc090e33f76e"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» deviceId|body|string| 是 |设备ID|

> 返回示例

> 成功

```json
{
  "code": 0,
  "data": true
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||0 成功 其他失败|
|» data|boolean|true|none||true 成功 false 失败|
|» msg|string|true|none||错误消息|

# 自动化接口/启停自动化

## POST 重置USB链接

POST /openapi/resetUsbConn

> Body 请求参数

```json
{
  "deviceId": "6a290cdc0b6db0565955355b157acc090e33f76e"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» deviceId|body|string| 是 |设备ID|

> 返回示例

> 成功

```json
{
  "code": 0,
  "data": true
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||0 成功 其他失败|
|» data|boolean|true|none||true 成功 false 失败|
|» msg|string|true|none||错误消息|

## POST 启动自动化

POST /openapi/startAutoEnv

> Body 请求参数

```json
{
  "deviceId": "6a290cdc0b6db0565955355b157acc090e33f76e"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» deviceId|body|string| 是 |设备的ID|

> 返回示例

> 成功

```json
{
  "code": 0,
  "data": true
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||0 成功 其他失败|
|» msg|string|true|none||错误的消息|
|» data|boolean|true|none||true 代表成功 false 代表失败|

## POST 释放自动化

POST /openapi/closeEnv

> Body 请求参数

```json
{
  "deviceId": "6a290cdc0b6db0565955355b157acc090e33f76e"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» deviceId|body|string| 是 |设备ID|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "data": true,
  "msg": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||0 成功 其他失败|
|» data|boolean|true|none||true 代表成功 false代表失败|
|» msg|string|true|none||错误消息|

## POST 获取电量

POST /openapi/getBattery

> Body 请求参数

```json
{
  "deviceId": "6a290cdc0b6db0565955355b157acc090e33f76e"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» deviceId|body|string| 是 |设备ID|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "data": 0,
  "msg": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||0 成功 其他失败|
|» data|integer|true|none||0 - 100 手机电量|
|» msg|string|true|none||错误消息|

## POST 获取设备信息

POST /openapi/getDeviceInfo

> Body 请求参数

```json
{
  "deviceId": "6a290cdc0b6db0565955355b157acc090e33f76e"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|body|body|object| 否 ||none|
|» deviceId|body|string| 是 | 设备ID|none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "data": {
    "deviceName": "string",
    "deviceId": "string",
    "serialNo": "string",
    "deviceAlias": "string",
    "battery": 0,
    "charging": true
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» data|object|true|none||none|
|»» deviceName|string|true|none||设备名称|
|»» deviceId|string|true|none||设备ID|
|»» serialNo|string|true|none||手机序列号|
|»» deviceAlias|string|true|none||设备别名|
|»» battery|integer|true|none||电量|
|»» charging|boolean|true|none||true 正在充电 false 未充电|

## POST 充电状态

POST /openapi/isCharging

> Body 请求参数

```json
{
  "deviceId": "6a290cdc0b6db0565955355b157acc090e33f76e"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|body|body|object| 否 ||none|
|» deviceId|body|string| 是 ||none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "data": true
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||0 成功 其他失败|
|» data|boolean|true|none||true 充电 false  未充电|

## POST 代理IPA设置

POST /openapi/setAgentSetting

> Body 请求参数

```json
{
  "deviceId": "6a290cdc0b6db0565955355b157acc090e33f76e",
  "screenStreamQuality": 2,
  "screenStreamFramerate": 30
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|body|body|object| 否 ||none|
|» deviceId|body|string| 是 ||设备id|
|» screenStreamQuality|body|integer| 是 ||投屏质量 1-100|
|» screenStreamFramerate|body|integer| 是 ||投屏帧率 1-60|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "data": true,
  "msg": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||0 成功 其他失败|
|» data|boolean|true|none||true 成功 false 失败|
|» msg|string|true|none||错误消息|

## POST 自动化服务是否正常

POST /openapi/isServiceOk

> Body 请求参数

```json
{
  "deviceId": "6a290cdc0b6db0565955355b157acc090e33f76e"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|body|body|object| 否 ||none|
|» deviceId|body|string| 是 ||none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "data": true,
  "msg": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||0 成功 其他失败|
|» data|boolean|true|none||true 成功 false 失败|
|» msg|string|true|none||错误消息|

# 中控接口

## POST 设备列表

POST /openapi/deviceList

> Body 请求参数

```json
{
  "deviceId": "6a290cdc0b6db0565955355b157acc090e33f76e",
  "groupId": "92"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|body|body|object| 否 ||none|
|» deviceId|body|string| 是 ||设备的ID，模糊匹配|
|» groupId|body|string| 是 ||分组的Id|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "data": {
    "list": [
      {
        "bridgeUrl": "string",
        "deviceAlias": "string",
        "groupId": "string",
        "deviceNo": "string",
        "deviceId": "string",
        "deviceName": "string",
        "serialNo": "string",
        "groupName": "string",
        "productVersion": "string"
      }
    ],
    "total": 0,
    "page": 0
  },
  "msg": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||0 成功 其他失败|
|» data|object|true|none||数据|
|»» list|[object]|true|none||设备列表数组|
|»»» bridgeUrl|string|false|none||设备桥接地址|
|»»» deviceAlias|string|false|none||设备别名|
|»»» groupId|string|false|none||设备所在组|
|»»» deviceNo|string|false|none||设备id|
|»»» deviceId|string|false|none||设备id|
|»»» deviceName|string|false|none||设备名称|
|»»» serialNo|string|false|none||设备序列号|
|»»» groupName|string|false|none||组名|
|»»» productVersion|string|false|none||设备版本|
|»» total|integer|true|none||none|
|»» page|integer|true|none||none|
|» msg|string|true|none||错误消息|

## POST 执行脚本

POST /openapi/startScript

> Body 请求参数

```json
{
  "deviceIds": [
    "6a290cdc0b6db0565955355b157acc090e33f76e",
    "64",
    "23",
    "70"
  ],
  "name": "太连指中",
  "iecPath": "c:/dsdds/build/release.iec"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|body|body|object| 否 ||none|
|» deviceIds|body|[string]| 是 ||设备ID数组|
|» name|body|string| 是 ||脚本名称|
|» iecPath|body|string| 是 ||脚本所在的本机路径|

> 返回示例

> 200 Response

```json
{
  "msg": "string",
  "code": 0,
  "data": true
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||错误消息|
|» code|integer|true|none||0 成功 其他失败|
|» data|boolean|true|none||true 成功 false 失败|

## POST 停止脚本

POST /openapi/stopScript

> Body 请求参数

```json
{
  "deviceIds": [
    "6a290cdc0b6db0565955355b157acc090e33f76e",
    "32",
    "97"
  ]
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|body|body|object| 否 ||none|
|» deviceIds|body|[string]| 是 ||设备的ID数组|

> 返回示例

> 成功

```json
{
  "code": 0,
  "data": true
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||0 成功 其他失败|
|» data|boolean|true|none||数据|
|» msg|string|true|none||错误消息|

## POST 获取刷新信息

POST /openapi/refreshMsg

> Body 请求参数

```json
{
  "deviceIds": [
    "6a290cdc0b6db0565955355b157acc090e33f76e",
    "32",
    "97"
  ]
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|body|body|object| 否 ||none|
|» deviceIds|body|[string]| 是 ||设备的ID数组|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "data": {
    "6a290cdc0b6db0565955355b157acc090e33f76e": {
      "msg": "string",
      "deviceNo": "string",
      "deviceId": "string",
      "scriptName": "string",
      "serviceOk": "string",
      "reportTime": "string"
    }
  },
  "msg": "string"
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||0 成功 其他失败|
|» data|object|true|none||none|
|»» 6a290cdc0b6db0565955355b157acc090e33f76e|object|true|none||设备ID|
|»»» msg|string|true|none||运行消息|
|»»» deviceNo|string|true|none||设备id|
|»»» deviceId|string|true|none||设备id|
|»»» scriptName|string|true|none||脚本名称|
|»»» serviceOk|string|true|none||服务是否正常|
|»»» reportTime|string|true|none||上报时间|
|» msg|string|true|none||msg  错误消息|

# 数据模型

