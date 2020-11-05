<template>
  <div class="roadmap">
    <markdown-render ref="mdRender" :mdCode="roadmap" :titleList="titleList"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import MarkdownRender from '@/components/MarkdownRender/Index.vue'
export default defineComponent({
  name: 'Roadmap',
  components:{ MarkdownRender},
  data():{
    roadmap:string,
    titleList:number[]}{
     return{
        roadmap:'',
        titleList:[]
     }
  }, 
  async mounted(){
    this.titleList = [1,2];
    this.roadmap = await this.axios.get('/markdown/roadmap.md');
    this.$nextTick(()=>{  
       (this.$refs.mdRender as any).handleRender()
    })
  },
  methods:{
  }
});
</script>
<style lang="scss" scoped> 
.roadmap{
  height: 100%;
}
</style>
