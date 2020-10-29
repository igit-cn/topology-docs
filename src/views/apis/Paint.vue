<template>
  <div class="paint">
    <markdown-render ref="mdRender" :mdCode="paint" :titleList="titleList"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import MarkdownRender from '@/components/MarkdownRender/Index.vue'
export default defineComponent({
  name: 'Paint',
  components:{ MarkdownRender},
  data():{
    paint:string,
    titleList:number[]}{
     return{
        paint:'',
        titleList:[]
     }
  }, 
  async mounted(){
    this.titleList = [1,2];
    this.paint = await this.axios.get('/markdown/pens.md');
    this.$nextTick(()=>{  
       (this.$refs.mdRender as any).handleRender()
    })
  },
  methods:{
  }
});
</script>
<style lang="scss" scoped> 
.paint{
  height: 100%;
}
</style>
