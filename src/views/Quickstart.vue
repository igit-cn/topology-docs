<template>
  <div class="quickstart">
    <markdown-render ref="mdRender" :mdCode="quickstart" :titleList="titleList"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MarkdownRender from '@/components/MarkdownRender/Index.vue'
export default defineComponent({
  name: 'Quickstart',
  components: {MarkdownRender},
  data():{
      quickstart:string,
      titleList:number[]
  }{
      return{
          quickstart:'',
          titleList:[]
      }
  },
  async mounted(){
    this.titleList = [1,2];
    this.quickstart = await this.axios.get('/markdown/quickstart.md');
    this.$nextTick(()=>{
      (this.$refs.mdRender as any).handleRender()
    })
  },
});
</script>
<style lang="scss" scoped>
.quickstart{
  height: 100%;
}
</style>
