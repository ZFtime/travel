# travel

# 前言

初学 vue 的时候，根据视频写的去哪儿网的项目。中间的 list 写了几个页面，其他的页面和这几个类似，所以就没有继续完善。此项目一共写了八个页面，这其中涉及到地址的切换和点击字母出现相应的地址，全部分类和推荐排序和热销推荐的详情里面的相册的展示，最主要的是，通过这个项目让我更进一步的了解了 vue 的单页面开发的流程，有兴趣的可以尝试着自己写一个，这个项目还是很适合初学者的。

## 项目介绍

travel 是基于 vue-cli3+swiper+axios+vuex 为主要技术，开发的一个去哪儿网

## 运行项目

```
下载项目之后，先安装一下依赖包
npm install
运行项目的命令
npm run serve
```

## 后台数据说明

```
这个项目所使用的后台数据是根据json-server模拟的数据，数据所在的位置：static文件夹下面的mock文件夹里面

```

## 运行后台数据的命令

```
一定要在个 ">static>mock" 文件夹下面的cmd
输入命令：json-server --watch index.json --port 9090
         json-server --watch city.json --port 9091
         json-server --watch detail.json --port 9092
注意：以上的三个命令，每个都开一个新的cmd黑窗口，想要看项目就要这样做，项目运行的时候，黑窗口"请勿关闭"(如果观看的你有什么好的办法，可以提供一下，以上这种方法仅供参考)

```

## 组件的列表

![componets](https://github.com/ZFtime/travel/blob/master/src/assets/img/componets.png)

## 项目的部分页面的展示

![home](https://github.com/ZFtime/travel/blob/master/src/assets/img/home.gif)
![city](https://github.com/ZFtime/travel/blob/master/src/assets/img/city.gif)
![detail](https://github.com/ZFtime/travel/blob/master/src/assets/img/detail.png)
![Imperial-detail](https://github.com/ZFtime/travel/blob/master/src/assets/img/Imperial%20-detail.png)
![picture](https://github.com/ZFtime/travel/blob/master/src/assets/img/picture.gif)
![tour-detail](https://github.com/ZFtime/travel/blob/master/src/assets/img/tour-detail.png)
![view-detail](https://github.com/ZFtime/travel/blob/master/src/assets/img/view-detail.png)
