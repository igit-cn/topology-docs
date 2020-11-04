# 动画
<br>

动画是在**AnimateLayer**动画层，播放节点和连线时间线上的不同状态。
<br>
<br>

# 一、播放流程 

<img src="https://cdn.nlark.com/yuque/0/2019/png/179380/1571626336600-631571e7-18d8-4e0b-8f53-be43ff01b121.png" width="98%" height="auto">
<br>
<br>

## 播放动画方式一
打开画布canvas.open前，设置好json节点/连线的动画属性。需要open时，自动播放的，设置节点/连线的**animatePlay**自动播放属性即可。

## 播放动画方式二
已经打开画布canvas.open后:

1. 给节点/连线设置动画属性（**从画布拿数据canvas.data**）
2. 设置动画播放标志：
      A) 设置**animateStart=Date.now()，**表示开始播放
      B) 设置**animateStart=0**，表示停止播放
3. 调用**canvas.animate()**去播放

节点/连线都是通过**animateStart**表示是否播放动画，何时开始播放，通过Date.now() - animateStart表示正在播放第几帧。

# 二、节点动画
节点动画用帧表示，帧的数据为Node的**animateFrames**。

**animateFrames**<br>

|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|duration|number|是|当前帧播放时长|
|start|number|否|动画层添加节点**AnimateLayer.addNode**自动计算。<br>相对于整个动画时长，当前帧在什么时候播放。|
|end|number|否|动画层添加节点**AnimateLayer.addNode**自动计算。<br>相对于整个动画时长，当前帧在什么时候结束。|
|state|Node|是|当前帧，节点显示状态|
|linear|boolean|否|动画属性是否线性变化|
|initState|Node|否|当前帧播放前，初始状态,<br>自动计算|

### 如何设置节点动画
<div class="try-code">

```typescript
// 1. 设置node.animateFrames

// 复制当前节点状态
const state = Node.cloneState(node);
// 修改状态位置
state.rect.y -= 10;
state.rect.ey -= 10;
node.animateFrames.push({
  duration: 100,
  linear: true,
  state
});

// 回到初始状态
const state2 = Node.cloneState(node);
node.animateFrames.push({
  duration: 100,
  linear: true,
  state: state2
});

node.animateDuration = 0;
for (const item of node.animateFrames) {
  node.animateDuration += item.duration;
}

// 2.A 设置开始播放属性（为当前时间）
node.animateStart = Date.now();

// 2.B 停止播放
node.animateStart = 0
  
// 3. 通知画布刷新动画绘画
canvas.animate();
```
<a class="try" data-set="animation">试一试</a>
</div>

<br>
<div class="try-code">

```typescript
// 参考源码中的函数：
onChangeAnimate() {
    if (this.props.data.animateType === 'custom') {
      return;
    }

    this.props.data.animateFrames = [];
    const state = Node.cloneState(this.props.data);
    switch (this.props.data.animateType) {
      case 'upDown':
        state.rect.y -= 10;
        state.rect.ey -= 10;
        this.props.data.animateFrames.push({
          duration: 100,
          linear: true,
          state
        });
        this.props.data.animateFrames.push({
          duration: 100,
          linear: true,
          state: Node.cloneState(this.props.data)
        });
        this.props.data.animateFrames.push({
          duration: 200,
          linear: true,
          state: Node.cloneState(state)
        });
        break;
      case 'leftRight':
        state.rect.x -= 10;
        state.rect.ex -= 10;
        this.props.data.animateFrames.push({
          duration: 100,
          linear: true,
          state: Node.cloneState(state)
        });
        state.rect.x += 20;
        state.rect.ex += 20;
        this.props.data.animateFrames.push({
          duration: 80,
          linear: true,
          state: Node.cloneState(state)
        });
        state.rect.x -= 20;
        state.rect.ex -= 20;
        this.props.data.animateFrames.push({
          duration: 50,
          linear: true,
          state: Node.cloneState(state)
        });
        state.rect.x += 20;
        state.rect.ex += 20;
        this.props.data.animateFrames.push({
          duration: 30,
          linear: true,
          state: Node.cloneState(state)
        });
        this.props.data.animateFrames.push({
          duration: 300,
          linear: true,
          state: Node.cloneState(this.props.data)
        });
        break;
      case 'heart':
        state.rect.x -= 5;
        state.rect.ex += 5;
        state.rect.y -= 5;
        state.rect.ey += 5;
        state.rect.width += 5;
        state.rect.height += 10;
        this.props.data.animateFrames.push({
          duration: 100,
          linear: true,
          state
        });
        this.props.data.animateFrames.push({
          duration: 400,
          linear: true,
          state: Node.cloneState(this.props.data)
        });
        break;
      case 'success':
        state.strokeStyle = '#237804';
        this.props.data.animateFrames.push({
          duration: 100,
          linear: true,
          state
        });
        this.props.data.animateFrames.push({
          duration: 100,
          linear: true,
          state: Node.cloneState(this.props.data)
        });
        state.strokeStyle = '#237804';
        this.props.data.animateFrames.push({
          duration: 100,
          linear: true,
          state
        });
        this.props.data.animateFrames.push({
          duration: 100,
          linear: true,
          state: Node.cloneState(this.props.data)
        });
        state.strokeStyle = '#237804';
        state.fillStyle = '#389e0d22';
        this.props.data.animateFrames.push({
          duration: 3000,
          linear: true,
          state
        });
        break;
      case 'warning':
        state.strokeStyle = '#fa8c16';
        state.dash = 2;
        this.props.data.animateFrames.push({
          duration: 300,
          linear: true,
          state
        });
        state.strokeStyle = '#fa8c16';
        state.dash = 0;
        this.props.data.animateFrames.push({
          duration: 500,
          linear: true,
          state: Node.cloneState(state)
        });
        state.strokeStyle = '#fa8c16';
        state.dash = 2;
        this.props.data.animateFrames.push({
          duration: 300,
          linear: true,
          state: Node.cloneState(state)
        });
        break;
      case 'error':
        state.strokeStyle = '#cf1322';
        state.fillStyle = '#cf132222';
        this.props.data.animateFrames.push({
          duration: 100,
          linear: true,
          state
        });
        break;
      case 'show':
        state.strokeStyle = '#fa541c';
        state.rotate = -10;
        this.props.data.animateFrames.push({
          duration: 100,
          linear: true,
          state: Node.cloneState(state)
        });
        state.rotate = 10;
        this.props.data.animateFrames.push({
          duration: 100,
          linear: true,
          state: Node.cloneState(state)
        });
        state.rotate = 0;
        this.props.data.animateFrames.push({
          duration: 100,
          linear: true,
          state: Node.cloneState(state)
        });
        break;
    }

    this.onAnimateDuration();
  }

``` 
</div>

# 三、连线动画
连线动画，目前仅为从起点到终点的动态流量显示。<br><br>
**连线动画属性**

|名称|类型|是否必选|描述|
|:---|:---|:---|:---|
|animateColor|stringz|否|动画颜色|
|animateSpan|number|是|连线动画移动大小，像素|
|animateType|string|否|来自于pen。动画播放类型：<br>空（默认），<br>beads（水珠流动），<br>dot（圆点），<br>comet（彗星）|
|animatePos|number|否|动画当前位置，自动计算。|

<div class="try-code">

```typescript
// 1. 设置动画类型，默认
line.animateType = '';

// 2.A 设置开始播放属性（为当前时间）
line.animateStart = Date.now();

// 2.B 停止播放
line.animateStart = 0
  
// 3. 通知画布刷新动画绘画
canvas.animate();
```
</div>

# 四、自动播放动画
设置节点/连线的animatePlay属性即可。canvas.open的时候，就好自动播放。<br>
# 五、自动播放下一个动画
设置节点/连线的nextAnimate属性值为下一个节点/连线的tags数组中的一个值。此节点/连线动画播放结束时，<br>自动播放下一个动画<br>
# 六、动画时长
节点的动画时长由动画帧数组决定；连线的动画时长与连线长度和播放速度**animateSpan**有关。