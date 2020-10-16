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
.home {
  section {
    display: flex;
  }
}
</style>
