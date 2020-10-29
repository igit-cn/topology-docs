<template>
  <div class="msg-event">
    <markdown-render ref="mdRender" :mdCode="msgEvent" :titleList="titleList"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import MarkdownRender from '@/components/MarkdownRender/Index.vue'
export default defineComponent({
  name: 'MsgEvent',
  components:{ MarkdownRender},
  data():{
    msgEvent:string,
    titleList:number[]}{
     return{
        msgEvent:'',
        titleList:[]
     }
  }, 
  async mounted(){
    this.titleList = [1,2];
    this.msgEvent = await this.axios.get('/markdown/msgEvent.md');
    this.$nextTick(()=>{  
       (this.$refs.mdRender as any).handleRender()
    })
  },
  methods:{
  }
});
</script>
<style lang="scss" scoped> 
.msg-event{
  height: 100%;
}
</style>
