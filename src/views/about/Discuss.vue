<template>
  <div class="discuss">
    <markdown-render ref="mdRender" :mdCode="discuss" :titleList="titleList"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import MarkdownRender from '@/components/MarkdownRender/Index.vue'
export default defineComponent({
  name: 'Discuss',
  components:{ MarkdownRender},
  data():{
    discuss:string,
    titleList:number[]}{
     return{
        discuss:'',
        titleList:[]
     }
  }, 
  async mounted(){
    this.titleList = [1,2];
    this.discuss = await this.axios.get('/markdown/discuss.md');
    this.$nextTick(()=>{  
       (this.$refs.mdRender as any).handleRender()
    })
  },
  methods:{
  }
});
</script>
<style lang="scss" scoped> 
.discuss{
  height: 100%;
}
</style>
