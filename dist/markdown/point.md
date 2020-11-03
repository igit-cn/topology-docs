# 点

``` javascript
export class Point 
```
除了x,y坐标，还带有辅助数据和锚点方向的类。

``` javascript
// es6, npm lib
import { Point } from 'topology-core/models/point';

// es5, bundle.js
Le5leTopology.Point
```

## 成员变量列表

|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|x|number|是|x坐标|
|y|number|是|y坐标|
|direction|Direction<br> export enum Direction<br>{<br>&nbsp;&nbsp;Node,<br>&nbsp;&nbsp;Up,<br>&nbsp;&nbsp;Right,<br>&nbsp;&nbsp;Bottom,<br>&nbsp;&nbsp;Left<br>}|否|方向：上、下、左、右。主要为了计算初始连线方向|
|id|string|否|为node id：标记与哪个node关联。与anchorIndex 一起表示关联了哪个节点的哪个锚点|
|anchorIndex|number|否|与第几个锚点关联|
|data|any|否|用户数据|
|hidden|boolean|否|作为锚点时，鼠标在节点上时是否隐藏，仅鼠标移动到锚点自身才显示。<br> 默认false|
|mode|enum AnchorMode {<br>&nbsp;&nbsp;Default,<br>&nbsp;&nbsp;In,<br>&nbsp;&nbsp;Out<br>}|否|作为锚点时，允许连线方向。默认双向。|


## 成员函数列表

### 构造函数

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

### 参数
|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|x|number|是|x坐标|
|y|number|是|y坐标|
|direction|Direction|否|用于表示节点锚点的方向（上下左右），好生成默认的连线控制点|
|anchorIndex|number|否|与node的第几个锚点关联|
|id|number&#124;string|否|为node id：标记与哪个node关联。与anchorIndex 一起表示关联了哪个节点的哪个锚点|
|hidden|boolean|否|作为锚点时，鼠标在节点上时是否隐藏，仅鼠标移动到锚点自身才显示。|


### hit指定点pt是否命中当前点
```javascript
hit(pt: Point, radius = 5)
```


### 参数
|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|pt|自定义Point|是|指定点|
|radius|number|否|扩大半径判断命中|

### rotate旋转
```javascript
rotate(angle: number, center: { x: number; y: number }): Point
```
指定中心点，围绕中心的旋转，得到一个新的点

### 参数
|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|angle|number|是|旋转角度|
|center|{x,y}坐标|是|中心的|

### clone克隆
```javascript
clone(): Point
``` 
克隆当前点，返回一个新的点