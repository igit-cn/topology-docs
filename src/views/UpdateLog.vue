<template>
  <div class="updateLog">
    <div class="hljs" ref="hlDiv" @click.stop="handleClick" v-html="updateLog"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from '@/http';
import marked from 'marked'
import hljs from "highlight.js";
import {Throttle} from '@/utils/utils.ts'

export default defineComponent({
  name: 'UpdateLog',
  components: {},
  data():{
      updateLog:string,
      anchorList:string[]
  }{
      return{
          updateLog:'',
            anchorList:[]

      }
  },
  async mounted(){
    this.updateLog = await axios.get('/markdown/updateLog.md'); 
    const  renderer = new marked.Renderer();
    renderer.heading = (text:string, level:number,raw:number, slugger:object)=> {
        const  escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
        if(level === 2){
          this.anchorList.push(text.substring(15,30))
        }         
        this.startThrottle(this.anchorList)
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
      this.updateLog = marked(this.updateLog)
  },
  methods:{
       startThrottle:new Throttle().use((val:string[])=>{
          (window as any).Store.set('anchorList', val);
       },300,false),
  }
});
</script>
<style lang="scss" scoped></style>
