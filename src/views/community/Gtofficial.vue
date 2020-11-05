<template>
  <div class="gtofficial">
    <markdown-render ref="mdRender" :mdCode="gtofficial" :titleList="titleList"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import MarkdownRender from '@/components/MarkdownRender/Index.vue'
export default defineComponent({
  name: 'Gtofficial',
  components:{ MarkdownRender},
  data():{
    gtofficial:string,
    titleList:number[]}{
     return{
        gtofficial:'',
        titleList:[]
     }
  }, 
  async mounted(){
    this.titleList = [1,2];
    this.gtofficial = await this.axios.get('/markdown/gtofficial.md');
    this.$nextTick(()=>{  
       (this.$refs.mdRender as any).handleRender()
    })
  },
  methods:{
  }
});
</script>
<style lang="scss" scoped> 
.gtofficial{
  height: 100%;
}
</style>
