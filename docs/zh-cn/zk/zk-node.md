# 说明
- 全局节点接口包含了所有节点操作，对应的是 [全局模块](/zh-cn/funcs/global/global.md)和[全局快捷事件](/zh-cn/funcs/global/global-shortcut.md)
- 请求地址接口为 /global
- 所有的JSON参数中的type字段，都是要调用的方法名称，请看实例
- 以下例子均为USB连接的情况下，设备接口转到本机的 20391端口为例，请求地址为 http://127.0.0.1:20391/global
- 以下的例子均是使用nodejs做post json请求，如果你使用其他语言，可以自行更改

