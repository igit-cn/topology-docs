# 选中层
选中节点或连线的图层，主要用于高亮选中节点/连线、缩放和旋转。<br>

单独分层为了把这种选中高频业务操作独立出来，局部绘画，提高性能。<br>

**class ActiveLayer**

## 成员变量列表
|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|canvas|HTMLElement|是|画布dom元素|
|nodes|Nodes[]|是|节点数据|
|lines|Line[]|是|连线数据|
|rotateCPs|Point[]|是|控制旋转的控制点<br><img data-role="image" src="https://cdn.nlark.com/yuque/0/2019/png/179380/1571644764042-956b441f-8060-4ec7-a2d0-4d1f8b07dae7.png?x-oss-process=image%2Fresize%2Cw_316" data-raw-src="https://cdn.nlark.com/yuque/0/2019/png/179380/1571644764042-956b441f-8060-4ec7-a2d0-4d1f8b07dae7.png" class="image lake-drag-image" alt="image.png" title="image.png" style="visibility: visible; width: 158px; height: 122px;">|
|sizeCPs|Point[]|是|控制大小的控制点<br><img data-role="image" src="https://cdn.nlark.com/yuque/0/2019/png/179380/1571644849205-480c4a60-3e7e-44ec-9d86-f674b93d3823.png?x-oss-process=image%2Fresize%2Cw_268" data-raw-src="https://cdn.nlark.com/yuque/0/2019/png/179380/1571644849205-480c4a60-3e7e-44ec-9d86-f674b93d3823.png" class="image lake-drag-image" alt="image.png" title="image.png" style="visibility: visible; width: 134.5px; height: 128px;">|
|rect|Rect[]|是|选中区域大小|
|rotate|number[]|否|旋转多少度|
|initialSizeCPs|Point[]||缩放前，sizeCPs的备份值|
|nodeRects|Rect[]||缩放前，各个选中节点rect的备份值|
|childrenRects|{ [key: string]: Rect }[]||缩放前，各个选中子节点rect的备份值|
|dockWatchers|Point[]||移动节点时，可以停靠的参考点|
|rotating|boolean|否|是否正在旋转|

## 成员函数列表

### constructor构造函数
**onstructor(parent: HTMLElement, public options: Options)**

**参数**

|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|parent|HTMLElement|是|父dom元素|
|options|Options|否|画布大小、颜色、字体等初始状态<br>参考：<a target="_blank" href="http://localhost:8080/canvas#%E5%8F%82%E6%95%B0">Options</a>|

### render渲染画布
render()

### resize重置画布大小
resize(width: number, height: number)

### calcControlPoints计算4个顶点的大小控制点
calcControlPoints()

### getPoints计算选中节点的顶点
getPoints() <br>
遍历计算选中节点的顶点，方便计算选中区域和控制点

### saveNodeRects缩放前，备份初始位置
saveNodeRects() <br>
备份初始位置，方便缩放、移动等功能计算最终位置。

### resizeNodes改变选中节点大小
resizeNodes(type: number, pt: Point)

**参数**

|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|type|number|是|在东西南北哪个方向改变大小。<br>0 - 向上及向左移动（北/西）<br>1 - 向上及向右移动（北/东）<br>2 - 向下及向右移动（南/东）<br>3 - 向下及向左移动（南/西）|
|pt|Point|是|鼠标位置|

### moveNodes移动节点
moveNodes(x: number, y: number)

### updateChildren父节点发送变化后，更新子节点
updateChildren(node: Node)

### updateLines节点变化后，重新计算默认连线
updateLines(nodes?: Node[])

### changeLineType连线类型改变，重新计算连线属性
changeLineType()

### offsetRotate鼠标点击旋转控制点旋转多少度
offsetRotate(angle: number)

### updateRotate旋转结束，计算最终旋转了多少度
updateRotate() 

### addNode添加节点到选中层
addNode(node: Node)

### setNodes设置选中节点
setNodes(nodes: Node[])

### hasNode是否包含节点
hasNode(node: Node)

### getDockWatchers获取移动时的停靠点
getDockWatchers()

