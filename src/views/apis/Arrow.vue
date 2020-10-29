<template>
  <div class="arrow">
    <markdown-render ref="mdRender" :mdCode="arrow" :titleList="titleList"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import MarkdownRender from '@/components/MarkdownRender/Index.vue'
export default defineComponent({
  name: 'Arrow',
  components:{ MarkdownRender},
  data():{
    arrow:string,
    titleList:number[]}{
     return{
        arrow:'',
        titleList:[]
     }
  }, 
  async mounted(){
    this.titleList = [1,2];
    this.arrow = await this.axios.get('/markdown/arrow.md');
    this.$nextTick(()=>{  
       (this.$refs.mdRender as any).handleRender()
    })
  },
  methods:{
  }
});
</script>
<style lang="scss" scoped> 
.arrow{
  height: 100%;
}
</style>
