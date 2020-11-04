# 封装第三方图形库

如何在le5le-topology中封装第三方图形库，如echarts、highcharts等，而不是重复造轮子。可参考源码中：libs/topology-chart-diagram

1. 加载图形库 js，并注册自定义节点
   
   ``` javascript
    import { registerNode } from 'topology-core/middles';
    import { loadJS } from 'topology-core/utils';
    import {
      echarts
    } from './echarts';

    export function register() {
      // 如果不存在echarts，则先下载
      // 否则使用用户已经加载的echarts
      if (!(window as any).echarts) {
        loadJS('https://cdn.bootcss.com/echarts/4.3.0/echarts.min.js', null, true);
      }
      
      // echarts封装图标库函数已经写好的前提下，直接调用registerNode注册函数注册好，使用更简单。
      // 参数1 - 定义图形库组件名为： 'echarts'
      // 参数2 - 绘画函数为echarts
      // 参数3，4，5 - 锚点和文字等计算采用默认计算函数
      registerNode('echarts', echarts, null, null, null);
    }
   ```

2. 实现绘图函数

``` javascript
// 创建一个原生div，用于第三方图形库的装载容器
import { createDiv } from 'topology-core/utils';

// 存放echarts原生dom节点
const echartsData: any = {};

export function echarts(ctx: CanvasRenderingContext2D, node: Node) {
  // 绘制一个底图，类似于占位符。
  rectangle(ctx, node);

  // 如果未加载图形库，直接返回
  const echarts = (window as any).echarts;
  if (!node.data || !echarts) {
    return;
  }

  // 这里，我们把echarts需要的json数据放在node.data.echarts下面
  // 如果node.data为字符串，就序列号为json对象
  if (typeof node.data === 'string') {
    node.data = JSON.parse(node.data);
  }

  // 没有echarts数据，直接返回
  if (!node.data.echarts) {
    return;
  }

  // echarts第三方图形库是元素dom元素，需要设置一个唯一的id，方便绘画引擎识别
  if (!node.elementId) {
    node.elementId = s8();
  }

  // 节点的elementLoaded用于判断第三方图形库是否第一次加载，是否需要初始化
  // 这是一个辅助变量，用户自己赋值使用或不用
  if (!node.elementLoaded) {
    // 创建一个div容器
    echartsData[node.id] = {
      div: createDiv(node)
    };
    node.elementLoaded = true;
    document.body.appendChild(echartsData[node.id].div);
    
    // 添加当前节点到div层，否则无法显示
    node.addToDiv();
    // 初始化echarts图形组件
    echartsData[node.id].chart = echarts.init(echartsData[node.id].div, node.data.echarts.theme);
    node.elementRendered = false;

    // 等待父div先渲染完成，然后resize为父容器大小，避免初始图表控件太大
    setTimeout(() => {
      echartsData[node.id].chart.resize();
    });
  }

  // 节点的elementRendered用于判断第三方图形库是否需要重绘
  // 绘画引擎需要重绘节点时，会把此属性设置为false
  if (!node.elementRendered) {
    // 初始化时，等待父div先渲染完成，避免初始图表控件太大。
    setTimeout(() => {
      echartsData[node.id].chart.setOption(node.data.echarts.option);
      echartsData[node.id].chart.resize();
      // 重绘完成，避免不必要的重复重绘
      node.elementRendered = true;
    });
  }
}
```