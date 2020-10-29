<template>
  <div class="support">
    <markdown-render ref="mdRender" :mdCode="support" :titleList="titleList"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MarkdownRender from '@/components/MarkdownRender/Index.vue'
export default defineComponent({
  name: 'Support',
  components: {MarkdownRender},
  data():{
      support:string,
      titleList:number[]
  }{
      return{
        support:'',
        titleList:[]
      }
  },
  async mounted(){
    this.titleList = [1,2];
    this.support = await this.axios.get('/markdown/support.md');
    this.$nextTick(()=>{
      (this.$refs.mdRender as any).handleRender()
    })
  }
});
</script>
<style lang="scss" scoped>
.support{
  height: 100%;
}
</style>
