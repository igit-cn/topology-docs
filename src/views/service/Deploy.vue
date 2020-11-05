<template>
  <div class="deploy">
    <markdown-render ref="mdRender" :mdCode="deploy" :titleList="titleList"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import MarkdownRender from '@/components/MarkdownRender/Index.vue'
export default defineComponent({
  name: 'Deploy',
  components:{ MarkdownRender},
  data():{
    deploy:string,
    titleList:number[]}{
     return{
        deploy:'',
        titleList:[]
     }
  }, 
  async mounted(){
    this.titleList = [1,2];
    this.deploy = await this.axios.get('/markdown/deploy.md');
    this.$nextTick(()=>{  
       (this.$refs.mdRender as any).handleRender()
    })
  },
  methods:{
  }
});
</script>
<style lang="scss" scoped> 
.deploy{
  height: 100%;
}
</style>
