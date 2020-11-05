<template>
  <div class="works">
    <markdown-render ref="mdRender" :mdCode="works" :titleList="titleList"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import MarkdownRender from '@/components/MarkdownRender/Index.vue'
export default defineComponent({
  name: 'Works',
  components:{ MarkdownRender},
  data():{
    works:string,
    titleList:number[]}{
     return{
        works:'',
        titleList:[]
     }
  }, 
  async mounted(){
    this.titleList = [1,2];
    this.works = await this.axios.get('/markdown/works.md');
    this.$nextTick(()=>{  
       (this.$refs.mdRender as any).handleRender()
    })
  },
  methods:{
  }
});
</script>
<style lang="scss" scoped> 
.works{
  height: 100%;
}
</style>
