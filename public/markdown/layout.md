# 排版布局

排版布局来主要 @topology/layout库里面的函数。
https://github.com/le5le-com/topology/blob/master/packages/layout/src

## 方法

### layout 排版

``` javascript
layout(pens: Pen[], params: {
  maxWidth: number,     // 最大宽度
  nodeWidth?: number,    // 节点宽度
  nodeHeight?: number,   // 节点高度
  maxCount?: number,     // 水平个数
  spaceWidth?: number,   // 水平间距
  spaceHeight?: number;  // 垂直间距
})
```

**参数**
|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|pens|Pen[]|是|对哪些pen排版|
|params|object|是|排版参数|



### alignNodes 节点对齐
``` javascript
alignNodes(pens: Pen[], rect: Rect, align: string)
```

**参数**
|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|pens|Pen[]|是|需要对齐的节点|
|rect|Rect|是|顶部、底部、左边、右边等对齐的边界|
|align|string|align|<font color=red>left<br>right<br>top<br>bottom<br>center:水平居中<br>middle:垂直居中<br></font>


### spaceBetween 水平均匀分布

``` javascript
spaceBetween(pens: Pen[], width: number)
```

**参数**

|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|pens|Pen[]|是|需要对齐的节点|
|width|number|是|水平间距距离|