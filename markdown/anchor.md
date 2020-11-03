# 锚点

<img src="https://cdn.nlark.com/yuque/0/2019/png/179380/1571388562844-78500243-cae3-4bc9-879e-765dfcad0850.png"></img>

用于节点间连线的点，继承于点。鼠标移到节点去显示橙色圆圈的，是显示锚点；鼠标移动到锚点自身上才显示的，是隐式锚点。

当自定义图形时，需要实现计算锚点函数，详情见 自定义图形库 。


<br>
<br>
<br>


## 限制锚点单向连线

只允许锚点作为起点或终点。

对于自定义图形库，计算锚点函数里给锚点设置mode属性即可。

```javascript

import { Node } from '../models/node';
import { Point } from '../models/point';
import { Direction } from '../models/direction';
import { AnchorMode } from '../models/status';

export function myAnchors(node: Node) {
  node.anchors.push(new Point(node.rect.x, node.rect.y + node.rect.height / 2, Direction.Left));
  node.anchors.push(new Point(node.rect.x + node.rect.width / 2, node.rect.y, Direction.Up));
  node.anchors.push(new Point(node.rect.x + node.rect.width, node.rect.y + node.rect.height / 2, Direction.Right));
  node.anchors.push(new Point(node.rect.x + node.rect.width / 2, node.rect.y + node.rect.height, Direction.Bottom));

  // 例子：锚点节点只允许in（作为终点）；上面锚点只允许out
  node.anchors[0].mode = AnchorMode.In;
  node.anchors[1].mode = AnchorMode.Out;
}

```

<br>
<br>
<br>

## 给已有图形库，重新定义并覆盖为自己的锚点函数

仅覆盖注册即可

```javscript
import { registerNode } from 'topology-core/middles';
import { rectangle } from 'topology-core/middles/nodes/rectangle';
import { myAnchors } from './myAnchors';

export function register() {
  // 把rectangle的锚点函数覆盖为自己定义的锚点函数。后面两个参数为null，表示使用缺省方法
  registerNode('rectangle', rectangle, myAnchors, null, null, true);
}
```