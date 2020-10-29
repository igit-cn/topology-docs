<template>
  <div class="canvas">
    <markdown-render ref="mdRender" :mdCode="canvas" :titleList="titleList"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import MarkdownRender from '@/components/MarkdownRender/Index.vue'
export default defineComponent({
  name: 'Canvas',
  components:{ MarkdownRender},
  data():{
    canvas:string,
    titleList:number[]}{
     return{
        canvas:'',
        titleList:[]
     }
  }, 
  async mounted(){
    this.titleList = [1,2];
    this.canvas = await this.axios.get('/markdown/canvas.md');
    this.$nextTick(()=>{  
       (this.$refs.mdRender as any).handleRender()
    })
  },
  methods:{
  }
});
</script>
<style lang="scss" scoped> 
.canvas{
  height: 100%;
}
</style>
