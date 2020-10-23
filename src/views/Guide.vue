<template>
  <div class="guide">
    <Header />
    <div v-for="(item, index) in syllabus" :key="index">
      <h1>{{ item.text }}</h1>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from '@/http';

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
  name: 'Guide',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      syllabus: []
    };
  },
  async created() {
    this.syllabus = await axios.get('/apis/syllabus.json'); 
  }
});
</script>
<style lang="scss" scoped></style>
