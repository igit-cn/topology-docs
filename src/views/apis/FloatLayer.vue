<template>
  <div class="float-layer">
    <markdown-render ref="mdRender" :mdCode="floatLayer" :titleList="titleList"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import MarkdownRender from '@/components/MarkdownRender/Index.vue'
export default defineComponent({
  name: 'FloatLayer',
  components:{ MarkdownRender},
  data():{
    floatLayer:string,
    titleList:number[]}{
     return{
        floatLayer:'',
        titleList:[]
     }
  }, 
  async mounted(){
    this.titleList = [1,2];
    this.floatLayer = await this.axios.get('/markdown/floatLayer.md');
    this.$nextTick(()=>{  
       (this.$refs.mdRender as any).handleRender()
    })
  },
  methods:{
  }
});
</script>
<style lang="scss" scoped> 
.float-layer{
  height: 100%;
}
</style>
