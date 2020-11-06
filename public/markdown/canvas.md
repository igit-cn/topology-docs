# 画布

画布（class `Topology`）是整个绘画整体。
<div class="try-code">

```javascript
// es6, npm lib
import { Topology } from "@topology/core";

// es5, bundle.js
Le5leTopology.Topology;
```
</div>

<br>
<br>
<br>

## class Topology 的成员变量列表

| 名称         | 类型                   | 默认         | 描述                                            |
| :----------- | :--------------------- | :----------- | :---------------------------------------------- |
| parentElem   | HTMLElement            | null         | canvas 元素的父元素。画布铺满整个父元素         |
| canvas       | HTMLElement            | null         | html 的 canvas 元素，主画布，离屏的图像化显示。 |
| offscreen    | 自定义 Canvas 类       | Canvas       | 离屏层                                          |
| hoverLayer   | 自定义 HoverLayer 类   | HoverLayer   | 活动层                                          |
| activeLayer  | 自定义 Activelayer 类  | Activelayer  | 选中层                                          |
| animateLayer | 自定义 AnimateLayer 类 | AnimateLayer | 动画层                                          |
| data         | TopologyData           |              | 画布数据。参考下面：TopologyData 表格           |
| options      | 自定义 Options 接口    | ...          | 画布选项。详细描述见下面构造函数                |

<br>
<br>
<br>

## class TopologyData 画布数据的成员列表

| 名称          | 类型                                                                                                         | 默认          | 描述                                                                                                                                |
| :------------ | :----------------------------------------------------------------------------------------------------------- | :------------ | :---------------------------------------------------------------------------------------------------------------------------------- |
| pens          | Pen[]                                                                                                        | null          | 节点、连线数据集合                                                                                                                  |
| lineName      | string                                                                                                       | curve         | 当前图文默认连线类型                                                                                                                |
| fromArrowType | string                                                                                                       | 无            | 默认连线起点箭头                                                                                                                    |
| toArrowType   | string                                                                                                       | triangleSolid | 连线终点默认箭头                                                                                                                    |
| scale         | number                                                                                                       | 1             | 当前图文缩放比例： 0 - 1                                                                                                            |
| bkColor       | string                                                                                                       | 无            | 画布的背景色                                                                                                                        |
| bkImage       | string                                                                                                       | 无            | 背景图片。修改背景图片前，需要先 canvas.clearBkImg 清空旧图片                                                                       |
| grid          | boolean                                                                                                      |               | 背景网格                                                                                                                            |
| websocket     | string                                                                                                       |               | websocket url 地址，配合节点 websocket 事件使用。websocket 的消息格式为 json 字符串：{event: '消息名', data: 消息数据}              |
| mqttUrl       | string                                                                                                       |               | mqtt 连接地址 url                                                                                                                   |
| mqttOptions   | {<br>&nbsp;&nbsp;clientId?: string,<br>&nbsp;&nbsp;username?: string, <br>&nbsp;&nbsp;password?: string<br>} |               | mqtt 连接选项                                                                                                                       |
| mqttTopics    | string                                                                                                       |               | mqtt 订阅主题。多个以英文逗号“,”分隔                                                                                                |
| locked        | enum Lock {<br> &nbsp;&nbsp;None,<br>&nbsp;&nbsp;Readonly, <br>&nbsp;&nbsp;NoEvent<br>}}                     |               | None （0） - 未锁定，可任意编辑。Readonly （1） - 只读模式，允许选中 NoEvent （2） - 禁止鼠标交互，无法做任何操作。纯静态画面模式。 |
| tooltip       | boolean                                                                                                      |               | 是否显示提示 <br> 默认显示提示                                                                                                      |
| data          | any                                                                                                          |               | 用于存储用户自定义数据                                                                                                              |

<br>
<br>
<br>

## class Topology 的成员函数列表

<br>
<br>

### constructor构造函数
<div class="try-code">

```javascript
constructor(parent: string | HTMLElement, options?: Options)
```
</div>

<br>

**参数**

| 名称    | 类型                      | 是否必选 | 描述            |
| :------ | :------------------------ | :------------ | :-------------- |
| parent  | string &#124; HTMLElement | 是       | canvas 的父元素 |
| options | Options                   | 否       | 画布选项        |

<br>
<br>

## 画布选项

<br>
<div class="try-code">

```javascript
import { Options, KeyType} from '@topology/core';
const options: Options = {...}；

var canvas = new Le5leTopology.Topology("topo-canvas", {
  width,
  height,
  ... // 参考下面属性
  on: function(event, data) {
    console.log(event, data);
  }
});
```
</div>
<br>

| 名称               | 类型                                                                                                                                                                                                                   | 是否必选 | 描述            |
| :----------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- | :-------------- |
| width              | number                                                                                                                                                                                                                 | 否       | 画布宽。默认为parent的width |
| height             | number                                                                                                                                                                                                                 | 否       |画布高。默认为parent的height        |
| cacheLen           | string                                                                                                                                                                                                                 | 否       |撤消、重做的历史最大长度限制。默认为30 |
| color              | string                                                                                                                                                                                                                 | 否       | 画布默认节点、连线颜色。默认黑。        |
| activeColor        | string                                                                                                                                                                                                                 | 否       | 选中层颜色 |
| hoverColor         | string                                                                                                                                                                                                                 | 否       | 活动层颜色        |
| dragColor          | string                                                                                                                                                                                                                 | 否       | 鼠标框选节点的拖选框颜色。必须是#123456格式，六位颜色写法。画布自动追加透明度。 |
| font               | object : {<br>&nbsp;&nbsp;color:string,<br>&nbsp;&nbsp;fontFamily:string,<br>&nbsp;&nbsp;fontSize:number,<br>&nbsp;&nbsp;lineHeight: number; <br>&nbsp;&nbsp;textAlign:string;<br>&nbsp;&nbsp;textBaseline:string<br>} | 否       | 画布默认字体        |
| hideInput          | boolean                                                                                                                                                                                                                | 否       |是否禁止双击节点文字，出现文字输入框 |
| hideRotateCP       | boolean                                                                                                                                                                                                                | 否       | 是否隐藏节点旋转控制点        |
| hideSizeCP         | boolean                                                                                                                                                                                                                | 否       |是否隐藏节点大小控制点 |
| onlySizeX          | boolean                                                                                                                                                                                                                | 否       | 控制点只能改变节点width        |
| onlySizeY          | boolean                                                                                                                                                                                                                | 否       | 控制点只能改变节点height |
| hideAnchor         | boolean                                                                                                                                                                                                                | 否       | 是否隐藏节点锚点        |
| alwaysAnchor       | boolean                                                                                                                                                                                                                |否       | 总是显示所有节点的锚点。<br>单独节点不显示锚点时，设置节点hideAnchor |
| disableScale       | boolean                                                                                                                                                                                                                | 否       | 是否禁止默认的Ctrl + 鼠标滚轮缩放<br>单独节点不显示锚点时，设置节点hideAnchor       |
| disableDockLine    | boolean                                                                                                                                                                                                                |否       | 是否禁用移动节点时，自动停靠 |
| disableEmptyLine   | boolean                                                                                                                                                                                                                | 否       |是否禁止连线终点为空（未连接到节点）       |
| hoverCursor        | string                                                                                                                                                                                                                 |否       | 鼠标移动到pen上的鼠标形状|
| rotateCursor       | string                                                                                                                                                                                                                 | 是       | 控制节点旋转的鼠标图标。css自带 或 cur格式文件。        |
| playIcon           | string                                                                                                                                                                                                                 | 是       |视频播放时，播放图标。必须为字体图标的类名：例如，阿里字体图标|
| pauseIcon          | string                                                                                                                                                                                                                 | 是       | 视频播放时，暂停图标        |
| fullScreenIcon     | string                                                                                                                                                                                                                 | 是       | 视频播放时，全屏图标 |
| loopIcon           | string                                                                                                                                                                                                                 | 是       | 视频播放时，循环播放图标        |
| translateKey       | enum KeyType {<br> &nbsp;&nbsp;CtrlOrAlt,<br>&nbsp;&nbsp;None, <br>&nbsp;&nbsp;Ctrl, <br>&nbsp;&nbsp;Shift,<br>&nbsp;&nbsp;Alt<br>}                                                                                    | 否       | 平移画布快捷键类型<br>平移画布时，是否同时需要Ctrl/Shift/Alt等功能键 |
| scaleKey           | KeyType                                                                                                                                                                                                                | 否       | 缩放画布快捷键类型        |
| on                 | 回调函数:<br>(event:string,data,:any<br>) => void                                                                                                                                                                      | 否       | 接收画布消息的回调函数。<br>event-消息名<br>data-消息内容<br>推荐用es6的箭头函数()=>{},方便使用上下文中的this;否则请注意this指向。 |
| extDpiRatio        | number                                                                                                                                                                                                                 | 否       | 高清屏下的dpi自定义调整，默认：0.25。<br>最终dpi的值为：Canvas.dpiRatio = window.devicePixelRatio + options.extDpiRatio;似乎不同windows系统+浏览器下，显示效果不一致。有人反映，不加0.25更清晰；个人电脑加0.25更清晰。        |
| keydown            | enum KeydownType {<br> &nbsp;&nbsp;None = -1 ,<br>&nbsp;&nbsp;Document, <br>&nbsp;&nbsp;Canvas<br>}                                                                                                                    |        |画布监控监听对象。默认 监听 Document文档 |
| minScale           | number                                                                                                                                                                                                                 | 0.25       | 画布缩放的最小值        |
| maxScale           | number                                                                                                                                                                                                                 | 5       | 画布缩放的最大值 |
| autoExpandDistance | number                                                                                                                                                                                                                 | 200       | 鼠标移动到右/下底部时自动扩展画布大小        |
| viewPadding        | type Padding = number  &#124;string   &#124;number[]|  | 画布可视区域padding |


<br>
<br>

## resize设置大小
<div class="try-code">

```javascripit
resize(size?: { width: number; height: number })
```
</div>
<br>

**参数**

|名称 | 类型 |是否必选 |描述 |
|:--- | :--- | :---|:---|
|size|object|否|空：自动根据父元素计算非空：大小等于size的width和height|

<br>
<br>
 
## ondrop拖放接受函数
<div class="try-code">

```javascript
private ondrop(event: DragEvent)
```
</div>
<br>

私有函数，画布内部函数。允许接收一个拖曳事件，通过event.dataTransfer.getData('Text')获取一个表示节点数据的json字符串。<br>
json格式如下：
<div class="try-code">

```javascript
     {
          rect: {
            width: 50,
            height: 70
          },
          is3D: true,
          z: 10,
          zRotate: 15,
          fillStyle: '#ddd',
          name: 'cube',
          icon: '\ue63c',
          iconFamily: 'topology',
          iconColor: '#777',
          iconSize: 30
        }
```
</div>
<br>
<br>

### 其中，拖曳事件参数如下

|名称 | 类型 |是否必选 |描述|
|:---|:---|:---|:---|
|name|string|是|节点名称|
|rect|object|是|width<br>height|
|is3D|boolean|否|是否是一个3D类型的节点:是 - 多一个z坐标|
|Z|number|否|3D坐标中的z坐标|
|zRotate|number|否|z轴旋转角度|
|fillStyle|string|否|填充颜色，默认无。|
|icon|string|否|节点图标的字体图标的Unicode|
|iconFamily|string|否|字体图标公共类名|
|iconColor|string|否|字体图标颜色|
|iconSize|number|否|字体图标大小|
|image|string|否|节点图标的图片链接。图片、字体图标同时存在时，图片优先|

<br>
<br>

## addNode添加节点
<div class="try-code">

``` javascript
addNode(node: Node, focus = false): boolean
```
</div>
<br>

添加一个节点，返回是否成功
<br>

**参数**

node: Node实例<br>
focus：是否立刻获得焦点高亮

<br>
<br>

### 示例
<br>
<div class="try-code">

```javascript
  private ondrop(event: DragEvent) {
    event.preventDefault();
    const node = JSON.parse(event.dataTransfer.getData('Text'));
    node.rect.x = event.offsetX - ((node.width / 2) << 0);
    node.rect.y = event.offsetY - ((node.height / 2) << 0);
    this.addNode(new Node(node), true);
  }
```
</div>

<br>
<br>
<br>

## addLine添加连线
<div class="try-code">

```javascript
addLine(line,focus = false)
```
</div>
<br>

添加一个连线。
<br>

**参数**

  line:Line规范的对象<br>
  foucs:是否立刻获取焦点高亮

<br>
<br>
<br>

## open打开文件
<div class="try-code">

```javascript
open(data?:any)
```
</div>
<br>

打开文件

<font color=red face=黑体> 参数</font><br>
data-json对象或标准字符串的格式。<font color=red> 为空。表示打开新的空白文件。</font>

<br>
<br> 

## render 重绘画布
<div class="try-code">

```javascript
render();
```
</div>

<br> 
<br>

## getRect获取图形大小，画布四周空白不计算在内
<div class="try-code">

```javascript
getRect();
```
</div>
<br>

如下图，仅计算框选的区域大小，画布四周空白不计算在内。
<br>
<img src="https://cdn.nlark.com/yuque/0/2019/png/179380/1567390023525-b3b20aea-c3cd-4e73-a68c-6e1527f04d1d.png?x-oss-process=image%2Fresize%2Cw_1492" style="max-width:100%"/>

<br>
<br>

## undo撤销

<div class="try-code">

```javascript
undo(noRedo = false)
```
</div>
<br>

撤销操作。

参数：noRedo 表示不缓存历史记录，不会产生redo操作

<br>
<br>

## redo重做
<div class="try-code">

```javascript
redo()
```
</div>

<br>
<br>

## delete删除选中元素
<div class="try-code">

```javascript
delete()
```
</div>

<br>
<br>

## cut剪切
<div class="try-code">

```javascript
cut()
```

</div>

<br>
<br>

## copy复制

<div class="try-code">

```javascript
copy()
```
</div>

<br>
<br>

## paste粘贴
<div class="try-code">

```javascript
paste()
```
</div>

<br>
<br>

## toImage保存图片
<div class="try-code">

```javascript
toImage(padding:Padding = 0 ,type = 'image/png',quality = 1,callback:any = null):string
```
</div>

转换画布为图片：<br>
当callback为空时，返回图片url。参考canvas.toDataURL(type, quality)。<br>
当callback不为空时，返回空；调用callback，传入图片blob。参考canvas.toBlob(callback)

<br>

**参数**

|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|type|string|否|图片类型|
|quality|string|否|图片质量|
|callback|string|否|callback为空：<br>返回图片url。<br>参考canvas.toDataURL(type, quality)<br>callback不为空：<br>返回空；调用callback，传入图片blob。<br>参考canvas.toBlob(callback)
|padding|number&#124;string&#124;number[]|否|生成图形边距。为数组时，含义和css一致

<br>
<br>

## saveAsImage保存画布为图片并下载
<div class="try-code">

```javascript
saveAsImage(name?:string,type?:string,quality?:any)
```
</div>
<br>

**参数**

|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|name|string|否|图片另存为的文件名。默认'le5le.topology.png'|
|type|string|否|图片类型|
|quality|string|否|图片质量|
|padding<br> > 0.2.4|{<br>&nbsp;&nbsp;left:number;<br>&nbsp;&nbsp;top:number;<br>&nbsp;&nbsp;right:number;<br>&nbsp;&nbsp;bottom:number;<br>}|否|生成图形边距。默认上下左右 10px|
|thumbnail|boolean|否|默认为true。是否只保存有效显示区域，去掉。|

<br>
<br>

## lock锁定画布
<div class="try-code">

```javascript
lock(lock:Lock)
```
</div>

对画布锁定，影响整个画布

<br>

**参数**

|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|lock|number|是|0 - 未锁定，可任意编辑。<br>1 - 全部锁定，不能做任何编辑，允许选中，并高亮<br>2 - 无法做任何操作，只能响应space事件| 

<br>

## lockPens 锁定画布
<div class="try-code">

```javascript
  lockPens(pens:Pen[],lock:Lock)
```
</div>

Lock 枚举类型见上表 
<br>
<br>

## cache缓存画布数据
<div class="try-code">

```javascript
cache()
```
</div>
缓存当前数据到undo/redo队列末尾，为撤销/重做增加一个数据状态。

<br>
<br>

## overflow图像溢出检查
<div class="try-code">

```javascript
overflow()
```
</div>
计算图形大小，是否溢出画布范围。是，重新设置画布大小。

<br>
<br>

## updataProps通知有数据属性更新
<div class="try-code">

```javascript
updataProps(cache:boolean = true,pens?:Pen[])
```
</div>

<br>

**参数**

|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|cache | boolean | 否|是否新增一条历史操作记录，方便撤销重做。<br> 会消耗性能，不要做动画中使用。|
|pens|Pen[]|否|需要更新新属性的节点/连线。<br> 默认为选中的节点/连线
<font color=rede>说明：传入参数node主要自动计算node大小。连线属性修改，无需传入参数。</font>

<br>
<br>

## animate渲染（播放）动画
<div class="try-code">

```javascript
animate()
```
</div>

修改节点、连线动画属性（包括帧、播放/停止状态）后，通知重绘动画。 
<br> 

## find查找画笔
<div class="try-code">

```javascript
find(idOrTag:string,pens?:pen[])
```
</div>

根据画笔ID或者Tag查找节点。（递归遍历子节点version > 0.2.11）
<br>
<br>

## up上移一个图层
<div class="try-code">

```javascript
up(pen: Pen)
```
</div>
上移一个节点/连接图层。
<br>
<br>

## down下移一个图层
<div class="try-code">

```jacascript
down(pen:Pen) 
```
</div>
下移一个节点/连线的图层。
<br>
<br>

## top置顶
<div class="try-code">

```javascript
top(pen:Pen)
```

</div>
置地一个节点/连线到画布顶层
<br>
<br>

## bottom置底
<div class="try-code">

```javascript
bottom(pen:Pen)
```
</div>

<br>
<br>

## combine组合多个节点/连线，为一个新节点
<div class="try-code">

```javascript  
combine(pens?:Pen[],stand = false)
```
</div>
<br>

**参数**

|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|nodes|Node[]|否|要组合的节点<br>默认选中的节点
|stand|boolean|否|子节点是否能够独立选中移动|

<br>
<br>

## uncombine取消组合
<div class="try-code">

```javascript  
uncombine(node?: Node)
```
</div>

把一个组合节点取消组合，还原到以前多个节点的状态

|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|node|Node|否|要取消组合的节点<br>默认选中的第一个节点

<br>
<br>

## toComponent组合成一个复合节点
<div class="try-code">

```javascript  
toComponent(pens?: Pen[]): Node
```
</div>
<br>

**参数**

|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|nodes|Node[]|否|要组合的节点<br>默认所有节点 

<br>
<br>

## uncombine取消组合
<div class="try-code">

```javascript  
uncombine(node?:Node) 
```
</div>

<br>
<br>

## translate平移画布
<div class="try-code">

```javascript
translate(x: number, y: number)
```
</div>
<br>

**参数**

|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|x|number|是|水平移动距离 <br> >0 右移 <br> < 0 左移
|y|number|是|垂直移动距离 <br> >0 下移 <br> < 0 上移

<br>
<br>

## scale缩放画布
<div class="try-code">

```javascript
scaleTo(scale: number)
```
</div>

在原始视图基础上，缩放到指定比例。<br>

为了避免缩放过程中精度丢失，默认限制了scale大小范围：0.25 < scale < 5 之间。<br>
可以在画笔选项中设置范围。

<br>
<br>

## clearBkImg
<div class="try-code">

```javascript
clearBkImg
```
</div>
清空背景图片

<br>
<br>

## getValue 读取数据
<div class="try-code">

```javascript
getValue(idOrTag: string, attr = 'text')
```
</div>
查找data.pens中id或tags等于idOrTag的pen，并读取attr的属性值。默认读取text。

<br>
<br>

## setValue 设置数据
<div class="try-code">

```javascript
setValue(idOrTag: string, val: any, attr = 'text')
```
</div>
查找data.pens中id或tags等于idOrTag的pen，并设置attr的属性值为val。默认设置text

<br>
<br>

## showInput 显示文本输入框
<div class="try-code">

```javascript
showInput(item: Pen)
```
</div>
显示文本输入框。

<br>
<br>

## centerView 图形居中显示
<div class="try-code">

``` javascript
centerView(padding?: Padding)
```
</div>
居中显示图形。<br>
padding - 画布view区域padding值

<br>
<br>

## fitView 自适应画布可见区域大小
<div class="try-code">

``` javascript
fitView(viewPadding?: Padding)
```
</div> 
缩放图形到画布屏幕屏幕大小，并居中显示。<br>
viewPadding - 画布view区域padding值

<br>
<br>

## hasView 画布内容是否为空
<div class="try-code">

```javascript
hasView()
```
</div>

<br>
<br>

## getViewCenter 获取画布可视区域view的中点
<div class="try-code">

```javascript
getViewCenter(viewPadding?: Padding)
```
</div>
viewPadding - 画布view区域padding值

<br>
<br>

## showGrid 显示/隐藏网格
<div class="try-code">

```javascript
showGrid(show?:boolean)
```
</div>
show - 是否显示网格。可缺省，缺省根据topology.data.grid标识显示

<br>
<br>

## openSocket 打开websocket连接
<div class="try-code">

```javascript
openSocket(url?: string)
```
</div>

<br>
<br>

## closeSocket关闭websocket连接
<div class="try-code">

```javascript
closeSocket()
```
</div>

<br>
<br>

## openMqtt 打开mqtt连接
<div class="try-code">

```javascript
openMqtt(url?: string, options?: any)
```
</div>

<br>
<br>

## destroy 清理资源
<div class="try-code">

```javascript
destroy()
```
</div>

清理画布申请创建的资源。