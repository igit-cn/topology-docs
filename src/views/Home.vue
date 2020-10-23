<template>
  <div class="home">
    <Header />
    <section>
      <div class="menu">
        <Menu />
      </div>
      <div class="content">
        <router-view />
      </div>

      <div class="wrapper">
        <!-- 锚点 区域 -->
        <a-anchor>
          <a-anchor-link
            href="#components-anchor-demo-basic"
            title="Basic demo"
          />
          <a-anchor-link
            href="#components-anchor-demo-static"
            title="Static demo"
          />
          <a-anchor-link
            href="#components-anchor-demo-basic"
            title="Basic demo with Target"
            target="_blank"
          />
          <a-anchor-link href="#API" title="API">
            <a-anchor-link href="#Anchor-Props" title="Anchor Props" />
            <a-anchor-link href="#Link-Props" title="Link Props" />
          </a-anchor-link>
        </a-anchor>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Menu from '@/components/Menu.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    Footer,
    Menu
  }
});
</script>
<style lang="scss" scoped>
@import '@/styles/index.scss';

.home {
  section {
    display: flex;
    .content {
      width: calc(100% - 149px - 258.5px);
    }
    .wrapper {
      width: 149px;
      position: fixed;
      height: 300px;
      background: green;
      right: 0;
      top: $head-height;
      margin-top: 20px;
    }
  }
}
</style>
