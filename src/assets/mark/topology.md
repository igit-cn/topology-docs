# Topology

[官网-免费使用](http://topology.le5le.com/)

[Topology](https://github.com/le5le-com/topology)是一款 **开源** 的基于canvas+typescript的**绘图引擎**，可用于实现**软件架构图**、**微服务部署结构图**、**流程图**、**活动图**、**类图**、**时序图**、**SCADA**等；我们也可以按照自己的想法实现任何我们想要的图形库。

## 特性

* 开源
* 动画
* 可定制化
* 轻量（核心库 + 3图形库 也才100k左右），功能却很丰富
* 简单易用，方便集成
* 支持旋转、缩放、文字属性、边框属性、背景、连线动画等
* 优异的性能，非常流畅
* 方便的数据导入导出
* 图片保存/预览
* typescript + canvas

## 使用场景

* 微服务架构图
* 运维时部署结构拓扑图
* 流程图
* 活动图
* 时序图
* 类图等
* 思维导图/脑图
* SCADA


## 安装

### 使用 npm 或 yarn 安装

我们推荐使用 npm 或 yarn 的方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。


```javascript
# 安装绘图引擎
npm  install @topology/core

# 安装图形库 - 流程图
npm  install @topology/flow-diagram

# 安装图形库 - 活动图
npm  install @topology/activity-diagram

# 安装图形库 - 类图
npm  install @topology/class-diagram

# 安装图形库 - 时序图
npm  install @topology/sequence-diagram

# 其他共享图形库
# ...

# 集成打包版本
npm install topology-bundle
```


## package.json参考

``` javascript
{
  "name": "topology-demo",
  "version": "0.0.1",
  "description": "ES6 + Babel: The demo",
  "main": "index.js",
  "scripts": {
    "build": "webpack"
  },
  "keywords": [
    "es2018",
    "webpack"
  ],
  "author": "alsmile123@qq.com",
  "license": "MIT",
  "dependencies": {
    "@topology/core": "^0.3.2",
    "@topology/activity-diagram": "^0.3.0",
    "@topology/class-diagram": "^0.3.0",   
    "@topology/flow-diagram": "^0.3.0",
    "@topology/sequence-diagram": "^0.3.0",
    "@topology/chart-diagram": "^0.3.0",
    "@topology/layout": "^0.3.0"
  },
  "devDependencies": {
    "@babel/core": "^7.5.5",
    "@babel/plugin-transform-runtime": "^7.5.5",
    "@babel/preset-env": "^7.5.5",
    "babel-loader": "^8.0.6",
    "path": "^0.12.7",
    "webpack": "^4.37.0",
    "webpack-cli": "^3.3.6"
  }
}
```


## 使用

``` javascript
// 先导入库
import { Topology, Options, registerNode } from '@topology/core';
import { register as registerFlow } from '@topology/flow-diagram';
import { register as registerActivity } from '@topology/activity-diagram';
import { register as registerClass } from '@topology/class-diagram';
import { register as registerSequence } from '@topology/sequence-diagram';
import { register as registerChart } from '@topology/chart-diagram';

// 注册图形库
canvasRegister() {
  registerFlow();
  registerActivity();
  registerClass();
  registerSequence();
  registerChart();
  // ... 其他图形库
}
canvasRegister(); 

```


## 谁在使用

* 海云捷迅
* 汇客互动
* 重庆环投生态环境监测网络与工程治理有限公司
* 恒安嘉新（北京）科技股份有限公司
* 北京翌普信息科技有限公司
* 天津辰思科技
* 上海层峰


## 如何贡献

如果你希望参与贡献，请[star](https://github.com/le5le-com/topology)鼓励我们

## 特别感谢

开源以来，收到过多笔微信资助，因微信支付无法回复：感谢大家的支持。特在此感谢大家，谢谢的大家的支持！

![](https://cdn.nlark.com/yuque/0/2020/png/179380/1584515404421-31fb07ab-7c14-4aa4-a942-834447cb89f8.png)