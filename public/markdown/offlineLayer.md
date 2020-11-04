# 离屏层
绘画画布所有数据的绘画层。

**class Canvas**
## 成员变量列表

|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|canvas|HTMLElement|是|画布dom元素|
|nodes|Nodes[]|是|节点数据|
|lines|Line[]|是|连线数据|

## 成员函数列表
### constructor构造函数
**constructor(public options: Options = {})**

**参数**

|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|options|Options |否|画布大小、颜色、字体等初始状态<br>参考：<a target="_blank" href="http://localhost:8080/canvas#%E5%8F%82%E6%95%B0">Options</a>|

### render渲染画布
<div class="try-code">

```javascript
render()
```
</div>

### resize重置画布大小
<div class="try-code">

```javascript
resize(width: number, height: number)
```
</div>