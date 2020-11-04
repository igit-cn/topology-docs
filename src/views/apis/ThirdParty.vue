<template>
  <div class="third-party">
    <markdown-render ref="mdRender" :mdCode="introduce" :titleList="titleList"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import MarkdownRender from '@/components/MarkdownRender/Index.vue'
export default defineComponent({
  name: 'ThirdParty',
  components:{ MarkdownRender},
  data():{
    introduce:string,
    titleList:number[]}{
     return{
        introduce:'',
        titleList:[]
     }
  }, 
  async mounted(){
    this.titleList = [1,2];
    this.introduce = await this.axios.get('/markdown/thirdParty.md');
    this.$nextTick(()=>{  
       (this.$refs.mdRender as any).handleRender()
    })
  },
  methods:{
  }
});
</script>
<style lang="scss" scoped> 
.third-party{
  height: 100%;
}
</style>
