## 云控平台
- 云控在EC产品序列中属于 新媒体矩阵营销平台 ，用于客户管理多设备多资源协同工作
- EC中内置了和云端通信的能力，直接调用接口即可
- 具体如何使用请进群

## 核心概念

### 设备

- 用于执行任务的硬件设备，每个设备都有唯一的编号

### 脚本

- 可用于自动化执行某种任务的代码片段 

### 资源

- 资源代表可以在脚本中使用的元素，例如文字、图片、音频、视频等
- 资源可通过获取资源的接口获取 


### 任务

- 主任务：一组任务合集，包含了对应的执行设备组，执行时间周期状态等
- 子任务：单个功能任务单元，包含了需要的资源等信息
- 云控通过长链将主任务和子任务一起推送到设备中进行执行

### 数据

- 在设备上脚本运行之后产生的数据，可在云控中保存
- 可通过获取数据的接口获取之前产生的数据


## 执行流程

- 1、设备编号后，连接到云端
- 2、云端推送任务到EC中
- 3、EC加载脚本文件并调起脚本
- 4、脚本通获取任务ecloud.getTaskInfo()方法获取任务信息并循环子任务执行对应的功能
- 5、单个子任务执行完成，通过ecloud.subTaskOk或者ecloud.subTaskFail通知云端任务成功或者失败
- 6、开发者只需要对设备编号，关注4、5流程，其他的由EC自动处理

## 使用说明
