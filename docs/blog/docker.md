# Docker安装


## 启用Hyper-V
右键开始菜单并以管理员身份运行 PowerShell，执行以下命令：
```js
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
```

## 安装 Docker Desktop for Windows

安装完成后，Docker 会自动启动。通知栏上会出现个小鲸鱼的图标，表示 Docker 正在运行。

可以在命令行执行```docker version``` 来查看版本号，```docker run hello-world``` 来载入测试镜像测试。

如果没启动，你可以在 Windows 搜索 Docker 来启动

## 检查是否安装成功
安装之后，可以打开 PowerShell 并运行以下命令检测是否运行成功：

```js
docker run hello-world
```

[Windows Docker 安装 | 菜鸟教程 (runoob.com)](https://www.runoob.com/docker/windows-docker-install.html)

## 报错处理
如果启动中遇到因 WSL 2 导致地错误，请安装 WSL 2。

[安装 WSL | Microsoft Docs](https://docs.microsoft.com/zh-cn/windows/wsl/install)

安装更新包 [https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)

## 参考链接
家庭中文版安装Docker

参考链接：[Win10家庭版无Hyper-V - 柠檬草不孤单 - 博客园](https://www.cnblogs.com/temari/p/13186260.html)

参考链接：[Win10 家庭中文版安装Docker(Win10家庭版 +Hyper-V+Docker） - 柠檬草不孤单 - 博客园](https://www.cnblogs.com/temari/p/13188168.html)