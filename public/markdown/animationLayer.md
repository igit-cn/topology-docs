# 动画层

动画层是播放动画的独立图层。主要是局部更新，提高性能。通常，动画节点和连线不会特别多，为了避免因少数节点/连线的动画而实时全局刷新。
<br>

**class AnimateLayer**

## 成员变量列表
|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|canvas|HTMLElement|是|画布dom元素|
|nodes|Nodes[]|是|节点数据|
|lines|Line[]|是|连线数据|
|last|number|私有成员|上一帧动画播放时间|
|timer|number||播放动画的定时器|

## 成员函数列表

### constructor构造函数
constructor(parent: HTMLElement, public options: Options)

**参数**

|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|parent|HTMLElement|是|父dom元素|
|options|Options|否|画布大小、颜色、字体等初始状态<br>参考：<a target="_blank" href="http://localhost:8080/canvas#%E5%8F%82%E6%95%B0">Options</a>|

### render渲染画布
<div class="try-code">

``` javascript
render()
```
</div>

### resize重置画布大小
<div class="try-code">

``` javascript
resize(width: number, height: number)
```
</div>

### addNode添加节点到动画层
<div class="try-code">

``` javascript
addNode(node: Node)
```
</div>

### addLine添加连线到动画层
<div class="try-code">

``` javascript
addLine(line: Line)
```
</div>

### animate播放动画
<div class="try-code">

``` javascript
animate()
```
</div>