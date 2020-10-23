<template>
  <div class="introduce">
      <!-- 介绍 -->
       <!-- <vue-markdown :key="key">{{msg}}</vue-markdown> -->
       
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
// import VueMarkdown from 'vue-markdown';
import axios from '@/http';
// import introduce from '@/assets/mark/topology.md'

export default defineComponent({
  name: 'Introduce',
  components: { 
    //   VueMarkdown
  },
  data(){
     return{
       
     }
  },
  async created() {
    // this.introduce = await axios.get('/src/assets/mark/topology.md'); 
    // console.log(this.introduce);
    
  },
  methods:{
   
  }

  

});
</script>
<style lang="scss" scoped></style>
