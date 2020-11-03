# 常见问题

## 左边图形库和右边属性栏
核心库只有画布，左边图形库和右边属性栏属于上层业务，每个项目的需求和产品原型可能不同，需要自己调用api文档里面的接口去实现。

GitHub demo代码可能跟不上接口变化

<font color=red>
topology-vue和topology-react目前只是使用示例，精力有限，暂不完整，旨在告诉大家怎么使用。源码中的angular是最完整的版本。
</font>

核心库已经支持拖曳事件，我们实现左边拖拉拽的时候，只需要:<br>
 1. 在html上定义ondragstart函数 （html拖曳详细教程请百度）
 2. 定义ondrag函数：

 ```javascript
 onDrag(event) {
  // @topology/core >= 0.2.26，解决浏览器手势插件命名冲突
  event.dataTransfer.setData('Topology', JSON.stringify(json));
}

// @topology/core < 0.2.26
event.dataTransfer.setData('Text', JSON.stringify(json));
 ```


 上面json格式为 [API](https://www.yuque.com/alsmile/topology/design)文档 中的[节点](https://www.yuque.com/alsmile/topology/node)格式，例如：

 ```javascript
 {
  text: '圆角矩形',
  rect: {
    width: 200,
    height: 50
  },
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 10,
  paddingBottom: 10,
  borderRadius: 0.1,
  name: 'rectangle'
}
 ```

 <br>
 <br>
 <br>

 ## 阿里字体图标不显示
 需要index.html中加载阿里字体文件

 公网地址:
 ``` javascript
 // 左侧工具栏图标
<link href="//at.alicdn.com/t/font_1113798_m8wtja2grda.css" rel="stylesheet" />
// 右侧图形库图标
<link href="//at.alicdn.com/t/font_1331132_5lvbai88wkb.css" rel="stylesheet" />
 ```
 <font color=red>由于官网用了两套阿里字体文件，为了避免冲突，需要设置不同的字体名称：</font>
 ![](https://cdn.nlark.com/yuque/0/2020/png/179380/1584586826729-a259fb9a-ef7a-4635-bad0-a9fa8713cdcc.png?x-oss-process=image%2Fresize%2Cw_700)

<br>
<br>
<br>

<img src="https://cdn.nlark.com/yuque/0/2020/png/179380/1584586835723-ad9ce83b-c890-4403-9b72-b03c5f5edeb0.png?x-oss-process=image%2Fresize%2Cw_1492" style="max-width:80%">

 <font color=red>传给画布节点的iconFamily需要根据实际情况正确设置。</font>
 在源码中的iconFamily使用的是：topology。 开发者自己的项目，需要更加自己的字体库设置指定。

 <br>
 <br>
 <br>

 ## 动态更新变化
 ``` javascript
 canvas = new Topology(...)
 ```

 可以通过下面3种方式实现：
 1. 通过canvas.data得到画布实时数据，遍历查找canvas.data.nodes、canvas.data.lines等，修改你需要修改的属性，然后执行 canvas.render()
 2. 通过监听消息事件，得到一个node或line，修改你需要修改的属性，然后执行 canvas.render()
 3. 直接canvas.open(你最新的json)

参考： [https://github.com/le5le-com/topology-es5-demo](https://github.com/le5le-com/topology-es5-demo)

```javascript

fetch("/data.json", function(text) {
  var data = JSON.parse(text);
  // 锁定画布，禁止编辑
  data.locked = 1;
  console.log(data);
  canvas.open(data);

  // 动画演示示例
  var cnt = 0;
  var colors = ["red", "blue", "yellow"];
  setInterval(() => {
    ++cnt;
    var nodes = [];
    getNode(nodes, canvas.data.nodes, "testImage");
    for (var i = 0; i < nodes.length; i++) {
      if (cnt % 2) {
        nodes[i].image = "/image/s01g_374d46e9c71c823a.png";
      } else {
        nodes[i].image = "/image/g02__bdfcbc32cfc689bc.png";
      }
    }

    nodes = [];
    getNode(nodes, canvas.data.nodes, "testNum");
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].text = +nodes[i].text + 1 + "";
      nodes[i].font.color = colors[cnt % 3];
    }
    canvas.render();
  }, 2000);
  // end.
});
```
 <br>
 <br>
 <br>

## 显示完整图像

默认画布以100%比例显示图像，超出部分，可以给父元素设置overflow:auto滚动条属性。

如果要显示完整图像，则需要缩放显示比例 ：

``` javascript
canvas = new Topology(...);
                      
// 1. 获取有效图像区域
const rect = canvas.getRect();

// 2. 根据rect自行判断图像是否超出，或空白太多。

// 3. 平移或缩放画布内容
canvas.translate(x,y);
canvas.scaleTo(.5);
```
 <br>
 <br>
 <br>


## 修改属性后，没有立刻生效
通常情况，节点或连线属性变化后，需要执行：
```javascript
// 节点或连线属性变化后, 执行画布重绘
canvas.render()
```

涉及到node/line的位置、控制点等的修改，需要执行：
```javascript
// 为了稳妥，可以统一使用此函数。
canvas.updateProps(参数);

// 此函数会只计算有关位置、点等属性
```
参考文档，[updateProps](https://www.yuque.com/alsmile/topology/canvas#v4OFi)

 <br>
 <br>
 <br>

## 修改连线的name：直线为曲线报错
需要计算连线控制点：line.calcControlPoints();

 <br>
 <br>
 <br>

## 子节点选择
shift + 单击： 单选，可用于选择子节点/连线。<br>
ctrl + 单击： 多选。<br>
ctrl + 单击鼠标按下不放（移动）：移动子节点。

 <br>
 <br>
 <br>

## 新版本节点修改
新增了 square  节点，代表原来的rectangle；原来的rectangle 为更直观的长方形。

 <br>
 <br>
 <br>

## 背景网格
为了避免截图出现网格，目前需要自己实现，在父dom加一个svg（网上很多）就可以了。

参考：https://github.com/le5le-com/topology/blob/master/examples/angular/src/app/workspace/workspace.component.html

 <br>
 <br>
 <br>
 
## 节点特效切换后，为什么不播放了
因为动画帧被清理了，需要重计算，执行node.initAnimateProps()即可。
