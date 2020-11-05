# 快速上手

Topology 致力于提供给程序员愉悦的开发体验。




  

## 使用

<div class="try-code">

```typescript
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
</div>

<br>
<br>
<br>

## 创建画布
<div class="try-code">

  ``` html
    <div id="topology-canvas" ref="topology" ></div>
  ```
  ``` javascript
    var topologyOptions ={
         on: null,
     },
    new Topology('topology-canvas',topologyOptions);

    //后期通过topologyOptions绑定事件给on
  ```
  </div>

##  添加节点
<div class="try-code">

```javascript
const newNode = topology.addNode({
        rect: {
            x:10,
            y: 10,
            width: 50,
            height: 50
            },
        name: 'circle',
        strokeStyle: 'red',

        });
topology.render()
```
</div>

## 添加连线
<div class="try-code">

```javascript

const newLine = topology.addLine({
    from:{
        x:100,
        y:100,
        direction:2,
        anchorIndex:2
     },
        to:{
        x:250,
        y:100,
        direction:1,
        anchorIndex:1
    },
    name:'line',
    toArrowColor:'red',
    fromArrow:'triangle',
    toArrow:'circleSolid'
}) 

``` 
</div>
 
更多使用方式：参考详细介绍或视频教程


##  配合VS Code插件一起使用

在vs code插件列表里搜索：le5le topology，或le5le-topology-plugin<br>
[查看插件](https://www.oschina.net/p/topology)

<img src="https://oscimg.oschina.net/oscnet/up-5fc6838bd6c9c51536109628f41fa47e0c1.png" style="max-width:80%">

<br>
<br>
<br>

## 快速集成使用
 
es5使用示例：

https://github.com/le5le-com/topology-es5-demo

es6使用示例：


https://github.com/le5le-com/topology-demo-es6

typescript使用示例：


https://github.com/le5le-com/topology/tree/master/examples/angular/src/app


## angular/react/vue开发

### angular
直接参考GitHub源码：https://github.com/le5le-com/topology

### react

https://github.com/Summer-andy/topology-react

react入门使用教程：https://juejin.im/post/5dcc074151882559c8061905

react教程二： https://juejin.im/post/6888473068876857357

### vue 

vue入门使用教程：https://juejin.im/post/5dd73e85518825731c34b2ca
 

 ## 使用bundle.js（已打包压缩的普通js文件）

 1. 下载最新压缩包
  npm install topology
 2. 在 html 引入

   ``` javascript
   // npm 包下载的是index.js，文件名和下面的不直接一样
// 已经导入官方图形库
<script src="/node_modules/topology-bundle/index.js"></script>
   ```
 3. 开始使用
   <font color=red>开发文档，仍然参考api文档，只不过，所有的类名和方法前面，加上"Le5leTopology." </font>
   
<div class="try-code">

   ```javascript
   // 在你的js文件中使用：
    var topology = new Le5leTopology.Topology('topo-canvas', {});
    // 空白数据图形数据，可以来自于官网下载的json
    const json = {pens:[]};
    topology.open(json);
    console.log('data:',topology)
    console.log('activeLayer', topology.activeLayer
   ```
</div>

## package.json参考 

<div class="try-code">

```javascript
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
</div>