# 自定义组件

可参考：https://github.com/le5le-com/topology/tree/master/packages/flow-diagram

自定义图形库，主要指自定义节点。

## 节点组成

1. 形状（边框）

  <img src="https://cdn.nlark.com/yuque/0/2019/png/179380/1571746365910-26ed67e1-3f66-435e-b3ca-68f5986d9ab0.png" />

2. 图标/图片

  <img src="https://cdn.nlark.com/yuque/0/2019/png/179380/1571746522499-eae7c177-723b-4184-bafd-23870753df80.png" />

3. 文字

  <img src="https://cdn.nlark.com/yuque/0/2019/png/179380/1571746560516-581fc352-7116-41ca-a31a-e35ebd89cb93.png" />

4. 锚点

  <img src="https://cdn.nlark.com/yuque/0/2019/png/179380/1571746591650-8395d1ab-5763-4c64-8eff-d73c44594bcf.png"/>  

自定义图形的过程，就是如何实现上面组成部分。锚点可以使用默认的上下左右4个点。

## 编写自定义图形组件（4步）

1. 绘制形状

``` javascript
import { Node } from '@topology/core';

export function myShape(ctx: CanvasRenderingContext2D, node: Node) {
  ctx.beginPath();
  
  // Make my shape.
  ...
  ...
  ...
  
  // 必须判空再填充
  (node.fillStyle || node.bkType) && ctx.fill();
  ctx.stroke();
}

```

1) 定义一个可导出的函数，例如：myShape

**参数**

|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|ctx|CanvasRenderingContext2D|是|canvas的绘画上下文。你想怎么画，你决定。|
|node|Node|是|节点信息。参考 <a href="/node">节点</a>|