<template>
  <div class="line">
    <markdown-render ref="mdRender" :mdCode="line" :titleList="titleList"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import MarkdownRender from '@/components/MarkdownRender/Index.vue'
export default defineComponent({
  name: 'Line',
  components:{ MarkdownRender},
  data():{
    line:string,
    titleList:number[]}{
     return{
        line:'',
        titleList:[]
     }
  }, 
  async mounted(){
    this.titleList = [1,2];
    this.line = await this.axios.get('/markdown/line.md');
    this.$nextTick(()=>{  
       (this.$refs.mdRender as any).handleRender()
    })
  },
  methods:{
  }
});
</script>
<style lang="scss" scoped> 
.line{
  height: 100%;
}
</style>
