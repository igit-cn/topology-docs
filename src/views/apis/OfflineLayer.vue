<template>
  <div class="offline-layer">
    <markdown-render ref="mdRender" :mdCode="offlineLayer" :titleList="titleList"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import MarkdownRender from '@/components/MarkdownRender/Index.vue'
export default defineComponent({
  name: 'OfflineLayer',
  components:{ MarkdownRender},
  data():{
    offlineLayer:string,
    titleList:number[]}{
     return{
        offlineLayer:'',
        titleList:[]
     }
  }, 
  async mounted(){
    this.titleList = [1,2];
    this.offlineLayer = await this.axios.get('/markdown/offlineLayer.md');
    this.$nextTick(()=>{  
       (this.$refs.mdRender as any).handleRender()
    })
  },
  methods:{
  }
});
</script>
<style lang="scss" scoped> 
.offline-layer{
  height: 100%;
}
</style>
