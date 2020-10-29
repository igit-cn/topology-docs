<template>
  <div class="introduce">
    <markdown-render ref="mdRender" :mdCode="introduce" :titleList="titleList"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import MarkdownRender from '@/components/MarkdownRender/Index.vue'
export default defineComponent({
  name: 'Introduce',
  components:{ MarkdownRender},
  data():{
    introduce:string,
    titleList:number[]}{
     return{
        introduce:'',
        titleList:[]
     }
  },
  async mounted(){
    this.titleList = [1,2];
    this.introduce = await this.axios.get('/markdown/topology.md');
    this.$nextTick(()=>{
      (this.$refs.mdRender as any).handleRender()
    })
  }
});
</script>
<style lang="scss" scoped> 
.introduce{
  height: 100%;
}
</style>
