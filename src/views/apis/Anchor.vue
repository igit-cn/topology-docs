<template>
  <div class="anchor">
    <markdown-render ref="mdRender" :mdCode="anchor" :titleList="titleList"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import MarkdownRender from '@/components/MarkdownRender/Index.vue'
export default defineComponent({
  name: 'Anchor',
  components:{ MarkdownRender},
  data():{
    anchor:string,
    titleList:number[]}{
     return{
        anchor:'',
        titleList:[]
     }
  }, 
  async mounted(){
    this.titleList = [1,2];
    this.anchor = await this.axios.get('/markdown/anchor.md');
    this.$nextTick(()=>{  
       (this.$refs.mdRender as any).handleRender()
    })
  },
  methods:{
  }
});
</script>
<style lang="scss" scoped> 
.anchor{
  height: 100%;
}
</style>
