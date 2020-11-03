# 消息事件

当用户和topology交互时，会通过回调函数，给用户发送消息通知。

## 使用方式1
在new Topology(id || HtmlElement, options)时，给options设置一个on的回调函数即可。

<div class="try-code">

```typescript
const canvasOptions = {};
const canvas = new Topology('topology-canvas', canvasOptions);

const onMessage = (event: string, data: any) => {
  console.log(event, data);
}
canvasOptions.on = onMessage;
```
<a class="try" data-set="msg">试一试</a>
</div>

## 使用方式2
监听消息
<div class="try-code">

```typescript
topology.on('addNode', (e) => {});

topology.on('addNode addLine', (e) => {})
```
</div>

## 消息列表

|event（字符串）|data|描述|
|:---|:----|:---|
|node|Node|选中了一个节点|
|multi|{ nodes: [],lines: [] }|选中多个节点/连线|
|space||点击空白，清空选中对象|
|moveInNode|Node|鼠标移动到节点|
|moveOutNode|Node|鼠标移出节点|
|moveInLine|Line|鼠标移动到连线|
|moveOutLine|Line|鼠标移出连线|
|move|Pen[]|移动画笔|
|resizePens|Pen[]|画笔大小改变|
|rotated|Pen[]|画笔被旋转|
|dblclick|Pen|双击画笔|
|animateEnd|{type: 'node/line',data: node/line}|节点或连线的动画播放完成|
|scale|number|缩放画布|
|translate|{ x, y }|平移画布|
|moveOutParent|mouse position|按住鼠标拖曳超出父dom元素大小|
|resize|{width, height}|画布大小改变|
|locked|number|锁定画布：<br>0 - 未锁定，可任意编辑。<br>1 - 锁定连线。不能编辑连线<br>-1 - 全部锁定。不能做任何编辑|
|delete|Pen[]|删除节点/连线|
|addNode|Node|添加节点|
|addLine|Line|添加连线|