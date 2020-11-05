<template>
  <div class="team">
    <markdown-render ref="mdRender" :mdCode="team" :titleList="titleList"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import MarkdownRender from '@/components/MarkdownRender/Index.vue'
export default defineComponent({
  name: 'Team',
  components:{ MarkdownRender},
  data():{
    team:string,
    titleList:number[]}{
     return{
        team:'',
        titleList:[]
     }
  }, 
  async mounted(){
    this.titleList = [1,2];
    this.team = await this.axios.get('/markdown/team.md');
    this.$nextTick(()=>{  
       (this.$refs.mdRender as any).handleRender()
    })
  },
  methods:{
  }
});
</script>
<style lang="scss" scoped> 
.team{
  height: 100%;
}
</style>
