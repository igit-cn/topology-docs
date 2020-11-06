# 节点

画布基本元素之一，继承于[画笔](https://www.yuque.com/alsmile/topology/pen)
<div class="try-code">

```javascript
// es6, npm lib
import { Node } from 'topology-core/models/node';

// es5, bundle.js
Le5leTopology.Node

```
</div>

## 成员变量列表
继承于[画笔](https://www.yuque.com/alsmile/topology/pen)的成员变量这里省略，请参考[画笔](https://www.yuque.com/alsmile/topology/pen)

<font color=red>仅仅标*字段和rect里面的width、height为必须，其他字段可按需选择<br>

所有整数类型，需要用户确保是数字类型，否则可能出错。
</font>


你可以在这里修改Z轴的旋转角度，圆角背景属性等
<div class="try-code">

```javascript

const newNode = topology.addNode({ 
      rect: {
          x:10,
          y: 10,
          width: 150,
          height: 50
      }, 
      name: 'rectangle',
      zRotate:45,
      bkType:1,
      gradientFromColor:'#A9FDFF',
      gradientToColor:'#EEB6D3',
      gradientAngle:90
})

``` 

<a class="try" data-set="bkType">试一试</a>

</div>







|名称|类型|默认值|描述|
|:---|:---|:---|:---|
|name <font color=red>*</font>|string||节点名称，指用什么节点图形绘画节点形状。<br><br>例如： rectangle 指矩形，circle为圆形等<br><br>必须是有效的内置节点名，或有效的自定义（注册）节点名称。否则无法识别|
|is3D|boolean|false|是否是3D模型|
|z|number||坐标|
|zRotate|number||z轴旋转角度°|
|borderRadius|number|0|圆角。宽/高的百分比小数形式<br><1,百分比小数形式<br>>1,像素|
|bkType|number|0|背景色类型<br>0 - 纯色背景，配合fillStyle属性生效。<br>1 - 线性渐变，配合设置下面属性：<br>&nbsp;&nbsp;gradientFromColor<br>&nbsp;&nbsp;gradientToColor<br>&nbsp;&nbsp;gradientAngle<br>2 - 径向渐变，配合设置下面属性<br>&nbsp;&nbsp;gradientFromColor<br>&nbsp;&nbsp;gradientToColor<br>&nbsp;&nbsp;gradientRadius|
|gradientFromColor|string||渐变起始颜色|
|gradientToColor|string||渐变终点颜色|
|gradientAngle|number||线性渐变角度方向|
|gradientRadius|number||径向渐变半径|
|iconFamily|string||字体图标字体名称<br>（字体文件css或字体项目设置中找，不知道的，请自行教程字体图标的使用）|
|icon|string||[前提]：<br>1.<font color=red>加载字体文件</font><br>2.<font color=red>正确设置上面的iconFamily</font><br><br><font color=red>icon的值为：字体图标Unicode编码字符串</font>格式：'\ue64d'<br>icon是一个长度为1的特殊字符，'\ue64d'是编码表示法。如果不确定字符内容是否写法正确，用icon.length大小判断；或用下面的String相关函数转换。<br><br>iconfont上显示的是“&#xe752;”，需要把前面的“&#x”替换成“\u”<br><br>如果是十进制的unicode编码58953，需要使用JS编码函数转换：```String.fromCharCode(58953) ```<br><br>如果从后端拿到的是纯编码字符串，非长度为1的Unicode字符（画布上无法显示），需要先转码：<font color=red>String.fromCharCode(+'0xe64d')<br>注意，这个不再是\u,而是十六进制字符串</font>|
|iconSize|number||字体图标大小|
|iconColor|string||字体图标颜色|
|image|string||图片图标url，优先于字体图标显示。|
|imgNaturalWidth|number||图片图标原始宽，自动计算|
|imgNaturalHeight|number||图片图标原始高，自动计算|
|imageWidth|number||图片图标显示宽|
|imageHeight|number||图片图标显示高|
|imageRatio|boolean|true|是否保存图片长宽比|
|iconRect|自定义Rect||图标占据空间|
|fullIconRect|自定义Rect||没有文字，仅存在图标时占据的空间|
|text|string||文字内容|
|textMaxLine|number||文本最大显示行数|
|textRect|自定义Rect||文本占据空间|
|fullTextRect|自定义Rect||没有图标，仅存在文字时占据的空间|
|paddingTop|number&#124;string||节点内边距。如果是数字，表示像素；如果带百分号%，表示比例计算。用于用户输入。|
|paddingBottom|number&#124;string|||
|paddingLeft|number&#124;string|||
|paddingRight|number&#124;string|||
|paddingTopNum|number||自动计算的padding数字。用于计算图标、文字等区域，直接使用。|
|paddingBottomNum|number|||
|paddingLeftNum|number|||
|paddingRightNum|number|||
|anchors|Point[]||锚点。用于线的连接点|
|rotatedAnchors|Point[]||旋转后的锚点|
|dockWatchers|Point[]||移动节点时，停靠点的参考位置|
|childer|Node[]||子节点|
|stand|boolean||作为子节点是否能被独立选中|
|hideInput|boolean||双击不显示输入框|
|hideRotateCP|boolean||不显示旋转|
|hideSizeCP|boolean||不显示缩放控制点|
|hideAnchor|boolean||不显示锚点|
|onlySizeX|boolean|否|控制点只能改变节点width|
|onlySizeY|boolean|否|控制点只能改变节点height|
|rectInParent|{<br>&nbsp;x:number&#124;string,<br>&nbsp;y:number&#124;string,<br>&nbsp;width:number&#124;string;<br>&nbsp;height:number&#124;string,<br>&nbsp;marginTop?:number&#124;string,<br>&nbsp;marginRight?:number&#124;string,<br>&nbsp;marginBottom?:number&#124;string,<br>&nbsp;marginLeft?:number&#124;string,<br>&nbsp;rotate?:number<br>}||<font color=red>如果作为子节点，必须包括</font><br>x、y-相对于父节点的坐标<br>width、height-宽高<br>margin-间隔<br>rotate-旋转<br><br>其中x、y、width、height数字表示像素；%表示父节点的百分比。<br>具体计算方法，见下图2：|
|animateType|number|0|动画辅助数据，给业务层用。比如，业务层默认设置了10种动画效果，可以用此数据表示用户选择了第几个动画。|
|animateDuration|number|0|动画总时长|
|animateFrames|{<br>&nbsp;duration: number,<br>&nbsp;start?:number,<br>&nbsp;end?:number,<br>&nbsp;initState?:Node,<br>&nbsp;linear: boolean,<br>&nbsp;state: Node,<br>}[]||动画帧，详细见动画|
|iframe|string||显示外部网页，类似iframe|
|elementId|string||和节点绑定的dom元素。一般用于临时生成，显示一段自己的dom元素。比如画布里使用echart用到的|
|elementRendered|boolean||外部dom是否已经渲染。当需要重绘时，设置为false（用于第三方库辅助变量）比如修改echarts数据后|

<br>
<br>
<br>

<img src="https://cdn.nlark.com/yuque/0/2019/png/179380/1572417571108-903996f3-01c5-433f-8cae-4a1d6e7f19a6.png" style="max-width:100%">

<p style="text-align:center">图一</p>

<br>
<br>

<img src="https://cdn.nlark.com/yuque/0/2019/png/179380/1572417626214-c35123aa-b4b9-4861-84d4-ac71f8cf3966.png" style="max-width:100%">

<p style="text-align:center">图二，子节点区域计算方式</p>


## 成员函数列表

### constructor构造函数
constructor(json?: any)

**参数**

|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|json|object|是。属性数据为上面的成员列表|通过一个节点或保存的json对象，创建一个新节点|


<br>
<br>
<br> 

### init初始化函数
<div class="try-code">

```javascript
init()
//通过节点属性，动态计算节点图标区域、文字区域、锚点等。
```
</div>

<br>
<br>
<br>

### getIconRect计算图标区域函数
<div class="try-code">

``` javascript
getIconRect()
```
</div>

<br>
<br>
<br>

### getTextRect计算文字区域函数
<div class="try-code">

```javascript
getTextRect()
```
</div>

<br>
<br>
<br>

### calcAnchors计算锚点函数
<div class="try-code">

```javascript
calcAnchors()
```
</div>

<br>
<br>
<br>

### calcRotateAnchors计算旋转后的锚点函数
<div class="try-code">

```javascript
calcRotateAnchors()
```
</div>

<br>
<br>
<br>

### getDockWatchers计算移动节点时，停靠点的参考位置函数
<div class="try-code">

```javascript
getDockWatchers()
```
</div>


<br>
<br>
<br>

### emitRender通知画布刷新绘画函数
<div class="try-code">

```javascript
emitRender()
```
</div>

<br>
<br>
<br>

### drawImg绘画图片函数
<div class="try-code">

```javascript
drawImg(ctx: CanvasRenderingContext2D)
```
</div>

<br>
<br>
<br>

### draw绘画函数
<div class="try-code">

```javascript
draw(ctx: CanvasRenderingContext2D)
```
</div>

<br>
<br>
<br>

### animate显示动画
<div class="try-code">

```javascript
animate(ctx: CanvasRenderingContext2D, now: number)
//渲染节点动画。其中，now - 当前时间Date.now
```
</div>

<br>
<br>
<br>

### scale缩放
<div class="try-code">

```javascript
scale(scale: number, center?: Point)
//根据中心点（默认为节点中心）缩放节点。
```
</div>

<br>
<br>
<br>

### setChild设置子节点
<div class="try-code">

```javascript
setChild(children: any[])
//传入json数组，自动new Node并push到节点children里面。
//【注意】所有子节点必须包含rectInParent
```
</div>

手工临时给节点添加子节点：
<div class="try-code">

```javascript
// 伪代码，下面代码默认包含递归添加
const parent = new Node(...);
parent.setChild([{...}]);
canvas.render();
```
</div>

<br>
<br>
<br>

### calcChildrenRect 作为父节点，计算子节点计算位置
<div class="try-code">

```javascript
calcChildrenRect()
```
</div>
<br>
<br>
<br>

### calcRectByParent 作为子节点，计算在父节点计算位置
<div class="try-code">

```javascript
calcRectByParent(parent: Pen)
// 根据子节点rectInParent属性，计算实际在画布中位置
```
</div>

<br>
<br>
<br>

### calcRectInParent 根据子节点当前画布位置，计算在父节点的位置
<div class="try-code">

``` javascript
calcRectInParent(parent: Pen)
// 计算子节点的rectInParent属性
```
</div>
<br>
<br>
<br>

### setChild 设置子节点
<div class="try-code">

```javascript
setChild(children: any[])
//子节点json对象数组或Node数组
```
</div>

手工临时给节点添加子节点：
<div class="try-code">

```javascript
// 伪代码，下面代码默认不含递归添加
const parent = new Node(...);
const child = new Node(...);
parent.setChild([child]);
canvas.render();
```
</div>
