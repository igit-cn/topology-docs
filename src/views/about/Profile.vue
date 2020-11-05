<template>
  <div class="profile">
    <markdown-render ref="mdRender" :mdCode="profile" :titleList="titleList"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import MarkdownRender from '@/components/MarkdownRender/Index.vue'
export default defineComponent({
  name: 'Profile',
  components:{ MarkdownRender},
  data():{
    profile:string,
    titleList:number[]}{
     return{
        profile:'',
        titleList:[]
     }
  }, 
  async mounted(){
    this.titleList = [1,2];
    this.profile = await this.axios.get('/markdown/profile.md');
    this.$nextTick(()=>{  
       (this.$refs.mdRender as any).handleRender()
    })
  },
  methods:{
  }
});
</script>
<style lang="scss" scoped> 
.profile{
  height: 100%;
}
</style>
