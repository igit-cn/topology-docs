<template>
  <div class="enterprise">
    <markdown-render ref="mdRender" :mdCode="enterprise" :titleList="titleList"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MarkdownRender from '@/components/MarkdownRender/Index.vue'
export default defineComponent({
  name: 'Enterprise',
  components: {MarkdownRender},
  data():{
      enterprise:string,
      titleList:number[]
  }{
      return{
        enterprise:'',
        titleList:[]
      }
  },
  async mounted(){
    this.titleList = [1,2];
    this.enterprise = await this.axios.get('/markdown/support.md');
    this.$nextTick(()=>{
      (this.$refs.mdRender as any).handleRender()
    })
  }
});
</script>
<style lang="scss" scoped>
.enterprise{
  height: 100%;
}
</style>
