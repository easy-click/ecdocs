



## 桥接配置

桥接的配置路径一般是中控安装目录下 bridgebin/config/config.toml文件，这个用记事本即可编辑

文件夹中找到以下配置选项

```
[agent]
# 是否开启设备查找 1 开启 2 不开启
# 这个默认是开启的，如果使用网页工具模式，部署到服务器，可以不开启
startup = 1
# 代理运行的端口
# 设置代理ipa的运行端口
agentPort = 18500
# 投屏运行的端口
# 设置代理投屏的运行端口
screenPort = 18600
# 发现设备模式 1 监听，2 扫描 
scanMode = 1
# agent启动的时候 超时判断，单位是秒
# 中控启动代理ipa的时候，检测启动结果的时间
detectTimeout = 15
# iOS15+ 设备，启动agent ipa，是否按照普通app模式运行 1 是 2否
# 如果是 ios15+，使用这个模式，不重启手机情况下自动化会一直保持
run15iOSIpaAgentAsApp = 2
# 启动代理服务的时候 自动重置usb链接 1 是 2否
resetUsbConAuto = 2
# 投屏质量 1 - 100
screenSteamQuality = 50
```