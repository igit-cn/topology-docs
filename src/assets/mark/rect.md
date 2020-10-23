# 区域Rect

```javascript
export class Rect
```
矩形区域位置信息

```javascript
// es6, npm lib
import { Rect } from 'topology-core/models/rect';

// es5, bundle.js
Le5leTopology.Rect
```

## 成员变量列表
<font color = red>所有整数类型，需要用户确保是数字类型,否则可能出错。</font>

|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|x|number|是|左上角x坐标|
|y|number|是|左上角y坐标|
|ex|number|是|右下角x坐标|
|ey|number|是|右下角y坐标|
|width|number|是|宽|
|height|number|是|高|
|center|自定义Point|是|中心点|

## 成员函数列表

### 构造函数
```javascript
constructor(public x: number, public y: number, public width: number, public height: number)
```

### 参数
|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|x|number|是|左上角x坐标|
|y|number|是|左上角y坐标|
|width|number|是|宽|
|height|number|是|高|

### clone 克隆
```javascript
clone():Rect
```

克隆当前区域，返回一个新对象


### hit判断点是否命中此区域
```javascript
hit(point: Point, padding = 0)
```

### 参数
|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|point|自定义Point|是|点坐标|
|padding|number|否|内边距，扩大命中范围| 

### hitRect判断指定区域是否在当前区域内
```javascript
hitRect(rect: Rect)
```

### hitRotate判断点是否命中旋转后的区域
```javascript
hitRotate(point: Point, rotate: number, center: Point)
```


### 参数
|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|point|自定义Point|是|点坐标|
|rotate|number|是|区域旋转角度| 
|center|自定义Point|是|旋转中心点| 

### calceCenter计算中心点
```javascript
calceCenter()
```

### toPoints转换为4个顶点坐标
```javascript
toPoints()
```

### scale缩放
```javascript
scale(scale: number, center?: Point)
```
围绕中心点（默认为区域自身中心）缩放