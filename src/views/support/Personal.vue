<template>
  <div class="personal">
    <markdown-render ref="mdRender" :mdCode="personal" :titleList="titleList"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MarkdownRender from '@/components/MarkdownRender/Index.vue'
export default defineComponent({
  name: 'Personal',
  components: {MarkdownRender},
  data():{
      personal:string,
      titleList:number[]
  }{
      return{
        personal:'',
        titleList:[]
      }
  },
  async mounted(){
    this.titleList = [1,2];
    this.personal = await this.axios.get('/markdown/personal.md');
    this.$nextTick(()=>{
      (this.$refs.mdRender as any).handleRender()
    })
  }
});
</script>
<style lang="scss" scoped>
.personal{
  height: 100%;
}
</style>
