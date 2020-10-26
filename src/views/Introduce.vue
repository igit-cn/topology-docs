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
import typescript from 'highlight.js/lib/languages/javascript';
// import 'highlight.js/styles/hybrid.css';
// import 'highlight.js/styles/monokai-sublime.css';
export default defineComponent({
  name: 'Introduce',
  components: {
  },
  data():{
    anchorList:string[];
    introduce:string}{
     return{
        introduce:'',
        anchorList:[]
     }
  },
  async created(){
    // this.introduce = await axios.get('/markdown/demo.md'); 
    // console.log(222,this.introduce);
  },
  async mounted(){
    this.introduce = await axios.get('/markdown/topology.md'); 
    const  renderer = new marked.Renderer();
    renderer.heading = (text:string, level:number,raw:number, slugger:object)=> {
        const  escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
        console.log(111,this.anchorList,)
        if(level === 1 || level === 2){
          this.anchorList.push(text)
        }
        (window as any).Store.set('anchorList', this.anchorList);
        return '<h' + level + ' id='+text+'><a name="' +
                    escapedText +
                    '" class="anchor" href="#' +
                    text +
                    '"><span class="header-link"></span></a>' +
                      text + '</h' + level + '>';
    };
    marked.setOptions({
          renderer,
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
