<template>
  <div class="animation">
    <markdown-render ref="mdRender" :mdCode="animation" :titleList="titleList"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import MarkdownRender from '@/components/MarkdownRender/Index.vue'
export default defineComponent({
  name: 'Animation',
  components:{ MarkdownRender},
  data():{
    animation:string,
    titleList:number[]}{
     return{
        animation:'',
        titleList:[]
     }
  }, 
  async mounted(){
    this.titleList = [1,2];
    this.animation = await this.axios.get('/markdown/animation.md');
    this.$nextTick(()=>{  
       (this.$refs.mdRender as any).handleRender()
    })
  },
  methods:{
  }
});
</script>
<style lang="scss" scoped> 
.animation{
  height: 100%;
}
</style>
