# 节点

画布基本元素之一，继承于[画笔](https://www.yuque.com/alsmile/topology/pen)

```javascript
// es6, npm lib
import { Node } from 'topology-core/models/node';

// es5, bundle.js
Le5leTopology.Node

```

## 成员变量列表
继承于[画笔](https://www.yuque.com/alsmile/topology/pen)的成员变量这里省略，请参考[画笔](https://www.yuque.com/alsmile/topology/pen)

<font color=red>仅仅标*字段和rect里面的width、height为必须，其他字段可按需选择<br>

所有整数类型，需要用户确保是数字类型，否则可能出错。
</font>

|名称|类型|默认值|描述|
|:---|:---|:---|:---|
|name <font color=red>*</font>|string||节点名称，指用什么节点图形绘画节点形状。<br><br>例如： rectangle 指矩形，circle为圆形等<br><br>必须是有效的内置节点名，或有效的自定义（注册）节点名称。否则无法识别|
|is3D|boolean|false|是否是3D模型|
|z|number||坐标|
|zRotate|number||z轴旋转角度°|
|borderRadius|number|0|圆角。宽/高的百分比小数形式<br><1,百分比小数形式<br>>1,像素|
|bkType|number|0|背景色类型<br>0 - 纯色背景，配合fillStyle属性生效。<br>1 - 线性渐变，配合设置下面属性：<br>&nbsp;&nbsp;gradientFromColor<br>&nbsp;&nbsp;gradientToColor<br>&nbsp;&nbsp;gradientAngle<br>2 - 径向渐变，配合设置下面属性<br>&nbsp;&nbsp;gradientFromColor<br>&nbsp;&nbsp;gradientToColor<br>&nbsp;&nbsp;gradientRadius|
|gradientFromColor|string||渐变起始颜色|
|gradientToColor|string||渐变终点颜色|
|gradientAngle|number||线性渐变角度方向|
|gradientRadius|number||径向渐变半径|
|iconFamily|string||字体图标字体名称<br>（字体文件css或字体项目设置中找，不知道的，请自行教程字体图标的使用）|
|icon|string||[前提]：<br>1.<font color=red>加载字体文件</font><br>2.<font color=red>正确设置上面的iconFamily</font><br><br><font color=red>icon的值为：字体图标Unicode编码字符串</font>格式：'\ue64d'<br>icon是一个长度为1


