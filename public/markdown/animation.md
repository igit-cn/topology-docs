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


<table border="1" class="table table-bordered table-striped table-condensed">
    <tr>
        <td>北京</td>
	<td>雾霾</td>
    </tr>
    <tr>
        <td>深圳</td>
	<td>暴雨</td>
    </tr>
</table>