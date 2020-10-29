<template>
  <div class="animation-layer">
    <markdown-render ref="mdRender" :mdCode="AnimationLayer" :titleList="titleList"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import MarkdownRender from '@/components/MarkdownRender/Index.vue'
export default defineComponent({
  name: 'AnimationLayer',
  components:{ MarkdownRender},
  data():{
    AnimationLayer:string,
    titleList:number[]}{
     return{
        AnimationLayer:'',
        titleList:[]
     }
  }, 
  async mounted(){
    this.titleList = [1,2];
    this.AnimationLayer = await this.axios.get('/markdown/AnimationLayer.md');
    this.$nextTick(()=>{  
       (this.$refs.mdRender as any).handleRender()
    })
  },
  methods:{
  }
});
</script>
<style lang="scss" scoped> 
.animation-layer{
  height: 100%;
}
</style>
