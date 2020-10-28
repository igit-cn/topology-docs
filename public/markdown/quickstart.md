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
  

## 使用

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