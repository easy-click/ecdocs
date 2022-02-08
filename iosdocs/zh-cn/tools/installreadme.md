



> **开发和运行可以在Windows，linux，mac等系统**
>
> ****
>
> **为什么编译代理IPA需要mac？**
>
> **因为apple的限制，只要使用mac的xcode运行了代理IPA源码，就可以脱离mac，在其他系统上执行脚本**





> iOS免越狱由于Apple的封闭性，的确存在一定的复杂度，但不代表不能完成免越狱自动化。
>
> 请一定要看以下三个步骤
>
> ！！安装代理ipa后才能正常运行自动化！！



```json
名词解析:
代理IPA:
	- 用于安装到iphone上的程序
	- 需要使用苹果系统的xcode进行编译运行
	- 可以使用mac mini(淘宝上二手一千多块钱)或者黑苹果

中控平台:
	- 中控程序支持windows，macos，linux等系统
	- 用于运行和守护代理的自动化服务
	- 自带了web管理界面，可以在web上管理设备和脚本

开发插件:
	- 构建于IDEA基础上的开发插件，和安卓的开发插件基本一致
	- 开发插件支持windows，macos，linux等系统
	

身份和选择：
	- 在中控平台上有开发者和普通用户两个模式
  - 开发者需要安装1，2，3的三个软件
  - 普通用户只需要安装1，2的两个软件

```



>  安装步骤



* [1、安装代理ipa](/zh-cn/tools/signagent.md)
* [2、安装中控](/zh-cn/tools/installcenter.md)
* [3、安装开发插件](/zh-cn/tools/installdevtools.md)

