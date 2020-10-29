<template>
  <div class="control">
    <markdown-render ref="mdRender" :mdCode="control" :titleList="titleList"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import MarkdownRender from '@/components/MarkdownRender/Index.vue'
export default defineComponent({
  name: 'Control',
  components:{ MarkdownRender},
  data():{
    control:string,
    titleList:number[]}{
     return{
        control:'',
        titleList:[]
     }
  }, 
  async mounted(){
    this.titleList = [1,2];
    this.control = await this.axios.get('/markdown/control.md');
    this.$nextTick(()=>{  
       (this.$refs.mdRender as any).handleRender()
    })
  },
  methods:{
  }
});
</script>
<style lang="scss" scoped> 
.control{
  height: 100%;
}
</style>
