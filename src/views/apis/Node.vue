<template>
  <div class="node">
    <markdown-render ref="mdRender" :mdCode="node" :titleList="titleList"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import MarkdownRender from '@/components/MarkdownRender/Index.vue'
export default defineComponent({
  name: 'Node',
  components:{ MarkdownRender},
  data():{
    node:string,
    titleList:number[]}{
     return{
        node:'',
        titleList:[]
     }
  }, 
  async mounted(){
    this.titleList = [2,3];
    this.node = await this.axios.get('/markdown/node.md');
    this.$nextTick(()=>{  
       (this.$refs.mdRender as any).handleRender()
    })
  },
  methods:{
  }
});
</script>
<style lang="scss" scoped> 
.node{
  height: 100%;
}
</style>
