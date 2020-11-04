# 画笔
<div class="try-code">

```javascript
export abstract class Pen
```
</div>

具有公共绘画属性的抽象类
<div class="try-code">

```javascript
// es6, npm lib
import { Pen } from 'topology-core/models/pen';

// es5, bundle.js
Le5leTopology.Pen
```
</div>

## 成员变量列表

|名称|类型|默认值|描述|
|:---|:---|:---|:---|
|id|string|随机字符串|唯一标识|
|type<br><font color=red>0.2.x后的版本新增</font>|enum PenType { <br>&nbsp;&nbsp;Node = 0,<br>&nbsp;&nbsp;Line = 1<br>&nbsp;&nbsp;}|Node|画笔类型：是节点还是连线|
|name|string||名称|
|rect|自定义Rect类||占据的大小位置，参考Rect|
|dash|number|0|仅仅在lineDash未定义时，使用预设样式设置html canvas的setLineDash属性<br><font color=red>dash值为数字：0,1,2,3中的一个</font><br>预设值对应的属性效果：switch(this.dash){<br>case 1 :<br>ctx.setLineDash([5,5]);<br>break;<br>case 2 :<br>ctx.setLineDash([10,10]);<br>break;<br>case 3 :<br>ctx.setLineDash([10, 10, 2, 10]);<br>break;<br>}|
|lineDash|number[]|undefind|html canvas的虚线样式。<br>例如，值为：[5,5]|
|lineWidth|number|1|线宽|
|strokeStyle|string||线条颜色，可以参考canvas|
|fillStyle|string||填充颜色，可以参考canvas。|
|globalAlpha|number|1|透明度，可以参考canvas。|
|rotate|number|0|旋转角度, 单位°|
|offsetRotate|number|0|临时偏移旋转角度, 单位°|
|font|json|{<br>color: '',<br>background: '',<br>fontFamily: '"Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial',<br>fontSize: 12,<br>lineHeight: 1.5,<br>fontStyle: 'normal',<br>fontWeight: 'normal',<br>textAlign: 'center' as CanvasTextAlign,<br>textBaseline: 'middle' as CanvasTextBaseline<br>}|字体设置|
|animatePlay|boolean||是否自动播放|
|animateStart|number||动画开始时间。Date.now<br>执行canvas.animate()开始播放动画<br>需要停止动画时，设置animateStart = 0，再执行canvas.animate()|
|animateCycle|number||循环播放次数。默认为空，表示无限循环|
|animateCycleIndex|boolean|false|当前循环播放了第几次。|
|nextAnimate|string||自动播放下一个动画的节点/连线的tag|
|animateAlone<br><br><font color=red>version > 0.2.6</font>|boolean|false|播放动画时，是否孤立，不影响其他节点/连线。<br>比如，关联的连线不跟着大小位置改变。|
|locked|enum Lock {<br>None,<br>Readonly,<br>NoEvent<br>}||是否锁定<br>0 - 默认，没有锁；<br>1 - 只读，可选中，可单击等<br>2 - 不处理任何事件|
|stand <br><br>version > 0.2.10|boolean||当为子节点时，stand为true,单击直接选中子节点。默认Shift + 单击选中子节点|
|text|string||文字内容|
|textMaxLine|number||文字最大行数|
|textRect|Rect||文字区域|
|fullTextRect|Rect||为节点时，节点没图标时，文字区域。一般指此时文字区域占据了整个节点|
|textOffsetX|number||文字相对偏移|
|textOffsetY|number||文字相对偏移|
|tags|string[]|tag标签数组|
|data|any||用于保存自定义数据（业务数据）。|
|markdown|string||只读模式下，鼠标移动上去，显示markdown提示<br>依赖[https://cdn.jsdelivr.net/npm/marked/marked.min.js](https://cdn.jsdelivr.net/npm/marked/marked.min.js)需要自行加载|
|tipId|string||只读模式下，鼠标移动上去，显示用户自定义的dom提示。dom元素的id属性值|
|title|string||只读模式下，鼠标移动上去，显示元素html的title提示|
|visible|boolean||节点是否显示。<br>默认显示|
|hideRotateCP|boolean|false|是否禁止旋转控制点|
|hideSizeCP|boolean|false|是否禁止缩放控制点|
|hideAnchor|boolean|false|是否禁止连线锚点控制点|
|events|{<br>ype: EventType;<br>action: EventAction;<br>value: string;<br>params:string; <br>name?: string;<br>}[]<br>}||事件数组。<br>如果想执行vue、react等源码中的函数，请用[消息事件](https://www.yuque.com/alsmile/topology/apis)<br>type:枚举类型，事件类型enum EventType{<br>Click,<br>DblClick,<br>WebSocket,<br>MQTT<br>}<br>action:枚举类型，事件行为 enum EventAction {<br>  Link,         // 跳转链接，0<br>  Animate,   // 执行动画，1<br> Function,   // 执行函数，2<br>WindowFn // 执行window下的全局函数，3<br>SetProps // 更新属性数据，4<br>}<br>value: （字符串）事件数据<br>根据事件行为分别为：<br> 1.链接地址；<br>2.要播放动画的画笔tag;<br>3.自定义函数js代码；<br>4.window函数名;<br>paramas:（字符串，多个参数，可以用json字符串）<br>事件参数，可用于给函数传递的参数，当action=SetProps时，params==='false'，不重绘画布。|
|shadowColor|string||阴影颜色。|
|shadowBlur|number||阴影的模糊级别（数值越大越模糊)|
|shadowOffsetX|number||阴影与形状的水平距离|
|shadowOffsetY|number||阴影与形状的垂直距离|

## 设置线条样式和旋转

<div class="try-code">

``` javascript
const newNode = topology.addNode({ 
        rect: {
            x:10,
            y: 10,
            width: 50,
            height: 50,
            ex:60,
            ey:60
            },
        name: 'triangle',
        strokeStyle: 'red',
        dash:0,
        lineWidth:10,
        strokeStyle:'red',
        fillStyle:'black',
        globalAlpha:1,
        rotate:90
      });

```
<a class="try" data-set="pens1">试一试</a>

</div>

## 设置字体大小
  你可以改变字体的样式和locked的状态。
<div class="try-code">

``` javascript
const newNode = topology.addNode({ 
      rect: {
          x:10,
          y: 10,
          width: 150,
          height: 50
      },
      text:'我是一个文本'
      name: 'rectangle',
      font:{
         color:'#000',
         background:'red',
         fontSize:15
        },
        locked:1
       });

```
<a class="try" data-set="font">试一试</a>
</div>

## 成员函数列表

### constructor构造函数
<div class="try-code">

```javascript
constructor(json?: any)
```
</div>

**参数**

|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|json|object|否|通过一个画笔或保存的json对象，创建一个新画笔对象|

<br>
<br>
<br>

### draw绘画函数
<div class="try-code">

```javascript
abstract draw(ctx: CanvasRenderingContext2D): void
``` 
</div>

抽象类绘画函数，需要继承者自己实现绘画功能。

**参数**

|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|ctx|CanvasRenderingContext2D|是|canvas上下文|


### hit判断点是否命中此画笔
<div class="try-code">

```javascript
hit(point: Point, padding = 0)
``` 
</div>

**参数**

|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|point|自定义Point|是|点坐标|
|padding|number|否|内边距，扩大命中范围|

### Event

画笔自定义事件列表。事件数组。

当为action为函数时，函数可接受3个固定名称参数（pen, params, client?）。
其中client为websocket或mqtt的连接客户端。mqtt使用的是mqtt.js。

pen.events示例
<div class="try-code">

```javascript
// pen.events = 
[{
  type: 0, // 单击
  action: 0, // Link， 链接
  value: `http://xxxxx`,
  params: '_blank'  
}，{
  type: 1, // 双击
  action: 1, // Animate，动画
  value: `tag`,  // 要播放动画的pen的tag
  params: ''  // 暂时没用
}，{
  type: 2, // websocket
  action: 2, // Function，自定义函数
  name: 'event name',  // 监听websocket消息名 
  value: `console.log('pen', pen, 'params', params, client)`,  // 函数js代码
  params: 'false'  // 仅当params==='false'时，不重绘；否则立刻重绘画布
}，，{
  type: 3, // mqtt
  action: 2, // Function，自定义函数
  name: 'topic name',  // 监听mqtt的topic 
  value: `console.log('pen', pen, 'params', params, client)`,  // 函数js代码 
  params: 'false'  // 仅当params==='false'时，不重绘；否则立刻重绘画布
}，{
  type: 0, // 单击
  action: 3, // windowFn，window下的全局函数
  value: `函数名`,  
  params: '{xxxxx,xxxx}'  // 传递给函数的参数，必须为字符串。可以为json字符串，开发者自己parse
}]
```
</div>

### websocket示例
<div class="try-code">

```javascript
// pen.events = 
[{
  type: 2, // websocket
   // websocket的消息格式必须为json字符串：{event: '消息名，如socketTest', data: 消息数据}
  name: 'socketTest', // 监听websocket消息名。 
  action: 2, // Function，自定义函数
  // 参数 pen - 当前画笔；params = websocket消息中的data || params。
  value: `console.log('pen', pen, 'params', params, 'websocket', websocket)`,  // 函数js代码
  params: '不推荐。仅当websocket.data为空时，此params有效'
}]
```
</div>

### websocket事件推送的消息格式
<div class="try-code">

```javascript
{
  event: '消息名，如socketTest', 
  data: 消息数据
}
```
</div>

### websocket/mqtt事件推送更新属性的数据格式
<div class="try-code">

```javascript
// 必须为标准的数组对象或json.stringfy格式
[{
  "key": "属性名，参考文档", 
  "data": "属性值"
}]
```
</div>
