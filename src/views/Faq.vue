<template>
  <div class="faq">
    <h1 class="mb16 mt8">常见问题</h1>
    <h2>左边图形库和右边属性栏</h2>
    <p>
      核心库只有画布，左边图形库和右边属性栏属于上层业务，每个项目的需求和产品原型可能不同，需要自己调用api文档里面的接口去实现。<br />
      GitHub demo代码可能跟不上接口变化
    </p>
    <p>核心库已经支持拖曳事件，我们实现左边拖拉拽的时候，只需要：</p>
    <ol>
      <li>
        在html上定义ondragstart函数 （html拖曳详细教程请百度）
      </li>
      <li>定义ondrag函数：</li>
    </ol>
    <div class="language-html">
      <span>
        <span class="tag"
          >onDrag<span class="punctuation">(</span>
          <span class="variable">event</span>
          <span class="punctuation">) {</span> </span
        ><br />
      </span>
      <span class="comment">
        &nbsp;&nbsp;// @topology/core >= 0.2.26，解决浏览器手势插件命名冲突
        <br />
      </span>
      <span>
        &nbsp;&nbsp;<span class="variable">event.</span>
        <span class="function">dataTransfer</span>
        <span class="variable">.</span>
        <span class="function">setData</span>
        <span class="punctuation">('Topology'</span>
        <span class="punctuation">,</span>
        <span class="variable">Json</span>
        <span class="punctuation">.</span>
        <span class="function">stringify</span>
        <span class="punctuation">(</span>
        <span class="variable">josn</span>
        <span class="punctuation">)); <br />}</span>
      </span>
      <br />
      <br />
      <span class="comment"> // @topology/core &lt; 0.2.26 </span><br />

      <span>
        &nbsp;&nbsp;<span class="variable">event.</span>
        <span class="function">dataTransfer</span>
        <span class="variable">.</span>
        <span class="function">setData</span>
        <span class="punctuation">('Text'</span>
        <span class="punctuation">,</span>
        <span class="variable">Json</span>
        <span class="punctuation">.</span>
        <span class="function">stringify</span>
        <span class="punctuation">(</span>
        <span class="variable">josn</span>
        <span class="punctuation">)); <br />}</span>
      </span>
      <br />
    </div>

    <p>
      上面json格式为 <router-link to="/">API文档</router-link> 中的
      <router-link to="/">节点</router-link> 格式，例如：
    </p>

    <div class="language-html">
      <span class="punctuation">
        {
      </span>
      <br />

      &nbsp;&nbsp;<span class="variable">text</span>
      <span class="punctuation">: </span>
      <span class="javascript-attr-value">'圆角矩形'</span>
      <span class="punctuation">,</span><br />

      &nbsp;&nbsp;<span class="variable">rect</span>
      <span class="punctuation">: {</span><br />

      &nbsp;&nbsp;<span class="variable">&nbsp;&nbsp;width</span>
      <span class="punctuation">: </span>
      <span class="number">200</span>
      <span class="punctuation">,</span><br />

      &nbsp;&nbsp;<span class="variable">&nbsp;&nbsp;hight</span>
      <span class="punctuation">: </span>
      <span class="number">50</span><br />
      &nbsp;&nbsp;<span class="punctuation">},</span><br />

      &nbsp;&nbsp;<span class="variable">paddingLeft</span>
      <span class="punctuation">: </span>
      <span class="number">10</span>
      <span class="punctuation">,</span><br />

      &nbsp;&nbsp;<span class="variable">paddingRight</span>
      <span class="punctuation">: </span>
      <span class="number">10</span>
      <span class="punctuation">,</span><br />

      &nbsp;&nbsp;<span class="variable">paddingTop</span>
      <span class="punctuation">: </span>
      <span class="number">10</span>
      <span class="punctuation">,</span><br />

      &nbsp;&nbsp;<span class="variable">paddingBottom</span>
      <span class="punctuation">: </span>
      <span class="number">10</span>
      <span class="punctuation">,</span><br />

      &nbsp;&nbsp;<span class="variable">paddingRadius</span>
      <span class="punctuation">: </span>
      <span class="number">0.1</span>
      <span class="punctuation">,</span><br />

      &nbsp;&nbsp;<span class="variable">name</span>
      <span class="punctuation">: </span>
      <span class="javascript-attr-value">'rectangle'</span>
      <span class="punctuation">,<br />}</span>
    </div>

    <h1 class="mb16 mt64">阿里字体图标不显示</h1>
    <h3 class="mt8">需要index.html中加载阿里字体文件</h3>
    <p>共用地址:</p>

    <div class="language-html">
      <span class="comment">
        // 左侧工具栏图标
        <br />
      </span>

      <span class="punctuation"
        >&lt; <span class="tag">link </span>
        <span class="html-attr-name"> href</span>
        <span class="punctuation">= "</span>
        <span class="html-attr-value"
          >//at.alicdn.com/t/font_1113798_m8wtja2grda.css</span
        >
        <span class="punctuation">" </span>
        <span class="html-attr-name"> rel</span>
        <span class="punctuation">= "</span>
        <span class="html-attr-value">stylesheet</span>
        <span class="punctuation"> / > </span><br />
      </span>

      <span class="comment">
        // 右侧工具栏图标
        <br />
      </span>

      <span class="punctuation"
        >&lt; <span class="tag">link </span>
        <span class="html-attr-name"> href</span>
        <span class="punctuation">= "</span>
        <span class="html-attr-value"
          >//at.alicdn.com/t/font_1331132_5lvbai88wkb.css</span
        >
        <span class="punctuation">" </span>
        <span class="html-attr-name"> rel</span>
        <span class="punctuation">= "</span>
        <span class="html-attr-value">stylesheet</span>
        <span class="punctuation">
          / >
        </span>
      </span>
    </div>

    <p>本地文件：（源码路径：.\examples\angular\src\assets\font）</p>
    <div class="language-html">
      <span class="comment">
        // 左侧工具栏图标
        <br />
      </span>

      <span class="punctuation"
        >&lt; <span class="tag">link </span>
        <span class="html-attr-name"> href</span>
        <span class="punctuation">= "</span>
        <span class="html-attr-value">/assets/font/iconfont.css</span>
        <span class="punctuation">" </span>
        <span class="html-attr-name"> rel</span>
        <span class="punctuation">= "</span>
        <span class="html-attr-value">stylesheet</span>
        <span class="punctuation"> / > </span><br />
      </span>

      <span class="comment">
        // 右侧工具栏图标
        <br />
      </span>

      <span class="punctuation"
        >&lt; <span class="tag">link </span>
        <span class="html-attr-name"> href</span>
        <span class="punctuation">= "</span>
        <span class="html-attr-value">/assets/font/libs/iconfont.css</span>
        <span class="punctuation">" </span>
        <span class="html-attr-name"> rel</span>
        <span class="punctuation">= "</span>
        <span class="html-attr-value">stylesheet</span>
        <span class="punctuation">
          / >
        </span>
      </span>
    </div>

    <p class="danger mt16">
      由于官网用了两套阿里字体文件，为了避免冲突，需要设置不同的字体名称：
    </p>

    <img
      src="https://cdn.nlark.com/yuque/0/2020/png/179380/1584586826729-a259fb9a-ef7a-4635-bad0-a9fa8713cdcc.png?x-oss-process=image%2Fresize%2Cw_700"
      alt=""
      width="350.5px"
      height="152px"
    />

    <img
      class="mt16"
      src="https://cdn.nlark.com/yuque/0/2020/png/179380/1584586835723-ad9ce83b-c890-4403-9b72-b03c5f5edeb0.png?x-oss-process=image%2Fresize%2Cw_1080"
      alt=""
      width="540px"
      height="265px"
    />

    <p class="danger mt16" style="background:yellow">
      传给画布节点的iconFamily需要根据实际情况正确设置。
    </p>

    <p>
      在源码中的iconFamily使用的是：topology。
      开发者自己的项目，需要更加自己的字体库设置指定。
    </p>

    <h1 class="mb16 mt64">动态更新变化</h1>

    <p>&nbsp;&nbsp;&nbsp;&nbsp;canvas = new Topology(...)</p>
    <p>可以通过下面3种方式实现：</p>
    <ol>
      <li>
        通过canvas.data得到画布实时数据，遍历查找canvas.data.nodes、canvas.data.lines等，修改你需要修改的属性，然后执行
        canvas.render()
      </li>
      <li>
        通过监听消息事件，得到一个node或line，修改你需要修改的属性，然后执行
        canvas.render()
      </li>
      <li>直接canvas.open(你最新的json)</li>
    </ol>

    <p>
      参考
      <a href="https://github.com/le5le-com/topology-es5-demo"
        >https://github.com/le5le-com/topology-es5-demo</a
      >
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Faq',
  components: {}
});
</script>
<style lang="scss" scoped>
.faq {
  padding: 32px 0;
  margin: 0 60px;
  font-family: Chinese Quote, Segoe UI, Roboto, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif,
    Apple Color Emoji;
  font-weight: 700;
  color: #262626;
  h1 {
    font-size: 24px;
  }
  h2 {
    font-size: 18px;
  }
}
</style>
