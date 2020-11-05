<template>
  <div class="join-us">
    <markdown-render ref="mdRender" :mdCode="joinUs" :titleList="titleList"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import MarkdownRender from '@/components/MarkdownRender/Index.vue'
export default defineComponent({
  name: 'JoinUs',
  components:{ MarkdownRender},
  data():{
    joinUs:string,
    titleList:number[]}{
     return{
        joinUs:'',
        titleList:[]
     }
  }, 
  async mounted(){
    this.titleList = [2];
    this.joinUs = await this.axios.get('/markdown/joinUs.md');
    this.$nextTick(()=>{  
       (this.$refs.mdRender as any).handleRender()
    })
  },
  methods:{
  }
});
</script>
<style lang="scss" scoped> 
.join-us{
  height: 100%;
}
</style>
