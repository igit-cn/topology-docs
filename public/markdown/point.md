# 点
<div class="try-code">


``` javascript
export class Point 
```
</div>
除了x,y坐标，还带有辅助数据和锚点方向的类。
<br>
<br>
<div class="try-code">

``` javascript
// es6, npm lib
import { Point } from 'topology-core/models/point';

// es5, bundle.js
Le5leTopology.Point
```
</div>
<br>
<br>
<br>

## 成员变量列表

|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|x|number|是|x坐标|
|y|number|是|y坐标|
|direction|Direction<br> export enum Direction<br>{<br>&nbsp;&nbsp;Node,<br>&nbsp;&nbsp;Up,<br>&nbsp;&nbsp;Right,<br>&nbsp;&nbsp;Bottom,<br>&nbsp;&nbsp;Left<br>}|否|方向：上、下、左、右。主要为了计算初始连线方向|
|id|string|否|为node id：标记与哪个node关联。<br>与anchorIndex 一起表示关联了哪个节点的哪个锚点|
|anchorIndex|number|否|与第几个锚点关联|
|data|any|否|用户数据|
|hidden|boolean|否|作为锚点时，鼠标在节点上时是否隐藏，<br>仅鼠标移动到锚点自身才显示。<br> 默认false|
|mode|enum AnchorMode {<br>&nbsp;&nbsp;Default,<br>&nbsp;&nbsp;In,<br>&nbsp;&nbsp;Out<br>}|否|作为锚点时，允许连线方向。默认双向。|


## 成员函数列表

### 构造函数
<div class="try-code">

```javascript
constructor(
    public x: number,
    public y: number,
    direction?: Direction,
    anchorIndex?: number,
    id?: number | string,
    hidden?: boolean
  )
```
</div>
<br>
<br>

**参数**

|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|x|number|是|x坐标|
|y|number|是|y坐标|
|direction|Direction|否|用于表示节点锚点的方向（上下左右），好生成默认的连线控制点|
|anchorIndex|number|否|与node的第几个锚点关联|
|id|number&#124;string|否|为node id：标记与哪个node关联。<br>与anchorIndex 一起表示关联了哪个节点的哪个锚点|
|hidden|boolean|否|作为锚点时，鼠标在节点上时是否隐藏，<br>仅鼠标移动到锚点自身才显示。|


### hit指定点pt是否命中当前点
<div class="try-code">

```javascript
hit(pt: Point, radius = 5)
```
</div>
<br>
<br>

**参数**

|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|pt|自定义Point|是|指定点|
|radius|number|否|扩大半径判断命中|

### rotate旋转
<div class="try-code">

```javascript
rotate(angle: number, center: { x: number; y: number }): Point
```
</div>
指定中心点，围绕中心的旋转，得到一个新的点
<br>
<br>

**参数**

|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|angle|number|是|旋转角度|
|center|{x,y}坐标|是|中心的|

<br>

### clone克隆
<div class="try-code">

```javascript
clone(): Point
``` 
</div>
克隆当前点，返回一个新的点

<br>
<br>

# 锚点

<img src="https://cdn.nlark.com/yuque/0/2019/png/179380/1571388562844-78500243-cae3-4bc9-879e-765dfcad0850.png" style="max-width:100%"></img>

用于节点间连线的点，继承于点。鼠标移到节点去显示橙色圆圈的，是显示锚点；鼠标移动到锚点自身上才显示的，是隐式锚点。

当自定义图形时，需要实现计算锚点函数，详情见 自定义图形库 。


<br>
<br>
<br>


## 限制锚点单向连线

只允许锚点作为起点或终点。

对于自定义图形库，计算锚点函数里给锚点设置mode属性即可。
<div class="try-code">

```javascript

import { Node } from '../models/node';
import { Point } from '../models/point';
import { Direction } from '../models/direction';
import { AnchorMode } from '../models/status';

export function myAnchors(node: Node) {
  node.anchors.push(new Point(node.rect.x, node.rect.y + node.rect.height / 2, Direction.Left));
  node.anchors.push(new Point(node.rect.x + node.rect.width / 2, node.rect.y, Direction.Up));
  node.anchors.push(new Point(node.rect.x + node.rect.width, node.rect.y + node.rect.height / 2, Direction.Right));
  node.anchors.push(new Point(node.rect.x + node.rect.width / 2, node.rect.y + node.rect.height, Direction.Bottom));

  // 例子：锚点节点只允许in（作为终点）；上面锚点只允许out
  node.anchors[0].mode = AnchorMode.In;
  node.anchors[1].mode = AnchorMode.Out;
}

```
</div>

<br>
<br>
<br>

## 给已有图形库，重新定义并覆盖为自己的锚点函数

仅覆盖注册即可
<div class="try-code">

```javscript
import { registerNode } from 'topology-core/middles';
import { rectangle } from 'topology-core/middles/nodes/rectangle';
import { myAnchors } from './myAnchors';

export function register() {
  // 把rectangle的锚点函数覆盖为自己定义的锚点函数。后面两个参数为null，表示使用缺省方法
  registerNode('rectangle', rectangle, myAnchors, null, null, true);
}
```
</div>
<br>
<br>

# 控制点
<img  src="https://cdn.nlark.com/yuque/0/2019/png/179380/1571389800584-3823b65c-cf2a-45d9-88f6-6d8038a4372e.png" width="48%" height="auto">
<img  src="https://cdn.nlark.com/yuque/0/2019/png/179380/1571389818282-86dedc96-232d-4f9c-9699-3ff95163958c.png" width="48%" height="auto">

<br><br><br>
如上图，橙色圆圈为控制点，继承于**点**，用于控制连线形状。<br><br>
每一种类型的连线，结合锚点方向，会自动计算默认控制点。开发者无需特别关心；用户可以移动修改控制点位置，改变连线形状。