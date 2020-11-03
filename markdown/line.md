# 连线

画布基本元素之一，继承于画笔

``` javascript
// es6, npm lib
import { Line } from 'topology-core/models/line';

// es5, bundle.js
Le5leTopology.Line
```



你可以在这里修改连线类型，颜色等属性

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
    toArrowColor:'red'
}) 

``` 

<a class="try" data-set="line">试一试</a>

</div>

## 成员变量列表

继承于画笔的成员变量这里省略，请参考画笔

|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|name<font color=red>*</font>|string||连线名称。<br><font color=red>curve</font> - 贝塞尔曲线<br><font color=red>polyline</font> - 折线<br><font color=red>line</font> - 直线<br><font color=red>mind</font> - 脑图曲线<br>|
|from|自定义Point|是|起点|
|to|自定义Point|是|终点|
|fromArrow|string|否|起点箭头,默认：triangleSoild|
|toArrow|string|否|终点箭头|
|fromArrowColor|string|否|起点箭头颜色|
|toArrowColor|string|否|终点箭头颜色|
|controlPoints|Point[]|是|控制连线形状的控制点。|
|length|number|是|连线长度。主要用于动画|
|disableEmptyLine|boolean|否|是否禁止连线终点为空（未连接到节点）|
|animateColor|string|否|连线动画颜色|
|animateSpan|number|否|连线动画移动大小，像素|
|animatePos|number|否|连线动画当前所在位置|
|animateType|number|否|动画辅助数据，给业务层用。比如，业务层默认设置了2种动画效果，可以用此数据表示用户选择了第几个动画。<br>默认0：水流动画；<br>1：水珠流动动画|
|borderWidth|number|否|线宽>2时，允许有边框|
|borderColor|string|否|边框颜色|
|text|string|否|连线文本|
|manualCps <br><font color=red>version > 0.2.3-dev</font>|boolean|否|是否禁止自动重计算连线控制点。默认否。|

## 成员函数列表

constructor构造函数

```javascript
constructor(json?: any)
```

### 参数
|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|json|object|是。属性数据为上面的成员列表|通过一个连线对象或json，创建一个新连线|


### setFrom设置起点
```javascript
setFrom(from: Point, fromArrow: string = '')
```
<br>
<br>
<br>

### setTo设置终点
```javascript
setTo(to: Point, toArrow: string = 'triangleSolid')
```
<br>
<br>
<br>

### calcControlPoints计算默认控制点

```javascript
calcControlPoints()
```
根据默认算法，计算控制点。默认控制点并不一定是最终用户想要的，用户可以调整控制点；因此，除了初始状态，不应该过度依赖此算法。

<br>
<br>
<br>

### draw绘画

```javascript
draw(ctx: CanvasRenderingContext2D)
```
<br>
<br>
<br>

### pointIn判断指定点十分在连线上

```javascript
pointIn(pt: Point)
```
<br>
<br>
<br>

### getLen获取连线长度

```javascript
getLen()
```
<br>
<br>
<br>

### animate显示动画

```javascript
animate(ctx: CanvasRenderingContext2D)
```