<template>
  <div class="quickstart">
    <div class="hljs" ref="hlDiv" @click.stop="handleClick" v-html="quickstart"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from '@/http';
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/xcode.css';

export default defineComponent({
  name: 'Quickstart',
  components: {},
  data():{
      quickstart:string,
      anchorList:string[]
  }{
      return{
          quickstart:'',
          anchorList:[]

      }
  },
  async mounted(){
    this.quickstart = await axios.get('/markdown/quickstart.md'); 
    const  renderer = new marked.Renderer();
    renderer.heading = (text:string, level:number,raw:number, slugger:object)=> {
        const  escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
        console.log(111,this.anchorList,)
        if(level === 2 || level === 1){
          this.anchorList.push()
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
      this.quickstart = marked(this.quickstart)
  },
});
</script>
<style lang="scss" scoped></style>
