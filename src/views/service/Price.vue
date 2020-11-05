<template>
  <div class="price">
    <markdown-render ref="mdRender" :mdCode="price" :titleList="titleList"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import MarkdownRender from '@/components/MarkdownRender/Index.vue'
export default defineComponent({
  name: 'Price',
  components:{ MarkdownRender},
  data():{
    price:string,
    titleList:number[]}{
     return{
        price:'',
        titleList:[]
     }
  }, 
  async mounted(){
    this.titleList = [1,2];
    this.price = await this.axios.get('/markdown/price.md');
    this.$nextTick(()=>{  
       (this.$refs.mdRender as any).handleRender()
    })
  },
  methods:{
  }
});
</script>
<style lang="scss" scoped> 
.price{
  height: 100%;
}
</style>
