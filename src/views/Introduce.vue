<template>
  <div class="introduce">
    <div class="hljs" ref="hlDiv" v-html="introduce"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import axios from '@/http';
import marked from 'marked'
import hljs from "highlight.js";
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/monokai-sublime.css';
export default defineComponent({
  name: 'Introduce',
  components: { 
  },
  data(){
     return{
        introduce:''
     }
  },
  async created(){
    // this.introduce = await axios.get('/markdown/demo.md'); 
    // console.log(222,this.introduce);
  },
  async mounted(){
    this.introduce = await axios.get('/markdown/demo.md'); 
    marked.setOptions({
          renderer: new marked.Renderer(),
          highlight: function(code:any) {
            return hljs.highlightAuto(code).value;
          },
          pedantic: false,
          gfm: true,
          tables: true,
          breaks: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
          xhtml: false
        }
      );
      this.introduce = marked(this.introduce)
  },
  methods:{
  }
});
</script>
<style lang="scss" scoped></style>
