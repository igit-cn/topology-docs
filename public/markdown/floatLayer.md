# 浮动层

浮动层是接收所有鼠标事件，显示连线锚点，以及进行鼠标连线过程的图层。

**class HoverLayer**

## 成员变量列表

|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|canvas|HTMLElement|是|画布dom元素|
|anchorRadius|number|是|锚点半径|
|line|Line|否|真正绘制的连线<br><img data-role="image" src="https://cdn.nlark.com/yuque/0/2019/png/179380/1571659683492-de824835-b764-4ed8-bdd0-fcc2cc7d37c4.png?x-oss-process=image%2Fresize%2Cw_316" data-raw-src="https://cdn.nlark.com/yuque/0/2019/png/179380/1571659683492-de824835-b764-4ed8-bdd0-fcc2cc7d37c4.png" class="image lake-drag-image" alt="image.png" title="image.png" style="visibility: visible; width: 158px; height: 95px;">|
|initLine|Line|否|编辑已有连线时，初始状态|
|node|Node|是|鼠标悬停在的节点<br><img data-role="image" src="https://cdn.nlark.com/yuque/0/2019/png/179380/1571659604120-803cc6c1-a446-4089-b89b-97b35d15b788.png" data-raw-src="https://cdn.nlark.com/yuque/0/2019/png/179380/1571659604120-803cc6c1-a446-4089-b89b-97b35d15b788.png" class="image lake-drag-image" alt="image.png" title="image.png" style="visibility: visible; width: 104px; height: 110px;">|
|hoverLineCP|Point|否|鼠标悬停在的锚点<br><img data-role="image" src="https://cdn.nlark.com/yuque/0/2019/png/179380/1571659837210-bf97f98c-2f65-4e21-b4e1-c1729ec6643a.png?x-oss-process=image%2Fresize%2Cw_262" data-raw-src="https://cdn.nlark.com/yuque/0/2019/png/179380/1571659837210-bf97f98c-2f65-4e21-b4e1-c1729ec6643a.png" class="image lake-drag-image" alt="image.png" title="image.png" style="visibility: visible; width: 131.5px; height: 121px;">|
|dockAnchor|Point|否|连线时，终点停靠的锚点<br><img data-role="image" src="https://cdn.nlark.com/yuque/0/2019/png/179380/1571659869443-d23d6b0e-0625-4c8d-97e8-6c48c6f6374f.png?x-oss-process=image%2Fresize%2Cw_316" data-raw-src="https://cdn.nlark.com/yuque/0/2019/png/179380/1571659869443-d23d6b0e-0625-4c8d-97e8-6c48c6f6374f.png" class="image lake-drag-image" alt="image.png" title="image.png" style="visibility: visible; width: 158px; height: 76px;">|
|dockLineX|number|否|移动节点时，推荐的停靠坐标<br><img data-role="image" src="https://cdn.nlark.com/yuque/0/2019/png/179380/1571660053016-62c568e4-bb73-41cf-9b75-5b090cf73046.png?x-oss-process=image%2Fresize%2Cw_316" data-raw-src="https://cdn.nlark.com/yuque/0/2019/png/179380/1571660053016-62c568e4-bb73-41cf-9b75-5b090cf73046.png" class="image lake-drag-image" alt="image.png" title="image.png" style="visibility: visible; width: 158px; height: 181px;">|
|dockLineY|number|否|移动节点时，推荐的停靠坐标|

## 成员函数列表
### constructor构造函数

<div class="try-code">

```javascript
constructor(parent: HTMLElement, public options: Options)
```
</div>
<br>

**参数**

|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|parent|HTMLElement|是|父dom元素|
|options|Options|否|画布大小、颜色、字体等初始状态。<br>参考：<a target="_blank" href="/canvas">Options</a>|

### render渲染画布
<div class="try-code">

```javascript
render()
```
</div>
<br>
<br>

### resize重置画布大小
<div class="try-code">

```javascript
resize(width: number, height: number)
```
</div>
<br>
<br>

### setLine开始绘画新的连线，设置起点和连线类型
<div class="try-code">

```javascript
setLine(from: Point, fromArrow = '', lineName = 'curve')
```
</div>
<br>

**参数**

|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|from|Point|是|起点|
|fromArrow|string|否|起点箭头类型<br>箭头类型参考：<a target="_blank" href="/line">箭头</a>|
|lineName|string|否|连线类型，参考： <a target="_blank" href="/line">连线</a>|

### lineTo设置连线终点
<div class="try-code">

```javascript
lineTo(to: Point, toArrow: string = 'triangleSolid')
```
</div>
<br>

**参数**

|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|to|Point|是|起点|
|toArrow|string|否|终点箭头类型<br>箭头类型参考：<a target="_blank" href="/line">箭头</a>|

### lineFrom修改连线起点
<div class="try-code">

```javascript
lineFrom(from: Point)
```
</div>
<br>
<br>

### lineMove平移连线
<div class="try-code">

```javascript
lineMove(pt: Point, initPos: { x: number; y: number })
```
</div>
<br>

**参数**

|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|pt|Point|是|鼠标位置|
|initPos|{ x: number; y: number }|是|移动前，鼠标位置|


